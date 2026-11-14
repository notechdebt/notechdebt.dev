# notechdebt.dev

Ship fast. Owe nothing. Personal site of Kristo Prifti, software architect. Served by GitHub Pages from the repo notechdebt/notechdebt.dev, behind Cloudflare.

## Deploy

Push to `main`. The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the generated pages and publishes the site, usually within a minute. Follow it under the repo's **Actions** tab, or start it by hand there with **Run workflow**.

## Editing

- Homepage: edit `index.html` directly.
- Header, contact block and footer: edit them in `index.html` (between the `<!-- shared:... -->` markers). The build copies them into every other page.
- Case studies: edit `tools/projects.mjs`.
- Atlassian Marketplace app pages (`/apps/`): edit `tools/apps.mjs`. App screenshots are the 1840x900 Marketplace highlight images, saved as `img/<slug>.webp` (1280 wide) plus `-960`, `-640` and `-1840` (opened on click); a page's `og` preview is rendered by `node tools/images.mjs`.
- Pearl's docs follow its releases: `PEARL_SHIPPED` at the top of `tools/apps.mjs` lists each release (`base`, `a`, `b`) with the date its docs went live, and the newest one is what the pages describe (its date is "Last updated" on every `/apps/` page). Text that differs by release uses `from('a', ...)` and `by({ base, a, b })`. Preview another release with `PEARL_PREVIEW=base node tools/build.mjs`.
- App screenshots from a 1840x900 PNG: `sh tools/app-shot.sh path/to/image.png <slug>` writes all four sizes (needs `brew install webp`). Pearl's release A screenshots (`pearl-a-sharp`, `pearl-a-editor`, `pearl-a-export`, `pearl-a-gantt`, `pearl-a-styles`) replace the older ones automatically once all four sizes are in `img/`.
- New project: add it to `tools/projects.mjs` (with today's date as `published`), put the screenshot at `img/<slug>.webp` (1280 wide), make the smaller copies with `cwebp -q 78 -resize 640 0 img/<slug>.webp -o img/<slug>-640.webp` and the same with `960`, add its card to `index.html` and its link to the footer list, then run `node tools/images.mjs` (social preview, needs Chrome) and commit the new images.

## Preview locally

    node tools/build.mjs && python3 -m http.server 8000   # then open http://localhost:8000

The build writes `work/`, `404.html` and `sitemap.xml`. They are git-ignored; the workflow regenerates them on every push.

## Files

- `index.html`            homepage
- `assets/`               shared stylesheet, script and self-hosted fonts
- `img/`                  screenshots (1280, 960 and 640 wide), portrait, `og/` social preview images
- `tools/`                `projects.mjs` (case-study content), `apps.mjs` (Marketplace app pages), `build.mjs` (pages + sitemap), `images.mjs` (previews + icons), `app-shot.sh` (app screenshot sizes)
- `.github/workflows/`    build and deploy on push
- `robots.txt`            crawl rules and sitemap location
- `favicon.*`, `icon-*.png`, `apple-touch-icon.png`, `site.webmanifest`  icons
- `CNAME`                 the custom domain, notechdebt.dev
