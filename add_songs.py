"""
add_songs.py — Safely add NEW songs to a category without affecting existing ones.

Usage:
    python add_songs.py --category punjabi
    python add_songs.py --category 90s
    python add_songs.py --all

What it does:
  1. Reads existing all_processed_tracks.json (preserves existing data)
  2. Scans the 'old bangers/<category>' folder for NEW mp3 files
  3. Processes only the new files (reads metadata)
  4. Uploads only the new files to Cloudflare R2 (skips already-uploaded ones)
  5. Updates all_processed_tracks.json and frontend/src/lib/constants.js

Existing songs on Cloudflare R2 are NEVER deleted or re-uploaded.
"""

import os
import glob
import re
import json
import argparse
import boto3
from botocore.config import Config
from mutagen.easyid3 import EasyID3
from mutagen.mp3 import MP3

# ── Cloudflare R2 config ──────────────────────────────────────────────────────
def load_env(path=".env"):
    env = {}
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    env[k.strip()] = v.strip()
    return env

env = load_env()
R2_ACCOUNT_ID      = env.get("R2_ACCOUNT_ID",      "251dc421cbc959007a7cc37bdf392153")
R2_ACCESS_KEY_ID   = env.get("R2_ACCESS_KEY_ID",   "12eb8707b181158c4adca69904f16ca3")
R2_SECRET_ACCESS_KEY = env.get("R2_SECRET_ACCESS_KEY", "3f2a949ee6273dadd1af13ff658614d75ec9e7ea3c033bb30dfbf45310ed006f")
R2_BUCKET_NAME     = env.get("R2_BUCKET_NAME",     "viral-radio-songs")
R2_PUBLIC_BASE     = env.get("R2_PUBLIC_BASE",      "https://pub-26b22cb6c38140bf8acff92193e34581.r2.dev")

s3 = boto3.client(
    service_name="s3",
    endpoint_url=f"https://{R2_ACCOUNT_ID}.r2.cloudflarestorage.com",
    aws_access_key_id=R2_ACCESS_KEY_ID,
    aws_secret_access_key=R2_SECRET_ACCESS_KEY,
    region_name="auto",
    config=Config(s3={"addressing_style": "path"})
)

# ── Category config (must match process_tracks.py) ────────────────────────────
CATEGORIES = {
    "90s":       {"folder": "old bangers/old 90s",   "cloud_folder": "old 90s",   "prefix": "90s",       "default_artist": "90s Legend",       "default_album": "Golden Era 90s"},
    "nostalgic": {"folder": "old bangers/Nostalgic", "cloud_folder": "Nostalgic", "prefix": "nostalgic", "default_artist": "Bollywood Classic",  "default_album": "Timeless Memories"},
    "rajasthani":{"folder": "old bangers/Rajasthani","cloud_folder": "Rajasthani","prefix": "rajasthani","default_artist": "Folk Legend",         "default_album": "Rajasthani Heritage"},
    "english":   {"folder": "old bangers/English",   "cloud_folder": "English",   "prefix": "eng",       "default_artist": "Retro Artist",       "default_album": "Retro Roadtrip"},
    "hitlist":   {"folder": "old bangers/Hitlist",   "cloud_folder": "Hitlist",   "prefix": "hit",       "default_artist": "Top Hit",            "default_album": "Highway Hits"},
    "punjabi":   {"folder": "old bangers/Punjabi",   "cloud_folder": "Punjabi",   "prefix": "punjabi",   "default_artist": "Punjabi Artist",     "default_album": "Punjabi Bangers"},
    "haryanvi":  {"folder": "old bangers/Haryanvi",  "cloud_folder": "Haryanvi",  "prefix": "haryanvi",  "default_artist": "Haryanvi Artist",    "default_album": "Haryanvi Hits"},
    "pahadi":    {"folder": "old bangers/Pahadi",    "cloud_folder": "Pahadi",    "prefix": "pahadi",    "default_artist": "Pahadi Folk",        "default_album": "Pahadi Safar"},
}

ALIASES = {
    "old 90s": "90s",
    "old90s": "90s",
    "90": "90s",
}

def resolve_category(cat_key):
    if not cat_key:
        return None
    key = cat_key.strip().lower()
    if key in CATEGORIES:
        return key
    if key in ALIASES:
        return ALIASES[key]
    return None

# ── Text cleaning helpers ─────────────────────────────────────────────────────
def clean_artist(artist, default_artist):
    if not artist: return default_artist
    artist = artist.replace('\ufffd', '-')
    for pattern in [r',?\s*Super Cassettes Industries.*', r',?\s*Tips Music.*',
                    r',?\s*Venus Worldwide.*', r',?\s*T-Series.*',
                    r',?\s*Zee Music.*', r',?\s*Sony Music.*']:
        artist = re.sub(pattern, '', artist, flags=re.IGNORECASE)
    artist = artist.strip(' ,-–')
    return artist if artist else default_artist

