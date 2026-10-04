# notechdebt.dev

Ship fast. Owe nothing. Personal site of Kristo Prifti, software architect. Served by GitHub Pages from the repo notechdebt/notechdebt.dev, behind Cloudflare.

## Deploy

Push to `main`. The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the generated pages and publishes the site, usually within a minute. Follow it under the repo's **Actions** tab, or start it by hand there with **Run workflow**.

## Editing

- Homepage: edit `index.html` directly.
- Header, contact block and footer: edit them in `index.html` (between the `<!-- shared:... -->` markers). The build copies them into every other page.
- Case studies: edit `tools/projects.mjs`.
- New project: add it to `tools/projects.mjs` (with today's date as `published`), put the screenshot at `img/<slug>.webp` (1280 wide), make the smaller copies with `cwebp -q 78 -resize 640 0 img/<slug>.webp -o img/<slug>-640.webp` and the same with `960`, add its card to `index.html` and its link to the footer list, then run `node tools/images.mjs` (social preview, needs Chrome) and commit the new images.

## Preview locally

    node tools/build.mjs && python3 -m http.server 8000   # then open http://localhost:8000

The build writes `work/`, `404.html` and `sitemap.xml`. They are git-ignored; the workflow regenerates them on every push.

## Files

- `index.html`            homepage
- `assets/`               shared stylesheet, script and self-hosted fonts
- `img/`                  screenshots (1280, 960 and 640 wide), portrait, `og/` social preview images
- `tools/`                `projects.mjs` (case-study content), `build.mjs` (pages + sitemap), `images.mjs` (previews + icons)
- `.github/workflows/`    build and deploy on push
- `robots.txt`            crawl rules and sitemap location
- `favicon.*`, `icon-*.png`, `apple-touch-icon.png`, `site.webmanifest`  icons
- `CNAME`                 the custom domain, notechdebt.dev
