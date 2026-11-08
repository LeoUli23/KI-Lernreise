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
<p>Ein <b>Voice Agent</b> ist ein KI-Agent, der <b>per Sprache</b> kommuniziert, meistens am Telefon. Er nimmt Anrufe an, versteht Anliegen, beantwortet Fragen, bucht Termine oder ruft selbst an. Für Anrufer fühlt sich das wie ein Gespräch mit einem freundlichen Mitarbeiter an, der nie Feierabend hat.</p>

<h4>Teil 1: Die drei Bausteine</h4>
<p>Ein Voice Agent ist im Kern ein Chatbot mit <b>Ohren</b> und <b>Mund</b>:</p>
<div class="flow"><span>👂 STT<small>Sprache → Text</small></span><i>→</i><span>🧠 LLM<small>verstehen, entscheiden, antworten</small></span><i>→</i><span>👄 TTS<small>Text → Sprache</small></span></div>
<ol>
<li><b>STT (Speech-to-Text):</b> Wandelt die Stimme des Anrufers fortlaufend in Text um. Auch „Transkription“ oder „ASR“ (Automatic Speech Recognition) genannt.</li>
<li><b>LLM:</b> Das Sprachmodell liest den Text, versteht das Anliegen, ruft bei Bedarf Werkzeuge auf (Kalender, Datenbank) und formuliert die Antwort.</li>
<li><b>TTS (Text-to-Speech):</b> Wandelt die Antwort in eine natürliche Stimme um, z. B. mit ElevenLabs.</li>
</ol>
<p>Daneben gibt es neuere <b>Speech-to-Speech-Modelle</b>, die Audio direkt verstehen und erzeugen, ohne Umweg über Text. Sie sind oft schneller und klingen natürlicher (Betonung, Lachen), lassen sich aber manchmal schwerer kontrollieren.</p>

<h4>Teil 2: Die große Herausforderung: Latenz</h4>
<p><b>Latenz</b> ist die Zeit zwischen dem Ende deiner Frage und dem Beginn der Antwort. Im echten Gespräch antworten Menschen nach wenigen hundert Millisekunden. Bei mehr als etwa 1 Sekunde Pause wirkt es unnatürlich, und Anrufer fragen „Hallo? Sind Sie noch da?“.</p>
<p>Die Gesamtlatenz addiert sich aus allen Schritten:</p>
<div class="ex">Sprachende erkennen (ca. 0,2–0,5 s) + STT (0,1–0,3 s) + LLM bis zum ersten Wort (0,3–1 s) + TTS bis zum ersten Ton (0,1–0,3 s) + Telefonnetz. Schnell summiert sich das auf über eine Sekunde [Richtwerte, Schätzung].</div>
<p><b>Tricks gegen Latenz:</b></p>
<ul>
<li><b>Streaming:</b> Jeder Baustein gibt seine Ergebnisse schon während der Arbeit weiter. Die Stimme beginnt zu sprechen, bevor die ganze Antwort fertig ist.</li>
<li><b>Schnelle Modelle:</b> Für Telefon eher mittlere oder kleine Modelle, nicht die größten.</li>
<li><b>Kurze Antworten:</b> Am Telefon ohnehin besser. Niemand will einen Monolog hören.</li>
<li><b>Füllwörter:</b> „Einen Moment, ich schaue nach …“, während ein Tool den Kalender abfragt.</li>
</ul>

<h4>Teil 3: Was Telefonate so schwer macht</h4>
<ul>
<li><b>Wann ist jemand fertig?</b> Menschen machen Denkpausen („Ich hätte gern … äh … einen Termin“). Der Agent darf nicht zu früh antworten. Das nennt man <b>Turn Detection</b> oder <b>Endpointing</b>.</li>
<li><b>Unterbrechungen (Barge-in):</b> Der Anrufer redet dazwischen. Der Agent muss sofort aufhören zu sprechen und zuhören.</li>
<li><b>Hintergrundgeräusche:</b> Straße, Kinder, Musik. STT muss trotzdem verstehen.</li>
<li><b>Dialekte und Namen:</b> „Würzburg“ oder ungewöhnliche Nachnamen werden leicht falsch erkannt. Wichtige Daten deshalb immer <b>zurückbestätigen</b>: „Ich habe Müller mit ü verstanden, richtig?“</li>
<li><b>Zahlen und Daten:</b> Telefonnummern, Uhrzeiten und Datumsangaben müssen in natürlicher Sprache ausgesprochen werden („am zwölften Dezember um neunzehn Uhr“).</li>
</ul>

