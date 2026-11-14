/* ============ Icons ============ */
const ICONS = {
  play: '<path d="M8 5v14l11-7z"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
  tap: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/>',
  steps: '<path d="M4 18h5v-4h5v-4h5V6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  book: '<path d="M4 4h6a3 3 0 0 1 2 1 3 3 0 0 1 2-1h6v15h-6a2 2 0 0 0-2 2 2 2 0 0 0-2-2H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',
  box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z M3 7l9 4 9-4 M12 11v10" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  plug: '<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  user: '<circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 21a8 8 0 0 1 16 0" fill="none" stroke="currentColor" stroke-width="2"/>',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>',
  swipe: '<path d="M12 20V6M7 11l5-5 5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  lens: '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.5"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  cloud: '<path d="M7 18a5 5 0 0 1-.6-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  search: '<circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  phone: '<path d="M6 3h4l1.5 5-2.5 1.5a11 11 0 0 0 5.5 5.5L16 12.5l5 1.5v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  pen: '<path d="M4 20l4-1L19 8l-3-3L5 16zM14 7l3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  note: '<path d="M6 3h9l4 4v14H6zM9 11h7M9 15h7M9 7h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  image: '<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 16l5-5 4 4 3-3 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  moon: '<path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  timer: '<circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 9v4l3 2M9 2h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  car: '<path d="M4 16v-4l2-5h12l2 5v4zM4 16v3M20 16v3M3 12h18" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  home: '<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  reset: '<path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v5h5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  info: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 11v6M12 7.5v.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  warn: '<path d="M12 3l10 18H2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 10v5M12 18v.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  battery: '<rect x="3" y="7" width="16" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M21 10v4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="19" r="1.5"/>',
  freeze: '<rect x="6" y="2" width="12" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  storage: '<ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="currentColor" stroke-width="2"/>',
  app: '<rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2"/>',
  flame: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  sound: '<path d="M4 9h4l5-4v14l-5-4H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M17 9a4 4 0 0 1 0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  contrast: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 3a9 9 0 0 1 0 18z"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  chevL: '<path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  chevR: '<path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  fontUp: '<path d="M3 19l5-14h1l5 14M5 14h7M17 8v8M13 12h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  fontDown: '<path d="M3 19l5-14h1l5 14M5 14h7M15 12h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
};
function icon(name, cls = '') {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${ICONS[name] || ICONS.info}</svg>`;
}

/* ============ Mock screen helpers ============ */
let GID = 0;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function T(x, y, s, size = 12, cls = 'm-text', weight = 400, anchor = 'start') {
  return `<text x="${x}" y="${y}" class="${cls}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${esc(s)}</text>`;
}
function tap(x, y) { return `<circle class="m-tap-ring" cx="${x}" cy="${y}" r="12"/><circle class="m-tap" cx="${x}" cy="${y}" r="12"/>`; }
function hlRect(x, y, w, h, r = 12) { return `<rect class="m-hl" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`; }
function status(onDark) {
  const c = onDark ? 'm-white' : 'm-sb';
  const f = onDark ? 'm-white-fill' : 'm-text';
  return `<text x="28" y="30" class="${c}" font-size="11" font-weight="600">12:30</text>
  <g class="${f}"><rect x="176" y="23" width="3" height="5" rx="1"/><rect x="181" y="21" width="3" height="7" rx="1"/><rect x="186" y="19" width="3" height="9" rx="1"/>
  <rect x="196" y="20" width="16" height="9" rx="2.5" fill-opacity=".9"/><rect x="213" y="23" width="2" height="3" rx="1"/></g>`;
}
function handle(onDark) { return `<rect x="95" y="477" width="50" height="4" rx="2" class="${onDark ? 'm-white-fill' : 'm-text'}" fill-opacity=".6"/>`; }
function phone(inner, o = {}) {
  const h = o.h || 500;
  return `<svg viewBox="0 0 240 ${h}" role="img" aria-label="${esc(o.label || 'Illustration eines Bildschirms')}" xmlns="http://www.w3.org/2000/svg">
  <rect class="m-frame" x="4" y="4" width="232" height="492" rx="34"/>
  <rect class="m-screen" x="11" y="11" width="218" height="478" rx="28"/>
  ${inner}
  ${o.noStatus ? '' : status(o.dark)}
  ${o.noHandle ? '' : handle(o.dark)}
  <circle class="m-dark" cx="120" cy="25" r="5.5"/>
  ${o.extra || ''}</svg>`;
}
function wallpaper() {
  const id = 'w' + (++GID);
  return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" class="m-wall-a"/><stop offset="1" class="m-wall-b"/></linearGradient></defs>
  <rect x="11" y="11" width="218" height="478" rx="28" fill="url(#${id})"/>`;
}
function scene(x, y, w, h, person) {
  const id = 'sky' + (++GID);
  return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="m-sky-a"/><stop offset="1" class="m-sky-b"/></linearGradient>
  <clipPath id="c${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath></defs>
  <g clip-path="url(#c${id})"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id})"/>
  <circle class="m-sun" cx="${x + w * .75}" cy="${y + h * .28}" r="${h * .09}"/>
  <path class="m-hill1" d="M${x} ${y + h * .72} Q${x + w * .3} ${y + h * .5} ${x + w * .6} ${y + h * .68} T${x + w} ${y + h * .6} V${y + h} H${x}z"/>
  <path class="m-hill2" d="M${x} ${y + h * .85} Q${x + w * .4} ${y + h * .7} ${x + w} ${y + h * .82} V${y + h} H${x}z"/>
  ${person ? `<g class="m-person"><circle cx="${x + w * .33}" cy="${y + h * .58}" r="${h * .05}"/><rect x="${x + w * .33 - h * .05}" y="${y + h * .64}" width="${h * .1}" height="${h * .2}" rx="${h * .04}"/></g>` : ''}</g>`;
}
function appIcon(x, y, c, s = 34, label) {
  return `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${s * .32}" class="m-${c}"/>${label ? T(x + s / 2, y + s + 12, label, 8.5, 'm-white', 500, 'middle') : ''}`;
}
function toggle(x, cy, on) {
  return `<rect x="${x}" y="${cy - 8}" width="28" height="16" rx="8" class="${on ? 'm-accent' : 'm-toggle-off'}"/><circle cx="${on ? x + 20 : x + 8}" cy="${cy}" r="6" class="m-knob"/>`;
}
function header(title, back, y = 84) {
  return (back ? T(22, 62, '‹', 22, 'm-text', 400) : '') + T(back ? 40 : 24, back ? 64 : y, title, back ? 16 : 22, 'm-text', 700);
}
function buttons(list, hl) {
  // list: [{t, primary}]
  let out = '', x = 228 - 16;
  const items = list.slice().reverse();
  items.forEach((b, ri) => {
    const i = list.length - 1 - ri;
    const w = Math.max(64, b.t.length * 6.6 + 24);
    x -= w;
    out += `<rect x="${x}" y="436" width="${w}" height="30" rx="15" class="${b.primary ? 'm-accent' : 'm-card'}"/>` +
      T(x + w / 2, 455, b.t, 11, b.primary ? 'm-onaccent' : 'm-text', 600, 'middle');
    if (hl === i) out += tap(x + w / 2, 451);
    x -= 8;
  });
  return out;
}
function wrapText(s, max) {
  const words = s.split(' '); const lines = []; let cur = '';
  words.forEach(w => { if ((cur + ' ' + w).trim().length > max) { lines.push(cur.trim()); cur = w; } else cur += ' ' + w; });
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}

