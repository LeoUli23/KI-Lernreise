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
<p>Stell dir vor, jedes Mal, wenn jemand dein Kontaktformular ausfüllt, müsstest du: die Daten in eine Tabelle kopieren, eine Bestätigungsmail schreiben, das Team informieren und einen Termin eintragen. Viermal Handarbeit, jedes Mal gleich. Genau solche Abläufe übernimmt <b>Make</b>.</p>
<p><b>Make</b> (früher „Integromat“) ist ein <b>No-Code-Automationstool</b>. „No-Code“ heißt: Du programmierst nicht, sondern ziehst Bausteine auf eine Fläche und verbindest sie mit Linien. Make läuft komplett im Browser, in der Cloud. Du musst nichts installieren.</p>

<h4>Teil 1: Die Grundbegriffe</h4>
<ul>
<li><b>Szenario:</b> Eine komplette Automation, also ein Ablauf von Anfang bis Ende. In Make sieht ein Szenario aus wie eine Kette von Kreisen, die mit Linien verbunden sind.</li>
<li><b>Modul:</b> Ein einzelner Kreis, also ein Arbeitsschritt, z. B. „Zeile in Google Sheets hinzufügen“ oder „Mail in Gmail senden“. Jedes Modul gehört zu einer <b>App</b> (Gmail, Slack, Google Sheets …). Make hat Tausende davon.</li>
<li><b>Trigger:</b> Das erste Modul, das den Ablauf startet. Ohne Trigger passiert nichts.</li>
<li><b>Aktion:</b> Ein Modul, das etwas tut (anlegen, senden, ändern).</li>
<li><b>Suche:</b> Ein Modul, das etwas nachschlägt (z. B. „Finde den Kontakt mit dieser Mailadresse“).</li>
<li><b>Verbindung (Connection):</b> Die einmalige Anmeldung bei einer App, damit Make in deinem Namen arbeiten darf.</li>
</ul>

<h4>Teil 2: Zwei Arten von Triggern</h4>
<ul>
<li><b>Sofort-Trigger (Instant / Webhook):</b> Die App meldet sich bei Make, sobald etwas passiert. Make reagiert innerhalb von Sekunden. Erkennbar an einem kleinen Blitz-Symbol.</li>
<li><b>Geplanter Trigger (Polling):</b> Make fragt in festen Abständen nach, z. B. alle 15 Minuten: „Gibt es etwas Neues?“ Jede Nachfrage verbraucht Kontingent, auch wenn nichts Neues da ist.</li>
</ul>
<div class="tip">Wenn es einen Sofort-Trigger gibt, nimm ihn. Er ist schneller und spart Kontingent.</div>

<h4>Teil 3: Mapping, das Herzstück</h4>
<p>Jedes Modul liefert ein <b>Paket an Daten</b> (ein „Bundle“). Ein Formular liefert z. B. Name, Mail, Datum und Nachricht. Im nächsten Modul klickst du in ein Feld und wählst aus diesen Daten aus. Das nennt man <b>Mapping</b>: Du sagst Make, welcher Wert wohin gehört.</p>
<div class="ex">Im Modul „Mail senden“ schreibst du in den Betreff: „Danke für deine Anfrage, “ und klickst dann auf das grüne Feld <b>Name</b> aus dem Formular-Modul. Bei jedem Durchlauf steht dort automatisch der richtige Name.</div>
<p>Zusätzlich gibt es <b>Funktionen</b>, mit denen du Daten umformst: Datum formatieren, Text kürzen, Großbuchstaben, rechnen. Beispiel: Aus „2026-12-12“ wird „12.12.2026“.</p>

<h4>Teil 4: Verzweigen und Sortieren</h4>
<ul>
<li><b>Filter:</b> Eine Bedingung auf einer Verbindungslinie. Nur wenn sie erfüllt ist, geht es weiter. Beispiel: „Nur wenn Budget größer als 500 €.“</li>
<li><b>Router:</b> Teilt den Ablauf in mehrere Wege. Jeder Weg hat seinen eigenen Filter. Beispiel: Weg 1 für Konzertanfragen, Weg 2 für Unterrichtsanfragen, Weg 3 für alles andere.</li>
<li><b>Iterator:</b> Zerlegt eine Liste in einzelne Teile. Beispiel: Eine Mail hat 3 Anhänge, der Iterator macht daraus 3 einzelne Durchläufe, damit jeder Anhang gespeichert wird.</li>
<li><b>Aggregator:</b> Das Gegenstück. Er fasst viele Einzelteile wieder zu einem zusammen, z. B. alle neuen Anmeldungen der Woche zu einer Übersichtsmail.</li>
</ul>
<div class="ex"><b>Szenario „Konzertanfrage“:</b>
<div class="flow"><span>📝 Formular<small>Trigger, sofort</small></span><i>→</i><span>📊 Google Sheet<small>Zeile anlegen</small></span><i>→</i><span>🔀 Router<small>nach Anfrage-Art</small></span><i>→</i><span>🤖 Claude<small>Antwort entwerfen</small></span><i>→</i><span>📧 Gmail<small>als Entwurf speichern</small></span><i>→</i><span>💬 Slack<small>Team informieren</small></span></div>
Die KI-Antwort wird bewusst nur als <b>Entwurf</b> gespeichert. Ein Mensch prüft und klickt auf „Senden“.</div>

