/* ================= Fachbegriff-Tooltips =================
   Marks the first occurrence of each glossary term per chapter (and per dynamically
   rendered panel) and shows a short explanation on hover, focus or tap. */
(function () {
  const content = document.querySelector('.content');
  if (!content || typeof GLOSS === 'undefined') return;

  /* ---- matcher ---- */
  const lit2key = new Map();
  Object.entries(TERM_PATTERNS).forEach(([k, arr]) => { if (GLOSS[k]) arr.forEach(l => lit2key.set(l, k)); });
  const lits = [...lit2key.keys()].sort((a, b) => b.length - a.length).map(l => l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const RX = new RegExp(`(?<![\\p{L}\\p{N}_-])(${lits.join('|')})(?![\\p{L}\\p{N}_])`, 'gu');

  const SKIP = '.ch-group-title, .toc-group, .ch-grid, .meta-row, a, button, kbd, code, h1, h2, h3, h4, svg, input, label, select, textarea, summary, figcaption, th, .term, .tt, .path, .chip, .caption, #gloss, .gloss, .search-results, .toc, .sidebar, .ch-tile, .in-chapter, .ch-nav, .done-box, .quiz-opts, .myth-btns, .hero-stats, .dots, .stepper-foot, .combo-picks, .seg, .task-dots, .hs-list, .sim-phone, .kt-phone, .gt-phone, .call-phone, .expo-img, .lab-view, .eyebrow, .ch-eyebrow, .step-count, .tip-foot, .brand';
  const SCOPE = '.step-text, .pp-body, .myth, .bg-card, .ts-sol, .quiz-fb, .ca-card, .hs-info, .combo-out, .knox-detail, .trainer-fb, .cs-item, section';
  const seen = new WeakMap();
  const DYN = SCOPE.replace(', section', '');

  function annotate(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || n.nodeValue.length < 2) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        if (!p || p.closest(SKIP)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const scope = node.parentElement.closest(SCOPE) || content;
      let set = seen.get(scope); if (!set) { set = new Set(); seen.set(scope, set); }
      // also respect manually placed terms in this scope
      if (!set.init) { scope.querySelectorAll('.term[data-term]').forEach(t => set.add(t.dataset.term)); set.init = true; }
      const text = node.nodeValue; RX.lastIndex = 0;
      let m, last = 0, frag = null;
      while ((m = RX.exec(text))) {
        const key = lit2key.get(m[1]);
        if (!key || set.has(key)) continue;
        set.add(key);
        frag = frag || document.createDocumentFragment();
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'term auto'; b.dataset.term = key; b.textContent = m[1];
        frag.appendChild(b); last = m.index + m[1].length;
      }
      if (frag) { frag.appendChild(document.createTextNode(text.slice(last))); node.parentNode.replaceChild(frag, node); }
    });
  }

  /* ---- tooltip UI ---- */
  const tt = document.createElement('div');
  tt.className = 'tt'; tt.id = 'term-tooltip'; tt.setAttribute('role', 'tooltip'); tt.hidden = true;
  document.body.appendChild(tt);
  let cur = null, hideT = null, showT = null, pinned = false;
  const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;

  function place(el) {
    const r = el.getBoundingClientRect(), w = tt.offsetWidth, h = tt.offsetHeight, m = 12;
    const left = Math.max(m, Math.min(r.left + r.width / 2 - w / 2, innerWidth - w - m));
    const below = r.top < h + 20;
    const top = below ? r.bottom + 10 : r.top - h - 10;
    tt.style.left = left + 'px'; tt.style.top = Math.max(m, top) + 'px';
    tt.dataset.side = below ? 'below' : 'above';
    tt.style.setProperty('--ax', Math.max(14, Math.min(w - 14, r.left + r.width / 2 - left)) + 'px');
  }
  function show(el, pin) {
    clearTimeout(hideT);
    const g = GLOSS[el.dataset.term]; if (!g) return;
    if (cur && cur !== el) cur.setAttribute('aria-expanded', 'false');
    cur = el; pinned = !!pin;
    tt.innerHTML = `<b>${esc(g[0])}</b><span>${esc(g[1])}</span><a href="#glossar" class="tt-more">Alle Begriffe im Glossar</a>`;
    tt.hidden = false; el.setAttribute('aria-expanded', 'true'); el.setAttribute('aria-describedby', 'term-tooltip');
    place(el);
  }
  function hide() {
    clearTimeout(showT); tt.hidden = true; pinned = false;
    if (cur) { cur.setAttribute('aria-expanded', 'false'); cur.removeAttribute('aria-describedby'); cur = null; }
  }

  document.addEventListener('click', e => {
    const t = e.target.closest('.term');
    if (t) { e.preventDefault(); if (cur === t && pinned) hide(); else show(t, true); return; }
    if (e.target.closest('.tt-more')) { hide(); return; }
    if (!e.target.closest('.tt')) hide();
  });
  if (canHover) {
    document.addEventListener('mouseover', e => {
      const t = e.target.closest('.term');
      if (t) { clearTimeout(hideT); clearTimeout(showT); if (cur !== t) showT = setTimeout(() => show(t, false), 120); }
      else if (e.target.closest('.tt')) clearTimeout(hideT);
    });
    document.addEventListener('mouseout', e => {
      if (pinned) return;
      if (e.target.closest('.term') || e.target.closest('.tt')) { clearTimeout(showT); hideT = setTimeout(hide, 180); }
    });
  }
  document.addEventListener('focusin', e => { const t = e.target.closest('.term'); if (t) show(t, false); });
  document.addEventListener('focusout', e => { if (e.target.closest('.term') && !pinned) hideT = setTimeout(hide, 120); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !tt.hidden) hide(); });
  addEventListener('scroll', () => { if (!tt.hidden) { if (pinned && cur) place(cur); else hide(); } }, { passive: true });
  addEventListener('resize', () => { if (cur && !tt.hidden) place(cur); });

  /* ---- initial pass + dynamic content ---- */
  annotate(content);
  let queued = new Set(), raf = 0;
  const mo = new MutationObserver(muts => {
    muts.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1 && !n.classList.contains('term')) queued.add(n); }));
    if (queued.size && !raf) raf = requestAnimationFrame(() => {
      raf = 0; const list = [...queued]; queued = new Set();
      mo.disconnect();
      // re-rendered panels (e.g. the next stepper step) get their own fresh 'first occurrence'
      list.forEach(n => { const sc = n.isConnected && n.closest(DYN); if (sc) seen.delete(sc); });
      list.forEach(n => { if (n.isConnected) annotate(n); });
      mo.observe(content, { childList: true, subtree: true });
    });
  });
  mo.observe(content, { childList: true, subtree: true });
})();