/* list screen: {title, back, items:[{l, s, c, t(oggle bool), r(adio bool)}], hl, top, profile} */
function listScreen(o) {
  let y = o.top || (o.back ? 84 : 104), out = header(o.title, o.back);
  if (o.search) { out += `<rect x="22" y="${y}" width="196" height="28" rx="14" class="m-card"/>` + T(40, y + 18, '⌕  Suchen', 11, 'm-muted'); y += 40; }
  if (o.profile) {
    out += `<rect x="22" y="${y}" width="196" height="48" rx="16" class="m-card"/><circle cx="46" cy="${y + 24}" r="14" class="m-c7"/>` +
      T(68, y + 21, 'Ihr Name', 12, 'm-text', 600) + T(68, y + 35, 'Samsung Account', 10, 'm-muted'); y += 58;
  }
  if (o.note) { wrapText(o.note, 38).forEach(l => { out += T(24, y + 10, l, 10.5, 'm-muted'); y += 15; }); y += 6; }
  const rowH = o.items.some(i => i.s) ? 46 : 38;
  out += `<rect x="22" y="${y}" width="196" height="${o.items.length * rowH + 8}" rx="16" class="m-card"/>`;
  o.items.forEach((it, i) => {
    const ry = y + 4 + i * rowH, cy = ry + rowH / 2;
    let tx = 34;
    if (it.c) { out += `<circle cx="44" cy="${cy}" r="10" class="m-${it.c}"/>`; tx = 62; }
    if (it.r !== undefined) { out += `<circle cx="40" cy="${cy}" r="7" class="m-accent-stroke" stroke-width="2"/>` + (it.r ? `<circle cx="40" cy="${cy}" r="3.5" class="m-accent"/>` : ''); tx = 56; }
    if (it.s) { out += T(tx, cy - 3, it.l, 12, 'm-text', 500) + T(tx, cy + 11, it.s, 9.5, it.sa ? 'm-accent' : 'm-muted'); }
    else out += T(tx, cy + 4, it.l, 12, 'm-text', 500);
    if (it.t !== undefined) out += toggle(182, cy, it.t);
    if (it.w) out += `<g class="m-text" transform="translate(186 ${cy - 8}) scale(.7)">${ICONS.wifi}</g>`;
    if (i < o.items.length - 1) out += `<line x1="${tx}" x2="208" y1="${ry + rowH}" y2="${ry + rowH}" class="m-line"/>`;
    if (o.hl === i) { out += hlRect(25, ry + 1, 190, rowH - 2) + tap(it.t !== undefined ? 196 : 190, cy); }
  });
  if (o.after) out += o.after(y + o.items.length * rowH + 8);
  if (o.buttons) out += buttons(o.buttons, o.hlBtn);
  return phone(out, { label: o.label || o.title });
}

/* form screen: {title, lines[], inputs[], checks[{l,on}], buttons, hlBtn, hlInput, big} */
function formScreen(o) {
  let out = '', y = 92;
  if (o.logo) { out += o.logo; y += 40; }
  wrapText(o.title, 20).forEach(l => { out += T(24, y, l, 20, 'm-text', 700); y += 25; });
  y += 4;
  (o.lines || []).forEach(p => { wrapText(p, 38).forEach(l => { out += T(24, y, l, 10.5, 'm-muted'); y += 15; }); y += 6; });
  y += 6;
  (o.inputs || []).forEach((inp, i) => {
    out += `<rect x="22" y="${y}" width="196" height="34" rx="10" class="m-card"/>` + T(34, y + 21, inp, 11, inp.startsWith('•') ? 'm-text' : 'm-muted');
    if (o.hlInput === i) out += hlRect(20, y - 2, 200, 38) + tap(190, y + 17);
    y += 44;
  });
  (o.checks || []).forEach((c, i) => {
    out += `<rect x="24" y="${y}" width="14" height="14" rx="3" class="${c.on ? 'm-accent' : 'm-toggle-off'}"/>` + (c.on ? `<path d="M27 ${y + 7} l3 3 l5 -6" class="m-white-stroke" stroke-width="2"/>` : '');
    const ls = wrapText(c.l, 32); ls.forEach((l, j) => { out += T(46, y + 11 + j * 14, l, 10.5, 'm-text'); });
    if (o.hlCheck === i) out += hlRect(20, y - 4, 200, ls.length * 14 + 8, 8) + tap(31, y + 7);
    y += ls.length * 14 + 14;
  });
  if (o.extra) out += o.extra(y);
  if (o.buttons) out += buttons(o.buttons, o.hlBtn);
  return phone(out, { label: o.title });
}