<h4>Teil 4: Gut gemachte Gesprächsführung</h4>
<ul>
<li>Kurze Sätze, eine Frage auf einmal.</li>
<li>Natürliche Sprache, keine Aufzählungszeichen (am Telefon gibt es keine Listen).</li>
<li>Wichtiges wiederholen und bestätigen lassen.</li>
<li>Jederzeit „Mitarbeiter“ oder „Mensch“ sagen können.</li>
</ul>
<div class="tip">Ein Voice Agent braucht einen anderen Prompt als ein Chatbot. Schreibe dazu: „Du sprichst am Telefon. Antworte in maximal 2 kurzen Sätzen, ohne Listen, ohne Sonderzeichen. Bestätige Namen, Daten und Zahlen.“</div>`,
      keys: [
        "STT (Ohren) → LLM (Gehirn) → TTS (Mund)",
        "Speech-to-Speech-Modelle als neuere Alternative",
        "Latenz über ~1 Sekunde wirkt unnatürlich: Streaming, schnelle Modelle, kurze Antworten",
        "Herausforderungen: Sprechende erkennen, Unterbrechungen, Geräusche, Namen",
        "Am Telefon: kurz, eine Frage, Wichtiges bestätigen"
      ],
      quiz: [
        { t: "order", q: "Bringe den Ablauf eines Voice Agents in die richtige Reihenfolge.", o: ["Anrufer spricht", "STT wandelt Sprache in Text", "LLM versteht und formuliert Antwort", "TTS wandelt Antwort in Sprache"], e: "Ohren → Gehirn → Mund." },
        { t: "match", q: "Ordne zu.", p: [["STT", "Sprache → Text"], ["TTS", "Text → Sprache"], ["LLM", "Verstehen und Antworten"], ["Speech-to-Speech", "Audio direkt rein und raus"]], e: "Die Grundbausteine." },
        { t: "mc", q: "Was ist Latenz?", o: ["Die Lautstärke", "Die Verzögerung zwischen Frage und Antwort", "Der Preis pro Minute", "Die Stimmfarbe"], a: 1, e: "Zu lange Pausen wirken unnatürlich." },
        { t: "mc", q: "Was bedeutet Streaming bei Voice Agents?", o: ["Musik abspielen", "Jeder Baustein gibt Ergebnisse schon während der Arbeit weiter, die Stimme beginnt früher", "Videos übertragen", "Das Gespräch aufzeichnen"], a: 1, e: "So sinkt die gefühlte Wartezeit deutlich." },
        { t: "mc", q: "Der Anrufer sagt „Mein Name ist Schäfer“. Was sollte der Agent tun?", o: ["Einfach weitermachen", "Den Namen zurückbestätigen, z. B. „Schäfer mit ä, richtig?“", "Auflegen", "Nach der Adresse fragen"], a: 1, e: "Namen werden leicht falsch erkannt. Bestätigen verhindert Fehler." },
        { t: "tf", q: "Ein Voice Agent sollte am Telefon ausführliche Aufzählungen mit Spiegelstrichen vorlesen.", a: false, e: "Kurze Sätze, eine Frage auf einmal, keine Listen." },
        { t: "match", q: "Ordne das Problem zu.", p: [["Anrufer redet dazwischen", "Barge-in"], ["Agent antwortet mitten in einer Denkpause", "Turn Detection falsch eingestellt"], ["Antwort kommt erst nach 3 Sekunden", "Zu hohe Latenz"]], e: "Die typischen Stolpersteine am Telefon." }
      ],
      practice: {
        task: "Schreibe einen kurzen System-Prompt für einen Telefon-Agenten (Vorverkauf oder Buchungsanfragen) mit mindestens 5 telefon-spezifischen Regeln. Nenne dann 2 Anrufe, für die er sinnvoll ist, und 2, bei denen ein Mensch ans Telefon gehört.",
        hint: "Kürze, keine Listen, eine Frage auf einmal, bestätigen, Weiterleitung, als KI vorstellen.",
        solution: "„Du bist Lina, die KI-Telefonassistentin des Ensembles. Du sprichst am Telefon. Regeln: 1) Stell dich zu Beginn als KI vor. 2) Antworte in höchstens 2 kurzen Sätzen. 3) Keine Listen, keine Sonderzeichen. 4) Stell immer nur eine Frage. 5) Bestätige Namen, Daten und Zahlen. 6) Sagt jemand ‚Mitarbeiter‘ oder ist verärgert, verbinde sofort weiter. 7) Mach keine verbindlichen Preiszusagen.“\nSinnvoll: Fragen zu Konzertterminen und Tickets; Aufnahme einer Buchungsanfrage. Mensch: Beschwerde über ein Konzert; Absage eines Engagements."
      }
    },
    {
      id: "z5l2",
      title: "Plattformen und Telefonie",
      icon: "📡",
      lesson: `
<p>Kaum jemand baut einen Voice Agent von Grund auf. Stattdessen setzt man ihn aus Diensten zusammen, die jeweils einen Teil übernehmen. Wer die Rollen versteht, kann jede Anleitung nachvollziehen.</p>

<h4>Teil 1: Der Stapel (Stack) im Überblick</h4>
<div class="flow"><span>☎️ Rufnummer<small>Telefonie-Anbieter</small></span><i>→</i><span>🎛️ Voice-Plattform<small>steuert das Gespräch</small></span><i>→</i><span>👂🧠👄 STT · LLM · TTS<small>die drei Bausteine</small></span><i>→</i><span>🔧 Tools<small>Kalender, CRM, Datenbank</small></span><i>→</i><span>⚙️ Automation<small>n8n / Make</small></span></div>

<h4>Teil 2: Voice-Plattformen</h4>
<p>Die Plattform ist der <b>Dirigent</b>: Sie nimmt den Anruf entgegen, koordiniert STT, LLM und TTS, kümmert sich um Latenz, Unterbrechungen und Tools, und liefert am Ende einen Bericht.</p>
<table>
<tr><th>Plattform</th><th>Stärke</th><th>Für wen</th></tr>
<tr><td><b>Vapi</b></td><td>Sehr flexibel: Modelle, Stimmen, Tools frei kombinierbar, gute API</td><td>Automatisierer, Agenturen, technisch Interessierte</td></tr>
<tr><td><b>ElevenLabs</b></td><td>Sehr natürliche Stimmen, eigene Conversational-AI-Agenten, Stimmen in vielen Sprachen</td><td>Wenn Klangqualität im Vordergrund steht</td></tr>
<tr><td><b>Fonio</b></td><td>Lösung aus dem deutschsprachigen Raum, einfache Einrichtung, Fokus auf DSGVO</td><td>Unternehmen ohne Technik-Team [Prüfen]</td></tr>
</table>
<p>Es gibt viele weitere Anbieter, und der Markt ändert sich schnell. Achte bei der Wahl auf: deutsche Sprachqualität, Latenz, Preis pro Minute, Datenschutz (Serverstandort, AVV) und welche Tools angebunden werden können.</p>

<h4>Teil 3: Telefonie</h4>
<p>Damit der Agent eine echte Telefonnummer hat, braucht es einen <b>Telefonie-Anbieter</b>, z. B. <b>Twilio</b> oder <b>Telnyx</b>. Dort kaufst oder mietest du Rufnummern und verbindest sie mit der Plattform.</p>
<ul>
<li><b>Rufnummern:</b> Für deutsche Nummern verlangen Anbieter meist einen Adress- oder Firmennachweis (regulatorische Vorgaben).</li>
<li><b>SIP</b> (Session Initiation Protocol): Der technische Standard für Telefonie über das Internet. Fast alle modernen Telefonanlagen sprechen SIP.</li>
<li><b>SIP-Trunk:</b> Eine „Leitung“ zwischen zwei Systemen. Damit kann eine <b>bestehende Firmen-Telefonanlage</b> Anrufe an den Voice Agent weitergeben, und die Kunden wählen weiter die bekannte Nummer.</li>
<li><b>Rufumleitung:</b> Die einfachste Variante: Die bestehende Nummer leitet z. B. außerhalb der Bürozeiten oder bei „besetzt“ auf die Agent-Nummer um.</li>
</ul>

