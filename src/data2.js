/* ================= Einstellungs-Trainer: simulated settings tree ================= */
/* Each page: title, rows. Row types: link (to page), radio (group), toggle, info. */
const SIM_TREE = {
  root: { title: 'Einstellungen', rows: [
    { t: 'link', l: 'Verbindungen', s: 'WLAN · Bluetooth · Flugmodus', c: 'c1', to: 'conn' },
    { t: 'link', l: 'Töne und Vibration', s: 'Tonmodus · Klingelton', c: 'c4', to: 'sound' },
    { t: 'link', l: 'Benachrichtigungen', s: 'Statusleiste · Nicht stören', c: 'c3', to: 'notif' },
    { t: 'link', l: 'Anzeige', s: 'Helligkeit · Dunkel · Navigation', c: 'c6', to: 'display' },
    { t: 'link', l: 'Akku', s: 'Energiesparmodus · Laden', c: 'c2', to: 'battery' },
    { t: 'link', l: 'Sperrbildschirm und AOD', s: 'Always On Display', c: 'c4', to: 'lock' },
    { t: 'link', l: 'Sicherheit und Datenschutz', s: 'Biometrie · Berechtigungen', c: 'c1', to: 'sec' },
    { t: 'link', l: 'Sicherheit und Notfall', s: 'Notruf-SOS · Medizinische Infos', c: 'c5', to: 'sos' },
    { t: 'link', l: 'Erweiterte Funktionen', s: 'Seitentaste · Bewegungen', c: 'c3', to: 'adv' },
    { t: 'link', l: 'Gerätewartung', s: 'Speicher · Wartungsmodus', c: 'c2', to: 'care' },
    { t: 'link', l: 'Barrierefreiheit', s: 'Sehhilfen · Hörhilfen', c: 'c6', to: 'a11y' },
    { t: 'link', l: 'Software-Update', s: 'Herunterladen und installieren', c: 'c7', to: 'update' }
  ] },
  conn: { title: 'Verbindungen', rows: [
    { t: 'toggle', id: 'wifi', l: 'WLAN', s: 'Zuhause-WLAN' },
    { t: 'toggle', id: 'bt', l: 'Bluetooth' },
    { t: 'toggle', id: 'nfc', l: 'NFC und kontaktlose Zahlungen' },
    { t: 'toggle', id: 'plane', l: 'Flugmodus' },
    { t: 'link', l: 'SIM-Manager', to: 'simmgr' },
    { t: 'link', l: 'Mobile Netzwerke', to: 'mobile' },
    { t: 'link', l: 'Datennutzung', to: 'data' },
    { t: 'link', l: 'Mobile Hotspot und Tethering', to: 'hotspot' }
  ] },
  simmgr: { title: 'SIM-Manager', rows: [{ t: 'info', l: 'SIM 1', s: 'Ihr Anbieter' }, { t: 'info', l: 'eSIM hinzufügen', s: 'QR-Code des Anbieters scannen' }] },
  mobile: { title: 'Mobile Netzwerke', rows: [{ t: 'toggle', id: 'roaming', l: 'Daten-Roaming', s: 'Im Ausland Daten nutzen' }, { t: 'info', l: 'Netzmodus', s: '5G/LTE/3G/2G (autom.)' }] },
  data: { title: 'Datennutzung', rows: [{ t: 'toggle', id: 'datasaver', l: 'Datensparmodus' }, { t: 'info', l: 'Mobile Datennutzung', s: '3,2 GB in diesem Monat' }] },
  hotspot: { title: 'Mobile Hotspot und Tethering', rows: [{ t: 'toggle', id: 'hotspot', l: 'Mobile Hotspot', s: 'Andere Geräte nutzen Ihre Daten' }, { t: 'info', l: 'USB-Tethering', s: 'Per Kabel teilen' }] },
  sound: { title: 'Töne und Vibration', rows: [
    { t: 'radio', g: 'soundmode', v: 'ton', l: 'Ton' }, { t: 'radio', g: 'soundmode', v: 'vib', l: 'Vibration' }, { t: 'radio', g: 'soundmode', v: 'mute', l: 'Lautlos' },
    { t: 'info', l: 'Klingelton', s: 'Over the Horizon' }, { t: 'info', l: 'Lautstärke', s: 'Klingelton, Medien, Benachrichtigungen' }
  ] },
  notif: { title: 'Benachrichtigungen', rows: [
    { t: 'info', l: 'App-Benachrichtigungen', s: 'Für jede App festlegen' },
    { t: 'toggle', id: 'dnd', l: 'Nicht stören', s: 'Töne und Pop-ups stumm' },
    { t: 'info', l: 'Benachrichtigungen auf dem Sperrbildschirm' }
  ] },
  display: { title: 'Anzeige', rows: [
    { t: 'radio', g: 'theme', v: 'light', l: 'Hell' }, { t: 'radio', g: 'theme', v: 'dark', l: 'Dunkel' },
    { t: 'info', l: 'Helligkeit', s: 'Adaptive Helligkeit an' },
    { t: 'link', l: 'Bewegungsglättung', sk: 'motion', to: 'motion' },
    { t: 'toggle', id: 'eyecomfort', l: 'Augenschonfilter' },
    { t: 'link', l: 'Schriftgröße und -stil', sk: 'font', to: 'font' },
    { t: 'link', l: 'Bildschirm-Timeout', sk: 'timeout', to: 'timeout' },
    { t: 'toggle', id: 'easy', l: 'Einfacher Modus', s: 'Größere Symbole, einfacheres Layout' },
    { t: 'link', l: 'Navigationsleiste', sk: 'nav', to: 'nav' },
    { t: 'link', l: 'Edge-Panels', to: 'edge' }
  ] },
  motion: { title: 'Bewegungsglättung', note: 'Adaptiv: bis zu 120 Hz, flüssiger. Standard: 60 Hz, spart Akku.', rows: [{ t: 'radio', g: 'motion', v: 'adaptive', l: 'Adaptiv' }, { t: 'radio', g: 'motion', v: 'standard', l: 'Standard' }] },
  font: { title: 'Schriftgröße und -stil', note: 'Vorschau: So sieht Text aus.', rows: [{ t: 'radio', g: 'font', v: 's', l: 'Klein' }, { t: 'radio', g: 'font', v: 'm', l: 'Standard' }, { t: 'radio', g: 'font', v: 'l', l: 'Groß' }, { t: 'radio', g: 'font', v: 'xl', l: 'Sehr groß' }, { t: 'toggle', id: 'bold', l: 'Fettschrift' }] },
  timeout: { title: 'Bildschirm-Timeout', rows: ['15 Sekunden', '30 Sekunden', '1 Minute', '2 Minuten', '5 Minuten', '10 Minuten'].map(v => ({ t: 'radio', g: 'timeout', v, l: v })) },
  nav: { title: 'Navigationsleiste', rows: [{ t: 'radio', g: 'nav', v: 'gestures', l: 'Wischgesten' }, { t: 'radio', g: 'nav', v: 'buttons', l: 'Tasten' }, { t: 'info', l: 'Tastenreihenfolge', s: 'Zurück links oder rechts' }] },
  edge: { title: 'Edge-Panels', rows: [{ t: 'toggle', id: 'edge', l: 'Edge-Panels', s: 'Seitenleiste mit Apps am Rand' }] },
  battery: { title: 'Akku', note: 'Akku: 76 % · ca. 1 Tag 3 Std. verbleibend', rows: [
    { t: 'toggle', id: 'powersave', l: 'Energiesparmodus' },
    { t: 'info', l: 'Hintergrundnutzungslimits', s: 'Ungenutzte Apps in Standby' },
    { t: 'link', l: 'Akkuschutz', sk: 'protect', to: 'protect' },
    { t: 'link', l: 'Ladeeinstellungen', to: 'charge' }
  ] },
  protect: { title: 'Akkuschutz', note: 'Schützt den Akku, damit er länger hält.', rows: [{ t: 'radio', g: 'protect', v: 'basic', l: 'Standard', s: 'Bis 100 %, ab 95 % nachladen' }, { t: 'radio', g: 'protect', v: 'max', l: 'Maximal', s: 'Ladegrenze 80–95 % wählbar' }] },
  charge: { title: 'Ladeeinstellungen', rows: [{ t: 'toggle', id: 'fastcharge', l: 'Schnellladen' }, { t: 'toggle', id: 'wlcharge', l: 'Schnelles kabelloses Laden' }] },
  lock: { title: 'Sperrbildschirm und AOD', rows: [{ t: 'info', l: 'Displaysperre', s: 'PIN' }, { t: 'toggle', id: 'aod', l: 'Always On Display', s: 'Uhrzeit bei aus. Bildschirm' }] },
  sec: { title: 'Sicherheit und Datenschutz', rows: [
    { t: 'link', l: 'Biometrische Daten', s: 'Gesicht, Fingerabdrücke', to: 'bio' },
    { t: 'link', l: 'Schutz bei Geräteverlust', s: 'Gerät finden · Diebstahlschutz', to: 'lost' },
    { t: 'info', l: 'Berechtigungsmanager', s: 'Wer darf Kamera, Standort, …' },
    { t: 'link', l: 'Weitere Sicherheitseinstellungen', to: 'moresec' }
  ] },
  bio: { title: 'Biometrische Daten', rows: [{ t: 'info', l: 'Gesichtserkennung', s: 'Nicht registriert' }, { t: 'action', id: 'finger', l: 'Fingerabdrücke', s: 'Tippen zum Registrieren' }] },
  lost: { title: 'Schutz bei Geräteverlust', rows: [{ t: 'link', l: 'Verlorene Geräte finden', to: 'find' }, { t: 'info', l: 'Diebstahlschutz', s: 'Diebstahlerkennung, Identitätsprüfung' }] },
  find: { title: 'Verlorene Geräte finden', rows: [{ t: 'toggle', id: 'findmy', l: 'Verlorene Geräte finden' }, { t: 'toggle', id: 'offline', l: 'Offline-Suche' }, { t: 'toggle', id: 'lastloc', l: 'Letzten Standort senden' }] },
  moresec: { title: 'Weitere Sicherheitseinstellungen', rows: [{ t: 'info', l: 'Sicherer Ordner', s: 'Privater, verschlüsselter Bereich' }, { t: 'info', l: 'Geräteadministratoren' }] },
  sos: { title: 'Sicherheit und Notfall', rows: [
    { t: 'info', l: 'Medizinische Informationen', s: 'Blutgruppe, Allergien' },
    { t: 'info', l: 'Notfallkontakte' },
    { t: 'link', l: 'Notruf-SOS', to: 'sos2' }
  ] },
  sos2: { title: 'Notruf-SOS', note: 'Seitentaste 5-mal schnell drücken.', rows: [{ t: 'toggle', id: 'sosOn', l: 'Notruf-SOS' }, { t: 'toggle', id: 'sosSound', l: 'Countdown-Ton abspielen' }, { t: 'info', l: 'Notrufnummer', s: '112' }] },
  adv: { title: 'Erweiterte Funktionen', rows: [
    { t: 'link', l: 'Seitentaste', sk: 'side', to: 'side' },
    { t: 'info', l: 'Bewegungen und Gesten', s: 'Anheben zum Aktivieren' },
    { t: 'info', l: 'Bildschirmfoto-Einstellungen' }
  ] },
  side: { title: 'Seitentaste', rows: [
    { t: 'toggle', id: 'doublepress', l: 'Zweimal drücken', s: 'Kamera schnell starten' },
    { t: 'head', l: 'Gedrückt halten' },
    { t: 'radio', g: 'sidehold', v: 'gemini', l: 'Gemini' }, { t: 'radio', g: 'sidehold', v: 'bixby', l: 'Bixby' }, { t: 'radio', g: 'sidehold', v: 'power', l: 'Ausschaltmenü' }
  ] },
  care: { title: 'Gerätewartung', rows: [{ t: 'info', l: 'Speicher', s: '74 GB von 128 GB belegt' }, { t: 'info', l: 'Arbeitsspeicher' }, { t: 'link', l: 'Wartungsmodus', to: 'maint' }] },
  maint: { title: 'Wartungsmodus', note: 'Schützt Ihre Daten, wenn das Telefon repariert wird.', rows: [{ t: 'action', id: 'maint', l: 'Einschalten', s: 'Telefon startet neu' }] },
  a11y: { title: 'Barrierefreiheit', rows: [{ t: 'info', l: 'Sehhilfen', s: 'Vergrößerung, Kontrast' }, { t: 'info', l: 'Hörhilfen', s: 'Live-Untertitel, Hörgeräte' }, { t: 'toggle', id: 'magnify', l: 'Vergrößerung (Kurzbefehl)' }] },
  update: { title: 'Software-Update', rows: [{ t: 'action', id: 'update', l: 'Herunterladen und installieren', s: 'Zuletzt geprüft: heute' }, { t: 'toggle', id: 'autoupd', l: 'Autom. über WLAN herunterladen' }] }
};
const SIM_DEFAULTS = { wifi: true, bt: false, nfc: true, plane: false, roaming: false, datasaver: false, hotspot: false, soundmode: 'ton', dnd: false, theme: 'light', motion: 'adaptive', eyecomfort: false, font: 'm', bold: false, timeout: '30 Sekunden', easy: false, nav: 'gestures', edge: true, powersave: false, protect: 'basic', fastcharge: true, wlcharge: true, aod: false, findmy: false, offline: false, lastloc: false, sosOn: false, sosSound: true, doublepress: true, sidehold: 'gemini', magnify: false, autoupd: true };
const SIM_TASKS = [
  { q: 'Schalten Sie den Dunkelmodus ein.', key: 'theme', val: 'dark', path: ['Anzeige', 'Dunkel'], why: 'Dunkle Flächen schonen abends die Augen. Beim AMOLED-Display sind schwarze Pixel komplett aus und sparen Strom.' },
  { q: 'Stellen Sie die Navigation auf drei Tasten um (statt Wischgesten).', key: 'nav', val: 'buttons', path: ['Anzeige', 'Navigationsleiste', 'Tasten'], why: 'Tasten sind für Einsteiger oft leichter: Sie sehen jederzeit, wo „Zurück“ und „Startbildschirm“ sind.' },
  { q: 'Stellen Sie die Schrift auf „Groß“.', key: 'font', val: 'l', path: ['Anzeige', 'Schriftgröße und -stil', 'Groß'], why: 'Größere Schrift wirkt in allen Menüs und in vielen Apps.' },
  { q: 'Schonen Sie den Akku: Akkuschutz auf „Maximal“.', key: 'protect', val: 'max', path: ['Akku', 'Akkuschutz', 'Maximal'], why: 'Mit einer Ladegrenze (z. B. 80 %) altert der Akku deutlich langsamer.' },
  { q: 'Langes Drücken der Seitentaste soll das Ausschaltmenü öffnen.', key: 'sidehold', val: 'power', path: ['Erweiterte Funktionen', 'Seitentaste', 'Ausschaltmenü'], why: 'Dann schalten Sie das Telefon wie gewohnt per langem Tastendruck aus, statt den Assistenten zu starten.' },
  { q: 'Schalten Sie Notruf-SOS ein.', key: 'sosOn', val: true, path: ['Sicherheit und Notfall', 'Notruf-SOS', 'Schalter „Notruf-SOS“'], why: 'Im Notfall reicht dann 5-maliges Drücken der Seitentaste, um die 112 zu rufen.' },
  { q: 'Aktivieren Sie „Verlorene Geräte finden“.', key: 'findmy', val: true, path: ['Sicherheit und Datenschutz', 'Schutz bei Geräteverlust', 'Verlorene Geräte finden', 'Schalter'], why: 'Nur wenn das vorher an ist, können Sie ein verlorenes Telefon orten, klingeln lassen oder sperren.' },
  { q: 'Schalten Sie das Telefon auf lautlos.', key: 'soundmode', val: 'mute', path: ['Töne und Vibration', 'Lautlos'], why: 'Schneller geht es über die Schnelleinstellungen (Kachel „Ton“) oder den Lautstärkeregler.' },
  { q: 'Sparen Sie Akku: Bewegungsglättung auf „Standard“.', key: 'motion', val: 'standard', path: ['Anzeige', 'Bewegungsglättung', 'Standard'], why: 'Standard = 60 Bilder pro Sekunde. Das Scrollen wirkt etwas weniger flüssig, verbraucht aber weniger Strom.' },
  { q: 'Schalten Sie den mobilen Hotspot ein, damit Ihr Laptop ins Internet kommt.', key: 'hotspot', val: true, path: ['Verbindungen', 'Mobile Hotspot und Tethering', 'Mobile Hotspot'], why: 'Der Laptop verbindet sich dann mit dem WLAN-Namen, der unter „Mobile Hotspot“ angezeigt wird. Die Daten gehen von Ihrem Tarif ab.' },
  { q: 'Bildschirm soll sich erst nach 1 Minute ausschalten.', key: 'timeout', val: '1 Minute', path: ['Anzeige', 'Bildschirm-Timeout', '1 Minute'], why: 'Kürzere Zeiten sparen Akku, längere sind bequemer beim Lesen.' },
  { q: 'Schalten Sie den Einfachen Modus ein.', key: 'easy', val: true, path: ['Anzeige', 'Einfacher Modus'], why: 'Größere Symbole, größere Schrift und ein aufgeräumter Startbildschirm. Ideal für Smartphone-Neulinge.' }
];

