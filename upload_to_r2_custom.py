import os
import glob
import sys
import argparse
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

R2_ACCOUNT_ID = env.get("R2_ACCOUNT_ID", "251dc421cbc959007a7cc37bdf392153")
R2_ACCESS_KEY_ID = env.get("R2_ACCESS_KEY_ID", "12eb8707b181158c4adca69904f16ca3")
R2_SECRET_ACCESS_KEY = env.get("R2_SECRET_ACCESS_KEY", "3f2a949ee6273dadd1af13ff658614d75ec9e7ea3c033bb30dfbf45310ed006f")
R2_BUCKET_NAME = env.get("R2_BUCKET_NAME", "viral-radio-songs")

s3 = boto3.client(
    service_name="s3",
    endpoint_url=f"https://{R2_ACCOUNT_ID}.r2.cloudflarestorage.com",
    aws_access_key_id=R2_ACCESS_KEY_ID,
    aws_secret_access_key=R2_SECRET_ACCESS_KEY,
    region_name="auto",
    config=Config(s3={'addressing_style': 'path'})
)

CATEGORIES = {
    "90s": {"folder": "old bangers/old 90s", "cloud_folder": "old 90s"},
    "nostalgic": {"folder": "old bangers/Nostalgic", "cloud_folder": "Nostalgic"},
    "rajasthani": {"folder": "old bangers/Rajasthani", "cloud_folder": "Rajasthani"},
    "english": {"folder": "old bangers/English", "cloud_folder": "English"},
    "hitlist": {"folder": "old bangers/Hitlist", "cloud_folder": "Hitlist"},
    "punjabi": {"folder": "old bangers/Punjabi", "cloud_folder": "Punjabi"},
    "haryanvi": {"folder": "old bangers/Haryanvi", "cloud_folder": "Haryanvi"},
    "pahadi": {"folder": "old bangers/Pahadi", "cloud_folder": "Pahadi"},
}

def get_existing_keys():
    print("Checking existing files on R2 bucket...")
    existing = set()
    paginator = s3.get_paginator('list_objects_v2')
    for page in paginator.paginate(Bucket=R2_BUCKET_NAME):
        if 'Contents' in page:
            for obj in page['Contents']:
                existing.add(obj['Key'])
    return existing

def upload_file(local_path, s3_key, existing_keys):
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

def upload_category(cat_key, existing_keys):
    cfg = CATEGORIES.get(cat_key.lower())
    if not cfg:
        print(f"Unknown category: {cat_key}. Available: {list(CATEGORIES.keys())}")
        return

    folder = cfg["folder"]
    cloud_folder = cfg["cloud_folder"]

    if not os.path.exists(folder):
        print(f"Folder does not exist: {folder}")
        return

    files = glob.glob(os.path.join(folder, "*.mp3"))
    print(f"\nUploading category '{cat_key}' ({len(files)} files) to 'old_bangers/{cloud_folder}/'...")

    uploaded, skipped, errors = 0, 0, 0
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = {
            executor.submit(
                upload_file,
                fp,
                f"old_bangers/{cloud_folder}/{os.path.basename(fp)}",
                existing_keys
            ): fp for fp in files
        }

        for i, future in enumerate(as_completed(futures), 1):
            key, status = future.result()
            if status == "uploaded":
                uploaded += 1
            elif status == "skipped":
                skipped += 1
            else:
                errors += 1
                print(f"Failed {key}: {status}")

            if i % 20 == 0 or i == len(files):
                print(f"  Progress: [{i}/{len(files)}] (Uploaded: {uploaded}, Skipped: {skipped}, Errors: {errors})")

    print(f"Category '{cat_key}' complete: {uploaded} uploaded, {skipped} already existed, {errors} errors.")

def main():
    parser = argparse.ArgumentParser(description="Upload old bangers categories to Cloudflare R2")
    parser.add_argument("--category", "-c", type=str, help="Category to upload (e.g. nostalgic, 90s, punjabi)")
    parser.add_argument("--all", "-a", action="store_true", help="Upload all categories")
    args = parser.parse_args()

    existing_keys = get_existing_keys()
    print(f"Found {len(existing_keys)} items currently in R2 bucket.")

    if args.all:
        for cat in CATEGORIES.keys():
            upload_category(cat, existing_keys)
    elif args.category:
        upload_category(args.category, existing_keys)
    else:
        print("Please specify --category <name> or --all. Example: python upload_to_r2_custom.py --category nostalgic")

if __name__ == "__main__":
    main()
