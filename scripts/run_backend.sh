#!/usr/bin/env bash
# Build and run the Crow backend (CMake + make)
# Usage: ./scripts/run_backend.sh [build|run|clean] 
# Default action: run (builds first if necessary)

set -euo pipefail

# Configuration (tune these or override via env)
: "${BACKEND_SRC_DIR:=../backend}"       # relative to scripts/
: "${BACKEND_BUILD_DIR:=${BACKEND_SRC_DIR}/build}"
: "${BACKEND_BIN:=${BACKEND_BUILD_DIR}/server}"
: "${CMAKE_GENERATOR:=Unix Makefiles}"  # change if using Ninja etc
: "${BUILD_TYPE:=Release}"
: "${NUM_JOBS:=$(nproc 2>/dev/null || echo 1)}"

ACTION="${1:-run}"

cd "$(dirname "$0")" || exit 1
# make paths absolute
SRC_DIR="$(realpath "$BACKEND_SRC_DIR")"
BUILD_DIR="$(realpath "$BACKEND_BUILD_DIR")"

mkdir -p "$BUILD_DIR"

if [[ "$ACTION" == "clean" ]]; then
    echo "[backend] Cleaning build directory: $BUILD_DIR"
    rm -rf "$BUILD_DIR"/*
    exit 0
fi

if [[ "$ACTION" == "build" || "$ACTION" == "run" ]]; then
    echo "[backend] Configuring (CMake) -> build dir: $BUILD_DIR"
    cmake -S "$SRC_DIR" -B "$BUILD_DIR" -G "$CMAKE_GENERATOR" -DCMAKE_BUILD_TYPE="$BUILD_TYPE"
    echo "[backend] Building with $NUM_JOBS jobs"
    make -C "$BUILD_DIR" -j"$NUM_JOBS"
fi

if [[ "$ACTION" == "run" ]]; then
    if [[ ! -x "$BACKEND_BIN" ]]; then
        echo "[backend] ERROR: binary not found or not executable: $BACKEND_BIN" >&2
        exit 2
    fi

    echo "[backend] Running $BACKEND_BIN"
    # Run in foreground so logs are visible. Use & or nohup if you want background.
    exec "$BACKEND_BIN"
fi

echo "[backend] Done."