/* ================= Tasten-Trainer tasks ================= */
const KEY_TASKS = [
  { id: 'screen', q: 'Schalten Sie den Bildschirm ein (Seitentaste kurz drücken).' },
  { id: 'volup', q: 'Stellen Sie lauter (Lauter-Taste).' },
  { id: 'shot', q: 'Machen Sie ein Bildschirmfoto: Seitentaste und Leiser gleichzeitig kurz drücken.' },
  { id: 'camera', q: 'Starten Sie die Kamera: Seitentaste zweimal schnell drücken.' },
  { id: 'power', q: 'Öffnen Sie das Ausschaltmenü: Seitentaste und Leiser gemeinsam etwa 2 Sekunden halten.' },
  { id: 'force', q: 'Erzwungener Neustart: Seitentaste und Leiser 7 Sekunden halten.' }
];

/* ================= Gesten-Trainer tasks ================= */
const GESTURE_TASKS = [
  { id: 'home', q: 'Gehen Sie zum Startbildschirm: vom unteren Rand nach oben wischen.' },
  { id: 'notif', q: 'Öffnen Sie die Benachrichtigungen: von der linken oberen Hälfte nach unten wischen.' },
  { id: 'quick', q: 'Öffnen Sie die Schnelleinstellungen: von der rechten oberen Hälfte nach unten wischen.' },
  { id: 'back', q: 'Gehen Sie zurück: vom linken oder rechten Rand zur Mitte wischen.' },
  { id: 'recent', q: 'Zuletzt verwendete Apps: vom unteren Rand nach oben wischen und kurz halten.' },
  { id: 'circle', q: 'Circle to Search: den Strich unten etwa 1 Sekunde gedrückt halten.' }
];