<h4>Teil 4: Routing</h4>
<p><b>Routing</b> legt fest, wohin ein Anruf geht. Beispiele:</p>
<ul>
<li>Bürozeiten: erst Mensch, nach 4 Klingeltönen Agent.</li>
<li>Außerhalb der Bürozeiten: direkt Agent.</li>
<li>Stichwort „Reklamation“ oder verärgerter Tonfall: Weiterleitung an einen Menschen.</li>
<li>Auswahlmenü per Sprache: „Geht es um Tickets oder um eine Buchung?“</li>
</ul>

<h4>Teil 5: Daten und Logik</h4>
<ul>
<li><b>Datenbank</b> (z. B. <b>Supabase</b>): Speichert Kunden, Termine, Gesprächsprotokolle.</li>
<li><b>Automation</b> (Make oder n8n): Verbindet den Agenten mit Kalender, CRM, Mail und Slack. Nach dem Anruf verarbeitet sie z. B. den Bericht weiter.</li>
</ul>

<h4>Teil 6: Kosten grob einschätzen</h4>
<p>Abgerechnet wird meist <b>pro Gesprächsminute</b>, zusammengesetzt aus Plattform, STT, LLM, TTS und Telefonie, dazu monatliche Kosten für die Rufnummer. Je nach Anbieter und Modell liegen die Minutenpreise grob im Bereich von einigen Cent bis über zehn Cent [Schätzung, Prüfen].</p>
<div class="ex">200 Anrufe im Monat × 2 Minuten = 400 Minuten. Bei angenommenen 0,10 € pro Minute sind das ca. 40 € plus Rufnummer. Vergleiche das mit der Arbeitszeit, die sonst am Telefon verbracht würde.</div>`,
      keys: [
        "Stack: Rufnummer → Plattform → STT/LLM/TTS → Tools → Automation",
        "Plattformen: Vapi (flexibel), ElevenLabs (Stimmen), Fonio (DSGVO, einfach)",
        "Telefonie: Twilio, Telnyx; SIP = Internet-Telefonie-Standard",
        "SIP-Trunk oder Rufumleitung binden bestehende Nummern an",
        "Routing = Regeln, wohin Anrufe gehen; Kosten pro Minute"
      ],
      quiz: [
        { t: "match", q: "Ordne den Dienst seiner Rolle zu.", p: [["Twilio / Telnyx", "Rufnummern und Telefonie"], ["Vapi", "Plattform, die das Gespräch steuert"], ["ElevenLabs", "Natürliche KI-Stimmen"], ["Supabase", "Datenbank"]], e: "Ein Voice Agent ist ein Zusammenspiel vieler Dienste." },
        { t: "mc", q: "Was regelt das Routing?", o: ["Die Stimmfarbe", "Wohin ein Anruf weitergeleitet wird", "Den Preis", "Die Sprache"], a: 1, e: "Z. B. Übergabe an einen Menschen." },
        { t: "tf", q: "Über einen SIP-Trunk kann eine bestehende Telefonanlage angebunden werden.", a: true, e: "So muss die Firma keine neue Nummer kommunizieren." },
        { t: "mc", q: "Was ist die einfachste Art, eine bestehende Nummer mit einem Voice Agent zu verbinden?", o: ["Neue Firma gründen", "Rufumleitung, z. B. außerhalb der Bürozeiten", "Die Nummer verkaufen", "Gar nicht möglich"], a: 1, e: "Rufumleitung ist schnell eingerichtet." },
        { t: "order", q: "Bringe den Stack in die Reihenfolge, in der ein Anruf ihn durchläuft.", o: ["Rufnummer beim Telefonie-Anbieter", "Voice-Plattform", "STT, LLM, TTS", "Tools wie Kalender", "Automation nach dem Anruf"], e: "Von der Leitung bis zur Nachbearbeitung." },
        { t: "mc", q: "300 Anrufe × 3 Minuten × 0,08 € pro Minute. Wie hoch sind die Minutenkosten?", o: ["24 €", "72 €", "90 €", "720 €"], a: 1, e: "900 Minuten × 0,08 € = 72 €." },
        { t: "mc", q: "Worauf achtest du bei der Plattformwahl für deutschsprachige Anrufer besonders?", o: ["Nur auf das Logo", "Deutsche Sprachqualität, Latenz, Datenschutz und Preis pro Minute", "Nur auf den niedrigsten Preis", "Auf die Anzahl der Mitarbeiter des Anbieters"], a: 1, e: "Ein billiger Agent, der schlecht Deutsch spricht, hilft niemandem." }
      ],
      practice: {
        task: "Skizziere den kompletten Stack für einen Vorverkaufs-Agenten deines Ensembles: Rufnummer und Anbindung, Plattform, Stimme, Daten, Automation, Routing-Regeln (3 Stück) und eine grobe Kostenrechnung für 100 Anrufe im Monat.",
        hint: "Wer übernimmt welche Rolle? Wann soll ein Mensch rangehen?",
        solution: "Rufnummer: bestehende Ensemble-Nummer, Rufumleitung auf eine Telnyx-Nummer. Plattform: Vapi. Stimme: ElevenLabs, deutsche Frauenstimme. Daten: Supabase (Konzerte, Restkontingente). Automation: n8n schickt Bestätigungsmail und trägt Reservierung ein.\nRouting: 1) Mo–Fr 9–17 Uhr erst Büro, nach 4 Klingeltönen Agent. 2) Abends/Wochenende direkt Agent. 3) „Mitarbeiter“, Beschwerde oder Gruppen über 20 Personen → Rückrufbitte ans Büro.\nKosten: 100 × 2 Min × ca. 0,10 € = ca. 20 € + Rufnummer [Schätzung]."
      }
    },
    {
      id: "z5l3",
      title: "Inbound, Outbound und Planung",
      icon: "🔀",
      lesson: `
