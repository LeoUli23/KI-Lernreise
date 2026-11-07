(window.ZONES = window.ZONES || []).push({
  id: "z4",
  title: "Praxis und Recht",
  subtitle: "Echte Anwendungen, sicher umgesetzt",
  icon: "⚖️",
  color: "#ef4444",
  badge: { name: "Praxis-Profi", icon: "🏗️" },
  levels: [
    {
      id: "z4l1",
      title: "Chatbots: Website, intern, SQL",
      icon: "💁",
      lesson: `
<p>Chatbots sind der häufigste Einstieg in KI-Projekte. Drei Arten solltest du kennen:</p>
<h4>1. Website-Chatbot</h4>
<p>Beantwortet Fragen von Besuchern rund um die Uhr: Öffnungszeiten, Preise, Buchung. Oft gebaut mit <b>n8n</b> und RAG über die Website-Inhalte. Wichtig: klare Übergabe an einen Menschen, wenn der Bot nicht weiterweiß.</p>
<h4>2. Interner Wissens-Bot (RAG)</h4>
<p>Für Mitarbeitende: „Wie beantrage ich Urlaub?“, „Wo ist die Vorlage für Angebote?“. Er durchsucht Handbücher, Richtlinien und Wikis. Spart viele Rückfragen.</p>
<h4>3. SQL-Chatbot</h4>
<p>Viele Firmendaten liegen in <b>Datenbanken</b>. <b>SQL</b> ist die Sprache, um sie abzufragen. Ein SQL-Bot übersetzt eine normale Frage („Wie viele Tickets haben wir im Oktober verkauft?“) in eine Datenbankabfrage und erklärt das Ergebnis.</p>
<div class="tip">SQL-Bots sollten nur <b>Lesezugriff</b> haben. Sonst könnte eine missverstandene Frage Daten löschen.</div>
<h4>Weitere Kanäle</h4>
<ul>
<li><b>Slackbot für Reporting:</b> Schickt jeden Montag automatisch die Kennzahlen der Woche in einen Kanal.</li>
<li><b>Sprach-Chatbot:</b> z. B. mit ElevenLabs, der Antworten vorliest. Mehr dazu in Zone 5.</li>
</ul>`,
      keys: [
        "Website-Bot: Kundenfragen + Übergabe an Menschen",
        "Interner RAG-Bot: Firmenwissen",
        "SQL-Bot: Fragen → Datenbankabfragen, nur Lesezugriff"
      ],
      quiz: [
        { t: "match", q: "Ordne den Bot dem Einsatz zu.", p: [["Website-Bot", "Fragen von Besuchern beantworten"], ["Interner RAG-Bot", "Handbücher für Mitarbeitende durchsuchen"], ["SQL-Bot", "Fragen in Datenbankabfragen übersetzen"], ["Slackbot", "Wöchentliche Kennzahlen posten"]], e: "Gleiche Technik, verschiedene Zielgruppen." },
        { t: "mc", q: "Welche Rechte sollte ein SQL-Chatbot haben?", o: ["Volle Schreib- und Löschrechte", "Nur Lesezugriff", "Admin-Rechte", "Keine, er rät einfach"], a: 1, e: "Prinzip der minimalen Rechte." },
        { t: "tf", q: "Ein guter Website-Bot sollte an einen Menschen übergeben können.", a: true, e: "Frust vermeiden, Vertrauen aufbauen." }
      ],
      practice: {
        task: "Welche 5 Fragen würde ein Website-Bot für dein Ensemble am häufigsten beantworten müssen?",
        hint: "Was fragen Veranstalter, Publikum oder Presse?",
        solution: "Beispiel: Wie buche ich euch? Was kostet ein Auftritt? Welches Programm spielt ihr? Wie viel Platz braucht ihr auf der Bühne? Wo finde ich Pressefotos?"
      }
    },
    {
      id: "z4l2",
      title: "Corporate LLM und lokale KI",
      icon: "🏢",
      lesson: `
<p>Viele Firmen wollen KI nutzen, ohne sensible Daten an fremde Server zu schicken. Dafür gibt es mehrere Wege:</p>
<h4>Corporate LLM</h4>
<p>Ein <b>firmeneigener KI-Chat</b>, z. B. mit <b>OpenWebUI</b>, einer Chat-Oberfläche wie ChatGPT, die man selbst hostet. Im Hintergrund laufen entweder:</p>
<ul>
<li><b>Cloud-Modelle über API</b> mit Unternehmensvertrag. Daten werden in der Regel nicht zum Training genutzt.</li>
<li><b>Lokale Open-Source-Modelle</b> auf eigener Hardware, z. B. über <b>Ollama</b>. Die Daten verlassen das Haus nie.</li>
</ul>
<h4>Vorteile</h4>
<ul>
<li>Zentrale Kontrolle: Wer darf was? Welche Modelle sind erlaubt?</li>
<li>Keine „Schatten-KI“, also Mitarbeitende, die heimlich private Konten nutzen</li>
<li>Kosten pro Nutzer statt teurer Einzel-Abos</li>
</ul>
<h4>Lokale Dokumentenanalyse</h4>
<p>Besonders sensible Unterlagen wie Personalakten, Verträge oder Gesundheitsdaten lassen sich mit lokalen Modellen analysieren, ganz ohne Internet.</p>
<div class="tip">Lokale Modelle sind meist <b>schwächer</b> als die besten Cloud-Modelle und brauchen gute Hardware. Abwägung: Datenschutz gegen Leistung.</div>`,
      keys: [
        "Corporate LLM = eigener KI-Chat fürs Unternehmen",
        "OpenWebUI = Oberfläche, Ollama = lokale Modelle",
        "Lokal = maximaler Datenschutz, oft weniger Leistung"
      ],
      quiz: [
        { t: "mc", q: "Was ist „Schatten-KI“?", o: ["KI im Dunkelmodus", "Mitarbeitende nutzen ohne Freigabe private KI-Konten für Firmendaten", "Ein Bildmodell", "Eine Sicherheitssoftware"], a: 1, e: "Ein Corporate LLM schafft eine erlaubte Alternative." },
        { t: "match", q: "Ordne zu.", p: [["OpenWebUI", "Selbst gehostete Chat-Oberfläche"], ["Ollama", "Lokale Modelle auf eigener Hardware ausführen"], ["Cloud-API", "Modell beim Anbieter, per Vertrag genutzt"]], e: "Oberfläche und Modell sind getrennte Bausteine." },
        { t: "tf", q: "Lokale Modelle sind immer leistungsfähiger als Cloud-Modelle.", a: false, e: "Meist ist es umgekehrt. Der Vorteil lokaler Modelle ist der Datenschutz." }
      ],
      practice: {
        task: "Welche deiner Daten würdest du nur lokal analysieren lassen und welche dürften in eine Cloud-KI? Nenne je 2.",
        hint: "Denk an Personenbezug und Vertraulichkeit.",
        solution: "Lokal: Gesundheitsunterlagen, Mitgliederliste mit Bankdaten. Cloud (mit seriösem Anbieter): Programmhefttexte, öffentliche Ausschreibungen."
      }
    },
    {
      id: "z4l3",
      title: "Vertrieb automatisieren",
      icon: "📈",
      lesson: `
<p>Im Vertrieb gibt es viele wiederkehrende Abläufe. Hier spielt KI ihre Stärken aus.</p>
<h4>Lead-Qualifizierung</h4>
<p>Ein <b>Lead</b> ist eine Anfrage oder ein potenzieller Kunde. KI kann eingehende Anfragen automatisch bewerten: Passt das Budget? Ist das Datum frei? Wie dringend ist es? Dann wird sortiert in heiß, warm und kalt.</p>
<h4>Automatisierte Angebote</h4>
<div class="ex">Anfrage per Formular → KI liest die Wünsche (Datum, Besetzung, Ort) → prüft den Kalender → berechnet den Preis nach deiner Preisliste → erstellt ein Angebot als PDF → <b>du prüfst und gibst frei</b> → Versand.</div>
<h4>Outbound-Mails</h4>
<p><b>Outbound</b> heißt: Du gehst aktiv auf mögliche Kunden zu. KI kann Mails personalisieren, z. B. mit Bezug auf die letzte Konzertsaison des Veranstalters.</p>
<div class="tip">Achtung, Recht: Werbe-Mails ohne Einwilligung sind in Deutschland bei Privatpersonen verboten und auch gegenüber Firmen nur eingeschränkt erlaubt (UWG). Massenhaft unpersönliche KI-Mails schaden zudem dem Ruf.</div>
<h4>Reporting</h4>
<p>Automatische Wochenberichte: Anfragen, Angebote, Zusagen und Umsatz, als Nachricht in Slack oder per Mail.</p>`,
      keys: [
        "Lead = potenzieller Kunde; KI bewertet und sortiert",
        "Angebote automatisch erstellen, Mensch gibt frei",
        "Outbound: Recht (UWG) beachten"
      ],
      quiz: [
        { t: "mc", q: "Was ist ein Lead?", o: ["Ein Bleistift", "Eine Anfrage oder ein potenzieller Kunde", "Ein KI-Modell", "Ein Vertrag"], a: 1, e: "Leads werden qualifiziert, also bewertet." },
        { t: "order", q: "Bringe den Angebotsprozess in die richtige Reihenfolge.", o: ["Anfrage kommt per Formular", "KI liest Wünsche und prüft Kalender", "KI erstellt Angebot nach Preisliste", "Mensch prüft und gibt frei", "Versand"], e: "Der Mensch bleibt vor dem Versand in der Schleife." },
        { t: "tf", q: "Werbe-Mails an Privatpersonen ohne Einwilligung sind in Deutschland erlaubt, wenn eine KI sie schreibt.", a: false, e: "Die Regeln gelten unabhängig davon, wer die Mail schreibt." }
      ],
      practice: {
        task: "Entwirf Kriterien, nach denen eine KI Konzertanfragen in heiß, warm und kalt sortieren soll.",
        hint: "Budget, Termin, Ort, Vollständigkeit der Anfrage …",
        solution: "Heiß: Budget passt, Termin frei, alle Infos da. Warm: Termin frei, Budget unklar. Kalt: Budget deutlich zu niedrig oder Termin belegt. Zusatz: unvollständige Anfragen bekommen automatisch eine Rückfrage."
      }
    },
    {
      id: "z4l4",
      title: "DSGVO und KI",
      icon: "🔒",
      lesson: `
<p>Die <b>DSGVO</b> (Datenschutz-Grundverordnung) gilt immer, wenn <b>personenbezogene Daten</b> verarbeitet werden, also alles, was sich einer Person zuordnen lässt: Name, Mail, Telefonnummer, Stimme, Foto.</p>
<h4>Die wichtigsten Fragen</h4>
<ul>
<li><b>Rechtsgrundlage:</b> Darf ich die Daten verarbeiten, z. B. mit Einwilligung, zur Vertragserfüllung oder aus berechtigtem Interesse?</li>
<li><b>Datenminimierung:</b> Nur die Daten an die KI geben, die wirklich nötig sind. Oft lassen sich Namen schwärzen oder ersetzen (<b>Pseudonymisierung</b>).</li>
<li><b>AVV:</b> Mit jedem Dienstleister, der Daten in deinem Auftrag verarbeitet, brauchst du einen <b>Auftragsverarbeitungsvertrag</b>.</li>
<li><b>Serverstandort:</b> Daten in der EU sind einfacher. Für die USA braucht es zusätzliche Garantien, z. B. eine Zertifizierung nach dem EU-US Data Privacy Framework.</li>
<li><b>Training:</b> Werden meine Eingaben zum Training genutzt? Bei Business-Tarifen und APIs meist nicht. Das muss man aber prüfen.</li>
<li><b>Transparenz:</b> Betroffene informieren, z. B. in der Datenschutzerklärung.</li>
</ul>
<div class="tip">Keine Gesundheitsdaten, Bankdaten oder vertraulichen Personalinfos in private KI-Konten kopieren!</div>
<p><i>Hinweis: Diese App ersetzt keine Rechtsberatung. Bei konkreten Projekten Datenschutzbeauftragte oder Fachanwälte fragen.</i></p>`,
      keys: [
        "DSGVO gilt bei personenbezogenen Daten",
        "Rechtsgrundlage, Datenminimierung, AVV",
        "Serverstandort und Trainingsnutzung prüfen"
      ],
      quiz: [
        { t: "mc", q: "Was ist ein AVV?", o: ["Ein KI-Modell", "Ein Auftragsverarbeitungsvertrag mit einem Dienstleister", "Eine Abkürzung für Automatisierung", "Ein Verein"], a: 1, e: "Pflicht, wenn ein Dienstleister personenbezogene Daten für dich verarbeitet." },
        { t: "tf", q: "Eine Stimmaufnahme kann ein personenbezogenes Datum sein.", a: true, e: "Wichtig für Voice Agents in Zone 5." },
        { t: "mc", q: "Was bedeutet Datenminimierung?", o: ["Daten komprimieren", "Nur die nötigsten Daten verarbeiten", "Daten löschen, sobald die KI antwortet", "Kleine Schriftgröße"], a: 1, e: "Z. B. Namen vor dem Hochladen ersetzen." },
        { t: "tf", q: "Bei Business-Tarifen sollte man trotzdem prüfen, ob Eingaben zum Training genutzt werden.", a: true, e: "Immer in den Bedingungen nachlesen." }
      ],
      practice: {
        task: "Du willst Mitgliederanfragen per KI beantworten lassen. Schreibe eine Datenschutz-Checkliste mit 4 Punkten.",
        hint: "Rechtsgrundlage, Anbieter, Daten, Information.",
        solution: "1) Anbieter mit AVV und EU-Servern oder gleichwertigen Garantien wählen. 2) Training mit unseren Daten ausschließen. 3) Nur nötige Daten übergeben, Bankdaten nie. 4) Datenschutzerklärung ergänzen und Mitglieder informieren."
      }
    },
    {
      id: "z4l5",
      title: "Der EU AI Act",
      icon: "🇪🇺",
      lesson: `
<p>Der <b>EU AI Act</b> (KI-Verordnung) ist das erste umfassende KI-Gesetz der Welt. Er ist seit August 2024 in Kraft und wird <b>schrittweise</b> anwendbar. Er ordnet KI nach <b>Risiko</b>:</p>
<ul>
<li><b>Unannehmbares Risiko, verboten:</b> z. B. Social Scoring durch Behörden, manipulative KI oder Emotionserkennung am Arbeitsplatz. Diese Verbote gelten seit Februar 2025.</li>
<li><b>Hohes Risiko, strenge Pflichten:</b> z. B. KI bei Bewerberauswahl, Kreditvergabe oder in der Bildung. Hier braucht es Risikomanagement, Dokumentation und menschliche Aufsicht.</li>
<li><b>Begrenztes Risiko, Transparenz:</b> z. B. Chatbots und KI-generierte Inhalte. Menschen müssen erkennen können, dass sie mit KI sprechen oder dass ein Inhalt künstlich erzeugt ist.</li>
<li><b>Minimales Risiko:</b> z. B. Spamfilter. Keine besonderen Pflichten.</li>
</ul>
<h4>KI-Kompetenz</h4>
<p>Seit Februar 2025 sollen Unternehmen, die KI einsetzen, dafür sorgen, dass ihre Leute <b>ausreichend KI-Kompetenz</b> haben (Art. 4). Genau dafür gibt es Schulungen wie den KI-Manager.</p>
<h4>Aktueller Zeitplan (Stand Herbst 2026)</h4>
<p>Mit dem <b>„Digital Omnibus“</b> hat die EU 2026 einige Fristen verschoben:</p>
<ul>
<li>Pflichten für Anbieter großer KI-Modelle (GPAI): seit August 2025</li>
<li>Kennzeichnung KI-generierter Inhalte (Wasserzeichen): ab 2. Dezember 2026</li>
<li>Hochrisiko-Systeme (Anhang III): ab 2. Dezember 2027</li>
<li>Hochrisiko-KI in regulierten Produkten: ab August 2028</li>
</ul>
<div class="tip">Merksatz: Je höher das Risiko für Menschen, desto strenger die Regeln.</div>`,
      keys: [
        "Risikopyramide: verboten → hoch → begrenzt → minimal",
        "Chatbots müssen sich als KI zu erkennen geben",
        "KI-Kompetenzpflicht seit Feb. 2025",
        "Hochrisiko-Pflichten auf Dez. 2027 verschoben"
      ],
      quiz: [
        { t: "order", q: "Ordne die Risikoklassen von streng nach locker.", o: ["Unannehmbares Risiko (verboten)", "Hohes Risiko", "Begrenztes Risiko", "Minimales Risiko"], e: "Je höher das Risiko, desto strenger die Regeln." },
        { t: "match", q: "Ordne das Beispiel der Risikoklasse zu.", p: [["Social Scoring durch Behörden", "Verboten"], ["KI sortiert Bewerbungen", "Hohes Risiko"], ["Website-Chatbot", "Begrenztes Risiko"], ["Spamfilter", "Minimales Risiko"]], e: "Bewerberauswahl ist ein klassischer Hochrisiko-Fall." },
        { t: "tf", q: "Ein Chatbot muss erkennbar machen, dass man mit einer KI spricht.", a: true, e: "Transparenzpflicht." },
        { t: "mc", q: "Was hat der „Digital Omnibus“ 2026 am AI Act geändert?", o: ["Er hat den AI Act abgeschafft", "Er hat u. a. die Hochrisiko-Pflichten auf Dezember 2027 verschoben", "Er hat alle KI verboten", "Nichts"], a: 1, e: "Der AI Act gilt weiter, nur der Zeitplan wurde angepasst." }
      ],
      practice: {
        task: "Ordne drei KI-Ideen aus deinem Umfeld einer Risikoklasse zu.",
        hint: "Geht es um wichtige Entscheidungen über Menschen? Spricht die KI mit Menschen?",
        solution: "Beispiel: KI-Vorauswahl von Bewerbern für eine Akademie → hohes Risiko. FAQ-Chatbot auf der Vereinsseite → begrenztes Risiko (Hinweis „Ich bin eine KI“). KI sortiert Noten-PDFs → minimales Risiko."
      }
    }
  ]
});