/* ================= Kamera-Berater ================= */
const CAM_ADVICE = {
  person: { t: 'Porträt einer Person', lens: '3× Tele (oder 2×)', mode: 'Porträt', steps: ['Modus <b>Porträt</b> wählen und auf <b>3×</b> tippen.', '1,5 bis 2 m Abstand halten, bis die Kamera meldet, dass der Porträteffekt bereit ist.', 'Auf das Gesicht tippen. Licht von vorne oder seitlich, nicht von hinten.', 'Hintergrundunschärfe nachträglich in der Galerie ändern: Foto öffnen › „Porträteffekt ändern“.'], why: 'Das Tele verzerrt Gesichter nicht, weil Sie weiter weg stehen. Die Kamera trennt per Tiefenschätzung Person und Hintergrund.' },
  group: { t: 'Gruppenfoto', lens: '1× oder 0,6×', mode: 'Foto', steps: ['Mit <b>1×</b> beginnen, passt nicht alles drauf, auf <b>0,6×</b> wechseln.', 'Personen nicht an den Bildrand stellen (dort verzerrt das Ultraweitwinkel).', 'Selbstauslöser über das Timer-Symbol (3 oder 10 Sekunden), damit Sie mit aufs Bild können.', 'Mehrere Fotos machen, damit niemand die Augen zu hat.'], why: 'Das Ultraweitwinkel erfasst viel, krümmt aber Linien und Gesichter am Rand.' },
  landscape: { t: 'Landschaft', lens: '0,6× oder 1×', mode: 'Foto / Panorama', steps: ['Horizont gerade halten: Gitterlinien einschalten (Kamera-Einstellungen).', 'Horizont auf das obere oder untere Drittel legen, nicht in die Mitte.', 'Für sehr breite Ansichten: <b>Mehr › Panorama</b>, langsam schwenken.', 'Auf den Himmel tippen, wenn er zu hell ist: das Bild wird dunkler und der Himmel bekommt Farbe.'], why: 'Wohin Sie tippen, danach richtet die Kamera die Belichtung aus.' },
  night: { t: 'Nacht / wenig Licht', lens: '1× (Hauptkamera)', mode: 'Nacht (oder Foto mit Mond-Symbol)', steps: ['<b>1×</b> verwenden: die Hauptkamera hat die größte Öffnung (f/1.8) und OIS.', 'Telefon mit beiden Händen halten oder anlehnen.', 'Nach dem Auslösen 1 bis 3 Sekunden stillhalten, bis die Aufnahme fertig ist.', 'Blitz nur für nahe Personen; der Nachtmodus wirkt natürlicher.'], why: 'Der Nachtmodus kombiniert mehrere Belichtungen zu einem helleren, rauschärmeren Bild. Dafür muss das Telefon kurz ruhig bleiben.' },
  food: { t: 'Essen', lens: '1×', mode: 'Mehr › Food', steps: ['Modus <b>Food</b> wählen.', 'Von schräg oben (ca. 45°) oder direkt von oben fotografieren.', 'Tageslicht vom Fenster nutzen, keinen Blitz.', 'Den Schärfekreis auf den wichtigsten Teil legen.'], why: 'Food verstärkt Farben und legt eine weiche Unschärfe um den gewählten Bereich.' },
  action: { t: 'Bewegung, Kinder, Haustiere', lens: '1×', mode: 'Foto (Auslöser halten)', steps: ['Bei viel Licht fotografieren, dann sind die Belichtungszeiten kurz.', 'Den Auslöser <b>zum Bildrand ziehen</b> und halten: Serienaufnahme. (Was das Ziehen auslöst, stellen Sie in den Kamera-Einstellungen unter „Auslöser zum Rand ziehen“ ein.)', 'Alternativ im Video filmen und später ein Einzelbild in der Galerie speichern.', 'Für Zeitlupen: <b>Mehr › Zeitlupe</b>.'], why: 'Bei schneller Bewegung und wenig Licht wird es unscharf, weil die Belichtungszeit zu lang ist. Siehe Belichtungs-Simulator unten.' },
  far: { t: 'Weit entfernt', lens: '3× Tele, max. ca. 10×', mode: 'Foto', steps: ['Auf <b>3×</b> tippen; das ist optischer Zoom ohne Qualitätsverlust.', 'Mehr als etwa 10× nur zur Not, das Bild wird weich.', 'Telefon abstützen, beim Zoomen verwackelt alles stärker.', 'Lieber näher herangehen, wenn möglich.'], why: 'Über 3× hinaus wird digital vergrößert. Software schärft nach, echte Details kommen aber nicht dazu.' },
  doc: { t: 'Dokument / Text', lens: '1×', mode: 'Foto (Dokumentenscan)', steps: ['Dokument auf einen dunklen, ruhigen Untergrund legen.', 'Kamera gerade darüber halten. Erkennt sie ein Dokument, erscheint der Knopf <b>„Scannen“</b>.', 'Antippen: Die Kamera schneidet zu und entzerrt. Ecken bei Bedarf verschieben, dann speichern.', 'Text aus dem Foto kopieren: In der Galerie auf das „T“-Symbol tippen.'], why: 'Dafür muss in den Kamera-Einstellungen der Szenenoptimierer (bzw. „Dokumente scannen“) eingeschaltet sein.' }
};

