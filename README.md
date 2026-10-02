# notechdebt.dev

Ship fast. Owe nothing. Personal site of Kristo Prifti, software architect. Served by GitHub Pages from the repo kristoprifti/notechdebt.dev.

## Deploy

    ./deploy.sh                  # first time: creates repo, pushes, turns on GitHub Pages
    ./deploy.sh "what changed"   # later: rebuild the generated pages, commit and publish

Needs the GitHub CLI (`brew install gh`) and `gh auth login` once, plus Node 18+ for the build step.

## Editing

- Homepage: edit `index.html` directly.
- Header, contact block and footer: edit them in `index.html` (between the `<!-- shared:... -->` markers). `node tools/build.mjs` copies them into every other page.
- Case studies: edit `tools/projects.mjs`, then run `node tools/build.mjs`. Never edit `work/**` or `404.html` by hand; they are overwritten.
- New project: add it to `tools/projects.mjs`, put the screenshot at `img/<slug>.webp` (1280 wide), make the small copy with `cwebp -q 78 -resize 640 0 img/<slug>.webp -o img/<slug>-640.webp`, add its card to `index.html` and its link to the footer list, then run `node tools/images.mjs` (social preview, needs Chrome) and `node tools/build.mjs`.

## Files

- `index.html`            homepage
- `work/`                 case-study pages and the case-study index (generated)
- `404.html`, `sitemap.xml` (generated)
- `assets/`               shared stylesheet, script and self-hosted fonts
- `img/`                  screenshots (1280 and 640 wide), portrait, `og/` social preview images
- `tools/`                `projects.mjs` (case-study content), `build.mjs`, `images.mjs`
- `robots.txt`            crawl rules and sitemap location
- `favicon.*`, `icon-*.png`, `apple-touch-icon.png`, `site.webmanifest`  icons
- `.nojekyll`             tells GitHub Pages to serve the files as they are
- `deploy.sh`             one-command publish
- `CNAME`                 tells GitHub Pages to serve the site on notechdebt.dev
