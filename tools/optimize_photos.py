#!/usr/bin/env python3
"""Shrinks big phone photos (long side 2000px, WebP) so the site loads fast.
Usage:  python tools/optimize_photos.py  <input_folder>  <output_folder>
Keeps file names (2023_happy_05.jpg -> 2023_happy_05.webp)."""
import os, sys
from PIL import Image, ImageOps
src, dst = sys.argv[1], sys.argv[2]
os.makedirs(dst, exist_ok=True)
for f in sorted(os.listdir(src)):
    stem, ext = os.path.splitext(f)
    if ext.lower() not in ('.jpg', '.jpeg', '.png', '.webp', '.heic'): continue
    im = ImageOps.exif_transpose(Image.open(os.path.join(src, f))).convert('RGB')
    im.thumbnail((2000, 2000))
    im.save(os.path.join(dst, stem + '.webp'), 'WEBP', quality=90, method=4)
    print('ok', f)