function helloScreen() {
  const out = T(120, 210, 'Hallo', 40, 'm-text', 700, 'middle') +
    `<rect x="70" y="250" width="100" height="26" rx="13" class="m-card"/>` + T(120, 267, 'Deutsch  ▾', 11, 'm-text', 500, 'middle') +
    `<circle cx="120" cy="400" r="24" class="m-accent"/><path d="M110 400h20M122 392l8 8-8 8" class="m-white-stroke" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>` +
    tap(120, 400) + T(120, 445, 'Barrierefreiheit', 10, 'm-muted', 500, 'middle');
  return phone(out, { label: 'Willkommensbildschirm mit Pfeil zum Starten' });
}

function homeScreen(o = {}) {
  let out = wallpaper();
  out += T(28, 92, '12:30', 40, 'm-white', 300) + T(30, 112, 'Samstag, 14. November', 10.5, 'm-white', 500);
  out += `<rect x="24" y="128" width="192" height="56" rx="18" class="m-glass"/>` + T(40, 152, '☀ 12°', 16, 'm-white', 600) + T(40, 170, 'Berlin · Sonnig', 9.5, 'm-white');
  const cols = [30, 82, 134, 186], cls = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c2'];
  const names = ['Kalender', 'Galerie', 'Notes', 'Uhr', 'Play Store', 'Rechner', 'Einst.', 'Wetter'];
  for (let i = 0; i < 8; i++) out += appIcon(cols[i % 4], 230 + Math.floor(i / 4) * 64, cls[i], 32, names[i]);
  out += `<rect x="24" y="384" width="192" height="28" rx="14" class="m-glass"/>` + T(42, 402, 'Google-Suche', 10, 'm-white', 500);
  out += `<rect x="20" y="422" width="200" height="50" rx="20" class="m-glass"/>`;
  ['c6', 'c1', 'c3', 'c5'].forEach((c, i) => out += appIcon(32 + i * 49, 430, c, 32));
  if (o.tapAt) out += tap(o.tapAt[0], o.tapAt[1]);
  if (o.labels) {
    const L = [[200, 150, '1'], [208, 245, '2'], [208, 398, '3'], [208, 446, '4'], [175, 479, '5']];
    L.forEach(([x, y, n]) => out += `<circle cx="${x}" cy="${y}" r="9" class="m-tap"/>` + T(x, y + 4, n, 10, 'm-text', 700, 'middle'));
  }
  return phone(out, { dark: true, label: o.label || 'Startbildschirm' });
}

function quickScreen(o = {}) {
  let out = T(24, 60, '12:30', 22, 'm-text', 600) + T(24, 76, 'Sa., 14. Nov.', 10, 'm-muted');
  out += `<rect x="22" y="92" width="196" height="26" rx="13" class="m-card"/><rect x="22" y="92" width="120" height="26" rx="13" class="m-accent-soft"/>` + T(34, 109, '☀  Helligkeit', 10.5, 'm-text', 500);
  const big = [['WLAN', 'Zuhause', true], ['Bluetooth', 'Aus', false]];
  big.forEach((b, i) => {
    const x = 22 + i * 102;
    out += `<rect x="${x}" y="128" width="94" height="48" rx="16" class="${b[2] ? 'm-accent' : 'm-card'}"/>` +
      T(x + 12, 148, b[0], 11, b[2] ? 'm-onaccent' : 'm-text', 700) + T(x + 12, 164, b[1], 9.5, b[2] ? 'm-onaccent' : 'm-muted');
    if (o.hl === i) out += hlRect(x - 3, 125, 100, 54, 18) + tap(x + 70, 152);
  });
  const small = [['Ton', 1], ['Auto-Drehen', 0], ['Taschenl.', 0], ['Flugmodus', 0], ['Nicht stören', 0], ['Energie', 0], ['Mobile Daten', 1], ['Quick Share', 0]];
  small.forEach((s, i) => {
    const cx = 46 + (i % 4) * 50, cy = 210 + Math.floor(i / 4) * 66;
    out += `<circle cx="${cx}" cy="${cy}" r="18" class="${s[1] ? 'm-accent' : 'm-card'}"/>` + T(cx, cy + 32, s[0], 8.5, 'm-text', 500, 'middle');
    if (o.hl === i + 2) out += tap(cx, cy);
  });
  out += `<rect x="22" y="352" width="196" height="40" rx="14" class="m-card"/>` + T(36, 376, '♪  Musik wird nicht abgespielt', 10, 'm-muted');
  out += `<g class="m-text"><circle cx="196" cy="62" r="11" class="m-card"/><path d="M191 67l2-6 7-7 4 4-7 7z" class="m-muted"/></g>`;
  return phone(out, { label: 'Schnelleinstellungen' });
}

function lockScreen(o = {}) {
  let out = wallpaper() + T(120, 120, '12:30', 54, 'm-white', 300, 'middle') + T(120, 145, 'Samstag, 14. November', 11, 'm-white', 500, 'middle');
  out += `<rect x="24" y="180" width="192" height="46" rx="16" class="m-glass"/>` + T(40, 200, 'Nachrichten · jetzt', 9.5, 'm-white', 600) + T(40, 215, 'Anna: Bis heute Abend!', 10.5, 'm-white');
  if (o.pin) {
    out = wallpaper() + T(120, 120, 'PIN eingeben', 14, 'm-white', 600, 'middle');
    [0, 1, 2, 3].forEach(i => out += `<circle cx="${96 + i * 16}" cy="145" r="4" class="m-white-fill" fill-opacity="${i < 2 ? 1 : .35}"/>`);
    for (let i = 0; i < 12; i++) {
      const cx = 70 + (i % 3) * 50, cy = 210 + Math.floor(i / 3) * 52, lbl = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'OK'][i];
      if (lbl) out += `<circle cx="${cx}" cy="${cy}" r="20" class="m-glass"/>` + T(cx, cy + 6, lbl, lbl === 'OK' ? 12 : 17, 'm-white', 500, 'middle');
    }
  } else {
    out += fpIcon(120, 400, 'm-white-stroke');
    out += `<circle cx="36" cy="455" r="12" class="m-glass"/><circle cx="204" cy="455" r="12" class="m-glass"/>`;
  }
  if (o.tapFp) out += tap(120, 400);
  return phone(out, { dark: true, label: o.pin ? 'PIN-Eingabe' : 'Sperrbildschirm' });
}
function fpIcon(cx, cy, cls, s = 1) {
  return `<g class="${cls}" stroke-width="${1.8 * s}" stroke-linecap="round" transform="translate(${cx} ${cy}) scale(${s})">
  <path d="M-12 -4 a12 12 0 0 1 24 0 v4"/><path d="M-8 6 v-10 a8 8 0 0 1 16 0 v8"/><path d="M-4 10 v-14 a4 4 0 0 1 8 0 v10"/><path d="M0 -4 v16"/><path d="M-12 4 v2"/></g>`;
}

