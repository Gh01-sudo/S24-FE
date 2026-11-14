/* ================= Version & Änderungsliste ================= */
const HB_VERSION = { v: '1.8', date: '14. November 2026' };
const CHANGELOG = [
  ['1.8', 'Neu in One UI 8.5, Spickzettel zum Ausdrucken, „Mein Gerät“-Notizblatt, fehlertolerante Suche mit Synonymen, Kompaktansicht, persönliche Notizen pro Kapitel, Weitergeben-Knopf und ZIP-Version.'],
  ['1.7', 'Kapitel „Hintergrundwissen, Tipps & Tricks“ mit 20 belegten Tipps und Mythen-Check; Tooltips für über 100 Fachbegriffe.'],
  ['1.6', 'Kapitel „Alltags-Apps & Funktionen“, Abschnitt Garantie und Reparatur, Softwarestand One UI 8.5, zweite Faktenprüfung.'],
  ['1.5', 'Neues, übersichtlicheres Design mit Kapitelkacheln, gruppierter Seitenleiste und Kapitelnavigation.'],
  ['1.4', 'Datenblatt, Kapitel Samsung Knox, Schutzplan, alle Kamera-Einstellungen und Kamera-Labor.'],
  ['1.3', 'Übungs-Handys (Einstellungen, Tasten, Gesten, Anrufe), Belichtungs-Simulator, Rechner, Kurzquiz pro Kapitel, Kapitel Telefonieren.'],
  ['1.2', 'Faktencheck: SIM-Fach, Seitentaste (Gemini), Akkuschutz und weitere Korrekturen.'],
  ['1.1', 'Komplett offline nutzbar als einzelne Datei, für das S24 FE optimiert.'],
  ['1.0', 'Erstausgabe mit 12 Kapiteln.']
];

/* ================= Neu in One UI 8.5 ================= */
/* Quelle: Changelog der Galaxy-S24-Serie (Android Authority, Mai 2026). Für das S24 FE nicht einzeln bestätigt. */
const ONEUI85 = [
  ['Schnelleinstellungen frei anpassen', 'Kacheln und Regler lassen sich hinzufügen, entfernen, umsortieren und neu anordnen: Schnelleinstellungen öffnen › Stift (Bearbeiten).'],
  ['Nur einen Teil des Bildschirms aufnehmen', 'Der Bildschirmrekorder kann jetzt auch nur einen ausgewählten Bereich aufzeichnen.'],
  ['Neue Akku-Einstellungen', 'Die Akku-Seite zeigt Restlaufzeit, Ladestatus und Tagesverbrauch übersichtlicher. Der Energiesparmodus bietet „Standard“ (moderat, anpassbar) und „Maximal“ (schaltet alles Unwichtige ab).'],
  ['Sperre nach Fehlversuchen', 'Eine neue Option im Diebstahlschutz sperrt den Bildschirm automatisch, wenn zu oft falsch entsperrt wurde. Die Identitätsprüfung schützt zusätzliche Einstellungen.'],
  ['Auto Blocker vergisst nicht', 'Wer Auto Blocker kurz ausschaltet, kann ihn automatisch nach 30 Minuten wieder einschalten lassen.'],
  ['Mailbox direkt auf dem Telefon', 'Anrufer können eine Sprachnachricht direkt auf Ihrem Telefon hinterlassen, die Sie später abhören (zusätzlich zur Mailbox Ihres Anbieters).'],
  ['Quick Share nur von Bekannten', 'Einstellbar: Dateien nur von Geräten empfangen, die mit Ihrem Samsung- oder Google-Konto angemeldet sind. Zusätzlich schlägt Quick Share vor, Fotos direkt mit den abgebildeten Personen zu teilen.'],
  ['Bildschirm auf den Fernseher', 'Für Smart View (Bildschirm spiegeln) lässt sich eine Verknüpfung auf dem Startbildschirm anlegen.'],
  ['Sperrbildschirm passt sich dem Foto an', 'Uhr und Widgets rücken automatisch so, dass sie wichtige Bildteile Ihres Hintergrundfotos nicht verdecken.'],
  ['Wetter und Uhr', 'Wetter-Widget mit Regengrafik für die nächsten Stunden und Pollenflug. Der Wecker kann das aktuelle Wetter als Hintergrund zeigen; ein Zeitzonen-Schieberegler zeigt Zeitunterschiede.'],
  ['Erinnerungen und Rechner', 'Für jede Erinnerung lässt sich festlegen, wie früh sie meldet. Der Rechner schlägt kopierte Zahlen und Formeln aus der Zwischenablage vor.'],
  ['Barrierefreiheit', 'Einstellungen für Bluetooth-Hörgeräte direkt über die Barrierefreiheits-Verknüpfung; neue Maus-Funktionen (Verweilaktion, Eckaktionen).'],
  ['Galaxy AI und Bixby', 'Der Foto-Assistent erzeugt mehrere Varianten nacheinander, ohne jede zu speichern. Bixby versteht freiere Formulierungen und zeigt den Gesprächsverlauf.']
];