<p>Bevor auch nur eine Stimme ausgewählt wird, steht die Planung. Gerade bei Voice Agents rächt sich schlechte Planung schnell: Anrufer sind ungeduldig, und ein verwirrtes Gespräch schadet dem Ruf mehr als gar kein Agent.</p>

<h4>Teil 1: Inbound, die eingehenden Anrufe</h4>
<p>Der Kunde ruft an, der Agent nimmt ab. Typische Einsätze:</p>
<ul>
<li><b>Hotline und FAQ:</b> Öffnungszeiten, Anfahrt, Preise, Programm</li>
<li><b>Terminbuchung:</b> Arztpraxis, Unterricht, Beratung</li>
<li><b>Bestell- oder Reservierungsannahme:</b> Tickets, Tische</li>
<li><b>Erstaufnahme:</b> Anliegen erfassen und an die richtige Person weitergeben</li>
<li><b>Überlauf:</b> Wenn alle Leitungen besetzt sind oder außerhalb der Bürozeiten</li>
</ul>
<p>Vorteil: Rund um die Uhr erreichbar, keine Warteschleife, kein verpasster Auftrag.</p>

<h4>Teil 2: Outbound, die ausgehenden Anrufe</h4>
<p>Der Agent ruft selbst an. Typische Einsätze:</p>
<ul>
<li><b>Terminerinnerungen</b> und Bestätigungen</li>
<li><b>Feedback-Umfragen</b> nach einem Kauf oder Konzert</li>
<li><b>Rückrufe</b> auf hinterlassene Anfragen</li>
<li><b>Nachfassen</b> bei offenen Angeboten</li>
</ul>
<div class="tip"><b>Recht:</b> Werbeanrufe bei Privatpersonen brauchen in Deutschland eine <b>ausdrückliche vorherige Einwilligung</b> (UWG), und diese muss dokumentiert sein. Gegenüber Unternehmen ist es nur bei mutmaßlicher Einwilligung erlaubt. Reine Service-Anrufe (Terminerinnerung für einen gebuchten Termin) sind etwas anderes als Werbung. Im Zweifel fachlich prüfen lassen.</div>

<h4>Teil 3: Das Lastenheft für einen Voice Agent</h4>
<ol>
<li><b>Gesprächsziel:</b> Was soll am Ende des Anrufs erreicht sein? („Termin gebucht“ oder „Anliegen vollständig erfasst“)</li>
<li><b>Anrufer:</b> Wer ruft an? Mit welchen Erwartungen? Wie alt, wie technikaffin?</li>
<li><b>Daten:</b> Welche Infos muss der Agent sammeln? (Name, Telefonnummer, Datum, Anliegen)</li>
<li><b>Tools:</b> Was muss er nachschlagen oder tun können?</li>
<li><b>Grenzen:</b> Was darf er nicht? (Preise zusagen, medizinische Auskünfte, Stornos ohne Prüfung)</li>
<li><b>Übergabe:</b> Wann und wie an einen Menschen?</li>
<li><b>Persönlichkeit:</b> Name, Stimme, Tonfall, Du oder Sie, Sprechtempo.</li>
<li><b>Erfolgsmessung:</b> Anteil erfolgreich abgeschlossener Anrufe, durchschnittliche Dauer, Übergabequote.</li>
</ol>

<h4>Teil 4: Gesprächsfluss und Prozessvisualisierung</h4>
<p>Zeichne das Gespräch als <b>Flussdiagramm</b> mit allen Verzweigungen, bevor du den Prompt schreibst.</p>
<div class="ex"><b>Inbound „Unterrichtstermin buchen“:</b>
<div class="flow"><span>👋 Begrüßung<small>als KI vorstellen</small></span><i>→</i><span>❓ Anliegen<small>Termin, Frage, anderes?</small></span><i>→</i><span>📋 Daten<small>Name, Instrument, Niveau</small></span><i>→</i><span>📅 Kalender<small>freie Termine anbieten</small></span><i>→</i><span>✅ Bestätigen<small>alles wiederholen</small></span><i>→</i><span>👋 Abschluss<small>SMS-Bestätigung ankündigen</small></span></div>
Verzweigungen: „Frage“ → FAQ beantworten. „Anderes“ → Rückrufbitte aufnehmen. Kein passender Termin → Warteliste oder Rückruf. Anrufer wird ungeduldig → Übergabe.</div>

<h4>Teil 5: Sonderfälle planen</h4>
<table>
<tr><th>Situation</th><th>Reaktion</th></tr>
<tr><td>Anrufer ist verärgert</td><td>Verständnis zeigen, nicht diskutieren, an Menschen übergeben</td></tr>
<tr><td>Frage außerhalb des Themas</td><td>Freundlich sagen, dass man dazu nicht helfen kann, Kontaktweg nennen</td></tr>
<tr><td>Anrufer will einen Menschen</td><td>Sofort weiterleiten oder Rückruf anbieten, nie ausweichen</td></tr>
<tr><td>Schlechte Verbindung</td><td>Einmal nachfragen, dann Rückruf anbieten</td></tr>
<tr><td>Kind oder offensichtlich verwirrte Person</td><td>Keine Buchung, freundlich auf Rückruf durch Mensch verweisen</td></tr>
<tr><td>Versuch, den Agenten zu manipulieren</td><td>Bei der Aufgabe bleiben, nichts Vertrauliches herausgeben</td></tr>
</table>

