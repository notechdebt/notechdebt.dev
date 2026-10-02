# kristoprifti.github.io

Personal site of Kristo Prifti, software architect.

## Deploy

    ./deploy.sh                  # first time: creates repo, pushes, turns on GitHub Pages
    ./deploy.sh "what changed"   # later: commit and publish your changes

Needs the GitHub CLI (`brew install gh`) and `gh auth login` once.

## Files

- `index.html`  the whole site (photo and screenshots are embedded)
- `.nojekyll`   tells GitHub Pages to serve the files as they are
- `deploy.sh`   one-command publish