<h4>Teil 5: KI in Make einbauen</h4>
<p>Make hat Module für KI-Anbieter (z. B. Anthropic Claude oder OpenAI). Du gibst einen Prompt ein und mappst Daten hinein: „Schreibe eine freundliche Antwort auf diese Anfrage: [Nachricht]. Unsere Preise: [Preisliste].“ Das Ergebnis ist wieder ein Datenpaket, das du im nächsten Modul weiterverwendest. Dafür brauchst du einen <b>API-Key</b> des Anbieters, der pro Nutzung abgerechnet wird.</p>
<div class="tip">Verlange von der KI eine feste Struktur, z. B. „Antworte nur als JSON mit den Feldern kategorie und antwort“. Dann kann Make die Teile sauber weiterverarbeiten.</div>

<h4>Teil 6: Wenn etwas schiefgeht</h4>
<ul>
<li><b>Verlauf (History):</b> Make speichert jeden Durchlauf. Du siehst, welches Modul welche Daten hatte und wo es gehakt hat.</li>
<li><b>Fehlerbehandlung (Error Handler):</b> Du legst fest, was bei einem Fehler passiert: ignorieren, mit Ersatzwert weitermachen, abbrechen oder dich benachrichtigen.</li>
<li><b>Einmal ausführen (Run once):</b> Zum Testen startest du das Szenario von Hand und schaust dir jedes Modul an, bevor du es dauerhaft einschaltest.</li>
</ul>

<h4>Teil 7: Kosten</h4>
<p>Make rechnet nach Verbrauch ab: Jeder ausgeführte Modul-Schritt zählt (früher „Operationen“, inzwischen als „Credits“ bezeichnet [Prüfen]). Ein Szenario mit 6 Modulen, das 100-mal im Monat läuft, verbraucht also rund 600 Einheiten. Es gibt einen kostenlosen Einstiegstarif mit kleinem Kontingent, die Preise ändern sich aber, deshalb immer aktuell nachsehen.</p>
<div class="tip">Kontingent sparen: Filter möglichst früh setzen (dann laufen die teuren Module seltener), Sofort-Trigger statt Polling nutzen und lange Polling-Abstände wählen.</div>`,
      keys: [
        "Szenario = ganze Automation aus Modulen",
        "Trigger startet: sofort (Webhook) oder geplant (Polling)",
        "Mapping = Daten aus früheren Modulen einsetzen",
        "Filter, Router, Iterator, Aggregator steuern den Fluss",
        "KI-Ergebnisse als Entwurf, Mensch gibt frei",
        "Abrechnung pro ausgeführtem Modul-Schritt"
      ],
      quiz: [
        { t: "mc", q: "Was ist ein Trigger in Make?", o: ["Das letzte Modul", "Das Modul, das den Ablauf startet", "Ein Fehler", "Ein Bezahlplan"], a: 1, e: "Ohne Trigger läuft das Szenario nie los." },
        { t: "match", q: "Ordne den Make-Begriff zu.", p: [["Szenario", "Komplette Automation"], ["Modul", "Einzelner Arbeitsschritt"], ["Mapping", "Daten aus vorherigen Schritten einsetzen"], ["Verbindung", "Anmeldung bei einer App"]], e: "Diese vier Begriffe brauchst du in jedem Szenario." },
        { t: "mc", q: "Welcher Trigger reagiert innerhalb von Sekunden und spart Kontingent?", o: ["Geplanter Trigger (Polling)", "Sofort-Trigger (Webhook)", "Aggregator", "Router"], a: 1, e: "Beim Sofort-Trigger meldet sich die App selbst." },
        { t: "match", q: "Welches Werkzeug brauchst du?", p: [["Nur Anfragen über 500 € weiterleiten", "Filter"], ["Konzert- und Unterrichtsanfragen getrennt behandeln", "Router"], ["3 Anhänge einzeln speichern", "Iterator"], ["Alle Anmeldungen der Woche in einer Mail bündeln", "Aggregator"]], e: "Filter prüft, Router verzweigt, Iterator zerlegt, Aggregator bündelt." },
        { t: "order", q: "Bringe das Szenario „Konzertanfrage“ in eine sinnvolle Reihenfolge.", o: ["Formular ausgefüllt (Trigger)", "Daten im Sheet speichern", "Claude entwirft Antwort", "Antwort als Gmail-Entwurf speichern", "Mensch prüft und sendet"], e: "Der Mensch bleibt vor dem Versand in der Schleife." },
        { t: "mc", q: "Ein Szenario hat 5 Module und läuft 200-mal im Monat. Wie viele Modul-Schritte etwa?", o: ["200", "500", "1.000", "5"], a: 2, e: "5 × 200 = 1.000 Schritte." },
        { t: "tf", q: "Filter möglichst früh im Szenario zu setzen, spart Kontingent.", a: true, e: "Dann laufen nachfolgende Module nur, wenn sie wirklich gebraucht werden." },
        { t: "tf", q: "Für Make muss man programmieren können.", a: false, e: "Make ist ein No-Code-Tool. Funktionen helfen, sind aber kein Programmieren." }
      ],
      practice: {
        task: "Entwirf ein vollständiges Make-Szenario für einen eigenen Ablauf: Trigger (sofort oder geplant?), 4–6 Module, mindestens ein Filter oder Router, eine Stelle für menschliche Freigabe und eine grobe Rechnung des monatlichen Verbrauchs.",
        hint: "Beginne mit der Frage: Was löst den Ablauf aus? Dann: Was muss jedes Mal passieren? Wo muss ich zwischen Fällen unterscheiden?",
        solution: "Beispiel „Neue Schüleranfrage“:\nTrigger: Jotform-Formular (sofort).\n1) Zeile in Google Sheet anlegen.\n2) Router: Weg A „Anfänger“, Weg B „Fortgeschritten“ (Filter auf Feld Niveau).\n3) Claude schreibt eine passende Antwort mit freien Terminen aus dem Sheet.\n4) Antwort als Gmail-Entwurf (Freigabe durch mich).\n5) Slack-Nachricht an mich.\nVerbrauch: ca. 5 Schritte × 10 Anfragen = 50 Schritte pro Monat, gut im kleinen Tarif."
      }
    },
    {
      id: "z2l4",
      title: "n8n und Self-Hosting",
      icon: "🔗",
      lesson: `