/* ================= Chapter mini quizzes (3 per chapter) ================= */
const MINI_QUIZ = {
  geraet: [
    { q: 'Was ist bei einem neuen S24 FE NICHT in der Schachtel?', o: ['USB-C-Kabel', 'SIM-Werkzeug', 'Netzteil'], a: 2, e: 'Ein Netzteil liegt nicht bei. Für 25 W Schnellladen brauchen Sie ein USB-C-Netzteil mit PD/PPS.' },
    { q: 'Wo sitzt das SIM-Kartenfach?', o: ['Unterseite neben USB-C', 'Linke Seite oben', 'Unter dem Akkudeckel'], a: 1, e: 'Links oben. Der Akku ist fest verbaut, es gibt keinen Deckel.' },
    { q: 'Kann man eine microSD-Karte einsetzen?', o: ['Ja, im SIM-Fach', 'Nein', 'Nur beim 512-GB-Modell'], a: 1, e: 'Das S24 FE hat keinen Speicherkarten-Steckplatz.' }
  ],
  einrichtung: [
    { q: 'Wofür brauchen Sie unbedingt ein Google-Konto?', o: ['Zum Telefonieren', 'Für Apps aus dem Play Store', 'Für WLAN'], a: 1, e: 'Ohne Google-Konto keine Apps aus dem Play Store.' },
    { q: 'Was passiert nach dreimal falscher SIM-PIN?', o: ['Nichts', 'Die SIM wird gesperrt, Sie brauchen die PUK', 'Das Telefon wird gelöscht'], a: 1, e: 'Die PUK steht im Brief Ihres Anbieters. Gut aufbewahren!' },
    { q: 'Womit übertragen Sie Daten vom alten Handy?', o: ['Smart Switch', 'Quick Share', 'DeX'], a: 0, e: 'Smart Switch überträgt Kontakte, Fotos, Nachrichten, Apps und Einstellungen.' }
  ],
  bedienung: [
    { q: 'Wie öffnen Sie in One UI 7 die Schnelleinstellungen?', o: ['Von oben rechts nach unten wischen', 'Von unten nach oben wischen', 'Seitentaste zweimal'], a: 0, e: 'Oben rechts = Schnelleinstellungen, oben links = Benachrichtigungen (Standard „Getrennt“).' },
    { q: 'Sie halten die WLAN-Kachel gedrückt. Was passiert?', o: ['WLAN geht aus', 'Die Liste der WLAN-Netze öffnet sich', 'Das Telefon startet neu'], a: 1, e: 'Kurz tippen schaltet an/aus, gedrückt halten öffnet die Einstellung dahinter.' },
    { q: 'Wie bekommen Sie ein „ä“ auf der Tastatur?', o: ['„a“ gedrückt halten', 'Zweimal „a“', 'Über !#1'], a: 0, e: 'Buchstaben gedrückt halten zeigt Umlaute und Sonderzeichen.' }
  ],
  telefon: [
    { q: 'Es klingelt im Kino. Wie stoppen Sie das Klingeln am schnellsten, ohne aufzulegen?', o: ['Eine Lautstärketaste drücken', 'Telefon ausschalten', 'Flugmodus'], a: 0, e: 'Eine Lautstärketaste stummt den Klingelton. Der Anruf läuft weiter, bis er auf die Mailbox geht.' },
    { q: 'Wo sollten neue Kontakte gespeichert werden?', o: ['Auf der SIM-Karte', 'Im Google-Konto', 'Nur auf dem Telefon'], a: 1, e: 'Im Google-Konto sind sie automatisch gesichert und auf dem nächsten Telefon sofort da.' },
    { q: 'Funktioniert der Notruf 112 in Deutschland ohne SIM-Karte?', o: ['Ja, immer', 'Nein', 'Nur mit WLAN'], a: 1, e: 'In Deutschland sind Notrufe ohne SIM-Karte nicht möglich. Mit SIM klappt 112 auch vom Sperrbildschirm.' }
  ],
  sicherheit: [
    { q: 'Welche Displaysperre ist die beste Empfehlung für die meisten?', o: ['Streichen', '6-stellige PIN plus Fingerabdruck', 'Muster'], a: 1, e: 'PIN als sicherer Schlüssel, Fingerabdruck für die Bequemlichkeit.' },
    { q: 'Wann verlangt das Telefon trotz Fingerabdruck die PIN?', o: ['Nie', 'Nach jedem Neustart', 'Nur nachts'], a: 1, e: 'Nach einem Neustart und spätestens alle 72 Stunden ist die PIN nötig.' },
    { q: 'Was muss vorher eingeschaltet sein, damit Sie ein verlorenes Telefon orten können?', o: ['Bluetooth', '„Verlorene Geräte finden“', 'Energiesparmodus'], a: 1, e: 'Und ein Samsung-Konto. Ideal mit „Offline-Suche“.' }
  ],
  kamera: [
    { q: 'Welche Kamera ist nachts am besten?', o: ['0,6×', '1× Hauptkamera', '10× Zoom'], a: 1, e: 'Größte Blendenöffnung (f/1.8), größter Sensor und Bildstabilisator.' },
    { q: 'Ein höherer ISO-Wert macht das Bild …', o: ['heller, aber körniger', 'dunkler und schärfer', 'nur farbiger'], a: 0, e: 'ISO verstärkt das Signal: heller, aber mit mehr Bildrauschen.' },
    { q: 'Wie lange bleiben gelöschte Fotos im Papierkorb?', o: ['24 Stunden', '30 Tage', 'Für immer'], a: 1, e: 'Galerie › Menü › Papierkorb.' }
  ],
  ai: [
    { q: 'Wie starten Sie Circle to Search?', o: ['Home-Taste / Strich unten gedrückt halten', 'Seitentaste 3×', 'Telefon schütteln'], a: 0, e: 'Danach das Gesuchte einkreisen, markieren oder antippen.' },
    { q: 'Was bewirkt „Daten nur auf dem Gerät verarbeiten“?', o: ['KI-Funktionen, die Server brauchen, werden abgeschaltet', 'Alles geht schneller', 'Das WLAN wird abgeschaltet'], a: 0, e: 'Lokale Funktionen wie Übersetzen mit Sprachpaket laufen weiter.' },
    { q: 'Woran erkennt man ein KI-bearbeitetes Foto?', o: ['Gar nicht', 'Wasserzeichen-Symbol und Hinweis in den Details', 'Es ist schwarz-weiß'], a: 1, e: 'Generativ bearbeitete Fotos werden gekennzeichnet.' }
  ],
  akku: [
    { q: 'Welcher Ladebereich ist am schonendsten für den Akku?', o: ['0–100 %', 'etwa 20–80 %', 'Immer leer laufen lassen'], a: 1, e: 'Volle 100 % über lange Zeit und Tiefentladung lassen den Akku schneller altern.' },
    { q: 'Was ist der größte Feind des Akkus?', o: ['Hitze', 'Kälte im Kühlschrank', 'WLAN'], a: 0, e: 'Hohe Temperaturen beim Laden altern den Akku am stärksten.' },
    { q: 'Spart das Wegwischen aller Hintergrund-Apps Strom?', o: ['Ja, viel', 'Meistens nicht', 'Nur nachts'], a: 1, e: 'Neustarts von Apps kosten oft mehr Energie als das Weiterlaufen im Ruhezustand.' }
  ],
  anpassen: [
    { q: 'Was macht der Einfache Modus?', o: ['Größere Symbole und Schrift, einfacheres Layout', 'Schaltet Apps ab', 'Spart nur Akku'], a: 0, e: 'Einstellungen › Anzeige › Einfacher Modus.' },
    { q: 'Eine Routine funktioniert nach dem Prinzip …', o: ['Wenn …, dann …', 'Immer alles', 'Nur per Sprache'], a: 0, e: 'Beispiel: Wenn 22:30 Uhr, dann Nicht stören an.' },
    { q: 'Was reduziert der Augenschonfilter?', o: ['Blaues Licht', 'Die Lautstärke', 'Den Datenverbrauch'], a: 0, e: 'Das Bild wird wärmer (gelblicher), angenehmer am Abend.' }
  ],
  verbindungen: [
    { q: 'Welches WLAN-Band reicht am weitesten durch Wände?', o: ['2,4 GHz', '5 GHz', '6 GHz'], a: 0, e: '2,4 GHz reicht weiter, ist aber langsamer.' },
    { q: 'Was sollten Sie außerhalb der EU ausschalten, um hohe Kosten zu vermeiden?', o: ['Bluetooth', 'Daten-Roaming', 'NFC'], a: 1, e: 'Verbindungen › Mobile Netzwerke › Daten-Roaming.' },
    { q: 'Wofür braucht man NFC?', o: ['Kontaktlos bezahlen', 'Fotos drucken', 'Lauter telefonieren'], a: 0, e: 'NFC funkt über wenige Zentimeter, z. B. zum Kartenterminal.' }
  ],
  apps: [
    { q: 'Eine Taschenlampen-App möchte Ihre Kontakte. Was tun?', o: ['Zulassen', 'Nicht zulassen, App am besten löschen', 'Neustarten'], a: 1, e: 'Berechtigungen müssen zur Funktion der App passen.' },
    { q: 'Ab welcher Speicherbelegung wird das Telefon oft spürbar langsamer?', o: ['ab ca. 30 %', 'ab ca. 90 %', 'nie'], a: 1, e: 'Halten Sie 10–15 % frei.' },
    { q: 'Wird WhatsApp automatisch mit der Telefon-Sicherung gesichert?', o: ['Ja', 'Nein, separat in WhatsApp einrichten', 'Nur Fotos'], a: 1, e: 'WhatsApp › Einstellungen › Chats › Chat-Backup.' }
  ],
  hilfe: [
    { q: 'Welcher Schritt löscht KEINE Daten?', o: ['Erzwungener Neustart', 'Werkseinstellungen', 'Beides löscht'], a: 0, e: 'Neustart = nur aus- und einschalten.' },
    { q: 'Wofür ist der abgesicherte Modus?', o: ['Herausfinden, ob eine installierte App das Problem verursacht', 'Akku sparen', 'Daten sichern'], a: 0, e: 'Dort laufen nur vorinstallierte Apps.' },
    { q: 'Was tun Sie vor einer Reparatur?', o: ['Nichts', 'Sichern und Wartungsmodus einschalten', 'SIM wegwerfen'], a: 1, e: 'Der Wartungsmodus versteckt Ihre Daten vor dem Techniker.' }
  ]
};

