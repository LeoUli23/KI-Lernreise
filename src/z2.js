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
      id: "z2api1",
      title: "Claude per API: der erste Aufruf",
      icon: "📨",
      src: [
        { t: "Anthropic Courses: API Fundamentals, Lektion 1 „Getting started“ (englisch)", u: "https://github.com/anthropics/courses/blob/master/anthropic_api_fundamentals/01_getting_started.ipynb", lic: true },
        { t: "Anthropic Courses: API Fundamentals, Lektion 2 „Messages format“ (englisch)", u: "https://github.com/anthropics/courses/blob/master/anthropic_api_fundamentals/02_messages_format.ipynb", lic: true },
        { t: "Claude-Doku: Stop-Gründe (stop_reason)", u: "https://platform.claude.com/docs/en/api/handling-stop-reasons" }
      ],
      lesson: `
<p>Bisher hast du Claude im Chat genutzt. Über die <b>API</b> (die Schnittstelle zwischen Programmen aus dem vorigen Level) sprechen <b>deine eigenen Programme</b> mit Claude: ein Skript, das 100 Mails vorsortiert, eine Automation in Make oder n8n, ein Formular auf deiner Webseite. All diese Werkzeuge benutzen im Hintergrund genau den Aufruf, den du hier kennenlernst. Wer ihn einmal verstanden hat, versteht auch, was in Automationen passiert.</p>
<div class="tip">Die Python-Übungen in diesem und den folgenden Levels sind ein Angebot. Wenn du noch nicht programmierst, lies den Code wie ein Rezept: Die Kommentare hinter dem Zeichen # erklären jede Zeile. Ausführen kannst du ihn später ganz bequem mit Claude Code (Zone 7).</div>

<h4>Teil 1: Was du brauchst</h4>
<ol>
<li><b>Ein Konto in der Claude Console</b> (platform.claude.com). Das ist getrennt von deinem Chat-Abo. Die API wird nach Verbrauch abgerechnet: Du lädst Guthaben auf und setzt am besten gleich ein <b>Ausgabelimit</b>.</li>
<li><b>Einen API-Key</b>, den du in der Console erzeugst. Er ist der Hausschlüssel aus dem vorigen Level und wird genauso sorgfältig behandelt.</li>
<li><b>Python und das offizielle SDK.</b> SDK heißt „Software Development Kit“, eine fertige Programmbibliothek, die dir die Arbeit mit der API abnimmt. Installation im Terminal: <code>pip install anthropic python-dotenv</code></li>
</ol>

<h4>Teil 2: Den Key sicher ablegen</h4>
<p>Der Key gehört <b>nie</b> direkt in den Code, denn Code wird geteilt, kopiert und hochgeladen. Lege stattdessen im Projektordner eine Datei <code>.env</code> an:</p>
<pre>ANTHROPIC_API_KEY=sk-ant-hier-steht-dein-key</pre>
<p>Das Paket <code>python-dotenv</code> lädt diese Datei beim Start, und das SDK findet den Key dann von allein. Trage <code>.env</code> in die <code>.gitignore</code> ein, damit sie nie auf GitHub landet.</p>

<h4>Teil 3: Der erste Aufruf</h4>
<pre>from dotenv import load_dotenv
from anthropic import Anthropic

load_dotenv()          # liest die Datei .env
client = Anthropic()   # findet den Key automatisch

antwort = client.messages.create(
    model="claude-haiku-5-5",      # welches Modell?
    max_tokens=500,                # Obergrenze für die Antwortlänge
    messages=[
        {"role": "user", "content": "Nenne drei Tipps gegen Lampenfieber."}
    ],
)

for block in antwort.content:      # die Antwort besteht aus Blöcken
    if block.type == "text":
        print(block.text)</pre>
<p>Drei Angaben sind Pflicht: <b>model</b> (welches Claude-Modell), <b>max_tokens</b> (wie lang die Antwort höchstens werden darf) und <b>messages</b> (das Gespräch). Alles andere ist optional.</p>
<div class="now">Im Original-Kurs (2024, mit Claude 3) steht oft <code>antwort.content[0].text</code>. Bei aktuellen Modellen kann der erste Block ein Denk-Block (thinking) sein. Wähle Text deshalb immer nach dem Block-Typ aus, so wie oben. Modellnamen ändern sich laufend: Der aktuelle Stand steht in der Claude-Doku.</div>

<h4>Teil 4: Das Messages-Format</h4>
<p><b>messages</b> ist eine Liste von Nachrichten. Jede hat eine <b>Rolle</b> (role) und einen <b>Inhalt</b> (content):</p>
<ul>
<li><b>user</b>: das, was der Mensch bzw. dein Programm sagt</li>
<li><b>assistant</b>: das, was Claude gesagt hat</li>
</ul>
<p>Die Regeln: Das Gespräch beginnt mit <b>user</b>, die Rollen wechseln sich ab, und bei den aktuellen Modellen muss die <b>letzte</b> Nachricht ebenfalls von <b>user</b> kommen.</p>
<p>Ganz wichtig: <b>Die API hat kein Gedächtnis.</b> Jeder Aufruf steht für sich. Für ein Gespräch schickst du deshalb jedes Mal den <b>kompletten bisherigen Verlauf</b> mit:</p>
<pre>verlauf = [
    {"role": "user", "content": "Was ist ein Paukenwirbel?"},
    {"role": "assistant", "content": "Ein Paukenwirbel ist ein schneller Wechsel ..."},
    {"role": "user", "content": "Und wie wird er notiert?"},
]</pre>
<p>Genau so funktioniert auch die Claude-App: Sie schickt bei jeder neuen Nachricht den ganzen Chat mit. Darum werden lange Chats langsamer und teurer (Zone 3, Modellwahl und Memory).</p>
<p>Die Liste kann man auch geschickt nutzen: Ein paar <b>erfundene Frage-Antwort-Paare</b> am Anfang zeigen Claude, wie Antworten aussehen sollen. Das ist Few-Shot-Prompting (Zone 3) in API-Form.</p>

<h4>Teil 5: Die Antwort verstehen</h4>
<table>
<tr><th>Feld</th><th>Bedeutung</th></tr>
<tr><td><code>content</code></td><td>Liste von Blöcken: Text, ggf. Denk-Blöcke oder Werkzeug-Aufrufe</td></tr>
<tr><td><code>stop_reason</code></td><td>Warum Claude aufgehört hat (siehe unten)</td></tr>
<tr><td><code>usage</code></td><td>Verbrauchte Tokens: <code>input_tokens</code> und <code>output_tokens</code>. Daraus ergeben sich die Kosten</td></tr>
<tr><td><code>model</code>, <code>id</code></td><td>Welches Modell geantwortet hat, eindeutige Nummer der Antwort</td></tr>
</table>
<p>Die wichtigsten Werte für <code>stop_reason</code>: <b>end_turn</b> (Claude ist fertig), <b>max_tokens</b> (Obergrenze erreicht, Antwort abgeschnitten), <b>stop_sequence</b> (eine vereinbarte Stopp-Zeichenfolge kam vor), <b>tool_use</b> (Claude will ein Werkzeug benutzen, siehe Tool-Use-Levels) und <b>refusal</b> (Claude hat die Anfrage abgelehnt).</p>

<h4>Teil 6: Typische Fehler</h4>
<table>
<tr><th>Fehler</th><th>Ursache</th><th>Lösung</th></tr>
<tr><td>401</td><td>Key fehlt oder ist falsch</td><td>.env prüfen, wird sie geladen?</td></tr>
<tr><td>400</td><td>Anfrage falsch aufgebaut, z. B. erste oder letzte Nachricht von assistant, max_tokens fehlt</td><td>Format prüfen</td></tr>
<tr><td>404</td><td>Modellname falsch oder veraltet</td><td>Aktuellen Namen aus der Doku nehmen</td></tr>
<tr><td>429</td><td>Zu viele Anfragen in kurzer Zeit (Rate Limit)</td><td>Kurz warten; das SDK wiederholt automatisch</td></tr>
<tr><td>529</td><td>Server gerade überlastet</td><td>Später erneut versuchen</td></tr>
</table>`,
      keys: [
        "API = deine Programme sprechen mit Claude, abgerechnet nach Verbrauch",
        "Key in .env, nie in den Code; .env in .gitignore",
        "Pflicht: model, max_tokens, messages",
        "Die API hat kein Gedächtnis: Verlauf jedes Mal mitschicken",
        "Text nach Block-Typ auslesen, nicht über content[0]",
        "stop_reason und usage zeigen, wie und was die Antwort gekostet hat"
      ],
      quiz: [
        { t: "mc", q: "Warum gehört der API-Key in eine .env-Datei statt direkt in den Python-Code?", o: ["Weil Python sonst langsamer ist", "Weil Code geteilt und hochgeladen wird und der Key so nicht versehentlich mitwandert", "Weil die API das verlangt", "Weil .env-Dateien verschlüsselt sind"], a: 1, e: "Die .env bleibt lokal und steht in der .gitignore." },
        { t: "order", q: "Bringe die Schritte bis zur ersten API-Antwort in die richtige Reihenfolge.", o: ["Konto in der Claude Console anlegen", "API-Key erzeugen", "Key in die Datei .env eintragen", "Skript mit client.messages.create starten", "Text-Block aus der Antwort ausgeben"], e: "Erst Zugang, dann Schlüssel sicher ablegen, dann aufrufen." },
        { t: "mc", q: "Die API hat kein Gedächtnis. Was bedeutet das für einen Chat mit mehreren Fragen?", o: ["Man kann keine Folgefragen stellen", "Man schickt bei jedem Aufruf den kompletten bisherigen Verlauf mit", "Claude merkt sich alles automatisch 24 Stunden", "Man muss jedes Mal einen neuen Key erzeugen"], a: 1, e: "Jeder Aufruf steht für sich. Der Verlauf ist dein Job." },
        { t: "tf", q: "Die erste Nachricht in der messages-Liste darf von assistant kommen.", a: false, e: "Das Gespräch beginnt immer mit user." },
        { t: "match", q: "Was bedeutet der stop_reason?", p: [["end_turn", "Claude ist regulär fertig"], ["max_tokens", "Obergrenze erreicht, Antwort abgeschnitten"], ["tool_use", "Claude will ein Werkzeug benutzen"], ["refusal", "Claude hat die Anfrage abgelehnt"]], e: "Prüfe stop_reason, bevor du eine Antwort weiterverarbeitest." },
        { t: "mc", q: "Warum liest man den Text über block.type == \"text\" statt über content[0]?", o: ["Weil content[0] immer leer ist", "Weil bei aktuellen Modellen ein Denk-Block vor dem Text stehen kann", "Weil es schneller ist", "Weil content[0] das Modell enthält"], a: 1, e: "Blöcke nach Typ auswählen, nicht nach Position." },
        { t: "match", q: "Welcher API-Fehler, welche Ursache?", p: [["401", "Key fehlt oder ist falsch"], ["404", "Modellname falsch oder veraltet"], ["429", "Zu viele Anfragen in kurzer Zeit"], ["529", "Server gerade überlastet"]], e: "Fehlercodes verraten schnell, wo es hakt." }
      ],
      practice: {
        type: "code",
        task: "Baue einen Mini-Chat: Das Skript stellt Claude eine Frage zu deinem Instrument, hängt die Antwort an den Verlauf an, stellt eine Folgefrage und gibt am Ende die verbrauchten Tokens beider Aufrufe aus.",
        hint: "Claudes Antwort kommt als neue Nachricht mit der Rolle assistant in die Liste, danach deine nächste Frage mit der Rolle user. Die Tokens stehen in antwort.usage.",
        starter: `from dotenv import load_dotenv
from anthropic import Anthropic

load_dotenv()
client = Anthropic()
MODELL = "claude-haiku-5-5"

def text_aus(antwort):
    return "".join(b.text for b in antwort.content if b.type == "text")

verlauf = [{"role": "user", "content": "Was ist das Besondere an Pedalpauken?"}]

antwort1 = client.messages.create(model=MODELL, max_tokens=400, messages=verlauf)
print(text_aus(antwort1))

# TODO 1: Antwort als assistant-Nachricht an den Verlauf anhängen
# TODO 2: Folgefrage als user-Nachricht anhängen
# TODO 3: zweiten Aufruf machen und die Antwort ausgeben
# TODO 4: Tokens beider Aufrufe ausgeben (usage.input_tokens, usage.output_tokens)`,
        solution: `from dotenv import load_dotenv
from anthropic import Anthropic

load_dotenv()
client = Anthropic()
MODELL = "claude-haiku-5-5"

def text_aus(antwort):
    return "".join(b.text for b in antwort.content if b.type == "text")

verlauf = [{"role": "user", "content": "Was ist das Besondere an Pedalpauken?"}]

antwort1 = client.messages.create(model=MODELL, max_tokens=400, messages=verlauf)
print(text_aus(antwort1))

verlauf.append({"role": "assistant", "content": text_aus(antwort1)})
verlauf.append({"role": "user", "content": "Welche Fehler machen Anfänger beim Stimmen mit dem Pedal?"})

antwort2 = client.messages.create(model=MODELL, max_tokens=400, messages=verlauf)
print(text_aus(antwort2))

for nr, a in enumerate([antwort1, antwort2], start=1):
    print(f"Aufruf {nr}: {a.usage.input_tokens} Eingabe-Tokens, {a.usage.output_tokens} Ausgabe-Tokens")

# Beobachtung: Der zweite Aufruf hat deutlich mehr Eingabe-Tokens,
# weil der ganze Verlauf mitgeschickt wird.`
      }
    },
    {
      id: "z2api2",
      title: "Parameter: Länge, Stopp, Rolle und Denktiefe",
      icon: "🎛️",
      src: [
        { t: "Anthropic Courses: API Fundamentals, Lektion 3 „Models“ (englisch)", u: "https://github.com/anthropics/courses/blob/master/anthropic_api_fundamentals/03_models.ipynb", lic: true },
        { t: "Anthropic Courses: API Fundamentals, Lektion 4 „Parameters“ (englisch)", u: "https://github.com/anthropics/courses/blob/master/anthropic_api_fundamentals/04_parameters.ipynb", lic: true },
        { t: "Claude-Doku: Migrationshinweise zu Claude Sonnet 5.5", u: "https://platform.claude.com/docs/en/models/sonnet-5-5/migration-guide" }
      ],
      lesson: `
<p>Neben dem Prompt gibt es bei der API ein paar <b>Regler</b>, mit denen du steuerst, wie Claude antwortet. Stell sie dir vor wie die Regler an einem Mischpult: Der Prompt ist die Musik, die Parameter bestimmen Lautstärke, Länge und Klangfarbe.</p>

<h4>Teil 1: model, das richtige Modell wählen</h4>
<p>Aktuell gibt es drei Größen (Stand November 2026): <code>claude-haiku-5-5</code> (schnell, günstig), <code>claude-sonnet-5-5</code> (der Allrounder) und <code>claude-opus-5-5</code> (am stärksten, langsamer und teurer).</p>
<p>Der Kurs empfiehlt eine einfache Strategie: <b>Mit dem kleinsten Modell anfangen, das die Aufgabe vielleicht schafft.</b> Dann mit echten Beispielen testen. Erst wenn die Qualität nicht reicht, eine Stufe größer gehen. So bezahlst du nie mehr als nötig.</p>

<h4>Teil 2: max_tokens, die Obergrenze</h4>
<p>Zur Erinnerung: Ein <b>Token</b> ist ein Wortteil, die Recheneinheit des Modells. <code>max_tokens</code> legt fest, wie viele Tokens die Antwort <b>höchstens</b> haben darf.</p>
<ul>
<li>Es ist eine <b>harte Grenze</b>, keine Längenvorgabe. Claude plant seine Antwort nicht danach, sondern wird einfach mitten im Satz <b>abgeschnitten</b>. Dann steht in <code>stop_reason</code> der Wert <code>max_tokens</code>.</li>
<li>Willst du kürzere Antworten, sag es im Prompt: „Antworte in höchstens drei Sätzen.“</li>
<li>Wozu dann das Limit? Als Schutz vor unerwartet langen (und teuren) Antworten und um Wartezeiten zu begrenzen.</li>
</ul>
<div class="now">Bei den neuesten Modellen zählt auch das interne Nachdenken (thinking) zu max_tokens. Ein zu knappes Limit kann die Antwort abschneiden, bevor überhaupt Text kommt. Plane großzügig, z. B. 4.000 bis 16.000 Tokens für anspruchsvolle Aufgaben.</div>

<h4>Teil 3: stop_sequences, die Stopp-Wörter</h4>
<p>Mit <code>stop_sequences</code> gibst du eine Liste von Zeichenfolgen an. Sobald Claude eine davon schreibt, hört es auf. Die Zeichenfolge selbst kommt nicht mehr in die Antwort. <code>stop_reason</code> ist dann <code>stop_sequence</code>, und im Feld <code>stop_sequence</code> steht, welche gegriffen hat.</p>
<pre>antwort = client.messages.create(
    model="claude-haiku-5-5",
    max_tokens=1000,
    stop_sequences=["&lt;/programmtext&gt;"],
    messages=[{"role": "user", "content":
        "Schreibe einen Programmhefttext über Bachs Toccata d-Moll. "
        "Setze den Text zwischen &lt;programmtext&gt; und &lt;/programmtext&gt;."}],
)</pre>
<p>Praktisch, um nach dem eigentlichen Ergebnis keine Tokens mehr für Nachsätze zu verschwenden, oder um eine Liste nach einer bestimmten Stelle abzubrechen.</p>

<h4>Teil 4: system, Rolle und Rahmen</h4>
<p>Der System-Prompt ist ein eigener Parameter, getrennt von den Nachrichten. Der Kurs gibt eine klare Empfehlung: In den System-Prompt gehören vor allem <b>Rolle und Kontext</b>. Die ausführlichen Anweisungen für die konkrete Aufgabe stehen meist besser in der user-Nachricht.</p>
<pre>client.messages.create(
    model="claude-haiku-5-5",
    max_tokens=600,
    system="Du bist Assistent eines Blechbläserquintetts und schreibst für Veranstalter.",
    messages=[{"role": "user", "content": "Entwirf eine Absage für den 3. Mai, freundlich, 5 Sätze."}],
)</pre>

<h4>Teil 5: temperature, ein Regler, den es kaum noch gibt</h4>
<p>Früher konntest du mit <code>temperature</code> (0 bis 1) die Zufälligkeit steuern: niedrig für sachliche, gleichbleibende Antworten (Analysen, Einordnen), hoch für abwechslungsreiche, kreative Texte (Ideen, Geschichten). Viele Kurse und Anleitungen erwähnen das noch.</p>
<div class="now">Bei den neuesten Modellen (Claude Opus 5.5, Sonnet 5.5 und Haiku 5.5) sind temperature, top_p und top_k entfallen. Wer sie mitschickt, bekommt teils einen Fehler. Kreativität oder Nüchternheit steuerst du heute über den Prompt: „Schreibe drei sehr unterschiedliche Varianten“ oder „Antworte sachlich und knapp“.</div>

<h4>Teil 6: Denktiefe mit thinking und effort</h4>
<p>Aktuelle Modelle denken bei Bedarf intern nach, bevor sie antworten (<b>adaptive thinking</b>). Wie gründlich, steuerst du mit <b>effort</b>, einem Regler mit den Stufen <code>low</code>, <code>medium</code>, <code>high</code>, <code>xhigh</code> und <code>max</code>:</p>
<pre>client.messages.create(
    model="claude-sonnet-5-5",
    max_tokens=8000,
    output_config={"effort": "low"},   # schnell und günstig
    messages=[{"role": "user", "content": "Sortiere diese 20 Mails in 4 Kategorien: ..."}],
)</pre>
<ul>
<li><b>low:</b> für einfache Aufgaben wie Einordnen und Umformulieren, schnell und günstig</li>
<li><b>high</b> und höher: für Planung, Verträge, kniffligen Code, langsamer und teurer, weil Denk-Tokens als Ausgabe-Tokens zählen</li>
</ul>

<h4>Teil 7: Kosten im Blick</h4>
<p>Jede Antwort enthält in <code>usage</code> die Zahl der Eingabe- und Ausgabe-Tokens. Ausgabe-Tokens sind deutlich teurer. Eine Rechnung mit <b>erfundenen</b> Preisen zum Üben: Eingabe 1 € pro Million Tokens, Ausgabe 5 € pro Million.</p>
<div class="ex">1.000 Mails einordnen, je 300 Tokens Eingabe und 50 Tokens Ausgabe: 300.000 Eingabe-Tokens = 0,30 €, 50.000 Ausgabe-Tokens = 0,25 €, zusammen 0,55 €. Echte Preise stehen in der Console.</div>
<p>Weitere Sparhebel aus den Anthropic-Cookbooks: <b>Prompt Caching</b> (ein immer gleicher, langer Prompt-Anfang wird zwischengespeichert und günstiger berechnet) und <b>Batch-Verarbeitung</b> (viele Anfragen gesammelt, dafür langsamer und günstiger).</p>`,
      keys: [
        "Kleinstes passendes Modell wählen, testen, erst bei Bedarf größer",
        "max_tokens = harte Obergrenze, schneidet ab, kürzt nicht sinnvoll",
        "stop_sequences beenden die Antwort an einer vereinbarten Stelle",
        "System-Prompt vor allem für Rolle und Kontext",
        "temperature gibt es bei den neuesten Modellen nicht mehr: über den Prompt steuern",
        "effort (low bis max) regelt die Denktiefe und damit Tempo und Kosten"
      ],
      quiz: [
        { t: "mc", q: "Du setzt max_tokens auf 50, die vollständige Antwort bräuchte aber 200 Tokens. Was passiert?", o: ["Claude fasst die Antwort elegant in 50 Tokens zusammen", "Die Antwort wird nach 50 Tokens abgeschnitten, stop_reason ist max_tokens", "Es gibt einen Fehler", "Claude ignoriert das Limit"], a: 1, e: "max_tokens ist eine harte Grenze, keine Längenvorgabe." },
        { t: "tf", q: "Wer kurze Antworten will, sollte das im Prompt sagen und sich nicht nur auf max_tokens verlassen.", a: true, e: "Nur der Prompt sorgt für eine sinnvoll kurze Antwort." },
        { t: "mc", q: "Was bewirkt stop_sequences=[\"</programmtext>\"]?", o: ["Claude beginnt die Antwort mit </programmtext>", "Claude hört auf, sobald es </programmtext> schreiben würde; die Zeichenfolge erscheint nicht in der Antwort", "Claude darf das Wort nie benutzen", "Die Antwort wird in einem Programm gespeichert"], a: 1, e: "Stopp-Wörter beenden die Generierung an einer vereinbarten Stelle." },
        { t: "mc", q: "Du willst mit Claude Sonnet 5.5 kreativere Texte. Was ist der richtige Weg?", o: ["temperature auf 1 setzen", "Im Prompt um sehr unterschiedliche, ungewöhnliche Varianten bitten", "max_tokens erhöhen", "stop_sequences leeren"], a: 1, e: "Bei den neuesten Modellen sind temperature, top_p und top_k entfallen." },
        { t: "match", q: "Welche effort-Stufe passt zur Aufgabe?", p: [["200 Mails in 4 Kategorien sortieren", "low"], ["Tourneeplanung mit vielen Abhängigkeiten", "high"], ["Hochkomplexe Analyse, Zeit und Kosten egal", "max"]], e: "Mehr Denktiefe kostet Zeit und Ausgabe-Tokens." },
        { t: "mc", q: "Erfundene Preise: Eingabe 1 € pro Million Tokens, Ausgabe 5 € pro Million. Du verbrauchst 2 Mio. Eingabe- und 0,5 Mio. Ausgabe-Tokens. Wie hoch sind die Kosten?", o: ["2,50 €", "4,50 €", "7,00 €", "12,50 €"], a: 1, e: "2 × 1 € + 0,5 × 5 € = 2 € + 2,50 € = 4,50 €." },
        { t: "mc", q: "Was gehört laut Kurs vor allem in den System-Prompt?", o: ["Die zu verarbeitenden Daten", "Rolle und Kontext", "Der API-Key", "Die Stopp-Wörter"], a: 1, e: "Ausführliche Aufgaben-Anweisungen stehen meist besser in der user-Nachricht." }
      ],
      practice: {
        type: "code",
        task: "Experimentiere mit den Reglern: 1) Lass Claude mit max_tokens=30 eine lange Frage beantworten und gib stop_reason aus. 2) Nutze stop_sequences, damit eine nummerierte Liste nach Punkt 2 endet. 3) Vergleiche die Antwortzeit mit effort \"low\" und \"high\" bei derselben Denkaufgabe.",
        hint: "stop_reason steht in antwort.stop_reason. Für Punkt 2 eignet sich die Stopp-Folge \"3.\". Die Zeit misst du mit time.time() vor und nach dem Aufruf.",
        starter: `import time
from dotenv import load_dotenv
from anthropic import Anthropic

load_dotenv()
client = Anthropic()

def text_aus(antwort):
    return "".join(b.text for b in antwort.content if b.type == "text")

# 1) max_tokens zu knapp
a1 = client.messages.create(
    model="claude-haiku-5-5", max_tokens=30,
    messages=[{"role": "user", "content": "Erkläre ausführlich, wie eine Pauke gestimmt wird."}],
)
print(text_aus(a1))
# TODO: stop_reason ausgeben

# 2) TODO: Liste mit 5 Übe-Tipps anfordern, aber mit stop_sequences nach Punkt 2 stoppen

# 3) TODO: dieselbe Denkaufgabe mit output_config={"effort": "low"} und {"effort": "high"}
#    an claude-sonnet-5-5 schicken und die Dauer vergleichen`,
        solution: `import time
from dotenv import load_dotenv
from anthropic import Anthropic

load_dotenv()
client = Anthropic()

def text_aus(antwort):
    return "".join(b.text for b in antwort.content if b.type == "text")

# 1) max_tokens zu knapp
a1 = client.messages.create(
    model="claude-haiku-5-5", max_tokens=30,
    messages=[{"role": "user", "content": "Erkläre ausführlich, wie eine Pauke gestimmt wird."}],
)
print(text_aus(a1))
print("stop_reason:", a1.stop_reason)          # max_tokens

# 2) Liste nach Punkt 2 beenden
a2 = client.messages.create(
    model="claude-haiku-5-5", max_tokens=500,
    stop_sequences=["3."],
    messages=[{"role": "user", "content": "Nenne 5 Übe-Tipps als nummerierte Liste (1. bis 5.)."}],
)
print(text_aus(a2))
print("stop_reason:", a2.stop_reason, "| Stopp bei:", a2.stop_sequence)

# 3) effort vergleichen
aufgabe = ("Ein Quintett probt 4-mal vor dem Konzert. Stück A braucht 3 Proben, "
           "B und C je 2, D eine. Pro Probe passen höchstens 2 Stücke. Erstelle einen Plan.")
for stufe in ["low", "high"]:
    start = time.time()
    a3 = client.messages.create(
        model="claude-sonnet-5-5", max_tokens=8000,
        output_config={"effort": stufe},
        messages=[{"role": "user", "content": aufgabe}],
    )
    print(stufe, "->", round(time.time() - start, 1), "Sekunden,", a3.usage.output_tokens, "Ausgabe-Tokens")`
      }
    },
    {
      id: "z2api3",
      title: "Streaming und Bilder",
      icon: "🖼️",
      src: [
        { t: "Anthropic Courses: API Fundamentals, Lektion 5 „Streaming“ (englisch)", u: "https://github.com/anthropics/courses/blob/master/anthropic_api_fundamentals/05_Streaming.ipynb", lic: true },
        { t: "Anthropic Courses: API Fundamentals, Lektion 6 „Vision“ (englisch)", u: "https://github.com/anthropics/courses/blob/master/anthropic_api_fundamentals/06_vision.ipynb", lic: true },
        { t: "Claude Cookbooks: Multimodal (Bilder, Diagramme, Dokumente)", u: "https://github.com/anthropics/claude-cookbooks/tree/main/multimodal" }
      ],
      lesson: `
<p>Zwei Fähigkeiten machen API-Anwendungen erst richtig angenehm: <b>Streaming</b>, damit Antworten sofort sichtbar werden, und <b>Vision</b>, damit Claude Bilder, Fotos und Scans versteht.</p>

<h4>Teil 1: Warum Streaming?</h4>
<p>Ohne Streaming wartest du, bis Claude die <b>komplette</b> Antwort geschrieben hat. Bei einem langen Text können das 20 Sekunden sein, in denen nichts passiert. Mit Streaming erscheinen die Wörter, <b>während</b> sie entstehen, genau wie in der Claude-App.</p>
<p>Die entscheidende Kennzahl heißt <b>TTFT</b> (Time to First Token): die Zeit bis zum ersten sichtbaren Wort. Die Gesamtdauer bleibt gleich, aber die <b>gefühlte</b> Wartezeit sinkt drastisch. Für Chat-Oberflächen ist Streaming deshalb Standard, für Voice Agents (Zone 5) sogar Pflicht, denn dort beginnt die Stimme schon zu sprechen, bevor der Satz fertig ist.</p>

<h4>Teil 2: Streaming im Code</h4>
<pre>with client.messages.stream(
    model="claude-haiku-5-5",
    max_tokens=1000,
    messages=[{"role": "user", "content": "Erzähle eine kurze Geschichte über eine verstimmte Pauke."}],
) as stream:
    for text in stream.text_stream:          # Stück für Stück
        print(text, end="", flush=True)

nachricht = stream.get_final_message()      # komplette Antwort samt usage</pre>
<p>Im Hintergrund schickt der Server eine Folge von <b>Ereignissen</b> (Events):</p>
<table>
<tr><th>Ereignis</th><th>Bedeutung</th></tr>
<tr><td><code>message_start</code></td><td>Die Antwort beginnt</td></tr>
<tr><td><code>content_block_start</code></td><td>Ein neuer Block (Text, Denken, Werkzeug) beginnt</td></tr>
<tr><td><code>content_block_delta</code></td><td>Ein neues Stück Text kommt, das passiert sehr oft</td></tr>
<tr><td><code>content_block_stop</code></td><td>Der Block ist fertig</td></tr>
<tr><td><code>message_delta</code></td><td>Abschlussinfos wie stop_reason und Token-Verbrauch</td></tr>
<tr><td><code>message_stop</code></td><td>Die Antwort ist komplett</td></tr>
</table>
<p>Das SDK fasst das für dich zusammen (<code>text_stream</code>), du kannst aber auch auf einzelne Ereignisse reagieren. Bei sehr langen Antworten empfiehlt das SDK Streaming ohnehin, damit die Verbindung nicht in eine Zeitüberschreitung läuft.</p>

<h4>Teil 3: Was Claude mit Bildern kann</h4>
<ul>
<li><b>Text lesen:</b> gedruckt und handschriftlich, z. B. Setlisten, Notizzettel, Dienstpläne an der Pinnwand</li>
<li><b>Tabellen und Diagramme</b> auswerten, z. B. eine Grafik mit Ticketverkäufen</li>
<li><b>Fotos beschreiben</b> und Details erkennen, z. B. „Ist auf dem Plakat das Datum gut lesbar?“</li>
<li><b>Mehrere Bilder vergleichen</b>, z. B. zwei Entwürfe für ein Konzertplakat</li>
<li><b>Scans und PDFs</b> auswerten (PDFs werden als eigener Dokument-Block geschickt)</li>
</ul>

<h4>Teil 4: Ein Bild schicken</h4>
<p>Statt eines einfachen Textes wird <code>content</code> zu einer <b>Liste von Blöcken</b>: erst das Bild, dann die Frage.</p>
<pre>import base64

with open("setlist.jpg", "rb") as f:
    bild = base64.standard_b64encode(f.read()).decode("utf-8")

antwort = client.messages.create(
    model="claude-haiku-5-5",
    max_tokens=1500,
    messages=[{"role": "user", "content": [
        {"type": "image", "source": {"type": "base64",
            "media_type": "image/jpeg", "data": bild}},
        {"type": "text", "text": "Übertrage diese handgeschriebene Setlist "
            "in eine Tabelle mit Nr, Titel und Dauer."},
    ]}],
)</pre>
<p><b>Base64</b> ist eine Umwandlung des Bildes in Text, damit es in die Anfrage passt. Alternativ kannst du statt <code>base64</code> eine öffentliche Bild-Adresse angeben (<code>"type": "url"</code>). Unterstützt werden JPEG, PNG, GIF und WebP. Bilder kosten Tokens, große Bilder mehr als kleine.</p>

<h4>Teil 5: Gute Prompts für Bilder</h4>
<ol>
<li><b>Bild zuerst, Frage danach.</b> Das funktioniert meist besser als umgekehrt.</li>
<li><b>Konkret sagen, worauf es ankommt:</b> „Lies nur die Spalte ‚Uhrzeit‘“ statt „Was siehst du?“</li>
<li><b>Mehrere Bilder beschriften:</b> vor jedes Bild einen Text-Block „Bild 1:“, „Bild 2:“ setzen, dann kann man sich in der Frage darauf beziehen.</li>
<li><b>Erst abschreiben, dann auswerten:</b> „Übertrage zuerst alle Einträge, dann berechne die Gesamtdauer.“ Das ist Prompt Chaining in klein.</li>
<li><b>Beispiele helfen auch hier:</b> ein Beispielbild mit der gewünschten Ausgabe als früheres Frage-Antwort-Paar.</li>
</ol>
<div class="tip">Grenzen kennen: Viele kleine Dinge exakt zählen, genaue Positionen und Maße, sehr kleine oder verschwommene Schrift sind fehleranfällig. Personen erkennt Claude nicht anhand ihres Gesichts. Notenbilder kann Claude grob beschreiben, auf exakte Tonhöhen solltest du dich aber nicht verlassen. Wichtige Zahlen immer stichprobenartig prüfen.</div>`,
      keys: [
        "Streaming zeigt die Antwort, während sie entsteht",
        "TTFT (Zeit bis zum ersten Wort) bestimmt die gefühlte Geschwindigkeit",
        "Ereignisse: message_start, content_block_delta … message_stop",
        "Bilder als Block in content: base64 oder URL, dann die Frage",
        "Bild zuerst, konkret fragen, mehrere Bilder beschriften, erst abschreiben, dann auswerten",
        "Grenzen: exaktes Zählen, kleine Schrift, keine Gesichtserkennung"
      ],
      quiz: [
        { t: "mc", q: "Was verbessert Streaming hauptsächlich?", o: ["Die Qualität der Antwort", "Die gefühlte Wartezeit, weil die ersten Wörter sofort erscheinen", "Den Preis", "Die Länge der Antwort"], a: 1, e: "Die Gesamtdauer bleibt gleich, aber die Zeit bis zum ersten Wort sinkt." },
        { t: "mc", q: "Wofür steht TTFT?", o: ["Total Token Format Type", "Time to First Token, die Zeit bis zum ersten Wort", "Text To Final Translation", "Tokens Täglich Frei Testen"], a: 1, e: "Eine zentrale Kennzahl für Chat-Oberflächen und Voice Agents." },
        { t: "order", q: "In welcher Reihenfolge kommen die Streaming-Ereignisse?", o: ["message_start", "content_block_start", "content_block_delta", "content_block_stop", "message_stop"], e: "Zwischen Start und Stopp kommen viele Delta-Ereignisse mit Textstücken." },
        { t: "mc", q: "Wie schickst du ein Bild an Claude?", o: ["Als Dateianhang an eine Mail", "Als Bild-Block in der content-Liste, gefolgt von einem Text-Block mit der Frage", "Als Link im System-Prompt", "Gar nicht, die API kann keine Bilder"], a: 1, e: "content wird zu einer Liste von Blöcken." },
        { t: "match", q: "Welcher Bild-Tipp passt zur Situation?", p: [["Zwei Plakatentwürfe vergleichen", "Bilder mit „Bild 1“ und „Bild 2“ beschriften"], ["Handgeschriebene Liste auswerten", "Erst abschreiben, dann rechnen"], ["Claude beschreibt alles Mögliche", "Konkret sagen, worauf es ankommt"]], e: "Präzise Bild-Prompts liefern präzise Ergebnisse." },
        { t: "tf", q: "Claude kann auf Fotos zuverlässig erkennen, welche bekannte Person abgebildet ist.", a: false, e: "Claude identifiziert keine Personen anhand ihres Gesichts." },
        { t: "tf", q: "Auch Bilder verbrauchen Tokens, größere Bilder mehr als kleinere.", a: true, e: "Bilder fließen in die Kosten mit ein." }
      ],
      practice: {
        type: "code",
        task: "Fotografiere einen handgeschriebenen Zettel (Setlist, Einkaufsliste für die Probe, Notizen) und lass Claude ihn per Streaming als Markdown-Tabelle ausgeben. Bonus: Lass Claude danach die Gesamtzahl der Einträge nennen.",
        hint: "Kombiniere beide Teile der Lektion: client.messages.stream(...) mit einer content-Liste aus Bild-Block und Text-Block. Bei PNG-Dateien lautet media_type image/png.",
        starter: `import base64
from dotenv import load_dotenv
from anthropic import Anthropic

load_dotenv()
client = Anthropic()

DATEI = "zettel.jpg"          # dein Foto im selben Ordner

with open(DATEI, "rb") as f:
    bild = base64.standard_b64encode(f.read()).decode("utf-8")

inhalt = [
    # TODO 1: Bild-Block mit base64 und media_type "image/jpeg"
    # TODO 2: Text-Block mit der Aufgabe (Tabelle + Anzahl der Einträge)
]

# TODO 3: mit client.messages.stream(...) senden und den Text Stück für Stück ausgeben`,
        solution: `import base64
from dotenv import load_dotenv
from anthropic import Anthropic

load_dotenv()
client = Anthropic()

DATEI = "zettel.jpg"

with open(DATEI, "rb") as f:
    bild = base64.standard_b64encode(f.read()).decode("utf-8")

inhalt = [
    {"type": "image", "source": {"type": "base64", "media_type": "image/jpeg", "data": bild}},
    {"type": "text", "text": (
        "Übertrage zuerst alle Einträge dieses handgeschriebenen Zettels "
        "in eine Markdown-Tabelle mit den Spalten Nr und Eintrag. "
        "Unleserliches markierst du mit [unleserlich]. "
        "Nenne danach in einem Satz die Gesamtzahl der Einträge."
    )},
]

with client.messages.stream(
    model="claude-haiku-5-5",
    max_tokens=2000,
    messages=[{"role": "user", "content": inhalt}],
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)

print()
print("Verbrauch:", stream.get_final_message().usage)`
      }
    },
    {
      id: "z2tool1",
      title: "Tool Use: wie Claude Werkzeuge benutzt",
      icon: "🔧",
      src: [
        { t: "Anthropic Courses: Tool Use, Lektion 1 „Tool use overview“ (englisch)", u: "https://github.com/anthropics/courses/blob/master/tool_use/01_tool_use_overview.ipynb", lic: true },
        { t: "Anthropic Courses: Tool Use, Lektion 2 „Your first simple tool“ (englisch)", u: "https://github.com/anthropics/courses/blob/master/tool_use/02_your_first_simple_tool.ipynb", lic: true },
        { t: "Prompt-Tutorial, Anhang 10.2 „Tool Use“ (historisches Format, englisch)", u: "https://github.com/anthropics/courses/blob/master/prompt_engineering_interactive_tutorial/Anthropic%201P/10.2_Appendix_Tool%20Use.ipynb", lic: true }
      ],
      lesson: `
<p>Ein Sprachmodell allein kann vieles nicht: Es kennt deinen Kalender nicht, sieht keine aktuellen Ticketzahlen, kann nicht garantiert fehlerfrei rechnen und schon gar nichts <b>tun</b>, etwa eine Mail verschicken. <b>Tool Use</b> (auch Function Calling) ändert das. Es ist das Prinzip hinter allen KI-Agenten, vom Voice Agent in Zone 5 über den AI-Agent-Node in n8n bis zu Claude Code.</p>

<h4>Teil 1: Die Grundidee</h4>
<p>Du beschreibst Claude ein oder mehrere <b>Werkzeuge</b>: Funktionen in deinem Programm, z. B. „Termine im Kalender prüfen“. Claude entscheidet während des Gesprächs selbst, <b>ob</b> und <b>wann</b> es ein Werkzeug braucht, und sagt dir, <b>mit welchen Werten</b>. Ausführen tut es aber <b>dein Programm</b>, nicht Claude. Claude bekommt danach nur das Ergebnis zurück.</p>
<div class="ex">Wie ein Dirigent, der nicht selbst spielt: Er gibt den Einsatz („Pauke, jetzt, fortissimo“), gespielt wird von jemand anderem. Der Dirigent hört das Ergebnis und entscheidet über den nächsten Einsatz.</div>

<h4>Teil 2: Der Ablauf in vier Schritten</h4>
<p>Vorher (Schritt 0) schreibst du die Funktion selbst, z. B. ein paar Zeilen Code, die im Kalender nachsehen.</p>
<div class="flow"><span>1️⃣ Anfrage<small>Frage + Werkzeug-Beschreibungen</small></span><i>→</i><span>2️⃣ Claude wählt<small>stop_reason: tool_use</small></span><i>→</i><span>3️⃣ Dein Code führt aus<small>Ergebnis als tool_result</small></span><i>→</i><span>4️⃣ Claude antwortet<small>mit dem Ergebnis</small></span></div>
<ol>
<li><b>Anfrage:</b> Du schickst die Frage („Ist am 12.12. noch etwas frei?“) zusammen mit der Liste der Werkzeuge.</li>
<li><b>Claude wählt ein Werkzeug:</b> Die Antwort hat <code>stop_reason: "tool_use"</code> und enthält einen <b>tool_use-Block</b> mit Namen, Eingabewerten und einer eindeutigen ID, z. B. <code>termine_pruefen</code> mit <code>{"datum": "2026-12-12"}</code>.</li>
<li><b>Dein Programm führt aus</b> und schickt das Ergebnis als <b>tool_result</b> zurück, als neue user-Nachricht, verknüpft über dieselbe ID.</li>
<li><b>Claude formuliert die Antwort</b> auf Basis des Ergebnisses: „Am 12.12. ist nur vormittags eine Probe, abends ist noch frei.“</li>
</ol>
<p>Braucht Claude kein Werkzeug („Was ist eine Pauke?“), antwortet es einfach direkt.</p>

<h4>Teil 3: Aufbau einer Werkzeug-Definition</h4>
<pre>tools = [{
    "name": "termine_pruefen",
    "description": "Prüft im Probenkalender des Ensembles, welche Termine an "
                   "einem Tag belegt sind. Nutze das Werkzeug immer, wenn nach "
                   "freien Zeiten, Proben oder Auftritten an einem bestimmten "
                   "Datum gefragt wird. Liefert eine Liste belegter Zeiten. "
                   "Kann keine Termine eintragen oder ändern.",
    "input_schema": {
        "type": "object",
        "properties": {
            "datum": {"type": "string", "description": "Datum im Format JJJJ-MM-TT"},
            "art": {"type": "string", "enum": ["probe", "konzert", "alle"],
                    "description": "Welche Termine angezeigt werden"}
        },
        "required": ["datum"]
    }
}]</pre>
<table>
<tr><th>Teil</th><th>Wozu</th></tr>
<tr><td><code>name</code></td><td>Eindeutiger Name, am besten kleingeschrieben mit Unterstrichen</td></tr>
<tr><td><code>description</code></td><td>Der wichtigste Teil: Was tut das Werkzeug, wann soll es benutzt werden, wann nicht, was kommt zurück?</td></tr>
<tr><td><code>input_schema</code></td><td>Welche Eingaben in welchem Format, beschrieben als <b>JSON Schema</b> (eine Standardsprache für Datenformate)</td></tr>
<tr><td><code>properties</code></td><td>Die einzelnen Parameter, jeweils mit Typ und eigener Beschreibung</td></tr>
<tr><td><code>enum</code></td><td>Erlaubte Werte begrenzen, z. B. nur „probe“, „konzert“ oder „alle“</td></tr>
<tr><td><code>required</code></td><td>Welche Parameter Pflicht sind</td></tr>
</table>

<h4>Teil 4: Gute Beschreibungen schreiben</h4>
<p>Claude wählt Werkzeuge <b>nur anhand von Name und Beschreibung</b>. Eine gute Beschreibung ist deshalb wichtiger als alles andere:</p>
<ul>
<li>Mehrere Sätze statt eines Stichworts</li>
<li><b>Wann</b> das Werkzeug benutzt werden soll und <b>wann nicht</b></li>
<li>Formate mit Beispiel („JJJJ-MM-TT, z. B. 2026-12-12“)</li>
<li>Was zurückkommt und welche Grenzen es gibt („nur lesend“)</li>
</ul>

<h4>Teil 5: Wo Werkzeuge laufen</h4>
<ul>
<li><b>Client-Tools:</b> Werkzeuge, die du selbst definierst und in deinem Programm ausführst. Darum geht es in diesen Levels.</li>
<li><b>Server-Tools:</b> Werkzeuge, die Anthropic selbst anbietet und auf eigenen Servern ausführt, etwa Websuche oder Code-Ausführung. Du schaltest sie nur ein, das Ergebnis steckt direkt in der Antwort [Angebot in der Doku prüfen].</li>
<li><b>MCP-Server</b> (Zone 7) liefern fertige Werkzeuge nach einem offenen Standard, z. B. für Notion, GitHub oder den Kalender.</li>
</ul>
<div class="now">Im Prompt-Tutorial (Anhang 10.2) wurde Tool Use noch über ein eigenes XML-Format im System-Prompt nachgebaut. Heute gibt es dafür die eingebaute <code>tools</code>-Schnittstelle. Das Prinzip ist gleich geblieben: Claude schlägt den Aufruf vor, dein Code führt aus, das Ergebnis geht zurück.</div>`,
      keys: [
        "Tools = Funktionen deines Programms, die du Claude beschreibst",
        "Claude entscheidet, ob und womit; dein Code führt aus",
        "Ablauf: Anfrage → tool_use → tool_result → Antwort",
        "Definition: name, description, input_schema (properties, enum, required)",
        "Die Beschreibung ist der wichtigste Teil: was, wann, wann nicht, Rückgabe",
        "Client-Tools, Server-Tools von Anthropic, MCP-Server"
      ],
      quiz: [
        { t: "mc", q: "Wer führt bei selbst definierten Werkzeugen (Client-Tools) die Funktion tatsächlich aus?", o: ["Claude auf den Servern von Anthropic", "Dein Programm; Claude bekommt nur das Ergebnis", "Der Nutzer von Hand", "Niemand, Claude simuliert das Ergebnis"], a: 1, e: "Claude schlägt den Aufruf vor, dein Code führt ihn aus." },
        { t: "order", q: "Bringe den Tool-Use-Ablauf in die richtige Reihenfolge.", o: ["Frage und Werkzeug-Beschreibungen an Claude schicken", "Claude antwortet mit einem tool_use-Block", "Dein Programm führt die Funktion aus", "Ergebnis als tool_result zurückschicken", "Claude formuliert die endgültige Antwort"], e: "Das ist der Kern jedes KI-Agenten." },
        { t: "match", q: "Welcher Teil der Werkzeug-Definition, welcher Zweck?", p: [["name", "Eindeutiger Name des Werkzeugs"], ["description", "Was, wann und wann nicht"], ["input_schema", "Welche Eingaben in welchem Format"], ["enum", "Erlaubte Werte begrenzen"]], e: "Name und Beschreibung entscheiden, ob Claude das Werkzeug richtig wählt." },
        { t: "mc", q: "Welche Beschreibung für ein Kalender-Werkzeug ist am besten?", o: ["„Kalender“", "„Tool 1“", "„Prüft im Probenkalender, welche Termine an einem Tag belegt sind. Nutzen bei Fragen nach freien Zeiten an einem Datum. Kann nichts eintragen.“", "„Wichtiges Werkzeug!“"], a: 2, e: "Was, wann und Grenzen, in mehreren Sätzen." },
        { t: "mc", q: "Welchen stop_reason hat die Antwort, wenn Claude ein Werkzeug benutzen möchte?", o: ["end_turn", "tool_use", "max_tokens", "refusal"], a: 1, e: "Dann wartet Claude auf das Ergebnis." },
        { t: "tf", q: "Das tool_result muss über die ID mit dem passenden tool_use-Block verknüpft sein.", a: true, e: "So weiß Claude, welches Ergebnis zu welchem Aufruf gehört." },
        { t: "tf", q: "Bei selbst definierten Werkzeugen greift Claude direkt auf deinen Kalender zu, ohne dass dein Programm etwas ausführt.", a: false, e: "Bei Client-Tools führt immer dein Code aus." }
      ],
      practice: {
        type: "werkstatt",
        task: "Schreibe eine Werkzeug-Definition (als Python-Dict oder JSON) für probe_eintragen: Claude soll damit Proben in den Ensemble-Kalender eintragen können.",
        hint: "Denk an Datum, Uhrzeit, Dauer, Ort und Besetzung. Welche Angaben sind Pflicht? Wo hilft enum? Und schreib in die Beschreibung, wann Claude vorher nachfragen soll.",
        checklist: [
          { t: "Eindeutiger Name in Kleinbuchstaben mit Unterstrich", re: "name.{0,6}[a-z]+_[a-z_]+" },
          { t: "Ausführliche Beschreibung (was, wann, was zurückkommt)", re: "description[^,]{70,}" },
          { t: "input_schema mit properties", re: "input_schema[^]*properties" },
          { t: "Pflichtfelder unter required", re: "required" },
          { t: "Format für Datum oder Uhrzeit angegeben", re: "(JJJJ|YYYY|HH:MM|hh:mm|Format)" },
          { t: "Werte mit enum begrenzt, wo sinnvoll", re: "enum" },
          { t: "Beschreibung sagt, wann NICHT eingetragen werden soll (z. B. ohne Bestätigung)" }
        ],
        solution: `{
  "name": "probe_eintragen",
  "description": "Trägt eine neue Probe in den Probenkalender des Ensembles ein. Nutze das Werkzeug nur, wenn Datum, Startzeit und Ort feststehen und der Nutzer das Eintragen ausdrücklich bestätigt hat. Fehlen Angaben, frage zuerst nach. Prüfe vorher mit termine_pruefen, ob der Termin frei ist. Gibt die ID des neuen Eintrags zurück.",
  "input_schema": {
    "type": "object",
    "properties": {
      "datum": {"type": "string", "description": "Datum im Format JJJJ-MM-TT, z. B. 2026-12-12"},
      "start": {"type": "string", "description": "Startzeit im Format HH:MM, z. B. 19:00"},
      "dauer_minuten": {"type": "integer", "description": "Dauer in Minuten, Standard 150"},
      "ort": {"type": "string", "description": "Probenort, z. B. Probenraum A"},
      "besetzung": {"type": "string", "enum": ["tutti", "blech", "schlagwerk", "solisten"], "description": "Wer probt"}
    },
    "required": ["datum", "start", "ort"]
  }
}`
      }
    },
    {
      id: "z2tool2",
      title: "Tool Use in der Praxis",
      icon: "🛎️",
      src: [
        { t: "Anthropic Courses: Tool Use, Lektion 3 „Structured outputs“ (englisch)", u: "https://github.com/anthropics/courses/blob/master/tool_use/03_structured_outputs.ipynb", lic: true },
        { t: "Anthropic Courses: Tool Use, Lektion 4 und 5 „Complete workflow“, „Tool choice“ (englisch)", u: "https://github.com/anthropics/courses/tree/master/tool_use", lic: true },
        { t: "Anthropic Courses: Tool Use, Lektion 6 „Chatbot with multiple tools“ (englisch)", u: "https://github.com/anthropics/courses/blob/master/tool_use/06_chatbot_with_multiple_tools.ipynb", lic: true },
        { t: "Claude-Doku: Structured Outputs", u: "https://platform.claude.com/docs/en/build-with-claude/structured-outputs" }
      ],
      lesson: `
<p>Im vorigen Level hast du den Ablauf kennengelernt. Jetzt geht es um alles, was ihn im echten Einsatz zuverlässig macht: die Schleife, mehrere Werkzeuge, Fehler, erzwungene Formate und Sicherheit.</p>

<h4>Teil 1: Die Agenten-Schleife</h4>
<p>Oft braucht Claude mehrere Werkzeuge nacheinander: erst den Kunden finden, dann seine Buchung ansehen, dann eine Antwort formulieren. Dein Programm läuft deshalb in einer <b>Schleife</b>, bis Claude kein Werkzeug mehr will:</p>
<pre>def frage_mit_tools(frage):
    verlauf = [{"role": "user", "content": frage}]
    for runde in range(10):                     # Sicherheitsgrenze
        antwort = client.messages.create(
            model=MODELL, max_tokens=4000,
            system=SYSTEM, tools=TOOLS, messages=verlauf)
        verlauf.append({"role": "assistant", "content": antwort.content})
        if antwort.stop_reason != "tool_use":   # fertig
            return "".join(b.text for b in antwort.content if b.type == "text")
        ergebnisse = []
        for block in antwort.content:
            if block.type == "tool_use":
                wert = fuehre_aus(block.name, block.input)
                ergebnisse.append({"type": "tool_result",
                                   "tool_use_id": block.id, "content": wert})
        verlauf.append({"role": "user", "content": ergebnisse})</pre>
<ul>
<li>Claudes Antwort kommt <b>unverändert</b> in den Verlauf, auch eventuelle Denk-Blöcke. Neuere Modelle verlangen das sogar.</li>
<li>Claude kann in einer Antwort <b>mehrere</b> Werkzeuge gleichzeitig anfordern (parallele Aufrufe). Dann führst du alle aus und schickst <b>alle</b> Ergebnisse gemeinsam in einer user-Nachricht zurück.</li>
<li>Die <b>Sicherheitsgrenze</b> (hier 10 Runden) verhindert Endlosschleifen.</li>
</ul>
<p>Klappt ein Werkzeug nicht (Kalender nicht erreichbar, Kunde nicht gefunden), schickst du das ehrlich zurück: ein tool_result mit <code>"is_error": True</code> und einer verständlichen Meldung. Claude kann dann nachfragen oder einen anderen Weg versuchen, statt etwas zu erfinden.</p>

<h4>Teil 2: tool_choice, wer entscheidet?</h4>
<table>
<tr><th>Wert</th><th>Bedeutung</th></tr>
<tr><td><code>auto</code></td><td>Claude entscheidet selbst (Standard)</td></tr>
<tr><td><code>any</code></td><td>Claude muss irgendein Werkzeug benutzen</td></tr>
<tr><td><code>tool</code></td><td>Claude muss ein bestimmtes Werkzeug benutzen</td></tr>
<tr><td><code>none</code></td><td>Claude darf kein Werkzeug benutzen</td></tr>
</table>
<div class="now">Bei Claude Opus 5.5 und Sonnet 5.5 sind nur noch <code>auto</code> (bei Opus zusätzlich <code>none</code>) erlaubt, <code>any</code> und <code>tool</code> führen zu einem Fehler. Haiku 5.5 akzeptiert sie noch. Statt Werkzeuge zu erzwingen, beschreibst du im System-Prompt klar, wann welches Werkzeug zu benutzen ist, und markierst Werkzeuge mit <code>"strict": True</code>, damit die Eingaben garantiert zum Schema passen.</div>
<p>Schon der Kurs betont: Bei <code>auto</code> entscheidet dein Prompt mit. Steht im System-Prompt „Nutze termine_pruefen bei jeder Frage nach Terminen, rate niemals“, wählt Claude das Werkzeug zuverlässig.</p>

<h4>Teil 3: Garantiert strukturierte Daten</h4>
<p>Der Kurs zeigt einen cleveren Trick: Man definiert ein „Werkzeug“, dessen Eingabe-Schema genau die gewünschte Datenstruktur ist, und erzwingt es. Claude füllt dann das Formular aus, und man hat sauberes JSON. Heute gibt es dafür eine eigene Funktion: <b>Structured Outputs</b>. Du gibst ein JSON-Schema an, und die Antwort passt garantiert dazu:</p>
<pre>import json

schema = {
    "type": "object",
    "properties": {
        "datum": {"type": "string"},
        "ort": {"type": "string"},
        "besetzung": {"type": "string"},
        "budget_eur": {"type": "number"}
    },
    "required": ["datum", "ort"],
    "additionalProperties": False
}

antwort = client.messages.create(
    model="claude-haiku-5-5", max_tokens=1000,
    messages=[{"role": "user", "content":
        f"Extrahiere die Eckdaten dieser Konzertanfrage: &lt;mail&gt;{mail}&lt;/mail&gt;"}],
    output_config={"format": {"type": "json_schema", "schema": schema}},
)
daten = json.loads("".join(b.text for b in antwort.content if b.type == "text"))</pre>
<p>Faustregel: <b>Structured Outputs</b>, wenn das Ergebnis selbst Daten sind (Extrahieren, Einordnen, Berichte). <b>Werkzeuge</b>, wenn etwas nachgeschlagen oder getan werden soll.</p>

<h4>Teil 4: Ein Chatbot mit mehreren Werkzeugen</h4>
<p>Der Kurs baut einen Kundenservice-Bot mit mehreren Werkzeugen. Übertragen auf ein Ensemble-Büro:</p>
<table>
<tr><th>Werkzeug</th><th>Art</th></tr>
<tr><td><code>kunde_finden</code> (per Mail oder Telefon)</td><td>lesend</td></tr>
<tr><td><code>buchungen_anzeigen</code></td><td>lesend</td></tr>
<tr><td><code>buchung_stornieren</code></td><td>schreibend, riskant</td></tr>
</table>
<p>Was den Bot gut macht, steht vor allem im System-Prompt:</p>
<ul>
<li>Rolle und Ton, wie gewohnt</li>
<li><b>Wann welches Werkzeug</b>: „Finde immer zuerst den Kunden, bevor du Buchungen anzeigst.“</li>
<li><b>Fehlende Angaben erfragen</b> statt raten: „Fehlt die Mailadresse, frag danach.“</li>
<li><b>Vor schreibenden Aktionen bestätigen lassen:</b> „Vor jeder Stornierung fasst du zusammen und wartest auf ein ausdrückliches Ja.“</li>
<li>Interne Kennungen und technische Details nicht an Kunden weitergeben</li>
</ul>
<div class="tip">Sicherheitsregeln für Werkzeuge: so wenige Rechte wie möglich (lesen statt schreiben), Bestätigung vor riskanten Aktionen, jede Aktion protokollieren, Limits setzen (z. B. höchstens eine Stornierung pro Gespräch) und nie Passwörter oder Keys in Werkzeug-Ergebnisse packen.</div>
<p>Fertige Beispiele dazu findest du in den Claude Cookbooks im Ordner <code>tool_use</code>, etwa einen Kundenservice-Agenten, parallele Werkzeuge und ein Gedächtnis-Werkzeug.</p>`,
      keys: [
        "Schleife: aufrufen, Werkzeuge ausführen, Ergebnisse zurück, bis kein tool_use mehr kommt",
        "Mehrere Aufrufe auf einmal: alle Ergebnisse in einer user-Nachricht",
        "Fehler ehrlich als tool_result mit is_error melden",
        "tool_choice: bei Opus/Sonnet 5.5 nur auto, steuern über Prompt und strict",
        "Structured Outputs (output_config.format) für garantiert gültiges JSON",
        "Vor schreibenden Aktionen bestätigen lassen, minimale Rechte"
      ],
      quiz: [
        { t: "mc", q: "Warum läuft ein Tool-Use-Programm in einer Schleife?", o: ["Damit es länger dauert", "Weil Claude oft mehrere Werkzeuge nacheinander braucht, bis die Aufgabe erledigt ist", "Weil die API nur Schleifen erlaubt", "Damit Tokens gespart werden"], a: 1, e: "Erst wenn kein tool_use mehr kommt, ist Claude fertig." },
        { t: "mc", q: "Claude fordert in einer Antwort zwei Werkzeuge gleichzeitig an. Was tust du?", o: ["Nur das erste ausführen", "Beide ausführen und beide Ergebnisse gemeinsam in einer user-Nachricht zurückschicken", "Eine Fehlermeldung senden", "Das Gespräch neu starten"], a: 1, e: "Parallele Aufrufe werden gemeinsam beantwortet." },
        { t: "match", q: "Was bedeutet der tool_choice-Wert?", p: [["auto", "Claude entscheidet selbst"], ["any", "Irgendein Werkzeug muss benutzt werden"], ["tool", "Ein bestimmtes Werkzeug muss benutzt werden"], ["none", "Kein Werkzeug erlaubt"]], e: "Bei den neuesten großen Modellen bleibt praktisch nur auto." },
        { t: "mc", q: "Du willst bei Claude Opus 5.5 sicherstellen, dass ein bestimmtes Werkzeug zuverlässig benutzt wird. Was ist der richtige Weg?", o: ["tool_choice auf tool setzen", "tool_choice auto lassen, im System-Prompt klar sagen, wann das Werkzeug zu nutzen ist, und strict setzen", "temperature auf 0 setzen", "Das Werkzeug zweimal definieren"], a: 1, e: "any und tool führen bei Opus 5.5 zu einem Fehler." },
        { t: "mc", q: "Wie bekommst du heute garantiert gültiges JSON in einem festen Format?", o: ["Mit Prefill einer geschweiften Klammer", "Mit Structured Outputs über output_config.format und einem JSON-Schema", "Mit stop_sequences", "Gar nicht"], a: 1, e: "Structured Outputs garantieren, dass die Antwort zum Schema passt." },
        { t: "tf", q: "Ein Bot sollte vor einer Stornierung zusammenfassen und auf ein ausdrückliches Ja warten.", a: true, e: "Schreibende, riskante Aktionen immer bestätigen lassen." },
        { t: "mc", q: "Der Kalender ist gerade nicht erreichbar. Was schickst du an Claude zurück?", o: ["Nichts", "Ein erfundenes Ergebnis", "Ein tool_result mit is_error und einer verständlichen Meldung", "Den API-Key"], a: 2, e: "So kann Claude ehrlich reagieren, statt zu raten." }
      ],
      practice: {
        type: "code",
        task: "Baue einen Mini-Agenten mit zwei Werkzeugen für einen erfundenen Probenkalender: termine_lesen und probe_eintragen. Frage ihn: „Ist am 2026-12-12 noch abends frei? Wenn ja, trag eine Tutti-Probe um 19:00 im Probenraum A ein.“",
        hint: "Der Kalender ist einfach ein Python-Dictionary. In der Schleife prüfst du stop_reason, führst jeden tool_use-Block über eine kleine Verteiler-Funktion aus und schickst alle Ergebnisse gemeinsam zurück.",
        starter: `from dotenv import load_dotenv
from anthropic import Anthropic

load_dotenv()
client = Anthropic()
MODELL = "claude-haiku-5-5"

KALENDER = {"2026-12-12": ["10:00-12:30 Probe Blech"]}

def termine_lesen(datum):
    return KALENDER.get(datum, [])

def probe_eintragen(datum, start, ort):
    KALENDER.setdefault(datum, []).append(f"{start} Tutti-Probe ({ort})")
    return "eingetragen"

TOOLS = [
    {"name": "termine_lesen",
     "description": "Liefert die belegten Zeiten an einem Datum aus dem Probenkalender. Immer nutzen, bevor etwas eingetragen wird.",
     "input_schema": {"type": "object",
                      "properties": {"datum": {"type": "string", "description": "JJJJ-MM-TT"}},
                      "required": ["datum"]}},
    # TODO 1: Definition für probe_eintragen (datum, start, ort)
]

def fuehre_aus(name, eingabe):
    # TODO 2: je nach name die passende Funktion aufrufen und das Ergebnis als Text zurückgeben
    pass

def frage(text):
    verlauf = [{"role": "user", "content": text}]
    # TODO 3: Schleife wie in der Lektion (max. 10 Runden)

print(frage("Ist am 2026-12-12 noch abends frei? Wenn ja, trag eine Tutti-Probe um 19:00 im Probenraum A ein."))
print(KALENDER)`,
        solution: `from dotenv import load_dotenv
from anthropic import Anthropic

load_dotenv()
client = Anthropic()
MODELL = "claude-haiku-5-5"

KALENDER = {"2026-12-12": ["10:00-12:30 Probe Blech"]}

def termine_lesen(datum):
    return KALENDER.get(datum, [])

def probe_eintragen(datum, start, ort):
    KALENDER.setdefault(datum, []).append(f"{start} Tutti-Probe ({ort})")
    return "eingetragen"

TOOLS = [
    {"name": "termine_lesen",
     "description": "Liefert die belegten Zeiten an einem Datum aus dem Probenkalender. Immer nutzen, bevor etwas eingetragen wird.",
     "input_schema": {"type": "object",
                      "properties": {"datum": {"type": "string", "description": "JJJJ-MM-TT"}},
                      "required": ["datum"]}},
    {"name": "probe_eintragen",
     "description": "Trägt eine Tutti-Probe ein. Nur nutzen, wenn der Termin laut termine_lesen frei ist und der Nutzer das Eintragen ausdrücklich gewünscht hat.",
     "input_schema": {"type": "object",
                      "properties": {"datum": {"type": "string", "description": "JJJJ-MM-TT"},
                                     "start": {"type": "string", "description": "HH:MM"},
                                     "ort": {"type": "string"}},
                      "required": ["datum", "start", "ort"]}},
]

def fuehre_aus(name, eingabe):
    if name == "termine_lesen":
        return str(termine_lesen(eingabe["datum"]))
    if name == "probe_eintragen":
        return probe_eintragen(eingabe["datum"], eingabe["start"], eingabe["ort"])
    return "Unbekanntes Werkzeug"

def frage(text):
    verlauf = [{"role": "user", "content": text}]
    for runde in range(10):
        antwort = client.messages.create(model=MODELL, max_tokens=2000, tools=TOOLS, messages=verlauf)
        verlauf.append({"role": "assistant", "content": antwort.content})
        if antwort.stop_reason != "tool_use":
            return "".join(b.text for b in antwort.content if b.type == "text")
        ergebnisse = []
        for block in antwort.content:
            if block.type == "tool_use":
                print("Werkzeug:", block.name, block.input)
                ergebnisse.append({"type": "tool_result", "tool_use_id": block.id,
                                   "content": fuehre_aus(block.name, block.input)})
        verlauf.append({"role": "user", "content": ergebnisse})
    return "Abgebrochen: zu viele Runden"

print(frage("Ist am 2026-12-12 noch abends frei? Wenn ja, trag eine Tutti-Probe um 19:00 im Probenraum A ein."))
print(KALENDER)`
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
