#!/usr/bin/env bash
###############################################################################
# Git CLI Tracker
# ----------------
# Watches the *parent repository* for any change, then:
#   1. adds everything,
#   2. commits with a timestamped message,
#   3. pushes to the configured remote.
#
# USAGE: ./tracker.sh [interval_seconds] [commit_prefix]
#   interval_seconds   How often to check for changes   (default: 60 s)
#   commit_prefix      Message prefix (e.g. "auto")     (default: "auto")
#
# REQUIREMENTS:
#   • PAT or SSH already cached (so `git push` is non-interactive)
#   • Run from the root of the repo you want to track
###############################################################################

set -euo pipefail

INTERVAL="${1:-60}"        # how often to poll
PREFIX="${2:-auto}"        # optional commit-message prefix

echo "📡 Git CLI Tracker running every ${INTERVAL}s …"
echo "   Commit prefix : ${PREFIX}"
echo "   Repo          : $(git rev-parse --show-toplevel)"
echo "   Remote        : $(git remote get-url origin)"
echo "––––––––––––––––––––––––––––––––––––––––––––––––––"

while true; do
  # --porcelain gives a clean, parse-friendly output
  if [[ -n $(git status --porcelain) ]]; then
      TIMESTAMP="$(date '+%Y-%m-%d %H:%M:%S')"
      echo "🔄  Change detected – committing @ ${TIMESTAMP}"
      git add -A
      git commit -m "${PREFIX}: snapshot ${TIMESTAMP}"
      git push
  fi
  sleep "${INTERVAL}"
done