#!/bin/bash
# 
# +==== BEGIN AsperHeader =================+
# LOGO: 
# ..........####...####..........
# ......###.....#.#########......
# ....##........#.###########....
# ...#..........#.############...
# ...#..........#.#####.######...
# ..#.....##....#.###..#...####..
# .#.....#.##...#.##..##########.
# #.....##########....##...######
# #.....#...##..#.##..####.######
# .#...##....##.#.##..###..#####.
# ..#.##......#.#.####...######..
# ..#...........#.#############..
# ..#...........#.#############..
# ...##.........#.############...
# ......#.......#.#########......
# .......#......#.########.......
# .........#####...#####.........
# /STOP
# PROJECT: AsperHeader
# FILE: build.sh
# CREATION DATE: 05-11-2025
# LAST Modified: 6:56:58 05-11-2025
# DESCRIPTION: 
# This is the script in charge of starting the container in charge of building the next.ts app into a production ready version so that it can be deployed on the server.
# /STOP
# COPYRIGHT: (c) Asperguide
# PURPOSE: The production compilation script.
# // AR
# +==== END AsperHeader =================+
# 
set -euo pipefail

# build.sh - Build the frontend image and extract its /out to a host 'out' folder
# Behavior:
# - Build using Dockerfile.build.front located next to this script
# - Use parent directory as build context (so the ./asperguide folder is available)
# - Detect whether docker requires sudo and adapt
# - Ensure host out dir exists (default: $PWD/out) and copy image /out into it

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DOCKERFILE="$SCRIPT_DIR/Dockerfile.build.front"

IMAGE_NAME="${1:-asperguide-builder:latest}"
HOST_OUT_DIR="${HOST_OUT_DIR:-$PWD/out}"

usage() {
	cat <<EOF
Usage: $(basename "$0") [image-name]

Build the frontend image and extract its /out directory into ./out (or HOST_OUT_DIR).
If image-name is omitted the default is 'asperguide-builder:latest'.

Environment:
	HOST_OUT_DIR  - override output directory on host (default: ./out)

Examples:
	$(basename "$0")
	HOST_OUT_DIR=/tmp/out $(basename "$0") my-image:tag
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
	usage
	exit 0
fi

# Check docker availability and whether we need sudo
DOCKER_CMD="docker"
if command -v docker >/dev/null 2>&1; then
	if docker info >/dev/null 2>&1; then
		DOCKER_CMD="docker"
	elif sudo docker info >/dev/null 2>&1; then
		DOCKER_CMD="sudo docker"
	else
		echo "Error: Docker daemon not accessible. Ensure docker is running or you have permission (try sudo)." >&2
		exit 1
	fi
else
	echo "Error: 'docker' command not found. Install Docker and try again." >&2
	exit 1
fi

echo "Using Docker command: $DOCKER_CMD"

# Ensure Dockerfile exists
if [[ ! -f "$DOCKERFILE" ]]; then
	echo "Error: Dockerfile not found at $DOCKERFILE" >&2
	exit 1
fi

# Ensure output dir exists and is writable
mkdir -p "$HOST_OUT_DIR"
if [[ ! -w "$HOST_OUT_DIR" ]]; then
	echo "Warning: $HOST_OUT_DIR is not writable by current user; attempting to fix permissions." >&2
	chmod u+w "$HOST_OUT_DIR" || true
fi

echo "Building image '$IMAGE_NAME' using Dockerfile '$DOCKERFILE' and context '$REPO_ROOT'..."
$DOCKER_CMD build -f "$DOCKERFILE" -t "$IMAGE_NAME" "$REPO_ROOT"

echo "Build finished. Extracting /out from image into host directory: $HOST_OUT_DIR"
# We mount the host out dir as /host_out and copy from the image's /out into it.
$DOCKER_CMD run --rm -v "$HOST_OUT_DIR":/host_out "$IMAGE_NAME" sh -c "cp -a /out/. /host_out/ || true"

echo "Output available at: $HOST_OUT_DIR"

exit 0