/* ================= Such-Synonyme (normalisiert, ohne Umlaute) ================= */
const SYNONYMS = [
  ['bildschirmfoto', 'screenshot'], ['handy', 'telefon', 'smartphone'], ['akku', 'batterie'], ['wlan', 'wifi', 'wi-fi', 'internet'],
  ['zurucksetzen', 'werkseinstellungen', 'reset'], ['passwort', 'kennwort'], ['foto', 'bild', 'fotos', 'bilder'], ['video', 'film', 'filmen'],
  ['lautlos', 'stumm', 'ton aus'], ['klingelton', 'ton', 'klingel'], ['nachricht', 'sms', 'nachrichten'], ['anruf', 'anrufen', 'telefonieren'],
  ['hotspot', 'tethering'], ['kopfhorer', 'bluetooth', 'buds'], ['verloren', 'finden', 'diebstahl', 'geklaut', 'gestohlen'],
  ['speicher', 'platz', 'voll'], ['schrift', 'text', 'schriftgrosse'], ['dunkel', 'nachtmodus', 'dunkelmodus'], ['update', 'aktualisierung', 'aktualisieren'],
  ['app', 'anwendung', 'apps'], ['sim', 'simkarte', 'karte'], ['ausschalten', 'abschalten', 'neustart', 'neu starten'], ['entsperren', 'pin', 'sperre'],
  ['laden', 'aufladen', 'ladegerat', 'netzteil'], ['kamera', 'fotografieren'], ['notruf', '112', 'sos'], ['wecker', 'alarm'], ['navigation', 'maps', 'karte'],
  ['email', 'e-mail', 'mail'], ['virus', 'viren', 'schadsoftware', 'malware'], ['langsam', 'hangt', 'eingefroren', 'ruckelt']
];

/* ================= Spickzettel ================= */
const CHEAT = {
  keys: [
    ['Bildschirm an/aus', 'Seitentaste kurz'], ['Bildschirmfoto', 'Seitentaste + Leiser kurz'], ['Ausschaltmenü', 'Seitentaste + Leiser ca. 2 s'],
    ['Erzwungener Neustart', 'Seitentaste + Leiser 7 s'], ['Kamera starten', 'Seitentaste 2×'], ['Notruf-SOS', 'Seitentaste 5× (muss eingeschaltet sein)']
  ],
  gestures: [
    ['Startbildschirm', 'Von unten nach oben wischen'], ['Zurück', 'Vom linken oder rechten Rand zur Mitte'], ['Letzte Apps', 'Von unten wischen und halten'],
    ['Benachrichtigungen', 'Oben links nach unten wischen'], ['Schnelleinstellungen', 'Oben rechts nach unten wischen'], ['Circle to Search', 'Strich unten gedrückt halten']
  ],
  paths: [
    ['Schrift größer', 'Anzeige › Schriftgröße und -stil'], ['Dunkelmodus', 'Anzeige › Dunkel'], ['Akkuschutz', 'Akku › Akkuschutz'],
    ['Gerät finden', 'Sicherheit und Datenschutz › Schutz bei Geräteverlust'], ['Updates', 'Software-Update › Herunterladen und installieren'],
    ['Speicher prüfen', 'Gerätewartung › Speicher'], ['Wartungsmodus', 'Gerätewartung › Wartungsmodus'], ['Seitentaste ändern', 'Erweiterte Funktionen › Seitentaste']
  ],
  numbers: [
    ['Feuerwehr / Rettungsdienst', '112'], ['Polizei', '110'], ['Ärztlicher Bereitschaftsdienst', '116 117'], ['Sperr-Notruf (Karten, Konten)', '116 116'],
    ['IMEI anzeigen', '*#06# im Tastenfeld'], ['Mailbox abhören', 'Taste 1 gedrückt halten']
  ]
};