<p><b>n8n</b> (gesprochen „n-eight-n“, eine Abkürzung für „nodemation“) ist wie Make ein Werkzeug, mit dem du Abläufe aus Bausteinen zusammensetzt. Der große Unterschied: Du kannst n8n <b>auf deinem eigenen Server betreiben</b>. Außerdem ist es besonders stark bei <b>KI-Agenten</b>.</p>

<h4>Teil 1: Begriffe im Vergleich zu Make</h4>
<table>
<tr><th>Make</th><th>n8n</th><th>Bedeutung</th></tr>
<tr><td>Szenario</td><td>Workflow</td><td>Die ganze Automation</td></tr>
<tr><td>Modul</td><td>Node</td><td>Ein Arbeitsschritt</td></tr>
<tr><td>Verbindung</td><td>Credential</td><td>Gespeicherter Zugang zu einer App</td></tr>
<tr><td>Durchlauf</td><td>Execution</td><td>Eine Ausführung des Ablaufs</td></tr>
</table>
<p>Daten fließen in n8n als <b>Items</b> von Node zu Node. Mit <b>Expressions</b> greifst du auf frühere Daten zu. Das sieht so aus: <code>{{ $json.name }}</code>, also „nimm das Feld name aus den Daten des vorherigen Nodes“. Du kannst Felder aber auch einfach per Drag-and-drop hineinziehen.</p>

<h4>Teil 2: Was n8n besonders macht</h4>
<ul>
<li><b>Self-Hosting:</b> Du installierst n8n auf einem eigenen Server. Die Daten bleiben dort, das ist gut für den Datenschutz, z. B. bei Mitgliederdaten.</li>
<li><b>Kosten:</b> Selbst gehostet zahlst du nur den Server, egal wie oft ein Workflow läuft. Bei der Cloud-Version zahlst du pro Ausführung (Execution), nicht pro Schritt. Ein langer Workflow kostet also nicht mehr als ein kurzer.</li>
<li><b>Code-Node:</b> Fehlt ein Baustein, schreibst du ein paar Zeilen JavaScript oder Python. Das kann dir Claude schreiben.</li>
<li><b>HTTP-Request-Node:</b> Spricht jede beliebige API an, auch wenn es keinen fertigen Baustein dafür gibt.</li>
<li><b>KI-Nodes:</b> Ein eigener <b>AI-Agent-Node</b> mit Sprachmodell, Gedächtnis (Memory) und Werkzeugen (Tools).</li>
</ul>

<h4>Teil 3: Der AI-Agent-Node</h4>
<p>In n8n baust du einen KI-Agenten wie aus Lego:</p>
<ul>
<li><b>Chat Model:</b> Welches Sprachmodell denkt? (z. B. Claude über API)</li>
<li><b>Memory:</b> Merkt sich den bisherigen Gesprächsverlauf, damit der Agent nicht nach jeder Nachricht alles vergisst.</li>
<li><b>Tools:</b> Was darf der Agent tun? Z. B. im Kalender nachsehen, in einer Tabelle suchen, eine Mail entwerfen, in einer Wissensdatenbank suchen.</li>
<li><b>System-Prompt:</b> Rolle, Regeln und Grenzen des Agenten.</li>
</ul>
<div class="ex">Agent „Vereinsassistent“: Chat-Trigger auf der Website → AI Agent (Claude) mit Memory → Tools: „Termine aus Google Kalender lesen“, „Satzung durchsuchen (RAG)“, „Anfrage an Vorstand weiterleiten“. Mitglieder fragen „Wann ist die nächste Probe?“, und der Agent schaut selbst im Kalender nach.</div>

