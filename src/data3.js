/* ================= Datenblatt ================= */
/* [Kategorie, [[Merkmal, Wert, Erklärung?], ...]] */
const DATASHEET = [
  ['Allgemein', [
    ['Gerät', 'Samsung Galaxy S24 FE (Fan Edition)'],
    ['Modellnummer', 'SM-S721B/DS (Europa, Dual-SIM)', 'Steht unter Einstellungen › Telefoninfo. „B“ = internationale/europäische Version, „U“ = USA.'],
    ['Vorgestellt', '26. September 2024'],
    ['Marktstart Deutschland', '4. Oktober 2024'],
    ['Preis zum Start (UVP)', '749 € (128 GB) · 809 € (256 GB)', 'Eine 512-GB-Version wurde in Deutschland offiziell nicht angeboten.'],
    ['Farben (Deutschland)', 'Blau, Graphit, Mint, Gelb', 'In anderen Ländern zusätzlich Grau.'],
    ['Enterprise Edition', 'Ja (für Firmen, mit Knox-Suite-Lizenz und längerem Support)']
  ]],
  ['Gehäuse & Design', [
    ['Abmessungen', '162,0 × 77,3 × 8,0 mm'],
    ['Gewicht', '213 g'],
    ['Rahmen', 'Aluminium'],
    ['Glas', 'Corning Gorilla Glass Victus+', 'Sehr kratzfest, aber nicht bruchsicher. Stürze auf Ecken sind die häufigste Schadensursache.'],
    ['Schutzklasse', 'IP68: staubdicht, bis 1,5 m Süßwasser für 30 Minuten', 'Laborwert mit neuem Gerät. Kein Schutz gegen Salz-, Chlor- oder heißes Wasser; Wasserschäden sind nicht von der Garantie gedeckt.'],
    ['Tasten', 'Rechts: Lautstärkewippe und Seitentaste'],
    ['SIM-Fach', 'Linke Seite, oben']
  ]],
  ['Display', [
    ['Typ', 'Dynamic AMOLED 2X, Infinity-O (Kameraloch)'],
    ['Größe', '6,7 Zoll (ca. 17,0 cm Diagonale)'],
    ['Auflösung', '2340 × 1080 Pixel (FHD+), Format 19,5:9'],
    ['Pixeldichte', 'ca. 385 ppi', 'Pixel pro Zoll. Ab etwa 300 ppi sind einzelne Pixel mit bloßem Auge nicht mehr erkennbar.'],
    ['Bildwiederholrate', '60 oder 120 Hz (adaptiv), kein LTPO', 'Das Display schaltet zwischen 60 und 120 Hz um. Sehr niedrige Raten wie 1 Hz (LTPO, spart beim Lesen Strom) beherrscht es nicht.'],
    ['Spitzenhelligkeit', '1.900 Nits'],
    ['HDR', 'HDR10+'],
    ['Extras', 'Vision Booster (bessere Lesbarkeit in der Sonne), Always On Display, Augenschonfilter']
  ]],
  ['Prozessor & Leistung', [
    ['Chip', 'Samsung Exynos 2400e, 4-nm-Fertigung'],
    ['CPU', '10 Kerne: 1 × 3,1 GHz (Cortex-X4) · 2 × 2,9 GHz + 3 × 2,6 GHz (Cortex-A720) · 4 × 1,95 GHz (Cortex-A520)', 'Große Kerne für kurze, anspruchsvolle Aufgaben, kleine Kerne für sparsamen Hintergrundbetrieb.'],
    ['Grafik', 'Samsung Xclipse 940 (AMD-RDNA-3-Architektur, Raytracing)'],
    ['Arbeitsspeicher', '8 GB RAM'],
    ['KI-Beschleuniger', 'NPU im Exynos 2400e', 'Rechnet Galaxy-AI-Funktionen wie Übersetzung direkt auf dem Gerät.']
  ]],
  ['Speicher', [
    ['Interner Speicher', '128 GB oder 256 GB (Deutschland); 512 GB in anderen Märkten'],
    ['Speichertyp', 'laut Datenblättern UFS 3.1 (128 GB) bzw. UFS 4.0 (ab 256 GB)', 'UFS 4.0 ist schneller beim Kopieren großer Dateien; im Alltag ist der Unterschied gering.'],
    ['Frei nach Auslieferung', 'ca. 20 GB belegt das System', 'Richtwert; schwankt mit Software-Updates.'],
    ['Speicherkarte', 'Nein (kein microSD-Steckplatz)']
  ]],
  ['Hauptkameras (Rückseite)', [
    ['Weitwinkel (Hauptkamera)', '50 MP, f/1.8, 24 mm, Sensor 1/1,57″, 1,0 µm, Dual-Pixel-Autofokus, OIS', 'Speichert standardmäßig 12-MP-Fotos (je 4 Pixel zusammengefasst). 2× ist ein verlustarmer Ausschnitt dieses Sensors.'],
    ['Ultraweitwinkel', '12 MP, f/2.2, 13 mm, Sensor ca. 1/3″'],
    ['Tele', '8 MP, f/2.4, 75 mm, 3× optischer Zoom, OIS, Sensor 1/4,4″'],
    ['Zoom', '0,6× · 1× · 2× · 3× optisch; digital bis 30× („Space Zoom“)'],
    ['Blitz', 'LED'],
    ['Bildverarbeitung', 'ProVisual Engine (KI-gestützt), Nachtmodus, Szenenoptimierung']
  ]],
  ['Frontkamera', [
    ['Selfie-Kamera', '10 MP, f/2.4, ca. 25 mm, Sensor 1/3″'],
    ['Video vorne', 'bis 4K mit 30/60 Bildern pro Sekunde']
  ]],
  ['Video', [
    ['Maximale Auflösung', '8K (7680 × 4320) mit 30 Bildern pro Sekunde'],
    ['4K (UHD)', '30 oder 60 Bilder pro Sekunde'],
    ['Full HD', '30 oder 60 Bilder pro Sekunde; Zeitlupe bis 240 Bilder/s'],
    ['Super-Zeitlupe', 'bis 960 Bilder pro Sekunde (HD-Auflösung)'],
    ['Weitere', 'HDR10+-Video, Super Steady, Hyperlapse, Pro-Video']
  ]],
  ['Akku & Laden', [
    ['Kapazität', '4.700 mAh (typisch)'],
    ['Kabelgebunden', '25 W (USB PD 3.0 mit PPS): ca. 50 % in 30 Minuten'],
    ['Kabellos', '15 W (Qi-Standard)'],
    ['Andere Geräte laden', 'Wireless PowerShare (ab 30 % Akku)'],
    ['Akkuschutz', 'Standard / Maximal (Ladegrenze 80–95 %)']
  ]],
  ['Netz & Verbindungen', [
    ['Mobilfunk', '5G (Sub-6 GHz), 4G/LTE, 3G, 2G'],
    ['SIM', 'Dual-SIM: 2 × Nano-SIM + eSIM'],
    ['Telefonie', 'VoLTE und WLAN-Call (je nach Anbieter)'],
    ['WLAN', 'Wi-Fi 6E (802.11 a/b/g/n/ac/ax), 2,4 / 5 / 6 GHz, Wi-Fi Direct'],
    ['Bluetooth', '5.3'],
    ['NFC', 'Ja (kontaktlos bezahlen, Tickets)'],
    ['USB', 'USB-C 3.2 Gen 1, OTG, Samsung DeX (Kabel/HDMI und kabellos)'],
    ['Kopfhörerbuchse', 'Nein (USB-C-Kopfhörer, Adapter oder Bluetooth)']
  ]],
  ['Ortung', [
    ['Satellitensysteme', 'GPS, Galileo, GLONASS, BeiDou, QZSS, NavIC']
  ]],
  ['Sensoren', [
    ['Bewegung', 'Beschleunigungssensor, Gyroskop'],
    ['Umgebung', 'Barometer (Luftdruck, hilft bei der Höhenbestimmung), Lichtsensor'],
    ['Orientierung', 'Geomagnetischer Sensor (Kompass), Hall-Sensor (erkennt Klapphüllen)'],
    ['Näherung', 'virtueller Näherungssensor', 'Kein eigenes Bauteil: Das Telefon erkennt per Touchscreen- und Sensordaten, dass es am Ohr liegt, und schaltet den Bildschirm ab.'],
    ['Biometrie', 'Optischer Fingerabdrucksensor im Display; Gesichtserkennung über die Frontkamera']
  ]],
  ['Audio', [
    ['Lautsprecher', 'Stereo (unterer Lautsprecher + Hörmuschel), Dolby Atmos'],
    ['Mikrofone', 'mehrere, mit Geräuschunterdrückung beim Telefonieren']
  ]],
  ['Sicherheit', [
    ['Plattform', 'Samsung Knox (siehe eigenes Kapitel)'],
    ['Funktionen', 'Sicherer Ordner, Auto Blocker, Sicherheits- und Datenschutz-Dashboard, Wartungsmodus, Verlorene Geräte finden'],
    ['Knox Vault', 'Für die S24-Serie angekündigt; für das S24 FE von Samsung nicht ausdrücklich bestätigt']
  ]],
  ['Software', [
    ['Bei Marktstart', 'Android 14 mit One UI 6.1'],
    ['Update-Versprechen', '7 Jahre Android-Versionen und Sicherheitsupdates (bis ca. 2031)'],
    ['KI', 'Galaxy AI (Grundfunktionen kostenlos)'],
    ['Ökosystem', 'Samsung DeX, Quick Share, Smart Switch, SmartThings']
  ]],
  ['Lieferumfang', [
    ['In der Schachtel', 'Telefon, USB-C-Kabel (C auf C), SIM-Werkzeug, Kurzanleitung'],
    ['Nicht enthalten', 'Netzteil, Kopfhörer, Hülle']
  ]]
];

