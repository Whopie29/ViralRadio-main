import os
import glob
import re
import json
import mutagen
from mutagen.easyid3 import EasyID3
from mutagen.mp3 import MP3

categories_config = [
    {
        "key": "90s",
        "folder": "old bangers/old 90s",
        "cloud_folder": "old 90s",
        "prefix": "90s",
        "default_artist": "90s Legend",
        "default_album": "Golden Era 90s"
    },
    {
        "key": "nostalgic",
        "folder": "old bangers/Nostalgic",
        "cloud_folder": "Nostalgic",
        "prefix": "nostalgic",
        "default_artist": "Bollywood Classic",
        "default_album": "Timeless Memories"
    },
    {
        "key": "rajasthani",
        "folder": "old bangers/Rajasthani",
        "cloud_folder": "Rajasthani",
        "prefix": "rajasthani",
        "default_artist": "Folk Legend",
        "default_album": "Rajasthani Heritage"
    },
    {
        "key": "english",
        "folder": "old bangers/English",
        "cloud_folder": "English",
        "prefix": "eng",
        "default_artist": "Retro Artist",
        "default_album": "Retro Roadtrip"
    },
    {
        "key": "hitlist",
        "folder": "old bangers/Hitlist",
        "cloud_folder": "Hitlist",
        "prefix": "hit",
        "default_artist": "Top Hit",
        "default_album": "Highway Hits"
    },
    {
        "key": "punjabi",
        "folder": "old bangers/Punjabi",
        "cloud_folder": "Punjabi",
        "prefix": "punjabi",
        "default_artist": "Punjabi Artist",
        "default_album": "Punjabi Bangers"
    },
    {
        "key": "haryanvi",
        "folder": "old bangers/Haryanvi",
        "cloud_folder": "Haryanvi",
        "prefix": "haryanvi",
        "default_artist": "Haryanvi Artist",
        "default_album": "Haryanvi Hits"
    },
    {
        "key": "pahadi",
        "folder": "old bangers/Pahadi",
        "cloud_folder": "Pahadi",
        "prefix": "pahadi",
        "default_artist": "Pahadi Folk",
        "default_album": "Pahadi Safar"
    }
]

def clean_artist(artist, default_artist):
    if not artist:
        return default_artist
    artist = artist.replace('\ufffd', '-').replace('\xef\xbf\xbd', '-')
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
    album = album.replace('\ufffd', '-').replace('\xef\xbf\xbd', '-')
    album = re.sub(r'\(Original Motion Picture Soundtrack\)', '', album, flags=re.IGNORECASE)
    album = re.sub(r'\[Original Motion Picture Soundtrack\]', '', album, flags=re.IGNORECASE)
    album = re.sub(r'_ Soundtrack Version', '', album, flags=re.IGNORECASE)
    album = re.sub(r'- Soundtrack Version', '', album, flags=re.IGNORECASE)
    album = album.strip(' ,-–')
    return album if album else default_album

def clean_title(title, filename):
    if not title:
        title = filename
    title = title.replace('\ufffd', '-').replace('\xef\xbf\xbd', '-')
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

def main():
    R2_BASE = "https://pub-26b22cb6c38140bf8acff92193e34581.r2.dev/old_bangers"
    all_categories_data = {}
    total_renamed = 0
    total_removed = 0

    for cat in categories_config:
        cat_key = cat["key"]
        folder = cat["folder"]
        prefix = cat["prefix"]
        cloud_folder = cat["cloud_folder"]
        default_artist = cat["default_artist"]
        default_album = cat["default_album"]

        if not os.path.exists(folder):
            print(f"Folder not found: {folder}")
            continue

        raw_files = sorted(glob.glob(os.path.join(folder, '*.mp3')))
        print(f"\nProcessing '{cat_key}' in '{folder}' ({len(raw_files)} files)...")

        seen_titles = set()
        cat_tracks = []
        valid_items = []
        to_delete = []

        for fp in raw_files:
            fn = os.path.basename(fp)
            if ' (1).mp3' in fn or ' (2).mp3' in fn or ' (3).mp3' in fn:
                to_delete.append(fp)
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

            norm = re.sub(r'[^a-zA-Z0-9]', '', title).lower()
            if norm in seen_titles:
                to_delete.append(fp)
                continue
            seen_titles.add(norm)

            valid_items.append({
                "old_path": fp,
                "title": title,
                "artist": artist,
                "album": album,
                "duration": length
            })

        # Remove duplicate files
        for df in to_delete:
            try:
                os.remove(df)
                total_removed += 1
            except Exception as e:
                print(f"  Error deleting duplicate {df}: {e}")

        # Rename to temporary names first to avoid collision
        temp_items = []
        for i, item in enumerate(valid_items, 1):
            temp_path = os.path.join(folder, f"__temp_{prefix}_{i}.mp3")
            os.rename(item["old_path"], temp_path)
            temp_items.append((temp_path, i, item))

        # Now rename to final target name: e.g. 90s_1.mp3, nostalgic_21.mp3
        for temp_path, i, item in temp_items:
            final_name = f"{prefix}_{i}.mp3"
            final_path = os.path.join(folder, final_name)
            os.rename(temp_path, final_path)
            total_renamed += 1

            cat_tracks.append({
                "id": f"{prefix}_{i}",
                "title": item["title"],
                "artist": item["artist"],
                "album": item["album"],
                "duration": item["duration"],
                "url": f"{R2_BASE}/{cloud_folder}/{final_name}",
                "category": cat_key
            })

        print(f"  Renamed {len(cat_tracks)} files -> format: {prefix}_1.mp3 ... {prefix}_{len(cat_tracks)}.mp3")
        all_categories_data[cat_key] = cat_tracks

    # Save to all_processed_tracks.json
    with open('all_processed_tracks.json', 'w', encoding='utf-8') as f:
        json.dump(all_categories_data, f, indent=2, ensure_ascii=False)
    print("\nUpdated all_processed_tracks.json")

    # Update constants.js
    import subprocess
    subprocess.run(["python", "update_constants.py"], check=True)
    print(f"\nDONE: Successfully renamed {total_renamed} files and cleaned {total_removed} duplicates!")

if __name__ == "__main__":
    main()