function fingerprintScan(pct) {
  let out = header('Fingerabdruck hinzufügen', true);
  wrapText('Legen Sie den Finger auf den Sensor. Heben Sie ihn an, wenn Sie eine Vibration spüren.', 38).forEach((l, i) => out += T(24, 104 + i * 15, l, 10.5, 'm-muted'));
  out += T(120, 220, pct + ' %', 28, 'm-text', 700, 'middle');
  const r = 34, c = 2 * Math.PI * r;
  out += `<circle cx="120" cy="398" r="${r}" class="m-accent-stroke" stroke-opacity=".2" stroke-width="5"/><circle cx="120" cy="398" r="${r}" class="m-accent-stroke" stroke-width="5" stroke-dasharray="${c * pct / 100} ${c}" transform="rotate(-90 120 398)" stroke-linecap="round"/>` + fpIcon(120, 398, 'm-accent-stroke', 1.4) + tap(120, 398);
  return phone(out, { label: 'Fingerabdruck scannen' });
}

function cameraScreen(o = {}) {
  let out = `<rect x="11" y="11" width="218" height="478" rx="28" class="m-dark"/>` + scene(11, 70, 218, 270, true);
  out += `<g class="m-white-fill">` + [40, 80, 120, 160, 200].map(x => `<circle cx="${x}" cy="52" r="7" fill-opacity=".85"/>`).join('') + `</g>`;
  [['0,6', 84], ['1×', 120], ['3', 156]].forEach(([l, x], i) => out += `<circle cx="${x}" cy="312" r="${i === 1 ? 14 : 11}" class="m-scrim"/>` + T(x, 316, l, i === 1 ? 10 : 9, 'm-white', 700, 'middle'));
  ['PORTRÄT', 'FOTO', 'VIDEO', 'MEHR'].forEach((m, i) => out += T(42 + i * 52, 372, m, 9.5, i === 1 ? 'm-white' : 'm-white', i === 1 ? 800 : 500, 'middle'));
  out += `<rect x="96" y="378" width="12" height="2" rx="1" class="m-white-fill"/>`;
  out += `<circle cx="120" cy="425" r="26" class="m-white-fill"/><circle cx="120" cy="425" r="21" class="m-dark" fill-opacity=".1"/>`;
  out += `<rect x="34" y="410" width="30" height="30" rx="8" class="m-c2"/><circle cx="191" cy="425" r="15" class="m-scrim"/><path d="M184 425a7 7 0 0 1 12-5M198 425a7 7 0 0 1-12 5" class="m-white-stroke" stroke-width="2"/>`;
  out += `<rect x="78" y="150" width="48" height="48" class="m-white-stroke" stroke-width="1.5" stroke-opacity=".8"/>`;
  return phone(out, { dark: true, label: 'Kamera-App', extra: o.extra || '' });
}

function keyboardScreen() {
  let out = header('Nachrichten', true) + `<rect x="80" y="100" width="134" height="30" rx="14" class="m-accent-soft"/>` + T(92, 119, 'Hallo! Wie geht’s?', 10.5, 'm-text');
  out += `<rect x="22" y="232" width="196" height="30" rx="15" class="m-card"/>` + T(36, 251, 'Mir geht’s gut|', 11, 'm-text');
  out += `<rect x="11" y="272" width="218" height="200" class="m-card"/>`;
  ['☺', '⌨', 'AI', '🎤', '⚙', '⋯'].forEach((s, i) => out += T(30 + i * 36, 294, s === '🎤' ? '◉' : s, 11, i === 2 ? 'm-accent' : 'm-muted', 700, 'middle'));
  const rows = ['QWERTZUIOPÜ', 'ASDFGHJKLÖÄ', 'YXCVBNM'];
  rows.forEach((r, ri) => {
    const kw = 17, gap = 2.4, total = r.length * kw + (r.length - 1) * gap + (ri === 2 ? 60 : 0), x0 = 120 - total / 2 + (ri === 2 ? 30 : 0);
    [...r].forEach((ch, i) => { const x = x0 + i * (kw + gap); out += `<rect x="${x}" y="${308 + ri * 38}" width="${kw}" height="30" rx="5" class="m-screen"/>` + T(x + kw / 2, 328 + ri * 38, ch, 10, 'm-text', 500, 'middle'); });
  });
  out += `<rect x="16" y="384" width="26" height="30" rx="5" class="m-screen"/>` + T(29, 404, '⇧', 12, 'm-text', 500, 'middle');
  out += `<rect x="16" y="422" width="34" height="30" rx="5" class="m-screen"/>` + T(33, 441, '!#1', 9, 'm-text', 600, 'middle');
  out += `<rect x="56" y="422" width="118" height="30" rx="5" class="m-screen"/>` + T(115, 441, 'Deutsch', 9, 'm-muted', 500, 'middle');
  out += `<rect x="180" y="422" width="44" height="30" rx="5" class="m-accent"/>` + T(202, 442, '↵', 13, 'm-onaccent', 600, 'middle');
  return phone(out, { label: 'Samsung-Tastatur' });
}