(window.ZONES = window.ZONES || []).push({
  id: "z5",
  title: "Voice Agents",
  subtitle: "KI, die telefoniert",
  icon: "📞",
  color: "#ec4899",
  badge: { name: "Stimmgewaltig", icon: "🎙️" },
  levels: [
    {
      id: "z5l1",
      title: "Wie ein Voice Agent funktioniert",
      icon: "🗣️",
      lesson: `
<p>Ein <b>Voice Agent</b> ist ein KI-Agent, der <b>per Sprache</b> kommuniziert, meist am Telefon. Er nimmt Anrufe an, beantwortet Fragen, bucht Termine oder ruft selbst an.</p>
<h4>Die drei Bausteine</h4>
<ol>
<li><b>STT</b> (Speech-to-Text): Die Stimme des Anrufers wird in Text umgewandelt.</li>
<li><b>LLM:</b> Das Sprachmodell versteht den Text, entscheidet und formuliert eine Antwort. Bei Bedarf ruft es Tools auf, z. B. den Kalender.</li>
<li><b>TTS</b> (Text-to-Speech): Die Antwort wird in natürliche Sprache umgewandelt, z. B. mit ElevenLabs.</li>
</ol>
<p>Daneben gibt es neuere <b>Speech-to-Speech</b>-Modelle, die Audio direkt verarbeiten.</p>
<h4>Die große Herausforderung: Latenz</h4>
<p><b>Latenz</b> ist die Verzögerung zwischen Frage und Antwort. Im Telefonat wirken schon über 1 Sekunde Pause unnatürlich. Deshalb sind schnelle Modelle und gute Plattformen entscheidend.</p>
<p>Weitere Feinheiten: <b>Unterbrechungen</b> (der Anrufer redet dazwischen), <b>Hintergrundgeräusche</b>, Dialekte und das Erkennen, wann jemand fertig gesprochen hat.</p>
<div class="tip">Ein Voice Agent ist im Kern dasselbe wie ein Chatbot, nur mit Ohren (STT) und Mund (TTS).</div>`,
      keys: [
        "STT → LLM → TTS",
        "Latenz ist der kritische Faktor",
        "Unterbrechungen und Geräusche meistern"
      ],
      quiz: [
        { t: "order", q: "Bringe den Ablauf eines Voice Agents in die richtige Reihenfolge.", o: ["Anrufer spricht", "STT wandelt Sprache in Text", "LLM versteht und formuliert Antwort", "TTS wandelt Antwort in Sprache"], e: "Ohren → Gehirn → Mund." },
        { t: "mc", q: "Was ist Latenz?", o: ["Die Lautstärke", "Die Verzögerung zwischen Frage und Antwort", "Der Preis pro Minute", "Die Stimmfarbe"], a: 1, e: "Zu lange Pausen wirken unnatürlich." },
        { t: "match", q: "Ordne zu.", p: [["STT", "Sprache → Text"], ["TTS", "Text → Sprache"], ["LLM", "Verstehen und Antworten"]], e: "Die drei Grundbausteine." }
      ],
      practice: {
        task: "Für welchen Anruf-Typ in deinem Umfeld wäre ein Voice Agent sinnvoll und wo wäre er unpassend?",
        hint: "Routineanfragen vs. heikle Gespräche.",
        solution: "Sinnvoll: Kartenvorverkauf-Hotline (Termine, Preise, Anfahrt). Unpassend: Absage eines Engagements oder sensible Personalgespräche, dort gehört ein Mensch ans Telefon."
      }
    },
    {
      id: "z5l2",
      title: "Plattformen und Telefonie",
      icon: "📡",
      lesson: `
<p>Niemand baut Voice Agents komplett von null. Es gibt Plattformen, die die Bausteine zusammenfügen.</p>
<h4>Voice-Plattformen</h4>
<ul>
<li><b>Vapi:</b> Sehr flexibel, für Entwickler und Automatisierer. Modelle, Stimmen und Tools lassen sich frei kombinieren.</li>
<li><b>ElevenLabs:</b> Bekannt für sehr natürliche Stimmen, bietet auch komplette Conversational-AI-Agenten.</li>
<li><b>Fonio:</b> Lösung aus dem deutschsprachigen Raum, einfach für Unternehmen, Fokus auf DSGVO.</li>
</ul>
<h4>Telefonie-Anbieter</h4>
<p>Damit der Agent eine echte Rufnummer hat, braucht es einen Telefonie-Anbieter wie <b>Twilio</b> oder <b>Telnyx</b>. Dort kauft man Rufnummern und verbindet sie mit der Plattform.</p>
<ul>
<li><b>SIP</b> (Session Initiation Protocol): Der technische Standard für Internet-Telefonie. Über einen <b>SIP-Trunk</b> lässt sich auch eine bestehende Firmen-Telefonanlage anbinden.</li>
<li><b>Routing:</b> Regeln, wohin ein Anruf geht, z. B. „Bei Stichwort ‚Reklamation‘ an einen Menschen weiterleiten“.</li>
</ul>
<h4>Daten und Logik</h4>
<p><b>Supabase</b> (Datenbank) speichert Kunden und Gesprächsdaten. <b>Make oder n8n</b> verbinden den Agenten mit Kalender, CRM und Mail.</p>`,
      keys: [
        "Plattformen: Vapi, ElevenLabs, Fonio",
        "Telefonie: Twilio, Telnyx, Rufnummern",
        "SIP = Standard für Internet-Telefonie; Routing = Weiterleitungsregeln"
      ],
      quiz: [
        { t: "match", q: "Ordne zu.", p: [["Twilio / Telnyx", "Rufnummern und Telefonie"], ["ElevenLabs", "Natürliche KI-Stimmen"], ["Supabase", "Datenbank"], ["SIP", "Standard für Internet-Telefonie"]], e: "Ein Voice Agent ist ein Zusammenspiel vieler Dienste." },
        { t: "mc", q: "Was regelt das Routing?", o: ["Die Stimmfarbe", "Wohin ein Anruf weitergeleitet wird", "Den Preis", "Die Sprache"], a: 1, e: "Z. B. Übergabe an einen Menschen." },
        { t: "tf", q: "Über einen SIP-Trunk kann eine bestehende Telefonanlage angebunden werden.", a: true, e: "So muss die Firma keine neue Nummer kommunizieren." }
      ],
      practice: {
        task: "Skizziere den Technik-Stack für einen Vorverkaufs-Voice-Agent: Welcher Dienst übernimmt welche Aufgabe?",
        hint: "Nummer, Plattform, Stimme, Daten, Automation.",
        solution: "Rufnummer: Telnyx. Plattform: Vapi. Stimme: ElevenLabs. Daten: Supabase (Veranstaltungen, Kontingente). Automation: n8n schickt die Buchungsbestätigung per Mail."
      }
    },
    {
      id: "z5l3",
      title: "Inbound, Outbound und Planung",
      icon: "🔀",
      lesson: `
<h4>Inbound</h4>
<p><b>Eingehende</b> Anrufe: Der Kunde ruft an. Typisch sind Hotlines, Terminbuchung, Bestellannahme oder Erstberatung. Vorteil: Rund um die Uhr erreichbar, keine Warteschleife.</p>
<h4>Outbound</h4>
<p><b>Ausgehende</b> Anrufe: Der Agent ruft an. Typisch sind Terminerinnerungen, Feedback-Umfragen oder Rückrufe. Rechtlich heikler: Werbeanrufe bei Privatpersonen brauchen in Deutschland eine <b>ausdrückliche vorherige Einwilligung</b>.</p>
<h4>Planung mit Lastenheft</h4>
<p>Wie in Zone 1: Erst planen, dann bauen. Für Voice Agents besonders wichtig:</p>
<ul>
<li><b>Gesprächsziel:</b> Was soll am Ende des Anrufs erreicht sein?</li>
<li><b>Gesprächsfluss:</b> Begrüßung → Anliegen erfragen → Daten sammeln → Aktion → Abschluss.</li>
<li><b>Prozessvisualisierung:</b> Den Ablauf als Flussdiagramm mit allen Verzweigungen zeichnen.</li>
<li><b>Sonderfälle:</b> Was, wenn der Anrufer wütend ist, etwas Unbekanntes fragt oder einen Menschen verlangt?</li>
<li><b>Persönlichkeit:</b> Name, Tonfall, Sprechtempo, Du oder Sie.</li>
</ul>
<div class="tip">Der Agent sollte sich am Anfang als KI vorstellen. Das ist ehrlich und durch den AI Act ohnehin Pflicht.</div>`,
      keys: [
        "Inbound = eingehend, Outbound = ausgehend",
        "Outbound-Werbung an Privatpersonen nur mit Einwilligung",
        "Gesprächsfluss und Sonderfälle vorher planen"
      ],
      quiz: [
        { t: "mc", q: "Eine Arztpraxis lässt Patienten ihre Termine per KI-Telefon buchen. Das ist …", o: ["Outbound", "Inbound", "Beides nicht", "Ein SQL-Bot"], a: 1, e: "Der Patient ruft an, also eingehend." },
        { t: "order", q: "Bringe den typischen Gesprächsfluss in die richtige Reihenfolge.", o: ["Begrüßung (als KI vorstellen)", "Anliegen erfragen", "Daten sammeln", "Aktion ausführen (z. B. buchen)", "Abschluss und Verabschiedung"], e: "Ein klarer Ablauf macht den Agenten zuverlässig." },
        { t: "tf", q: "Werbeanrufe bei Privatpersonen sind in Deutschland ohne Einwilligung erlaubt.", a: false, e: "Es braucht eine ausdrückliche vorherige Einwilligung." }
      ],
      practice: {
        task: "Schreibe die Begrüßung und die erste Frage für einen Inbound-Agenten deines Ensembles.",
        hint: "Als KI vorstellen, freundlich, Anliegen erfragen.",
        solution: "„Guten Tag, hier ist Lina, die digitale Assistentin unseres Ensembles. Ich bin eine KI und helfe Ihnen gern bei Buchungsanfragen und Fragen zu unseren Konzerten. Worum geht es bei Ihnen?“"
      }
    },
    {
      id: "z5l4",
      title: "Tools: Termine, Kundenerkennung, Reports",
      icon: "🧰",
      lesson: `
<p>Richtig nützlich wird ein Voice Agent erst, wenn er <b>handeln</b> kann. Dafür bekommt er <b>Tools</b> (auch <b>Function Calling</b> genannt): Funktionen, die er während des Gesprächs aufrufen darf.</p>
<h4>Wichtige Tools</h4>
<ul>
<li><b>Terminbuchung:</b> Freie Slots im Kalender abfragen, z. B. per Calendly oder Google Calendar, und den Termin eintragen.</li>
<li><b>Kundenerkennung:</b> Anhand der Telefonnummer in der Datenbank nachsehen: „Willkommen zurück, Frau Müller!“</li>
<li><b>Weiterleitung:</b> An einen Menschen übergeben.</li>
<li><b>Daten speichern:</b> Anliegen ins CRM schreiben.</li>
</ul>
<h4>End-of-Call-Report</h4>
<p>Nach jedem Anruf schickt die Plattform automatisch einen <b>Bericht</b> per Webhook: Zusammenfassung, Transkript, Dauer, Ergebnis. Den kann n8n z. B. als Ticket anlegen oder an das Team schicken.</p>
<h4>Sicherheit: HMAC</h4>
<p>Wie weißt du, dass ein Webhook wirklich von deiner Plattform kommt und nicht von einem Angreifer? Mit einer <b>HMAC-Signatur</b>: Absender und Empfänger teilen ein geheimes Passwort. Jede Nachricht bekommt damit eine Art Siegel. Stimmt das Siegel nicht, wird die Nachricht verworfen.</p>
<h4>Cloud-Bausteine</h4>
<p>Bei großen Systemen kommen Dienste wie <b>AWS Lambda</b> (kleine Funktionen in der Cloud), <b>S3</b> (Dateispeicher, z. B. für Aufnahmen) und <b>SQS</b> (Warteschlange, damit bei vielen Anrufen nichts verloren geht) dazu.</p>`,
      keys: [
        "Tools/Function Calling = Agent kann handeln",
        "End-of-Call-Report per Webhook",
        "HMAC = Siegel, das die Echtheit eines Webhooks prüft"
      ],
      quiz: [
        { t: "mc", q: "Wozu dient eine HMAC-Signatur bei Webhooks?", o: ["Sie macht die Nachricht schneller", "Sie beweist, dass die Nachricht vom echten Absender stammt und unverändert ist", "Sie übersetzt die Nachricht", "Sie komprimiert Audio"], a: 1, e: "Ein gemeinsames Geheimnis erzeugt ein Siegel." },
        { t: "match", q: "Ordne zu.", p: [["End-of-Call-Report", "Zusammenfassung nach dem Anruf"], ["Function Calling", "Agent ruft Tools auf"], ["S3", "Dateispeicher in der Cloud"], ["SQS", "Warteschlange für Nachrichten"]], e: "Diese Bausteine machen Voice Agents produktionsreif." },
        { t: "tf", q: "Ein Agent kann anhand der Telefonnummer erkennen, ob jemand schon Kunde ist.", a: true, e: "Kundenerkennung per Datenbank-Abfrage." }
      ],
      practice: {
        task: "Welche 3 Tools bräuchte ein Agent, der Probentermine mit Musikern abstimmt?",
        hint: "Was muss er nachsehen, eintragen und mitteilen?",
        solution: "1) Kalender abfragen (freie Termine). 2) Termin eintragen. 3) Bestätigung per SMS oder Mail senden. Optional: 4) Bei Konflikt an den Ensembleleiter weiterleiten."
      }
    },
    {
      id: "z5l5",
      title: "Datenschutz bei Voice Agents",
      icon: "🛡️",
      lesson: `
<p>Stimmen und Gespräche sind <b>personenbezogene Daten</b>. Deshalb gelten bei Voice Agents besonders strenge Regeln.</p>
<h4>Checkliste</h4>
<ul>
<li><b>Transparenz:</b> Zu Beginn sagen, dass eine KI spricht und ob aufgezeichnet wird.</li>
<li><b>Aufzeichnung:</b> Gespräche nur mit Einwilligung aufnehmen. Heimliche Aufnahmen sind in Deutschland sogar strafbar (§ 201 StGB).</li>
<li><b>AVV:</b> Mit allen Dienstleistern abschließen: Voice-Plattform, Telefonie, Stimm-Anbieter, Datenbank.</li>
<li><b>Speicherdauer:</b> Festlegen, wie lange Transkripte und Aufnahmen gespeichert werden, und danach löschen.</li>
<li><b>Serverstandort:</b> EU bevorzugen, sonst Garantien prüfen.</li>
<li><b>Sensible Daten:</b> Keine Gesundheits- oder Kontodaten abfragen, wenn es nicht unbedingt nötig ist.</li>
<li><b>Outbound:</b> Werbeanrufe nur mit vorheriger Einwilligung.</li>
<li><b>Stimmklone:</b> Die Stimme einer echten Person nur mit deren ausdrücklicher Zustimmung nachbilden.</li>
</ul>
<div class="tip">Ein guter Voice Agent ist nicht nur technisch sauber, sondern auch <b>vertrauenswürdig</b>. Das ist am Ende ein Wettbewerbsvorteil.</div>`,
      keys: [
        "Als KI vorstellen, Aufzeichnung nur mit Einwilligung",
        "AVV mit allen Dienstleistern",
        "Speicherdauer festlegen, Stimmklone nur mit Zustimmung"
      ],
      quiz: [
        { t: "tf", q: "Ein Voice Agent darf Gespräche heimlich aufzeichnen, solange die Daten in der EU bleiben.", a: false, e: "Aufzeichnung braucht Einwilligung. Heimliche Aufnahmen sind strafbar." },
        { t: "mc", q: "Mit wem braucht man einen AVV?", o: ["Nur mit dem Telefonanbieter", "Mit allen Dienstleistern, die personenbezogene Daten verarbeiten", "Mit niemandem", "Nur mit Kunden"], a: 1, e: "Plattform, Telefonie, Stimme, Datenbank …" },
        { t: "tf", q: "Die Stimme einer echten Person darf man ohne ihre Zustimmung klonen.", a: false, e: "Das braucht eine ausdrückliche Zustimmung." }
      ],
      practice: {
        task: "Schreibe einen datenschutzfreundlichen Gesprächseinstieg mit Hinweis auf KI und Aufzeichnung.",
        hint: "KI-Hinweis + Aufzeichnung + Wahlmöglichkeit.",
        solution: "„Hallo, Sie sprechen mit der KI-Assistentin des Vereins. Zur Qualitätssicherung würde ich das Gespräch gern aufzeichnen. Sind Sie damit einverstanden? Sie können auch jederzeit ‚Mitarbeiter‘ sagen, dann verbinde ich Sie.“"
      }
    }
  ]
});

