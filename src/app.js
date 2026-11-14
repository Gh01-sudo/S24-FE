(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get(k, d) { try { const v = localStorage.getItem('s24fe:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('s24fe:' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };

  /* ---------- toast & copy ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
  }
  function copyText(text) {
    try {
      navigator.clipboard.writeText(text).then(() => toast('Pfad kopiert: ' + text), () => toast('Kopieren nicht möglich. Bitte den Text markieren.'));
    } catch (e) { toast('Kopieren nicht möglich. Bitte den Text markieren.'); }
  }

  /* ---------- theme & font size ---------- */
  const root = document.documentElement;
  const savedTheme = store.get('theme', null);
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  $$('[data-act="theme"]').forEach(b => b.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next); store.set('theme', next);
    toast(next === 'dark' ? 'Dunkle Darstellung' : 'Helle Darstellung');
  }));
  let fs = store.get('fs', 16);
  const applyFs = () => root.style.setProperty('--fs', fs + 'px');
  applyFs();
  const setFs = d => { fs = Math.max(14, Math.min(22, fs + d)); applyFs(); store.set('fs', fs); toast('Schriftgröße ' + fs + ' px'); };
  $$('[data-act="font-up"]').forEach(b => b.addEventListener('click', () => setFs(1)));
  $$('[data-act="font-down"]').forEach(b => b.addEventListener('click', () => setFs(-1)));

  /* ---------- decorations ---------- */
  $$('[data-icon]').forEach(el => el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon)));
  const CI = { tip: 'bulb', info: 'info', warn: 'warn', danger: 'warn' };
  $$('.callout').forEach(el => {
    const type = [...el.classList].find(c => CI[c]);
    el.innerHTML = icon(CI[type]) + `<div><b class="t">${esc(el.dataset.t || '')}</b>${el.innerHTML}</div>`;
  });
  $$('.path[data-path]').forEach(el => {
    const parts = el.dataset.path.split('|');
    el.innerHTML = '<span class="lbl">Pfad</span>' + parts.map(p => `<span class="crumb">${esc(p)}</span>`).join('<span class="sep">›</span>') +
      '<button class="copy" type="button" aria-label="Pfad kopieren">Kopieren</button>';
    el.querySelector('.copy').addEventListener('click', () => copyText(parts.join(' › ')));
  });
  const MOCKS = {
    hero: () => homeScreen({ label: 'Startbildschirm des Galaxy S24 FE' }),
    'side-power': sidePower,
    'home-labeled': () => homeScreen({ labels: true, label: 'Startbildschirm mit nummerierten Bereichen' }),
    quick: () => quickScreen(),
    keyboard: keyboardScreen,
    permission: permissionScreen,
    battery: batteryScreen
  };
  $$('[data-mock]').forEach(el => { const f = MOCKS[el.dataset.mock]; if (f) el.insertAdjacentHTML('afterbegin', f()); });

  /* ---------- chapter meta & done boxes ---------- */
  const LVL = { 1: 'Einsteiger', 2: 'Grundlagen+', 3: 'Bei Bedarf' };
  const chapters = $$('section[data-ch]').filter(s => +s.dataset.ch > 0);
  chapters.forEach((sec, i) => { sec.dataset.ch = i + 1; const n = $('.chapter-num', sec); if (n) n.textContent = i + 1; });
  $$('[data-chref]').forEach(a => { const sec = document.getElementById(a.dataset.chref); if (sec) a.textContent = 'Kapitel ' + sec.dataset.ch; });
  let done = new Set(store.get('done', []));
  chapters.forEach(sec => {
    const head = $('.chapter-head', sec);
    head.insertAdjacentHTML('afterend', `<div class="meta-row"><span class="chip">${icon('timer')}ca. ${sec.dataset.time} Min.</span><span class="chip lvl-${sec.dataset.lvl}">${LVL[sec.dataset.lvl]}</span><span class="chip">${$$('h3', sec).length} Abschnitte</span></div>`);
    const box = document.createElement('div');
    box.className = 'done-box';
    box.innerHTML = `<p>Haben Sie „${esc(sec.dataset.title)}“ durchgearbeitet?</p><button class="btn done-btn" type="button" aria-pressed="false">${icon('check')}<span>Als erledigt markieren</span></button>`;
    const footer = $('footer', sec);
    footer ? sec.insertBefore(box, footer) : sec.appendChild(box);
    $('button', box).addEventListener('click', () => {
      const id = sec.id;
      if (done.has(id)) done.delete(id); else { done.add(id); toast('Kapitel erledigt: ' + sec.dataset.title); }
      store.set('done', [...done]); syncDone();
    });
  });

  /* ---------- chapter meta (icons & groups) ---------- */
  const CH_META = {
    geraet: ['phone', 'Erste Schritte'], einrichtung: ['steps', 'Erste Schritte'], bedienung: ['tap', 'Erste Schritte'], telefon: ['chat', 'Erste Schritte'],
    sicherheit: ['shield', 'Sicherheit'], knox: ['lock', 'Sicherheit'], schutzplan: ['check', 'Sicherheit'],
    kamera: ['lens', 'Kamera & KI'], ai: ['search', 'Kamera & KI'],
    akku: ['battery', 'Alltag'], anpassen: ['contrast', 'Alltag'], verbindungen: ['wifi', 'Alltag'], apps: ['app', 'Alltag'],
    alltag: ['grid', 'Alltag'], profi: ['bulb', 'Profi-Wissen'], hilfe: ['wrench', 'Hilfe & Nachschlagen'], spickzettel: ['menu', 'Hilfe & Nachschlagen'], datenblatt: ['note', 'Hilfe & Nachschlagen'], wissen: ['book', 'Hilfe & Nachschlagen']
  };
  const metaOf = sec => CH_META[sec.id] || ['book', 'Weitere'];
  chapters.forEach(sec => {
    const [ic, grp] = metaOf(sec), head = $('.chapter-head', sec);
    const num = $('.chapter-num', sec); if (num) { num.innerHTML = icon(ic); num.setAttribute('aria-hidden', 'true'); }
    const txt = head && head.children[1];
    if (txt) txt.insertAdjacentHTML('afterbegin', `<div class="ch-eyebrow">Kapitel ${sec.dataset.ch} · ${esc(grp)}</div>`);
    const mr = head && head.nextElementSibling; if (txt && mr && mr.classList.contains('meta-row')) txt.appendChild(mr);
    const subs = $$('h3[id]', sec).filter(h => !/^quiz-/.test(h.id));
    if (subs.length > 2 && head) {
      head.insertAdjacentHTML('afterend', `<nav class="in-chapter" aria-label="In diesem Kapitel"><b>In diesem Kapitel</b><ul>${subs.map(h => `<li><a href="#${h.id}">${esc(h.textContent.trim())}</a></li>`).join('')}</ul></nav>`);
    }
  });
  chapters.forEach((sec, i) => {
    const prev = chapters[i - 1], next = chapters[i + 1];
    sec.insertAdjacentHTML('beforeend', `<nav class="ch-nav" aria-label="Kapitelnavigation">${prev ? `<a class="prev" href="#${prev.id}"><span>‹ Vorheriges Kapitel</span><b>${esc(prev.dataset.title)}</b></a>` : ''}${next ? `<a class="next" href="#${next.id}"><span>Nächstes Kapitel ›</span><b>${esc(next.dataset.title)}</b></a>` : ''}</nav>`);
  });

  /* ---------- TOC ---------- */
  const toc = $('#toc');
  let lastGroup = '';
  toc.innerHTML = `<li><a href="#start" data-sec="start"><span class="num">${icon('home')}</span><span>Willkommen</span><span></span></a></li>` +
    chapters.map(s => { const [ic, grp] = metaOf(s); const g = grp !== lastGroup ? `<li class="toc-group">${esc(grp)}</li>` : ''; lastGroup = grp; return g + `<li><a href="#${s.id}" data-sec="${s.id}" title="Kapitel ${s.dataset.ch}"><span class="num">${icon(ic)}</span><span>${esc(s.dataset.title)}</span>${icon('check', 'tick')}</a></li>`; }).join('');

  /* ---------- start page: chapter grid & stats ---------- */
  const grid = $('#chapter-grid');
  if (grid) {
    let g0 = '';
    grid.innerHTML = chapters.map(s => {
      const [ic, grp] = metaOf(s), desc = ($('.chapter-head p', s) || {}).textContent || '';
      const gh = grp !== g0 ? `<div class="ch-group-title">${esc(grp)}</div>` : ''; g0 = grp;
      return gh + `<a class="ch-tile" href="#${s.id}" data-sec="${s.id}"><span class="ch-ico">${icon(ic)}</span><span><b>${esc(s.dataset.title)}</b><p>${esc(desc)}</p><small>Kapitel ${s.dataset.ch} · ca. ${s.dataset.time} Min.</small></span></a>`;
    }).join('');
  }
  const hs = $('#hero-stats');
  if (hs) {
    const mins = chapters.reduce((a, s) => a + (+s.dataset.time || 0), 0);
    const inter = $$('.stepper, .explorer, .combo, .quiz, .ts, #settings-trainer, #key-trainer, #gesture-trainer, #call-sim, #expo-sim, #cam-lab, #cam-advisor, #charge-calc, #storage-calc, #protect-plan, #datasheet, #knox-layers, #tips-list, #myth-check').length;
    hs.innerHTML = `<div><b>${chapters.length}</b><span>Kapitel</span></div><div><b>${inter}</b><span>interaktive Übungen</span></div><div><b>ca. ${Math.round(mins / 60)} Std.</b><span>Lesezeit gesamt</span></div><div><b>Offline</b><span>ohne Internet nutzbar</span></div>`;
  }
  function syncDone() {
    chapters.forEach(sec => {
      const on = done.has(sec.id);
      const b = $('.done-btn', sec); b.setAttribute('aria-pressed', on); $('span', b).textContent = on ? 'Erledigt' : 'Als erledigt markieren';
      $(`#toc a[data-sec="${sec.id}"]`).classList.toggle('done', on);
    });
    const n = chapters.filter(s => done.has(s.id)).length;
    $('#pbar').style.width = (n / chapters.length * 100) + '%';
    $('#plabel').textContent = `${n} von ${chapters.length} Kapiteln`;
    const spb = $('#sp-bar'); if (spb) { spb.style.width = (n / chapters.length * 100) + '%'; $('#sp-sub').textContent = `${n} von ${chapters.length} Kapiteln erledigt`; }
    $$('.ch-tile').forEach(t => t.classList.toggle('done', done.has(t.dataset.sec)));
  }
  syncDone();

  // drawer
  const closeNav = () => document.body.classList.remove('nav-open');
  $('#menu-btn').addEventListener('click', () => document.body.classList.toggle('nav-open'));
  $('#scrim').addEventListener('click', closeNav);
  toc.addEventListener('click', e => { if (e.target.closest('a')) closeNav(); });

  // scrollspy
  const allSecs = $$('section[data-ch]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          $$('#toc a').forEach(a => a.classList.toggle('current', a.dataset.sec === en.target.id));
        }
      });
    }, { rootMargin: '-30% 0px -65% 0px' });
    allSecs.forEach(s => io.observe(s));
  }
  syncDone();
  const toTop = $('#totop'), rp = $('#read-progress');
  const onScroll = () => { toTop.hidden = scrollY < 900; const h = document.documentElement.scrollHeight - innerHeight; if (rp) rp.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%'; };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  toTop.addEventListener('click', () => scrollTo({ top: 0 }));

  /* ---------- learning paths ---------- */
  const PATHS = {
    neu: ['geraet', 'einrichtung', 'bedienung', 'sicherheit', 'akku', 'kamera', 'anpassen', 'verbindungen', 'apps', 'ai', 'hilfe', 'wissen'],
    wechsel: ['smartswitch', 'bedienung', 'tasten', 'gesten', 'sicherheit', 'ai', 'akkuschutz'],
    schnell: ['tasten', 'benachrichtigungen', 'akkuschutz', 'fingerabdruck', 'foto-tipps']
  };
  const titleOf = id => { const el = document.getElementById(id); if (!el) return id; return el.dataset.title || el.textContent.trim(); };
  function showPath(p) {
    $$('#paths .path-card').forEach(b => b.setAttribute('aria-pressed', b.dataset.path === p));
    $('#path-out').innerHTML = p ? PATHS[p].map((id, i) => `<li><a href="#${id}">${i + 1}. ${esc(titleOf(id))}</a></li>`).join('') : '';
  }
  $$('#paths .path-card').forEach(b => b.addEventListener('click', () => { store.set('path', b.dataset.path); showPath(b.dataset.path); }));
  showPath(store.get('path', null));

  /* ---------- steppers ---------- */
  $$('[data-stepper]').forEach(el => {
    const d = STEPPERS[el.dataset.stepper]; if (!d) return;
    let i = 0; const seen = new Set([0]);
    el.setAttribute('tabindex', '-1');
    el.innerHTML = `<div class="stepper-head"><b>${icon(d.icon)}${esc(d.title)}</b><div class="dots"></div></div>
      <div class="stepper-body"><figure class="shot" style="margin:0"></figure><div class="step-text" aria-live="polite"></div></div>
      <div class="stepper-foot"><button class="btn prev" type="button">${icon('chevL')}Zurück</button><button class="btn primary next" type="button">Weiter${icon('chevR')}</button></div>`;
    const dots = $('.dots', el), shot = $('.shot', el), text = $('.step-text', el), prev = $('.prev', el), next = $('.next', el);
    function render() {
      const s = d.steps[i]; seen.add(i);
      dots.innerHTML = d.steps.map((st, k) => `<button type="button" class="${seen.has(k) ? 'seen' : ''}" ${k === i ? 'aria-current="step"' : ''} aria-label="Schritt ${k + 1}: ${esc(st.h)}">${k + 1}</button>`).join('');
      shot.innerHTML = s.m() + `<figcaption>Schritt ${i + 1}: ${esc(s.h)}</figcaption>`;
      text.innerHTML = `<div class="step-count">Schritt ${i + 1} von ${d.steps.length}</div><h4>${esc(s.h)}</h4><p>${s.p}</p>${s.why ? `<div class="why"><b>Hintergrund:</b> ${s.why}</div>` : ''}`;
      prev.disabled = i === 0;
      next.innerHTML = i === d.steps.length - 1 ? `${icon('check')}Geschafft` : `Weiter${icon('chevR')}`;
    }
    dots.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; i = [...dots.children].indexOf(b); render(); });
    prev.addEventListener('click', () => { if (i > 0) { i--; render(); } });
    next.addEventListener('click', () => {
      if (i < d.steps.length - 1) { i++; render(); }
      else { toast('Super, „' + d.title + '“ abgeschlossen!'); i = 0; render(); }
    });
    el.addEventListener('keydown', e => {
      if (e.target.matches('input, textarea')) return;
      if (e.key === 'ArrowRight' && i < d.steps.length - 1) { i++; render(); }
      if (e.key === 'ArrowLeft' && i > 0) { i--; render(); }
    });
    render();
  });

  /* ---------- hotspot explorers ---------- */
  function hotspots(spots, active) {
    return spots.map((s, k) => `<g class="hs${k === active ? ' active' : ''}" data-i="${k}" tabindex="0" role="button" aria-label="${k + 1}: ${esc(s.t)}" transform="translate(${s.x} ${s.y})">
      <circle class="hit" r="22"/><circle class="pulse" r="11"/><circle class="dot" r="11"/><text>${k + 1}</text></g>`).join('');
  }
  function makeExplorer(cfg) {
    let view = cfg.initial, active = 0;
    const box = $(cfg.svg), list = $(cfg.list), info = $(cfg.info);
    function render() {
      const v = cfg.views[view];
      box.innerHTML = v.svg().replace(/<\/svg>\s*$/, hotspots(v.spots, active) + '</svg>');
      list.innerHTML = v.spots.map((s, k) => `<li><button type="button" data-i="${k}" aria-pressed="${k === active}"><span class="n">${k + 1}</span>${esc(s.t)}</button></li>`).join('');
      const s = v.spots[active];
      info.innerHTML = `<h4>${esc(s.t)}</h4>${s.w ? `<div class="where">Wo: ${esc(s.w)}</div>` : ''}<p>${esc(s.d)}</p>`;
    }
    const pick = k => { active = k; render(); };
    box.addEventListener('click', e => { const g = e.target.closest('.hs'); if (g) pick(+g.dataset.i); });
    box.addEventListener('keydown', e => { const g = e.target.closest('.hs'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pick(+g.dataset.i); } });
    list.addEventListener('click', e => { const b = e.target.closest('button'); if (b) pick(+b.dataset.i); });
    if (cfg.seg) $$(cfg.seg + ' button').forEach(b => b.addEventListener('click', () => {
      view = b.dataset.view; active = 0;
      $$(cfg.seg + ' button').forEach(x => x.setAttribute('aria-pressed', x === b)); render();
    }));
    render();
  }
  makeExplorer({ views: EXPLORER, initial: 'front', svg: '#explorer-svg', list: '#explorer-list', info: '#explorer-info', seg: '#explorer .seg' });
  makeExplorer({ views: { cam: { svg: () => cameraScreen(), spots: CAM_SPOTS } }, initial: 'cam', svg: '#cam-svg', list: '#cam-list', info: '#cam-info' });

  /* ---------- specs ---------- */
  const tb = $('#spec-table tbody');
  tb.innerHTML = SPECS.map((r, k) => `<tr class="spec-row" tabindex="0" data-k="${k}" aria-expanded="false"><td><b>${esc(r[0])}</b></td><td>${esc(r[1])}</td><td><span class="more">Erklärung ▾</span></td></tr>
    <tr class="spec-detail" hidden><td colspan="3">${esc(r[2])}</td></tr>`).join('');
  const toggleSpec = row => { const det = row.nextElementSibling; det.hidden = !det.hidden; row.setAttribute('aria-expanded', !det.hidden); $('.more', row).textContent = det.hidden ? 'Erklärung ▾' : 'Schließen ▴'; };
  tb.addEventListener('click', e => { const r = e.target.closest('.spec-row'); if (r) toggleSpec(r); });
  tb.addEventListener('keydown', e => { const r = e.target.closest('.spec-row'); if (r && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); toggleSpec(r); } });

  /* ---------- combos ---------- */
  const KEY_Y = { 'vol+': 85, 'vol-': 112, side: 157 };
  function renderCombo(id) {
    const c = COMBOS.find(x => x.id === id);
    const arrows = c.hot.map(k => arrowTo(224, KEY_Y[k], 182, KEY_Y[k])).join('');
    const labels = T(100, 345, c.l, 13, 'm-label', 700, 'middle') + T(100, 364, c.a, 11, 'm-label-muted', 500, 'middle') + T(100, 150, '', 1);
    $('#combo-svg').innerHTML = frontDevice(c.hot, arrows + labels, 380);
    $$('#combo-picks button').forEach(b => b.setAttribute('aria-pressed', b.dataset.id === id));
    $('#combo-out').innerHTML = `<h4>${esc(c.l)}</h4><div class="how">${c.how.map(h => ['+', 'oder'].includes(h) ? `<span>${h}</span>` : (/taste|Leiser|Lauter/.test(h) && h.length < 14 ? `<kbd>${esc(h)}</kbd>` : `<span>${esc(h)}</span>`)).join(' ')}</div><p>${esc(c.d)}</p>`;
  }
  $('#combo-picks').innerHTML = COMBOS.map(c => `<button type="button" data-id="${c.id}" aria-pressed="false">${esc(c.l)}</button>`).join('');
  $('#combo-picks').addEventListener('click', e => { const b = e.target.closest('button'); if (b) renderCombo(b.dataset.id); });
  renderCombo('shot');

  /* ---------- gestures ---------- */
  $('#gestures').innerHTML = GESTURES.map(g => `<div class="gesture"><svg viewBox="0 0 120 170" role="img" aria-label="${esc(g.b)}: ${esc(g.s)}">
    <rect x="20" y="6" width="80" height="158" rx="15" class="m-frame"/><rect x="24" y="10" width="72" height="150" rx="12" class="m-screen"/>
    <rect x="48" y="152" width="24" height="3" rx="1.5" class="m-muted"/>
    ${g.b === 'Circle to Search' ? '<circle cx="60" cy="70" r="24" class="m-hl"/>' : ''}
    ${g.hold ? '<circle cx="60" cy="40" r="10" class="m-accent-stroke" stroke-width="2"/>' : ''}
    <circle cx="${g.x}" cy="${g.y}" r="9" class="finger ${g.anim}"/></svg><b>${esc(g.b)}</b><span>${esc(g.s)}</span></div>`).join('');

  /* ---------- quiz ---------- */
  const quizEl = $('#quiz');
  let qi = 0, score = 0, answered = false;
  function renderQuiz() {
    if (qi >= QUIZ.length) {
      const best = Math.max(store.get('best', 0), score); store.set('best', best);
      const msg = score >= 10 ? 'Hervorragend! Sie kennen Ihr S24 FE sehr gut.' : score >= 7 ? 'Gut gemacht! Ein paar Kapitel lohnen sich zum Wiederholen.' : 'Ein guter Anfang. Schauen Sie sich die verlinkten Abschnitte noch einmal an.';
      quizEl.innerHTML = `<div class="score"><div class="big">${score} / ${QUIZ.length}</div><p>${msg}</p><p class="caption">Ihr bestes Ergebnis: ${best} / ${QUIZ.length}</p><button class="btn primary" type="button" id="quiz-again">${icon('refresh')}Noch einmal</button></div>`;
      $('#quiz-again').addEventListener('click', () => { qi = 0; score = 0; renderQuiz(); });
      return;
    }
    const q = QUIZ[qi]; answered = false;
    quizEl.innerHTML = `<div class="quiz-top"><b>Frage ${qi + 1} von ${QUIZ.length}</b><span class="chip">${score} richtig</span></div>
      <div class="progress-bar" style="display:block;max-width:none;margin-bottom:14px"><span style="width:${qi / QUIZ.length * 100}%"></span></div>
      <div class="quiz-q">${esc(q.q)}</div><div class="quiz-opts">${q.o.map((o, k) => `<button type="button" data-k="${k}">${esc(o)}</button>`).join('')}</div>
      <div class="quiz-fb" hidden></div><div class="quiz-nav"><button class="btn primary" type="button" id="quiz-next" hidden>${qi === QUIZ.length - 1 ? 'Ergebnis anzeigen' : 'Nächste Frage'}${icon('chevR')}</button></div>`;
    $('.quiz-opts', quizEl).addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b || answered) return; answered = true;
      const k = +b.dataset.k, ok = k === q.a; if (ok) score++;
      $$('.quiz-opts button', quizEl).forEach((x, j) => { x.disabled = true; if (j === q.a) x.classList.add('right'); else if (j === k) x.classList.add('wrong'); });
      const fb = $('.quiz-fb', quizEl); fb.hidden = false;
      fb.innerHTML = `<b>${ok ? 'Richtig!' : 'Leider falsch.'}</b> ${esc(q.e)} <a href="${q.l}">Nachlesen</a>`;
      const n = $('#quiz-next'); n.hidden = false; n.focus();
    });
    $('#quiz-next').addEventListener('click', () => { qi++; renderQuiz(); });
  }
  renderQuiz();

  /* ---------- troubleshooter ---------- */
  const tsEl = $('#ts'); let trail = [];
  function renderTs(id) {
    const n = TS[id];
    if (id === 'root') {
      trail = [];
      tsEl.innerHTML = `<div class="ts-q">${esc(n.q)}</div><div class="ts-opts">${n.o.map(o => `<button type="button" data-go="${o[0]}">${icon(o[2])}<span>${esc(o[1])}</span></button>`).join('')}</div>`;
      return;
    }
    trail.push(id);
    const step = trail.length;
    tsEl.innerHTML = `<div class="ts-crumbs">Lösungsweg · Schritt ${step}</div><div class="ts-sol"><h4>${esc(n.t)}</h4><ol>${n.s.map(s => `<li>${s}</li>`).join('')}</ol></div>
      <div class="ts-actions">${n.final ? '' : `<button class="btn primary" type="button" data-go="solved">${icon('check')}Ja, Problem gelöst</button><button class="btn" type="button" data-go="${n.n}">Nein, nächster Schritt${icon('chevR')}</button>`}
      <button class="btn" type="button" data-go="root">${icon('chevL')}Anderes Problem</button></div>`;
  }
  tsEl.addEventListener('click', e => {
    const b = e.target.closest('[data-go]'); if (!b) return;
    const go = b.dataset.go;
    if (go === 'solved') {
      tsEl.innerHTML = `<div class="ts-sol"><h4>Prima, das Problem ist gelöst!</h4><p>Merken Sie sich die Lösung: Häufig hilft beim nächsten Mal derselbe Schritt.</p></div><div class="ts-actions"><button class="btn" type="button" data-go="root">${icon('refresh')}Neues Problem</button></div>`;
      return;
    }
    renderTs(go);
    if (go !== 'root') tsEl.scrollIntoView({ block: 'nearest' });
  });
  renderTs('root');

  /* ---------- FAQ & glossary ---------- */
  $('#faq-list').innerHTML = FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="a">${esc(a)}</div></details>`).join('');
  const glossEl = $('#gloss');
  const glossEntries = Object.entries(GLOSS).sort((a, b) => a[1][0].localeCompare(b[1][0], 'de'));
  function renderGloss(q = '') {
    const n = q.trim().toLowerCase();
    const hits = glossEntries.filter(([, [t, d]]) => !n || t.toLowerCase().includes(n) || d.toLowerCase().includes(n));
    glossEl.innerHTML = hits.length ? hits.map(([k, [t, d]]) => `<div id="g-${k}"><b>${esc(t)}</b>${esc(d)}</div>`).join('') : '<div>Kein Begriff gefunden. Versuchen Sie die Suche oben in der Leiste.</div>';
  }
  $('#gloss-q').addEventListener('input', e => renderGloss(e.target.value));
  renderGloss();

  // term tooltips are handled in tooltips.js
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeNav(); hideResults(); } });

  /* ---------- sharing ---------- */
  const shareBtn = $('#share-btn');
  const isLocal = location.protocol === 'file:' || location.protocol === 'content:';
  if (shareBtn && isLocal) shareBtn.parentElement.hidden = true;
  if (shareBtn) shareBtn.addEventListener('click', async () => {
    const local = isLocal;
    if (local) { toast('Teilen Sie die Datei selbst, siehe Anleitung unten.'); return; }
    const url = location.href.split('#')[0];
    try { if (navigator.share) { await navigator.share({ title: document.title, url }); return; } }
    catch (e) { if (e && e.name === 'AbortError') return; }
    copyText(url);
  });

  window.HB = { store, toast };

  /* ---------- search ---------- */
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss');
  const index = [];
  allSecs.forEach(sec => {
    const chTitle = sec.dataset.title;
    const heads = $$('h2, h3[id]', sec);
    heads.forEach((h, k) => {
      let text = '', el = h.tagName === 'H2' ? h.closest('.chapter-head') || h : h;
      el = el.nextElementSibling;
      while (el && !(el.matches && el.matches('h3'))) {
        if (el.dataset && el.dataset.stepper) text += ' ' + STEPPERS[el.dataset.stepper].steps.map(s => s.h + ' ' + s.p + ' ' + (s.why || '')).join(' ');
        else text += ' ' + el.textContent;
        el = el.nextElementSibling;
      }
      text = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      const id = h.tagName === 'H2' ? sec.id : h.id;
      index.push({ id, title: h.textContent.trim(), ch: chTitle, text, nt: norm(h.textContent), nx: norm(text) });
    });
  });
  COMBOS.forEach(c => index.push({ id: 'tasten', title: c.l, ch: 'Tastenkombination', text: c.how.join(' ') + '. ' + c.d, nt: norm(c.l), nx: norm(c.how.join(' ') + ' ' + c.d) }));
  Object.entries(GLOSS).forEach(([k, [t, d]]) => index.push({ id: 'glossar', title: t, ch: 'Glossar', text: d, nt: norm(t), nx: norm(d) }));
  FAQ.forEach(([q, a]) => index.push({ id: 'faq', title: q, ch: 'Häufige Fragen', text: a, nt: norm(q), nx: norm(a) }));
  // Tipps, Mythen und Hintergrundwissen rendert erst interactive2.js, daher fehlen sie im DOM-Index oben.
  const strip = s => s.replace(/<[^>]+>/g, '');
  TIPS.forEach(t => { const x = strip(t.how + ' ' + t.why); index.push({ id: 'tipps', title: t.t, ch: 'Tipps & Tricks', text: x, nt: norm(t.t), nx: norm(x) }); });
  MYTHS.forEach(m => index.push({ id: 'mythen', title: m.q, ch: 'Mythen-Check', text: '', nt: norm(m.q), nx: '' }));
  BACKGROUND.forEach(b => { const x = strip(b.d); index.push({ id: 'hintergrund-wissen', title: b.t, ch: 'Hintergrundwissen', text: x, nt: norm(b.t), nx: norm(x) }); });
  ONEUI85.forEach(([t, d]) => index.push({ id: 'oneui85', title: t, ch: 'Neu in One UI 8.5', text: d, nt: norm(t), nx: norm(d) }));
  [...CHEAT.keys, ...CHEAT.gestures, ...CHEAT.paths, ...CHEAT.numbers].forEach(([a, b2]) => index.push({ id: 'spickzettel-seite', title: a, ch: 'Spickzettel', text: b2, nt: norm(a), nx: norm(b2) }));

  /* fehlertolerante Suche: Wortschatz + Synonyme */
  const vocab = new Set();
  index.forEach(it => (it.nt + ' ' + it.nx).split(/[^a-z0-9äöü]+/).forEach(w => { if (w.length >= 4) vocab.add(w); }));
  const allText = index.map(it => it.nt + ' ' + it.nx).join(' ');
  const SYN = new Map();
  SYNONYMS.forEach(g => g.forEach(w => SYN.set(w, g)));
  function lev(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i]; let best = i;
      for (let j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) cur[j] = Math.min(cur[j], prev[j - 2] === undefined ? cur[j] : prev[j - 2] + 1);
        best = Math.min(best, cur[j]);
      }
      if (best > max) return max + 1;
      prev = cur;
    }
    return prev[b.length];
  }
  function alternatives(w) {
    const alts = new Set();
    const g = SYN.get(w) || [...SYN.keys()].filter(k => k.length >= 4 && w.length >= 4 && (k.startsWith(w) || w.startsWith(k))).map(k => SYN.get(k))[0];
    if (g) g.forEach(x => { if (x !== w) alts.add(x); });
    let fuzzy = [];
    if (w.length >= 4 && !allText.includes(w)) {
      const max = w.length >= 8 ? 2 : 1;
      vocab.forEach(v => { if (v[0] === w[0] || v.length >= 6) { const d = lev(w, v, max); if (d <= max) fuzzy.push([d, v]); } });
      fuzzy = fuzzy.sort((a, b) => a[0] - b[0]).slice(0, 4).map(x => x[1]);
      fuzzy.forEach(x => alts.add(x));
    }
    return { alts: [...alts], fuzzy };
  }

  const qInput = $('#q'), results = $('#results');
  let hits = [], sel = -1;
  function hideResults() { results.hidden = true; sel = -1; }
  function snippet(text, word) {
    const nt = norm(text), p = nt.indexOf(word);
    if (p < 0) return esc(text.slice(0, 110)) + (text.length > 110 ? '…' : '');
    const s = Math.max(0, p - 40), e = Math.min(text.length, p + word.length + 70);
    return (s > 0 ? '…' : '') + esc(text.slice(s, p)) + '<mark>' + esc(text.slice(p, p + word.length)) + '</mark>' + esc(text.slice(p + word.length, e)) + (e < text.length ? '…' : '');
  }
  function search() {
    const words = norm(qInput.value).split(/\s+/).filter(w => w.length > 1);
    if (!words.length) { hideResults(); return; }
    const expanded = words.map(w => ({ w, ...alternatives(w) }));
    const usedFuzzy = new Set();
    hits = index.map(it => {
      let sc = 0, hl = null;
      for (const e of expanded) {
        const inT = it.nt.includes(e.w), inX = it.nx.includes(e.w);
        if (inT || inX) { sc += (inT ? 10 : 0) + (inX ? 2 : 0); hl = hl || e.w; continue; }
        const alt = e.alts.find(a => it.nt.includes(a) || it.nx.includes(a));
        if (!alt) return null;
        sc += it.nt.includes(alt) ? 6 : 1.5; hl = hl || alt;
        if (e.fuzzy.includes(alt)) usedFuzzy.add(alt);
      }
      return { it, sc, hl };
    }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 8);
    sel = -1;
    const note = usedFuzzy.size ? `<div class="empty fuzzy-note">Ähnliche Treffer für: <b>${[...usedFuzzy].map(esc).join(', ')}</b></div>` : '';
    results.innerHTML = hits.length ? note + hits.map((h, k) => `<a href="#${h.it.id}" data-k="${k}"><b>${esc(h.it.title)}</b><span>${esc(h.it.ch)} · ${snippet(h.it.text, h.hl || words[0])}</span></a>`).join('')
      : `<div class="empty">Nichts gefunden zu „${esc(qInput.value)}“. Versuchen Sie ein anderes Wort, z. B. „Akku“, „Foto“ oder „WLAN“.</div>`;
    results.hidden = false;
  }
  qInput.addEventListener('input', search);
  qInput.addEventListener('focus', () => { if (qInput.value) search(); });
  qInput.addEventListener('keydown', e => {
    const links = $$('a', results);
    if (e.key === 'ArrowDown' && links.length) { e.preventDefault(); sel = (sel + 1) % links.length; }
    else if (e.key === 'ArrowUp' && links.length) { e.preventDefault(); sel = (sel - 1 + links.length) % links.length; }
    else if (e.key === 'Enter' && links.length) { e.preventDefault(); (links[sel] || links[0]).click(); return; }
    else return;
    links.forEach((l, k) => l.classList.toggle('active', k === sel));
  });
  results.addEventListener('click', e => { if (e.target.closest('a')) { hideResults(); qInput.blur(); closeNav(); } });
  document.addEventListener('click', e => { if (!e.target.closest('.search')) hideResults(); });
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !e.target.matches('input, textarea')) { e.preventDefault(); qInput.focus(); }
  });
})();