function permissionScreen() {
  let out = header('Wetter') + `<rect x="22" y="104" width="196" height="80" rx="16" class="m-card"/>`;
  out += `<rect x="11" y="11" width="218" height="478" rx="28" class="m-scrim"/>`;
  out += `<rect x="18" y="200" width="204" height="270" rx="22" class="m-card"/>`;
  out += `<circle cx="120" cy="226" r="11" class="m-accent"/>`;
  ['„Wetter“ Zugriff auf den', 'Standort dieses Geräts', 'erlauben?'].forEach((l, i) => out += T(120, 256 + i * 15, l, 11.5, 'm-text', 600, 'middle'));
  [['Genau', 78, true], ['Ungefähr', 162, false]].forEach(([l, x, on]) => out += `<circle cx="${x}" cy="326" r="20" class="${on ? 'm-accent-soft' : 'm-screen'}"/>` + T(x, 358, l, 9.5, 'm-text', 500, 'middle'));
  ['Während der App-Nutzung', 'Nur dieses Mal', 'Nicht zulassen'].forEach((l, i) => out += `<rect x="30" y="${372 + i * 31}" width="180" height="26" rx="13" class="m-accent-soft"/>` + T(120, 389 + i * 31, l, 10.5, 'm-text', 600, 'middle'));
  out += tap(120, 385);
  return phone(out, { label: 'Berechtigungsabfrage' });
}

function batteryScreen() {
  return listScreen({
    title: 'Akkuschutz', back: true, top: 84,
    note: 'Schützt den Akku, damit er länger hält.',
    items: [{ l: 'An', t: true }, { l: 'Standard', s: 'Bis 100 %, ab 95 % nachladen', r: false }, { l: 'Adaptiv', s: 'Nachts bei 80 % pausieren', r: true }, { l: 'Maximal', s: 'Laden bei 80 % stoppen', r: false }],
    hl: 2, label: 'Akkuschutz-Einstellungen'
  });
}

function galleryGrid() {
  let out = header('Bilder');
  const cls = ['c1', 'c2', 'c3', 'c6', 'c4', 'c7', 'c2', 'c5', 'c1', 'c3', 'c6', 'c4'];
  for (let i = 0; i < 12; i++) {
    const x = 22 + (i % 3) * 66, y = 104 + Math.floor(i / 3) * 66;
    out += i === 4 ? scene(x, y, 62, 62, true).replace(/<\/g>$/, '</g>') : `<rect x="${x}" y="${y}" width="62" height="62" rx="6" class="m-${cls[i]}" fill-opacity=".55"/>`;
  }
  out += hlRect(86, 168, 66, 66, 8) + tap(119, 201);
  out += `<rect x="22" y="440" width="196" height="30" rx="15" class="m-card"/>` + T(70, 459, 'Bilder', 10.5, 'm-accent', 700, 'middle') + T(120, 459, 'Alben', 10.5, 'm-muted', 500, 'middle') + T(170, 459, 'Stories', 10.5, 'm-muted', 500, 'middle');
  return phone(out, { label: 'Galerie mit Fotoübersicht' });
}
function photoView(mode) {
  let out = `<rect x="11" y="11" width="218" height="478" rx="28" class="m-dark"/>` + scene(11, 120, 218, 230, true);
  if (mode === 'view') {
    ['♡', '✎', '⤴', '🗑'].forEach((s, i) => out += T(44 + i * 50, 440, s === '🗑' ? '⌫' : s, 17, 'm-white', 500, 'middle'));
    out += `<circle cx="94" cy="434" r="16" class="m-hl"/>` + tap(94, 434);
    out += T(200, 60, '⋮', 16, 'm-white', 700, 'middle');
  } else if (mode === 'edit') {
    out += T(30, 64, '↶', 15, 'm-white') + `<rect x="164" y="48" width="52" height="24" rx="12" class="m-accent"/>` + T(190, 64, 'Speich.', 10, 'm-onaccent', 600, 'middle');
    out += `<circle cx="196" cy="100" r="13" class="m-scrim"/>` + T(196, 105, '✦', 13, 'm-white', 600, 'middle') + tap(196, 100);
    ['Zuschn.', 'Filter', 'Ton', 'Deko', 'Mehr'].forEach((s, i) => out += `<circle cx="${36 + i * 42}" cy="420" r="14" class="m-scrim"/>` + T(36 + i * 42, 452, s, 8.5, 'm-white', 500, 'middle'));
  } else if (mode === 'erase') {
    out += `<ellipse cx="83" cy="275" rx="26" ry="44" class="m-hl"/>` + tap(108, 250);
    out += `<rect x="30" y="400" width="180" height="40" rx="14" class="m-scrim"/>` + T(120, 418, 'Objekt einkreisen,', 10, 'm-white', 500, 'middle') + T(120, 432, 'dann „Erstellen“ tippen', 10, 'm-white', 500, 'middle');
    out += `<rect x="150" y="450" width="64" height="24" rx="12" class="m-accent"/>` + T(182, 466, 'Erstellen', 9.5, 'm-onaccent', 600, 'middle');
  } else if (mode === 'save') {
    out = `<rect x="11" y="11" width="218" height="478" rx="28" class="m-dark"/>` + scene(11, 120, 218, 230, false);
    out += `<rect x="164" y="48" width="52" height="24" rx="12" class="m-accent"/>` + T(190, 64, 'Speich.', 10, 'm-onaccent', 600, 'middle') + tap(190, 60);
    out += `<rect x="30" y="400" width="180" height="40" rx="14" class="m-scrim"/>` + T(120, 424, 'Person entfernt ✓', 11, 'm-white', 600, 'middle');
  }
  return phone(out, { dark: true, label: 'Foto in der Galerie' });
}

function storeSearch() {
  let out = `<rect x="22" y="50" width="196" height="32" rx="16" class="m-card"/>` + T(40, 71, '⌕  whatsapp|', 11, 'm-text');
  out += hlRect(20, 48, 200, 36, 18);
  ['whatsapp', 'whatsapp business', 'whatsapp web'].forEach((s, i) => out += T(40, 112 + i * 30, '⌕  ' + s, 11, 'm-text'));
  return phone(out, { label: 'Play Store Suche' });
}
function storeApp() {
  let out = T(24, 62, '‹', 20, 'm-text') + appIcon(24, 82, 'c6', 54);
  out += T(90, 102, 'WhatsApp Messenger', 12.5, 'm-text', 700) + T(90, 118, 'WhatsApp LLC', 10, 'm-accent', 600) + T(90, 132, 'Enthält Werbung', 9, 'm-muted');
  [['4,3 ★', 'Bewertung'], ['5 Mrd.+', 'Downloads'], ['USK 0', 'Alterseinst.']].forEach(([a, b], i) => out += T(52 + i * 68, 168, a, 11, 'm-text', 700, 'middle') + T(52 + i * 68, 182, b, 8.5, 'm-muted', 500, 'middle'));
  out += `<rect x="24" y="198" width="192" height="32" rx="16" class="m-accent"/>` + T(120, 218, 'Installieren', 12, 'm-onaccent', 700, 'middle') + tap(120, 214);
  out += `<rect x="24" y="244" width="58" height="110" rx="8" class="m-card"/><rect x="90" y="244" width="58" height="110" rx="8" class="m-card"/><rect x="156" y="244" width="58" height="110" rx="8" class="m-card"/>`;
  out += T(24, 380, 'Über diese App  ›', 12, 'm-text', 700) + T(24, 398, 'Einfach. Zuverlässig. Privat.', 10, 'm-muted');
  return phone(out, { label: 'App-Seite im Play Store' });
}

