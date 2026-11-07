(window.ZONES = window.ZONES || []).push({
  id: "z7",
  title: "Claude Code",
  subtitle: "Dein KI-Agent im Terminal",
  icon: "💻",
  color: "#d97706",
  badge: { name: "Terminal-Held", icon: "⌨️" },
  levels: [
    {
      id: "z7l1",
      title: "Was ist Claude Code?",
      icon: "🤖",
      lesson: `
<p><b>Claude Code</b> ist ein <b>KI-Agent von Anthropic</b>, der direkt auf deinem Computer arbeitet. Anders als im Chat <b>liest er deine Dateien, schreibt und ändert sie, führt Befehle aus</b> und prüft seine Ergebnisse selbst.</p>
<h4>Chat vs. Claude Code</h4>
<ul>
<li><b>Chat:</b> Du kopierst Text hinein, bekommst eine Antwort und kopierst sie wieder heraus.</li>
<li><b>Claude Code:</b> Du sagst „Erstelle eine Web-App für meine Probenplanung“, und er legt die Dateien an, testet sie und korrigiert Fehler.</li>
</ul>
<h4>Agentic Coding vs. Vibe Coding</h4>
<ul>
<li><b>Vibe Coding:</b> Einfach drauflos „wünschen“, ohne zu verstehen, was passiert. Das klappt für Spielereien, wird aber bei echten Projekten schnell chaotisch.</li>
<li><b>Agentic Coding:</b> Du gibst <b>klare Ziele, Kontext und Regeln</b>, prüfst Zwischenergebnisse und steuerst bewusst. Der Agent arbeitet, <b>du führst</b>.</li>
</ul>
<div class="tip">Leitsatz: <b>Mensch steuert, Agent arbeitet.</b> Du bist Dirigent, nicht Zuschauer.</div>
<h4>Nicht nur für Programmierer</h4>
<p>Claude Code eignet sich auch für Nicht-Entwickler: Dateien sortieren, Texte in Serie bearbeiten, Daten auswerten, eigene kleine Tools und Webseiten bauen, Abläufe automatisieren.</p>`,
      keys: [
        "Claude Code = Agent, der Dateien liest/schreibt und Befehle ausführt",
        "Agentic Coding = bewusst steuern statt blind wünschen",
        "Mensch steuert, Agent arbeitet"
      ],
      quiz: [
        { t: "mc", q: "Was kann Claude Code, was ein normaler Chat nicht kann?", o: ["Gedichte schreiben", "Direkt Dateien auf deinem Computer lesen, ändern und Befehle ausführen", "Fragen beantworten", "Übersetzen"], a: 1, e: "Er arbeitet direkt in deinem Projekt." },
        { t: "match", q: "Ordne zu.", p: [["Vibe Coding", "Drauflos wünschen ohne Verständnis"], ["Agentic Coding", "Klare Ziele, Kontext, Kontrolle"], ["Mensch", "Steuert und prüft"], ["Agent", "Führt aus"]], e: "Du bist der Dirigent." },
        { t: "tf", q: "Claude Code ist ausschließlich für professionelle Programmierer gedacht.", a: false, e: "Auch Nicht-Entwickler können damit Tools bauen und Abläufe automatisieren." }
      ],
      practice: {
        task: "Nenne zwei Projekte, die du mit Claude Code umsetzen möchtest.",
        hint: "Eigene Tools, Webseite, Datei-Aufräumarbeiten, Auswertungen …",
        solution: "Beispiele: 1) Eigene Künstler-Webseite bauen und pflegen. 2) Ein Tool, das aus einem Konzertprogramm automatisch Probenplan und Packliste erstellt."
      }
    },
    {
      id: "z7l2",
      title: "Oberflächen und Pläne",
      icon: "🖥️",
      lesson: `
<p>Claude Code gibt es in mehreren Formen:</p>
<ul>
<li><b>Terminal (CLI):</b> Das Original. Du tippst Befehle in die Kommandozeile. Am mächtigsten und flexibelsten.</li>
<li><b>IDE-Integration:</b> In Code-Editoren wie <b>VS Code</b> oder JetBrains. Du siehst Änderungen direkt im Editor.</li>
<li><b>Desktop-App:</b> Mit grafischer Oberfläche, gut für den Einstieg.</li>
<li><b>Web/Cloud:</b> Läuft im Browser in einer Cloud-Umgebung, z. B. direkt mit deinen GitHub-Repos. Aufgaben laufen weiter, auch wenn du weg bist.</li>
</ul>
<h4>Wann welches?</h4>
<ul>
<li>Einstieg und Überblick: <b>Desktop oder Web</b></li>
<li>Tägliche Arbeit an einem Projekt: <b>Terminal oder IDE</b></li>
<li>Lange Aufgaben „nebenbei“: <b>Web/Cloud</b></li>
</ul>
<h4>Wie bezahlt man?</h4>
<ul>
<li><b>Abo (Pro oder Max):</b> Fester Monatspreis mit Nutzungslimits, die sich regelmäßig zurücksetzen. Max bietet deutlich mehr Nutzung. Gut planbar.</li>
<li><b>API (Pay-as-you-go):</b> Abrechnung pro Token über die Anthropic Console. Flexibel, kann bei viel Nutzung aber teuer werden.</li>
</ul>
<div class="tip">Für Einsteiger ist ein Abo meist die bessere Wahl: keine Überraschungen auf der Rechnung.</div>`,
      keys: [
        "Terminal, IDE, Desktop, Web",
        "Abo = planbar mit Limits; API = pro Token",
        "Einsteiger: Abo"
      ],
      quiz: [
        { t: "match", q: "Ordne die Oberfläche dem Einsatz zu.", p: [["Terminal", "Mächtigste, flexible Arbeit per Befehl"], ["IDE (VS Code)", "Änderungen direkt im Editor sehen"], ["Web/Cloud", "Lange Aufgaben laufen weiter, auch wenn du weg bist"]], e: "Alle nutzen denselben Agenten." },
        { t: "mc", q: "Was ist der Vorteil eines Abos gegenüber der API-Abrechnung?", o: ["Unbegrenzte Nutzung", "Planbare Kosten", "Es ist immer schneller", "Man braucht keinen Account"], a: 1, e: "Fester Preis, dafür Nutzungslimits." },
        { t: "tf", q: "Bei der API zahlt man nach verbrauchten Tokens.", a: true, e: "Pay-as-you-go." }
      ],
      practice: {
        task: "Welche Oberfläche und welcher Bezahlweg passen zu dir? Begründe kurz.",
        hint: "Wie technisch bist du? Wie oft wirst du es nutzen?",
        solution: "Beispiel: „Zum Einstieg die Desktop- oder Web-Version mit Pro-Abo, weil ich planbare Kosten will und das Terminal noch neu für mich ist. Später Terminal für meine Webseite.“"
      }
    },
    {
      id: "z7l3",
      title: "Die 3 Säulen und Markdown",
      icon: "🏛️",
      lesson: `
<p>Gute Ergebnisse mit Claude Code ruhen auf <b>drei Säulen</b>:</p>
<ol>
<li><b>Context (Kontext):</b> Was muss der Agent wissen? Projektziel, Zielgruppe, vorhandene Dateien, Vorlieben, Einschränkungen. Je besser der Kontext, desto weniger rät er.</li>
<li><b>Instructions (Anweisungen):</b> Was genau soll er tun, und nach welchen Regeln? Klare, überprüfbare Aufträge statt vager Wünsche.</li>
<li><b>Iteration:</b> Ergebnis ansehen, Feedback geben, verbessern. Kleine Schritte statt eines Riesenauftrags.</li>
</ol>
<h4>Warum Markdown (.md)?</h4>
<p><b>Markdown</b> ist ein einfaches Textformat mit wenigen Zeichen für Struktur:</p>
<pre># Überschrift
## Unterüberschrift
- Aufzählungspunkt
**fett**</pre>
<p>Vorteile für die KI-Arbeit:</p>
<ul>
<li>Für Menschen <b>und</b> KI gut lesbar</li>
<li>Klare Struktur durch Überschriften und Listen</li>
<li>Kein Ballast wie bei Word-Dateien, also weniger Tokens</li>
<li>Die wichtigsten Konfigurationsdateien von Claude Code (CLAUDE.md, Skills, Agents) sind Markdown</li>
</ul>
<div class="tip">Speichere Wissen, das Claude öfter braucht, als .md-Datei im Projekt, z. B. „stil.md“ mit deinem Schreibstil.</div>`,
      keys: [
        "Context, Instructions, Iteration",
        "Markdown = einfaches, strukturiertes Textformat",
        "Konfiguration von Claude Code ist Markdown"
      ],
      quiz: [
        { t: "match", q: "Ordne die Säule zu.", p: [["„Die Seite ist für Konzertveranstalter gedacht.“", "Context"], ["„Nutze nur deutsche Texte und keine externen Bibliotheken.“", "Instructions"], ["„Mach die Überschrift größer, sonst passt es.“", "Iteration"]], e: "Alle drei zusammen ergeben gute Resultate." },
        { t: "mc", q: "Wie schreibt man in Markdown eine Hauptüberschrift?", o: ["<h1>Titel", "# Titel", "**Titel**", "Titel:"], a: 1, e: "Ein # = Ebene 1, ## = Ebene 2 usw." },
        { t: "tf", q: "Markdown-Dateien verbrauchen meist weniger Tokens als komplex formatierte Dokumente.", a: true, e: "Kein Formatierungsballast." }
      ],
      practice: {
        task: "Schreibe eine kleine Markdown-Datei „ueber-mich.md“ mit Überschrift, 3 Stichpunkten und einem fetten Wort.",
        hint: "# für Überschrift, - für Stichpunkte, **…** für fett.",
        solution: "# Über mich\n- Professioneller Schlagzeuger und **Paukist**\n- Spielt in einem Blechbläser-Ensemble\n- Unterrichtet Schlagwerk"
      }
    },
    {
      id: "z7l4",
      title: "Terminal und Installation",
      icon: "⌨️",
      lesson: `
<p>Das <b>Terminal</b> (auch Kommandozeile oder Shell) ist ein Fenster, in dem du dem Computer Befehle als Text gibst. Auf dem Mac heißt es „Terminal“, unter Windows nutzt man PowerShell oder WSL.</p>
<h4>Die wichtigsten Grundbefehle</h4>
<ul>
<li><code>pwd</code>: Wo bin ich gerade? Zeigt den aktuellen Ordner.</li>
<li><code>ls</code>: Was liegt hier? Listet die Dateien (unter Windows-CMD: <code>dir</code>).</li>
<li><code>cd ordnername</code>: In einen Ordner wechseln. <code>cd ..</code> geht eine Ebene hoch.</li>
<li><code>mkdir neuerordner</code>: Ordner anlegen.</li>
</ul>
<h4>Installation</h4>
<p>Anthropic bietet einen <b>offiziellen Installer</b> an. Den aktuellen Befehl findest du in der offiziellen Claude-Code-Dokumentation. Alternativ geht es über npm (braucht Node.js):</p>
<pre>npm install -g @anthropic-ai/claude-code</pre>
<h4>Erster Start</h4>
<ol>
<li>Mit <code>cd</code> in deinen Projektordner wechseln</li>
<li><code>claude</code> eintippen und Enter drücken</li>
<li>Beim ersten Mal <b>anmelden</b> (Abo-Konto oder API-Key)</li>
<li>Einfach losschreiben, auf Deutsch: „Was liegt in diesem Ordner?“</li>
</ol>
<p><b>Health-Check:</b> <code>/doctor</code> prüft, ob die Installation in Ordnung ist. Mit <code>/help</code> siehst du alle Befehle.</p>
<div class="tip">Starte Claude Code immer im <b>richtigen Projektordner</b>. Er arbeitet mit den Dateien dort, wo du ihn startest.</div>`,
      keys: [
        "pwd, ls, cd, mkdir",
        "Start: cd ins Projekt, dann claude",
        "/doctor = Health-Check, /help = Hilfe"
      ],
      quiz: [
        { t: "match", q: "Ordne den Befehl seiner Bedeutung zu.", p: [["pwd", "Aktuellen Ordner anzeigen"], ["ls", "Dateien auflisten"], ["cd ..", "Eine Ebene hoch"], ["mkdir", "Ordner anlegen"]], e: "Mit diesen vier kommst du schon weit." },
        { t: "order", q: "Bringe den ersten Start in die richtige Reihenfolge.", o: ["Terminal öffnen", "Mit cd in den Projektordner wechseln", "claude eintippen", "Anmelden", "Erste Aufgabe formulieren"], e: "Immer im richtigen Ordner starten." },
        { t: "mc", q: "Welcher Befehl prüft, ob Claude Code richtig installiert ist?", o: ["/clear", "/doctor", "/exit", "ls"], a: 1, e: "Der „Arzt“ untersucht deine Installation." }
      ],
      practice: {
        task: "Schreibe die Befehle auf, mit denen du einen Ordner „lernreise“ anlegst, hineinwechselst und Claude Code startest.",
        hint: "Drei Befehle nacheinander.",
        solution: "mkdir lernreise\ncd lernreise\nclaude"
      }
    },
    {
      id: "z7l5",
      title: "CLAUDE.md und der .claude-Ordner",
      icon: "📝",
      lesson: `
<p>Claude Code beginnt jede Sitzung ohne Erinnerung an die letzte. Damit er dein Projekt trotzdem kennt, gibt es die <b>CLAUDE.md</b>, das <b>Projektgedächtnis</b>.</p>
<h4>Was ist CLAUDE.md?</h4>
<p>Eine Markdown-Datei, die Claude Code <b>bei jedem Start automatisch liest</b>. Hinein gehören:</p>
<ul>
<li>Worum geht es im Projekt? Wer ist die Zielgruppe?</li>
<li>Wichtige Befehle, z. B. zum Testen oder Starten</li>
<li>Regeln und Vorlieben: „Texte immer auf Deutsch, Sie-Form“</li>
<li>Was er <b>nicht</b> tun soll</li>
</ul>
<p>Mit <code>/init</code> erstellt Claude Code eine erste CLAUDE.md, indem er dein Projekt analysiert. Mit <code>/memory</code> kannst du sie bearbeiten.</p>
<h4>Global vs. lokal</h4>
<ul>
<li><b>Global:</b> <code>~/.claude/CLAUDE.md</code> im Home-Ordner gilt für <b>alle</b> Projekte, z. B. „Antworte immer auf Deutsch.“</li>
<li><b>Projekt:</b> <code>CLAUDE.md</code> im Projektordner gilt für <b>dieses</b> Projekt und kann mit dem Team geteilt werden.</li>
</ul>
<h4>Der .claude-Ordner</h4>
<p>Neben CLAUDE.md gibt es den Ordner <code>.claude</code>, ebenfalls global (<code>~/.claude/</code>) oder im Projekt. Dort liegen u. a.:</p>
<ul>
<li><code>settings.json</code>: Einstellungen und Berechtigungen</li>
<li><code>skills/</code>: Skills (Level 8)</li>
<li><code>agents/</code>: Subagents (Level 9)</li>
</ul>
<div class="tip">Halte CLAUDE.md <b>kurz und aktuell</b>. Sie wird jedes Mal gelesen und verbraucht Kontext.</div>`,
      keys: [
        "CLAUDE.md = Projektgedächtnis, wird automatisch gelesen",
        "/init erstellt sie, /memory bearbeitet sie",
        "Global (~/.claude) vs. Projekt",
        ".claude-Ordner: settings.json, skills/, agents/"
      ],
      quiz: [
        { t: "mc", q: "Wann liest Claude Code die CLAUDE.md?", o: ["Nie", "Automatisch bei jedem Start", "Nur wenn man sie per Mail schickt", "Einmal im Monat"], a: 1, e: "Deshalb ist sie das Projektgedächtnis." },
        { t: "match", q: "Ordne zu.", p: [["~/.claude/CLAUDE.md", "Gilt für alle Projekte"], ["CLAUDE.md im Projekt", "Gilt für dieses Projekt"], ["/init", "Erstellt eine erste CLAUDE.md"], ["settings.json", "Einstellungen und Berechtigungen"]], e: "Global = Home-Ordner, lokal = Projektordner." },
        { t: "tf", q: "Eine CLAUDE.md sollte möglichst lang und ausführlich sein.", a: false, e: "Kurz und aktuell, denn sie verbraucht bei jedem Start Kontext." }
      ],
      practice: {
        task: "Schreibe eine kurze CLAUDE.md für deine Künstler-Webseite (Ziel, Zielgruppe, 3 Regeln).",
        hint: "Markdown mit Überschriften und Stichpunkten.",
        solution: "# Meine Künstler-Webseite\n## Ziel\nProfessionelle Webseite als Paukist für Veranstalter und Orchester.\n## Regeln\n- Texte auf Deutsch, später Englisch\n- Eine einzige HTML-Datei, keine externen Abhängigkeiten\n- Vor jeder größeren Änderung kurz den Plan zeigen"
      }
    },
    {
      id: "z7l6",
      title: "Berechtigungen und Sicherheit",
      icon: "🔐",
      lesson: `
<p>Claude Code kann Dateien ändern und Befehle ausführen. Deshalb fragt er standardmäßig <b>um Erlaubnis</b>, bevor er etwas Wichtiges tut.</p>
<h4>Permission-Modi</h4>
<ul>
<li><b>Standard:</b> Fragt vor Dateiänderungen und Befehlen.</li>
<li><b>Auto-Accept Edits:</b> Dateiänderungen ohne Nachfrage, Befehle weiterhin mit.</li>
<li><b>Plan Mode:</b> Nur lesen und planen, nichts ändern (Level 7).</li>
<li><b>Bypass Permissions:</b> Alles ohne Nachfrage. Nur in abgeschotteten Umgebungen sinnvoll, für Einsteiger <b>nicht</b> empfohlen.</li>
</ul>
<p>Mit <b>Shift+Tab</b> wechselst du im Terminal zwischen den Modi.</p>
<h4>Regeln festlegen</h4>
<p>Mit <code>/permissions</code> oder in der <code>settings.json</code> legst du fest, was <b>immer erlaubt</b> (allow) und was <b>immer verboten</b> (deny) ist, z. B. „Tests ausführen: immer erlaubt“, „Datei .env lesen: verboten“.</p>
<h4>Sicherheitsregeln für Einsteiger</h4>
<ul>
<li>Lies, was Claude ausführen will, bevor du zustimmst.</li>
<li>Nutze <b>Git</b> (Level 12), damit sich jede Änderung rückgängig machen lässt.</li>
<li>Gib keine Passwörter oder API-Keys in den Chat. Leg sie in eine <code>.env</code>-Datei, die nicht hochgeladen wird.</li>
<li>Vorsicht bei Inhalten aus dem Internet: Sie können versteckte Anweisungen enthalten (<b>Prompt Injection</b>).</li>
</ul>`,
      keys: [
        "Standard, Auto-Accept, Plan, Bypass",
        "Shift+Tab wechselt den Modus",
        "allow/deny in /permissions oder settings.json",
        "Erst lesen, dann erlauben"
      ],
      quiz: [
        { t: "mc", q: "Mit welcher Tastenkombination wechselst du im Terminal den Permission-Modus?", o: ["Strg+C", "Shift+Tab", "Alt+F4", "Esc"], a: 1, e: "Shift+Tab schaltet durch die Modi." },
        { t: "match", q: "Ordne den Modus zu.", p: [["Standard", "Fragt vor Änderungen und Befehlen"], ["Auto-Accept Edits", "Ändert Dateien ohne Nachfrage"], ["Plan Mode", "Nur lesen und planen"], ["Bypass Permissions", "Alles ohne Nachfrage, riskant"]], e: "Für Einsteiger: Standard und Plan Mode." },
        { t: "tf", q: "Es ist eine gute Idee, API-Keys direkt in den Chat mit Claude Code zu tippen.", a: false, e: "Keys gehören in eine .env-Datei, die nicht hochgeladen wird." },
        { t: "mc", q: "Was ist Prompt Injection?", o: ["Ein schneller Prompt", "Versteckte Anweisungen in fremden Inhalten, die den Agenten manipulieren wollen", "Eine Installationsmethode", "Ein Tastenkürzel"], a: 1, e: "Darum fremde Inhalte mit Vorsicht behandeln." }
      ],
      practice: {
        task: "Formuliere 2 Allow- und 2 Deny-Regeln für dein Webseiten-Projekt (in eigenen Worten).",
        hint: "Was ist harmlos und häufig? Was ist gefährlich oder geheim?",
        solution: "Allow: Dateien im Projekt lesen; lokalen Testserver starten. Deny: .env-Datei lesen; Dateien außerhalb des Projektordners löschen."
      }
    },
    {
      id: "z7l7",
      title: "Plan Mode, Kontext und Tokens",
      icon: "🧭",
      lesson: `
<h4>Plan Mode, der Modus, den viele nicht kennen</h4>
<p>Im <b>Plan Mode</b> darf Claude Code nur <b>lesen und nachdenken</b>, aber nichts ändern. Er untersucht dein Projekt und legt dir einen <b>Plan</b> vor. Erst wenn du zustimmst, setzt er ihn um.</p>
<div class="tip">Bei größeren Aufgaben immer zuerst den Plan Mode nutzen. Ein falscher Plan ist billig zu korrigieren, ein falsch gebautes Projekt nicht.</div>
<h4>Kontext managen</h4>
<p>Wie jedes LLM hat Claude Code ein <b>Kontextfenster</b>. Je voller es wird, desto ungenauer und teurer wird die Arbeit.</p>
<ul>
<li><code>/clear</code>: Gespräch leeren, frisch anfangen. Ideal bei einem neuen Thema.</li>
<li><code>/compact</code>: Gespräch zusammenfassen, das Wichtige bleibt erhalten.</li>
<li><code>/context</code>: Zeigt, wie voll das Kontextfenster ist.</li>
</ul>
<h4>Modelle und Tokens</h4>
<ul>
<li><code>/model</code>: Modell wechseln, z. B. Opus für schwierige Aufgaben und ein schnelleres Modell für einfache.</li>
<li>Bei Abos gibt es <b>Nutzungslimits</b>. Lange Gespräche, große Dateien und große Modelle verbrauchen mehr.</li>
</ul>
<h4>Steuern während der Arbeit</h4>
<ul>
<li><b>Esc</b>: Claude unterbrechen, z. B. wenn er in die falsche Richtung läuft.</li>
<li><b>Esc Esc</b> bzw. <code>/rewind</code>: Zu einem früheren Punkt zurückspringen.</li>
</ul>`,
      keys: [
        "Plan Mode = erst planen, dann bauen",
        "/clear neu, /compact zusammenfassen, /context Füllstand",
        "/model wechselt das Modell; Esc unterbricht"
      ],
      quiz: [
        { t: "mc", q: "Was passiert im Plan Mode?", o: ["Claude ändert sofort alle Dateien", "Claude liest und plant, ändert aber nichts, bis du zustimmst", "Claude schaltet sich aus", "Claude plant deinen Urlaub"], a: 1, e: "Erst denken, dann handeln." },
        { t: "match", q: "Ordne den Befehl zu.", p: [["/clear", "Gespräch leeren, neu anfangen"], ["/compact", "Gespräch zusammenfassen"], ["/context", "Füllstand des Kontexts anzeigen"], ["/model", "Modell wechseln"]], e: "Mit diesen vier sparst du Tokens und Nerven." },
        { t: "mc", q: "Claude arbeitet gerade in die falsche Richtung. Was tust du?", o: ["Computer ausschalten", "Esc drücken und korrigieren", "Warten, bis er fertig ist", "Neue Datei anlegen"], a: 1, e: "Esc unterbricht, dann kannst du neu steuern." },
        { t: "tf", q: "Bei einem komplett neuen Thema ist /clear meist sinnvoll.", a: true, e: "Alter Kontext verwirrt nur und kostet Tokens." }
      ],
      practice: {
        task: "Schreibe einen Auftrag, den du im Plan Mode an Claude Code geben würdest, für eine Erweiterung deiner Webseite.",
        hint: "Ziel + Bitte um Plan + „noch nichts ändern“.",
        solution: "„Ich möchte eine Seite ‚Termine‘ mit kommenden Konzerten ergänzen, die ich selbst leicht pflegen kann. Untersuche das Projekt und schlage einen Plan vor: welche Dateien, welche Struktur, wie ich Termine eintrage. Noch nichts ändern.“"
      }
    },
    {
      id: "z7l8",
      title: "Skills",
      icon: "🎓",
      lesson: `
<p>Ein <b>Skill</b> ist eine <b>wiederverwendbare Anleitung</b> für eine bestimmte Aufgabe, wie ein Rezept, das Claude bei Bedarf hervorholt.</p>
<h4>Aufbau</h4>
<p>Ein Skill ist ein Ordner mit einer Datei <code>SKILL.md</code>, z. B. <code>.claude/skills/pressetext/SKILL.md</code>:</p>
<pre>---
name: pressetext
description: Schreibt Pressetexte für Konzerte im Stil
  des Ensembles. Nutzen, wenn ein Pressetext gebraucht wird.
---
# Pressetext schreiben
1. Programm und Besetzung erfassen
2. Aufhänger finden (Jubiläum, Uraufführung …)
3. Max. 2.500 Zeichen, Zitat des Leiters einbauen
4. Mit stil.md abgleichen</pre>
<ul>
<li>Der Kopfteil zwischen <code>---</code> (<b>Frontmatter</b>) enthält <b>Name</b> und <b>Beschreibung</b>. An der Beschreibung erkennt Claude, <b>wann</b> der Skill passt.</li>
<li>Darunter steht die eigentliche Anleitung. Zusätzlich können Vorlagen, Beispiele oder Skripte im Ordner liegen.</li>
</ul>
<h4>Warum Skills so stark sind</h4>
<ul>
<li>Claude lädt einen Skill <b>nur bei Bedarf</b>. Das spart Kontext, anders als bei der CLAUDE.md, die immer gelesen wird.</li>
<li>Einmal gut gebaut, liefert er <b>immer gleich gute</b> Ergebnisse.</li>
<li>Skills lassen sich teilen, im Team oder als Plugin.</li>
</ul>
<h4>Reverse Engineering</h4>
<p>Ein guter Weg zum eigenen Skill: Nimm ein <b>gelungenes Beispiel</b> (einen Text, ein Carousel, ein Angebot) und lass Claude analysieren, <b>was es gut macht</b>. Daraus wird die Anleitung im Skill.</p>`,
      keys: [
        "Skill = Ordner mit SKILL.md",
        "Frontmatter: name + description (wann nutzen)",
        "Wird nur bei Bedarf geladen",
        "Reverse Engineering guter Beispiele"
      ],
      quiz: [
        { t: "mc", q: "Woran erkennt Claude, wann ein Skill passt?", o: ["Am Dateinamen der Bilder", "An der description im Frontmatter", "An der Uhrzeit", "Gar nicht"], a: 1, e: "Darum muss die Beschreibung klar sagen, wann der Skill gebraucht wird." },
        { t: "tf", q: "Skills werden wie die CLAUDE.md bei jedem Start komplett gelesen.", a: false, e: "Skills werden nur bei Bedarf geladen. Das spart Kontext." },
        { t: "mc", q: "Wo liegt ein Projekt-Skill typischerweise?", o: [".claude/skills/name/SKILL.md", "Desktop/skill.docx", "In der E-Mail", "CLAUDE.md"], a: 0, e: "Jeder Skill hat seinen eigenen Ordner." },
        { t: "order", q: "Reverse-Engineering-Technik: Bringe die Schritte in die richtige Reihenfolge.", o: ["Gelungenes Beispiel auswählen", "Claude analysieren lassen, was es gut macht", "Erkenntnisse als Anleitung in SKILL.md schreiben", "Skill testen und verbessern"], e: "Vom Vorbild zur wiederholbaren Anleitung." }
      ],
      practice: {
        task: "Schreibe das Frontmatter (name + description) für einen Skill, den du gern hättest.",
        hint: "Die description sagt, was er tut UND wann er genutzt wird.",
        solution: "---\nname: probenplan\ndescription: Erstellt aus Konzertprogramm und Terminen einen Probenplan als Tabelle. Nutzen, wenn ein Probenplan oder eine Probenübersicht gebraucht wird.\n---"
      }
    },
    {
      id: "z7l9",
      title: "Subagents und Agent-Teams",
      icon: "👥",
      lesson: `
<p>Ein <b>Subagent</b> ist ein <b>spezialisierter Helfer</b>, an den Claude Code eine Teilaufgabe abgibt. Er arbeitet in seinem <b>eigenen Kontextfenster</b> und liefert nur das Ergebnis zurück.</p>
<h4>Warum das hilft</h4>
<ul>
<li><b>Sauberer Hauptkontext:</b> Die Recherche in 50 Dateien landet nicht in deinem Hauptgespräch, nur das Ergebnis.</li>
<li><b>Spezialisierung:</b> Ein Agent nur für Tests, einer nur für Texte, einer nur fürs Prüfen.</li>
<li><b>Parallelität:</b> Mehrere Subagents können gleichzeitig arbeiten.</li>
<li><b>Unabhängige Prüfung:</b> Ein Prüf-Agent, der das Ergebnis nicht selbst gebaut hat, findet mehr Fehler.</li>
</ul>
<h4>Eigene Subagents</h4>
<p>Mit <code>/agents</code> erstellst und verwaltest du sie. Sie liegen als Markdown-Dateien in <code>.claude/agents/</code>, mit Name, Beschreibung, erlaubten Tools und einer eigenen Systemanweisung.</p>
<div class="ex">Beispiel <code>korrektor.md</code>: „Du bist Lektor. Prüfe Texte auf Rechtschreibung, Tonfall und Länge. Ändere nichts, liste nur Verbesserungen auf.“ Erlaubte Tools: nur Lesen.</div>
<h4>Agent-Teams orchestrieren</h4>
<p>Bei großen Projekten verteilt ein Haupt-Agent die Arbeit auf ein Team: einer recherchiert, einer baut, einer testet, einer prüft. Du bist der <b>Orchestrator</b> und behältst den Überblick.</p>
<div class="tip">Wie im Orchester: Jede Stimmgruppe hat ihre Aufgabe, aber erst der Dirigent macht ein Ganzes daraus.</div>`,
      keys: [
        "Subagent = spezialisierter Helfer mit eigenem Kontext",
        "Vorteile: sauberer Kontext, Spezialisierung, Parallelität, Prüfung",
        "/agents, Dateien in .claude/agents/",
        "Agent-Teams orchestrieren"
      ],
      quiz: [
        { t: "mc", q: "Was ist der Hauptvorteil, wenn ein Subagent eine große Recherche übernimmt?", o: ["Es ist lustiger", "Der Hauptkontext bleibt sauber, nur das Ergebnis kommt zurück", "Es kostet nie Tokens", "Der Subagent ist immer klüger"], a: 1, e: "Eigenes Kontextfenster = Ordnung im Hauptgespräch." },
        { t: "mc", q: "Mit welchem Befehl verwaltest du Subagents?", o: ["/agents", "/clear", "/doctor", "/exit"], a: 0, e: "Sie liegen dann in .claude/agents/." },
        { t: "tf", q: "Ein Prüf-Agent, der das Ergebnis nicht selbst gebaut hat, findet oft mehr Fehler.", a: true, e: "Wie ein Lektor, der den Text frisch liest." }
      ],
      practice: {
        task: "Beschreibe ein Agent-Team aus 3 Subagents für die Pflege deiner Webseite.",
        hint: "Wer schreibt, wer baut, wer prüft?",
        solution: "1) Texter: schreibt Konzertankündigungen im eigenen Stil. 2) Entwickler: baut die Inhalte in die Seite ein. 3) Prüfer (nur Lesen): kontrolliert Rechtschreibung, Links, Darstellung am Handy und SEO-Grundlagen."
      }
    },
    {
      id: "z7l10",
      title: "Hooks",
      icon: "🪝",
      lesson: `
<p>Ein <b>Hook</b> ist ein Befehl, der <b>automatisch</b> an einem bestimmten Punkt der Arbeit von Claude Code ausgeführt wird, <b>immer</b> und ohne dass Claude es „vergessen“ kann.</p>
<h4>Warum Hooks?</h4>
<p>Anweisungen in der CLAUDE.md sind <b>Bitten</b>: Claude befolgt sie meistens. Hooks sind <b>Regeln</b>: Sie laufen garantiert. Das nennt man <b>deterministisch</b>.</p>
<h4>Wichtige Zeitpunkte (Events)</h4>
<ul>
<li><b>PreToolUse:</b> <b>Bevor</b> Claude ein Werkzeug benutzt. Kann Aktionen <b>blockieren</b>, z. B. „Niemals Dateien im Ordner /archiv löschen“.</li>
<li><b>PostToolUse:</b> <b>Nachdem</b> Claude ein Werkzeug benutzt hat, z. B. nach jeder Dateiänderung automatisch formatieren oder Tests starten.</li>
<li><b>UserPromptSubmit:</b> Wenn du eine Nachricht abschickst.</li>
<li><b>Stop:</b> Wenn Claude fertig ist, z. B. eine Benachrichtigung schicken.</li>
<li><b>SessionStart:</b> Beim Start einer Sitzung, z. B. aktuelle Infos laden.</li>
</ul>
<h4>Einrichten</h4>
<p>Hooks werden in der <code>settings.json</code> definiert. Mit <code>/hooks</code> kannst du sie ansehen und verwalten.</p>
<div class="ex">Beispiel: Nach jeder Änderung an einer .html-Datei prüft ein Hook automatisch, ob die Seite fehlerfrei ist. Bei einem Fehler bekommt Claude die Meldung sofort zurück und repariert.</div>
<div class="tip">Hooks führen Befehle auf deinem Rechner aus. Übernimm nur Hooks, die du verstehst!</div>`,
      keys: [
        "Hook = automatischer Befehl an festem Zeitpunkt",
        "Deterministisch: läuft garantiert",
        "PreToolUse (kann blockieren), PostToolUse, Stop …",
        "In settings.json, verwaltet mit /hooks"
      ],
      quiz: [
        { t: "mc", q: "Was ist der Unterschied zwischen einer Regel in CLAUDE.md und einem Hook?", o: ["Kein Unterschied", "CLAUDE.md ist eine Bitte, ein Hook läuft garantiert", "Hooks sind nur Deko", "CLAUDE.md läuft garantiert, Hooks nicht"], a: 1, e: "Hooks sind deterministisch." },
        { t: "match", q: "Ordne das Event zu.", p: [["PreToolUse", "Vor einer Aktion, kann blockieren"], ["PostToolUse", "Nach einer Aktion, z. B. testen"], ["Stop", "Wenn Claude fertig ist"], ["SessionStart", "Beim Start einer Sitzung"]], e: "Der Zeitpunkt bestimmt, was der Hook leisten kann." },
        { t: "mc", q: "Du willst verhindern, dass Claude jemals Dateien in /archiv löscht. Welches Event?", o: ["Stop", "PreToolUse", "PostToolUse", "SessionStart"], a: 1, e: "Nur vorher lässt sich etwas verhindern." }
      ],
      practice: {
        task: "Beschreibe zwei Hooks (Event + Aktion), die dir bei deiner Webseite helfen würden.",
        hint: "Einer, der schützt (vorher), und einer, der prüft (nachher).",
        solution: "1) PreToolUse: Blockieren, wenn Claude Dateien im Ordner „fotos-original“ ändern oder löschen will. 2) PostToolUse: Nach jeder HTML-Änderung automatisch auf kaputte Links prüfen."
      }
    },
    {
      id: "z7l11",
      title: "MCP und Plugins",
      icon: "🔌",
      lesson: `
<h4>MCP: der USB-Anschluss für KI</h4>
<p><b>MCP</b> (Model Context Protocol) ist ein offener Standard, mit dem KI-Anwendungen an <b>externe Tools und Datenquellen</b> angeschlossen werden. So wie USB jedes Gerät an jeden Computer anschließt, verbindet MCP Claude mit GitHub, Google Drive, Notion, Datenbanken, Kalendern und vielem mehr.</p>
<ul>
<li>Ein <b>MCP-Server</b> stellt Werkzeuge bereit, z. B. „Kalendereintrag erstellen“.</li>
<li>Claude Code kann diese Werkzeuge dann direkt benutzen.</li>
<li>Hinzufügen per <code>claude mcp add …</code>, Überblick mit <code>/mcp</code>.</li>
</ul>
<div class="ex">Mit einem Notion-MCP-Server: „Lies meine Konzertliste in Notion und erstelle daraus die Terminseite meiner Webseite.“</div>
<h4>Plugins: alles im Paket</h4>
<p>Ein <b>Plugin</b> bündelt mehrere Erweiterungen in einem Paket: <b>Skills, Subagents, Hooks, Befehle und MCP-Server</b>. Mit einem Klick bekommst du ein komplettes Werkzeugset.</p>
<ul>
<li>Plugins findet man in <b>Marketplaces</b> und verwaltet sie mit <code>/plugin</code>.</li>
<li>Teams können eigene Plugins bauen und teilen, so arbeiten alle mit denselben Standards.</li>
</ul>
<div class="tip">Sicherheit: Ein MCP-Server oder Plugin bekommt Zugriff auf Daten und kann Aktionen ausführen. Nur vertrauenswürdige Quellen installieren!</div>`,
      keys: [
        "MCP = offener Standard, „USB für KI“",
        "MCP-Server stellen Tools bereit; /mcp, claude mcp add",
        "Plugin = Paket aus Skills, Agents, Hooks, MCP",
        "Nur vertrauenswürdige Quellen"
      ],
      quiz: [
        { t: "mc", q: "Welcher Vergleich beschreibt MCP am besten?", o: ["Ein Passwort", "Ein USB-Anschluss für KI-Werkzeuge", "Ein Drucker", "Eine Programmiersprache"], a: 1, e: "Ein Standard, viele Anschlussmöglichkeiten." },
        { t: "match", q: "Ordne zu.", p: [["MCP-Server", "Stellt Tools und Daten bereit"], ["Plugin", "Bündelt Skills, Agents, Hooks, MCP"], ["/mcp", "Überblick über verbundene Server"], ["/plugin", "Plugins verwalten"]], e: "MCP verbindet, Plugins bündeln." },
        { t: "tf", q: "Plugins und MCP-Server aus unbekannten Quellen sind unbedenklich.", a: false, e: "Sie können auf Daten zugreifen und Aktionen ausführen." }
      ],
      practice: {
        task: "Welche zwei MCP-Verbindungen wären für dich am nützlichsten und wofür?",
        hint: "Welche Apps nutzt du täglich?",
        solution: "1) Google Kalender: Konzerttermine automatisch auf die Webseite übernehmen. 2) GitHub: Webseite und Tools versionieren und veröffentlichen."
      }
    },
    {
      id: "z7l12",
      title: "Git, GitHub und Workflows",
      icon: "🌿",
      lesson: `
<h4>Git: die Zeitmaschine für Projekte</h4>
<p><b>Git</b> speichert jeden Stand deines Projekts. Du kannst jederzeit zu einer früheren Version zurück. Gerade mit einem Agenten, der viele Dateien ändert, ist das ein unverzichtbares Sicherheitsnetz.</p>
<ul>
<li><b>Commit:</b> Ein gespeicherter Stand mit kurzer Beschreibung („Terminseite hinzugefügt“)</li>
<li><b>Branch:</b> Ein Seitenzweig zum Ausprobieren, ohne den Hauptstand zu gefährden</li>
<li><b>Repository (Repo):</b> Das Projekt mit seiner ganzen Geschichte</li>
</ul>
<h4>GitHub</h4>
<p><b>GitHub</b> ist die Online-Plattform für Git-Repos: Backup in der Cloud, Zusammenarbeit im Team und kostenloses Webseiten-Hosting mit <b>GitHub Pages</b>. Ein <b>Pull Request (PR)</b> schlägt Änderungen vor, die man vor dem Übernehmen prüft.</p>
<p>Claude Code kann das alles für dich übernehmen: „Committe die Änderungen mit einer passenden Beschreibung und erstelle einen Pull Request.“</p>
<h4>Produktiver arbeiten</h4>
<ul>
<li><b>IDE-Integration:</b> Claude in VS Code, Änderungen als Vorher-nachher-Vergleich (Diff) ansehen.</li>
<li><b>Headless-Modus:</b> <code>claude -p "Aufgabe"</code> führt eine Aufgabe ohne Dialog aus, ideal für Automationen.</li>
<li><b>Eigene Befehle:</b> Häufige Aufträge als eigene Slash-Commands oder Skills speichern.</li>
<li><b>Tastenkürzel und Shell-Aliase:</b> z. B. einen kurzen Alias, der Claude im Webseiten-Ordner startet.</li>
</ul>
<h4>Typische Use Cases für Nicht-Entwickler</h4>
<p>Webseiten bauen, Dokumente und Angebote erstellen, Audio transkribieren, Daten auswerten, Social-Media-Inhalte vorbereiten, Dateien in Serie umbenennen oder umwandeln.</p>`,
      keys: [
        "Git = Zeitmaschine: Commit, Branch, Repo",
        "GitHub = Online-Plattform, Pages = Hosting, PR = Änderungsvorschlag",
        "claude -p = Headless-Modus für Automationen"
      ],
      quiz: [
        { t: "match", q: "Ordne zu.", p: [["Commit", "Gespeicherter Projektstand"], ["Branch", "Seitenzweig zum Ausprobieren"], ["Pull Request", "Vorschlag zur Übernahme von Änderungen"], ["GitHub Pages", "Kostenloses Webseiten-Hosting"]], e: "Die Grundbegriffe der Versionsverwaltung." },
        { t: "mc", q: "Warum ist Git beim Arbeiten mit Claude Code so wichtig?", o: ["Es macht Claude schneller", "Jede Änderung lässt sich nachvollziehen und rückgängig machen", "Es ist Pflicht für die Installation", "Es spart Tokens"], a: 1, e: "Das Sicherheitsnetz für mutiges Arbeiten." },
        { t: "mc", q: "Was macht claude -p \"…\"?", o: ["Druckt etwas aus", "Führt eine Aufgabe ohne interaktiven Dialog aus", "Pausiert Claude", "Zeigt das Passwort"], a: 1, e: "Headless-Modus, z. B. für Skripte und Automationen." }
      ],
      practice: {
        task: "Formuliere einen Auftrag an Claude Code, der eine Änderung macht, committet und als Pull Request vorschlägt.",
        hint: "Was ändern + Commit + PR + Beschreibung.",
        solution: "„Ergänze auf der Startseite einen Abschnitt ‚Aktuelle Projekte‘ mit meinem Ensemble. Arbeite auf einem neuen Branch, committe mit einer klaren Nachricht und erstelle einen Pull Request mit kurzer Zusammenfassung, damit ich vor dem Übernehmen prüfen kann.“"
      }
    },
    {
      id: "z7l13",
      title: "Sicherheit, Recht und Ausblick",
      icon: "🔮",
      lesson: `
<h4>Sicherheitsrisiken</h4>
<ul>
<li><b>Geheimnisse:</b> API-Keys und Passwörter nie im Code oder in öffentlichen Repos. <code>.env</code> in die <code>.gitignore</code> eintragen.</li>
<li><b>Prompt Injection:</b> Webseiten, Dokumente oder Mails können versteckte Anweisungen enthalten. Kritische Aktionen immer selbst bestätigen.</li>
<li><b>Ungeprüfter Code:</b> KI-Code kann Sicherheitslücken enthalten. Bei Dingen mit Nutzerdaten, Logins oder Zahlungen gründlich prüfen oder prüfen lassen.</li>
<li><b>Abhängigkeiten:</b> Jede installierte Bibliothek ist fremder Code. Nur bekannte, gepflegte Pakete nutzen.</li>
</ul>
<p>Claude Code kann auch helfen, <b>Sicherheitslücken zu finden</b>: „Prüfe dieses Projekt auf Sicherheitsprobleme und erkläre sie verständlich.“</p>
<h4>Rechtliche Hürden</h4>
<ul>
<li><b>Datenschutz:</b> Kundendaten im Projekt? Dann gelten DSGVO und AVV, wie in Zone 4.</li>
<li><b>Firmencode:</b> Klären, ob der Arbeitgeber die Nutzung von KI-Tools mit seinem Code erlaubt.</li>
<li><b>Lizenzen:</b> Bei fremdem Code und fremden Bildern auf Lizenzen achten.</li>
<li>Sichere Unternehmenslösung: ein <b>Corporate LLM</b> oder Business-Tarife mit klaren Datenschutzzusagen.</li>
</ul>
<h4>Ausblick</h4>
<p>Claude Code ist nicht allein: <b>OpenAI Codex CLI</b> und <b>Google Gemini CLI</b> verfolgen dasselbe Prinzip, einen Agenten im Terminal. Offene Standards wie <b>MCP</b> und gemeinsame Anleitungsdateien (z. B. <b>AGENTS.md</b>) sorgen dafür, dass dein Wissen übertragbar bleibt.</p>
<div class="tip">Das Wichtigste, was du gelernt hast, ist nicht ein einzelnes Tool, sondern die <b>Denkweise</b>: Kontext geben, klar anweisen, iterieren, prüfen. Die bleibt, auch wenn die Tools wechseln.</div>`,
      keys: [
        "Geheimnisse in .env + .gitignore",
        "Prompt Injection und ungeprüften Code ernst nehmen",
        "Recht: DSGVO, Arbeitgeber-Erlaubnis, Lizenzen",
        "Alternativen: Codex CLI, Gemini CLI; Standards: MCP, AGENTS.md"
      ],
      quiz: [
        { t: "mc", q: "Wie verhinderst du, dass deine .env-Datei mit Keys auf GitHub landet?", o: ["Sie umbenennen in keys.txt", "Sie in die .gitignore eintragen", "Sie per Mail verschicken", "Gar nicht möglich"], a: 1, e: ".gitignore listet Dateien, die Git ignorieren soll." },
        { t: "tf", q: "KI-generierter Code kann Sicherheitslücken enthalten.", a: true, e: "Besonders bei Logins, Zahlungen und Nutzerdaten gründlich prüfen." },
        { t: "mc", q: "Welche Tools verfolgen ein ähnliches Prinzip wie Claude Code?", o: ["Excel und Word", "OpenAI Codex CLI und Google Gemini CLI", "Photoshop und Canva", "Slack und Trello"], a: 1, e: "Agenten im Terminal sind ein Branchentrend." },
        { t: "tf", q: "Die wichtigste übertragbare Fähigkeit ist die Denkweise: Kontext, klare Anweisungen, Iteration, Prüfung.", a: true, e: "Tools wechseln, das Prinzip bleibt." }
      ],
      practice: {
        task: "Schreibe deine persönliche Sicherheits-Checkliste mit 4 Punkten für die Arbeit mit Claude Code.",
        hint: "Geheimnisse, Bestätigen, Versionierung, Prüfung.",
        solution: "1) Keys nur in .env, die in .gitignore steht. 2) Jede Aktion lesen, bevor ich sie erlaube; Bypass-Modus nie nutzen. 3) Immer mit Git arbeiten, damit alles rückgängig zu machen ist. 4) Vor dem Veröffentlichen einen Sicherheits-Check durch Claude oder einen Prüf-Agenten."
      }
    }
  ]
});