<h4>Teil 4: Self-Hosting Schritt für Schritt (Überblick)</h4>
<ol>
<li><b>Server mieten:</b> Ein kleiner virtueller Server (VPS), z. B. bei <b>Hetzner</b>, einem deutschen Anbieter mit Rechenzentren in Deutschland und Finnland. Für den Anfang reichen 2 CPU-Kerne und 4 GB Arbeitsspeicher, das kostet wenige Euro im Monat [Prüfen].</li>
<li><b>Verwaltung einrichten:</b> <b>Coolify</b> ist eine kostenlose Oberfläche, die du einmal auf dem Server installierst. Danach installierst du Programme wie n8n per Klick, ganz ohne Kommandozeile.</li>
<li><b>n8n installieren:</b> In Coolify n8n auswählen und starten. Im Hintergrund läuft es in einem <b>Docker-Container</b>, einer abgeschlossenen Box mit allem, was das Programm braucht.</li>
<li><b>Domain und HTTPS:</b> Eine Adresse wie <code>n8n.meinverein.de</code> einrichten. Coolify besorgt automatisch ein Sicherheitszertifikat, damit die Verbindung verschlüsselt ist.</li>
<li><b>Absichern:</b> Starkes Passwort, regelmäßige Updates, automatische <b>Backups</b>.</li>
</ol>
<div class="tip">Self-Hosting heißt: <b>Du bist der Hausmeister.</b> Fällt der Server aus oder fehlt ein Update, kümmert sich niemand außer dir. Plane dafür feste Zeit ein, z. B. 30 Minuten im Monat.</div>

<h4>Teil 5: Lizenz, kurz erklärt</h4>
<p>n8n ist „fair-code“: Du darfst es kostenlos für dich und deine Organisation selbst betreiben. Wenn du n8n aber als eigenes Produkt an andere verkaufen willst, gelten Einschränkungen. Für eigene Abläufe und für Kunden-Workflows ist das in der Regel kein Problem [Prüfen bei kommerzieller Nutzung].</p>

<h4>Teil 6: Make oder n8n?</h4>
<table>
<tr><th>Frage</th><th>Eher Make</th><th>Eher n8n</th></tr>
<tr><td>Wie schnell will ich starten?</td><td>Sofort, ohne Server</td><td>Darf etwas Einrichtung kosten</td></tr>
<tr><td>Wie sensibel sind die Daten?</td><td>Unkritisch</td><td>Personenbezogen, sensibel</td></tr>
<tr><td>Wie oft laufen die Abläufe?</td><td>Selten</td><td>Sehr oft</td></tr>
<tr><td>Wie komplex?</td><td>Einfache Ketten</td><td>KI-Agenten, eigener Code</td></tr>
<tr><td>Wer wartet das?</td><td>Niemand nötig</td><td>Jemand kümmert sich</td></tr>
</table>`,
      keys: [
        "n8n: Workflow aus Nodes, Credentials, Executions",
        "Expressions wie {{ $json.name }} greifen auf Daten zu",
        "AI-Agent-Node = Modell + Memory + Tools + System-Prompt",
        "Self-Hosting: Hetzner-Server + Coolify + Docker",
        "Selbst hosten = Datenhoheit, aber du bist der Hausmeister"
      ],
      quiz: [
        { t: "match", q: "Welcher n8n-Begriff entspricht dem Make-Begriff?", p: [["Szenario", "Workflow"], ["Modul", "Node"], ["Verbindung", "Credential"], ["Durchlauf", "Execution"]], e: "Gleiche Idee, andere Namen." },
        { t: "mc", q: "Was bedeutet die Expression {{ $json.name }}?", o: ["Lösche das Feld name", "Nimm das Feld name aus den Daten des vorherigen Nodes", "Erstelle eine neue Datei", "Sende eine Mail an name"], a: 1, e: "Expressions setzen Daten aus früheren Schritten ein." },
        { t: "match", q: "Ordne die Bausteine des AI-Agent-Nodes zu.", p: [["Chat Model", "Das Sprachmodell, das denkt"], ["Memory", "Merkt sich den Gesprächsverlauf"], ["Tools", "Was der Agent tun darf"], ["System-Prompt", "Rolle, Regeln, Grenzen"]], e: "Wie Lego: jedes Teil hat eine Aufgabe." },
        { t: "order", q: "Bringe das Self-Hosting in eine sinnvolle Reihenfolge.", o: ["Server mieten", "Coolify installieren", "n8n per Coolify starten", "Domain und HTTPS einrichten", "Backups und Updates einrichten"], e: "Erst das Haus, dann die Möbel, dann die Schlösser." },
        { t: "mc", q: "Was ist ein Docker-Container?", o: ["Ein Frachtschiff", "Eine abgeschlossene Box mit einem Programm und allem, was es braucht", "Ein Passwort-Manager", "Ein KI-Modell"], a: 1, e: "So laufen Programme auf dem Server sauber getrennt." },
        { t: "mc", q: "Dein Verein will Mitgliederdaten automatisiert verarbeiten, Abläufe laufen sehr oft, und ein Mitglied kümmert sich gern um Technik. Was passt besser?", o: ["Make in der Cloud", "Selbst gehostetes n8n", "Gar keine Automation", "Excel-Makros"], a: 1, e: "Sensible Daten, viele Ausführungen und jemand für die Wartung sprechen für n8n." },
        { t: "tf", q: "Wer selbst hostet, ist auch für Backups und Sicherheitsupdates verantwortlich.", a: true, e: "Du bist der Hausmeister." },
        { t: "tf", q: "In der n8n-Cloud kostet ein Workflow mit 20 Nodes pro Ausführung 20-mal so viel wie einer mit 1 Node.", a: false, e: "n8n rechnet pro Ausführung ab, nicht pro Schritt." }
      ],
      practice: {
        task: "Plane einen n8n-KI-Agenten für eine echte Aufgabe: Wer schreibt ihm (Trigger)? Welches Modell? Braucht er Memory? Welche 3 Tools darf er nutzen und welche ausdrücklich nicht? Self-Hosting oder Cloud, und warum?",
        hint: "Tools sind Fähigkeiten: Nachsehen (lesen) ist harmlos, Senden oder Löschen (schreiben) ist riskanter.",
        solution: "Beispiel „Probenassistent“: Trigger: Telegram-Nachricht von Ensemble-Mitgliedern. Modell: Claude. Memory: ja, damit Rückfragen funktionieren. Tools: 1) Probentermine im Kalender lesen, 2) Probenplan-PDF durchsuchen, 3) Absage in Tabelle eintragen. Nicht erlaubt: Termine löschen, Nachrichten an Externe senden. Self-Hosting auf Hetzner, weil Telefonnummern und Abwesenheiten personenbezogen sind."
      }
    },
    {
      id: "z2l5",
      title: "RAG: KI mit eigenem Wissen",
      icon: "📚",
      lesson: `
