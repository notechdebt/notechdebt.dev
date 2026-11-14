#!/bin/sh
# Turns a 1840x900 Marketplace highlight image into the four sizes the /apps/ pages use:
#   img/<slug>-1840.webp (opened on click), img/<slug>.webp (1280 wide), img/<slug>-960.webp, img/<slug>-640.webp
# Usage (from the repo root):  sh tools/app-shot.sh path/to/highlight-1840x900.png <slug>
# Needs cwebp (brew install webp).
set -eu

if [ "$#" -ne 2 ]; then
  echo "Usage: sh tools/app-shot.sh <image.png> <slug>" >&2
  exit 1
fi
src=$1
slug=$2
command -v cwebp >/dev/null 2>&1 || { echo "cwebp not found: brew install webp" >&2; exit 1; }
[ -f "$src" ] || { echo "No such file: $src" >&2; exit 1; }

root=$(cd "$(dirname "$0")/.." && pwd)
out="$root/img/$slug"

cwebp -quiet -q 78 "$src" -o "$out-1840.webp"
cwebp -quiet -q 78 -resize 1280 0 "$src" -o "$out.webp"
cwebp -quiet -q 78 -resize 960 0 "$src" -o "$out-960.webp"
cwebp -quiet -q 78 -resize 640 0 "$src" -o "$out-640.webp"
echo "Wrote img/$slug.webp, -960, -640 and -1840"
