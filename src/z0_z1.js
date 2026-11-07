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
<p>Viele Organisationen starten mit KI so: Jemand hat ein Video gesehen, kauft ein Tool, probiert ein bisschen herum, und nach drei Wochen nutzt es keiner mehr. Eine <b>KI-Strategie</b> verhindert genau das. Sie beantwortet drei Fragen:</p>
<ol>
<li><b>Wo</b> lohnt sich KI bei uns wirklich?</li>
<li><b>In welcher Reihenfolge</b> gehen wir vor?</li>
<li><b>Woran</b> merken wir, dass es funktioniert?</li>
</ol>
<p>Das Werkzeug für Frage 1 ist die <b>Process Map</b>, für Frage 2 die <b>Engpass-Suche</b> und die <b>Priorisierung</b>, und der rote Faden für alles zusammen sind die <b>5 Phasen</b>.</p>

<h4>Teil 1: Die Process Map, also Abläufe sichtbar machen</h4>
<p>Ein <b>Prozess</b> ist ein Ablauf, der sich wiederholt und immer ungefähr gleich läuft: eine Anfrage beantworten, eine Rechnung schreiben, ein Konzert organisieren. Die meisten Prozesse existieren nur <b>im Kopf</b> der Leute, die sie machen. Und was man nicht sieht, kann man nicht verbessern.</p>
<p>Eine <b>Process Map</b> (Prozesslandkarte) zeichnet einen Ablauf Schritt für Schritt auf. Man kann sie sich wie eine <b>Partitur für Arbeitsabläufe</b> vorstellen: Wer spielt wann was, und wo gibt es Pausen?</p>
<p><b>Zu jedem Schritt notierst du fünf Dinge:</b></p>
<ul>
<li><b>Was</b> passiert? (kurz, mit Verb: „Angebot schreiben“)</li>
<li><b>Wer</b> macht es?</li>
<li><b>Womit</b>? (Mail, Excel, Papier, Telefon …)</li>
<li><b>Wie lange</b> dauert es, und wie oft kommt es vor?</li>
<li><b>Was nervt</b>? Wo gibt es Wartezeiten, Fehler, Rückfragen, doppelte Arbeit?</li>
</ul>
<div class="ex"><b>Process Map „Konzertanfrage bis Auftritt“</b> (für ein Ensemble, ca. 4 Anfragen im Monat):
<div class="flow"><span>📩 Anfrage kommt<small>Mail · 5 Min</small></span><i>→</i><span>📅 Termin prüfen<small>Kalender + 5 Musiker fragen · 2–3 Tage Wartezeit</small></span><i>→</i><span>💶 Angebot<small>Word-Vorlage · 45 Min</small></span><i>→</i><span>✍️ Vertrag<small>PDF hin und her · 30 Min</small></span><i>→</i><span>👥 Besetzung<small>WhatsApp · 1 Std</small></span><i>→</i><span>🎼 Noten + Probenplan<small>1,5 Std</small></span><i>→</i><span>🚐 Reise<small>1 Std</small></span><i>→</i><span>🧾 Abrechnung<small>Excel · 1 Std</small></span></div>
Notizen am Rand: „Verfügbarkeit abfragen dauert ewig“, „Angebot wird jedes Mal neu geschrieben“, „Abrechnung oft vergessen“.</div>
<p><b>So erstellst du eine Process Map in vier Schritten:</b></p>
<ol>
<li><b>Prozess wählen:</b> Einen konkreten Ablauf mit klarem Start und Ende („von Anfrage bis Auftritt“), nicht „unsere Organisation“.</li>
<li><b>Mit den Beteiligten sprechen:</b> Die Person, die es täglich macht, kennt die echten Schritte. Oft sieht der Prozess in der Praxis ganz anders aus als gedacht.</li>
<li><b>Aufzeichnen:</b> Haftnotizen an der Wand, ein Whiteboard oder einfach eine Liste mit Pfeilen. Schönheit ist egal.</li>
<li><b>Messen und markieren:</b> Zeit und Häufigkeit eintragen, Schmerzpunkte rot markieren.</li>
</ol>
<div class="tip">Rechne pro Schritt: <b>Dauer × Häufigkeit = Zeit pro Monat</b>. 45 Minuten Angebot × 4 Anfragen = 3 Stunden im Monat. So siehst du schwarz auf weiß, wo die Zeit hingeht.</div>