<p>Ein Sprachmodell kennt das öffentliche Wissen aus seinem Training. Es kennt aber <b>nicht</b> deine Satzung, deinen Tarifvertrag, deine Preisliste oder deine Probenregeln. Fragst du trotzdem danach, rät es, und das führt zu Halluzinationen. <b>RAG</b> löst dieses Problem.</p>
<p><b>RAG</b> steht für <b>Retrieval Augmented Generation</b>, auf Deutsch etwa „durch Nachschlagen verbesserte Texterzeugung“. Die Idee ist einfach: <b>Bevor</b> die KI antwortet, werden die passenden Stellen aus deinen Dokumenten herausgesucht und ihr mitgegeben. Wie eine Prüfung mit erlaubtem Spickzettel, und zwar genau dem richtigen Zettel.</p>

<h4>Teil 1: Warum nicht einfach alles hochladen?</h4>
<p>Bei ein paar Dokumenten kannst du sie tatsächlich direkt in den Chat laden. Bei hunderten Seiten geht das nicht mehr: Das Kontextfenster ist begrenzt, jede Anfrage würde teuer und langsam, und das Modell verliert in riesigen Texten leicht Details. RAG sucht deshalb nur die <b>wenigen relevanten Abschnitte</b> heraus.</p>

<h4>Teil 2: Die Vorbereitung (einmalig)</h4>
<ol>
<li><b>Dokumente sammeln:</b> PDFs, Word-Dateien, Webseiten, Wiki-Seiten.</li>
<li><b>Zerlegen (Chunking):</b> Die Texte werden in kleine Abschnitte geschnitten, sogenannte <b>Chunks</b>, z. B. je ein Absatz oder ca. 500 Wörter. Meist mit etwas Überlappung, damit kein Gedanke mitten im Satz zerschnitten wird.</li>
<li><b>Embeddings berechnen:</b> Ein spezielles Modell verwandelt jeden Chunk in eine lange <b>Zahlenreihe</b>. Diese Zahlen beschreiben die <b>Bedeutung</b> des Textes. Texte mit ähnlicher Bedeutung bekommen ähnliche Zahlen.</li>
<li><b>Speichern:</b> Chunks und Zahlen kommen in eine <b>Vektordatenbank</b> (z. B. Supabase, Pinecone, Qdrant). „Vektor“ ist einfach der Fachbegriff für so eine Zahlenreihe.</li>
</ol>
<div class="ex">Stell dir eine riesige Landkarte vor. Jeder Textabschnitt ist ein Punkt darauf. Abschnitte über Urlaub liegen nah beieinander, Abschnitte über Gagen in einer anderen Ecke. Das Embedding ist die Koordinate des Punktes.</div>

<h4>Teil 3: Die Abfrage (bei jeder Frage)</h4>
<div class="flow"><span>❓ Frage<small>„Wie viel Urlaub habe ich?“</small></span><i>→</i><span>🔢 Embedding<small>Frage wird zur Koordinate</small></span><i>→</i><span>🔍 Suche<small>nächste Punkte auf der Karte</small></span><i>→</i><span>📄 Top-Treffer<small>z. B. 3–5 Chunks</small></span><i>→</i><span>🤖 LLM<small>Frage + Chunks → Antwort</small></span></div>
<p>Das Besondere: Die Suche funktioniert nach <b>Bedeutung</b>, nicht nach exakten Wörtern. Die Frage „Wie viel Urlaub habe ich?“ findet auch den Abschnitt „Der Jahresurlaub beträgt 30 Arbeitstage“, obwohl die Wörter verschieden sind. Das nennt man <b>semantische Suche</b>.</p>
<p>Der Prompt an das Modell sieht dann ungefähr so aus: „Beantworte die Frage nur anhand dieser Auszüge. Nenne die Quelle. Steht es nicht drin, sag das. Auszüge: … Frage: …“</p>