/* ================= Knox Schichten ================= */
const KNOX_LAYERS = [
  { id: 'cloud', t: 'Konto & Geräteverbund', s: 'Knox Matrix · Erweiterter Datenschutz', d: '<p><b>Knox Matrix</b> verbindet Ihre Galaxy-Geräte, die mit demselben Samsung-Konto angemeldet sind, zu einer Vertrauenskette. Die Geräte prüfen sich gegenseitig auf ihren Sicherheitszustand. Im Dashboard sehen Sie, ob ein Gerät ein Risiko hat.</p><p><b>Passkeys</b> (Anmelden ohne Passwort, per Fingerabdruck) synchronisiert Samsung Ende-zu-Ende-verschlüsselt zwischen Ihren Geräten.</p><p>Mit <b>„Erweiterter Datenschutz“</b> (seit One UI 6.1) für die Samsung Cloud werden Sicherungen Ende-zu-Ende verschlüsselt: Nur Ihre Geräte haben den Schlüssel, Samsung selbst kann die Daten nicht lesen. Kehrseite: Verlieren Sie alle Geräte, sind auch diese Sicherungen nicht wiederherstellbar.</p>' },
  { id: 'apps', t: 'Apps & Daten', s: 'Verschlüsselung · Sicherer Ordner · Auto Blocker', d: '<p>Alle Daten im Telefonspeicher sind <b>dateibasiert verschlüsselt</b>. Der Schlüssel wird aus Ihrer PIN und einem Hardware-Schlüssel abgeleitet. Darum ist ein ausgeschaltetes, gesperrtes Telefon auch für Fachleute mit Werkzeug kaum auslesbar.</p><p>Der <b>Sichere Ordner</b> ist ein eigener, zusätzlich verschlüsselter Bereich mit eigener PIN, technisch ein getrenntes Benutzerprofil.</p><p><b>Auto Blocker</b> blockiert App-Installationen aus unbekannten Quellen, Befehle über das USB-Kabel und scannt Apps. Mit „Maximale Einschränkungen“ werden zusätzlich riskante Funktionen wie 2G-Netze abgeschaltet.</p><p><b>Message Guard</b> öffnet Bildanhänge in Nachrichten-Apps in einer abgeschotteten Umgebung, damit präparierte Bilder („Zero-Click-Angriffe“) nicht ins System durchbrechen.</p>' },
  { id: 'system', t: 'Betriebssystem', s: 'SELinux · App-Sandbox · Updates', d: '<p>Jede App läuft in ihrer eigenen <b>Sandbox</b>: Sie darf nicht in die Daten anderer Apps schauen. <b>SELinux</b> (Security-Enhanced Linux) legt zusätzlich fest, welcher Systemprozess was darf. Selbst ein gehackter Prozess bleibt so eingesperrt.</p><p>Monatliche bzw. vierteljährliche <b>Sicherheitsupdates</b> schließen bekannt gewordene Lücken. Ein Telefon ohne Updates verliert diesen Schutz nach und nach.</p>' },
  { id: 'kernel', t: 'Kernel-Schutz', s: 'RKP · DM-Verity', d: '<p>Der Kernel ist der Kern des Betriebssystems mit allen Rechten. Samsungs <b>Real-time Kernel Protection (RKP)</b> überwacht ihn aus einer geschützten Umgebung heraus: Versucht Schadsoftware, Kernel-Code oder wichtige Kernel-Daten zu verändern, wird das blockiert.</p><p><b>DM-Verity</b> prüft beim Lesen, ob die Systempartition unverändert ist. Manipulierte Systemdateien fallen sofort auf.</p>' },
  { id: 'boot', t: 'Startvorgang', s: 'Secure Boot · Trusted Boot', d: '<p>Beim Einschalten prüft jede Startstufe die nächste, bevor sie sie ausführt: Bootloader, dann Kernel, dann System. Nur Software mit gültiger <b>Samsung-Signatur</b> darf starten (<b>Secure Boot</b>).</p><p><b>Trusted Boot</b> protokolliert zusätzlich Messwerte des Startvorgangs. Sicherheitsfunktionen können damit nachweisen, dass das Gerät sauber gestartet ist.</p><p>Wird inoffizielle Software geflasht, löst das den <b>Knox-Warranty-Bit</b> aus (siehe unten).</p>' },
  { id: 'hw', t: 'Hardware', s: 'Root of Trust · TrustZone · Knox Vault', d: '<p>Ganz unten steht die <b>Hardware-Vertrauensbasis</b> (Root of Trust): kryptografische Schlüssel, die bei der Herstellung fest im Chip verankert werden und sich nicht auslesen oder ändern lassen.</p><p>Die <b>TrustZone</b> des Prozessors trennt einen sicheren Bereich (Trusted Execution Environment, bei Samsung „TEEGRIS“) vom normalen Android. Dort laufen Fingerabdruck-Abgleich und Schlüsselverwaltung.</p><p><b>Knox Vault</b> geht noch weiter: ein eigener Sicherheitsprozessor mit eigenem Speicher, physisch vom Hauptprozessor getrennt und gegen Angriffe wie Spannungs- oder Lasermanipulation gehärtet. Samsung nennt Knox Vault für die Galaxy-S24-Serie; ob das S24 FE einen eigenen Vault-Chip hat, hat Samsung nicht eindeutig bestätigt.</p>' }
];

