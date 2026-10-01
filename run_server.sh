#!/bin/sh
set -eu
cd "$(dirname "$0")"
python3 -m http.server "${1:-8000}" --bind 127.0.0.1
