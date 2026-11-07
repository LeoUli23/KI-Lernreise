(window.ZONES = window.ZONES || []).push({
  id: "z0",
  title: "Start",
  subtitle: "Deine Lernreise beginnt",
  icon: "🚀",
  color: "#0ea5e9",
  badge: { name: "Losgelaufen", icon: "👟" },
  levels: [
    {
      id: "z0l1",
      title: "Willkommen an Bord",
      icon: "👋",
      lesson: `
<p>Schön, dass du da bist! Diese App führt dich in <b>8 Zonen</b> von null bis zu <b>Claude Code</b>. Sie folgt dem Aufbau der Kurse <i>KI-Manager</i> und <i>Claude Code Masterclass</i> von kilernen.de, erklärt aber alles in eigenen Worten und mit eigenen Übungen.</p>
<h4>So läuft jedes Level ab</h4>
<ol>
<li><b>Lernen:</b> Du liest eine kurze Lerneinheit. Fachbegriffe werden immer erklärt.</li>
<li><b>Quiz:</b> 3 bis 5 Fragen. Du hast <b>3 Herzen ❤️</b>. Jede falsche Antwort kostet ein Herz.</li>
<li><b>Praxis:</b> Eine kleine Aufgabe zum Selbermachen. Danach vergleichst du mit der Musterlösung.</li>
</ol>
<h4>Was du sammelst</h4>
<ul>
<li><b>XP</b> für jede richtige Antwort, jedes Level und jede Praxisaufgabe</li>
<li><b>Ränge</b> vom <i>KI-Neuling</i> bis zum <i>Agent-Meister</i></li>
<li><b>Streak 🔥</b>: Lerne an aufeinanderfolgenden Tagen</li>
<li><b>Badges</b> für jede abgeschlossene Zone und besondere Leistungen</li>
</ul>
<div class="tip">Falsch beantwortete Fragen landen automatisch im <b>Wiederholungs-Modus</b>. So festigst du genau das, was noch wackelt.</div>
<p>Am Ende wartet der <b>Endboss</b>: eine Abschlussprüfung über alle Zonen. Bestehst du sie, bekommst du deine Urkunde.</p>`,
      keys: [
        "Jedes Level: Lernen → Quiz → Praxis",
        "3 Herzen pro Quiz-Versuch",
        "Fehler landen im Wiederholungs-Modus",
        "Endboss-Prüfung am Schluss"
      ],
      quiz: [
        { t: "order", q: "Bringe die Schritte eines Levels in die richtige Reihenfolge.", o: ["Lerneinheit lesen", "Quiz beantworten", "Praxisaufgabe lösen"], e: "Erst verstehen, dann prüfen, dann anwenden." },
        { t: "mc", q: "Was passiert mit Fragen, die du falsch beantwortest?", o: ["Sie verschwinden", "Sie landen im Wiederholungs-Modus", "Du verlierst alle XP", "Das Level wird gesperrt"], a: 1, e: "Im Wiederholungs-Modus übst du gezielt deine Schwachstellen." },
        { t: "tf", q: "Wenn du an mehreren Tagen hintereinander lernst, wächst deine Streak.", a: true, e: "Die Streak 🔥 zählt aufeinanderfolgende Lerntage." }
      ],
      practice: {
        task: "Schreibe in 1–2 Sätzen auf, was du mit KI in deinem Alltag oder Beruf erreichen willst.",
        hint: "Denk an wiederkehrende Aufgaben, die dich Zeit kosten: E-Mails, Planung, Recherche, Organisation.",
        solution: "Beispiel: „Ich möchte KI nutzen, um Probenpläne, E-Mails an Veranstalter und Vereinsorganisation schneller zu erledigen, und mit Claude Code eigene kleine Tools bauen.“ Ein klares Ziel hilft dir, das Gelernte immer gleich auf deine Situation zu übertragen."
      }
    }
  ]
});