<h4>Teil 4: Was RAG gut oder schlecht macht</h4>
<ul>
<li><b>Gute Dokumente:</b> Veraltete oder widersprüchliche Dokumente liefern widersprüchliche Antworten. Erst aufräumen, dann einlesen.</li>
<li><b>Chunk-Größe:</b> Zu klein, und der Zusammenhang fehlt. Zu groß, und die Suche wird ungenau.</li>
<li><b>Metadaten:</b> Zu jedem Chunk Titel, Datum und Quelle speichern. Dann kann die KI sagen „laut Satzung, § 5“ und man kann nach Datum filtern.</li>
<li><b>Tabellen und Scans</b> sind schwierig. Gescannte PDFs brauchen erst Texterkennung (OCR).</li>
<li><b>Aktualisieren:</b> Ändert sich ein Dokument, muss es neu eingelesen werden. In n8n lässt sich das automatisieren.</li>
</ul>

<h4>Teil 5: RAG, Fine-Tuning oder RAFT?</h4>
<table>
<tr><th></th><th>RAG</th><th>Fine-Tuning</th></tr>
<tr><td>Was passiert?</td><td>Passende Texte werden bei jeder Frage mitgegeben</td><td>Das Modell wird mit eigenen Beispielen nachtrainiert</td></tr>
<tr><td>Gut für</td><td><b>Wissen</b>, das sich ändert</td><td><b>Stil, Format, Verhalten</b></td></tr>
<tr><td>Aktualisieren</td><td>Dokument austauschen, fertig</td><td>Neu trainieren, aufwendig</td></tr>
<tr><td>Quellen nachvollziehbar?</td><td>Ja</td><td>Nein</td></tr>
</table>
<p><b>RAFT</b> (Retrieval Augmented Fine-Tuning) kombiniert beides: Das Modell wird darauf trainiert, mit gefundenen Dokumenten besonders gut umzugehen und unpassende Treffer zu ignorieren. Das ist etwas für große Projekte.</p>
<div class="tip">Faustregel für 95 % aller Fälle: Erst gute Prompts, dann RAG. Fine-Tuning nur, wenn beides nachweislich nicht reicht.</div>

<h4>Teil 6: RAG ohne Programmieren</h4>
<p>Du musst RAG nicht selbst bauen. Viele Werkzeuge haben es eingebaut: <b>Projekte in Claude</b> mit hochgeladenen Dateien, <b>NotebookLM</b> von Google, Custom GPTs mit Wissensdateien oder in n8n fertige Bausteine für Vektordatenbanken.</p>`,
      keys: [
        "RAG = erst passende Stellen suchen, dann antworten",
        "Chunks → Embeddings (Bedeutungs-Koordinaten) → Vektordatenbank",
        "Semantische Suche findet nach Bedeutung, nicht nach Wörtern",
        "Qualität hängt an Dokumenten, Chunk-Größe, Metadaten",
        "RAG für Wissen, Fine-Tuning für Stil"
      ],
      quiz: [
        { t: "order", q: "Bringe die RAG-Vorbereitung in die richtige Reihenfolge.", o: ["Dokumente sammeln", "In Chunks zerlegen", "Embeddings berechnen", "In der Vektordatenbank speichern"], e: "Erst Material, dann zerschneiden, dann Koordinaten, dann ablegen." },
        { t: "mc", q: "Was ist ein Embedding?", o: ["Ein eingebettetes Video", "Eine Zahlenreihe, die die Bedeutung eines Textes beschreibt", "Ein Passwort", "Ein PDF-Format"], a: 1, e: "Wie eine Koordinate auf einer Bedeutungs-Landkarte." },
        { t: "mc", q: "Die Frage lautet „Wann muss ich zur Probe da sein?“. Im Dokument steht „Einspielzeit: 30 Minuten vor Beginn“. Findet RAG das?", o: ["Nein, die Wörter sind verschieden", "Ja, die semantische Suche findet nach Bedeutung", "Nur mit Großbuchstaben", "Nur bei Fine-Tuning"], a: 1, e: "Semantische Suche vergleicht Bedeutung, nicht Wortlaut." },
        { t: "match", q: "RAG oder Fine-Tuning?", p: [["Preisliste ändert sich monatlich", "RAG"], ["Antworten sollen immer im Hausstil klingen", "Fine-Tuning"], ["Quelle muss nachvollziehbar sein", "RAG (Quelle sichtbar)"], ["Festes Ausgabeformat antrainieren", "Fine-Tuning (Verhalten)"]], e: "Wissen → RAG. Stil und Verhalten → Fine-Tuning." },
        { t: "mc", q: "Warum speichert man Metadaten wie Titel und Datum zu jedem Chunk?", o: ["Damit es hübscher aussieht", "Damit die KI Quellen nennen und man nach Datum filtern kann", "Weil es Pflicht ist", "Um Tokens zu verschwenden"], a: 1, e: "Metadaten machen Antworten überprüfbar und filterbar." },
        { t: "tf", q: "Veraltete Dokumente in der Datenbank können zu falschen Antworten führen.", a: true, e: "RAG ist nur so gut wie seine Dokumente." },
        { t: "tf", q: "Für einfache Fälle kann man RAG ohne Programmieren nutzen, z. B. mit Projekten in Claude oder NotebookLM.", a: true, e: "Viele Tools haben RAG eingebaut." }
      ],
      practice: {
        task: "Plane einen RAG-Wissensbot: 1) Welche 4–6 Dokumente kommen hinein? 2) Was räumst du vorher auf? 3) Welche Metadaten speicherst du? 4) Schreibe den Prompt, mit dem das Modell die gefundenen Auszüge verwenden soll.",
        hint: "Denk an die Fragen, die immer wieder gestellt werden. Und an die Regel: Wenn es nicht drinsteht, soll die KI es sagen.",
        solution: "1) Satzung, Beitragsordnung, Probenregeln, Reise-Checkliste, FAQ, Kontaktliste Vorstand (ohne private Nummern). 2) Alte Satzungsversionen löschen, Widersprüche klären. 3) Titel, Gültig-ab-Datum, Abschnitt/Paragraf. 4) „Du bist der Vereinsassistent. Beantworte die Frage nur anhand der folgenden Auszüge. Nenne zu jeder Aussage Dokument und Abschnitt. Steht die Antwort nicht in den Auszügen, sag: ‚Dazu finde ich nichts, bitte wende dich an den Vorstand.‘ Auszüge: … Frage: …“"
      }
    },
    {
      id: "z2l6",
      title: "Die Microsoft-Welt",
      icon: "🪟",
      lesson: `