/* ================= First-week checklist ================= */
const CHECKLIST = [
  ['Software-Update installiert', 'einrichtung'],
  ['6-stellige PIN und zwei Fingerabdrücke eingerichtet', 'fingerabdruck'],
  ['„Verlorene Geräte finden“ und Offline-Suche eingeschaltet', 'finden'],
  ['Notruf-SOS eingeschaltet und Notfallkontakte hinterlegt', 'sos'],
  ['Akkuschutz eingestellt', 'akkuschutz'],
  ['Google-Sicherung und Foto-Sicherung eingeschaltet', 'backup'],
  ['WhatsApp-Chat-Backup eingerichtet', 'backup'],
  ['Schriftgröße und Navigation nach Wunsch angepasst', 'anzeige'],
  ['Seriennummer/IMEI notiert (Einstellungen › Telefoninfo)', 'specs'],
  ['Google- und Samsung-Passwort auf Papier notiert', 'konten'],
  ['Schutzhülle / Displayschutz angebracht', 'pflege']
];

/* ================= Charging & storage calculators ================= */
// minutes for segments 0-50, 50-80, 80-100 (Richtwerte)
const CHARGERS = {
  w25: { l: '25-W-Netzteil (USB-C, PD/PPS)', seg: [30, 17, 21] },
  w15: { l: 'Kabelloses Ladepad (15 W)', seg: [50, 30, 32] },
  w10: { l: 'Altes Netzteil (USB-A, ca. 10 W)', seg: [70, 45, 37] },
  pc: { l: 'USB-Anschluss am Computer', seg: [150, 95, 80] }
};
// MB per photo / per minute video (Richtwerte)
const MEDIA = {
  photo12: { l: 'Fotos (12 MP, Standard)', unit: 'Fotos', mb: 3.5 },
  photo50: { l: 'Fotos (50 MP)', unit: 'Fotos', mb: 13 },
  fhd30: { l: 'Video Full HD (30 Bilder/s)', unit: 'Minuten', mb: 130 },
  uhd30: { l: 'Video 4K (30 Bilder/s)', unit: 'Minuten', mb: 350 },
  uhd60: { l: 'Video 4K (60 Bilder/s)', unit: 'Minuten', mb: 530 },
  k8: { l: 'Video 8K (30 Bilder/s)', unit: 'Minuten', mb: 600 }
};

