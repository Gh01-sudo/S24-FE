(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const { store, toast } = window.HB;
  const norm = s => s.toLowerCase();

  /* ======================= Datenblatt ======================= */
  const ds = $('#datasheet');
  if (ds) {
    ds.innerHTML = `<div class="gloss-filter"><label class="visually-hidden" for="ds-q">Datenblatt durchsuchen</label><input id="ds-q" type="search" placeholder="Im Datenblatt suchen, z. B. Bluetooth, Gewicht, Kamera"></div>
      <div class="combo-picks" id="ds-cats"><button type="button" data-c="" aria-pressed="true">Alle</button>${DATASHEET.map(([c]) => `<button type="button" data-c="${esc(c)}" aria-pressed="false">${esc(c)}</button>`).join('')}</div>
      <div id="ds-out"></div><p class="caption" id="ds-count" style="text-align:left"></p>`;
    let cat = '';
    function render() {
      const q = norm($('#ds-q').value.trim()); let n = 0;
      $('#ds-out').innerHTML = DATASHEET.filter(([c]) => !cat || c === cat).map(([c, rows]) => {
        const hits = rows.filter(([k, v, e]) => !q || norm(c + ' ' + k + ' ' + v + ' ' + (e || '')).includes(q));
        n += hits.length; if (!hits.length) return '';
        return `<h4 class="ds-h">${esc(c)}</h4><div class="table-wrap ds-table"><table><tbody>${hits.map(([k, v, e]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}${e ? `<details class="ds-more"><summary>Was heißt das?</summary>${esc(e)}</details>` : ''}</td></tr>`).join('')}</tbody></table></div>`;
      }).join('') || '<p>Kein Eintrag gefunden. Versuchen Sie einen anderen Begriff.</p>';
      $('#ds-count').textContent = `${n} Angaben angezeigt`;
    }
    $('#ds-q').addEventListener('input', render);
    $('#ds-cats').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; cat = b.dataset.c; $$('#ds-cats button').forEach(x => x.setAttribute('aria-pressed', x === b)); render(); });
    render();
  }

  /* ======================= Knox layers ======================= */
  const kx = $('#knox-layers');
  if (kx) {
    let cur = 'hw';
    kx.innerHTML = `<div class="knox"><div class="knox-stack" role="group" aria-label="Schutzschichten">${KNOX_LAYERS.map((l, i) => `<button type="button" data-id="${l.id}" style="--i:${i}"><b>${esc(l.t)}</b><span>${esc(l.s)}</span></button>`).join('')}</div><div class="knox-detail" id="knox-detail" aria-live="polite"></div></div>`;
    const render = () => {
      $$('.knox-stack button', kx).forEach(b => b.setAttribute('aria-pressed', b.dataset.id === cur));
      const l = KNOX_LAYERS.find(x => x.id === cur), idx = KNOX_LAYERS.indexOf(l);
      $('#knox-detail').innerHTML = `<div class="step-count">Schicht ${KNOX_LAYERS.length - idx} von ${KNOX_LAYERS.length} (von unten)</div><h4>${esc(l.t)}</h4>${l.d}`;
    };
    kx.addEventListener('click', e => { const b = e.target.closest('[data-id]'); if (b) { cur = b.dataset.id; render(); } });
    render();
  }

  /* ======================= Schutzplan ======================= */
  const pp = $('#protect-plan');
  if (pp) {
    let done = new Set(store.get('protect', [])), lvlFilter = 0;
    const all = PROTECT.flatMap(g => g.items), maxScore = all.reduce((a, i) => a + i.lvl, 0);
    const LV = { 3: ['Unverzichtbar', 'lvl-3'], 2: ['Empfohlen', 'lvl-2'], 1: ['Für Fortgeschrittene', 'lvl-1'] };
    pp.innerHTML = `<div class="pp-score card"><div class="pp-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="50" class="pp-bg"/><circle cx="60" cy="60" r="50" class="pp-fg" id="pp-arc"/></svg><b id="pp-pct">0 %</b></div>
      <div><h4 style="margin:0 0 4px" id="pp-label"></h4><p class="caption" style="text-align:left;margin:0 0 8px" id="pp-sub"></p>
      <div class="seg" role="group" aria-label="Filter"><button type="button" data-l="0" aria-pressed="true">Alle</button><button type="button" data-l="3" aria-pressed="false">Unverzichtbar</button><button type="button" data-l="2" aria-pressed="false">Empfohlen</button><button type="button" data-l="1" aria-pressed="false">Fortgeschritten</button></div></div></div>
      <div id="pp-list"></div>`;
    function score() {
      const s = all.filter(i => done.has(i.id)).reduce((a, i) => a + i.lvl, 0), pct = Math.round(s / maxScore * 100);
      const must = all.filter(i => i.lvl === 3), mustDone = must.filter(i => done.has(i.id)).length;
      $('#pp-pct').textContent = pct + ' %';
      $('#pp-arc').style.strokeDashoffset = 314.16 * (1 - pct / 100);
      $('#pp-label').textContent = mustDone < must.length ? 'Noch Lücken bei den wichtigsten Punkten' : pct < 80 ? 'Gut geschützt, Feinschliff möglich' : 'Sehr gut geschützt';
      $('#pp-sub').textContent = `${mustDone} von ${must.length} unverzichtbaren Maßnahmen erledigt · ${done.size} von ${all.length} insgesamt`;
    }
    function render() {
      $('#pp-list').innerHTML = PROTECT.map(g => {
        const items = g.items.filter(i => !lvlFilter || i.lvl === lvlFilter); if (!items.length) return '';
        return `<h4 class="ds-h">${esc(g.g)}</h4>` + items.map(i => `<details class="pp-item${done.has(i.id) ? ' done' : ''}"><summary><input type="checkbox" id="pp-${i.id}" data-id="${i.id}" ${done.has(i.id) ? 'checked' : ''} aria-label="${esc(i.t)} erledigt"><span class="pp-t">${esc(i.t)}</span><span class="chip ${LV[i.lvl][1]}">${LV[i.lvl][0]}</span></summary>
          <div class="pp-body">${i.path !== '—' ? `<div class="path"><span class="lbl">Pfad</span><span class="crumb">${esc(i.path)}</span></div>` : ''}<p><b>So geht’s:</b> ${esc(i.how)}</p><div class="why"><b>Warum?</b> ${esc(i.why)}</div></div></details>`).join('');
      }).join('');
      score();
    }
    pp.addEventListener('click', e => {
      const lb = e.target.closest('[data-l]');
      if (lb) { lvlFilter = +lb.dataset.l; $$('[data-l]', pp).forEach(x => x.setAttribute('aria-pressed', x === lb)); render(); return; }
      if (e.target.matches('summary input')) e.stopPropagation();
    });
    pp.addEventListener('change', e => {
      const id = e.target.dataset.id; if (!id) return;
      e.target.checked ? done.add(id) : done.delete(id); store.set('protect', [...done]);
      e.target.closest('.pp-item').classList.toggle('done', e.target.checked); score();
      if (e.target.checked) toast('Erledigt: ' + all.find(i => i.id === id).t);
    });
    render();
  }

  /* ======================= Kamera-Einstellungen ======================= */
  const cs = $('#cam-settings');
  if (cs) {
    let gi = 0;
    cs.innerHTML = `<div class="combo-picks" id="cs-tabs">${CAM_SETTINGS.map((g, i) => `<button type="button" data-i="${i}" aria-pressed="${i === 0}">${esc(g.g)}</button>`).join('')}</div><div id="cs-out"></div>`;
    const render = () => {
      $('#cs-out').innerHTML = CAM_SETTINGS[gi].items.map(it => `<details class="cs-item"><summary><b>${esc(it.t)}</b><span class="chip lvl-1">Empfehlung: ${esc(it.rec)}</span></summary>
        <div class="pp-body"><p class="cs-opt"><b>Optionen:</b> ${esc(it.opt)}</p><p>${esc(it.d)}</p>${it.ex && it.ex !== '—' ? `<div class="cs-ex"><b>Beispiel:</b> ${esc(it.ex)}</div>` : ''}</div></details>`).join('');
    };
    $('#cs-tabs').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; gi = +b.dataset.i; $$('#cs-tabs button').forEach(x => x.setAttribute('aria-pressed', x === b)); render(); });
    render();
  }
  const cm = $('#cam-modes');
  if (cm) cm.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Modus</th><th>Was er macht</th><th>Ideal für</th></tr></thead><tbody>${CAM_MODES.map(([a, b, c]) => `<tr><td><b>${esc(a)}</b></td><td>${esc(b)}</td><td>${esc(c)}</td></tr>`).join('')}</tbody></table></div>`;

  /* ======================= Kamera-Labor ======================= */
  const lab = $('#cam-lab');
  if (lab) {
    const TABS = { ratio: 'Seitenverhältnis', zoom: 'Zoom', wb: 'Weißabgleich', bokeh: 'Porträt-Unschärfe' };
    lab.innerHTML = `<div class="seg" role="group" aria-label="Experiment wählen" id="lab-tabs">${Object.entries(TABS).map(([k, v], i) => `<button type="button" data-t="${k}" aria-pressed="${i === 0}">${v}</button>`).join('')}</div>
      <div class="lab"><div class="lab-view"><svg viewBox="0 0 300 400" role="img" aria-label="Beispielfoto zur Kamera-Einstellung" id="lab-svg">
        <defs><linearGradient id="lab-sky" x1="0" x2="0" y1="0" y2="1"><stop offset="0" class="m-sky-a"/><stop offset="1" class="m-sky-b"/></linearGradient>
        <filter id="lab-bg-blur"><feGaussianBlur id="lab-bstd" stdDeviation="0"/></filter><filter id="lab-all-blur"><feGaussianBlur id="lab-zstd" stdDeviation="0"/></filter>
        <clipPath id="lab-clip"><rect width="300" height="400"/></clipPath></defs>
        <g clip-path="url(#lab-clip)"><g id="lab-zoom" filter="url(#lab-all-blur)">
          <g filter="url(#lab-bg-blur)"><rect width="300" height="400" fill="url(#lab-sky)"/><circle cx="225" cy="80" r="26" class="m-sun"/>
            <path class="m-hill1" d="M0 250 Q90 190 170 240 T300 220 V400 H0z"/>
            <rect x="200" y="200" width="44" height="36" class="m-c3"/><path d="M196 202 L222 180 L248 202z" class="m-c5"/><rect x="216" y="216" width="10" height="20" class="m-dark"/>
            <rect x="52" y="190" width="8" height="50" class="m-person"/><circle cx="56" cy="180" r="22" class="m-hill2"/>
            <path class="m-hill2" d="M0 330 Q150 290 300 320 V400 H0z"/></g>
          <g class="m-person"><circle cx="140" cy="240" r="18"/><rect x="122" y="262" width="36" height="80" rx="14"/></g>
        </g><rect id="lab-tint" width="300" height="400" fill="#ff9a3c" opacity="0"/>
        <path id="lab-mask" fill="rgba(0,0,0,.55)" fill-rule="evenodd" d=""/><rect id="lab-frame" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="6 4"/></g>
      </svg></div><div class="lab-ctl" id="lab-ctl"></div></div>`;
    const svg = $('#lab-svg');
    const reset = () => { $('#lab-zoom').setAttribute('transform', ''); $('#lab-zstd').setAttribute('stdDeviation', 0); $('#lab-bstd').setAttribute('stdDeviation', 0); $('#lab-tint').setAttribute('opacity', 0); $('#lab-mask').setAttribute('d', ''); $('#lab-frame').setAttribute('width', 0); };
    const ctl = $('#lab-ctl');
    const MODES = {
      ratio() {
        const R = { '3:4': [3, 4, 'Nutzt die ganze Sensorfläche. Beste Qualität, Standard für Fotos.'], '9:16': [9, 16, 'Füllt den Handybildschirm. Im Hochformat wird links und rechts abgeschnitten: weniger Bildinformation. Gut für Storys.'], '1:1': [1, 1, 'Quadratisch. Oben und unten wird viel abgeschnitten. Gut für Profilbilder.'], 'Vollbild': [9, 19.5, 'Exakt das Bildschirmformat. Links und rechts wird am meisten abgeschnitten.'] };
        ctl.innerHTML = `<p class="quiz-q">Format wählen:</p><div class="combo-picks">${Object.keys(R).map((k, i) => `<button type="button" data-r="${k}" aria-pressed="${i === 0}">${k}</button>`).join('')}</div><p id="lab-txt"></p>`;
        const set = k => {
          const [w, h, t] = R[k]; let fw = 300, fh = 300 * h / w; if (fh > 400) { fh = 400; fw = 400 * w / h; }
          const x = (300 - fw) / 2, y = (400 - fh) / 2;
          $('#lab-mask').setAttribute('d', `M0 0H300V400H0Z M${x} ${y}H${x + fw}V${y + fh}H${x}Z`);
          const f = $('#lab-frame'); f.setAttribute('x', x); f.setAttribute('y', y); f.setAttribute('width', fw); f.setAttribute('height', fh);
          $('#lab-txt').innerHTML = `<b>${k}:</b> ${t} Genutzt: <b>${Math.round(fw * fh / 1200)} %</b> der Sensorfläche.`;
          $$('[data-r]', ctl).forEach(b => b.setAttribute('aria-pressed', b.dataset.r === k));
        };
        ctl.onclick = e => { const b = e.target.closest('[data-r]'); if (b) set(b.dataset.r); };
        set('3:4');
      },
      zoom() {
        const Z = [[0.6, 'Ultraweitwinkel (12 MP)', 'Echtes Objektiv. Sehr weiter Blick, Ränder leicht gekrümmt.', 0], [1, 'Hauptkamera (50 MP)', 'Beste Qualität.', 0], [2, 'Ausschnitt der Hauptkamera', 'Verlustarm, weil der 50-MP-Sensor genug Pixel hat.', 0], [3, 'Telekamera (8 MP)', 'Echter optischer Zoom.', 0], [5, 'Digital (Tele + Ausschnitt)', 'Leicht weicher, noch gut brauchbar.', .6], [10, 'Digital', 'Deutlich weicher; Telefon abstützen.', 1.3], [30, 'Digital (maximal)', 'Nur zur Dokumentation (z. B. Schild ablesen).', 2.6]];
        ctl.innerHTML = `<label for="lab-z">Zoomstufe: <b id="lab-zv"></b></label><input type="range" id="lab-z" min="0" max="6" step="1" value="1"><p id="lab-txt"></p>`;
        const upd = () => {
          const zi = +$('#lab-z').value, [z, l, t, b] = Z[zi], s = [1, 1.4, 2, 2.5, 3.2, 4.2, 6][zi];
          $('#lab-zoom').setAttribute('transform', `translate(222 212) scale(${s.toFixed(3)}) translate(-222 -212)`);
          $('#lab-zstd').setAttribute('stdDeviation', b / Math.sqrt(s) * 2);
          $('#lab-zv').textContent = String(z).replace('.', ',') + '×';
          $('#lab-txt').innerHTML = `<span class="chip ${b ? 'lvl-3' : 'lvl-1'}">${b ? 'Digitaler Zoom' : 'Optisch / verlustarm'}</span> <b>${esc(l)}:</b> ${esc(t)}`;
        };
        $('#lab-z').oninput = upd; upd();
      },
      wb() {
        ctl.innerHTML = `<label for="lab-k">Weißabgleich: <b id="lab-kv"></b></label><input type="range" id="lab-k" min="2500" max="9000" step="100" value="5500"><p id="lab-txt"></p>`;
        const upd = () => {
          const k = +$('#lab-k').value, d = (k - 5500) / 3500, t = $('#lab-tint');
          t.setAttribute('fill', d >= 0 ? '#ff9a3c' : '#3c7dff'); t.setAttribute('opacity', Math.min(.38, Math.abs(d) * .4).toFixed(2));
          $('#lab-kv').textContent = k + ' K';
          $('#lab-txt').innerHTML = Math.abs(d) < .1 ? 'Neutral: Weiß bleibt weiß (Tageslicht).' : d > 0 ? '<b>Wärmer:</b> Ein hoher Kelvin-Wert macht das Foto gelblicher. Hilfreich, wenn die Szene in kaltem Schatten bläulich wirkt.' : '<b>Kühler:</b> Ein niedriger Kelvin-Wert macht das Foto bläulicher. Hilfreich unter gelbem Glühlampenlicht (ca. 3000 K).';
        };
        $('#lab-k').oninput = upd; upd();
      },
      bokeh() {
        ctl.innerHTML = `<label for="lab-b">Unschärfe-Stärke: <b id="lab-bv"></b></label><input type="range" id="lab-b" min="0" max="7" step="1" value="0"><p id="lab-txt">Im Porträt-Modus trennt die Kamera Person und Hintergrund per Tiefenschätzung. Die Stärke lässt sich vor der Aufnahme und später in der Galerie ändern.</p>`;
        const upd = () => { const v = +$('#lab-b').value; $('#lab-bstd').setAttribute('stdDeviation', v * 1.4); $('#lab-bv').textContent = v ? v : 'aus'; };
        $('#lab-b').oninput = upd; upd();
      }
    };
    const show = k => { reset(); ctl.onclick = null; MODES[k](); $$('#lab-tabs button').forEach(b => b.setAttribute('aria-pressed', b.dataset.t === k)); };
    $('#lab-tabs').addEventListener('click', e => { const b = e.target.closest('[data-t]'); if (b) show(b.dataset.t); });
    show('ratio');
  }

  /* ======================= Tipps & Tricks ======================= */
  const tl = $('#tips-list');
  if (tl) {
    // Fortschritt per Tipp-Titel speichern, damit Umsortieren oder Einfügen von Tipps die Haken nicht verschiebt.
    let cat = '', tried = new Set(store.get('tips', []).filter(x => TIPS.some(t => t.t === x)));
    const cats = [...new Set(TIPS.map(t => t.cat))], all = [...TIPS.keys()];
    tl.innerHTML = `<div class="tips-top"><button type="button" class="btn" id="tip-random">${icon('bulb')}Zufälliger Tipp</button>
      <div class="combo-picks" id="tip-cats"><button type="button" data-c="" aria-pressed="true">Alle (${TIPS.length})</button>${cats.map(c => `<button type="button" data-c="${esc(c)}" aria-pressed="false">${esc(c)}</button>`).join('')}</div></div>
      <p class="caption" id="tip-count" style="text-align:left"></p><div id="tip-out"></div>`;
    const count = () => { $('#tip-count').textContent = `${tried.size} von ${TIPS.length} Tipps ausprobiert`; };
    function render() {
      $('#tip-out').innerHTML = all.filter(i => !cat || TIPS[i].cat === cat).map(i => {
        const t = TIPS[i], on = tried.has(t.t);
        return `<details class="tip-card${on ? ' done' : ''}" id="tip-${i}"><summary><span class="chip lvl-2">${esc(t.cat)}</span><b>${esc(t.t)}</b></summary>
        <div class="pp-body"><p><b>So geht’s:</b> ${t.how}</p><div class="why"><b>Warum es hilft:</b> ${t.why}</div>
        <div class="tip-foot"><span class="tip-src">Belegt durch: <a href="${t.src[1]}" target="_blank" rel="noopener">${esc(t.src[0])}</a></span><label class="tip-try"><input type="checkbox" data-i="${i}" ${on ? 'checked' : ''}> Ausprobiert</label></div></div></details>`;
      }).join('');
      count();
    }
    $('#tip-cats').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; cat = b.dataset.c; $$('#tip-cats button').forEach(x => x.setAttribute('aria-pressed', x === b)); render(); });
    $('#tip-random').addEventListener('click', () => {
      if (cat) { cat = ''; $$('#tip-cats button').forEach((x, k) => x.setAttribute('aria-pressed', k === 0)); render(); }
      const open = all.filter(i => !tried.has(TIPS[i].t)), pool = open.length ? open : all;
      const i = pool[Math.floor(Math.random() * pool.length)], el = $('#tip-' + i);
      el.open = true; el.scrollIntoView({ block: 'center' }); el.classList.add('flash-card'); setTimeout(() => el.classList.remove('flash-card'), 1200);
    });
    tl.addEventListener('change', e => { const t = TIPS[+e.target.dataset.i]; if (!t) return; e.target.checked ? tried.add(t.t) : tried.delete(t.t); store.set('tips', [...tried]); e.target.closest('.tip-card').classList.toggle('done', e.target.checked); count(); });
    render();
  }

  /* ======================= Mythen-Check ======================= */
  const mc = $('#myth-check');
  if (mc) {
    let right = 0, answered = 0;
    mc.innerHTML = `<div class="myth-score"><b id="myth-score">0 / ${MYTHS.length}</b><span>richtig eingeschätzt</span></div><div class="myth-grid">${MYTHS.map((m, i) => `<div class="myth" data-i="${i}"><p class="myth-q">„${esc(m.q)}“</p><div class="myth-btns"><button type="button" class="btn" data-v="1">Stimmt</button><button type="button" class="btn" data-v="0">Stimmt nicht</button></div><div class="myth-a" hidden></div></div>`).join('')}</div>`;
    mc.addEventListener('click', e => {
      const b = e.target.closest('[data-v]'); if (!b) return;
      const card = b.closest('.myth'); if (card.dataset.done) return; card.dataset.done = 1; answered++;
      const m = MYTHS[+card.dataset.i], ok = (b.dataset.v === '1') === m.a; if (ok) right++;
      card.classList.add(ok ? 'ok' : 'bad');
      $$('[data-v]', card).forEach(x => { x.disabled = true; });
      const a = $('.myth-a', card); a.hidden = false;
      a.innerHTML = `<b>${m.a ? 'Stimmt.' : 'Stimmt nicht.'}</b> ${esc(m.e)}`;
      $('#myth-score').textContent = `${right} / ${MYTHS.length}`;
      if (answered === MYTHS.length) toast(`Mythen-Check: ${right} von ${MYTHS.length} richtig`);
    });
  }

  /* ======================= Hintergrundwissen ======================= */
  const bg = $('#background-cards');
  if (bg) bg.innerHTML = BACKGROUND.map(b => `<details class="bg-card"><summary><span class="ch-ico">${icon(b.icon)}</span><b>${esc(b.t)}</b></summary><div class="pp-body"><p>${b.d}</p></div></details>`).join('');
})();