<p>Sehr viele Unternehmen, Behörden, Hochschulen und auch Orchester arbeiten mit <b>Microsoft 365</b>: Outlook, Word, Excel, PowerPoint, Teams, OneDrive und SharePoint. Wer dort KI einführt, nutzt meist Microsofts eigene Werkzeuge. Die drei wichtigsten heißen <b>Copilot</b>, <b>Power Automate</b> und <b>Azure</b>.</p>

<h4>Teil 1: Microsoft 365 Copilot</h4>
<p><b>Copilot</b> ist ein KI-Assistent, der direkt in den Office-Programmen sitzt. Der Clou: Er kann auf alles zugreifen, worauf <b>du</b> im Unternehmen Zugriff hast, also deine Mails, Dateien, Chats und Termine. Dieses Firmenwissen nennt Microsoft den <b>Microsoft Graph</b>.</p>
<ul>
<li><b>Outlook:</b> „Fasse diesen Mailverlauf zusammen“, „Entwirf eine höfliche Absage.“</li>
<li><b>Word:</b> „Erstelle aus diesen Stichpunkten ein Konzept“, „Kürze den Text auf eine Seite.“</li>
<li><b>Excel:</b> „Welche Monate hatten die höchsten Ausgaben?“, „Erstelle eine Formel für …“</li>
<li><b>PowerPoint:</b> „Mach aus diesem Word-Dokument eine Präsentation mit 8 Folien.“</li>
<li><b>Teams:</b> „Was wurde in der Besprechung entschieden? Wer hat welche Aufgabe?“</li>
</ul>
<p>Es gibt eine kostenlose Chat-Variante und die kostenpflichtige Lizenz <b>Microsoft 365 Copilot</b>, die den Zugriff auf Firmendaten erst möglich macht [Preise prüfen]. Zusätzlich lassen sich mit <b>Copilot Studio</b> eigene Agenten bauen, z. B. ein HR-Bot, der Fragen zum Urlaubsantrag beantwortet.</p>

<h4>Teil 2: Das größte Risiko: Berechtigungen</h4>
<p>Copilot respektiert Berechtigungen, er sieht nur, was du sehen darfst. Das klingt sicher. Das Problem: In vielen Firmen sind Ordner jahrelang <b>zu großzügig freigegeben</b>. Früher hat das niemand bemerkt, weil niemand gezielt danach gesucht hat. Copilot findet es aber.</p>
<div class="ex">Die Gehaltsliste liegt seit Jahren in einem SharePoint-Ordner, der versehentlich „für alle im Unternehmen“ freigegeben ist. Ein Mitarbeiter fragt Copilot: „Was verdient mein Kollege?“, und Copilot antwortet.</div>
<div class="tip">Vor der Einführung von Copilot: <b>Berechtigungen aufräumen.</b> Wer hat Zugriff auf welche Ordner? Sind vertrauliche Dateien richtig geschützt (z. B. mit Vertraulichkeitsbezeichnungen)?</div>

<h4>Teil 3: Power Automate</h4>
<p><b>Power Automate</b> ist das Automationswerkzeug von Microsoft, vergleichbar mit Make und n8n. Ein Ablauf heißt hier <b>Flow</b> und besteht aus einem Trigger und Aktionen.</p>
<ul>
<li><b>Cloud-Flows:</b> Verbinden Microsoft- und andere Dienste, z. B. „Wenn eine Mail mit Anhang ankommt, speichere den Anhang in SharePoint und informiere mich in Teams.“</li>
<li><b>Desktop-Flows (RPA):</b> Steuern alte Programme ohne Schnittstelle, indem sie Mausklicks und Eingaben nachahmen. RPA heißt „Robotic Process Automation“.</li>
<li><b>Genehmigungen:</b> Eingebaute Freigabe-Abläufe, z. B. „Rechnung über 1.000 € → Chefin bekommt Genehmigungsanfrage in Teams“.</li>
<li><b>KI-Bausteine:</b> Text zusammenfassen, Belege und Formulare auslesen, Mails einordnen.</li>
</ul>
<div class="ex"><b>Flow „Rechnungseingang“:</b>
<div class="flow"><span>📧 Mail mit PDF<small>Trigger</small></span><i>→</i><span>🧾 KI liest Beleg<small>Betrag, Lieferant</small></span><i>→</i><span>✅ Genehmigung<small>in Teams</small></span><i>→</i><span>📁 SharePoint<small>ablegen</small></span><i>→</i><span>📊 Excel<small>Liste ergänzen</small></span></div></div>