(window.ZONES = window.ZONES || []).push({
  id: "z6",
  title: "Ausblick und Business",
  subtitle: "Zukunft, Ethik und Geld verdienen mit KI",
  icon: "🔭",
  color: "#14b8a6",
  badge: { name: "Visionär", icon: "🌅" },
  levels: [
    {
      id: "z6l1",
      title: "Zukunft der Arbeit und Ethik",
      icon: "🌍",
      lesson: `
<p>Im KI-Manager-Kurs kommen Forschende zu Wort, z. B. aus den Bereichen <b>Deep Learning</b>, <b>Digital Engineering</b>, <b>Maschinenethik</b> und <b>Zukunftsforschung</b>. Hier sind die großen Themen, um die es dabei geht.</p>
<h4>Arbeitswelt</h4>
<ul>
<li>KI verändert vor allem <b>Aufgaben</b>, weniger ganze Berufe auf einen Schlag.</li>
<li>Gefragt sind Menschen, die <b>Fachwissen und KI-Kompetenz verbinden</b>.</li>
<li>Lebenslanges Lernen wird Normalität.</li>
</ul>
<h4>Ethische Fragen</h4>
<ul>
<li><b>Verantwortung:</b> Wer haftet, wenn eine KI-Entscheidung Schaden anrichtet?</li>
<li><b>Fairness:</b> KI lernt aus Daten. Enthalten diese Vorurteile (<b>Bias</b>), übernimmt sie diese.</li>
<li><b>Transparenz:</b> Menschen sollen wissen, wann KI im Spiel ist.</li>
<li><b>Autonomie:</b> Wie viel Entscheidungsfreiheit geben wir Maschinen?</li>
<li><b>Urheberrecht und Kreativität:</b> Besonders relevant für Kunst und Musik.</li>
</ul>
<h4>Technischer Ausblick</h4>
<p>Der Trend geht von Chatbots zu <b>Agenten</b>, die eigenständig arbeiten, und zu <b>Multi-Agenten-Systemen</b>, in denen mehrere spezialisierte Agenten zusammenarbeiten. Genau dorthin führt dich Zone 7.</p>`,
      keys: [
        "KI verändert Aufgaben mehr als ganze Berufe",
        "Ethik: Verantwortung, Bias, Transparenz, Autonomie",
        "Trend: von Chatbots zu (Multi-)Agenten"
      ],
      quiz: [
        { t: "mc", q: "Was ist Bias bei KI?", o: ["Ein Programmierfehler", "Verzerrung durch Vorurteile in den Trainingsdaten", "Eine Datenbank", "Ein Stromsparmodus"], a: 1, e: "KI übernimmt Muster aus den Daten, auch unfaire." },
        { t: "tf", q: "Der Trend geht von einfachen Chatbots hin zu eigenständig arbeitenden Agenten.", a: true, e: "Claude Code ist ein Beispiel dafür." },
        { t: "mc", q: "Welche Fähigkeit wird laut Ausblick besonders gefragt sein?", o: ["Nur Programmieren", "Fachwissen mit KI-Kompetenz verbinden", "Gar keine", "Nur Englisch"], a: 1, e: "Musiker + KI-Kompetenz = einzigartige Kombination." }
      ],
      practice: {
        task: "Welche ethische Frage zu KI betrifft deinen Berufsbereich (Musik, Kultur, Lehre) am stärksten? Begründe in 2 Sätzen.",
        hint: "Urheberrecht, Authentizität, Bewertung von Leistungen …",
        solution: "Beispiel: „Urheberrecht. Wenn KI Musik im Stil echter Komponisten erzeugt, stellt sich die Frage, wem das Werk gehört und ob die Originalkünstler fair beteiligt werden.“"
      }
    },
    {
      id: "z6l2",
      title: "Anstellung oder Selbstständigkeit",
      icon: "💼",
      lesson: `
<p>Mit KI-Kompetenz eröffnen sich zwei Wege:</p>
<h4>Angestellt</h4>
<ul>
<li>Als KI-Manager, KI-Beauftragter oder Automatisierungsexperte im Unternehmen</li>
<li>Oder: im bisherigen Beruf mit KI-Know-how als Zusatzqualifikation</li>
<li>Vorteile: Sicherheit, Teamarbeit, Zugang zu großen Projekten</li>
</ul>
<h4>Selbstständig</h4>
<p>Typische <b>KI-Geschäftsmodelle</b>:</p>
<ul>
<li><b>Agentur:</b> Automationen, Chatbots und Voice Agents für Kunden bauen</li>
<li><b>Beratung:</b> Firmen bei Strategie und Einführung begleiten</li>
<li><b>Schulungen und Workshops:</b> KI-Kompetenz vermitteln, die der AI Act ohnehin fordert</li>
<li><b>Eigene Produkte:</b> Vorlagen, Tools, Apps oder Online-Kurse</li>
<li><b>Wartungsverträge:</b> Laufende Betreuung gebauter Lösungen, also wiederkehrender Umsatz</li>
</ul>
<h4>Spezialisierung</h4>
<p>Statt „Ich mache alles mit KI“ lieber ein klares Feld wählen, z. B. nach <b>Branche</b> (Kulturbetriebe, Arztpraxen), nach <b>Technologie</b> (Voice Agents), nach <b>Prozess</b> (Vertrieb, Buchhaltung) oder nach <b>Zielgruppe</b> (Vereine, Selbstständige).</p>
<div class="tip">Deine Nische kann deine Herkunft sein: Wer selbst Musiker ist, versteht Kulturbetriebe besser als jede allgemeine Agentur.</div>`,
      keys: [
        "Angestellt: KI-Manager oder KI als Zusatzqualifikation",
        "Selbstständig: Agentur, Beratung, Schulung, Produkte, Wartung",
        "Spezialisieren: Branche, Technologie, Prozess, Zielgruppe"
      ],
      quiz: [
        { t: "match", q: "Ordne das Geschäftsmodell zu.", p: [["Agentur", "Lösungen für Kunden bauen"], ["Schulung", "KI-Kompetenz vermitteln"], ["Wartungsvertrag", "Laufende Betreuung, wiederkehrender Umsatz"], ["Eigenes Produkt", "Vorlagen oder Apps verkaufen"]], e: "Viele kombinieren mehrere Modelle." },
        { t: "tf", q: "„Ich mache alles mit KI für alle“ ist eine starke Positionierung.", a: false, e: "Spezialisierung macht dich sichtbar und glaubwürdig." },
        { t: "mc", q: "Warum sind Wartungsverträge attraktiv?", o: ["Sie sind einmalig", "Sie bringen wiederkehrenden, planbaren Umsatz", "Sie sind kostenlos", "Sie erfordern keine Arbeit"], a: 1, e: "Planbarkeit ist für Selbstständige Gold wert." }
      ],
      practice: {
        task: "Formuliere eine mögliche Nische für dich, die Musik und KI verbindet.",
        hint: "Branche + Problem + Lösung.",
        solution: "Beispiel: „Ich helfe Orchestern und Ensembles, ihre Disposition, Probenplanung und Kommunikation mit KI zu automatisieren, von Musikern für Musiker.“"
      }
    },
    {
      id: "z6l3",
      title: "Angebot und Kundengewinnung",
      icon: "🤝",
      lesson: `
<h4>Ein gutes Angebot</h4>
<p>Kunden kaufen keine Technik, sondern <b>Ergebnisse</b>. Also nicht „Ich baue Ihnen einen n8n-Workflow“, sondern „Sie sparen 10 Stunden pro Woche bei der Anfragenbearbeitung“.</p>
<ul>
<li><b>Problem</b> klar benennen</li>
<li><b>Ergebnis</b> konkret machen, am besten in Zeit oder Geld</li>
<li><b>Ablauf</b> zeigen: Analyse → Pilot → Umsetzung → Betreuung</li>
<li><b>Preis</b> am Wert orientieren, nicht nur an Stunden</li>
</ul>
<h4>Kunden gewinnen</h4>
<ul>
<li><b>Netzwerk:</b> Die ersten Kunden kommen fast immer aus dem eigenen Umfeld.</li>
<li><b>Sichtbarkeit:</b> Fallbeispiele, Vorher-nachher-Vergleiche, Beiträge auf LinkedIn.</li>
<li><b>Kostenlose Erstanalyse:</b> 30 Minuten Gespräch, in dem du 2–3 Automationsideen aufzeigst.</li>
<li><b>Pilotprojekt:</b> Klein und günstig starten, Ergebnis messen und dann ausbauen.</li>
<li><b>Empfehlungen:</b> Zufriedene Kunden aktiv um Weiterempfehlung bitten.</li>
</ul>
<h4>Fallstudien</h4>
<p>Dokumentiere jedes Projekt als kurze <b>Fallstudie</b>: Ausgangslage → Lösung → messbares Ergebnis. Das ist dein stärkstes Verkaufsargument.</p>`,
      keys: [
        "Ergebnisse verkaufen, nicht Technik",
        "Problem → Ergebnis → Ablauf → Preis",
        "Netzwerk, Sichtbarkeit, Erstanalyse, Pilot, Fallstudien"
      ],
      quiz: [
        { t: "mc", q: "Welche Formulierung verkauft besser?", o: ["„Ich baue einen Workflow mit 12 Nodes.“", "„Sie beantworten Anfragen in 2 statt 24 Stunden und sparen 8 Stunden pro Woche.“", "„Ich nutze die neueste KI.“", "„Ich kann programmieren.“"], a: 1, e: "Ergebnis statt Technik." },
        { t: "order", q: "Bringe den typischen Projektablauf in die richtige Reihenfolge.", o: ["Kostenlose Erstanalyse", "Pilotprojekt", "Umsetzung", "Laufende Betreuung"], e: "Vertrauen schrittweise aufbauen." },
        { t: "tf", q: "Eine Fallstudie besteht aus Ausgangslage, Lösung und messbarem Ergebnis.", a: true, e: "Einfach, glaubwürdig, überzeugend." }
      ],
      practice: {
        task: "Schreibe einen Ein-Satz-Pitch für ein KI-Angebot, das auf Ergebnisse statt Technik setzt.",
        hint: "Für wen + welches Problem + welches messbare Ergebnis.",
        solution: "„Ich helfe Musikvereinen, ihre Mitgliederverwaltung so zu automatisieren, dass der Vorstand jede Woche 5 Stunden Ehrenamt-Zeit zurückgewinnt.“"
      }
    },
    {
      id: "z6l4",
      title: "Deinen Wert verhandeln",
      icon: "💶",
      lesson: `
<p>Ob Gehalt oder Honorar: KI-Kompetenz ist gefragt. Du solltest sie selbstbewusst einbringen.</p>
<h4>Vorbereitung</h4>
<ul>
<li><b>Marktwert recherchieren:</b> Was zahlen andere für vergleichbare Rollen oder Projekte?</li>
<li><b>Belege sammeln:</b> Welche Zeit oder welches Geld hast du durch KI eingespart? Zahlen überzeugen.</li>
<li><b>Ziel und Untergrenze festlegen:</b> Was willst du erreichen, und unter welchem Betrag sagst du nein?</li>
</ul>
<h4>Gesprächsaufbau</h4>
<ol>
<li><b>Wertschätzung:</b> Positiver Einstieg</li>
<li><b>Leistung zeigen:</b> „Durch die Automatisierung der Anfragen spart das Team 10 Stunden pro Woche.“</li>
<li><b>Konkrete Zahl nennen:</b> Wer zuerst eine Zahl nennt, setzt den Anker. Nenne eine begründete, eher hohe Zahl.</li>
<li><b>Schweigen aushalten:</b> Nach der Zahl nicht sofort relativieren.</li>
<li><b>Alternativen:</b> Wenn Geld nicht geht: Weiterbildung, Homeoffice, Titel, Budget für Tools.</li>
</ol>
<div class="tip">Übe das Gespräch mit KI: „Spiel einen skeptischen Orchesterdirektor. Ich verhandle mein Honorar für einen KI-Workshop. Gib mir danach Feedback.“</div>`,
      keys: [
        "Marktwert und Belege vorbereiten",
        "Anker setzen: begründete Zahl zuerst nennen",
        "Alternativen kennen; mit KI üben"
      ],
      quiz: [
        { t: "mc", q: "Was bedeutet „den Anker setzen“?", o: ["Das Gespräch beenden", "Als Erstes eine konkrete Zahl nennen, an der sich alles orientiert", "Einen Anwalt mitbringen", "Pause machen"], a: 1, e: "Die erste Zahl prägt den Verhandlungsrahmen." },
        { t: "tf", q: "Messbare Einsparungen durch deine KI-Arbeit sind starke Argumente in einer Verhandlung.", a: true, e: "Zahlen schlagen Behauptungen." },
        { t: "mc", q: "Wie kann KI dir bei der Vorbereitung helfen?", o: ["Gar nicht", "Als Rollenspiel-Gegenüber mit anschließendem Feedback", "Indem sie für dich verhandelt", "Indem sie das Gehalt festlegt"], a: 1, e: "Ein sicherer Übungsraum vor dem echten Gespräch." }
      ],
      practice: {
        task: "Schreibe einen Rollenspiel-Prompt, mit dem du eine Honorarverhandlung üben kannst.",
        hint: "Rolle der KI, Situation, dein Ziel, Feedback-Wunsch.",
        solution: "„Du bist Intendant eines Stadttheaters und eher sparsam. Ich biete einen halbtägigen KI-Workshop für dein Team an und will 900 € Honorar. Verhandle realistisch mit Einwänden. Nach 6 Runden: Gib mir Feedback zu Argumenten und Wirkung.“"
      }
    }
  ]
});