/* ================= Schutzplan ================= */
/* level: 3 = unverzichtbar, 2 = empfohlen, 1 = für Fortgeschrittene */
const PROTECT = [
  { g: 'Zugang sichern', items: [
    { id: 'pin', lvl: 3, t: '6-stellige PIN als Displaysperre', path: 'Einstellungen › Sperrbildschirm und AOD › Displaysperre-Typ › PIN', how: 'Keine Geburtsdaten, keine 123456, keine Wiederholungen wie 111111. Eine zufällige, aber für Sie merkbare Zahl.', why: 'Die PIN ist der Hauptschlüssel: Aus ihr wird der Verschlüsselungsschlüssel aller Daten abgeleitet. 6 Ziffern bieten 1 Million Möglichkeiten statt 10.000 bei 4 Ziffern; nach Fehlversuchen sperrt das Telefon zudem immer länger.' },
    { id: 'finger', lvl: 3, t: 'Zwei Fingerabdrücke registrieren', path: 'Einstellungen › Sicherheit und Datenschutz › Biometrische Daten › Fingerabdrücke', how: 'Je einen Daumen oder Daumen + Zeigefinger. Beim Registrieren den Finger leicht versetzt auflegen.', why: 'Bequem entsperren heißt: Sie verwenden die Sperre auch wirklich. Der Abdruck wird nur verschlüsselt im Sicherheitsbereich des Chips gespeichert.' },
    { id: 'notifhide', lvl: 2, t: 'Benachrichtigungsinhalte auf dem Sperrbildschirm ausblenden', path: 'Einstellungen › Sperrbildschirm und AOD › Benachrichtigungen › Inhalte ausblenden', how: 'Dann sieht man auf dem gesperrten Telefon nur „Neue Nachricht“, aber nicht den Text.', why: 'Bestätigungscodes per SMS (z. B. vom Online-Banking) sind sonst ohne Entsperren lesbar.' },
    { id: 'simpin', lvl: 2, t: 'SIM-PIN eingeschaltet lassen', path: 'Einstellungen › Sicherheit und Datenschutz › Weitere Sicherheitseinstellungen › SIM-Sperre', how: 'Die SIM-PIN aus dem Brief Ihres Anbieters ggf. in eine eigene PIN ändern.', why: 'Ohne SIM-PIN kann ein Dieb Ihre Karte in ein anderes Telefon stecken und SMS-Codes empfangen oder auf Ihre Kosten telefonieren.' },
    { id: 'autoreset', lvl: 1, t: 'Automatisch zurücksetzen nach vielen Fehlversuchen', path: 'Einstellungen › Sicherheit und Datenschutz › Weitere Sicherheitseinstellungen (oder Suche: „Zurücksetzen“)', how: 'Nach 20 falschen Versuchen werden alle Daten gelöscht.', why: 'Schutz gegen systematisches Durchprobieren. Nur mit funktionierender Sicherung empfehlenswert, sonst können auch Kinder beim Spielen alles löschen.' }
  ] },
  { g: 'Diebstahl & Verlust', items: [
    { id: 'findmy', lvl: 3, t: '„Verlorene Geräte finden“ mit Offline-Suche', path: 'Einstellungen › Sicherheit und Datenschutz › Verlorene Geräte finden', how: 'Alle drei Schalter an: Verlorene Geräte finden, Offline-Suche, Letzten Standort senden.', why: 'Ohne diese Funktion lässt sich das Telefon weder orten noch aus der Ferne sperren oder löschen. Die Offline-Suche nutzt andere Galaxy-Geräte in der Nähe, anonym und verschlüsselt.' },
    { id: 'theft', lvl: 3, t: 'Diebstahlschutz einschalten', path: 'Einstellungen › Sicherheit und Datenschutz › Diebstahlschutz (oder Suche: „Diebstahl“)', how: 'Diebstahlerkennungssperre, Offline-Gerätesperre und Identitätsprüfung aktivieren.', why: 'Erkennt das Telefon eine typische „Wegreißen und Wegrennen“-Bewegung, sperrt es sich sofort. Die Identitätsprüfung verlangt außerhalb vertrauter Orte den Fingerabdruck für wichtige Einstellungen, etwa um „Verlorene Geräte finden“ abzuschalten.' },
    { id: 'imei', lvl: 2, t: 'IMEI und Seriennummer notieren', path: 'Einstellungen › Telefoninfo (oder *#06# im Tastenfeld)', how: 'Auf Papier oder in einem anderen Gerät speichern, nicht nur auf dem Telefon.', why: 'Polizei, Versicherung und Anbieter brauchen die IMEI, um das Gerät zu sperren oder zu identifizieren.' },
    { id: 'medical', lvl: 2, t: 'Notfallkontakte und medizinische Informationen', path: 'Einstellungen › Sicherheit und Notfall', how: 'Notruf-SOS einschalten, 1–3 Notfallkontakte, Blutgruppe, Allergien, Medikamente.', why: 'Rettungskräfte sehen diese Infos auf dem Sperrbildschirm über „Notruf“, ohne Ihre PIN.' }
  ] },
  { g: 'Updates & Apps', items: [
    { id: 'autoupd', lvl: 3, t: 'Software-Updates automatisch laden', path: 'Einstellungen › Software-Update › Autom. über WLAN herunterladen', how: 'Benachrichtigungen über neue Updates zeitnah installieren, am besten über Nacht am Ladekabel.', why: 'Die meisten Angriffe nutzen längst bekannte Lücken. Mit aktuellen Updates sind diese geschlossen.' },
    { id: 'playupd', lvl: 3, t: 'Apps automatisch aktualisieren und Play Protect an', path: 'Play Store › Profilbild › Einstellungen › Netzwerkeinstellungen › Automatische App-Updates; Profilbild › Play Protect', how: '„Über WLAN“ genügt. Play Protect: „Apps mit Play Protect scannen“ an.', why: 'Auch Apps haben Sicherheitslücken. Play Protect prüft installierte Apps regelmäßig auf Schadsoftware.' },
    { id: 'autoblock', lvl: 3, t: 'Auto Blocker einschalten', path: 'Einstellungen › Sicherheit und Datenschutz › Auto Blocker', how: 'Einschalten. „Maximale Einschränkungen“ nur, wenn Sie auf 2G und ungesicherte WLANs verzichten können.', why: 'Blockiert Apps aus unbekannten Quellen und Befehle über USB, etwa von manipulierten Ladesäulen. Details im Kapitel Samsung Knox.' },
    { id: 'appclean', lvl: 2, t: 'Ungenutzte Apps entfernen', path: 'Einstellungen › Gerätewartung › Speicher › Nicht verwendete Apps', how: 'Alles löschen, was Sie seit Monaten nicht geöffnet haben.', why: 'Jede App ist eine mögliche Lücke und kann im Hintergrund Daten sammeln.' }
  ] },
  { g: 'Konten absichern', items: [
    { id: 'g2fa', lvl: 3, t: 'Bestätigung in zwei Schritten für das Google-Konto', path: 'Browser: myaccount.google.com › Sicherheit › Bestätigung in zwei Schritten', how: 'Als zweiten Faktor das Telefon selbst („Google-Aufforderung“) oder einen Passkey verwenden. Ersatzcodes ausdrucken.', why: 'Selbst wenn jemand Ihr Passwort kennt, kommt er ohne Ihr Telefon nicht ins Konto, und damit nicht an Fotos, Mails und Kontakte.' },
    { id: 's2fa', lvl: 2, t: 'Zwei-Schritt-Bestätigung für das Samsung-Konto', path: 'Einstellungen › Samsung Account (oben) › Sicherheit und Datenschutz › Bestätigung in zwei Schritten', how: 'Telefonnummer oder Authentifizierungs-App hinterlegen.', why: 'Mit dem Samsung-Konto kann man Ihr Telefon orten, sperren und löschen. Es verdient denselben Schutz wie das Google-Konto.' },
    { id: 'recovery', lvl: 2, t: 'Wiederherstellungsdaten prüfen', path: 'myaccount.google.com › Persönliche Daten / Sicherheit', how: 'Aktuelle Telefonnummer und Ersatz-E-Mail eintragen.', why: 'Wenn Sie Ihr Passwort vergessen oder gehackt werden, kommen Sie nur so wieder ins Konto.' },
    { id: 'pwm', lvl: 1, t: 'Passwort-Manager und Passkeys nutzen', path: 'Einstellungen › Allgemeine Verwaltung › Passwörter, Passkeys und Autofill', how: 'Google Passwortmanager oder Samsung (Wallet/Pass) als Dienst wählen; wo angeboten, Passkeys statt Passwörter einrichten.', why: 'Für jede Seite ein anderes, starkes Passwort, ohne es sich merken zu müssen. Passkeys sind gegen Phishing immun.' }
  ] },
  { g: 'Datenschutz', items: [
    { id: 'perm', lvl: 3, t: 'Berechtigungen prüfen', path: 'Einstellungen › Sicherheit und Datenschutz › Berechtigungsmanager', how: 'Standort, Kamera, Mikrofon, Kontakte durchgehen. Meist „Nur während der App-Nutzung“; Unpassendes auf „Nicht zulassen“.', why: 'Viele Apps fragen mehr ab, als sie brauchen. Was sie nicht dürfen, können sie nicht weitergeben.' },
    { id: 'location', lvl: 2, t: 'Genauen Standort nur wo nötig', path: 'Berechtigungsmanager › Standort › App › „Genauen Standort verwenden“', how: 'Navigation und „Gerät finden“: genau. Wetter, Shopping, Nachrichten: ungefähr.', why: 'Ein genaues Bewegungsprofil verrät Wohnort, Arbeitsplatz und Gewohnheiten.' },
    { id: 'adid', lvl: 2, t: 'Werbe-ID löschen', path: 'Einstellungen › Google › Alle Dienste › Werbung › Werbe-ID löschen', how: 'Einmal löschen, Apps erhalten danach nur noch eine Null-ID.', why: 'Über die Werbe-ID verknüpfen Werbenetzwerke Ihr Verhalten in verschiedenen Apps.' },
    { id: 'camtile', lvl: 1, t: 'Kacheln für Kamera- und Mikrofonzugriff', path: 'Schnelleinstellungen › Stift (Bearbeiten) › „Kamerazugriff“, „Mikrofonzugriff“', how: 'Kacheln hinzufügen; bei Bedarf alle Apps auf einmal sperren.', why: 'Ein grüner Punkt oben rechts zeigt jederzeit an, wenn Kamera oder Mikrofon gerade benutzt werden.' },
    { id: 'diag', lvl: 1, t: 'Diagnose- und Marketingdaten abschalten', path: 'Einstellungen › Sicherheit und Datenschutz › Weitere Datenschutzeinstellungen (oder Suche: „Diagnose“)', how: 'Diagnosedaten senden, Anpassungsdienst und Marketinginformationen nach Wunsch aus.', why: 'Für die Funktion des Telefons nicht nötig; weniger Daten verlassen das Gerät.' }
  ] },
  { g: 'Netzwerk', items: [
    { id: 'wifi', lvl: 2, t: 'Offene WLANs mit Vorsicht', path: 'Einstellungen › Verbindungen › WLAN › Zahnrad › „Automatisch neu verbinden“', how: 'In Cafés, Hotels, Zügen kein Banking ohne VPN; offene Netze nach der Nutzung „Entfernen“.', why: 'In offenen Netzen kann der Betreiber oder ein Angreifer im selben Netz Verbindungsdaten mitlesen. Moderne Apps verschlüsseln zwar, aber gefälschte Anmeldeseiten sind dort häufig.' },
    { id: 'dns', lvl: 1, t: 'Privates DNS', path: 'Einstellungen › Verbindungen › Weitere Verbindungseinstellungen › Privates DNS', how: 'Hostname eines vertrauenswürdigen Anbieters eintragen, z. B. dns.google oder einen Werbeblocker-DNS.', why: 'DNS-Anfragen (welche Seite Sie aufrufen) werden verschlüsselt; mit Blocker-DNS verschwinden viele Werbe- und Tracking-Adressen.' }
  ] },
  { g: 'Sichern', items: [
    { id: 'gbackup', lvl: 3, t: 'Google-Sicherung', path: 'Einstellungen › Konten und Sicherung › Sichern (Google Drive)', how: 'Einschalten; es sichert Kontakte, Kalender, SMS, App-Daten und Einstellungen.', why: 'Bei Verlust oder Defekt ist ein neues Telefon in wenigen Minuten wieder eingerichtet.' },
    { id: 'photos', lvl: 3, t: 'Foto-Sicherung', path: 'Google Fotos › Profilbild › Fotos-Einstellungen › Sicherung (oder Galerie › Einstellungen › Cloud-Synchronisierung)', how: 'Über WLAN, Qualität „Original“ oder „Speicherplatz sparen“ je nach Cloud-Speicher.', why: 'Fotos sind meist das Einzige, was sich nicht ersetzen lässt.' },
    { id: 'wa', lvl: 2, t: 'WhatsApp-Chat-Backup', path: 'WhatsApp › Einstellungen › Chats › Chat-Backup', how: 'Google-Konto wählen, „Täglich“, optional Ende-zu-Ende-verschlüsseltes Backup mit Passwort.', why: 'WhatsApp wird von der Telefon-Sicherung nicht erfasst.' },
    { id: 'pcbackup', lvl: 1, t: 'Zusätzliche Kopie am Computer', path: 'Smart Switch für Windows/Mac › Sichern', how: 'Alle paar Monate per Kabel eine vollständige Sicherung auf dem PC.', why: 'Zwei unabhängige Kopien schützen auch vor Konto-Sperrungen oder Cloud-Problemen.' }
  ] },
  { g: 'Akku, Leistung & Gerät', items: [
    { id: 'battery', lvl: 2, t: 'Akkuschutz einstellen', path: 'Einstellungen › Akku › Akkuschutz', how: '„Maximal“ mit 80–85 %, wenn das für Ihren Tag reicht; sonst „Standard“.', why: 'Hält den Akku viele Jahre gesund, wichtig bei 7 Jahren Update-Unterstützung.' },
    { id: 'autoopt', lvl: 1, t: 'Automatische Optimierung / Neustart', path: 'Einstellungen › Gerätewartung › Automatische Optimierung', how: 'Automatischen Neustart bei Bedarf einschalten (nachts).', why: 'Ein gelegentlicher Neustart räumt den Arbeitsspeicher auf und lädt Sicherheitsupdates einiger Systemkomponenten.' },
    { id: 'case', lvl: 2, t: 'Hülle und Displayschutz', path: '—', how: 'Hülle mit erhöhtem Rand; Schutzglas „fingerabdruckkompatibel“.', why: 'Ein Displaytausch kostet einen erheblichen Teil des Gerätepreises.' }
  ] }
];

