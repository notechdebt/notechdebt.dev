(function () {
  // Case studies used to live at #/p/<slug>. Send old shared links to the real pages.
  var old = location.hash.match(/^#\/p\/([\w-]+)/);
  if (old) { location.replace('/work/' + old[1] + '/'); return; }

  // ---------- architecture diagram (homepage): lights up the layers of each project card ----------
  (function () {
    var diagram = document.getElementById('diagram');
    if (!diagram) return;
    var E = [['interface', 'api'], ['api', 'ai'], ['api', 'payments'], ['api', 'data'], ['ai', 'data'], ['payments', 'data']];
    var nodes = diagram.querySelectorAll('.node');
    var cards = Array.prototype.slice.call(document.querySelectorAll('.card[data-layers]'));
    var figname = document.getElementById('figname');
    if (!cards.length) return;
    var auto = 0, hover = null;
    function activate(i) {
      var on = {};
      cards[i].getAttribute('data-layers').split(' ').forEach(function (k) { on[k] = 1; });
      nodes.forEach(function (n) { n.classList.toggle('on', !!on[n.getAttribute('data-node')]); });
      E.forEach(function (e, j) {
        var act = on[e[0]] && on[e[1]];
        document.getElementById('e' + j).classList.toggle('on', !!act);
        document.getElementById('c' + j).classList.toggle('on', !!act);
      });
      cards.forEach(function (c, k) { c.classList.toggle('on', k === i); });
      figname.textContent = cards[i].querySelector('.name').textContent.toUpperCase();
    }
    cards.forEach(function (c, i) {
      c.addEventListener('mouseenter', function () { hover = i; activate(i); });
      c.addEventListener('mouseleave', function () { hover = null; activate(auto); });
    });
    activate(0);
    setInterval(function () { if (hover === null) { auto = (auto + 1) % cards.length; activate(auto); } }, 2800);
  })();

  // ---------- offer cards: highlight follows the pointer, rests on the featured one ----------
  (function () {
    var offers = document.querySelectorAll('.offer');
    if (!offers.length) return;
    var grid = offers[0].closest('.grid3');
    function light(el) { offers.forEach(function (o) { o.classList.toggle('lit', o === el); }); }
    function rest() { light(document.querySelector('.offer-feat') || offers[0]); }
    offers.forEach(function (o) {
      o.addEventListener('mouseenter', function () { light(o); });
      o.addEventListener('focusin', function () { light(o); });
    });
    if (grid) {
      grid.addEventListener('mouseleave', rest);
      grid.addEventListener('focusout', function (e) { if (!grid.contains(e.relatedTarget)) rest(); });
    }
  })();

  // ---------- drafting crosshair (homepage hero) ----------
  (function () {
    var sheet = document.getElementById('sheet');
    if (!sheet) return;
    var xh = document.getElementById('xhh'), xv = document.getElementById('xhv'), xt = document.getElementById('xht');
    function pad(v) { v = Math.max(0, Math.round(v)); return ('000' + v).slice(-4); }
    sheet.addEventListener('mousemove', function (ev) {
      var r = sheet.getBoundingClientRect(), x = ev.clientX - r.left, y = ev.clientY - r.top;
      sheet.classList.add('hovering');
      xh.style.top = y + 'px'; xv.style.left = x + 'px';
      xt.style.left = Math.min(x + 14, r.width - 130) + 'px'; xt.style.top = (y + 14) + 'px';
      xt.textContent = 'X ' + pad(x) + ' · Y ' + pad(y);
    });
    sheet.addEventListener('mouseleave', function () { sheet.classList.remove('hovering'); });
  })();

  // ---------- scroll-linked motion (works both ways, every browser) ----------
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var bar = document.getElementById('progress');
  var els = Array.prototype.slice.call(document.querySelectorAll('[data-sr]'));
  var ticking = false;
  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function update() {
    ticking = false;
    var vh = window.innerHeight;
    var max = document.documentElement.scrollHeight - vh;
    if (bar) bar.style.setProperty('--sp', max > 0 ? clamp(window.scrollY / max) : 0);
    els.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (el.getAttribute('data-sr') === 'exit') {
        // On phones the hero is taller than the screen, so measuring from its top faded it while you were
        // still reading it. There, wait until its bottom edge passes mid-screen and fade as it leaves.
        el.style.setProperty('--q', r.height > vh
          ? clamp((vh * 0.5 - r.bottom) / (vh * 0.5))
          : clamp(-r.top / (r.height * 0.9)));
        return;
      }
      var d = +(el.getAttribute('data-d') || 0);
      var start = vh * (0.98 - d * 0.06), span = vh * 0.32;
      // scroll positions where this element's reveal begins and ends
      var docTop = r.top + window.scrollY;
      var s0 = docTop - start, s1 = s0 + span;
      // near the bottom of the page the reveal must finish by the time you hit the end
      if (s1 > max) { s1 = max; s0 = Math.min(s0, s1 - span * 0.6); }
      var p = max <= 0 ? 1 : clamp((window.scrollY - s0) / Math.max(1, s1 - s0));
      el.style.setProperty('--p', p.toFixed(3));
    });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