<h4>Teil 6: Persönlichkeit</h4>
<p>Gib dem Agenten einen <b>Namen</b> und einen <b>klaren Charakter</b>, passend zur Marke: freundlich-professionell für eine Kanzlei, herzlich-locker für eine Musikschule. Er stellt sich zu Beginn <b>als KI</b> vor. Das ist ehrlich, Pflicht nach dem AI Act und schafft Vertrauen.</p>`,
      keys: [
        "Inbound = eingehend (Hotline, Buchung, Überlauf)",
        "Outbound = ausgehend (Erinnerung, Umfrage, Rückruf), Werbung nur mit Einwilligung",
        "Lastenheft: Ziel, Anrufer, Daten, Tools, Grenzen, Übergabe, Persönlichkeit, Messung",
        "Gespräch als Flussdiagramm mit allen Verzweigungen planen",
        "Sonderfälle vorher festlegen, als KI vorstellen"
      ],
      quiz: [
        { t: "mc", q: "Eine Musikschule lässt Schüler ihre Termine per KI-Telefon buchen. Das ist …", o: ["Outbound", "Inbound", "Beides nicht", "Ein SQL-Bot"], a: 1, e: "Der Schüler ruft an, also eingehend." },
        { t: "match", q: "Inbound oder Outbound?", p: [["Agent erinnert an morgigen Unterrichtstermin", "Outbound"], ["Kunde ruft wegen Tickets an", "Inbound"], ["Agent ruft nach dem Konzert für eine Umfrage an", "Outbound (Agent ruft an)"], ["Anruf außerhalb der Bürozeiten wird angenommen", "Inbound (Kunde ruft an)"]], e: "Wer wählt die Nummer?" },
        { t: "order", q: "Bringe den typischen Gesprächsfluss in die richtige Reihenfolge.", o: ["Begrüßung (als KI vorstellen)", "Anliegen erfragen", "Daten sammeln", "Aktion ausführen (z. B. buchen)", "Alles bestätigen und verabschieden"], e: "Ein klarer Ablauf macht den Agenten zuverlässig." },
        { t: "tf", q: "Werbeanrufe bei Privatpersonen sind in Deutschland ohne Einwilligung erlaubt.", a: false, e: "Es braucht eine ausdrückliche, dokumentierte vorherige Einwilligung." },
        { t: "mc", q: "Ein Anrufer sagt mehrfach: „Ich will mit einem Menschen sprechen.“ Was tut der Agent?", o: ["Weiter versuchen, das Problem zu lösen", "Sofort weiterleiten oder einen Rückruf anbieten", "Auflegen", "Das Thema wechseln"], a: 1, e: "Nie ausweichen, das zerstört Vertrauen." },
        { t: "mc", q: "Warum zeichnet man das Gespräch vor dem Prompt-Schreiben als Flussdiagramm?", o: ["Weil es hübsch aussieht", "Um alle Verzweigungen und Sonderfälle vorher zu sehen", "Weil die Plattform es verlangt", "Ohne Grund"], a: 1, e: "Lücken im Ablauf fallen auf dem Papier früher auf als im echten Gespräch." },
        { t: "tf", q: "Der Agent sollte sich zu Beginn als KI vorstellen.", a: true, e: "Ehrlich, vertrauensbildend und Pflicht nach dem AI Act." }
      ],
      practice: {
        task: "Schreibe ein Mini-Lastenheft für einen Inbound-Agenten (Buchungsanfragen oder Unterricht): Gesprächsziel, zu sammelnde Daten, 2 Tools, 3 Grenzen, Übergaberegel, Persönlichkeit. Formuliere dazu Begrüßung und erste Frage.",
        hint: "Was muss am Ende des Anrufs feststehen? Welche Daten brauchst du dafür mindestens?",
        solution: "Ziel: vollständige Buchungsanfrage erfasst. Daten: Name, Rückrufnummer, Datum, Ort, Anlass, Dauer, Budget (optional). Tools: Kalender auf freie Termine prüfen; Anfrage in Tabelle speichern. Grenzen: keine Preiszusagen, keine Terminbestätigung, keine Auskunft über andere Kunden. Übergabe: bei Wunsch, Beschwerde oder Pressethemen → Rückrufbitte. Persönlichkeit: Lina, freundlich-professionell, Sie-Form, ruhiges Tempo.\nBegrüßung: „Guten Tag, hier ist Lina, die KI-Assistentin des Ensembles. Ich nehme gern Ihre Buchungsanfrage auf. Für welches Datum planen Sie Ihre Veranstaltung?“"
      }
    },
    {
      id: "z5l4",
      title: "Tools: Termine, Kundenerkennung, Reports",
      icon: "🧰",
      lesson: `
<p>Ein Voice Agent, der nur reden kann, ist eine bessere Ansage. Richtig nützlich wird er, wenn er <b>handeln</b> kann: im Kalender nachsehen, Termine eintragen, Kunden erkennen, Daten speichern. Das geschieht über <b>Tools</b>.</p>

<h4>Teil 1: Wie Tools funktionieren (Function Calling)</h4>
<p>Du beschreibst dem LLM eine Reihe von Funktionen, etwa so:</p>
<pre>Tool: freie_termine_suchen
Beschreibung: Sucht freie Unterrichtstermine
Eingaben: datum_von, datum_bis, instrument</pre>
<p>Im Gespräch entscheidet das Modell selbst: „Jetzt brauche ich freie Termine“ und erzeugt einen <b>Funktionsaufruf</b> mit den passenden Werten. Die Plattform führt ihn aus (meist über einen <b>Webhook</b> an n8n oder Make), bekommt das Ergebnis zurück und gibt es dem Modell. Das formuliert daraus die Antwort: „Ich hätte Dienstag um 16 Uhr oder Donnerstag um 17 Uhr frei.“</p>
<div class="flow"><span>🗣️ „Haben Sie Dienstag Zeit?“</span><i>→</i><span>🧠 LLM ruft Tool<small>freie_termine_suchen</small></span><i>→</i><span>⚙️ n8n<small>fragt Kalender ab</small></span><i>→</i><span>📅 Ergebnis<small>16:00, 17:00</small></span><i>→</i><span>🗣️ Antwort</span></div>
<div class="tip">Gute Tool-Beschreibungen sind entscheidend. Das Modell wählt Tools nur anhand von Name und Beschreibung. „Sucht freie Termine“ ist besser als „tool_1“.</div>