/* ================= Kamera-Einstellungen im Detail ================= */
/* rec: empfohlene Einstellung; ex: Beispiel */
const CAM_SETTINGS = [
  { g: 'Sucher-Leiste (oben im Kamerabild)', items: [
    { t: 'Blitz', opt: 'Aus · Auto · Ein', rec: 'Aus (bei Bedarf Auto)', d: 'Steuert den LED-Blitz neben den Objektiven.', ex: 'Abendessen im Restaurant: Blitz aus und Nachtmodus wirken natürlicher. Dokument im dunklen Keller: Blitz ein.' },
    { t: 'Timer', opt: 'Aus · z. B. 2 · 5 · 10 Sekunden', rec: 'Aus; 5–10 s für Gruppenfotos', d: 'Verzögert die Aufnahme nach dem Antippen des Auslösers.', ex: 'Telefon auf einem Mäuerchen abstellen, 10 s wählen und selbst mit aufs Gruppenfoto laufen.' },
    { t: 'Seitenverhältnis & Auflösung', opt: '3:4 · 3:4 50 MP · 9:16 · 1:1 · Vollbild', rec: '3:4 (12 MP)', d: '3:4 nutzt den ganzen Sensor. 9:16 füllt den Bildschirm, schneidet im Hochformat aber links und rechts ab. 50 MP liefert mehr Details bei gutem Licht, große Dateien und schwächere Nachtleistung.', ex: 'Für Instagram-Storys 9:16, für Fotobücher 3:4, für ein Landschaftsposter bei Sonne 3:4 50 MP.' },
    { t: 'Bewegungsfoto', opt: 'Aus · Ein', rec: 'Aus (spart Speicher)', d: 'Speichert zusätzlich etwa 3 Sekunden Video vor der Aufnahme.', ex: 'Kind pustet Kerzen aus: In der Galerie wählen Sie später aus dem Bewegungsfoto genau den richtigen Moment.' },
    { t: 'Filter & Effekte', opt: 'Zauberstab-Symbol bzw. Filterleiste', rec: 'Ohne Filter fotografieren', d: 'Farbfilter und Gesichtskorrekturen live im Sucher.', ex: 'Filter lieber nachträglich in der Galerie anwenden: Dort lassen sie sich wieder entfernen.' },
    { t: 'Zoomstufen', opt: '0,6 · 1 · 2 · 3 · bis 30', rec: 'Feste Stufen statt Fingerzoom', d: 'Antippen der Zahlen wechselt das Objektiv; zwei Finger zoomen stufenlos.', ex: 'Turm aus 100 m: 3× gibt ein scharfes Bild; 10× nur, wenn es unbedingt näher sein muss.' }
  ] },
  { g: 'Intelligente Funktionen', items: [
    { t: 'Szenenoptimierung', opt: 'Ein · Aus', rec: 'Ein', d: 'Erkennt Motive wie Essen, Pflanzen, Tiere, Text, Nacht und passt Belichtung, Kontrast, Farbe an. Ermöglicht auch das Dokumentenscannen.', ex: 'Bei Sonnenuntergängen werden Orangetöne kräftiger. Stören Sie die kräftigen Farben, schalten Sie die Optimierung aus.' },
    { t: 'Aufnahmevorschläge', opt: 'Ein · Aus', rec: 'Für Einsteiger Ein', d: 'Zeigt einen Hilfspunkt, auf den Sie die Kamera ausrichten sollen, für eine ausgewogenere Komposition.', ex: 'Beim Fotografieren eines Gebäudes erscheint ein Kreis; richten Sie den Mittelpunkt darauf aus, bis er gelb wird.' },
    { t: 'QR-Codes scannen', opt: 'Ein · Aus', rec: 'Ein', d: 'Die Kamera erkennt QR-Codes und zeigt den Link an. Erst nach Antippen wird er geöffnet.', ex: 'Speisekarte im Restaurant scannen. Bei QR-Codes auf Parkautomaten Vorsicht: Betrüger überkleben sie mit gefälschten Codes.' }
  ] },
  { g: 'Bilder', items: [
    { t: 'Auslöser zum Rand ziehen', opt: 'Serienaufnahme · GIF erstellen', rec: 'Serienaufnahme', d: 'Legt fest, was passiert, wenn Sie den Auslöser zum nächstgelegenen Bildrand ziehen und halten.', ex: 'Hund springt nach dem Ball: Auslöser zum Rand ziehen und halten, danach das schärfste Bild der Serie behalten.' },
    { t: 'Wasserzeichen', opt: 'Aus · Ein (Text, Datum, Gerätename)', rec: 'Aus', d: 'Druckt Text unten in jedes Foto ein.', ex: 'Für Fotos von Schäden für die Versicherung kann ein Datums-Wasserzeichen nützlich sein.' },
    { t: 'Erweiterte Bildoptionen: Bildformat', opt: 'JPEG · HEIF (hohe Effizienz)', rec: 'JPEG, wenn Sie Fotos oft an Computer/andere senden', d: 'HEIF spart etwa die Hälfte an Speicher bei gleicher Qualität, wird aber von manchen älteren Programmen nicht geöffnet.', ex: 'Fotos an ein Fotolabor oder ältere Windows-PCs: JPEG. Nur für Google Fotos/Galerie: HEIF spart Platz.' },
    { t: 'Erweiterte Bildoptionen: RAW-Kopien (Pro)', opt: 'Aus · Ein', rec: 'Aus (nur für Bildbearbeitung am PC)', d: 'Speichert im Pro-Modus zusätzlich eine unbearbeitete RAW-Datei (DNG).', ex: 'Hobbyfotograf entwickelt in Lightroom: RAW an. Alle anderen: aus, eine RAW-Datei ist 5–10× so groß.' }
  ] },
  { g: 'Selfies', items: [
    { t: 'Selfies wie in der Vorschau speichern', opt: 'Ein · Aus', rec: 'Geschmackssache', d: 'Der Sucher zeigt Sie spiegelverkehrt wie im Spiegel. Ein: Das Foto wird ebenfalls gespiegelt gespeichert. Aus: so, wie andere Sie sehen.', ex: 'Selfie mit einem T-Shirt-Aufdruck: Mit „Aus“ ist die Schrift lesbar, mit „Ein“ spiegelverkehrt.' },
    { t: 'Breitwinkel-Selfie', opt: 'Symbol im Selfie-Modus (eine/zwei Personen)', rec: 'Automatisch', d: 'Wechselt zwischen engerem und weiterem Bildausschnitt der Frontkamera.', ex: 'Zu dritt vor einer Sehenswürdigkeit: weiten Ausschnitt antippen.' }
  ] },
  { g: 'Videos', items: [
    { t: 'Auto-FPS', opt: 'Aus · Nur 30-fps-Videos · 30- und 60-fps-Videos', rec: 'Nur 30-fps-Videos', d: 'Senkt bei Dunkelheit die Bildrate, damit jedes Einzelbild länger belichtet wird und das Video heller ist.', ex: 'Abendlicher Spaziergang: Das Video wird heller, Bewegungen ruckeln aber etwas. Für Sport lieber aus.' },
    { t: 'Videostabilisierung', opt: 'Ein · Aus', rec: 'Ein', d: 'Gleicht Wackeln elektronisch aus. Für sehr unruhige Aufnahmen gibt es zusätzlich „Super Steady“ im Video-Modus.', ex: 'Beim Gehen filmen: Stabilisierung an. Auf dem Stativ: kann aus.' },
    { t: 'Erweiterte Videooptionen: HEVC', opt: 'Aus · Ein', rec: 'Ein für 4K/8K', d: 'Videos mit hoher Effizienz: etwa halbe Dateigröße. Ältere Fernseher/PCs spielen HEVC teils nicht ab.', ex: '10 Minuten 4K: mit HEVC ca. 2 GB statt ca. 3,5 GB.' },
    { t: 'Erweiterte Videooptionen: HDR10+-Videos', opt: 'Aus · Ein', rec: 'Aus, außer Sie schauen auf HDR-Fernsehern', d: 'Mehr Kontrast und Farben auf HDR-fähigen Bildschirmen. Auf normalen Displays oder in Messengern wirken sie teils blass.', ex: 'Urlaubsvideo für den neuen OLED-Fernseher: HDR10+ an. Für WhatsApp: aus.' },
    { t: 'Zoom-In-Mikrofon', opt: 'Aus · Ein (je nach Version)', rec: 'Ein', d: 'Beim Zoomen im Video wird der Ton der gezoomten Richtung verstärkt.', ex: 'Schulaufführung aus der dritten Reihe: Sie zoomen auf die Bühne, die Stimmen werden lauter.' }
  ] },
  { g: 'Allgemein', items: [
    { t: 'Auto-HDR', opt: 'Ein · Aus', rec: 'Ein', d: 'Kombiniert bei starken Kontrasten mehrere Belichtungen, damit Himmel nicht weiß und Schatten nicht schwarz werden.', ex: 'Person vor einem hellen Fenster: Mit HDR sind Gesicht und Aussicht sichtbar.' },
    { t: 'Gitterlinien', opt: 'Aus · 3×3 · Quadrat', rec: '3×3', d: 'Blendet Hilfslinien nach der Drittel-Regel ein.', ex: 'Horizont auf die untere Linie legen, Leuchtturm auf eine senkrechte Linie.' },
    { t: 'Standort-Tags', opt: 'Ein · Aus', rec: 'Ein, aber vor dem Teilen entfernen', d: 'Speichert den Aufnahmeort im Foto. Praktisch für die Karte in der Galerie, verrät aber beim Weitergeben Ihren Wohnort.', ex: 'Vor dem Posten: Teilen › oben „Standortdaten entfernen“ aktivieren (je nach Version).' },
    { t: 'Aufnahmemethoden', opt: 'Lautstärketasten · Sprachbefehle · Floating-Auslöser · Handfläche zeigen', rec: 'Lautstärketasten: Foto aufnehmen', d: 'Weitere Wege zum Auslösen. „Handfläche zeigen“ startet den Timer bei Selfies, wenn Sie der Kamera die offene Hand zeigen.', ex: 'Selfie mit ausgestrecktem Arm: Handfläche zeigen, 2 Sekunden später wird ausgelöst, ohne Verwackeln.' },
    { t: 'Einstellungen beibehalten', opt: 'Kameramodus · Selfie-Winkel · Filter …', rec: 'Kameramodus: Aus', d: 'Merkt sich zuletzt verwendete Modi und Einstellungen.', ex: 'Aus: Die Kamera startet immer im Foto-Modus, so verpassen Sie keinen spontanen Moment, weil noch „Hyperlapse“ eingestellt war.' },
    { t: 'Speicherort & Vibration', opt: 'Interner Speicher · Vibrationsfeedback', rec: 'Standard', d: 'Ohne Speicherkarte bleibt der interne Speicher. Vibrationsfeedback gibt ein Kurzsignal beim Auslösen.', ex: '—' },
    { t: 'Kameraeinstellungen zurücksetzen', opt: 'ganz unten', rec: 'Bei merkwürdigem Verhalten', d: 'Stellt alle Kameraeinstellungen auf Werkseinstellung zurück, Fotos bleiben erhalten.', ex: 'Fotos plötzlich alle quadratisch oder spiegelverkehrt? Zurücksetzen.' }
  ] },
  { g: 'Pro-Modus (Mehr › Pro)', items: [
    { t: 'ISO', opt: 'Auto oder fester Wert (z. B. 50–3200)', rec: 'So niedrig wie möglich', d: 'Signalverstärkung des Sensors. Verdoppeln = doppelt so hell, aber mehr Rauschen. Die genaue Spanne hängt vom gewählten Objektiv ab.', ex: 'Stadt bei Nacht vom Stativ: ISO 50–100 und dafür lange Belichtungszeit.' },
    { t: 'Belichtungszeit (Verschlusszeit)', opt: 'von Sekundenbruchteilen bis zu mehreren Sekunden', rec: 'Bewegung: 1/250 s oder kürzer; Hand: nicht länger als ca. 1/30 s', d: 'Wie lange Licht auf den Sensor fällt. Ist sie manuell gesetzt, kann ISO nicht mehr auf Auto stehen.', ex: 'Wasserfall „seidig“ machen: Telefon abstützen, 1/2 s oder länger. Fahrradfahrer einfrieren: 1/1000 s.' },
    { t: 'EV (Belichtungskorrektur)', opt: 'ca. −2 bis +2', rec: 'Erster Regler, den man probieren sollte', d: 'Hellt das Bild insgesamt auf oder dunkelt es ab; die Kamera passt ISO/Zeit selbst an.', ex: 'Schneelandschaft wirkt grau: EV +0,7. Sonnenuntergang zu hell: EV −1.' },
    { t: 'WB (Weißabgleich in Kelvin)', opt: 'Auto oder Kelvin-Wert', rec: 'Auto; bei Farbstich manuell', d: 'Niedriger Kelvin-Wert = Bild kühler/bläulicher, hoher Wert = wärmer/gelblicher.', ex: 'Unter Glühlampen wirkt alles orange: Kelvin senken (ca. 3000 K), bis Weiß wieder weiß ist.' },
    { t: 'MF (Fokus)', opt: 'Auto (AF) oder manuell, mit Fokus-Peaking', rec: 'AF; MF für Spezialfälle', d: 'Manuell scharfstellen. Scharfe Kanten werden farbig markiert (Fokus-Peaking).', ex: 'Durch eine Fensterscheibe oder einen Zaun fotografieren: Der Autofokus stellt sonst auf die Scheibe scharf.' },
    { t: 'Messmethode', opt: 'Mittenbetont · Matrix · Spot', rec: 'Matrix', d: 'Wo die Kamera die Helligkeit misst: ganzes Bild (Matrix), Mitte stärker (mittenbetont) oder nur ein kleiner Punkt (Spot).', ex: 'Sänger im Scheinwerferlicht vor dunkler Bühne: Spot auf das Gesicht, sonst wird es überbelichtet.' },
    { t: 'Histogramm', opt: 'Anzeige ein/aus', rec: 'Ein für Fortgeschrittene', d: 'Diagramm der Helligkeitsverteilung. Berg links = viel Dunkles, Berg rechts = viel Helles; an einen Rand gedrückt = Details verloren.', ex: 'Hochzeitskleid fotografieren: Ragt das Histogramm rechts an den Rand, EV senken.' }
  ] }
];