def clean_album(album, default_album):
    if not album: return default_album
    album = album.replace('\ufffd', '-')
    for pattern in [r'\(Original Motion Picture Soundtrack\)', r'\[Original Motion Picture Soundtrack\]',
                    r'_ Soundtrack Version', r'- Soundtrack Version']:
        album = re.sub(pattern, '', album, flags=re.IGNORECASE)
    album = album.strip(' ,-–')
    return album if album else default_album

def clean_title(title, filename):
    if not title: title = filename
    title = title.replace('\ufffd', '-')
    title = title.replace('_spotdown.org.mp3', '').replace('_spotdown.org', '').replace('.mp3', '')
    for pattern in [r'\s*-\s*From\s+["\'][^"\']+["\']', r'\s*\(From\s+["\'][^"\']+["\']?\)',
                    r'\s*\(From\s+_[^_]+_\)', r'\s*-\s*From\s+_[^_]+_', r'\s*-\s*From\s+.*$']:
        title = re.sub(pattern, '', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*-\s*Male Version', ' (Male)', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*-\s*Female Version', ' (Female)', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*-\s*Jhankar Beats', ' (Jhankar)', title, flags=re.IGNORECASE)
    title = re.sub(r'\s*\(With Jhankar Beats\)', ' (Jhankar)', title, flags=re.IGNORECASE)
    return title.strip(' ,-–_')

# ── Core logic ────────────────────────────────────────────────────────────────
def get_existing_r2_keys():
    print("Fetching existing files from R2 bucket...")
    existing = set()
    paginator = s3.get_paginator('list_objects_v2')
    for page in paginator.paginate(Bucket=R2_BUCKET_NAME):
        if 'Contents' in page:
            for obj in page['Contents']:
                existing.add(obj['Key'])
    print(f"  Found {len(existing)} existing files on R2.\n")
    return existing

def add_songs_for_category(cat_key, all_tracks, r2_keys):
    resolved_key = resolve_category(cat_key)
    if not resolved_key:
        print(f"Unknown category '{cat_key}'. Available: {list(CATEGORIES.keys())}")
        return

    cat_key = resolved_key
    cfg = CATEGORIES[cat_key]

    folder         = cfg["folder"]
    cloud_folder   = cfg["cloud_folder"]
    prefix         = cfg["prefix"]
    default_artist = cfg["default_artist"]
    default_album  = cfg["default_album"]

    if not os.path.exists(folder):
        print(f"Folder does not exist: {folder}  — skipping.")
        return

    local_files = sorted(glob.glob(os.path.join(folder, "*.mp3")))
    if not local_files:
        print(f"No .mp3 files found in '{folder}' — nothing to add.")
        return

    existing_tracks = all_tracks.get(cat_key, [])

    # Build set of (title, artist) already tracked (to avoid duplicates of same song/artist)
    seen_tracks = {
        (
            re.sub(r'[^a-zA-Z0-9]', '', t.get("title", "")).lower(),
            re.sub(r'[^a-zA-Z0-9]', '', t.get("artist", "")).lower()
        )
        for t in existing_tracks
    }

    # Next index starts after last existing track
    next_idx = len(existing_tracks) + 1

    new_tracks = []
    uploaded = skipped_dup = skipped_r2 = errors = 0

    print(f"Processing '{cat_key}' — {len(local_files)} local file(s), {len(existing_tracks)} already tracked...")

    for fp in local_files:
        fn = os.path.basename(fp)

        # Skip duplicate-download suffixes like "(1).mp3"
        if re.search(r' \(\d+\)\.mp3$', fn):
            continue

        # Read MP3 metadata
        try:
            audio  = MP3(fp, ID3=EasyID3)
            length = int(audio.info.length)
            title  = audio.get('title',  [''])[0].strip()
            artist = audio.get('artist', [''])[0].strip()
            album  = audio.get('album',  [''])[0].strip()
        except Exception:
            length, title, artist, album = 0, "", "", ""

        title  = clean_title(title, fn)
        artist = clean_artist(artist, default_artist)
        album  = clean_album(album, default_album)

        # Skip if both title and artist already exist
        norm_title = re.sub(r'[^a-zA-Z0-9]', '', title).lower()
        norm_artist = re.sub(r'[^a-zA-Z0-9]', '', artist).lower()
        track_key = (norm_title, norm_artist)

        if track_key in seen_tracks:
            print(f"  Skipping duplicate track: {title} - {artist}")
            skipped_dup += 1
            continue
        seen_tracks.add(track_key)

        # Assign cloud filename
        safe_name = f"{prefix}_{next_idx:03d}.mp3"
        r2_key    = f"old_bangers/{cloud_folder}/{safe_name}"
        next_idx += 1

        # Upload to R2
        if r2_key in r2_keys:
            print(f"  Already on R2: {safe_name}")
            skipped_r2 += 1
        else:
            try:
                s3.upload_file(
                    fp, R2_BUCKET_NAME, r2_key,
                    ExtraArgs={
                        "ContentType": "audio/mpeg",
                        "CacheControl": "public, max-age=31536000, immutable"
                    }
                )
                r2_keys.add(r2_key)
                uploaded += 1
                print(f"  Uploaded: {safe_name}  <-  {fn}")
            except Exception as e:
                print(f"  Error uploading {fn}: {e}")
                errors += 1
                continue

        new_tracks.append({
            "id":       f"{prefix}_{next_idx - 1}",
            "title":    title,
            "artist":   artist,
            "album":    album,
            "duration": length,
            "url":      f"{R2_PUBLIC_BASE}/old_bangers/{cloud_folder}/{safe_name}",
            "category": cat_key
        })

    # Merge into existing
    all_tracks[cat_key] = existing_tracks + new_tracks

    print(f"  Done - {uploaded} uploaded, {skipped_r2} already on R2, "
          f"{skipped_dup} duplicates skipped, {errors} errors.")
    print(f"  '{cat_key}': {len(existing_tracks)} -> {len(all_tracks[cat_key])} tracks\n")

def update_constants(all_tracks):
    """Regenerate frontend/src/lib/constants.js with updated track counts & data."""
    constants_path = "frontend/src/lib/constants.js"
    
    header = f'''// Static config for the journey experience.

export const ASSETS = {{
  himachal: {{ far: "/assets/mtn_far_himachal.png", mid: "/assets/hills_mid_himachal.png" }},
  uttarakhand: {{ far: "/assets/mtn_far_uttarakhand.png", mid: "/assets/hills_mid_uttarakhand.png" }},
  trees: "/assets/trees_near_pine.png",
  window: "/assets/bus_window_frame.png",
}};

export const LOCATIONS = {{
  himachal: {{
    id: "himachal",
    name: "Himachal Pradesh",
    coords: "31.10°N  77.17°E",
    tagline: "Pine valleys & winding roads",
  }},
  uttarakhand: {{
    id: "uttarakhand",
    name: "Uttarakhand",
    coords: "30.07°N  79.09°E",
    tagline: "Himalayan forests & snow peaks",
  }},
}};

export const WEATHERS = {{
  clear: {{ id: "clear", label: "Clear", temps: {{ himachal: 19, uttarakhand: 17 }} }},
  rain: {{ id: "rain", label: "Rainy", temps: {{ himachal: 14, uttarakhand: 12 }} }},
  snow: {{ id: "snow", label: "Snow", temps: {{ himachal: 2, uttarakhand: -1 }} }},
}};

// Time-of-day atmosphere presets. `sky` is a CSS gradient, others tune the mood.
export const TIMES = {{
  morning: {{
    id: "morning",
    label: "Morning",
    sky: "linear-gradient(180deg,#7ea6c4 0%,#bcd4dd 42%,#f0e2bd 100%)",
    filter: "saturate(1.05) brightness(1.04) contrast(1.02)",
    tint: "rgba(255,224,160,0.05)",
    fog: "rgba(220,232,236,0.55)",
    stars: false,
    interiorGlow: false,
    headlights: false,
    celestial: {{ color: "#fff2cf", glow: "rgba(255,235,175,0.7)", x: "18%", y: "24%", size: 90 }},
  }},
  afternoon: {{
    id: "afternoon",
    label: "Afternoon",
    sky: "linear-gradient(180deg,#8fb3cf 0%,#c8dde4 46%,#eaeee6 100%)",
    filter: "saturate(1) brightness(1)",
    tint: "rgba(255,255,255,0)",
    fog: "rgba(210,224,230,0.5)",
    stars: false,
    interiorGlow: false,
    headlights: false,
    celestial: {{ color: "#fffaf0", glow: "rgba(255,250,235,0.55)", x: "72%", y: "16%", size: 70 }},
  }},
  evening: {{
    id: "evening",
    label: "Evening",
    sky: "linear-gradient(180deg,#20304f 0%,#4d3f61 38%,#b56a48 74%,#e0a15b 100%)",
    filter: "saturate(0.98) brightness(0.9) contrast(1.03)",
    tint: "rgba(224,120,56,0.08)",
    fog: "rgba(120,110,120,0.5)",
    stars: false,
    interiorGlow: true,
    headlights: true,
    celestial: {{ color: "#ffb96a", glow: "rgba(255,170,90,0.75)", x: "26%", y: "40%", size: 78 }},
  }},
  night: {{
    id: "night",
    label: "Night",
    sky: "linear-gradient(180deg,#050914 0%,#0b1730 55%,#17273f 100%)",
    filter: "brightness(0.62) saturate(0.82) contrast(1.05)",
    tint: "rgba(8,16,38,0.34)",
    fog: "rgba(40,52,80,0.5)",
    stars: true,
    interiorGlow: true,
    headlights: true,
    celestial: {{ color: "#e8eefc", glow: "rgba(200,215,255,0.5)", x: "76%", y: "18%", size: 54 }},
  }},
}};

export const PLAYLIST_CATEGORIES = [
  {{ id: "90s", label: "90s", fullName: "90s Bollywood Classics", subtitle: "Golden Era Cassettes & Melodies", count: {len(all_tracks.get('90s', []))} }},
  {{ id: "nostalgic", label: "Nostalgic", fullName: "2000s Nostalgia", subtitle: "Unforgettable Childhood Tunes", count: {len(all_tracks.get('nostalgic', []))} }},
  {{ id: "rajasthani", label: "Rajasthani", fullName: "Rajasthani Folk & Heritage", subtitle: "Desert Winds & Authentic Folk Melodies", count: {len(all_tracks.get('rajasthani', []))} }},
  {{ id: "english", label: "English", fullName: "English Hits & Classics", subtitle: "Global Bangers & Roadtrip Anthems", count: {len(all_tracks.get('english', []))} }},
  {{ id: "hitlist", label: "Hitlist", fullName: "Top Hitlist", subtitle: "Chartbusters on the Highway", count: {len(all_tracks.get('hitlist', []))} }},
  {{ id: "punjabi", label: "Punjabi", fullName: "Punjabi Bangers", subtitle: "High-energy Dhol & Highway Beats", count: {len(all_tracks.get('punjabi', []))} }},
  {{ id: "haryanvi", label: "Haryanvi", fullName: "Haryanvi Hits", subtitle: "Desi Ragni & Bass Boosts", count: {len(all_tracks.get('haryanvi', []))} }},
  {{ id: "pahadi", label: "Pahadi", fullName: "Pahadi Safar", subtitle: "Mountain Melodies & Folk Acoustic", count: {len(all_tracks.get('pahadi', []))} }},
];
'''

    track_categories_js = 'export const TRACK_CATEGORIES = ' + json.dumps(all_tracks, indent=2, ensure_ascii=False) + ';\n\n'
    sample_tracks_js = 'export const SAMPLE_TRACKS = TRACK_CATEGORIES["90s"];\n\n'
    footer = '''export const fmtTime = (s) => {
  if (!s || Number.isNaN(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};
'''

    with open(constants_path, 'w', encoding='utf-8') as f:
        f.write(header + '\n' + track_categories_js + sample_tracks_js + footer)
    print(f"Updated {constants_path} successfully!")

# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(
        description="Safely add NEW songs to Cloudflare R2 without affecting existing ones."
    )
    parser.add_argument("--category", "-c", help="Category to add songs to (e.g. punjabi, 90s)")
    parser.add_argument("--all",      "-a", action="store_true", help="Process all categories")
    args = parser.parse_args()

    if not args.category and not args.all:
        parser.print_help()
        return

    # Load existing track data
    json_path = "all_processed_tracks.json"
    if os.path.exists(json_path):
        with open(json_path, "r", encoding="utf-8") as f:
            all_tracks = json.load(f)
        total = sum(len(v) for v in all_tracks.values())
        print(f"Loaded existing data: {total} total tracks across {len(all_tracks)} categories\n")
    else:
        all_tracks = {}
        print("No existing all_processed_tracks.json — starting fresh.\n")

    # Fetch current R2 keys once
    r2_keys = get_existing_r2_keys()

    # Process
    cats = list(CATEGORIES.keys()) if args.all else [args.category]
    for cat in cats:
        add_songs_for_category(cat, all_tracks, r2_keys)

    # Save updated JSON
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(all_tracks, f, indent=2, ensure_ascii=False)
    print(f"Saved {json_path}\n")

    # Update frontend
    update_constants(all_tracks)

    print("\n-- Final Summary --")
    for k, v in all_tracks.items():
        print(f"  {k}: {len(v)} tracks")
    print(f"  Total: {sum(len(v) for v in all_tracks.values())} tracks")

if __name__ == "__main__":
    main()
