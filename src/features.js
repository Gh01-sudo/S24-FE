/* ================= Version, One UI 8.5, Spickzettel, Mein Gerät, Kompaktansicht, Notizen, Weitergabe ================= */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const { store, toast } = window.HB;
  const isLocal = location.protocol === 'file:' || location.protocol === 'content:';

  /* ---------- Version ---------- */
  $$('[data-version]').forEach(el => { el.textContent = `Version ${HB_VERSION.v} · Stand ${HB_VERSION.date}`; });
  const cl = $('#changelog');
  if (cl) cl.innerHTML = CHANGELOG.map(([v, t], i) => `<li${i === 0 ? ' class="cur"' : ''}><b>Version ${esc(v)}${i === 0 ? ' (aktuell)' : ''}</b><span>${esc(t)}</span></li>`).join('');

  /* ---------- Neu in One UI 8.5 ---------- */
  const ou = $('#oneui85-list');
  if (ou) ou.innerHTML = ONEUI85.map(([t, d]) => `<div class="card nu-card"><h4>${icon('bulb')}${esc(t)}</h4><p>${esc(d)}</p></div>`).join('');

  /* ---------- Spickzettel ---------- */
  const cs = $('#cheatsheet');
  if (cs) {
    const block = (title, ic, rows) => `<div class="cheat-block"><h4>${icon(ic)}${esc(title)}</h4><table><tbody>${rows.map(([a, b]) => `<tr><th scope="row">${esc(a)}</th><td>${esc(b)}</td></tr>`).join('')}</tbody></table></div>`;
    cs.innerHTML = `<div class="cheat-head"><b>Galaxy S24 FE · Spickzettel</b><span data-version></span></div><div class="cheat-grid">` +
      block('Tasten', 'phone', CHEAT.keys) + block('Gesten', 'swipe', CHEAT.gestures) + block('Wichtige Einstellungen (Einstellungen › …)', 'grid', CHEAT.paths) + block('Nummern & Codes', 'info', CHEAT.numbers) + '</div>';
    $$('[data-version]', cs).forEach(el => { el.textContent = `Version ${HB_VERSION.v} · Stand ${HB_VERSION.date}`; });
  }
  $$('.print-btn').forEach(b => {
    if (!isLocal) { b.hidden = true; const n = b.parentElement.querySelector('.print-note'); if (n) n.hidden = false; return; }
    b.addEventListener('click', () => {
      document.body.classList.add('printing-cheat');
      setTimeout(() => { try { window.print(); } catch (e) { toast('Drucken ist hier nicht möglich.'); } document.body.classList.remove('printing-cheat'); }, 50);
    });
  });

  /* ---------- Mein Gerät ---------- */
  const md = $('#my-device');
  if (md) {
    const F = [
      ['model', 'Modell', 'SM-S721B/DS', 'text'], ['imei', 'IMEI (*#06#)', '15 Ziffern', 'text'], ['serial', 'Seriennummer', 'Einstellungen › Telefoninfo', 'text'],
      ['bought', 'Kaufdatum', '', 'date'], ['shop', 'Händler', 'z. B. Elektromarkt in …', 'text'], ['carrier', 'Mobilfunkanbieter & Tarif', 'z. B. Anbieter, Tarifname', 'text'],
      ['hotline', 'Hotline des Anbieters (SIM sperren)', 'Telefonnummer', 'tel'], ['case', 'Zubehör (Hülle, Schutzglas, Ladegerät)', '', 'text'], ['notes', 'Sonstiges', 'z. B. Versicherung, Vertragsnummer', 'textarea']
    ];
    let data = store.get('mydevice', {});
    md.innerHTML = `<div class="callout warn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${ICONS.warn}</svg><div><b class="t">Bitte keine Passwörter, PINs oder PUKs eintragen</b><p>Die Angaben werden nur in diesem Browser auf diesem Gerät gespeichert. Zugangsdaten gehören auf Papier an einen sicheren Ort.</p></div></div>
      <div class="md-grid">${F.map(([k, l, ph, t]) => `<label class="md-field${t === 'textarea' ? ' wide' : ''}" for="md-${k}"><span>${esc(l)}</span>${t === 'textarea' ? `<textarea id="md-${k}" data-k="${k}" rows="3" placeholder="${esc(ph)}"></textarea>` : `<input id="md-${k}" data-k="${k}" type="${t}" placeholder="${esc(ph)}" autocomplete="off">`}</label>`).join('')}</div>
      <p class="md-warranty" id="md-warranty"></p>`;
    $$('[data-k]', md).forEach(i => { if (data[i.dataset.k]) i.value = data[i.dataset.k]; });
    const warranty = () => {
      const v = data.bought, el = $('#md-warranty');
      if (!v) { el.textContent = 'Tragen Sie das Kaufdatum ein, dann zeige ich, bis wann Gewährleistung und Herstellergarantie laufen.'; return; }
      const d = new Date(v + 'T12:00:00'); if (isNaN(d)) { el.textContent = ''; return; }
      const plus = m => { const x = new Date(d); x.setMonth(x.getMonth() + m); return x.toLocaleDateString('de-DE'); };
      el.innerHTML = `Gewährleistung beim Händler und Samsung-Herstellergarantie (24 Monate) laufen bis etwa <b>${plus(24)}</b>. Beweislastumkehr bis <b>${plus(12)}</b>.`;
    };
    let tmr;
    md.addEventListener('input', e => {
      const k = e.target.dataset.k; if (!k) return;
      data[k] = e.target.value; clearTimeout(tmr); tmr = setTimeout(() => { store.set('mydevice', data); }, 300);
      if (k === 'bought') warranty();
    });
    warranty();
  }

  /* ---------- Persönliche Notizen pro Kapitel ---------- */
  $$('section.chapter').forEach(sec => {
    const box = $('.done-box', sec); if (!box) return;
    const id = 'note-' + sec.id;
    const wrap = document.createElement('details');
    wrap.className = 'note-box';
    const saved = store.get(id, '');
    wrap.innerHTML = `<summary>${icon('note')}<span>Meine Notizen zu diesem Kapitel</span><em class="note-flag"${saved ? '' : ' hidden'}>gespeichert</em></summary>
      <label class="visually-hidden" for="${id}">Notizen zu ${esc(sec.dataset.title)}</label><textarea id="${id}" rows="4" placeholder="z. B. „Mein Akkuschutz steht auf 85 %“ – wird nur auf diesem Gerät gespeichert.">${esc(saved)}</textarea>`;
    if (saved) wrap.open = true;
    sec.insertBefore(wrap, box);
    let t;
    $('textarea', wrap).addEventListener('input', e => { clearTimeout(t); t = setTimeout(() => { store.set(id, e.target.value); $('.note-flag', wrap).hidden = !e.target.value; }, 400); });
  });

  /* ---------- Kompaktansicht ---------- */
  const PRO_CHAPTERS = ['knox', 'profi'];
  const PRO_H3 = ['modi-detail', 'kamera-labor', 'pro-modus', 'kamera-einstellungen', 'kamera-ai', 'speicher-rechner', 'ladezeit', 'dex', 'knox-firma', 'pflege', 'checkliste', 'multitasking', 'edge', 'weitere-apps'];
  PRO_H3.forEach(id => {
    const h = document.getElementById(id); if (!h || h.closest('.pro-block')) return;
    const w = document.createElement('div'); w.className = 'pro-block';
    h.parentNode.insertBefore(w, h);
    let el = h; const stop = n => !n || (n.matches && (n.matches('h3') && n !== h)) || n.classList && (n.classList.contains('done-box') || n.classList.contains('note-box') || n.classList.contains('ch-nav'));
    while (el && !stop(el)) { const nx = el.nextElementSibling; w.appendChild(el); el = nx; }
  });
  PRO_CHAPTERS.forEach(id => { const s = document.getElementById(id); if (s) s.classList.add('pro-chapter'); });
  const banner = document.createElement('div');
  banner.className = 'compact-banner'; banner.hidden = true;
  banner.innerHTML = `<span>${icon('eye')}<b>Kompaktansicht:</b> Hintergrund-Kästen und Profi-Abschnitte sind ausgeblendet.</span><button type="button" class="btn" data-act="compact">Alles anzeigen</button>`;
  const content = $('.content'); content.insertBefore(banner, content.firstChild);
  const applyCompact = on => {
    document.body.classList.toggle('compact', on);
    banner.hidden = !on;
    PRO_CHAPTERS.forEach(id => { $$(`[data-sec="${id}"]`).forEach(a => { (a.closest('li') || a).classList.toggle('pro-hidden', on); }); });
    $$('.ch-nav a').forEach(a => a.classList.toggle('pro-hidden', on && PRO_CHAPTERS.includes(a.getAttribute('href').slice(1))));
    // Gruppenüberschriften ausblenden, wenn alle ihre Kapitel ausgeblendet sind
    $$('.toc-group, .ch-group-title').forEach(g => {
      let n = g.nextElementSibling, any = false;
      while (n && !n.matches('.toc-group, .ch-group-title')) { if (!n.classList.contains('pro-hidden') && !(n.querySelector && n.querySelector('.pro-hidden'))) any = true; n = n.nextElementSibling; }
      g.classList.toggle('pro-hidden', on && !any);
    });
    $$('.in-chapter a').forEach(a => { const t = document.getElementById(a.getAttribute('href').slice(1)); a.parentElement.hidden = on && !!t && !!t.closest('.pro-block'); });
    $$('[data-act="compact"]').forEach(b => { if (b.closest('.compact-banner')) return; b.setAttribute('aria-pressed', on); b.querySelector('span') && (b.querySelector('span').textContent = on ? 'Alles anzeigen' : 'Nur das Wichtigste'); });
  };
  let compact = store.get('compact', false);
  applyCompact(compact);
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-act="compact"]'); if (!b) return;
    compact = !compact; store.set('compact', compact); applyCompact(compact);
    toast(compact ? 'Kompaktansicht: nur das Wichtigste' : 'Alle Inhalte werden angezeigt');
  });

  /* ---------- Weitergabe ---------- */
  const fileName = 'S24-FE-Handbuch.html';
  async function shareHandbook() {
    if (!isLocal) {
      const url = location.href.split('#')[0];
      try { if (navigator.share) { await navigator.share({ title: document.title, url }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
      try { await navigator.clipboard.writeText(url); toast('Link kopiert'); } catch (e) { toast('Bitte den Link aus der Adresszeile kopieren.'); }
      return;
    }
    const src = window.__HB_SRC;
    if (!src) { toast('Bitte die Datei über „Eigene Dateien“ teilen.'); return; }
    const file = new File([src], fileName, { type: 'text/html' });
    try {
      if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'Galaxy S24 FE Handbuch', text: 'Das Einsteiger-Handbuch für das Galaxy S24 FE. Datei antippen und mit Chrome oder Samsung Internet öffnen.' }); return; }
    } catch (e) { if (e && e.name === 'AbortError') return; }
    try {
      const a = document.createElement('a'); a.href = URL.createObjectURL(file); a.download = fileName;
      document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
      toast('Kopie gespeichert: in „Eigene Dateien › Downloads“ antippen › Teilen');
    } catch (e) { toast('Bitte die Datei über „Eigene Dateien“ teilen.'); }
  }
  $$('[data-act="share"]').forEach(b => b.addEventListener('click', shareHandbook));
  const old = $('#share-btn');
  if (old) { const nb = old.cloneNode(true); old.replaceWith(nb); nb.parentElement.hidden = false; nb.lastChild.textContent = isLocal ? 'Handbuch weitergeben' : 'Link teilen'; nb.addEventListener('click', shareHandbook); }

  // Hinweis bei eingeschränkter Vorschau (z. B. in WhatsApp oder E-Mail-App geöffnet)
  let storageOk = true;
  try { localStorage.setItem('s24fe:probe', '1'); localStorage.removeItem('s24fe:probe'); } catch (e) { storageOk = false; }
  const inWebView = /; wv\)/.test(navigator.userAgent);
  if (isLocal && (!storageOk || inWebView)) {
    const v = document.createElement('div'); v.className = 'viewer-banner';
    v.innerHTML = `<span>${icon('info')}Sie sehen das Handbuch in einer Vorschau${storageOk ? '' : ', die nichts speichern kann'}. Für alle Funktionen: Datei in <b>Chrome</b> oder <b>Samsung Internet</b> öffnen (Menü ⋮ › „Öffnen mit“).</span><button type="button" class="iconbtn" aria-label="Hinweis schließen">×</button>`;
    content.insertBefore(v, content.firstChild);
    $('button', v).addEventListener('click', () => v.remove());
  }
})();