/* ================= Kamera-Modi im Detail ================= */
const CAM_MODES = [
  ['Foto', 'Die Automatik für 90 % aller Situationen. Auflösung, HDR und Nachtaufhellung regelt die Kamera selbst.', 'Alltag, Reise, Familie'],
  ['Video', 'Filme in Full HD, 4K oder 8K. Auflösung oben über die Angabe wie „FHD 30“ ändern; Super Steady für unruhige Aufnahmen.', 'Erinnerungen, Konzerte (mit Zoom-In-Mikrofon)'],
  ['Porträt', 'Person scharf, Hintergrund unscharf. Effekte wie Studio, Monochrom oder Farbklecks; Stärke lässt sich vorher und nachher in der Galerie ändern.', 'Personen, Haustiere, einzelne Gegenstände'],
  ['Pro', 'Volle Kontrolle über ISO, Belichtungszeit, Weißabgleich, Fokus und Messmethode; optional RAW.', 'Lernen, Nachtaufnahmen vom Stativ, besondere Effekte'],
  ['Pro-Video', 'Die Pro-Regler für Videos, zusätzlich Mikrofonrichtung.', 'Ambitionierte Videos, gleichbleibende Belichtung'],
  ['Nacht', 'Mehrere Aufnahmen werden zu einem hellen, rauscharmen Bild verrechnet. Die Zeit zeigt die Kamera an (z. B. 3 s); so lange ruhig halten.', 'Städte bei Nacht, Lichterketten'],
  ['Panorama', 'Langsam in Pfeilrichtung schwenken; die Kamera setzt die Bilder zusammen.', 'Bergpanoramen, Strände, Plätze'],
  ['Food', 'Kräftigere Farben und ein verstellbarer Schärfekreis mit Unschärfe drumherum.', 'Gerichte, Torten, Getränke'],
  ['Porträtvideo', 'Hintergrundunschärfe auch im Video.', 'Videogrüße, Interviews'],
  ['Zeitlupe / Super-Zeitlupe', 'Zeitlupe filmt mit hoher Bildrate und spielt langsam ab; Super-Zeitlupe nimmt einen sehr kurzen Moment extrem langsam auf.', 'Wasserspritzer, Sport, springende Tiere'],
  ['Hyperlapse', 'Zeitraffer mit Stabilisierung; Geschwindigkeit wählbar (z. B. 4× bis 32×) oder automatisch.', 'Autofahrten, Wolken, Sonnenuntergänge'],
  ['Expert RAW (App)', 'Separate Samsung-App für mehrfach belichtete RAW-Fotos, über den Galaxy Store, sofern für Ihr Gerät angeboten.', 'Fotografen mit Lightroom & Co.']
];