(window.ZONES = window.ZONES || []).push({
  id: "z1",
  title: "KI-Fundament",
  subtitle: "Was KI ist und wie man sie strategisch einsetzt",
  icon: "🧠",
  color: "#8b5cf6",
  badge: { name: "Fundament gelegt", icon: "🏛️" },
  levels: [
    {
      id: "z1l1",
      title: "Was ist KI? Eine kurze Geschichte",
      icon: "📜",
      lesson: `
<p><b>Künstliche Intelligenz (KI)</b> bezeichnet Computersysteme, die Aufgaben lösen, für die man bisher menschliche Intelligenz brauchte: Sprache verstehen, Bilder erkennen, Entscheidungen vorbereiten, Texte schreiben.</p>
<h4>Meilensteine</h4>
<ul>
<li><b>1950:</b> Alan Turing fragt, ob Maschinen denken können, und schlägt den „Turing-Test“ vor.</li>
<li><b>1956:</b> Auf der Dartmouth-Konferenz wird der Begriff „Artificial Intelligence“ geprägt.</li>
<li><b>1970er/80er:</b> „KI-Winter“: Die großen Versprechen werden nicht eingelöst, Geld und Interesse brechen ein.</li>
<li><b>1997:</b> Der Schachcomputer Deep Blue schlägt Weltmeister Kasparow.</li>
<li><b>2012:</b> Durchbruch des <b>Deep Learning</b> bei der Bilderkennung, möglich durch viel Daten und starke Grafikkarten.</li>
<li><b>2017:</b> Die <b>Transformer</b>-Architektur wird vorgestellt. Sie ist die Basis heutiger Sprachmodelle.</li>
<li><b>2022:</b> ChatGPT macht generative KI für alle zugänglich. Danach folgen Claude, Gemini und viele andere.</li>
</ul>
<h4>Die vierte industrielle Revolution</h4>
<p>Man spricht oft von vier industriellen Revolutionen: <b>Dampfmaschine</b> → <b>Elektrizität und Fließband</b> → <b>Computer und Automatisierung</b> → <b>Vernetzung und KI</b>. Neu ist diesmal: Automatisiert wird nicht nur Handarbeit, sondern auch <b>Wissensarbeit</b>.</p>
<div class="ex">Vergleich aus der Musik: Früher hat ein Notenstecher Partituren von Hand gesetzt, dann kam Notensatz-Software. KI geht einen Schritt weiter: Sie kann z. B. aus einer Beschreibung einen Probenplan entwerfen.</div>`,
      keys: [
        "KI = Systeme, die „intelligente“ Aufgaben lösen",
        "1956 Begriff geprägt, 2012 Deep Learning, 2017 Transformer, 2022 ChatGPT",
        "4. industrielle Revolution: Automatisierung von Wissensarbeit"
      ],
      quiz: [
        { t: "order", q: "Ordne die Ereignisse zeitlich (früh → spät).", o: ["Dartmouth-Konferenz prägt den Begriff KI", "Deep Blue schlägt Kasparow", "Transformer-Architektur wird vorgestellt", "ChatGPT erscheint"], e: "1956 → 1997 → 2017 → 2022." },
        { t: "mc", q: "Was war der „KI-Winter“?", o: ["Eine Phase mit wenig Geld und Interesse für KI", "Ein KI-Modell von Google", "Eine Wetter-KI", "Der Name des ersten Chatbots"], a: 0, e: "Nach überzogenen Erwartungen brachen Förderung und Interesse zeitweise ein." },
        { t: "mc", q: "Welche Architektur ist die Grundlage heutiger Sprachmodelle wie Claude?", o: ["Dampfmaschine", "Transformer", "Excel-Makros", "Lochkarten"], a: 1, e: "Der Transformer (2017) ist das Fundament moderner LLMs." },
        { t: "tf", q: "Das Besondere an der KI-Revolution ist, dass auch Wissensarbeit automatisiert werden kann.", a: true, e: "Frühere Revolutionen ersetzten vor allem körperliche oder einfache Routinearbeit." }
      ],
      practice: {
        task: "Nenne drei Aufgaben aus deinem Alltag, die zur Wissensarbeit gehören und die KI unterstützen könnte.",
        hint: "Wissensarbeit = Denken, Schreiben, Planen, Recherchieren, Organisieren.",
        solution: "Beispiele: 1) Bewerbungsanschreiben vorformulieren, 2) Probenplan aus Terminen erstellen, 3) lange PDFs (z. B. Vertragsbedingungen) zusammenfassen."
      }
    },
    {
      id: "z1l2",
      title: "Die Rolle des KI-Managers",
      icon: "🧭",
      lesson: `
<p>Ein <b>KI-Manager</b> ist die Brücke zwischen Technik und Alltag eines Unternehmens oder Vereins. Er muss nicht programmieren können. Er muss aber verstehen, <b>was KI kann</b>, <b>wo sie hilft</b> und <b>wie man sie sicher einführt</b>.</p>
<h4>Typische Verantwortungsbereiche</h4>
<ol>
<li><b>Potenziale erkennen:</b> Wo kostet uns etwas viel Zeit? Wo passieren Fehler?</li>
<li><b>Strategie entwickeln:</b> Was machen wir zuerst, was später?</li>
<li><b>Tools auswählen:</b> Welche Software passt zu uns und unserem Budget?</li>
<li><b>Prozesse automatisieren:</b> Abläufe so bauen, dass sie ohne Handarbeit laufen.</li>
<li><b>Recht und Sicherheit:</b> Datenschutz, EU AI Act, Zugangsdaten.</li>
<li><b>Menschen befähigen:</b> Kolleginnen schulen, Ängste nehmen, Regeln aufstellen.</li>
</ol>
<div class="tip">Merke: Ein KI-Manager denkt in <b>Prozessen und Ergebnissen</b>, nicht in Tools. Das Tool ist nur das Werkzeug.</div>
<div class="ex">Beispiel Verein: Statt „Wir brauchen ChatGPT“ fragt der KI-Manager: „Die Mitgliederverwaltung kostet uns 5 Stunden pro Woche. Welcher Teil davon lässt sich automatisieren?“</div>`,
      keys: [
        "Brücke zwischen Technik und Praxis",
        "Denkt in Prozessen, nicht in Tools",
        "Verantwortlich auch für Recht, Sicherheit und Schulung"
      ],
      quiz: [
        { t: "tf", q: "Ein KI-Manager muss zwingend programmieren können.", a: false, e: "Er muss KI verstehen und einordnen können. Programmieren hilft, ist aber keine Pflicht." },
        { t: "mc", q: "Welche Frage stellt ein guter KI-Manager zuerst?", o: ["Welches Tool ist gerade angesagt?", "Wo verlieren wir Zeit oder machen Fehler?", "Wie teuer ist das größte Abo?", "Welche KI hat das beste Logo?"], a: 1, e: "Erst das Problem, dann das Werkzeug." },
        { t: "match", q: "Ordne die Aufgabe dem Bereich zu.", p: [["Mitarbeitende schulen", "Menschen befähigen"], ["DSGVO prüfen", "Recht und Sicherheit"], ["Zeitfresser finden", "Potenziale erkennen"], ["Software vergleichen", "Tools auswählen"]], e: "Diese Bereiche greifen ineinander." }
      ],
      practice: {
        task: "Stell dir vor, du bist KI-Manager deines Vereins oder Ensembles. Welcher Ablauf würde am meisten von Automatisierung profitieren? Begründe kurz.",
        hint: "Suche etwas, das sich oft wiederholt, nach Regeln abläuft und Zeit kostet.",
        solution: "Beispiel: „Die Terminabfrage für Proben. Jedes Mal schreibe ich 15 Leuten einzeln, sammle Antworten und trage sie ein. Ein Formular mit automatischer Auswertung würde Stunden sparen.“"
      }
    },
    {
      id: "z1l3",
      title: "Denkfehler und realistischer Nutzen",
      icon: "⚠️",
      lesson: `
<p>Am Anfang machen fast alle dieselben Fehler. Wer sie kennt, spart Zeit, Geld und Frust.</p>
<h4>Typische Denkfehler</h4>
<ul>
<li><b>„KI weiß alles.“</b> Nein. Sie kann überzeugend falsche Dinge sagen (Halluzinationen).</li>
<li><b>„Ein Prompt reicht.“</b> Gute Ergebnisse entstehen durch Iteration: nachschärfen, korrigieren, verbessern.</li>
<li><b>„Erst das Tool, dann der Zweck.“</b> Umgekehrt ist es richtig.</li>
<li><b>„Alles auf einmal automatisieren.“</b> Besser mit einem kleinen, klaren Pilotprojekt starten.</li>
<li><b>„KI ersetzt Menschen komplett.“</b> Meist übernimmt sie Teilaufgaben, und der Mensch kontrolliert.</li>
<li><b>„Daten sind egal.“</b> Ohne saubere Daten und klare Abläufe bringt die beste KI wenig.</li>
<li><b>„Datenschutz klären wir später.“</b> Das wird teuer.</li>
</ul>
<h4>ROI realistisch einschätzen</h4>
<p><b>ROI</b> (Return on Investment) heißt: Was bringt es im Verhältnis zu dem, was es kostet?</p>
<div class="ex"><b>Rechenbeispiel:</b> Eine Aufgabe dauert 30 Minuten und kommt 20-mal im Monat vor, das sind 10 Stunden. Die Automatisierung spart 80 %, also 8 Stunden. Bei einem Stundenwert von 40 € sind das 320 € pro Monat. Kostet die Lösung 50 € im Monat plus 10 Stunden Einrichtung (400 €), hat sie sich nach knapp 2 Monaten bezahlt gemacht.</div>
<div class="tip">Rechne auch versteckte Kosten mit ein: Einrichtung, Wartung, Schulung, Kontrolle der Ergebnisse.</div>`,
      keys: [
        "KI kann irren → immer prüfen",
        "Klein anfangen, dann skalieren",
        "ROI = Nutzen im Verhältnis zu allen Kosten"
      ],
      quiz: [
        { t: "mc", q: "Welcher Satz ist ein typischer Denkfehler?", o: ["Wir starten mit einem kleinen Pilotprojekt.", "Ein einziger Prompt liefert immer das perfekte Ergebnis.", "Wir prüfen KI-Ergebnisse stichprobenartig.", "Wir klären zuerst den Datenschutz."], a: 1, e: "Gute Ergebnisse entstehen durch Iteration." },
        { t: "mc", q: "Eine Aufgabe kostet 10 Std./Monat. KI spart 50 %. Stundenwert 30 €. Wie viel sparst du pro Monat?", o: ["150 €", "300 €", "50 €", "30 €"], a: 0, e: "5 Stunden × 30 € = 150 €." },
        { t: "tf", q: "Zum ROI gehören auch Einrichtungs- und Wartungsaufwand.", a: true, e: "Versteckte Kosten vergisst man leicht." },
        { t: "tf", q: "Am besten automatisiert man gleich alle Prozesse auf einmal.", a: false, e: "Lieber klein starten, lernen und dann ausbauen." }
      ],
      practice: {
        task: "Rechne den ROI für eine eigene Aufgabe: Wie oft kommt sie vor, wie lange dauert sie, wie viel könnte KI sparen?",
        hint: "Formel: Häufigkeit × Dauer × Ersparnis in % × Stundenwert, minus laufende Kosten.",
        solution: "Beispiel: E-Mails an Veranstalter, 15× im Monat à 20 Min. = 5 Std. KI spart 60 % = 3 Std. × 40 € = 120 €. Abo 20 €. Netto ca. 100 € pro Monat Nutzen."
      }
    },
    {
      id: "z1l4",
      title: "Machine Learning und Deep Learning",
      icon: "🔬",
      lesson: `
<p>Klassische Software folgt festen Regeln, die ein Mensch programmiert hat: „Wenn A, dann B.“ <b>Machine Learning (ML)</b> dreht das um: Der Computer <b>lernt Regeln selbst aus Beispielen</b>.</p>
<div class="ex">Spam-Filter: Statt jede Spam-Regel von Hand zu schreiben, zeigt man dem System tausende Mails mit der Markierung „Spam“ oder „kein Spam“. Es lernt selbst, woran man Spam erkennt.</div>
<h4>Drei Lernarten</h4>
<ul>
<li><b>Überwachtes Lernen:</b> Beispiele mit richtiger Antwort (Mail + „Spam“).</li>
<li><b>Unüberwachtes Lernen:</b> Ohne Antworten. Das System findet selbst Gruppen und Muster, z. B. Kundentypen.</li>
<li><b>Bestärkendes Lernen:</b> Lernen durch Belohnung und Strafe, z. B. ein Schachprogramm, das gegen sich selbst spielt.</li>
</ul>
<h4>Deep Learning</h4>
<p><b>Deep Learning</b> ist eine Form von ML mit <b>künstlichen neuronalen Netzen</b>, die viele Schichten haben („deep“ = tief). Jede Schicht erkennt etwas Komplexeres: erst Kanten, dann Formen, dann ganze Gesichter.</p>
<p><b>Training</b> heißt: Das Netz macht eine Vorhersage, vergleicht sie mit der richtigen Antwort und passt seine inneren Gewichte ein kleines Stück an. Das wiederholt es millionenfach.</p>
<div class="tip">Die Zwiebel-Regel: <b>KI</b> ⊃ <b>Machine Learning</b> ⊃ <b>Deep Learning</b> ⊃ <b>generative KI / LLMs</b></div>
<p>Ein Risiko heißt <b>Overfitting</b>: Das Modell lernt die Trainingsbeispiele auswendig, statt das Prinzip zu verstehen. Bei neuen Daten versagt es dann.</p>`,
      keys: [
        "ML = Regeln aus Beispielen lernen",
        "Überwacht, unüberwacht, bestärkend",
        "Deep Learning = neuronale Netze mit vielen Schichten",
        "Overfitting = auswendig lernen statt verstehen"
      ],
      quiz: [
        { t: "match", q: "Ordne die Lernart dem Beispiel zu.", p: [["Überwachtes Lernen", "Mails mit Label „Spam“"], ["Unüberwachtes Lernen", "Kundengruppen selbst finden"], ["Bestärkendes Lernen", "Spielt gegen sich selbst und wird belohnt"]], e: "Der Unterschied liegt darin, ob und wie das System Rückmeldung bekommt." },
        { t: "order", q: "Ordne von allgemein nach speziell.", o: ["Künstliche Intelligenz", "Machine Learning", "Deep Learning", "Large Language Models"], e: "Jede Ebene ist ein Teilbereich der vorherigen." },
        { t: "mc", q: "Was ist Overfitting?", o: ["Das Modell ist zu klein", "Das Modell lernt die Trainingsdaten auswendig und versagt bei Neuem", "Das Modell braucht zu viel Strom", "Das Modell ist besonders gut"], a: 1, e: "Wie ein Schüler, der Prüfungsfragen auswendig lernt, ohne den Stoff zu verstehen." },
        { t: "tf", q: "Beim Machine Learning schreibt ein Mensch alle Regeln von Hand.", a: false, e: "Genau das ist der Unterschied: Das System lernt die Regeln aus Daten." }
      ],
      practice: {
        task: "Erkläre einem Bekannten in 2–3 Sätzen den Unterschied zwischen klassischer Software und Machine Learning. Nutze ein Beispiel aus der Musik.",
        hint: "Regeln von Hand vs. Lernen aus vielen Beispielen.",
        solution: "„Klassische Software ist wie eine Partitur: Jede Note ist vorgegeben. Machine Learning ist wie ein Musiker, der durch tausende Aufnahmen lernt, wie Swing klingt, ohne dass ihm jemand die Regel aufschreibt.“"
      }
    },
    {
      id: "z1l5",
      title: "Generative KI und LLMs",
      icon: "✨",
      lesson: `
<p><b>Generative KI</b> erzeugt <b>neue Inhalte</b>: Texte, Bilder, Musik, Code, Sprache. Die wichtigste Form für Textarbeit sind <b>Large Language Models (LLMs)</b>, große Sprachmodelle wie Claude, GPT oder Gemini.</p>
<h4>Wie ein LLM funktioniert, ganz einfach</h4>
<p>Ein LLM hat beim Training riesige Textmengen gesehen. Es hat gelernt, <b>vorherzusagen, welches Textstück als Nächstes am wahrscheinlichsten kommt</b>. Aus vielen solcher Vorhersagen hintereinander entstehen ganze Antworten.</p>
<ul>
<li><b>Token:</b> Die Einheit, in der ein LLM Text verarbeitet. Ein Token ist etwa ein Wortteil. Als Faustregel: 100 Tokens entsprechen ca. 60–75 Wörtern.</li>
<li><b>Kontextfenster:</b> Wie viel Text das Modell gleichzeitig „im Blick“ hat, also Gespräch plus Dokumente.</li>
<li><b>Prompt:</b> Deine Eingabe bzw. Anweisung an das Modell.</li>
</ul>
<h4>Prädiktive vs. generative KI</h4>
<p><b>Prädiktive KI</b> sagt etwas voraus oder ordnet ein, z. B. „Kündigt dieser Kunde wahrscheinlich?“. <b>Generative KI</b> erschafft etwas Neues, z. B. „Schreibe eine Mail an diesen Kunden“.</p>
<h4>Multimodal</h4>
<p><b>Multimodale</b> Modelle verstehen und erzeugen mehrere Formate: Text, Bilder, Audio, teils Video. Du kannst z. B. ein Foto eines Dienstplans hochladen und daraus eine Tabelle machen lassen.</p>
<div class="tip">Ein LLM „weiß“ nichts im menschlichen Sinn. Es erzeugt <b>wahrscheinliche</b> Texte. Darum klingt es immer überzeugend, auch wenn es falsch liegt.</div>`,
      keys: [
        "LLM = sagt das wahrscheinlich nächste Token vorher",
        "Token ≈ Wortteil, Kontextfenster = Arbeitsgedächtnis",
        "Prädiktiv = vorhersagen, generativ = erzeugen",
        "Multimodal = Text, Bild, Audio …"
      ],
      quiz: [
        { t: "mc", q: "Was macht ein LLM im Kern?", o: ["Es durchsucht das Internet live", "Es sagt das wahrscheinlich nächste Textstück vorher", "Es kopiert Texte aus einer Datenbank", "Es versteht Text wie ein Mensch"], a: 1, e: "Aus vielen Vorhersagen nacheinander entsteht die Antwort." },
        { t: "match", q: "Ordne die Begriffe zu.", p: [["Token", "Wortteil, Recheneinheit des Modells"], ["Kontextfenster", "Wie viel Text gleichzeitig im Blick ist"], ["Prompt", "Deine Anweisung an das Modell"], ["Multimodal", "Versteht Text, Bild, Audio"]], e: "Diese Begriffe brauchst du ständig, auch später bei Claude Code." },
        { t: "mc", q: "Welche Aufgabe ist generativ (statt prädiktiv)?", o: ["Vorhersagen, ob ein Konzert ausverkauft wird", "Ein Programmheft-Text schreiben", "Spam erkennen", "Kreditrisiko einschätzen"], a: 1, e: "Generativ = etwas Neues erschaffen." },
        { t: "tf", q: "Weil ein LLM sehr flüssig formuliert, ist seine Antwort immer richtig.", a: false, e: "Flüssig heißt nicht korrekt. Darum ist Prüfen so wichtig." }
      ],
      practice: {
        task: "Überlege: Für welche deiner Aufgaben wäre ein multimodales Modell nützlich (also mit Bild oder Audio statt nur Text)?",
        hint: "Fotos, Scans, Sprachnachrichten, Aufnahmen …",
        solution: "Beispiele: Foto eines handschriftlichen Probenplans → Tabelle; Aufnahme einer Besprechung → Protokoll; Scan einer Rechnung → Buchungsdaten."
      }
    },
    {
      id: "z1l6",
      title: "Halluzinationen",
      icon: "🌀",
      lesson: `
<p>Eine <b>Halluzination</b> ist eine Antwort, die überzeugend klingt, aber <b>falsch oder erfunden</b> ist: ein erfundenes Zitat, eine falsche Jahreszahl, eine Quelle, die es nicht gibt.</p>
<h4>Warum passiert das?</h4>
<p>Ein LLM erzeugt <b>wahrscheinliche</b> Texte, nicht <b>geprüfte</b> Fakten. Fehlt ihm Wissen, füllt es die Lücke mit etwas, das plausibel klingt. Es hat kein eingebautes Gefühl für „Das weiß ich nicht“.</p>
<h4>Wann ist das Risiko hoch?</h4>
<ul>
<li>Sehr spezielle Fakten wie Namen, Zahlen, Paragraphen oder Quellen</li>
<li>Ereignisse nach dem Trainingsstand des Modells</li>
<li>Fragen, die eine falsche Annahme enthalten („Warum hat Mozart Jazz komponiert?“)</li>
</ul>
<h4>Gegenmittel</h4>
<ul>
<li><b>Quellen mitgeben:</b> Lade das Dokument hoch, statt aus dem Gedächtnis fragen zu lassen. Das ist die Idee hinter <b>RAG</b>, das du in Zone 2 kennenlernst.</li>
<li><b>Websuche aktivieren</b> für aktuelle Infos.</li>
<li><b>Erlaubnis zum Nichtwissen:</b> „Wenn du es nicht sicher weißt, sag es.“</li>
<li><b>Quellenangaben verlangen</b> und stichprobenartig prüfen.</li>
<li><b>Mensch im Prozess</b> (Human in the Loop) bei wichtigen Entscheidungen.</li>
</ul>
<div class="tip">Faustregel: Je teurer ein Fehler, desto mehr menschliche Kontrolle.</div>`,
      keys: [
        "Halluzination = überzeugend, aber falsch",
        "Ursache: Wahrscheinlichkeit statt Faktenprüfung",
        "Gegenmittel: Quellen geben, Nichtwissen erlauben, prüfen"
      ],
      quiz: [
        { t: "mc", q: "Was ist eine Halluzination?", o: ["Ein Absturz der KI", "Eine überzeugend klingende, aber falsche Antwort", "Ein Bild, das die KI erzeugt", "Ein besonders kreativer Prompt"], a: 1, e: "Gefährlich, weil es so glaubwürdig klingt." },
        { t: "mc", q: "Welche Maßnahme senkt Halluzinationen am stärksten?", o: ["Höflicher fragen", "Die relevanten Dokumente direkt mitgeben", "In Großbuchstaben schreiben", "Die Frage dreimal stellen"], a: 1, e: "Mit Quelle im Kontext muss das Modell nicht raten." },
        { t: "tf", q: "Fragen mit falscher Annahme („Warum hat Beethoven die Oper Carmen geschrieben?“) erhöhen das Halluzinationsrisiko.", a: true, e: "Das Modell neigt dazu, die Annahme mitzuspielen." },
        { t: "tf", q: "Bei wichtigen Entscheidungen sollte immer ein Mensch das Ergebnis prüfen.", a: true, e: "Human in the Loop." }
      ],
      practice: {
        task: "Schreibe einen Zusatz, den du an Prompts anhängen kannst, um Halluzinationen zu reduzieren.",
        hint: "Erlaube Nichtwissen und verlange Quellen.",
        solution: "„Antworte nur auf Basis der beigefügten Dokumente. Wenn die Information dort nicht steht oder du unsicher bist, schreibe ‚Nicht sicher‘ statt zu raten. Nenne zu jeder Aussage die Stelle im Dokument.“"
      }
    },
    {
      id: "z1l7",
      title: "Assistenten, Agenten und APIs",
      icon: "🤖",
      lesson: `
<h4>Assistent</h4>
<p>Ein <b>KI-Assistent</b> antwortet auf deine Fragen. Du fragst, er antwortet, und du entscheidest, was du damit machst. Beispiel: Chat mit Claude.</p>
<h4>Agent</h4>
<p>Ein <b>KI-Agent</b> bekommt ein <b>Ziel</b> und arbeitet selbstständig in mehreren Schritten darauf hin. Er kann <b>Werkzeuge (Tools)</b> benutzen: im Web suchen, Dateien lesen und schreiben, E-Mails verschicken, Programme ausführen. Er plant, handelt, prüft das Ergebnis und macht weiter.</p>
<div class="ex"><b>Assistent:</b> „Schreib mir eine Mail an den Veranstalter.“ → Du kopierst sie und schickst sie selbst.<br><b>Agent:</b> „Kläre mit allen Veranstaltern die Technikanforderungen.“ → Er liest die Verträge, schreibt die Mails, sammelt die Antworten und erstellt eine Übersicht.</div>
<p><b>Claude Code</b>, das Ziel deiner Reise, ist genau so ein Agent.</p>
<h4>API</h4>
<p>Eine <b>API</b> (Application Programming Interface) ist eine <b>Schnittstelle, über die Programme miteinander sprechen</b>. Stell dir einen Kellner vor: Du (Programm A) bestellst beim Kellner (API), er bringt die Bestellung in die Küche (Programm B) und das Essen zurück.</p>
<ul>
<li>Über die API eines KI-Anbieters kann deine eigene Software das Modell nutzen, ganz ohne Chatfenster.</li>
<li>Abgerechnet wird meist <b>pro Token</b>, also nach Verbrauch.</li>
</ul>
<div class="tip">Agenten sind mächtig, aber riskanter: Je mehr sie selbst dürfen, desto wichtiger sind klare Grenzen und Berechtigungen.</div>`,
      keys: [
        "Assistent = antwortet, Mensch handelt",
        "Agent = verfolgt Ziel selbstständig mit Tools",
        "API = Schnittstelle zwischen Programmen (Kellner-Bild)",
        "Claude Code ist ein Agent"
      ],
      quiz: [
        { t: "mc", q: "Was unterscheidet einen Agenten von einem Assistenten?", o: ["Agenten sind immer kostenlos", "Agenten verfolgen ein Ziel selbstständig in mehreren Schritten mit Tools", "Agenten können nur Bilder erzeugen", "Es gibt keinen Unterschied"], a: 1, e: "Planen, handeln, prüfen, weitermachen." },
        { t: "mc", q: "Welches Bild beschreibt eine API am besten?", o: ["Ein Tresor", "Ein Kellner zwischen Gast und Küche", "Ein Bücherregal", "Ein Taschenrechner"], a: 1, e: "Die API nimmt Anfragen entgegen und liefert Ergebnisse zurück." },
        { t: "tf", q: "Claude Code ist ein KI-Agent.", a: true, e: "Er liest Dateien, führt Befehle aus und arbeitet in mehreren Schritten." },
        { t: "tf", q: "Je mehr ein Agent selbstständig darf, desto weniger wichtig sind Berechtigungen.", a: false, e: "Genau umgekehrt." }
      ],
      practice: {
        task: "Formuliere eine Aufgabe einmal als Assistenten-Anfrage und einmal als Agenten-Auftrag.",
        hint: "Assistent = einzelnes Ergebnis. Agent = Ziel mit mehreren Schritten.",
        solution: "Assistent: „Fasse diese Vereinssatzung zusammen.“ Agent: „Prüfe alle Dokumente im Ordner ‚Verein‘, finde fehlende Unterschriften, erstelle eine Liste und entwirf Erinnerungsmails an die Betroffenen.“"
      }
    },
    {
      id: "z1l8",
      title: "KI-Strategie: Process Map und 5 Phasen",
      icon: "🗺️",
      lesson: `
<h4>Process Map</h4>
<p>Eine <b>Process Map</b> (Prozesslandkarte) zeigt alle wichtigen Abläufe einer Organisation auf einen Blick: Wer macht was, in welcher Reihenfolge, mit welchen Tools? Erst wenn du einen Prozess sichtbar machst, erkennst du, wo KI helfen kann.</p>
<div class="ex">Beispiel „Konzert organisieren“: Anfrage → Termin prüfen → Angebot → Vertrag → Besetzung → Probenplan → Noten → Reise → Abrechnung.</div>
<h4>Engpasskonzentriertes Arbeiten</h4>
<p>Eine Kette ist nur so stark wie ihr schwächstes Glied. Statt überall ein bisschen zu verbessern, suchst du den <b>Engpass</b>: den Schritt, der am meisten bremst. Dort setzt du zuerst an.</p>
<h4>KI-Strategie in 5 Phasen</h4>
<ol>
<li><b>Analyse:</b> Prozesse erfassen, Zeitfresser und Engpässe finden.</li>
<li><b>Priorisierung:</b> Nach Nutzen und Aufwand ordnen. Zuerst die „Quick Wins“ mit großem Nutzen und wenig Aufwand.</li>
<li><b>Pilot:</b> Einen Anwendungsfall klein testen und messen.</li>
<li><b>Umsetzung:</b> Das, was funktioniert, sauber einführen, dokumentieren und schulen.</li>
<li><b>Skalierung und Optimierung:</b> Auf weitere Bereiche übertragen, laufend messen und verbessern.</li>
</ol>
<div class="tip">Ein <b>Lastenheft</b> beschreibt, <b>was</b> eine Lösung leisten soll, aus Sicht des Auftraggebers. Es ist die Basis für jeden Bot, jeden Agenten und jede Automation.</div>`,
      keys: [
        "Process Map macht Abläufe sichtbar",
        "Zuerst den Engpass verbessern",
        "5 Phasen: Analyse → Priorisierung → Pilot → Umsetzung → Skalierung",
        "Lastenheft = Was soll die Lösung können?"
      ],
      quiz: [
        { t: "order", q: "Bringe die 5 Phasen der KI-Strategie in die richtige Reihenfolge.", o: ["Analyse", "Priorisierung", "Pilot", "Umsetzung", "Skalierung und Optimierung"], e: "Erst verstehen, dann klein testen, dann ausrollen." },
        { t: "mc", q: "Was ist ein „Quick Win“?", o: ["Großer Nutzen bei wenig Aufwand", "Ein teures Großprojekt", "Ein Gewinnspiel", "Ein besonders schnelles Modell"], a: 0, e: "Quick Wins schaffen früh Vertrauen und Budget." },
        { t: "mc", q: "Wo setzt engpasskonzentriertes Arbeiten an?", o: ["Beim schönsten Prozess", "Beim Schritt, der am meisten bremst", "Überall gleichzeitig", "Beim billigsten Tool"], a: 1, e: "Das schwächste Glied bestimmt die Kette." },
        { t: "tf", q: "Ein Lastenheft beschreibt, was eine Lösung leisten soll.", a: true, e: "Das Wie kommt später, z. B. im Pflichtenheft des Umsetzers." }
      ],
      practice: {
        task: "Zeichne gedanklich eine Mini-Process-Map für einen deiner Abläufe (5–8 Schritte) und markiere den Engpass.",
        hint: "Schreibe die Schritte mit Pfeilen hintereinander. Wo wartest du am längsten?",
        solution: "Beispiel Bewerbung: Stelle finden → Unterlagen anpassen → Anschreiben → Aufnahmen auswählen → Hochladen → Nachfassen. Engpass: Anschreiben, jedes Mal 2 Stunden. Dort hilft KI am meisten."
      }
    }
  ]
});