<h4>Teil 2: Den Engpass finden</h4>
<p>Stell dir eine Röhre vor, durch die Wasser fließt. Wie viel Wasser durchkommt, bestimmt die <b>engste Stelle</b>, nicht die breiteste. Bei Prozessen ist es genauso: Der langsamste Schritt bestimmt das Tempo des ganzen Ablaufs. Diese Stelle heißt <b>Engpass</b>.</p>
<p><b>Engpasskonzentriertes Arbeiten</b> heißt: Du verbesserst zuerst genau diese Stelle. Ein schnellerer Schritt <i>vor</i> dem Engpass bringt nichts, weil sich die Arbeit dann nur vor dem Engpass staut.</p>
<div class="ex">Im Konzert-Beispiel ist der Engpass „Termin prüfen“: 2–3 Tage Warten auf Antworten der Musiker. Wenn du das Angebot dank KI in 5 statt 45 Minuten schreibst, wartet der Veranstalter trotzdem 3 Tage. Erst wenn die Verfügbarkeit schneller geklärt ist, z. B. durch einen gemeinsamen Verfügbarkeitskalender, den jeder selbst pflegt, wird der <b>ganze</b> Ablauf schneller.</div>
<p><b>Woran du einen Engpass erkennst:</b></p>
<ul>
<li>Davor stapelt sich Arbeit („Ich warte noch auf …“).</li>
<li>Eine bestimmte Person ist ständig überlastet, und ohne sie geht nichts.</li>
<li>Hier passieren die meisten Fehler oder Rückfragen.</li>
<li>Kunden oder Kollegen beschweren sich genau über diesen Punkt.</li>
</ul>
<div class="tip">Ist der Engpass gelöst, wandert er weiter zum nächsten Schritt. Das ist normal. Darum ist eine KI-Strategie kein einmaliges Projekt, sondern ein Kreislauf.</div>

<h4>Teil 3: Priorisieren mit der Nutzen-Aufwand-Matrix</h4>
<p>Nach der Process Map hast du meist eine lange Liste an Ideen. Damit du nicht alles gleichzeitig anfängst, sortierst du jede Idee nach zwei Fragen: <b>Wie groß ist der Nutzen?</b> und <b>Wie groß ist der Aufwand?</b></p>
<div class="matrix">
<div class="q1"><b>⭐ Quick Wins</b>großer Nutzen, wenig Aufwand<br><i>→ sofort machen</i></div>
<div class="q2"><b>🏔️ Große Projekte</b>großer Nutzen, viel Aufwand<br><i>→ gut planen, später</i></div>
<div class="q3"><b>🧹 Kleinkram</b>kleiner Nutzen, wenig Aufwand<br><i>→ nebenbei, wenn Zeit ist</i></div>
<div class="q4"><b>🚫 Zeitfresser</b>kleiner Nutzen, viel Aufwand<br><i>→ lassen</i></div>
</div>
<div class="ex">Angebote mit einer KI-Vorlage erstellen → <b>Quick Win</b>. Ein eigener Voice Agent für Buchungen → <b>großes Projekt</b>. Eine KI, die Konzertfotos automatisch umbenennt → <b>Kleinkram</b>. Eine eigene KI-Plattform programmieren lassen → <b>Zeitfresser</b>.</div>

<h4>Teil 4: Die 5 Phasen der KI-Strategie</h4>
<p>Die 5 Phasen bringen alles in eine sinnvolle Reihenfolge. Zu jeder Phase: Ziel, Leitfragen, Ergebnis und typische Stolperfallen.</p>