<h4>Teil 4: Azure</h4>
<p><b>Azure</b> ist Microsofts Cloud-Plattform, die Werkstatt im Hintergrund. Dort betreiben Unternehmen Server, Datenbanken und eigene KI-Anwendungen. Für KI wichtig:</p>
<ul>
<li><b>KI-Modelle per API:</b> Modelle verschiedener Anbieter (z. B. OpenAI, und je nach Angebot auch weitere) in einer abgesicherten Unternehmensumgebung [Prüfen].</li>
<li><b>Rechenzentren in der EU:</b> Daten können in Europa verarbeitet werden.</li>
<li><b>Verträge:</b> Datenschutz- und Auftragsverarbeitungsverträge sind oft schon über den Microsoft-Rahmenvertrag geregelt.</li>
</ul>

<h4>Teil 5: Wann lohnt sich die Microsoft-Welt?</h4>
<ul>
<li><b>Ja,</b> wenn das Unternehmen ohnehin Microsoft 365 nutzt. Anmeldung, Rechte und Verträge sind schon da, die Mitarbeitenden kennen die Programme.</li>
<li><b>Eher nein,</b> für Selbstständige oder kleine Vereine, die mit Google oder anderen Tools arbeiten. Dann sind Make, n8n und ein KI-Abo meist günstiger und flexibler.</li>
</ul>`,
      keys: [
        "Copilot = KI in Outlook, Word, Excel, PowerPoint, Teams mit Zugriff auf Firmendaten",
        "Risiko: zu großzügige Freigaben werden sichtbar → vorher aufräumen",
        "Power Automate = Flows, Genehmigungen, RPA für alte Programme",
        "Azure = Microsoft-Cloud für eigene KI-Anwendungen, auch in der EU",
        "Lohnt sich vor allem, wenn ohnehin M365 im Einsatz ist"
      ],
      quiz: [
        { t: "match", q: "Ordne das Microsoft-Werkzeug zu.", p: [["Copilot", "KI-Assistent in den Office-Programmen"], ["Power Automate", "Automationen mit Flows"], ["Azure", "Cloud-Plattform für eigene Anwendungen"], ["Copilot Studio", "Eigene Agenten bauen"]], e: "Assistent, Automation, Werkstatt, Agenten-Baukasten." },
        { t: "mc", q: "Warum muss man vor Copilot die Berechtigungen aufräumen?", o: ["Copilot ignoriert Berechtigungen", "Copilot findet alles, worauf jemand Zugriff hat, auch versehentlich freigegebene Dateien", "Sonst ist Copilot langsamer", "Das ist nicht nötig"], a: 1, e: "Alte Freigabefehler werden durch die Suche plötzlich sichtbar." },
        { t: "mc", q: "Was ist RPA in Power Automate?", o: ["Ein Rechnungsformat", "Steuerung alter Programme ohne Schnittstelle durch nachgeahmte Klicks und Eingaben", "Ein KI-Modell", "Eine Teams-Funktion"], a: 1, e: "Robotic Process Automation, die Notlösung für Programme ohne API." },
        { t: "order", q: "Bringe den Flow „Rechnungseingang“ in die richtige Reihenfolge.", o: ["Mail mit PDF kommt an", "KI liest Betrag und Lieferant aus", "Genehmigung in Teams", "PDF in SharePoint ablegen"], e: "Erst erkennen, dann genehmigen, dann ablegen." },
        { t: "tf", q: "Copilot kann eine Teams-Besprechung zusammenfassen und Aufgaben herausziehen.", a: true, e: "Eine der beliebtesten Funktionen." },
        { t: "mc", q: "Für wen ist die Microsoft-Welt meist die naheliegende Wahl?", o: ["Für Unternehmen, die ohnehin Microsoft 365 nutzen", "Für jeden kleinen Verein", "Nur für Programmierer", "Für niemanden"], a: 0, e: "Rechte, Anmeldung und Verträge sind dann schon vorhanden." }
      ],
      practice: {
        task: "Eine Musikhochschule oder ein Orchesterbüro nutzt Microsoft 365. Schlage 3 Einsätze für Copilot und 1 Power-Automate-Flow vor. Nenne außerdem 2 Punkte, die vor der Einführung geprüft werden müssen.",
        hint: "Wo wird viel geschrieben, gelesen, zusammengefasst? Welcher Ablauf wiederholt sich mit Freigabe?",
        solution: "Copilot: 1) Protokolle von Teams-Sitzungen mit Aufgabenliste. 2) Dienstpläne in Excel auswerten („Wer hat diesen Monat die meisten Dienste?“). 3) Pressetexte aus Programmnotizen in Word. Flow: Aushilfen-Anfrage → Formular → Genehmigung durch Orchesterdirektion in Teams → Bestätigungsmail + Eintrag in Dienstplan. Vorab prüfen: 1) Freigaben auf SharePoint (Gehälter, Personalakten, Probespiel-Bewertungen!). 2) Mitarbeitervertretung beteiligen und Datenschutz klären."
      }
    }
  ]
});