<h4>Teil 2: Wichtige Tools für Voice Agents</h4>
<table>
<tr><th>Tool</th><th>Was es tut</th></tr>
<tr><td><b>Termine suchen und buchen</b></td><td>Freie Slots im Kalender (Google, Outlook, Calendly) finden und eintragen</td></tr>
<tr><td><b>Kundenerkennung</b></td><td>Anhand der Anrufernummer in der Datenbank nachsehen: Bekannter Kunde? Offene Buchung?</td></tr>
<tr><td><b>Wissen nachschlagen</b></td><td>RAG über FAQ, Preise, Programme</td></tr>
<tr><td><b>Daten speichern</b></td><td>Anliegen, Kontaktdaten, Notizen ins CRM oder in eine Tabelle</td></tr>
<tr><td><b>Weiterleiten</b></td><td>Anruf an einen Menschen übergeben (Transfer)</td></tr>
<tr><td><b>Nachricht senden</b></td><td>SMS oder Mail mit Bestätigung</td></tr>
<tr><td><b>Auflegen</b></td><td>Gespräch sauber beenden</td></tr>
</table>

<h4>Teil 3: Kundenerkennung im Detail</h4>
<p>Gleich zu Beginn des Anrufs schickt die Plattform die <b>Anrufernummer</b> an eine Automation. Diese sucht in der Datenbank. Ist der Kunde bekannt, bekommt der Agent Infos mit auf den Weg: Name, letzte Buchung, Vorlieben.</p>
<div class="ex">„Guten Tag, Frau Weber! Schön, dass Sie wieder anrufen. Geht es um Ihre Buchung für den 12. Dezember?“</div>
<p>Vorsicht: Telefonnummern können geteilt oder unterdrückt sein. Bei sensiblen Dingen (Änderung einer Buchung, persönliche Daten) zusätzlich <b>verifizieren</b>, z. B. Buchungsnummer oder Postleitzahl abfragen.</p>

<h4>Teil 4: Der End-of-Call-Report</h4>
<p>Nach jedem Anruf schickt die Plattform automatisch einen <b>Bericht</b> per Webhook. Er enthält typischerweise: Transkript, KI-Zusammenfassung, Dauer, Anrufernummer, Ergebnis (gebucht, Rückruf, abgebrochen), gesammelte Daten, Kosten, ggf. Link zur Aufnahme.</p>
<p>n8n kann damit z. B.: ein Ticket anlegen, eine Zusammenfassung in Slack posten, Daten ins CRM schreiben, bei „Rückruf gewünscht“ eine Aufgabe erstellen, Statistiken für den Wochenbericht sammeln.</p>
<p>Du kannst die Plattform auch bitten, <b>strukturierte Daten</b> herauszuziehen („Extrahiere Name, Wunschdatum, Instrument als JSON“), damit die Weiterverarbeitung zuverlässig klappt.</p>

<h4>Teil 5: Sicherheit mit HMAC</h4>
<p>Deine Webhook-Adresse ist im Internet erreichbar. Was, wenn jemand gefälschte „Berichte“ oder Tool-Aufrufe schickt? Dagegen hilft eine <b>HMAC-Signatur</b>:</p>
<ol>
<li>Plattform und dein n8n kennen ein gemeinsames <b>Geheimnis</b> (Secret).</li>
<li>Die Plattform berechnet aus Nachricht + Geheimnis eine Prüfsumme (die Signatur) und schickt sie mit.</li>
<li>n8n berechnet dieselbe Prüfsumme selbst. Stimmen beide überein, ist die Nachricht echt und unverändert. Sonst wird sie verworfen.</li>
</ol>
<div class="ex">Wie ein Siegel auf einem Brief: Nur wer den Siegelstempel hat, kann es echt aussehen lassen. Und wird der Brief nachträglich geöffnet, ist das Siegel gebrochen.</div>

