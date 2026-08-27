import os
import glob
import json
import boto3
from botocore.config import Config
from concurrent.futures import ThreadPoolExecutor, as_completed

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

R2_ACCOUNT_ID = env.get("R2_ACCOUNT_ID")
R2_ACCESS_KEY_ID = env.get("R2_ACCESS_KEY_ID")
R2_SECRET_ACCESS_KEY = env.get("R2_SECRET_ACCESS_KEY")
R2_BUCKET_NAME = env.get("R2_BUCKET_NAME", "viral-radio-songs")
R2_PUBLIC_URL = env.get("R2_PUBLIC_URL", "").rstrip("/")

if not all([R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY]):
    print("Error: Missing R2 credentials in .env")
    exit(1)

s3 = boto3.client(
    service_name="s3",
    endpoint_url=f"https://{R2_ACCOUNT_ID}.r2.cloudflarestorage.com",
    aws_access_key_id=R2_ACCESS_KEY_ID,
    aws_secret_access_key=R2_SECRET_ACCESS_KEY,
    region_name="auto",
    config=Config(s3={'addressing_style': 'path'})
)

def get_existing_r2_keys():
    print("Fetching list of files already on R2...")
    existing = set()
    paginator = s3.get_paginator('list_objects_v2')
    for page in paginator.paginate(Bucket=R2_BUCKET_NAME):
        if 'Contents' in page:
            for obj in page['Contents']:
                existing.add(obj['Key'])
    print(f"Found {len(existing)} files already in R2 bucket.")
    return existing

def upload_single_file(local_path, s3_key, existing_keys):
    if s3_key in existing_keys:
        return s3_key, "skipped"
    try:
        s3.upload_file(
            local_path,
            R2_BUCKET_NAME,
            s3_key,
            ExtraArgs={
                "ContentType": "audio/mpeg",
                "CacheControl": "public, max-age=31536000, immutable"
            }
        )
        return s3_key, "uploaded"
    except Exception as e:
        return s3_key, f"error: {e}"

def main():
    audio_dir = "frontend/public/audio"
    if not os.path.exists(audio_dir):
        print(f"Error: Directory {audio_dir} not found.")
        return

    files = glob.glob(os.path.join(audio_dir, "*.mp3"))
    print(f"Total audio files to process: {len(files)}")

    existing_keys = get_existing_r2_keys()
    
    uploaded_count = 0
    skipped_count = 0
    error_count = 0

    print("Starting multi-threaded upload (8 workers)...")
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = {
            executor.submit(
                upload_single_file,
                file_path,
                f"audio/{os.path.basename(file_path)}",
                existing_keys
            ): file_path for file_path in files
        }

        for i, future in enumerate(as_completed(futures), 1):
            key, status = future.result()
            if status == "uploaded":
                uploaded_count += 1
            elif status == "skipped":
                skipped_count += 1
            else:
                error_count += 1
                print(f"Failed {key}: {status}")

            if i % 25 == 0 or i == len(files):
                print(f"Progress: [{i}/{len(files)}] (Uploaded: {uploaded_count}, Skipped: {skipped_count}, Errors: {error_count})")

    print("\n--- Upload Complete ---")
    print(f"Total: {len(files)} | Uploaded: {uploaded_count} | Skipped: {skipped_count} | Errors: {error_count}")

    # Now update all_processed_tracks.json
    if os.path.exists("all_processed_tracks.json"):
        print("\nUpdating all_processed_tracks.json with R2 public URLs...")
        with open("all_processed_tracks.json", "r", encoding="utf-8") as f:
            tracks_data = json.load(f)

        for cat, tracks in tracks_data.items():
            for t in tracks:
                url = t.get("url", "")
                if url.startswith("/audio/"):
                    t["url"] = f"{R2_PUBLIC_URL}{url}"
                elif not url.startswith("http"):
                    t["url"] = f"{R2_PUBLIC_URL}/audio/{os.path.basename(url)}"

        with open("all_processed_tracks.json", "w", encoding="utf-8") as f:
            json.dump(tracks_data, f, indent=2, ensure_ascii=False)
        print("Updated all_processed_tracks.json successfully!")

    # Run update_constants.py
    if os.path.exists("update_constants.py"):
        print("Updating frontend/src/lib/constants.js...")
        import subprocess
        subprocess.run(["python", "update_constants.py"], check=True)

if __name__ == "__main__":
    main()
