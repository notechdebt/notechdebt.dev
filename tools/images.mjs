// Renders the social preview images (img/og/*.png, 1200x630) and the app icons
// (favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png) with headless Chrome.
// Run it after adding a project or changing its name/one-liner:  node tools/images.mjs
// Needs Google Chrome; set CHROME=/path/to/chrome if it isn't in the default macOS location.
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { projects } from './projects.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const TMP = mkdtempSync(join(tmpdir(), 'notechdebt-img-'));
const asset = (p) => pathToFileURL(join(ROOT, p)).href;
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function shoot(html, out, w, h) {
  const src = join(TMP, 'page.html');
  writeFileSync(src, html);
  mkdirSync(dirname(out), { recursive: true });
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--allow-file-access-from-files', '--virtual-time-budget=3000', `--window-size=${w},${h}`, `--screenshot=${out}`, pathToFileURL(src).href], { stdio: 'ignore' });
}

const LOGO = `<svg width="56" height="56" viewBox="0 0 40 40"><path d="M4 4h32v9H13v23H4z" fill="#FFB84D"/><path d="M36 15v21H15v-9h12V15z" fill="#EAF2FF"/></svg>`;

function card({ label, title, sub, right, size }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:S;font-weight:400 800;src:url(${asset('assets/fonts/schibsted-grotesk-latin.woff2')})}
@font-face{font-family:M;font-weight:500;src:url(${asset('assets/fonts/ibm-plex-mono-500-latin.woff2')})}
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{background:#0B2342;color:#EAF2FF;font-family:S,sans-serif;
  background-image:linear-gradient(rgba(234,242,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(234,242,255,.07) 1px,transparent 1px),linear-gradient(rgba(234,242,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(234,242,255,.035) 1px,transparent 1px);
  background-size:80px 80px,80px 80px,16px 16px,16px 16px}
.frame{position:absolute;inset:28px;border:1.5px solid rgba(234,242,255,.5);display:flex;gap:44px;padding:52px 56px;box-sizing:border-box}
.left{flex:1;display:flex;flex-direction:column;justify-content:space-between;min-width:0}
.brand{display:flex;align-items:center;gap:16px;font-family:M,monospace;font-size:26px}
.brand b{font-weight:500;color:#FFB84D}.brand i{font-style:normal;color:#A9C2E3}
.label{font-family:M,monospace;font-size:20px;letter-spacing:.14em;color:#FFB84D}
h1{margin:16px 0 0;font-weight:800;font-size:${size}px;line-height:1;letter-spacing:-.035em}
h1 span{color:#FFB84D}
p{margin:0;font-size:26px;line-height:1.4;color:#A9C2E3}
.shot{width:470px;flex:0 0 auto;align-self:center;border:1.5px solid rgba(234,242,255,.5);background:#0d1a2b}
.shot .bar{height:30px;border-bottom:1px solid rgba(234,242,255,.18);display:flex;gap:8px;align-items:center;padding:0 12px}
.shot .bar i{width:10px;height:10px;border-radius:50%;border:1px solid rgba(234,242,255,.5)}
.shot img{display:block;width:100%;height:330px;object-fit:cover;object-position:top center}
.me{align-self:center;display:flex;flex-direction:column;align-items:center;gap:18px;font-family:M,monospace;font-size:18px;letter-spacing:.1em;color:#A9C2E3;text-align:center}
.me img{width:220px;height:220px;border-radius:50%;border:3px solid #FFB84D;object-fit:cover}
.me b{display:block;font-family:S,sans-serif;font-size:30px;letter-spacing:-.01em;color:#EAF2FF;font-weight:700;margin-bottom:6px}
</style></head><body><div class="frame">
<div class="left"><div class="brand">${LOGO}<span><b>no</b>techdebt<i>.dev</i></span></div>
<div><span class="label">${esc(label)}</span><h1>${title}</h1></div><p>${esc(sub)}</p></div>${right}</div></body></html>`;
}

// ---------- social preview images ----------
const home = card({
  label: 'SOFTWARE ARCHITECT · AI · FULL-STACK', title: 'Ship fast.<br><span>Owe nothing.</span>',
  sub: 'AI, web and custom software that ships in weeks and stays cheap to change.',
  right: `<div class="me"><img src="${asset('img/kristo-prifti.jpg')}"><span><b>Kristo Prifti</b>SOFTWARE ARCHITECT</span></div>`, size: 92
});
shoot(home, join(ROOT, 'img/og/home.png'), 1200, 630);

for (const p of projects) {
  const size = p.name.length > 18 ? 60 : p.name.length > 12 ? 72 : 84;
  const html = card({
    size, label: `CASE STUDY · ${p.tag}`, title: esc(p.name), sub: p.one.split(/(?<=\.)\s/)[0],
    right: `<div class="shot"><div class="bar"><i></i><i></i><i></i></div><img src="${asset(`img/${p.slug}.webp`)}"></div>`
  });
  shoot(html, join(ROOT, `img/og/${p.slug}.png`), 1200, 630);
}

// ---------- icons ----------
const svg = readFileSync(join(ROOT, 'favicon.svg'), 'utf8');
const iconHtml = (s) => `<!doctype html><html><body style="margin:0;width:${s}px;height:${s}px;overflow:hidden"><img src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}" width="${s}" height="${s}" style="display:block"></body></html>`;
for (const [name, s] of [['icon-512.png', 512], ['icon-192.png', 192], ['apple-touch-icon.png', 180]]) shoot(iconHtml(s), join(ROOT, name), s, s);

// favicon.ico: an ICO container holding PNG images (supported by every current browser and by Google)
const pngs = [16, 32, 48].map((s) => { const f = join(TMP, `ico-${s}.png`); shoot(iconHtml(s), f, s, s); return [s, readFileSync(f)]; });
const head = Buffer.alloc(6 + 16 * pngs.length);
head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(pngs.length, 4);
let offset = head.length;
pngs.forEach(([s, buf], i) => {
  const o = 6 + 16 * i;
  head.writeUInt8(s, o); head.writeUInt8(s, o + 1); head.writeUInt8(0, o + 2); head.writeUInt8(0, o + 3);
  head.writeUInt16LE(1, o + 4); head.writeUInt16LE(32, o + 6); head.writeUInt32LE(buf.length, o + 8); head.writeUInt32LE(offset, o + 12);
  offset += buf.length;
});
writeFileSync(join(ROOT, 'favicon.ico'), Buffer.concat([head, ...pngs.map(([, b]) => b)]));

rmSync(TMP, { recursive: true, force: true });
console.log(`Rendered img/og/home.png, ${projects.length} project previews and the icons.`);