<h4>Teil 6: Wenn es groß wird</h4>
<ul>
<li><b>AWS Lambda:</b> Kleine Programme in der Cloud, die nur laufen, wenn sie gebraucht werden (z. B. ein Tool-Aufruf). Bezahlt wird nur die Laufzeit.</li>
<li><b>S3:</b> Dateispeicher, z. B. für Gesprächsaufnahmen.</li>
<li><b>SQS:</b> Eine Warteschlange. Kommen 100 Berichte gleichzeitig, werden sie geordnet nacheinander abgearbeitet, und nichts geht verloren.</li>
</ul>`,
      keys: [
        "Function Calling: LLM entscheidet, Plattform führt Tool aus, Ergebnis zurück",
        "Gute Tool-Namen und -Beschreibungen sind entscheidend",
        "Kundenerkennung per Anrufernummer, bei Sensiblem zusätzlich verifizieren",
        "End-of-Call-Report per Webhook: Transkript, Zusammenfassung, Ergebnis",
        "HMAC = Siegel, das Echtheit und Unverändertheit beweist"
      ],
      quiz: [
        { t: "order", q: "Bringe einen Tool-Aufruf in die richtige Reihenfolge.", o: ["Anrufer fragt nach einem Termin", "LLM erzeugt einen Funktionsaufruf", "n8n fragt den Kalender ab", "Ergebnis geht zurück an das LLM", "Agent nennt die freien Termine"], e: "Das Modell entscheidet, die Automation führt aus." },
        { t: "mc", q: "Woran erkennt das Modell, welches Tool es nutzen soll?", o: ["Zufällig", "An Name und Beschreibung des Tools", "An der Farbe", "An der Uhrzeit"], a: 1, e: "Deshalb sind klare Beschreibungen so wichtig." },
        { t: "mc", q: "Wozu dient eine HMAC-Signatur bei Webhooks?", o: ["Sie macht die Nachricht schneller", "Sie beweist, dass die Nachricht vom echten Absender stammt und unverändert ist", "Sie übersetzt die Nachricht", "Sie komprimiert Audio"], a: 1, e: "Ein gemeinsames Geheimnis erzeugt ein Siegel." },
        { t: "match", q: "Ordne zu.", p: [["End-of-Call-Report", "Zusammenfassung nach dem Anruf"], ["Function Calling", "Agent ruft Tools auf"], ["S3", "Dateispeicher in der Cloud"], ["SQS", "Warteschlange für Nachrichten"]], e: "Diese Bausteine machen Voice Agents produktionsreif." },
        { t: "mc", q: "Ein bekannter Kunde will seine Buchung stornieren. Was sollte der Agent zusätzlich tun?", o: ["Nichts, die Nummer reicht", "Den Anrufer verifizieren, z. B. mit Buchungsnummer", "Sofort auflegen", "Die Buchung verdoppeln"], a: 1, e: "Telefonnummern können geteilt oder gefälscht sein." },
        { t: "tf", q: "Ein Agent kann anhand der Telefonnummer erkennen, ob jemand schon Kunde ist.", a: true, e: "Kundenerkennung per Datenbank-Abfrage zu Beginn des Anrufs." },
        { t: "mc", q: "Was kann n8n mit einem End-of-Call-Report z. B. tun?", o: ["Gar nichts", "Bei „Rückruf gewünscht“ automatisch eine Aufgabe anlegen", "Den Anruf rückgängig machen", "Die Stimme ändern"], a: 1, e: "Der Bericht ist der Startpunkt für die Nachbearbeitung." }
      ],
      practice: {
        task: "Entwirf für einen Agenten, der Probentermine mit Musikern abstimmt: 4 Tools (Name, Beschreibung, Eingaben), die Felder, die im End-of-Call-Report als JSON stehen sollen, und was n8n danach automatisch tut.",
        hint: "Nachsehen, eintragen, mitteilen, weiterleiten. Welche Infos braucht der Ensembleleiter hinterher?",
        solution: "Tools: 1) musiker_erkennen (telefonnummer) – findet Musiker in der Besetzungsliste. 2) probentermine_lesen (datum_von, datum_bis) – liefert geplante Proben. 3) verfuegbarkeit_eintragen (musiker_id, probe_id, status, grund) – speichert Zu-/Absage. 4) an_leitung_weiterleiten (grund) – übergibt an den Ensembleleiter.\nReport-JSON: musiker, probe, status (zusage/absage/unsicher), grund, ersatz_vorgeschlagen, rueckruf_noetig.\nn8n danach: Eintrag in Dispositions-Tabelle; bei Absage Slack-Nachricht an die Leitung mit Liste möglicher Aushilfen; bei rueckruf_noetig Aufgabe anlegen."
      }
    },
    {
      id: "z5l5",
      title: "Datenschutz bei Voice Agents",
      icon: "🛡️",
      lesson: `
<p>Kaum etwas ist so persönlich wie die eigene Stimme. Gespräche enthalten oft Namen, Telefonnummern, Wünsche, manchmal auch Gesundheitsinfos oder private Sorgen. Deshalb gelten bei Voice Agents besonders hohe Anforderungen. Wer sie ernst nimmt, gewinnt Vertrauen.</p>
<p><i>Überblick, keine Rechtsberatung.</i></p>

<h4>Teil 1: Was alles personenbezogen ist</h4>
<ul>
<li>Die <b>Stimme</b> selbst und jede <b>Aufnahme</b></li>
<li>Das <b>Transkript</b> und die Zusammenfassung</li>
<li>Die <b>Telefonnummer</b> und Uhrzeit des Anrufs</li>
<li>Alles, was im Gespräch gesagt wird: Name, Adresse, Anliegen</li>
</ul>
<p>Werden Stimmen genutzt, um Personen <b>eindeutig zu identifizieren</b> (Stimmbiometrie), gelten sie als besonders geschützte biometrische Daten. Das ist bei normalen Voice Agents nicht der Fall und sollte es auch nicht werden.</p>

<h4>Teil 2: Transparenz zu Beginn</h4>
<p>Gleich am Anfang des Gesprächs sollte klar sein:</p>
<ol>
<li><b>Dass eine KI spricht</b> (AI Act).</li>
<li><b>Ob aufgezeichnet wird</b> und wofür.</li>
<li><b>Wo es mehr Infos gibt</b> (Datenschutzerklärung).</li>
<li><b>Wie man zu einem Menschen kommt.</b></li>
</ol>
<div class="ex">„Guten Tag, Sie sprechen mit Lina, der KI-Assistentin des Ensembles. Zur Bearbeitung Ihres Anliegens wird unser Gespräch aufgezeichnet und automatisch zusammengefasst. Wenn Sie das nicht möchten, sagen Sie einfach ‚nicht aufnehmen‘. Mit ‚Mitarbeiter‘ verbinde ich Sie jederzeit weiter.“</div>

<h4>Teil 3: Aufzeichnung</h4>
<p>In Deutschland ist das <b>heimliche Aufnehmen</b> des nichtöffentlich gesprochenen Wortes <b>strafbar</b> (§ 201 StGB). Aufzeichnungen deshalb nur offen und mit Zustimmung. Überlege außerdem: Brauchst du die <b>Audiodatei</b> überhaupt, oder reicht das Transkript bzw. nur die Zusammenfassung? Weniger speichern heißt weniger Risiko.</p>

<h4>Teil 4: Die Dienstleister-Kette</h4>
<p>Ein Voice Agent besteht aus vielen Diensten, und <b>jeder</b>, der Gesprächsdaten verarbeitet, braucht einen <b>AVV</b>:</p>
<table>
<tr><th>Dienst</th><th>Verarbeitet</th></tr>
<tr><td>Voice-Plattform</td><td>Alles: Audio, Transkript, Metadaten</td></tr>
<tr><td>STT-Anbieter</td><td>Audio</td></tr>
<tr><td>LLM-Anbieter</td><td>Transkript, Kundendaten aus Tools</td></tr>
<tr><td>TTS-Anbieter</td><td>Antworttexte (können Namen enthalten)</td></tr>
<tr><td>Telefonie-Anbieter</td><td>Nummern, Verbindungsdaten, ggf. Audio</td></tr>
<tr><td>Datenbank / Automation</td><td>Gespeicherte Daten, Berichte</td></tr>
</table>
<p>Prüfe jeweils: <b>Serverstandort</b> (EU bevorzugt), Absicherung bei Drittländern, <b>keine Trainingsnutzung</b> deiner Daten. Halte alles im <b>Verarbeitungsverzeichnis</b> fest.</p>