<p><b>Phase 1: Analyse</b><br>
<i>Ziel:</i> Verstehen, wie wir heute arbeiten.<br>
<i>Leitfragen:</i> Welche Prozesse haben wir? Wo geht Zeit verloren? Wo ist der Engpass? Welche Daten und Tools gibt es schon?<br>
<i>Ergebnis:</i> Process Maps der wichtigsten Abläufe und eine Liste mit Ideen.<br>
<i>Stolperfalle:</i> Zu lange analysieren. Zwei oder drei Kernprozesse reichen für den Anfang.</p>

<p><b>Phase 2: Priorisierung</b><br>
<i>Ziel:</i> Entscheiden, womit wir anfangen.<br>
<i>Leitfragen:</i> Welche Idee hat den größten Nutzen bei vertretbarem Aufwand? Was löst den Engpass? Gibt es rechtliche Hürden (Datenschutz)?<br>
<i>Ergebnis:</i> Nutzen-Aufwand-Matrix und <b>ein</b> ausgewählter Anwendungsfall für den Pilot.<br>
<i>Stolperfalle:</i> Mit dem spannendsten statt mit dem sinnvollsten Projekt anfangen.</p>

<p><b>Phase 3: Pilot</b><br>
<i>Ziel:</i> Im Kleinen beweisen, dass es funktioniert.<br>
<i>Leitfragen:</i> Was genau soll die Lösung leisten (Lastenheft)? Woran messen wir Erfolg? Wer testet mit?<br>
<i>Ergebnis:</i> Eine funktionierende Testlösung mit wenigen Nutzern, einem festen Zeitraum (z. B. 4 Wochen) und Messwerten vorher und nachher.<br>
<i>Stolperfalle:</i> Keine Messgröße festlegen. Dann weiß am Ende niemand, ob es besser geworden ist.</p>

<p><b>Phase 4: Umsetzung</b><br>
<i>Ziel:</i> Das Bewährte zum festen Bestandteil machen.<br>
<i>Leitfragen:</i> Wer ist verantwortlich? Wie schulen wir alle? Wie dokumentieren wir den neuen Ablauf? Was passiert, wenn die KI einen Fehler macht?<br>
<i>Ergebnis:</i> Eingeführte Lösung, kurze Anleitung, geschulte Nutzer, klare Zuständigkeit.<br>
<i>Stolperfalle:</i> Die Menschen vergessen. Eine Lösung, die keiner versteht oder der keiner vertraut, wird nicht genutzt.</p>

<p><b>Phase 5: Skalierung und Optimierung</b><br>
<i>Ziel:</i> Mehr Nutzen aus dem Gelernten ziehen.<br>
<i>Leitfragen:</i> Lässt sich die Lösung auf andere Bereiche übertragen? Wo ist der neue Engpass? Was sagen die Messwerte nach drei Monaten?<br>
<i>Ergebnis:</i> Weitere Anwendungsfälle und regelmäßige Überprüfung, z. B. einmal im Quartal.<br>
<i>Stolperfalle:</i> Aufhören, nachzumessen. Tools ändern sich schnell, und was heute gut ist, kann in einem Jahr überholt sein.</p>

<div class="tip">Phase 5 führt zurück zu Phase 1: Mit dem neuen Engpass beginnt die nächste Runde. Die 5 Phasen sind also ein <b>Kreislauf</b>, keine Einbahnstraße.</div>