function transferScreen(pct) {
  let out = header('Daten werden kopiert');
  wrapText('Lassen Sie beide Telefone nah beieinander und am Ladekabel.', 38).forEach((l, i) => out += T(24, 110 + i * 15, l, 10.5, 'm-muted'));
  out += T(120, 230, pct + ' %', 34, 'm-text', 700, 'middle');
  out += `<rect x="34" y="250" width="172" height="8" rx="4" class="m-card"/><rect x="34" y="250" width="${172 * pct / 100}" height="8" rx="4" class="m-accent"/>`;
  [['Kontakte', '✓'], ['Nachrichten', '✓'], ['Bilder', '…'], ['Apps', '']].forEach(([l, s], i) => out += T(40, 296 + i * 24, l, 11, 'm-text') + T(200, 296 + i * 24, s, 11, 'm-accent', 700, 'end'));
  return phone(out, { label: 'Datenübertragung läuft' });
}

function fontScreen() {
  let out = header('Schriftgröße und -stil', true);
  out += `<rect x="22" y="84" width="196" height="120" rx="16" class="m-card"/>` + T(36, 116, 'Aa  Beispieltext', 18, 'm-text', 600) + T(36, 140, 'So sieht Text in Nachrichten,', 11, 'm-muted') + T(36, 156, 'Menüs und Apps aus.', 11, 'm-muted');
  out += `<rect x="22" y="216" width="196" height="64" rx="16" class="m-card"/>` + T(34, 236, 'Schriftgröße', 11, 'm-text', 600);
  out += `<line x1="44" x2="196" y1="260" y2="260" class="m-line" stroke-width="3"/>` + [44, 69, 95, 120, 146, 171, 196].map(x => `<circle cx="${x}" cy="260" r="2.5" class="m-muted"/>`).join('');
  out += `<line x1="44" x2="146" y1="260" y2="260" class="m-accent-stroke" stroke-width="3"/><circle cx="146" cy="260" r="8" class="m-accent"/>` + T(32, 264, 'A', 9, 'm-muted', 600, 'middle') + T(208, 266, 'A', 15, 'm-muted', 600, 'middle') + tap(146, 260);
  out += `<rect x="22" y="292" width="196" height="84" rx="16" class="m-card"/>` + T(34, 318, 'Fettschrift', 12, 'm-text', 500) + toggle(182, 314, true) + `<line x1="34" x2="208" y1="334" y2="334" class="m-line"/>` + T(34, 358, 'Schriftstil', 12, 'm-text', 500) + T(34, 371, 'Standard', 9.5, 'm-accent');
  return phone(out, { label: 'Schriftgröße einstellen' });
}