/* ================= Extra stepper: Kontakt anlegen ================= */
const withPlus = svg => svg.replace(/<\/svg>$/, T(204, 66, '+', 24, 'm-accent', 500, 'middle') + tap(204, 58) + '</svg>');
STEPPERS.contact = {
  title: 'Kontakt anlegen', icon: 'user', steps: [
    { m: () => withPlus(listScreen({ title: 'Kontakte', search: true, items: [{ l: 'Anna Beispiel', c: 'c3' }, { l: 'Bernd Muster', c: 'c1' }, { l: 'Hausarzt Dr. Weber', c: 'c6' }, { l: 'Mama', c: 'c5' }], top: 96 })), h: 'Kontakte öffnen und „+“ tippen', p: 'Öffnen Sie die App <b>Telefon</b> und tippen Sie unten auf <b>Kontakte</b> (oder öffnen Sie direkt die App <b>Kontakte</b>). Oben rechts tippen Sie auf <b>+</b>.', why: 'Telefon-App und Kontakte-App greifen auf dieselbe Kontaktliste zu. Es ist egal, welche Sie nehmen.' },
    { m: () => formScreen({ title: 'Kontakt speichern in', lines: ['Wählen Sie, wo der neue Kontakt gespeichert wird.'], checks: [{ l: 'Google (ihr.name@gmail.com)', on: true }, { l: 'Samsung Account', on: false }, { l: 'Telefon', on: false }, { l: 'SIM', on: false }], hlCheck: 0 }), h: 'Speicherort: Google-Konto', p: 'Beim ersten Kontakt fragt das Telefon nach dem Speicherort. Wählen Sie Ihr <b>Google-Konto</b>.', why: 'Kontakte im Google-Konto werden automatisch gesichert. Auf einem neuen Telefon sind sie nach der Anmeldung sofort da. Kontakte nur „auf dem Telefon“ oder auf der SIM gehen bei Verlust leicht verloren.' },
    { m: () => formScreen({ title: 'Neuer Kontakt', inputs: ['Vorname: Anna', 'Nachname: Beispiel', '+49 151 2345678'], hlInput: 2, buttons: [{ t: 'Abbrechen' }, { t: 'Speichern', primary: true }] }), h: 'Name und Nummer eintragen', p: 'Tragen Sie Vor- und Nachname ein und die Telefonnummer, am besten mit <b>+49</b> statt der ersten 0. Unter „Mehr anzeigen“ gibt es Felder für E-Mail, Adresse, Geburtstag und Notizen. Dann <b>Speichern</b>.', why: 'Ein eingetragener Geburtstag erscheint automatisch im Kalender, wenn das Google-Konto synchronisiert.' },
    { m: () => listScreen({ title: 'Anna Beispiel', back: true, note: '+49 151 2345678 · Mobil', items: [{ l: 'Anrufen', c: 'c6' }, { l: 'Nachricht', c: 'c1' }, { l: 'Videoanruf', c: 'c2' }, { l: 'Zu Favoriten hinzufügen ☆', c: 'c3' }], hl: 3, top: 84 }), h: 'Wichtige Personen als Favorit', p: 'Im gespeicherten Kontakt tippen Sie auf den <b>Stern</b> (Favorit). Favoriten stehen in der Kontaktliste ganz oben und können bei „Nicht stören“ trotzdem anrufen.', why: 'Sie können einen Kontakt auch als Widget auf den Startbildschirm legen: dann reicht ein Tipp zum Anrufen. Gut für ältere Menschen.' }
  ]
};
