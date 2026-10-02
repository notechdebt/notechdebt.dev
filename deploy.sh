#!/usr/bin/env bash
# Publishes this folder to GitHub Pages at https://<your-github-username>.github.io
# First run: creates the repo, pushes, and turns on Pages.
# Later runs: commits your changes and pushes them.
# Usage: ./deploy.sh            (default commit message)
#        ./deploy.sh "message"  (your own commit message)
set -euo pipefail
cd "$(dirname "$0")"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI not found. Install it with:  brew install gh   then run:  gh auth login"
  exit 1
fi
if ! gh auth status >/dev/null 2>&1; then
  echo "You're not logged in to GitHub CLI. Run:  gh auth login"
  exit 1
fi

LOGIN="$(gh api user -q .login)"
REPO="notechdebt.dev"
if [ "$LOGIN" != "kristoprifti" ]; then
  echo "Note: you're logged in as '$LOGIN', so the site will be https://$REPO"
fi

if [ ! -d .git ]; then
  git init -q -b main
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js not found. Install it with:  brew install node"
  exit 1
fi
node tools/build.mjs

git add -A
if ! git diff --cached --quiet; then
  git commit -q -m "${1:-Update site}"
  echo "Committed changes."
else
  echo "No changes to commit."
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  if gh repo view "$LOGIN/$REPO" >/dev/null 2>&1; then
    git remote add origin "https://github.com/$LOGIN/$REPO.git"
  else
    echo "Creating public repo $LOGIN/$REPO ..."
    gh repo create "$LOGIN/$REPO" --public --source=. --remote=origin >/dev/null
  fi
fi

git push -u origin main

# Turn on Pages (main branch, root folder). Harmless if it's already on.
gh api -X POST "repos/$LOGIN/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 || true

echo ""
echo "Done. Live in 1 to 2 minutes at: https://$REPO"
if [ -f CNAME ]; then echo "Custom domain (once DNS is set up): https://$(cat CNAME)"; fi