MINI_QUIZ.knox = [
  { q: 'Was ist Samsung Knox?', o: ['Eine Antiviren-App', 'Eine Sicherheitsplattform aus Hardware und Software', 'Ein Cloud-Speicher'], a: 1, e: 'Knox ist in jedes Galaxy-Gerät eingebaut, vom Chip bis zur Cloud.' },
  { q: 'Was passiert, wenn man das Telefon rootet?', o: ['Nichts', 'Das Knox-Warranty-Bit wird unwiderruflich ausgelöst', 'Es wird schneller und sicherer'], a: 1, e: 'Danach funktionieren Sicherer Ordner und Teile von Samsung Wallet dauerhaft nicht mehr.' },
  { q: 'Werden Inhalte des Sicheren Ordners mit Smart Switch übertragen?', o: ['Ja, automatisch', 'Nein, vorher selbst sichern', 'Nur Fotos'], a: 1, e: 'Sichern Sie den Ordner vorher oder verschieben Sie Inhalte zurück.' }
];
MINI_QUIZ.schutzplan = [
  { q: 'Welche Maßnahme schützt Ihr Google-Konto, selbst wenn das Passwort gestohlen wurde?', o: ['Dunkelmodus', 'Bestätigung in zwei Schritten', 'Bluetooth aus'], a: 1, e: 'Ohne den zweiten Faktor (Ihr Telefon/Passkey) kommt niemand ins Konto.' },
  { q: 'Warum Benachrichtigungsinhalte auf dem Sperrbildschirm ausblenden?', o: ['Spart Akku', 'Damit SMS-Codes nicht ohne Entsperren lesbar sind', 'Für größere Schrift'], a: 1, e: 'Bestätigungscodes wären sonst für jeden sichtbar, der das Telefon in der Hand hat.' },
  { q: 'Was sollte am ersten Tag zuerst passieren?', o: ['Hintergrundbild ändern', 'Software-Update installieren', 'Spiele laden'], a: 1, e: 'Erst mit aktueller Software sind alle Sicherheitslücken geschlossen.' }
];
