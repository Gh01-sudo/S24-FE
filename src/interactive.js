(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const { store, toast } = window.HB;

  /* ======================= Mini quizzes ======================= */
  $$('[data-mini-quiz]').forEach(el => {
    const qs = MINI_QUIZ[el.dataset.miniQuiz]; if (!qs) return;
    let answered = 0, right = 0;
    el.innerHTML = `<div class="mq-head">${icon('check')}<b>Kurz geprüft</b><span class="chip mq-score">0 / ${qs.length}</span></div>` +
      qs.map((q, i) => `<div class="mq-q" data-i="${i}"><p class="quiz-q">${i + 1}. ${esc(q.q)}</p><div class="quiz-opts">${q.o.map((o, k) => `<button type="button" data-k="${k}">${esc(o)}</button>`).join('')}</div><div class="quiz-fb" hidden></div></div>`).join('');
    el.addEventListener('click', e => {
      const b = e.target.closest('.quiz-opts button'); if (!b) return;
      const box = b.closest('.mq-q'), q = qs[+box.dataset.i], k = +b.dataset.k;
      if (box.dataset.done) return; box.dataset.done = 1; answered++;
      const ok = k === q.a; if (ok) right++;
      $$('button', box).forEach((x, j) => { x.disabled = true; if (j === q.a) x.classList.add('right'); else if (j === k) x.classList.add('wrong'); });
      const fb = $('.quiz-fb', box); fb.hidden = false; fb.innerHTML = `<b>${ok ? 'Richtig.' : 'Nicht ganz.'}</b> ${esc(q.e)}`;
      $('.mq-score', el).textContent = `${right} / ${qs.length}`;
      if (answered === qs.length) toast(right === qs.length ? 'Alles richtig!' : `${right} von ${qs.length} richtig`);
    });
  });

  /* ======================= Checklist ======================= */
  const cl = $('#checklist');
  if (cl) {
    let done = new Set(store.get('checklist', []));
    const render = () => {
      cl.innerHTML = `<div class="cl-bar"><span style="width:${done.size / CHECKLIST.length * 100}%"></span></div><p class="caption" style="text-align:left">${done.size} von ${CHECKLIST.length} erledigt</p>` +
        CHECKLIST.map(([t, id], i) => `<label class="cl-item"><input type="checkbox" id="cl-${i}" data-i="${i}" ${done.has(i) ? 'checked' : ''}><span>${esc(t)}</span><a href="#${id}">Anleitung</a></label>`).join('');
    };
    cl.addEventListener('change', e => { const i = +e.target.dataset.i; e.target.checked ? done.add(i) : done.delete(i); store.set('checklist', [...done]); render(); if (done.size === CHECKLIST.length) toast('Checkliste komplett, Ihr Telefon ist gut eingerichtet!'); });
    render();
  }

  /* ======================= Settings trainer ======================= */
  const st = $('#settings-trainer');
  if (st) {
    let state = { ...SIM_DEFAULTS }, stack = ['root'], taskI = 0, taps = 0, hint = false, solved = false;
    let doneT = new Set(store.get('simdone', []));
    st.innerHTML = `<div class="trainer">
      <div class="sim-phone" id="sim-phone"><div class="sim-status"><span>12:30</span><span class="sim-dot"></span><span>▮▮ 76 %</span></div><div class="sim-screen" id="sim-screen"></div><div class="sim-handle"></div></div>
      <div class="trainer-side">
        <div class="task-card"><div class="step-count" id="sim-count"></div><h4 id="sim-q"></h4><p class="caption" id="sim-taps" style="text-align:left"></p><div class="trainer-fb" id="sim-fb" hidden></div>
          <div class="cta-row"><button class="btn" type="button" id="sim-hint">${icon('bulb')}Tipp zeigen</button><button class="btn primary" type="button" id="sim-next">Nächste Aufgabe${icon('chevR')}</button></div></div>
        <div class="task-dots" id="sim-dots"></div>
        <button class="btn" type="button" id="sim-reset">${icon('refresh')}Übungs-Handy zurücksetzen</button>
      </div></div>`;
    const screen = $('#sim-screen'), phoneEl = $('#sim-phone');
    const task = () => SIM_TASKS[taskI];
    const isHint = (r) => {
      if (!hint || solved) return false;
      const t = task();
      if (r.t === 'link') return t.path.includes(r.l);
      if (r.t === 'toggle') return r.id === t.key;
      if (r.t === 'radio') return r.g === t.key && r.v === t.val;
      return false;
    };
    const fontScale = { s: .9, m: 1, l: 1.12, xl: 1.24 };
    function renderPhone() {
      const page = SIM_TREE[stack[stack.length - 1]];
      phoneEl.classList.toggle('dark', state.theme === 'dark');
      phoneEl.classList.toggle('easy', !!state.easy);
      phoneEl.style.setProperty('--sim-fs', fontScale[state.font] * (state.easy ? 1.12 : 1));
      phoneEl.classList.toggle('bold', !!state.bold);
      let h = `<div class="sim-top">${stack.length > 1 ? `<button type="button" class="sim-back" aria-label="Zurück">‹</button>` : ''}<span class="sim-title">${esc(page.title)}</span></div>`;
      if (page.note) h += `<p class="sim-note">${esc(page.note)}</p>`;
      h += '<div class="sim-list">';
      page.rows.forEach((r, i) => {
        const hl = isHint(r) ? ' hint' : '';
        if (r.t === 'head') { h += `<div class="sim-head">${esc(r.l)}</div>`; return; }
        let right = '', sub = r.s ? `<small>${esc(r.s)}</small>` : '';
        if (r.t === 'link' && r.sk) {
          const v = state[r.sk === 'protect' ? 'protect' : r.sk === 'side' ? 'sidehold' : r.sk];
          const map = { adaptive: 'Adaptiv', standard: 'Standard', gestures: 'Wischgesten', buttons: 'Tasten', s: 'Klein', m: 'Standard', l: 'Groß', xl: 'Sehr groß', basic: 'Standard', max: 'Maximal', gemini: 'Gemini', bixby: 'Bixby', power: 'Ausschaltmenü' };
          sub = `<small class="acc">${esc(map[v] || v)}</small>`;
        }
        if (r.t === 'toggle') right = `<span class="sim-tg${state[r.id] ? ' on' : ''}" aria-hidden="true"></span>`;
        if (r.t === 'radio') right = `<span class="sim-rd${state[r.g] === r.v ? ' on' : ''}" aria-hidden="true"></span>`;
        if (r.t === 'link') right = '<span class="sim-chev" aria-hidden="true">›</span>';
        const icn = r.c ? `<span class="sim-ic m-${r.c}"></span>` : '';
        const role = r.t === 'toggle' ? `role="switch" aria-checked="${!!state[r.id]}"` : r.t === 'radio' ? `role="radio" aria-checked="${state[r.g] === r.v}"` : '';
        h += `<button type="button" class="sim-row${r.t === 'info' ? ' info' : ''}${hl}" data-i="${i}" ${role}>${r.t === 'radio' ? right : icn}<span class="sim-lbl">${esc(r.l)}${sub}</span>${r.t === 'radio' ? '' : right}</button>`;
      });
      screen.innerHTML = h + '</div>';
    }
    function renderTask() {
      const t = task();
      $('#sim-count').textContent = `Aufgabe ${taskI + 1} von ${SIM_TASKS.length}`;
      $('#sim-q').textContent = t.q;
      $('#sim-taps').textContent = `Tipps auf dem Übungs-Handy: ${taps}`;
      const fb = $('#sim-fb');
      if (solved) { fb.hidden = false; fb.className = 'trainer-fb ok'; fb.innerHTML = `<b>Geschafft!</b> Weg: ${t.path.map(esc).join(' › ')}<br>${esc(t.why)}`; }
      else if (hint) { fb.hidden = false; fb.className = 'trainer-fb'; fb.innerHTML = `<b>Tipp:</b> Einstellungen › ${t.path.map(esc).join(' › ')}. Die passende Zeile ist im Übungs-Handy markiert.`; }
      else fb.hidden = true;
      $('#sim-dots').innerHTML = SIM_TASKS.map((x, i) => `<button type="button" data-i="${i}" class="${doneT.has(i) ? 'done' : ''}${i === taskI ? ' cur' : ''}" aria-label="Aufgabe ${i + 1}${doneT.has(i) ? ' (erledigt)' : ''}">${doneT.has(i) ? '✓' : i + 1}</button>`).join('');
    }
    function check() {
      const t = task();
      if (!solved && state[t.key] === t.val) {
        solved = true; doneT.add(taskI); store.set('simdone', [...doneT]);
        toast('Richtig gemacht!');
      }
    }
    function gotoTask(i) { taskI = (i + SIM_TASKS.length) % SIM_TASKS.length; taps = 0; hint = false; solved = false; stack = ['root']; renderPhone(); renderTask(); }
    screen.addEventListener('click', e => {
      if (e.target.closest('.sim-back')) { stack.pop(); taps++; renderPhone(); renderTask(); return; }
      const b = e.target.closest('.sim-row'); if (!b) return;
      const r = SIM_TREE[stack[stack.length - 1]].rows[+b.dataset.i]; taps++;
      if (r.t === 'link') stack.push(r.to);
      else if (r.t === 'toggle') state[r.id] = !state[r.id];
      else if (r.t === 'radio') state[r.g] = r.v;
      else if (r.t === 'action') toast(r.id === 'finger' ? 'Hier würde jetzt die Fingerabdruck-Registrierung starten.' : r.id === 'update' ? 'Übung: Es wird nach Updates gesucht …' : 'Übung: Das Telefon würde jetzt neu starten.');
      else toast('Diese Zeile ist in der Übung nur zur Ansicht.');
      check(); renderPhone(); renderTask();
      screen.scrollTop = r.t === 'link' ? 0 : screen.scrollTop;
    });
    $('#sim-hint').addEventListener('click', () => { hint = true; renderPhone(); renderTask(); });
    $('#sim-next').addEventListener('click', () => gotoTask(taskI + 1));
    $('#sim-dots').addEventListener('click', e => { const b = e.target.closest('button'); if (b) gotoTask(+b.dataset.i); });
    $('#sim-reset').addEventListener('click', () => { state = { ...SIM_DEFAULTS }; stack = ['root']; solved = false; hint = false; taps = 0; renderPhone(); renderTask(); toast('Übungs-Handy zurückgesetzt'); });
    const firstOpen = SIM_TASKS.findIndex((x, i) => !doneT.has(i));
    gotoTask(firstOpen < 0 ? 0 : firstOpen);
  }

  /* ======================= Key trainer ======================= */
  const kt = $('#key-trainer');
  if (kt) {
    kt.innerHTML = `<div class="trainer">
      <div class="kt-wrap"><div class="kt-phone"><div class="kt-screen" id="kt-screen"></div>
        <button type="button" class="kt-key" data-key="up" style="top:22%;height:11%" aria-label="Lauter-Taste"></button>
        <button type="button" class="kt-key" data-key="down" style="top:33.5%;height:11%" aria-label="Leiser-Taste"></button>
        <button type="button" class="kt-key side" data-key="side" style="top:49%;height:12%" aria-label="Seitentaste"></button>
        <span class="kt-lbl" style="top:22%">Lauter</span><span class="kt-lbl" style="top:34%">Leiser</span><span class="kt-lbl" style="top:50%">Seiten&shy;taste</span></div>
        <div class="kt-hold" id="kt-hold" aria-live="polite">&nbsp;</div></div>
      <div class="trainer-side"><p>Drücken Sie die Tasten am Übungs-Handy wie am echten Gerät: mit dem Finger antippen oder <b>gedrückt halten</b>. Für „gleichzeitig“ zwei Finger nehmen. Am Computer: Tasten <kbd>L</kbd> Lauter, <kbd>K</kbd> Leiser, <kbd>S</kbd> Seitentaste (auch zusammen halten).</p>
        <ul class="task-list" id="kt-tasks"></ul><button class="btn" type="button" id="kt-reset">${icon('refresh')}Neu beginnen</button></div></div>`;
    const scr = $('#kt-screen'), holdEl = $('#kt-hold');
    let done = new Set(), view = 'off', vol = 6, down = {}, ignore = {}, combo = null, comboTimer = null, sidePresses = 0, sideTimer = null, sideHoldTimer = null, sideLong = false, volTimer = null;
    const renderTasks = () => { $('#kt-tasks').innerHTML = KEY_TASKS.map(t => `<li class="${done.has(t.id) ? 'done' : ''}">${done.has(t.id) ? icon('check') : '<span class="tdot"></span>'}<span>${esc(t.q)}</span></li>`).join(''); };
    const ok = id => { if (!done.has(id)) { done.add(id); renderTasks(); toast('Richtig: ' + KEY_TASKS.find(t => t.id === id).q.split(':')[0].replace(/\(.*\)/, '').trim()); } };
    const VIEWS = {
      off: () => '<div class="kt-v off"><span>Bildschirm aus</span></div>',
      lock: () => '<div class="kt-v lock"><b>12:30</b><span>Samstag, 14. November</span><i class="kt-fp"></i></div>',
      camera: () => '<div class="kt-v cam"><span class="kt-vf"></span><i class="kt-shutter"></i><span>Kamera gestartet</span></div>',
      shot: () => '<div class="kt-v lock flash"><b>12:30</b><span>Bildschirmfoto gespeichert</span><em class="kt-thumb">Screenshot</em></div>',
      power: () => '<div class="kt-v power"><span class="pm red">Ausschalten</span><span class="pm">Neu starten</span><span class="pm">Notfallmodus</span><small>Weiter halten für erzwungenen Neustart …</small></div>',
      restart: () => '<div class="kt-v off"><span>Neustart …</span><small>Daten bleiben erhalten</small></div>',
      assistant: () => '<div class="kt-v assist"><span>✦ Assistent</span><small>„Wie kann ich helfen?“ (Gemini)</small></div>',
      sos: () => '<div class="kt-v sos"><b>SOS</b><span>Übung: Notruf würde in 5 s gewählt.</span><small>Am echten Telefon können Sie hier abbrechen.</small></div>'
    };
    const show = v => { view = v; scr.innerHTML = VIEWS[v]() + (volTimer ? volBar() : ''); };
    const volBar = () => `<div class="kt-vol"><span style="height:${vol / 15 * 100}%"></span></div>`;
    function volume(d) {
      vol = Math.max(0, Math.min(15, vol + d)); clearTimeout(volTimer);
      volTimer = setTimeout(() => { volTimer = null; show(view); }, 1500); show(view);
      if (d > 0) ok('volup');
    }
    function startCombo() {
      combo = { t: Date.now(), phase: 'shot' }; clearTimeout(sideHoldTimer); clearTimeout(volTimer); volTimer = null;
      comboTimer = setInterval(() => {
        const s = (Date.now() - combo.t) / 1000;
        holdEl.textContent = `Beide Tasten gehalten: ${s.toFixed(1).replace('.', ',')} s`;
        if (s >= 1.5 && combo.phase === 'shot') { combo.phase = 'power'; show('power'); ok('power'); }
        if (s >= 7 && combo.phase === 'power') { combo.phase = 'restart'; show('restart'); ok('force'); }
      }, 100);
    }
    function endCombo() {
      clearInterval(comboTimer);
      const s = (Date.now() - combo.t) / 1000;
      if (combo.phase === 'shot' && s < 1.5) { if (view === 'off') show('lock'); else { show('shot'); ok('shot'); } }
      if (combo.phase === 'restart') setTimeout(() => show('lock'), 1500);
      holdEl.innerHTML = '&nbsp;'; combo = null;
      Object.keys(down).forEach(k => { ignore[k] = true; });
    }
    function press(k) {
      if (down[k]) return; down[k] = Date.now();
      $(`.kt-key[data-key="${k}"]`).classList.add('down');
      if ((k === 'side' && down.down) || (k === 'down' && down.side)) { sidePresses = 0; clearTimeout(sideTimer); startCombo(); return; }
      if (k === 'side') {
        sideLong = false;
        sideHoldTimer = setTimeout(() => { if (down.side && !combo) { sideLong = true; show('assistant'); holdEl.textContent = 'Seitentaste gehalten: Assistent startet'; } }, 900);
      }
    }
    function release(k) {
      if (!down[k]) return; const held = Date.now() - down[k]; delete down[k];
      $(`.kt-key[data-key="${k}"]`).classList.remove('down');
      if (ignore[k]) { delete ignore[k]; return; }
      if (combo) { if (!down.side || !down.down) endCombo(); return; }
      if (k === 'side') {
        clearTimeout(sideHoldTimer);
        if (sideLong) { setTimeout(() => { holdEl.innerHTML = '&nbsp;'; }, 1200); return; }
        sidePresses++; clearTimeout(sideTimer);
        sideTimer = setTimeout(() => {
          const n = sidePresses; sidePresses = 0;
          if (n >= 5) show('sos');
          else if (n === 2) { show('camera'); ok('camera'); }
          else if (n === 1) { show(view === 'off' ? 'lock' : 'off'); if (view === 'lock') ok('screen'); }
        }, 420);
      }
      if (k === 'up' && held < 1500) volume(1);
      if (k === 'down' && held < 1500) setTimeout(() => { if (!combo && !down.side) volume(-1); }, 60);
    }
    $$('.kt-key', kt).forEach(b => {
      b.addEventListener('pointerdown', e => { e.preventDefault(); try { b.setPointerCapture(e.pointerId); } catch (_) { } press(b.dataset.key); });
      ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(ev => b.addEventListener(ev, () => release(b.dataset.key)));
      b.addEventListener('contextmenu', e => e.preventDefault());
    });
    const KM = { l: 'up', k: 'down', s: 'side' };
    document.addEventListener('keydown', e => { const k = KM[e.key.toLowerCase()]; if (!k || e.target.matches('input, textarea') || !inView(kt)) return; e.preventDefault(); press(k); });
    document.addEventListener('keyup', e => { const k = KM[e.key.toLowerCase()]; if (k) release(k); });
    $('#kt-reset').addEventListener('click', () => { done.clear(); renderTasks(); show('off'); });
    renderTasks(); show('off');
  }
  function inView(el) { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; }

  /* ======================= Gesture trainer ======================= */
  const gt = $('#gesture-trainer');
  if (gt) {
    gt.innerHTML = `<div class="trainer"><div class="gt-phone"><div class="gt-screen" id="gt-screen"><div id="gt-view"></div><span class="gt-handle"></span><span class="gt-dot" id="gt-dot" hidden></span></div></div>
      <div class="trainer-side"><p>Wischen Sie direkt auf dem Übungs-Bildschirm, mit dem Finger oder mit gedrückter Maustaste. Wichtig ist, <b>wo</b> Sie anfangen: am Rand.</p>
      <div class="trainer-fb" id="gt-fb">Versuchen Sie die erste Aufgabe.</div><ul class="task-list" id="gt-tasks"></ul></div></div>`;
    const area = $('#gt-screen'), viewEl = $('#gt-view'), dot = $('#gt-dot'), fb = $('#gt-fb');
    const done = new Set();
    const V = {
      app: '<div class="gv app"><b>Galerie</b><div class="gv-grid">' + '<i></i>'.repeat(9) + '</div></div>',
      home: '<div class="gv home"><b>12:30</b><div class="gv-icons">' + '<i></i>'.repeat(8) + '</div></div>',
      notif: '<div class="gv panel"><b>Benachrichtigungen</b><p>Anna: Bis heute Abend!</p><p>Kalender: Zahnarzt 15:00</p></div>',
      quick: '<div class="gv panel"><b>Schnelleinstellungen</b><div class="gv-tiles"><i class="on">WLAN</i><i>Bluetooth</i><i class="on">Ton</i><i>Taschenl.</i></div></div>',
      recent: '<div class="gv recent"><span>Galerie</span><span>Nachrichten</span><span>Kamera</span><small>Zuletzt verwendet</small></div>',
      circle: '<div class="gv app"><b>Galerie</b><div class="gv-grid">' + '<i></i>'.repeat(9) + '</div><em class="gv-circle">Kreisen Sie ein, wonach Google suchen soll</em></div>',
      back: '<div class="gv app"><b>‹ Alben</b><p style="padding:0 10px">Sie sind einen Schritt zurückgegangen.</p></div>'
    };
    const MSG = { home: 'Startbildschirm geöffnet.', notif: 'Benachrichtigungen geöffnet. Nach oben wischen schließt sie.', quick: 'Schnelleinstellungen geöffnet.', back: 'Zurück. Das funktioniert von beiden Seiten.', recent: 'Zuletzt verwendete Apps. Nach oben wischen schließt eine App.', circle: 'Circle to Search gestartet.' };
    const show = v => { viewEl.innerHTML = V[v]; };
    const renderT = () => { $('#gt-tasks').innerHTML = GESTURE_TASKS.map(t => `<li class="${done.has(t.id) ? 'done' : ''}">${done.has(t.id) ? icon('check') : '<span class="tdot"></span>'}<span>${esc(t.q)}</span></li>`).join(''); };
    let st = null, holdT = null;
    const rel = e => { const r = area.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }; };
    const result = (id) => {
      show(id); fb.className = 'trainer-fb ok'; fb.textContent = MSG[id];
      if (!done.has(id)) { done.add(id); renderT(); if (done.size === GESTURE_TASKS.length) toast('Alle Gesten geschafft!'); }
      setTimeout(() => { if (id !== 'home') show('app'); else setTimeout(() => show('app'), 1200); }, 2200);
    };
    area.addEventListener('pointerdown', e => {
      e.preventDefault(); try { area.setPointerCapture(e.pointerId); } catch (_) { }
      const p = rel(e); st = { ...p, t: Date.now(), lx: p.x, ly: p.y, lm: Date.now(), moved: false };
      dot.hidden = false; dot.style.left = p.x * 100 + '%'; dot.style.top = p.y * 100 + '%';
      clearTimeout(holdT);
      if (p.y > .9) holdT = setTimeout(() => { if (st && !st.moved) { result('circle'); st = null; dot.hidden = true; } }, 900);
    });
    area.addEventListener('pointermove', e => {
      if (!st) return; const p = rel(e);
      if (Math.hypot(p.x - st.x, p.y - st.y) > .03) st.moved = true;
      if (Math.hypot(p.x - st.lx, p.y - st.ly) > .01) { st.lm = Date.now(); st.lx = p.x; st.ly = p.y; }
      dot.style.left = p.x * 100 + '%'; dot.style.top = p.y * 100 + '%';
    });
    const end = e => {
      clearTimeout(holdT); dot.hidden = true; if (!st) return;
      const p = rel(e), dx = p.x - st.x, dy = p.y - st.y, pause = Date.now() - st.lm;
      const s = st; st = null;
      if (s.y > .88 && dy < -.15) return result(pause > 280 ? 'recent' : 'home');
      if (s.y < .12 && dy > .15) return result(s.x < .5 ? 'notif' : 'quick');
      if ((s.x < .1 && dx > .15) || (s.x > .9 && dx < -.15)) return result('back');
      fb.className = 'trainer-fb';
      fb.textContent = s.moved ? (s.y >= .12 && s.y <= .88 && Math.abs(dy) > Math.abs(dx) ? 'Fast! Beginnen Sie die Bewegung ganz am oberen oder unteren Rand.' : 'Beginnen Sie am Rand des Bildschirms und wischen Sie zügig.') : 'Das war ein Tippen. Für Gesten den Finger über den Bildschirm ziehen.';
    };
    area.addEventListener('pointerup', end); area.addEventListener('pointercancel', () => { st = null; dot.hidden = true; });
    renderT(); show('app');
  }

  /* ======================= Call simulator ======================= */
  const cs = $('#call-sim');
  if (cs) {
    cs.innerHTML = `<div class="trainer"><div class="kt-wrap"><div class="call-phone" id="call-phone"></div><button type="button" class="btn" id="call-vol" style="margin-top:10px">Lautstärketaste drücken</button></div>
      <div class="trainer-side"><div class="trainer-fb" id="call-fb">Ein Anruf kommt herein. Ziehen Sie den <b>grünen</b> Knopf zur Seite, um anzunehmen, oder den <b>roten</b>, um abzulehnen.</div><ul class="task-list" id="call-explain"></ul></div></div>`;
    const ph = $('#call-phone'), fb = $('#call-fb'); let timer = null, secs = 0, muted = false;
    const BTN = { spk: ['Lautsprecher', 'Schaltet auf Freisprechen um. Das Telefon können Sie dann vor sich auf den Tisch legen.'], mute: ['Stumm', 'Ihr Mikrofon ist aus: Ihr Gegenüber hört Sie nicht, Sie hören es weiterhin.'], pad: ['Tastenfeld', 'Für Ziffern-Eingaben, z. B. bei Hotlines („Drücken Sie die 1“).'], bt: ['Bluetooth', 'Gespräch auf Kopfhörer oder Auto-Freisprechanlage umleiten.'], hold: ['Halten', 'Gespräch in die Warteschleife legen (wenn Ihr Tarif es unterstützt).'], add: ['Anruf hinzuf.', 'Zweite Person anrufen, z. B. für eine Konferenz.'] };
    function ringing() {
      clearInterval(timer); muted = false;
      ph.innerHTML = `<div class="call-v ring"><small>Eingehender Anruf</small><b>Anna Beispiel</b><span>Mobil · 0151 2345678</span>
        <div class="call-drag"><span class="call-h green" data-act="accept" aria-label="Annehmen">✆</span><span class="call-h red" data-act="decline" aria-label="Ablehnen">✆</span></div>
        <button type="button" class="call-msg">Nachricht senden</button></div>`;
    }
    function incall() {
      secs = 0; ph.innerHTML = `<div class="call-v"><b>Anna Beispiel</b><span id="call-t">00:00</span><div class="call-grid">${Object.entries(BTN).map(([k, [l]]) => `<button type="button" data-b="${k}" aria-label="${esc(l)}">${esc({ spk: 'Lautspr.', mute: 'Stumm', pad: 'Tasten', bt: 'Blueto.', hold: 'Halten', add: 'Anruf +' }[k])}</button>`).join('')}</div><button type="button" class="call-end" aria-label="Auflegen">Auflegen</button></div>`;
      timer = setInterval(() => { secs++; const t = $('#call-t'); if (t) t.textContent = String(Math.floor(secs / 60)).padStart(2, '0') + ':' + String(secs % 60).padStart(2, '0'); }, 1000);
    }
    function ended(msg) { clearInterval(timer); ph.innerHTML = `<div class="call-v"><b>${esc(msg)}</b><button type="button" class="btn primary" data-act="again">Neuer Anruf</button></div>`; }
    let drag = null;
    ph.addEventListener('pointerdown', e => {
      const h = e.target.closest('.call-h'); if (!h) return; e.preventDefault();
      drag = { h, x: e.clientX, y: e.clientY }; try { h.setPointerCapture(e.pointerId); } catch (_) { }
    });
    ph.addEventListener('pointermove', e => { if (!drag) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.h.style.transform = `translate(${dx}px, ${dy}px)`; drag.d = Math.hypot(dx, dy); });
    ph.addEventListener('pointerup', () => {
      if (!drag) return; const { h, d } = drag; drag = null; h.style.transform = '';
      if ((d || 0) < 50) { fb.innerHTML = 'Tippen reicht nicht: <b>ziehen</b> Sie den Knopf ein Stück zur Seite. So verhindert das Telefon versehentliches Annehmen in der Tasche.'; return; }
      if (h.dataset.act === 'accept') { incall(); fb.innerHTML = '<b>Angenommen.</b> Tippen Sie auf die Knöpfe, um zu erfahren, was sie tun.'; }
      else { ended('Abgelehnt'); fb.innerHTML = '<b>Abgelehnt.</b> Der Anrufer landet auf Ihrer Mailbox (falls eingerichtet).'; }
    });
    ph.addEventListener('click', e => {
      if (e.target.closest('.call-msg')) { ended('Nachricht gesendet: „Ich rufe gleich zurück.“'); fb.innerHTML = '<b>Mit Nachricht abgelehnt.</b> Der Anrufer bekommt eine SMS. Die Texte können Sie in der Telefon-App unter Einstellungen › Schnellablehnungsnachrichten ändern.'; return; }
      const b = e.target.closest('[data-b]');
      if (b) { b.classList.toggle('on'); const [l, d] = BTN[b.dataset.b]; fb.innerHTML = `<b>${esc(l)}:</b> ${esc(d)}`; return; }
      if (e.target.closest('.call-end')) { ended('Anruf beendet'); fb.innerHTML = '<b>Aufgelegt.</b> Tipp: Liegt das Telefon am Ohr, ist der Bildschirm aus (Näherungssensor). Nehmen Sie es kurz vom Ohr, um aufzulegen.'; return; }
      if (e.target.closest('[data-act="again"]')) { ringing(); fb.innerHTML = 'Ein Anruf kommt herein. Ziehen Sie den <b>grünen</b> Knopf zur Seite, um anzunehmen.'; }
    });
    $('#call-vol').addEventListener('click', () => {
      if ($('.ring', ph)) { $('.ring', ph).classList.add('muted'); fb.innerHTML = '<b>Klingelton stumm.</b> Der Anruf läuft weiter, Sie können ihn noch annehmen. Ohne Annahme geht er nach einiger Zeit auf die Mailbox.'; }
      else fb.innerHTML = 'Während eines Gesprächs ändern die Lautstärketasten die Gesprächslautstärke.';
    });
    ringing();
  }

  /* ======================= Exposure simulator ======================= */
  const ex = $('#expo-sim');
  if (ex) {
    const ISO = [50, 100, 200, 400, 800, 1600, 3200], SH = [1 / 2000, 1 / 1000, 1 / 500, 1 / 250, 1 / 125, 1 / 60, 1 / 30, 1 / 15, 1 / 8, 1 / 4];
    const SHL = ['1/2000', '1/1000', '1/500', '1/250', '1/125', '1/60', '1/30', '1/15', '1/8', '1/4'];
    const LIGHT = { day: { l: 'Sonniger Tag', base: 3.32 }, room: { l: 'Wohnzimmer abends', base: -4.74 } };
    ex.innerHTML = `<div class="expo">
      <svg viewBox="0 0 320 200" class="expo-img" role="img" aria-label="Simuliertes Foto mit laufender Person">
        <defs><filter id="ex-blur" x="-50%" y="-10%" width="200%" height="120%"><feGaussianBlur id="ex-bstd" stdDeviation="0 0"/></filter>
        <filter id="ex-noise"><feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="1" seed="4"/><feColorMatrix type="saturate" values="0"/></filter>
        <linearGradient id="ex-sky" x1="0" x2="0" y1="0" y2="1"><stop offset="0" class="m-sky-a"/><stop offset="1" class="m-sky-b"/></linearGradient></defs>
        <g id="ex-scene"><rect width="320" height="200" fill="url(#ex-sky)"/><circle cx="250" cy="50" r="18" class="m-sun"/>
          <path class="m-hill1" d="M0 140 Q90 100 180 135 T320 120 V200 H0z"/><path class="m-hill2" d="M0 170 Q140 145 320 165 V200 H0z"/>
          <g filter="url(#ex-blur)"><g class="expo-runner"><circle cx="60" cy="118" r="9" class="m-person"/><rect x="52" y="128" width="16" height="30" rx="6" class="m-person"/></g></g></g>
        <rect id="ex-noise-r" width="320" height="200" filter="url(#ex-noise)" opacity="0"/>
      </svg>
      <div class="expo-ctl">
        <div class="seg" role="group" aria-label="Licht">${Object.entries(LIGHT).map(([k, v], i) => `<button type="button" data-light="${k}" aria-pressed="${i === 0}">${v.l}</button>`).join('')}</div>
        <label for="ex-iso">ISO (Lichtempfindlichkeit): <b id="ex-iso-v"></b></label><input type="range" id="ex-iso" min="0" max="6" step="1" value="1">
        <label for="ex-sh">Belichtungszeit: <b id="ex-sh-v"></b> Sekunden</label><input type="range" id="ex-sh" min="0" max="9" step="1" value="1">
        <div class="expo-meter"><span>zu dunkel</span><div><i id="ex-needle"></i></div><span>zu hell</span></div>
        <ul class="expo-out" id="ex-out"></ul>
        <button type="button" class="btn" id="ex-auto">${icon('refresh')}Automatik-Werte setzen</button>
      </div></div>`;
    let light = 'day';
    const scene = $('#ex-scene', ex);
    function upd() {
      const iso = ISO[+$('#ex-iso').value], t = SH[+$('#ex-sh').value];
      $('#ex-iso-v').textContent = iso; $('#ex-sh-v').textContent = SHL[+$('#ex-sh').value];
      const ev = Math.log2(iso / 100) + Math.log2(t * 100) + LIGHT[light].base;
      const bright = Math.max(.08, Math.min(3.2, Math.pow(2, ev * .55)));
      scene.style.filter = `brightness(${bright.toFixed(2)})`;
      const noise = Math.max(0, (Math.log2(iso / 100)) / 5) * .55 * (ev < -1 ? 1.2 : 1);
      $('#ex-noise-r').setAttribute('opacity', noise.toFixed(2));
      const blur = Math.min(14, t * 450);
      $('#ex-bstd').setAttribute('stdDeviation', `${blur.toFixed(1)} 0`);
      const pos = Math.max(0, Math.min(100, 50 + ev * 12));
      $('#ex-needle').style.left = pos + '%';
      const out = [];
      out.push(Math.abs(ev) < .8 ? ['ok', 'Helligkeit stimmt.'] : ev < 0 ? ['bad', 'Zu dunkel: ISO erhöhen oder länger belichten.'] : ['bad', 'Zu hell: ISO senken oder kürzer belichten.']);
      out.push(blur > 3 ? ['bad', `Bewegungsunschärfe: Bei ${SHL[+$('#ex-sh').value]} s verwischt die laufende Person. Für Bewegung 1/250 s oder kürzer.`] : ['ok', 'Bewegung eingefroren.']);
      out.push(iso >= 1600 ? ['bad', `Bildrauschen sichtbar: ISO ${iso} verstärkt auch das „Grieseln“.`] : ['ok', `ISO ${iso}: kaum Rauschen.`]);
      $('#ex-out').innerHTML = out.map(([c, s]) => `<li class="${c}">${c === 'ok' ? '✓' : '!'} ${esc(s)}</li>`).join('');
    }
    $$('[data-light]', ex).forEach(b => b.addEventListener('click', () => { light = b.dataset.light; $$('[data-light]', ex).forEach(x => x.setAttribute('aria-pressed', x === b)); upd(); }));
    $('#ex-iso').addEventListener('input', upd); $('#ex-sh').addEventListener('input', upd);
    $('#ex-auto').addEventListener('click', () => { if (light === 'day') { $('#ex-iso').value = 1; $('#ex-sh').value = 1; } else { $('#ex-iso').value = 4; $('#ex-sh').value = 6; } upd(); toast('So ungefähr würde die Automatik wählen'); });
    upd();
  }

  /* ======================= Camera advisor ======================= */
  const ca = $('#cam-advisor');
  if (ca) {
    ca.innerHTML = `<p class="quiz-q">Was möchten Sie fotografieren?</p><div class="combo-picks">${Object.entries(CAM_ADVICE).map(([k, v]) => `<button type="button" data-k="${k}" aria-pressed="false">${esc(v.t)}</button>`).join('')}</div><div id="ca-out" aria-live="polite"></div>`;
    ca.addEventListener('click', e => {
      const b = e.target.closest('[data-k]'); if (!b) return;
      $$('[data-k]', ca).forEach(x => x.setAttribute('aria-pressed', x === b));
      const a = CAM_ADVICE[b.dataset.k];
      $('#ca-out').innerHTML = `<div class="ca-card"><div class="ca-tags"><span class="chip lvl-2">Objektiv: ${esc(a.lens)}</span><span class="chip lvl-1">Modus: ${esc(a.mode)}</span></div><ol class="steps">${a.steps.map(s => `<li>${s}</li>`).join('')}</ol><div class="why"><b>Warum?</b> ${a.why}</div></div>`;
    });
  }

  /* ======================= Charging calculator ======================= */
  const cc = $('#charge-calc');
  if (cc) {
    cc.innerHTML = `<div class="calc"><div class="calc-in">
      <label for="cc-ch">Ladegerät</label><select id="cc-ch">${Object.entries(CHARGERS).map(([k, v]) => `<option value="${k}">${esc(v.l)}</option>`).join('')}</select>
      <label for="cc-from">Akkustand jetzt: <b id="cc-from-v"></b></label><input type="range" id="cc-from" min="0" max="95" step="5" value="15">
      <label for="cc-to">Laden bis: <b id="cc-to-v"></b></label><input type="range" id="cc-to" min="20" max="100" step="5" value="80">
      </div><div class="calc-out"><div class="batt"><span id="cc-b1"></span><span id="cc-b2"></span></div><div class="big-n" id="cc-res"></div><p class="caption" id="cc-note" style="text-align:left"></p></div></div>`;
    const segTime = (seg, a, b) => { const bounds = [[0, 50], [50, 80], [80, 100]]; let m = 0; bounds.forEach(([lo, hi], i) => { const ov = Math.max(0, Math.min(b, hi) - Math.max(a, lo)); m += ov / (hi - lo) * seg[i]; }); return m; };
    function upd() {
      let a = +$('#cc-from').value, b = +$('#cc-to').value; if (b <= a) { b = Math.min(100, a + 5); $('#cc-to').value = b; }
      $('#cc-from-v').textContent = a + ' %'; $('#cc-to-v').textContent = b + ' %';
      const m = Math.round(segTime(CHARGERS[$('#cc-ch').value].seg, a, b));
      $('#cc-b1').style.width = a + '%'; $('#cc-b2').style.width = (b - a) + '%';
      $('#cc-res').textContent = m >= 60 ? `ca. ${Math.floor(m / 60)} Std. ${m % 60} Min.` : `ca. ${m} Min.`;
      $('#cc-note').textContent = (b > 80 ? 'Ab etwa 80 % lädt jeder Akku langsamer, um ihn zu schonen. ' : 'Bis 80 % geht es am schnellsten. ') + 'Richtwerte bei Zimmertemperatur und ohne gleichzeitige Nutzung.';
    }
    ['cc-ch', 'cc-from', 'cc-to'].forEach(id => $('#' + id).addEventListener('input', upd)); upd();
  }

  /* ======================= Storage calculator ======================= */
  const sc = $('#storage-calc');
  if (sc) {
    sc.innerHTML = `<div class="calc"><div class="calc-in">
      <label for="sc-size">Speichergröße Ihres Modells</label><select id="sc-size"><option value="128">128 GB</option><option value="256" selected>256 GB</option><option value="512">512 GB</option></select>
      <label for="sc-free">Davon noch frei: <b id="sc-free-v"></b></label><input type="range" id="sc-free" min="1" max="230" step="1" value="120">
      <p class="caption" style="text-align:left">Den freien Speicher sehen Sie unter Einstellungen › Gerätewartung › Speicher.</p></div>
      <div class="calc-out"><div class="table-wrap" style="margin:0"><table><thead><tr><th>Das passt noch drauf</th><th>ca.</th></tr></thead><tbody id="sc-out"></tbody></table></div></div></div>`;
    function upd() {
      const size = +$('#sc-size').value, max = size - 20, f = $('#sc-free');
      f.max = max; if (+f.value > max) f.value = max;
      const free = +f.value; $('#sc-free-v').textContent = free + ' GB';
      $('#sc-out').innerHTML = Object.values(MEDIA).map(m => { const n = Math.floor(free * 1024 * .9 / m.mb); return `<tr><td>${esc(m.l)}</td><td class="n">${n.toLocaleString('de-DE')} ${m.unit}</td></tr>`; }).join('') +
        `<tr><td colspan="2" class="caption" style="text-align:left">Richtwerte: Dateigrößen schwanken je nach Motiv. 10 % Reserve sind eingerechnet, damit das Telefon flüssig bleibt. Etwa 20 GB belegt das System selbst.</td></tr>`;
    }
    ['sc-size', 'sc-free'].forEach(id => $('#' + id).addEventListener('input', upd)); upd();
  }
})();
