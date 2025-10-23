#!/usr/bin/env bash
# Start both backend and frontend and forward logs to console.
# This simple orchestrator runs backend and frontend in background and cleans them up on exit.
# Usage: ./scripts/run_all.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

# Configurable commands (point to your local script locations)
BACKEND_CMD="./run_backend.sh run"
FRONTEND_CMD="./run_frontend.sh dev"

# PIDs we start
PIDS=()

cleanup() {
    echo
    echo "[run_all] Cleaning up..."
    for pid in "${PIDS[@]}"; do
        if kill -0 "$pid" 2>/dev/null; then
            echo "[run_all] Killing pid $pid"
            kill "$pid" || true
        fi
    done
    wait
    echo "[run_all] Done."
}

trap cleanup EXIT INT TERM

# Start backend
echo "[run_all] Starting backend..."
bash -lc "$BACKEND_CMD" &
PIDS+=("$!")
sleep 0.5

# Start frontend
echo "[run_all] Starting frontend..."
bash -lc "$FRONTEND_CMD" &
PIDS+=("$!")
sleep 0.5

# Wait and show simple status
while true; do
    for pid in "${PIDS[@]}"; do
        if kill -0 "$pid" 2>/dev/null; then
            : # process still running
        else
            echo "[run_all] process $pid exited. Exiting orchestrator."
            exit 0
        fi
    done
    sleep 1
done
