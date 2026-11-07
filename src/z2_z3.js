(window.ZONES = window.ZONES || []).push({
  id: "z2",
  title: "Tools und Automation",
  subtitle: "Software verbinden und Abläufe automatisieren",
  icon: "⚙️",
  color: "#f59e0b",
  badge: { name: "Workflow-Weber", icon: "🕸️" },
  levels: [
    {
      id: "z2l1",
      title: "Das digitale Fundament",
      icon: "🧱",
      lesson: `
<p>Bevor KI etwas automatisieren kann, braucht es ein <b>digitales Fundament</b>: Daten und Abläufe müssen in Software liegen, nicht auf Papier oder im Kopf.</p>
<h4>Typische Bausteine</h4>
<ul>
<li><b>Büro-Suite:</b> Google Workspace oder Microsoft 365 für Mail, Kalender, Dokumente und Tabellen</li>
<li><b>Kommunikation:</b> Slack oder Teams statt endloser Mail-Ketten</li>
<li><b>Aufgaben:</b> Trello oder Asana als Boards mit Karten</li>
<li><b>Termine:</b> Calendly, damit andere selbst freie Slots buchen</li>
<li><b>Unterschriften:</b> DocuSign für digitale Verträge</li>
<li><b>Passwörter:</b> 1Password oder ein anderer Passwort-Manager, sicher und teilbar</li>
<li><b>Rechnungen:</b> z. B. Easybill</li>
<li><b>Formulare:</b> Jotform oder Google Forms</li>
<li><b>Design:</b> Canva</li>
</ul>
<h4>Warum das für KI wichtig ist</h4>
<p>Diese Programme nennt man <b>SaaS</b> (Software as a Service): Sie laufen im Browser und haben fast alle eine <b>API</b>. Dadurch kann man sie <b>miteinander verbinden</b>. Ein Formular löst eine Rechnung aus, die Rechnung erzeugt eine Slack-Nachricht und so weiter.</p>
<div class="tip">Ein Passwort-Manager ist Pflicht, sobald du mit API-Keys arbeitest. Die gehören nie in eine Mail oder ein offenes Dokument.</div>`,
      keys: [
        "Erst digitalisieren, dann automatisieren",
        "SaaS-Tools haben APIs und lassen sich verbinden",
        "Passwort-Manager für Zugangsdaten und Keys"
      ],
      quiz: [
        { t: "match", q: "Ordne das Tool seiner Aufgabe zu.", p: [["Calendly", "Terminbuchung"], ["DocuSign", "Digitale Unterschrift"], ["1Password", "Passwörter sicher speichern"], ["Trello", "Aufgaben-Board"]], e: "Jedes Tool löst ein klar umrissenes Problem." },
        { t: "mc", q: "Was bedeutet SaaS?", o: ["Software as a Service", "Secure and actual Software", "Save all and Sync", "System as a Server"], a: 0, e: "Software, die online als Dienst läuft, meist im Abo." },
        { t: "tf", q: "Abläufe, die nur auf Papier existieren, lassen sich leicht mit KI automatisieren.", a: false, e: "Erst digitalisieren, dann automatisieren." }
      ],
      practice: {
        task: "Liste deine aktuellen Tools auf (Mail, Kalender, Dateien, Kommunikation). Wo fehlt dir noch ein digitaler Baustein?",
        hint: "Wo arbeitest du noch mit Papier, Zetteln oder im Kopf?",
        solution: "Beispiel: Mail und Kalender: Google. Dateien: Dropbox. Kommunikation: WhatsApp. Fehlt: Passwort-Manager und ein gemeinsames Aufgaben-Board für den Verein."
      }
    },
    {
      id: "z2l2",
      title: "APIs, API-Keys und Webhooks",
      icon: "🔑",
      lesson: `
<h4>API-Key</h4>
<p>Ein <b>API-Key</b> ist wie ein <b>Hausschlüssel</b> für eine Schnittstelle. Er beweist: „Dieses Programm darf hier rein, und die Kosten gehen auf dieses Konto.“</p>
<ul>
<li>Behandle ihn wie ein Passwort: nie teilen, nie öffentlich hochladen, z. B. auf GitHub.</li>
<li>Wenn ein Key doch öffentlich wird: sofort löschen (widerrufen) und einen neuen erstellen.</li>
<li>Setze Ausgabelimits beim Anbieter, damit ein gestohlener Key nicht teuer wird.</li>
</ul>
<h4>Pull vs. Push</h4>
<p><b>API-Abfrage (Pull):</b> Dein Programm fragt aktiv nach: „Gibt es neue Bestellungen?“ Machst du das ständig, nennt man es <b>Polling</b>. Das ist ineffizient.</p>
<p><b>Webhook (Push):</b> Das andere Programm meldet sich von selbst, sobald etwas passiert: „Neue Bestellung!“ Es schickt die Daten an eine <b>Webhook-URL</b>, die du vorher hinterlegt hast.</p>
<div class="ex">Vergleich: Polling = alle 5 Minuten zum Briefkasten laufen. Webhook = der Postbote klingelt, wenn ein Brief da ist.</div>
<h4>JSON</h4>
<p>Daten zwischen Programmen werden meist als <b>JSON</b> verschickt, ein einfaches Textformat:</p>
<pre>{ "name": "Anna", "instrument": "Pauke", "termine": 3 }</pre>`,
      keys: [
        "API-Key = Schlüssel, nie öffentlich teilen",
        "Polling = selbst nachfragen; Webhook = wird benachrichtigt",
        "JSON = Standard-Datenformat"
      ],
      quiz: [
        { t: "mc", q: "Dein API-Key ist versehentlich auf GitHub gelandet. Was tust du zuerst?", o: ["Nichts, das merkt keiner", "Key beim Anbieter widerrufen und neu erstellen", "Die Datei umbenennen", "Den Key per Mail an den Support schicken"], a: 1, e: "Automatische Bots durchsuchen GitHub nach Keys, oft innerhalb von Minuten." },
        { t: "mc", q: "Was ist ein Webhook?", o: ["Eine Programmiersprache", "Eine automatische Benachrichtigung, wenn ein Ereignis eintritt", "Ein Passwort-Manager", "Ein KI-Modell"], a: 1, e: "Push statt Pull: Der Postbote klingelt." },
        { t: "match", q: "Ordne zu.", p: [["Polling", "Regelmäßig selbst nachfragen"], ["Webhook", "Wird bei Ereignis benachrichtigt"], ["JSON", "Textformat für Daten"], ["API-Key", "Zugangsschlüssel"]], e: "Diese vier Begriffe begegnen dir in jeder Automation." }
      ],
      practice: {
        task: "Schreibe die Daten einer Probe (Datum, Ort, Besetzung als Liste) als JSON auf.",
        hint: "Geschweifte Klammern für Objekte, eckige Klammern für Listen, Texte in Anführungszeichen.",
        solution: "{ \"datum\": \"2026-11-20\", \"ort\": \"Probenraum A\", \"besetzung\": [\"Trompete 1\", \"Horn\", \"Pauke\"] }"
      }
    },
    {
      id: "z2l3",
      title: "Make: Automation per Baukasten",
      icon: "🧩",
      lesson: `
<p><b>Make</b> (früher Integromat) ist ein <b>No-Code-Tool</b>: Du baust Automationen per Drag-and-drop, ohne zu programmieren.</p>
<h4>Grundbegriffe</h4>
<ul>
<li><b>Szenario:</b> Eine komplette Automation.</li>
<li><b>Trigger:</b> Das Startsignal, z. B. „Neues Formular ausgefüllt“ oder „Jeden Montag 8 Uhr“.</li>
<li><b>Module:</b> Die einzelnen Schritte, z. B. „Zeile in Google Sheets anlegen“ oder „Mail senden“.</li>
<li><b>Mapping:</b> Daten aus einem Schritt in den nächsten übernehmen, z. B. den Namen aus dem Formular in die Mail.</li>
<li><b>Router und Filter:</b> Verzweigungen wie „Wenn Betrag über 500 €, dann …“.</li>
<li><b>Operationen:</b> Make rechnet nach ausgeführten Schritten ab.</li>
</ul>
<div class="ex"><b>Beispiel-Szenario:</b> Trigger: neue Anmeldung im Jotform → Modul: Daten in Google Sheet speichern → Modul: Claude formuliert eine persönliche Bestätigung → Modul: Mail senden → Modul: Slack-Nachricht an das Team.</div>
<div class="tip">Make eignet sich gut für den Einstieg: Es läuft in der Cloud und ist schnell gebaut. Bei sehr vielen Ausführungen kann es teuer werden.</div>`,
      keys: [
        "Make = No-Code-Automation in der Cloud",
        "Szenario = Trigger + Module",
        "Mapping = Daten weiterreichen; Router = Verzweigung"
      ],
      quiz: [
        { t: "mc", q: "Was ist ein Trigger?", o: ["Das Ende einer Automation", "Das Startsignal einer Automation", "Ein Fehler", "Ein Bezahlplan"], a: 1, e: "Ohne Trigger läuft nichts los." },
        { t: "order", q: "Bringe das Anmelde-Szenario in die richtige Reihenfolge.", o: ["Formular wird ausgefüllt (Trigger)", "Daten im Sheet speichern", "KI formuliert Bestätigung", "Bestätigungsmail senden"], e: "Trigger zuerst, dann die Module nacheinander." },
        { t: "tf", q: "Für Make muss man programmieren können.", a: false, e: "Make ist ein No-Code-Tool." }
      ],
      practice: {
        task: "Entwirf ein Make-Szenario für eine deiner Aufgaben: Trigger + 3 Module.",
        hint: "Was löst den Ablauf aus? Was soll danach automatisch passieren?",
        solution: "Trigger: neuer Termin im Kalender mit „Konzert“ im Titel → Modul 1: Eintrag in Konzert-Sheet → Modul 2: Claude erstellt Packliste aus Programm → Modul 3: Mail mit Packliste an mich."
      }
    },
    {
      id: "z2l4",
      title: "n8n und Self-Hosting",
      icon: "🔗",
      lesson: `
<p><b>n8n</b> („n-eight-n“) ist wie Make ein Automations-Tool mit Bausteinen. Hier heißen sie <b>Nodes</b>, und die Abläufe heißen <b>Workflows</b>.</p>
<h4>Was n8n besonders macht</h4>
<ul>
<li><b>Self-Hosting möglich:</b> Du kannst n8n auf deinem eigenen Server betreiben. Dann bleiben die Daten bei dir, gut für den Datenschutz.</li>
<li><b>Kostenkontrolle:</b> Selbst gehostet zahlst du nur den Server, nicht jede einzelne Ausführung.</li>
<li><b>Starke KI-Nodes:</b> Eingebaute Bausteine für KI-Agenten, Gedächtnis und Vektordatenbanken.</li>
<li><b>Code möglich:</b> Wenn ein Baustein fehlt, kannst du kleine Code-Schnipsel einfügen.</li>
</ul>
<h4>Self-Hosting, kurz erklärt</h4>
<ul>
<li><b>Server mieten</b>, z. B. bei <b>Hetzner</b>, einem deutschen Anbieter mit Rechenzentren in der EU. Ein kleiner Server kostet wenige Euro im Monat.</li>
<li><b>Coolify</b> ist eine Oberfläche, mit der du Programme wie n8n auf deinem Server per Klick installierst und verwaltest, ohne viel Kommandozeile.</li>
<li>Du bist dann selbst verantwortlich für <b>Updates, Backups und Sicherheit</b>.</li>
</ul>
<div class="tip">Make oder n8n? Make für den schnellen Einstieg in der Cloud. n8n, wenn Datenschutz, viele Ausführungen oder komplexe KI-Agenten wichtig sind.</div>`,
      keys: [
        "n8n = Workflows aus Nodes",
        "Self-Hosting: Daten bleiben bei dir, mehr Verantwortung",
        "Hetzner = Server, Coolify = einfache Verwaltung"
      ],
      quiz: [
        { t: "mc", q: "Was ist ein Hauptvorteil von selbst gehostetem n8n?", o: ["Man muss sich um nichts kümmern", "Die Daten bleiben auf dem eigenen Server", "Es ist immer schneller als alles andere", "Es braucht kein Internet"], a: 1, e: "Datenhoheit, aber auch Verantwortung für Updates und Backups." },
        { t: "match", q: "Ordne zu.", p: [["Hetzner", "Server-Anbieter"], ["Coolify", "Oberfläche zum Installieren von Apps auf dem Server"], ["Node", "Baustein in n8n"], ["Workflow", "Kompletter Ablauf in n8n"]], e: "Mit diesen vier Begriffen kannst du n8n-Anleitungen folgen." },
        { t: "tf", q: "Wer selbst hostet, ist auch für Backups und Sicherheitsupdates verantwortlich.", a: true, e: "Freiheit bringt Pflichten." }
      ],
      practice: {
        task: "Entscheide für deinen Verein: Make oder selbst gehostetes n8n? Begründe mit 2 Argumenten.",
        hint: "Denk an Datenschutz (Mitgliederdaten), technisches Können und Budget.",
        solution: "Beispiel: n8n selbst gehostet, weil 1) Mitgliederdaten in der EU auf eigenem Server bleiben und 2) viele kleine Abläufe günstig laufen. Alternative: Make, wenn niemand Zeit für Serverwartung hat."
      }
    },
    {
      id: "z2l5",
      title: "RAG: KI mit eigenem Wissen",
      icon: "📚",
      lesson: `
<p>Ein LLM kennt deine internen Dokumente nicht. <b>RAG</b> (Retrieval Augmented Generation) löst das: Vor der Antwort werden <b>passende Textstellen aus deinen Dokumenten gesucht</b> und dem Modell mitgegeben.</p>
<h4>So funktioniert RAG</h4>
<ol>
<li><b>Aufbereiten:</b> Dokumente werden in kleine Abschnitte zerlegt (<b>Chunks</b>).</li>
<li><b>Embeddings:</b> Jeder Abschnitt wird in eine Zahlenreihe umgewandelt, die seine <b>Bedeutung</b> beschreibt.</li>
<li><b>Speichern:</b> Diese Zahlen kommen in eine <b>Vektordatenbank</b>, z. B. Supabase, Pinecone oder Qdrant.</li>
<li><b>Suchen (Retrieval):</b> Bei einer Frage werden die bedeutungsähnlichsten Abschnitte gefunden, auch wenn andere Wörter benutzt werden.</li>
<li><b>Antworten (Generation):</b> Das LLM bekommt Frage und Abschnitte und formuliert die Antwort.</li>
</ol>
<div class="ex">Frage: „Wie viel Urlaub habe ich?“ → RAG findet den Abschnitt „Jahresurlaub: 30 Tage“ im Tarifvertrag, obwohl dort nicht „Urlaub haben“ steht.</div>
<h4>RAG, Fine-Tuning oder beides?</h4>
<ul>
<li><b>RAG:</b> Für <b>Wissen</b>, das sich ändert. Leicht aktuell zu halten und Quellen sind nachvollziehbar.</li>
<li><b>Fine-Tuning:</b> Das Modell wird mit eigenen Beispielen nachtrainiert. Gut für <b>Stil und Format</b>, aufwendig und schlecht für wechselndes Wissen.</li>
<li><b>RAFT:</b> Eine Kombination: Das Modell wird darauf trainiert, gut mit gefundenen Dokumenten umzugehen.</li>
</ul>`,
      keys: [
        "RAG = erst passende Stellen suchen, dann antworten",
        "Chunks → Embeddings → Vektordatenbank",
        "RAG für Wissen, Fine-Tuning für Stil"
      ],
      quiz: [
        { t: "order", q: "Bringe die RAG-Schritte in die richtige Reihenfolge.", o: ["Dokumente in Chunks zerlegen", "Embeddings berechnen", "In Vektordatenbank speichern", "Passende Chunks zur Frage suchen", "LLM formuliert die Antwort"], e: "Aufbereiten → Speichern → Suchen → Generieren." },
        { t: "mc", q: "Was ist ein Embedding?", o: ["Ein eingebettetes Video", "Eine Zahlenreihe, die die Bedeutung eines Textes beschreibt", "Ein Passwort", "Ein Dateiformat für PDFs"], a: 1, e: "So kann man nach Bedeutung statt nach exakten Wörtern suchen." },
        { t: "mc", q: "Deine Preisliste ändert sich jeden Monat. Was nutzt du?", o: ["Fine-Tuning", "RAG", "Gar nichts", "Ein größeres Modell"], a: 1, e: "Bei RAG tauschst du einfach das Dokument aus." },
        { t: "tf", q: "RAG senkt Halluzinationen, weil das Modell echte Quellen im Kontext hat.", a: true, e: "Deshalb ist RAG die Basis vieler Firmen-Chatbots." }
      ],
      practice: {
        task: "Welche Dokumente würdest du in einen RAG-Bot für deinen Verein oder dein Ensemble laden? Nenne 3–5.",
        hint: "Was fragen Mitglieder oder Kollegen immer wieder?",
        solution: "Beispiel: Satzung, Beitragsordnung, Probenregeln, Reise-Checkliste, FAQ zu Auftritten. Typische Frage: „Bis wann muss ich mich für die Reise anmelden?“"
      }
    },
    {
      id: "z2l6",
      title: "Die Microsoft-Welt",
      icon: "🪟",
      lesson: `
<p>Viele Firmen arbeiten mit <b>Microsoft 365</b>. Dafür gibt es eigene KI- und Automationswerkzeuge.</p>
<ul>
<li><b>Microsoft 365 Copilot:</b> KI direkt in Word, Excel, Outlook, Teams und PowerPoint. Copilot kennt deine Mails, Dateien und Termine im Unternehmen, sofern du Zugriff darauf hast. Beispiel: „Fasse die Teams-Besprechung zusammen und erstelle Aufgaben daraus.“</li>
<li><b>Power Automate:</b> Das Automationstool von Microsoft, vergleichbar mit Make und n8n, eng verzahnt mit Outlook, SharePoint und Teams.</li>
<li><b>Azure:</b> Die Cloud-Plattform von Microsoft. Dort kann man KI-Modelle (Azure OpenAI und andere) in eigenen, abgesicherten Umgebungen betreiben, oft mit Rechenzentren in der EU.</li>
</ul>
<h4>Wann lohnt sich das?</h4>
<p>Wenn ein Unternehmen ohnehin in der Microsoft-Welt arbeitet, ist der Einstieg oft am einfachsten: Rechte, Anmeldung und Datenschutzverträge sind schon vorhanden.</p>
<div class="tip">Copilot findet alles, worauf du Zugriff hast. Falsch gesetzte Freigaben in SharePoint werden dadurch plötzlich sichtbar. Vor der Einführung also die Berechtigungen aufräumen!</div>`,
      keys: [
        "M365 Copilot = KI in Office-Programmen",
        "Power Automate = Microsofts Automationstool",
        "Azure = Microsoft-Cloud, auch für KI-Modelle",
        "Vor Copilot: Berechtigungen aufräumen"
      ],
      quiz: [
        { t: "match", q: "Ordne zu.", p: [["Copilot", "KI in Word, Excel, Outlook"], ["Power Automate", "Automationen im Microsoft-Umfeld"], ["Azure", "Cloud-Plattform von Microsoft"]], e: "Alle drei greifen ineinander." },
        { t: "tf", q: "Copilot kann alle Dateien finden, auf die der Nutzer Zugriff hat, also auch falsch freigegebene.", a: true, e: "Darum vorher die Berechtigungen prüfen." },
        { t: "mc", q: "Welches Tool ist mit Make und n8n am ehesten vergleichbar?", o: ["Azure", "Power Automate", "Excel", "Teams"], a: 1, e: "Power Automate baut Abläufe aus Triggern und Aktionen." }
      ],
      practice: {
        task: "Formuliere einen Auftrag an M365 Copilot (oder einen anderen Assistenten) für eine Besprechung.",
        hint: "Was soll mit dem Gespräch passieren? Zusammenfassung, Aufgaben, Verantwortliche, Fristen?",
        solution: "„Fasse die Vorstandssitzung in 5 Stichpunkten zusammen. Erstelle danach eine Tabelle mit Aufgabe, verantwortlicher Person und Frist. Markiere offene Entscheidungen.“"
      }
    }
  ]
});

