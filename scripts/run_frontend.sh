#!/usr/bin/env bash
# Install & run Next.js frontend
# Usage: ./scripts/run_frontend.sh [install|dev|build|start|clean]
# Default: dev (development server)

set -euo pipefail

: "${FRONTEND_DIR:=../frontend}"
: "${NODE_ENV:=development}"
: "${NEXT_PORT:=3000}"
ACTION="${1:-dev}"

cd "$(dirname "$0")" || exit 1
FRONT_DIR="$(realpath "$FRONTEND_DIR")"
cd "$FRONT_DIR"

# Choose npm or pnpm automatically if present
if command -v pnpm >/dev/null 2>&1; then
    PM="pnpm"
else
    PM="npm"
fi

case "$ACTION" in
    install)
        echo "[frontend] Installing dependencies with $PM"
        if [[ "$PM" == "pnpm" ]]; then
            pnpm install
        else
            npm install
        fi
        ;;
    dev)
        echo "[frontend] Starting Next.js dev server on port ${NEXT_PORT}"
        export NODE_ENV="$NODE_ENV"
        export PORT="$NEXT_PORT"
        if [[ "$PM" == "pnpm" ]]; then
            exec pnpm run dev
        else
            exec npm run dev
        fi
        ;;
    build)
        echo "[frontend] Building production assets"
        if [[ "$PM" == "pnpm" ]]; then
            pnpm run build
        else
            npm run build
        fi
        ;;
    start)
        echo "[frontend] Starting production server (expects build done)"
        if [[ "$PM" == "pnpm" ]]; then
            exec pnpm run start
        else
            exec npm run start
        fi
        ;;
    clean)
        echo "[frontend] Cleaning .next and node_modules (use with caution)"
        rm -rf .next node_modules
        ;;
    *)
        echo "Unknown action: $ACTION"
        exit 1
        ;;
esac