<h4>Teil 5: Speichern und Löschen</h4>
<ul>
<li><b>Löschfristen</b> festlegen, z. B. Audio nach 30 Tagen, Transkripte nach 90 Tagen, Buchungsdaten so lange wie für den Vertrag nötig.</li>
<li><b>Automatisch löschen</b> lassen statt sich darauf zu verlassen, dass jemand daran denkt.</li>
<li><b>Sensible Inhalte</b> im Transkript schwärzen lassen (z. B. Kontodaten), wenn sie doch einmal genannt werden.</li>
</ul>

<h4>Teil 6: Sensible Themen und Stimmklone</h4>
<ul>
<li><b>Nur fragen, was nötig ist.</b> Keine Gesundheits- oder Kontodaten, wenn der Zweck sie nicht zwingend braucht.</li>
<li><b>Outbound-Werbung</b> nur mit dokumentierter vorheriger Einwilligung.</li>
<li><b>Stimmklone:</b> Die Stimme einer echten Person (z. B. des Ensembleleiters) nur mit deren <b>ausdrücklicher, schriftlicher Zustimmung</b> nachbilden. Anrufer dürfen nicht getäuscht werden, dass sie mit dem echten Menschen sprechen.</li>
<li><b>Datenschutz-Folgenabschätzung (DSFA)</b>, wenn viele Gespräche mit sensiblen Inhalten verarbeitet werden.</li>
</ul>
<div class="tip">Ein guter Voice Agent ist nicht nur technisch sauber, sondern <b>vertrauenswürdig</b>. Anrufer, die sich fair behandelt fühlen, nutzen ihn gern wieder. Das ist am Ende ein Wettbewerbsvorteil.</div>`,
      keys: [
        "Stimme, Aufnahme, Transkript, Nummer = personenbezogen",
        "Zu Beginn: KI-Hinweis, Aufzeichnung, Infos, Weg zum Menschen",
        "Heimliche Aufnahmen sind strafbar (§ 201 StGB)",
        "AVV mit jedem Dienst der Kette, Serverstandort, kein Training",
        "Löschfristen automatisieren; Stimmklone nur mit schriftlicher Zustimmung"
      ],
      quiz: [
        { t: "tf", q: "Ein Voice Agent darf Gespräche heimlich aufzeichnen, solange die Daten in der EU bleiben.", a: false, e: "Aufzeichnung braucht Zustimmung. Heimliche Aufnahmen sind strafbar." },
        { t: "mc", q: "Mit wem braucht man einen AVV?", o: ["Nur mit dem Telefonanbieter", "Mit allen Dienstleistern der Kette, die Gesprächsdaten verarbeiten", "Mit niemandem", "Nur mit Kunden"], a: 1, e: "Plattform, STT, LLM, TTS, Telefonie, Datenbank …" },
        { t: "order", q: "Was sollte der Agent zu Beginn sagen? Sinnvolle Reihenfolge:", o: ["Begrüßung und Hinweis, dass eine KI spricht", "Hinweis auf Aufzeichnung mit Wahlmöglichkeit", "Wie man zu einem Menschen kommt", "Frage nach dem Anliegen"], e: "Erst Transparenz, dann Anliegen." },
        { t: "mc", q: "Welche Speicher-Strategie ist am datenschutzfreundlichsten?", o: ["Alles für immer speichern", "Nur speichern, was nötig ist, mit automatischen Löschfristen", "Gar nichts dokumentieren", "Alles ausdrucken"], a: 1, e: "Weniger speichern heißt weniger Risiko." },
        { t: "tf", q: "Die Stimme einer echten Person darf man ohne ihre Zustimmung klonen.", a: false, e: "Das braucht eine ausdrückliche, am besten schriftliche Zustimmung." },
        { t: "match", q: "Welcher Dienst verarbeitet was?", p: [["STT-Anbieter", "Audio des Anrufers"], ["LLM-Anbieter", "Transkript und Kundendaten"], ["Telefonie-Anbieter", "Nummern und Verbindungsdaten"]], e: "Jeder Dienst der Kette verarbeitet Personendaten." },
        { t: "mc", q: "Ein Anrufer nennt ungefragt seine Kontonummer. Was ist sinnvoll?", o: ["Im Transkript dauerhaft speichern", "Automatisch schwärzen lassen", "An alle Kollegen schicken", "Ignorieren und nichts tun"], a: 1, e: "Sensible Inhalte, die nicht gebraucht werden, schwärzen." }
      ],
      practice: {
        task: "Erstelle eine Datenschutz-Checkliste (mindestens 8 Punkte) für einen Voice Agent deines Ensembles und schreibe einen datenschutzfreundlichen Gesprächseinstieg.",
        hint: "Transparenz, Aufzeichnung, AVVs, Serverstandort, Training, Löschfristen, Datenminimierung, Outbound, Stimme, Verzeichnis.",
        solution: "1) Agent stellt sich als KI vor. 2) Aufzeichnung nur mit Zustimmung, Ablehnung möglich. 3) AVV mit Plattform, STT, LLM, TTS, Telefonie, Datenbank. 4) Serverstandorte geprüft, EU bevorzugt. 5) Keine Trainingsnutzung. 6) Löschfristen: Audio 30 Tage, Transkripte 90 Tage, automatisch. 7) Nur nötige Daten abfragen, Kontodaten schwärzen. 8) Kein Outbound ohne dokumentierte Einwilligung. 9) Keine Stimmklone echter Personen. 10) Eintrag im Verarbeitungsverzeichnis, Datenschutzerklärung ergänzt.\nEinstieg: „Hallo, Sie sprechen mit der KI-Assistentin des Ensembles. Darf ich unser Gespräch zur Bearbeitung aufzeichnen? Sie können auch ‚nein‘ sagen. Mit ‚Mitarbeiter‘ verbinde ich Sie jederzeit.“"
      }
    }
  ]
});