/* -------- hardware drawings -------- */
function frontDevice(hot = [], extraLabels = '', h = 400) {
  // phone front with keys at right edge; hot: ['vol+','vol-','side']
  const keyCls = k => hot.includes(k) ? 'm-key-hot' : 'm-key';
  return `<svg viewBox="0 0 230 ${h}" role="img" aria-label="Telefon von vorne mit Tasten an der rechten Seite" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="12" width="140" height="300" rx="24" class="m-frame"/>
  <rect x="36" y="18" width="128" height="288" rx="19" class="m-screen"/>
  <circle cx="100" cy="30" r="4" class="m-dark"/>
  <rect x="170" y="72" width="6" height="26" rx="2" class="${keyCls('vol+')}"/>
  <rect x="170" y="99" width="6" height="26" rx="2" class="${keyCls('vol-')}"/>
  <rect x="170" y="140" width="6" height="34" rx="2" class="${keyCls('side')}"/>
  ${T(100, 150, '', 10)}${extraLabels}</svg>`;
}
function arrowTo(x1, y1, x2, y2) {
  const ang = Math.atan2(y2 - y1, x2 - x1), a = 7;
  const p1 = [x2 - a * Math.cos(ang - .5), y2 - a * Math.sin(ang - .5)], p2 = [x2 - a * Math.cos(ang + .5), y2 - a * Math.sin(ang + .5)];
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="m-arrow"/><path d="M${x2} ${y2}L${p1[0]} ${p1[1]}L${p2[0]} ${p2[1]}z" class="m-arrow-head"/>`;
}
function sidePower() {
  return frontDevice(['side'], arrowTo(220, 157, 182, 157) + T(100, 345, 'Seitentaste', 13, 'm-label', 700, 'middle') + T(100, 364, 'ca. 3 Sekunden gedrückt halten', 11, 'm-label-muted', 500, 'middle') + T(100, 150, 'SAMSUNG', 12, 'm-muted', 700, 'middle'), 380);
}
function bottomView(o = {}) {
  // bottom edge, long horizontal
  const hot = o.hot || -1;
  const parts = [
    { x: 46, w: 26, label: 'SIM' },
    { x: 92, w: 4, label: 'Mikro' },
    { x: 110, w: 30, label: 'USB-C' },
    { x: 160, w: 40, label: 'Laut.' }
  ];
  let out = `<rect x="10" y="40" width="220" height="40" rx="20" class="m-body"/>`;
  out += `<rect x="46" y="54" width="26" height="12" rx="3" class="${hot === 0 ? 'm-key-hot' : 'm-key'}" fill-opacity=".55"/><circle cx="50" cy="60" r="2.2" class="m-dark"/>`;
  out += `<circle cx="94" cy="60" r="2" class="${hot === 1 ? 'm-key-hot' : 'm-key'}"/>`;
  out += `<rect x="110" y="53" width="30" height="14" rx="7" class="${hot === 2 ? 'm-key-hot' : 'm-key'}"/>`;
  for (let i = 0; i < 6; i++) out += `<circle cx="${164 + i * 6}" cy="60" r="1.8" class="${hot === 3 ? 'm-key-hot' : 'm-key'}"/>`;
  if (o.tool) out += `<path d="M50 60 L50 12 L44 6 L56 6 L50 12" class="m-arrow" />` + `<rect x="47" y="0" width="6" height="16" rx="2" class="m-key"/>` + arrowTo(70, 20, 54, 48) + T(76, 24, 'Werkzeug gerade ins Loch drücken', 10, 'm-label', 600);
  if (o.labels !== false) parts.forEach((p, i) => out += T(p.x + p.w / 2, 100, p.label, 10, i === hot ? 'm-label' : 'm-label-muted', 600, 'middle'));
  return `<svg viewBox="0 0 240 ${o.tool ? 110 : 110}" role="img" aria-label="Unterseite des Telefons" xmlns="http://www.w3.org/2000/svg">${out}</svg>`;
}
function simTray() {
  return `<svg viewBox="0 0 240 200" role="img" aria-label="SIM-Schlitten mit eingelegter Nano-SIM" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="60" width="200" height="70" rx="10" class="m-body"/>
  <rect x="60" y="72" width="70" height="46" rx="5" class="m-screen"/>
  <path d="M64 76 h52 l10 10 v28 h-62z" class="m-c3"/>
  <rect x="80" y="84" width="26" height="22" rx="3" class="m-sun"/>
  <line x1="93" x2="93" y1="84" y2="106" class="m-line" stroke-width="1.5"/><line x1="80" x2="106" y1="95" y2="95" class="m-line" stroke-width="1.5"/>
  ${arrowTo(150, 40, 122, 76)}
  ${T(152, 36, 'Abgeschrägte Ecke', 11, 'm-label', 700)}
  ${T(152, 50, 'zeigt nach rechts oben', 10, 'm-label-muted')}
  ${T(93, 152, 'Goldkontakte nach unten', 11, 'm-label', 700, 'middle')}
  ${T(93, 168, '(zeigen zum Telefon)', 10, 'm-label-muted', 500, 'middle')}
  ${T(196, 99, 'Fach', 10, 'm-label-muted', 600, 'middle')}</svg>`;
}

/* -------- Explorer views -------- */
const EXPLORER = {
  front: {
    svg: () => `<svg viewBox="0 0 240 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vorderseite">
      <rect x="40" y="10" width="160" height="440" rx="30" class="m-frame"/><rect x="46" y="16" width="148" height="428" rx="25" class="m-screen"/>
      <circle cx="120" cy="34" r="5" class="m-dark"/><rect x="100" y="12" width="40" height="2.5" rx="1" class="m-dark"/>
      ${fpIcon(120, 380, 'm-muted', 1)}
      <rect x="200" y="100" width="5" height="50" rx="2" class="m-key"/><rect x="200" y="165" width="5" height="34" rx="2" class="m-key"/>
      ${T(120, 200, '6,7″', 26, 'm-muted', 700, 'middle')}${T(120, 220, 'Dynamic AMOLED 2X', 10, 'm-muted', 600, 'middle')}</svg>`,
    spots: [
      { x: 120, y: 34, t: 'Frontkamera (10 MP)', w: 'Oben mittig im Display („Punch-Hole“)', d: 'Für Selfies und Videotelefonate. Sie nimmt Videos in 4K auf und erkennt Ihr Gesicht zum Entsperren. Tipp: Ab und zu sauber wischen, Fettfilm macht Selfies milchig.' },
      { x: 156, y: 13, t: 'Hörmuschel & oberer Lautsprecher', w: 'Schmaler Schlitz am oberen Rand', d: 'Hier hören Sie beim Telefonieren Ihr Gegenüber. Bei Musik und Videos arbeitet er zusammen mit dem unteren Lautsprecher als Stereo-Paar.' },
      { x: 120, y: 260, t: 'Display (6,7 Zoll)', w: 'Die gesamte Vorderseite', d: 'Ein AMOLED-Bildschirm mit 2340 × 1080 Pixeln und bis zu 120 Bildern pro Sekunde. Er ist berührungsempfindlich: Sie bedienen alles durch Tippen, Wischen und Gedrückthalten. Geschützt durch Gorilla Glass Victus+.' },
      { x: 120, y: 380, t: 'Fingerabdrucksensor', w: 'Unsichtbar unter dem Display, unteres Drittel', d: 'Wenn Sie das Telefon anheben, erscheint hier ein Fingerabdruck-Symbol. Legen Sie den registrierten Finger flach darauf, um zu entsperren.' }
    ]
  },
  back: {
    svg: () => `<svg viewBox="0 0 240 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rückseite">
      <rect x="40" y="10" width="160" height="440" rx="30" class="m-body"/>
      <circle cx="78" cy="58" r="17" class="m-lens"/><circle cx="78" cy="58" r="8" class="m-lens-glass"/>
      <circle cx="78" cy="102" r="17" class="m-lens"/><circle cx="78" cy="102" r="8" class="m-lens-glass"/>
      <circle cx="78" cy="146" r="17" class="m-lens"/><circle cx="78" cy="146" r="8" class="m-lens-glass"/>
      <circle cx="110" cy="58" r="5" class="m-sun"/>
      <circle cx="120" cy="260" r="40" class="m-accent-stroke" stroke-dasharray="4 5" stroke-width="1.5"/>
      ${T(120, 400, 'SAMSUNG', 13, 'm-label-muted', 700, 'middle')}</svg>`,
    spots: [
      { x: 98, y: 44, t: 'Ultraweitwinkel (12 MP, 0,6×)', w: 'Obere Linse', d: 'Erfasst einen sehr breiten Blickwinkel von 123°. Ideal für Landschaften, Architektur und Gruppenfotos in engen Räumen.' },
      { x: 98, y: 102, t: 'Hauptkamera (50 MP, 1×)', w: 'Mittlere Linse', d: 'Die wichtigste und lichtstärkste Kamera mit optischem Bildstabilisator. Sie liefert die besten Bilder, besonders nachts. Auch die Stufe 2× nutzt diesen Sensor.' },
      { x: 98, y: 160, t: 'Telekamera (8 MP, 3×)', w: 'Untere Linse', d: 'Dreifacher optischer Zoom ohne Qualitätsverlust. Perfekt für Porträts und entfernte Motive.' },
      { x: 124, y: 58, t: 'LED-Blitz / Taschenlampe', w: 'Rechts neben der oberen Linse', d: 'Dient als Blitz und als Taschenlampe (Schnelleinstellungen › Taschenlampe). Bei Personenfotos ist der Nachtmodus meist schöner als der Blitz.' },
      { x: 120, y: 260, t: 'Kabellose Ladespule & NFC', w: 'Mitte der Rückseite (unsichtbar)', d: 'Hier liegt das Telefon auf einem Qi-Ladepad richtig. Dieselbe Stelle halten Sie beim kontaktlosen Bezahlen an das Kartenterminal und hier lädt Wireless PowerShare andere Geräte.' }
    ]
  },
  right: {
    svg: () => `<svg viewBox="0 0 240 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rechte Seite">
      <rect x="100" y="10" width="34" height="440" rx="14" class="m-body"/>
      <rect x="134" y="110" width="8" height="70" rx="3" class="m-key"/><line x1="134" x2="142" y1="145" y2="145" class="m-line" stroke-width="2"/>
      <rect x="134" y="200" width="8" height="44" rx="3" class="m-key"/>
      ${T(117, 470 - 6, 'oben ↑', 10, 'm-label-muted', 600, 'middle')}</svg>`,
    spots: [
      { x: 170, y: 125, t: 'Lauter', w: 'Obere Hälfte der langen Taste', d: 'Erhöht die Lautstärke. In der Kamera löst die Taste ein Foto aus. Nach dem Drücken erscheint am Rand ein Regler: Tippen Sie auf die drei Punkte, um Klingelton, Medien und Benachrichtigungen getrennt einzustellen.' },
      { x: 170, y: 165, t: 'Leiser', w: 'Untere Hälfte der langen Taste', d: 'Verringert die Lautstärke. Zusammen mit der Seitentaste: Bildschirmfoto (kurz) oder Ausschaltmenü (halten).' },
      { x: 170, y: 222, t: 'Seitentaste', w: 'Kurze Taste unter der Lautstärketaste', d: 'Kurz drücken: Bildschirm an/aus. Zweimal: Kamera. Fünfmal: Notruf. Gedrückt halten: Assistent bzw. Ausschaltmenü (einstellbar). Sie ist die wichtigste Taste des Telefons.' }
    ]
  },
  bottom: {
    svg: () => bottomView({ labels: false }).replace('viewBox="0 0 240 110"', 'viewBox="0 -20 240 140"'),
    spots: [
      { x: 59, y: 30, t: 'SIM-Kartenfach', w: 'Links an der Unterseite (Fuge mit kleinem Loch)', d: 'Hier stecken Sie das Werkzeug hinein, um das Fach für die Nano-SIM-Karte herauszuholen. Die Position kann sich je nach Baureihe leicht unterscheiden: Das Fach erkennen Sie immer an der feinen Fuge rund um das Loch.' },
      { x: 94, y: 30, t: 'Mikrofon', w: 'Kleines Loch ohne Fuge', d: 'Nimmt beim Telefonieren Ihre Stimme auf. Wichtig: Hier niemals das SIM-Werkzeug hineinstecken, das beschädigt das Mikrofon.' },
      { x: 125, y: 30, t: 'USB-C-Anschluss', w: 'Mitte der Unterseite', d: 'Zum Laden, für Datenübertragung zum Computer, für kabelgebundene Kopfhörer (USB-C oder Adapter, eine 3,5-mm-Klinkenbuchse gibt es nicht) und für Samsung DeX am Monitor.' },
      { x: 180, y: 30, t: 'Unterer Lautsprecher', w: 'Rechts, Reihe kleiner Löcher', d: 'Der Hauptlautsprecher. Wenn Ton gedämpft klingt, ist oft Staub in den Löchern: Mit einer weichen, trockenen Zahnbürste vorsichtig reinigen.' }
    ]
  }
};

const CAM_SPOTS = [
  { x: 40, y: 52, t: 'Kamera-Einstellungen & Schnellfunktionen', d: 'Ganz links das Zahnrad für alle Einstellungen (Raster, Speicherort, Wasserzeichen). Daneben Blitz, Timer, Seitenverhältnis (3:4, 9:16, 1:1) und Bewegungsfoto.' },
  { x: 102, y: 174, t: 'Fokusrahmen', d: 'Tippen Sie auf das Motiv: Dort wird scharfgestellt und die Helligkeit angepasst. Gedrückt halten sperrt beides (AE/AF-Sperre), praktisch bei wechselndem Licht.' },
  { x: 120, y: 312, t: 'Zoomstufen 0,6 / 1 / 3', d: 'Wechselt zwischen den echten Objektiven. Antippen der 1× zeigt zusätzlich 2×. Mit zwei Fingern auseinanderziehen zoomt stufenlos bis 30×.' },
  { x: 120, y: 372, t: 'Modus-Leiste', d: 'Seitlich wischen wechselt zwischen Porträt, Foto, Video. Unter „Mehr“ finden Sie Nacht, Pro, Panorama, Zeitlupe, Hyperlapse und Food.' },
  { x: 120, y: 425, t: 'Auslöser', d: 'Kurz tippen: Foto. Gedrückt halten: Video, solange Sie halten. Nach oben ziehen: Video wird gesperrt und läuft weiter.' },
  { x: 49, y: 425, t: 'Letztes Foto', d: 'Zeigt eine Vorschau des letzten Bildes. Antippen öffnet es in der Galerie.' },
  { x: 191, y: 425, t: 'Kamera wechseln', d: 'Wechselt zur Frontkamera für Selfies. Alternativ: auf dem Sucher nach oben oder unten wischen.' }
];
