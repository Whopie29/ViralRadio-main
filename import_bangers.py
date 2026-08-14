import os
import glob
import shutil
import re
import json
import mutagen
from mutagen.easyid3 import EasyID3
from mutagen.mp3 import MP3

os.makedirs('frontend/public/audio', exist_ok=True)

raw_files = sorted(glob.glob('old bangers/*.mp3'))
print(f'Found {len(raw_files)} files in old bangers')

seen_titles = set()
tracks = []
copied_count = 0

for i, filepath in enumerate(raw_files):
    filename = os.path.basename(filepath)
    
    # Check for duplicate duplicate suffix like (1)
    if ' (1).mp3' in filename:
        continue
        
    try:
        audio = MP3(filepath, ID3=EasyID3)
        length = int(audio.info.length)
        title = audio.get('title', [''])[0].strip()
        artist = audio.get('artist', [''])[0].strip()
        album = audio.get('album', [''])[0].strip()
    except Exception as e:
        length = 0
        title = ""
        artist = ""
        album = ""

    # Fallback to filename if title is missing
    if not title:
        title = filename.replace('_spotdown.org.mp3', '').replace('.mp3', '')
        title = re.sub(r'\(From [^)]+\)', '', title).strip()

    # Clean artist
    if artist:
        # Remove record company credits from artist field
        artist = re.sub(r',?\s*Super Cassettes Industries.*', '', artist, flags=re.IGNORECASE)
        artist = re.sub(r',?\s*Tips Music.*', '', artist, flags=re.IGNORECASE)
        artist = re.sub(r',?\s*Venus Worldwide.*', '', artist, flags=re.IGNORECASE)
        artist = artist.strip(', ')
    if not artist:
        artist = "90s Classic"

    # Clean album
    if album:
        album = re.sub(r'\(Original Motion Picture Soundtrack\)', '', album, flags=re.IGNORECASE).strip()
    if not album:
        album = "Golden Era"

    # Clean title
    title = re.sub(r'\s*-\s*From\s+["\'][^"\']+["\']', '', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*\(From\s+["\'][^"\']+["\']\)', '', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*\(From\s+_[^_]+_\)', '', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*-\s*From\s+_[^_]+_', '', title, flags=re.IGNORECASE)
    title = title.strip()

    # Deduplicate by title
    normalized_title = title.lower().replace(' ', '')
    if normalized_title in seen_titles:
        print(f"Skipping duplicate: {title}")
        continue
    seen_titles.add(normalized_title)

    # Safe destination filename
    safe_name = f"banger_{copied_count+1:02d}.mp3"
    dest_path = os.path.join('frontend/public/audio', safe_name)
    shutil.copy2(filepath, dest_path)
    copied_count += 1

    tracks.append({
        "id": f"bg_{copied_count}",
        "title": title,
        "artist": artist,
        "album": album,
        "duration": length,
        "url": f"/audio/{safe_name}"
    })

print(f"Successfully processed and copied {copied_count} songs.")

with open('scratch_tracks.json', 'w', encoding='utf-8') as f:
    json.dump(tracks, f, indent=2, ensure_ascii=False)