<h4>Teil 5: Lastenheft und Pflichtenheft</h4>
<p>Spätestens im Pilot brauchst du ein <b>Lastenheft</b>. Es beschreibt aus Sicht des Auftraggebers, <b>was</b> die Lösung leisten soll: Zweck, Nutzer, Eingaben, Ergebnisse, Grenzen und Erfolgskriterien. Das <b>Pflichtenheft</b> schreibt danach der Umsetzer. Es beschreibt, <b>wie</b> er das umsetzt: welche Tools, welche Schritte, welche Technik.</p>
<div class="ex">Lastenheft (Auszug): „Bei jeder Konzertanfrage soll innerhalb von 24 Stunden ein Angebot als PDF vorliegen. Grundlage sind unsere Preisliste und der Verfügbarkeitskalender. Vor dem Versand gibt der Leiter frei. Erfolg: Antwortzeit unter 24 Stunden in 90 % der Fälle.“<br>Pflichtenheft (Auszug): „Formular in Jotform → n8n liest Daten → Abgleich mit Google Kalender → Claude erstellt Angebotstext → PDF aus Vorlage → Freigabe-Mail an den Leiter.“</div>

<h4>Alles zusammen: das Beispiel im Durchlauf</h4>
<ol>
<li><b>Analyse:</b> Process Map „Anfrage bis Auftritt“ zeichnen. Engpass: Verfügbarkeit klären (3 Tage). Zeitfresser: Angebote (3 Std./Monat) und Abrechnung.</li>
<li><b>Priorisierung:</b> Quick Win: Angebote mit KI-Vorlage. Engpass-Lösung: gemeinsamer Verfügbarkeitskalender. Großes Projekt für später: automatisierter Ablauf von der Anfrage bis zum Angebot.</li>
<li><b>Pilot:</b> 4 Wochen lang Verfügbarkeitskalender plus KI-Angebotsvorlage. Messung vorher: 3 Tage bis zum Angebot. Nachher: 1 Tag.</li>
<li><b>Umsetzung:</b> Alle Musiker tragen sich ein, eine Anleitung auf einer Seite, der Leiter ist zuständig.</li>
<li><b>Skalierung:</b> Der neue Engpass ist die Abrechnung. Gleiches Vorgehen: Vorlage + KI, die Belege ausliest. Später: der automatisierte Gesamtablauf.</li>
</ol>`,
      keys: [
        "Process Map = Ablauf mit Was, Wer, Womit, Dauer, Schmerzpunkt",
        "Dauer × Häufigkeit zeigt, wo die Zeit hingeht",
        "Engpass = langsamster Schritt; ihn zuerst verbessern",
        "Nutzen-Aufwand-Matrix: Quick Wins zuerst, Zeitfresser lassen",
        "5 Phasen: Analyse → Priorisierung → Pilot → Umsetzung → Skalierung, als Kreislauf",
        "Lastenheft = Was (Auftraggeber), Pflichtenheft = Wie (Umsetzer)"
      ],
      quiz: [
        { t: "mc", q: "Was gehört NICHT zu den Angaben pro Schritt einer Process Map?", o: ["Wer macht den Schritt?", "Wie lange dauert er, und wie oft kommt er vor?", "Welches Logo hat die Firma?", "Was nervt an diesem Schritt?"], a: 2, e: "Pro Schritt zählen: Was, Wer, Womit, Dauer/Häufigkeit und Schmerzpunkte." },
        { t: "mc", q: "Ein Schritt dauert 30 Minuten und kommt 12-mal im Monat vor. Wie viel Zeit kostet er pro Monat?", o: ["30 Minuten", "3 Stunden", "6 Stunden", "12 Stunden"], a: 2, e: "30 Min × 12 = 360 Min = 6 Stunden." },
        { t: "mc", q: "Im Prozess wartet man 3 Tage auf die Verfügbarkeit der Musiker. Das Angebot schreiben dauert 45 Minuten. Was verbesserst du zuerst, um den ganzen Ablauf schneller zu machen?", o: ["Das Angebot schreiben", "Die Verfügbarkeitsklärung, denn sie ist der Engpass", "Die Abrechnung", "Das Logo im Angebot"], a: 1, e: "Ein schnelleres Angebot hilft wenig, solange man vorher 3 Tage wartet. Der Engpass bestimmt das Tempo." },
        { t: "match", q: "Ordne die Idee dem Feld der Nutzen-Aufwand-Matrix zu.", p: [["Großer Nutzen, wenig Aufwand", "Quick Win: sofort machen"], ["Großer Nutzen, viel Aufwand", "Großes Projekt: gut planen"], ["Kleiner Nutzen, wenig Aufwand", "Kleinkram: nebenbei"], ["Kleiner Nutzen, viel Aufwand", "Zeitfresser: lassen"]], e: "So entscheidest du, womit du anfängst." },
        { t: "order", q: "Bringe die 5 Phasen der KI-Strategie in die richtige Reihenfolge.", o: ["Analyse", "Priorisierung", "Pilot", "Umsetzung", "Skalierung und Optimierung"], e: "Erst verstehen, dann auswählen, klein testen, einführen und ausbauen." },
        { t: "match", q: "Ordne das Ergebnis der Phase zu.", p: [["Process Maps und Ideenliste", "Analyse"], ["Ein ausgewählter Anwendungsfall", "Priorisierung"], ["Testlösung mit Messwerten vorher und nachher", "Pilot"], ["Anleitung, Schulung, klare Zuständigkeit", "Umsetzung"]], e: "Jede Phase hat ein greifbares Ergebnis." },
        { t: "tf", q: "Ein Pilot ohne vorher festgelegte Messgröße ist kein Problem, man merkt ja, ob es besser ist.", a: false, e: "Ohne Messgröße bleibt es Bauchgefühl. Lege vorher fest, was du misst, z. B. Zeit bis zum Angebot." },
        { t: "match", q: "Lastenheft oder Pflichtenheft?", p: [["Beschreibt, WAS die Lösung leisten soll", "Lastenheft"], ["Beschreibt, WIE es technisch umgesetzt wird", "Pflichtenheft"], ["Wird vom Umsetzer geschrieben", "Pflichtenheft (Umsetzer)"], ["Wird vom Auftraggeber geschrieben", "Lastenheft (Auftraggeber)"]], e: "Erst das Was, dann das Wie." },
        { t: "tf", q: "Nach Phase 5 beginnt der Kreislauf mit dem neuen Engpass wieder bei Phase 1.", a: true, e: "Ist ein Engpass gelöst, wandert er weiter. Die Strategie ist ein Kreislauf." }
      ],
      practice: {
        task: "Erstelle eine Mini-KI-Strategie für einen echten Ablauf aus deinem Alltag: 1) Process Map mit 5–8 Schritten inkl. Dauer und Häufigkeit, 2) Engpass markieren, 3) drei Ideen in die Nutzen-Aufwand-Matrix einordnen, 4) einen Pilot mit Messgröße festlegen.",
        hint: "Wähle etwas, das sich mindestens monatlich wiederholt, z. B. Probenorganisation, Vereinsbeiträge, Bewerbungen oder Unterrichtsplanung. Rechne pro Schritt Dauer × Häufigkeit.",
        solution: "Beispiel „Probenorganisation im Verein“ (2 Proben pro Monat):\n1) Process Map: Termin festlegen (20 Min) → Raum anfragen (15 Min + 2 Tage Warten) → Mitglieder informieren (30 Min) → Zusagen einsammeln (1 Std, ständiges Nachfragen) → Noten verteilen (30 Min) → Anwesenheit nachtragen (15 Min).\n2) Engpass: Zusagen einsammeln. Es fehlen immer Antworten, die Planung hängt.\n3) Matrix: Online-Umfrage mit automatischer Erinnerung → Quick Win. KI-Assistent, der Infomails schreibt → Kleinkram. Eigene Vereins-App → großes Projekt, später.\n4) Pilot: 4 Wochen Umfrage-Tool mit Erinnerung nach 48 Std. Messgröße: Anteil der Antworten bis 3 Tage vor der Probe (vorher ca. 60 %, Ziel 90 %)."
      }
    }
  ]
});
