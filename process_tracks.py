import os
import glob
import shutil
import re
import json
import mutagen
from mutagen.easyid3 import EasyID3
from mutagen.mp3 import MP3

os.makedirs('frontend/public/audio', exist_ok=True)

categories_config = [
    {
        "key": "90s",
        "folder": "old bangers/old 90s",
        "prefix": "90s",
        "default_artist": "90s Legend",
        "default_album": "Golden Era 90s"
    },
    {
        "key": "rajasthani",
        "folder": "old bangers/Rajasthani",
        "prefix": "rajasthani",
        "default_artist": "Folk Legend",
        "default_album": "Rajasthani Heritage"
    },
    {
        "key": "nostalgic",
        "folder": "old bangers/Nostalgic",
        "prefix": "nostalgic",
        "default_artist": "Bollywood Classic",
        "default_album": "Timeless Memories"
    }
]

def clean_text(s):
    if not s:
        return ""
    s = s.strip()
    return s

def clean_artist(artist, default_artist):
    if not artist:
        return default_artist
    artist = re.sub(r',?\s*Super Cassettes Industries.*', '', artist, flags=re.IGNORECASE)
    artist = re.sub(r',?\s*Tips Music.*', '', artist, flags=re.IGNORECASE)
    artist = re.sub(r',?\s*Venus Worldwide.*', '', artist, flags=re.IGNORECASE)
    artist = re.sub(r',?\s*T-Series.*', '', artist, flags=re.IGNORECASE)
    artist = re.sub(r',?\s*Zee Music.*', '', artist, flags=re.IGNORECASE)
    artist = re.sub(r',?\s*Sony Music.*', '', artist, flags=re.IGNORECASE)
    artist = artist.strip(' ,-–')
    return artist if artist else default_artist

def clean_album(album, default_album):
    if not album:
        return default_album
    album = re.sub(r'\(Original Motion Picture Soundtrack\)', '', album, flags=re.IGNORECASE)
    album = re.sub(r'\[Original Motion Picture Soundtrack\]', '', album, flags=re.IGNORECASE)
    album = re.sub(r'_ Soundtrack Version', '', album, flags=re.IGNORECASE)
    album = re.sub(r'- Soundtrack Version', '', album, flags=re.IGNORECASE)
    album = album.strip(' ,-–')
    return album if album else default_album

def clean_title(title, filename):
    if not title:
        title = filename
    title = title.replace('_spotdown.org.mp3', '').replace('_spotdown.org', '').replace('.mp3', '')
    title = re.sub(r'\s*-\s*From\s+["\'][^"\']+["\']', '', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*\(From\s+["\'][^"\']+["\']\)', '', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*\(From\s+_[^_]+_\)', '', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*-\s*From\s+_[^_]+_', '', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*-\s*From\s+.*$', '', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*-\s*Male Version', ' (Male)', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*-\s*Female Version', ' (Female)', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*-\s*Jhankar Beats', ' (Jhankar)', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*\(With Jhankar Beats\)', ' (Jhankar)', title, flags=re.IGNORECASE)
    title = title.strip(' ,-–_')
    return title

all_categories_data = {}

for cat_cfg in categories_config:
    cat_key = cat_cfg["key"]
    folder = cat_cfg["folder"]
    prefix = cat_cfg["prefix"]
    default_artist = cat_cfg["default_artist"]
    default_album = cat_cfg["default_album"]

    raw_files = sorted(glob.glob(os.path.join(folder, '*.mp3')))
    print(f"Processing category '{cat_key}' from '{folder}' ({len(raw_files)} files)...")

    seen_titles = set()
    cat_tracks = []
    copied = 0

    for fp in raw_files:
        fn = os.path.basename(fp)
        # Skip duplicate numbered downloads
        if ' (1).mp3' in fn or ' (2).mp3' in fn or ' (3).mp3' in fn:
            continue

        try:
            audio = MP3(fp, ID3=EasyID3)
            length = int(audio.info.length)
            title = audio.get('title', [''])[0].strip()
            artist = audio.get('artist', [''])[0].strip()
            album = audio.get('album', [''])[0].strip()
        except Exception as e:
            length = 0
            title = ""
            artist = ""
            album = ""

        title = clean_title(title, fn)
        artist = clean_artist(artist, default_artist)
        album = clean_album(album, default_album)

        # Normalize title for deduplication
        norm = re.sub(r'[^a-zA-Z0-9]', '', title).lower()
        if norm in seen_titles:
            print(f"  Skipping duplicate title: {title} ({fn})")
            continue
        seen_titles.add(norm)

        copied += 1
        safe_name = f"{prefix}_{copied:03d}.mp3"
        dest_path = os.path.join('frontend/public/audio', safe_name)
        
        # Copy file if not already existing with same size
        if not os.path.exists(dest_path) or os.path.getsize(dest_path) != os.path.getsize(fp):
            shutil.copy2(fp, dest_path)

        cat_tracks.append({
            "id": f"{prefix}_{copied}",
            "title": title,
            "artist": artist,
            "album": album,
            "duration": length,
            "url": f"/audio/{safe_name}",
            "category": cat_key
        })

    print(f"  Done: {copied} valid unique tracks for '{cat_key}'")
    all_categories_data[cat_key] = cat_tracks

with open('all_processed_tracks.json', 'w', encoding='utf-8') as f:
    json.dump(all_categories_data, f, indent=2, ensure_ascii=False)

print("\n--- Summary ---")
for k, v in all_categories_data.items():
    print(f"{k}: {len(v)} tracks")
print("Total tracks:", sum(len(v) for v in all_categories_data.values()))