(window.ZONES = window.ZONES || []).push({
  id: "z3",
  title: "Prompt Engineering",
  subtitle: "Mit KI richtig sprechen",
  icon: "💬",
  color: "#10b981",
  badge: { name: "Prompt-Profi", icon: "🎯" },
  levels: [
    {
      id: "z3l1",
      title: "Das Prompting-Mindset",
      icon: "🧑‍🏫",
      lesson: `
<p>Stell dir vor, die KI ist eine <b>sehr kluge neue Praktikantin</b>, die gerade angefangen hat. Sie weiß viel, kennt aber <b>dich, dein Projekt und deine Erwartungen</b> nicht. Alles, was sie wissen muss, musst du ihr sagen.</p>
<h4>Die Bausteine eines guten Prompts</h4>
<ul>
<li><b>Rolle:</b> „Du bist erfahrene Orchestermanagerin.“</li>
<li><b>Kontext:</b> Hintergrund, Zielgruppe, Situation</li>
<li><b>Aufgabe:</b> klar und konkret, was zu tun ist</li>
<li><b>Format:</b> Liste, Tabelle, Mail, Länge, Tonfall</li>
<li><b>Beispiele:</b> So soll es aussehen</li>
<li><b>Grenzen:</b> Was soll vermieden werden?</li>
</ul>
<div class="ex"><b>Schwach:</b> „Schreib eine Mail an den Veranstalter.“<br><b>Stark:</b> „Du bist mein Assistent. Schreibe eine kurze, freundliche Mail an den Veranstalter des Konzerts am 12.12. in Bamberg. Frage nach Bühnenmaßen, Anlieferzeit und ob Pauken vor Ort sind. Maximal 120 Wörter, Sie-Form, Unterschrift: Anna.“</div>
<h4>Iteration</h4>
<p>Der erste Entwurf ist selten perfekt. Gib konkretes Feedback: „Kürzer“, „förmlicher“, „Punkt 2 weglassen“. Das ist kein Scheitern, sondern der normale Weg.</p>
<div class="tip">Strukturiere lange Prompts mit Überschriften oder Markierungen wie &lt;kontext&gt; … &lt;/kontext&gt;. Claude kann damit besonders gut umgehen.</div>`,
      keys: [
        "KI = kluge Praktikantin ohne Vorwissen über dich",
        "Rolle, Kontext, Aufgabe, Format, Beispiele, Grenzen",
        "Iterieren ist normal"
      ],
      quiz: [
        { t: "mc", q: "Welcher Prompt ist am besten?", o: ["Schreib was über Pauken.", "Pauken!", "Schreibe einen 150-Wörter-Text für ein Programmheft über die Pauke im Barock, für Laien verständlich, mit einem Beispiel von Bach.", "Bitte hilf mir."], a: 2, e: "Länge, Zielgruppe, Thema und Beispiel sind klar." },
        { t: "match", q: "Ordne den Prompt-Teil seinem Baustein zu.", p: [["„Du bist Steuerberaterin.“", "Rolle"], ["„Als Tabelle, max. 10 Zeilen.“", "Format"], ["„Ich bin freiberuflicher Musiker in Bayern.“", "Kontext"], ["„Keine Fachbegriffe.“", "Grenzen"]], e: "Je mehr Bausteine, desto passender das Ergebnis." },
        { t: "tf", q: "Wenn der erste Entwurf nicht passt, ist Prompting gescheitert.", a: false, e: "Iteration gehört dazu." }
      ],
      practice: {
        task: "Verbessere diesen Prompt mit mindestens 4 Bausteinen: „Mach mir einen Probenplan.“",
        hint: "Rolle, Kontext (Ensemble, Stücke, Termine), Aufgabe, Format, Grenzen.",
        solution: "„Du bist erfahrener Ensembleleiter. Unser Blechbläserquintett probt 4× vor dem Konzert am 20.12. Programm: 5 Stücke (Liste folgt). Erstelle einen Probenplan als Tabelle (Datum, Dauer, Stücke, Schwerpunkt). Schwierige Stücke zuerst, Generalprobe am Ende mit Gesamtdurchlauf. Maximal 2,5 Std. pro Probe.“"
      }
    },
    {
      id: "z3l2",
      title: "Zero-, One- und Few-Shot",
      icon: "🎯",
      lesson: `
<p>„Shot“ heißt hier: <b>Beispiel</b>. Die Frage ist, wie viele Beispiele du der KI mitgibst.</p>
<ul>
<li><b>Zero-Shot:</b> Kein Beispiel, nur die Anweisung. Reicht für einfache, klare Aufgaben.<br><i>„Übersetze ins Englische: Die Probe beginnt um 19 Uhr.“</i></li>
<li><b>One-Shot:</b> Ein Beispiel, das Format oder Stil zeigt.</li>
<li><b>Few-Shot:</b> Mehrere Beispiele (meist 2–5). Ideal, wenn ein <b>bestimmter Stil, ein Format oder eine Einordnung</b> wichtig ist.</li>
</ul>
<div class="ex"><b>Few-Shot-Beispiel:</b><br>Ordne die Nachricht ein:<br>„Kann ich die Noten früher bekommen?“ → Organisation<br>„Die Gage ist noch nicht da.“ → Finanzen<br>„Wer spielt am Samstag Pauke?“ → Besetzung<br>„Wann ist die Anspielprobe?“ → ?</div>
<p>Die KI erkennt das Muster und antwortet „Organisation“.</p>
<h4>Tipps für gute Beispiele</h4>
<ul>
<li>Verschiedenartige Beispiele wählen, damit die KI das <b>Prinzip</b> lernt und nicht ein einzelnes Detail kopiert.</li>
<li>Beispiele klar markieren, z. B. mit &lt;beispiel&gt; … &lt;/beispiel&gt;.</li>
<li>Eigene echte Texte als Stilvorlage nutzen: „Schreibe so wie in diesen drei Mails von mir.“</li>
</ul>`,
      keys: [
        "Zero = kein, One = ein, Few = mehrere Beispiele",
        "Few-Shot für Stil, Format, Einordnung",
        "Vielfältige Beispiele wählen"
      ],
      quiz: [
        { t: "mc", q: "Du willst, dass die KI Mails genau in deinem Schreibstil formuliert. Welche Technik passt am besten?", o: ["Zero-Shot", "Few-Shot mit eigenen Beispiel-Mails", "Gar keinen Prompt", "Nur die Rolle angeben"], a: 1, e: "Beispiele zeigen Stil besser als jede Beschreibung." },
        { t: "match", q: "Ordne zu.", p: [["Zero-Shot", "Nur Anweisung, kein Beispiel"], ["One-Shot", "Genau ein Beispiel"], ["Few-Shot", "Mehrere Beispiele"]], e: "„Shot“ = Beispiel." },
        { t: "tf", q: "Bei Few-Shot sollten alle Beispiele möglichst gleich sein.", a: false, e: "Vielfalt hilft der KI, das Prinzip zu erkennen." }
      ],
      practice: {
        task: "Baue einen Few-Shot-Prompt mit 3 Beispielen, der Rechnungsposten in Kategorien einordnet (z. B. Reise, Instrument, Noten).",
        hint: "Format: Posten → Kategorie, dann ein offener Posten mit „?“.",
        solution: "„Ordne zu: ‚Bahnticket Dresden‘ → Reise | ‚Paukenfelle‘ → Instrument | ‚Partitur Mahler 5‘ → Noten | ‚Hotel Leipzig‘ → ?“ (Antwort: Reise)"
      }
    },
    {
      id: "z3l3",
      title: "Chain of Thought und Tree of Thought",
      icon: "🌳",
      lesson: `
<h4>Chain of Thought (Gedankenkette)</h4>
<p>Bei kniffligen Aufgaben wird das Ergebnis besser, wenn die KI <b>Schritt für Schritt denkt</b>, bevor sie antwortet, statt direkt ein Ergebnis hinzuschreiben.</p>
<div class="ex">„Wir haben 3 Konzerte mit je 5 Musikern. Gage 250 € pro Person und Konzert, Fahrtkosten 80 € pro Konzert. <b>Rechne Schritt für Schritt</b> und nenne dann das Gesamtbudget.“</div>
<p>Moderne Modelle haben oft einen eingebauten <b>Denkmodus</b> („Extended Thinking“ oder „Reasoning“). Dann denken sie automatisch länger nach. Bei Rechen-, Logik- und Planungsaufgaben lohnt sich das.</p>
<h4>Tree of Thought (Gedankenbaum)</h4>
<p>Hier soll die KI <b>mehrere Lösungswege parallel</b> durchdenken, sie bewerten und den besten weiterverfolgen, wie ein Baum mit Ästen.</p>
<div class="ex">„Entwickle drei unterschiedliche Konzepte für unser Jubiläumskonzert. Bewerte jedes nach Kosten, Publikumswirkung und Aufwand. Empfiehl dann eines und begründe.“</div>
<div class="tip">Chain of Thought = <b>ein</b> Weg, sorgfältig. Tree of Thought = <b>mehrere</b> Wege vergleichen. Beide kosten mehr Tokens, lohnen sich aber bei wichtigen Entscheidungen.</div>`,
      keys: [
        "Chain of Thought = Schritt für Schritt denken",
        "Tree of Thought = mehrere Wege vergleichen",
        "Denkmodus moderner Modelle für Logik und Planung"
      ],
      quiz: [
        { t: "mc", q: "Welcher Zusatz löst klassisches Chain-of-Thought-Prompting aus?", o: ["„Antworte kurz.“", "„Denke Schritt für Schritt.“", "„Sei kreativ.“", "„Nutze Emojis.“"], a: 1, e: "Die Zwischenschritte machen Fehler seltener und sichtbar." },
        { t: "mc", q: "Du willst drei Tourneerouten vergleichen und die beste wählen. Welche Technik passt?", o: ["Zero-Shot", "Tree of Thought", "One-Shot", "Keine"], a: 1, e: "Mehrere Wege bewerten, dann entscheiden." },
        { t: "tf", q: "Ausführliches Nachdenken kostet mehr Tokens.", a: true, e: "Lohnt sich bei komplexen Aufgaben, nicht bei einfachen." }
      ],
      practice: {
        task: "Schreibe einen Tree-of-Thought-Prompt für eine echte Entscheidung, die vor dir liegt.",
        hint: "Mehrere Optionen + Bewertungskriterien + Empfehlung.",
        solution: "„Ich überlege, wie ich mich auf ein Probespiel vorbereite. Entwickle 3 Übe-Strategien für die nächsten 6 Wochen. Bewerte jede nach Zeitaufwand, Wirkung auf Nervosität und Repertoire-Abdeckung (1–5). Empfiehl die beste und begründe.“"
      }
    },
    {
      id: "z3l4",
      title: "Prompt Chaining",
      icon: "⛓️",
      lesson: `
<p>Große Aufgaben in <b>einen</b> Riesen-Prompt zu packen, führt oft zu mittelmäßigen Ergebnissen. Beim <b>Prompt Chaining</b> zerlegst du die Aufgabe in <b>mehrere Schritte</b>. Das Ergebnis eines Schritts ist die Eingabe für den nächsten.</p>
<div class="ex"><b>Beispiel: Newsletter für den Verein</b><br>
1. Prompt: „Fasse diese 5 Protokolle in Stichpunkten zusammen.“<br>
2. Prompt: „Wähle aus den Stichpunkten die 3 wichtigsten Themen für Mitglieder.“<br>
3. Prompt: „Schreibe zu jedem Thema einen kurzen, freundlichen Absatz.“<br>
4. Prompt: „Prüfe den Text auf Fehler und schlage eine Betreffzeile vor.“</div>
<h4>Vorteile</h4>
<ul>
<li><b>Bessere Qualität:</b> Jeder Schritt hat eine klare, kleine Aufgabe.</li>
<li><b>Kontrolle:</b> Du kannst zwischendurch prüfen und eingreifen.</li>
<li><b>Fehlersuche:</b> Du siehst genau, welcher Schritt hakt.</li>
<li><b>Automatisierbar:</b> In Make oder n8n wird jeder Schritt ein eigenes Modul.</li>
</ul>
<div class="tip">Ein Schritt „Prüfe das Ergebnis“ am Ende ist fast immer eine gute Idee. Die KI findet so viele eigene Fehler.</div>`,
      keys: [
        "Große Aufgabe → mehrere kleine Prompts",
        "Ausgabe von Schritt 1 = Eingabe von Schritt 2",
        "Mehr Qualität, Kontrolle und Automatisierbarkeit"
      ],
      quiz: [
        { t: "mc", q: "Was ist Prompt Chaining?", o: ["Einen Prompt mehrmals senden", "Eine Aufgabe in Schritte zerlegen, die aufeinander aufbauen", "Prompts mit Ketten-Emojis", "Prompts an mehrere KIs gleichzeitig"], a: 1, e: "Wie ein Fließband für Gedankenarbeit." },
        { t: "order", q: "Bringe die Kette für eine Konzertkritik-Auswertung in eine sinnvolle Reihenfolge.", o: ["Kritiken zusammenfassen", "Lob und Kritikpunkte herausfiltern", "Zitate für die Website auswählen", "Ergebnis auf Fehler prüfen"], e: "Erst sammeln, dann filtern, dann verwenden, dann prüfen." },
        { t: "tf", q: "Prompt Chaining eignet sich gut für Automationen in n8n oder Make.", a: true, e: "Jeder Schritt wird ein Modul bzw. Node." }
      ],
      practice: {
        task: "Zerlege die Aufgabe „Bewerbung für eine Orchesterstelle vorbereiten“ in eine Kette von 4 Prompts.",
        hint: "Analyse → Planung → Text → Prüfung.",
        solution: "1) „Analysiere diese Stellenausschreibung: Welche Anforderungen sind zentral?“ 2) „Gleiche sie mit meinem Lebenslauf ab: Stärken und Lücken?“ 3) „Schreibe ein Anschreiben, das die Stärken betont.“ 4) „Prüfe auf Länge, Tonfall und Fehler.“"
      }
    },
    {
      id: "z3l5",
      title: "Modellwahl und Memory",
      icon: "🧮",
      lesson: `
<h4>Das richtige Modell wählen</h4>
<p>Anbieter haben meist mehrere Modell-Größen. Bei Anthropic gibt es z. B. größere, stärkere Modelle (wie <b>Opus</b>), ausgewogene (wie <b>Sonnet</b>) und schnelle, günstige (wie <b>Haiku</b>).</p>
<ul>
<li><b>Große Modelle:</b> komplexe Analysen, schwieriger Code, wichtige Texte. Langsamer und teurer.</li>
<li><b>Mittlere Modelle:</b> der Alltags-Allrounder.</li>
<li><b>Kleine Modelle:</b> einfache, massenhafte Aufgaben wie Einordnen, Extrahieren oder kurze Antworten. Schnell und günstig.</li>
</ul>
<div class="tip">Faustregel: So klein wie möglich, so groß wie nötig. In Automationen mit tausenden Durchläufen macht das einen großen Kostenunterschied.</div>
<h4>Memory und Kontext</h4>
<ul>
<li><b>Kontextfenster:</b> Innerhalb eines Gesprächs „erinnert“ sich die KI an alles, was im Fenster Platz hat. Wird es voll, gehen frühe Details verloren oder werden zusammengefasst.</li>
<li><b>Memory-Funktionen:</b> Manche Apps speichern wichtige Infos über dich <b>gesprächsübergreifend</b>, z. B. deinen Beruf oder deine Vorlieben.</li>
<li><b>Projekte:</b> Du kannst Dokumente und Anweisungen dauerhaft für ein Thema hinterlegen.</li>
</ul>
<p>Lange, ausufernde Chats werden schlechter. Bei einem neuen Thema lieber einen <b>neuen Chat</b> beginnen.</p>`,
      keys: [
        "So klein wie möglich, so groß wie nötig",
        "Kontextfenster = Kurzzeitgedächtnis",
        "Memory und Projekte = Langzeitgedächtnis",
        "Neues Thema = neuer Chat"
      ],
      quiz: [
        { t: "mc", q: "Du willst 10.000 Kundenmails automatisch in 5 Kategorien sortieren. Welches Modell?", o: ["Das größte verfügbare", "Ein kleines, schnelles Modell", "Ein Bildmodell", "Egal"], a: 1, e: "Einfache Massenaufgabe → klein und günstig." },
        { t: "tf", q: "Sehr lange Chats über viele Themen liefern meist bessere Ergebnisse.", a: false, e: "Der Kontext wird unübersichtlich. Neues Thema = neuer Chat." },
        { t: "match", q: "Ordne zu.", p: [["Kontextfenster", "Gedächtnis innerhalb eines Gesprächs"], ["Memory-Funktion", "Merkt sich Infos über Gespräche hinweg"], ["Projekt", "Dauerhaft hinterlegte Dokumente und Anweisungen"]], e: "Diese Unterscheidung brauchst du später bei CLAUDE.md wieder." }
      ],
      practice: {
        task: "Ordne drei deiner Aufgaben einer Modellgröße zu (groß, mittel, klein) und begründe kurz.",
        hint: "Wie schwierig ist die Aufgabe, und wie oft kommt sie vor?",
        solution: "Groß: Probespiel-Strategie oder Vertragsprüfung (wichtig, komplex). Mittel: Mails und Texte (Alltag). Klein: Belege kategorisieren (einfach, häufig)."
      }
    },
    {
      id: "z3l6",
      title: "Eigene Assistenten nach Lastenheft",
      icon: "🛠️",
      lesson: `
<p>Statt jedes Mal denselben langen Prompt zu tippen, baust du einen <b>eigenen Assistenten</b>. Bei ChatGPT heißen sie <b>Custom GPTs</b>, bei Claude nutzt du <b>Projekte</b> mit Anweisungen und Wissen, bei Gemini <b>Gems</b>.</p>
<h4>Bestandteile</h4>
<ul>
<li><b>Systemanweisung:</b> Rolle, Aufgabe, Tonfall, Regeln, also das „Grundgesetz“ des Assistenten</li>
<li><b>Wissen:</b> hochgeladene Dokumente</li>
<li><b>Fähigkeiten:</b> z. B. Websuche oder Datenanalyse</li>
</ul>
<h4>Erst das Lastenheft</h4>
<p>Bevor du baust, beantworte schriftlich:</p>
<ol>
<li><b>Zweck:</b> Welches Problem löst der Assistent?</li>
<li><b>Nutzer:</b> Wer benutzt ihn, und wie viel Vorwissen haben diese Personen?</li>
<li><b>Eingaben:</b> Was geben die Nutzer ein?</li>
<li><b>Ausgaben:</b> Was soll herauskommen, in welchem Format?</li>
<li><b>Wissen:</b> Welche Dokumente braucht er?</li>
<li><b>Grenzen:</b> Was darf er nicht, z. B. Rechtsberatung geben?</li>
<li><b>Erfolgskriterien:</b> Woran erkennst du, dass er gut ist?</li>
</ol>
<div class="tip">Teste deinen Assistenten mit <b>schwierigen Fällen</b>: unklare Fragen, Fragen außerhalb seines Themas, Versuche, ihn auszutricksen.</div>`,
      keys: [
        "Eigener Assistent = Systemanweisung + Wissen + Fähigkeiten",
        "Erst Lastenheft, dann bauen",
        "Mit schwierigen Fällen testen"
      ],
      quiz: [
        { t: "mc", q: "Was gehört in die Systemanweisung eines eigenen Assistenten?", o: ["Nur der Name", "Rolle, Aufgabe, Tonfall und Regeln", "Die Kreditkartennummer", "Nichts, er lernt von allein"], a: 1, e: "Sie ist das Grundgesetz des Assistenten." },
        { t: "order", q: "Sinnvolle Reihenfolge beim Bauen eines Assistenten:", o: ["Lastenheft schreiben", "Systemanweisung und Wissen hinterlegen", "Mit schwierigen Fällen testen", "Nachbessern und freigeben"], e: "Planen → Bauen → Testen → Verbessern." },
        { t: "tf", q: "Ein guter Assistent sollte auch wissen, welche Fragen er nicht beantworten darf.", a: true, e: "Grenzen gehören ins Lastenheft." }
      ],
      practice: {
        task: "Schreibe ein Mini-Lastenheft (Zweck, Nutzer, Ausgabe, Grenzen) für einen Assistenten, den du wirklich brauchen könntest.",
        hint: "Zum Beispiel ein Vereins-FAQ-Bot oder ein Bewerbungs-Coach.",
        solution: "Zweck: Fragen von Vereinsmitgliedern beantworten. Nutzer: Mitglieder ohne Technikwissen. Ausgabe: kurze, freundliche Antwort mit Verweis auf die Satzungsstelle. Grenzen: keine Rechtsberatung, bei Unklarheit an den Vorstand verweisen."
      }
    },
    {
      id: "z3l7",
      title: "Daten, PDFs und Tabellen analysieren",
      icon: "📊",
      lesson: `
<p>KI ist stark darin, <b>große Mengen an Text und Daten</b> zu durchforsten.</p>
<h4>PDFs und Dokumente</h4>
<ul>
<li>Zusammenfassen: „Die 10 wichtigsten Punkte dieses Vertrags.“</li>
<li>Gezielt fragen: „Was steht zu Kündigungsfristen? Zitiere die Stelle.“</li>
<li>Vergleichen: „Was unterscheidet Vertrag A von Vertrag B?“</li>
<li>Extrahieren: „Alle Termine als Tabelle mit Datum, Ort und Uhrzeit.“</li>
</ul>
<h4>Tabellen und Zahlen</h4>
<p>Viele KI-Apps können <b>Code ausführen</b>, um Tabellen auszuwerten. Das ist viel zuverlässiger, als wenn das Modell im Kopf rechnet.</p>
<ul>
<li>„Lade die CSV-Datei mit meinen Einnahmen. Zeig mir die Summe pro Monat als Diagramm.“</li>
<li>„Welche Konzerte hatten die höchsten Fahrtkosten im Verhältnis zur Gage?“</li>
</ul>
<h4>KI in Excel und Google Sheets</h4>
<ul>
<li>Formeln erklären oder erstellen lassen: „Schreib mir eine Formel, die alle Gagen über 500 € summiert.“</li>
<li>Integrierte KI (Copilot in Excel, Gemini in Sheets) oder Add-ons, die Zellen per Prompt befüllen.</li>
</ul>
<div class="tip">Bei Zahlen gilt: Lass die KI <b>rechnen (Code)</b> statt <b>schätzen (Text)</b>, und prüfe die Ergebnisse stichprobenartig.</div>`,
      keys: [
        "PDFs: zusammenfassen, fragen, vergleichen, extrahieren",
        "Zahlen per Code auswerten lassen",
        "KI hilft bei Excel-Formeln"
      ],
      quiz: [
        { t: "mc", q: "Warum sollte KI bei Tabellen-Auswertungen Code ausführen?", o: ["Weil es schöner aussieht", "Weil Code exakt rechnet, während Text-Antworten Zahlen schätzen können", "Weil es billiger ist", "Gar nicht nötig"], a: 1, e: "Rechnen per Code ist reproduzierbar und exakt." },
        { t: "tf", q: "Du kannst eine KI bitten, eine bestimmte Stelle im Vertrag wörtlich zu zitieren, um die Antwort zu prüfen.", a: true, e: "Zitate machen Antworten überprüfbar." },
        { t: "mc", q: "Welcher Prompt extrahiert Daten?", o: ["„Was hältst du von dem Vertrag?“", "„Liste alle Termine als Tabelle mit Datum, Ort und Uhrzeit.“", "„Ist der Vertrag gut?“", "„Schreib ein Gedicht über den Vertrag.“"], a: 1, e: "Extrahieren = strukturierte Daten herausziehen." }
      ],
      practice: {
        task: "Formuliere einen Prompt, der aus einem Gastspielvertrag alle wichtigen Daten als Tabelle herauszieht.",
        hint: "Welche Spalten brauchst du? Was, wenn etwas fehlt?",
        solution: "„Extrahiere aus dem Vertrag: Datum, Ort, Anspielzeit, Gage, Zahlungsfrist, Stornoregel, Reisekosten. Gib eine Tabelle aus. Wenn ein Punkt fehlt, schreibe ‚nicht geregelt‘. Zitiere zu jedem Punkt die Fundstelle.“"
      }
    }
  ]
});
