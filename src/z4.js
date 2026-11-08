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
<p>Chatbots sind für viele Organisationen der erste echte KI-Einsatz. Das liegt nahe: Fragen kommen ständig, viele davon wiederholen sich, und ein Bot ist rund um die Uhr erreichbar. Aber Chatbot ist nicht gleich Chatbot. Drei Arten solltest du unterscheiden können.</p>

<h4>Teil 1: Der Website-Chatbot</h4>
<p><b>Zielgruppe:</b> Besucher deiner Website, also Kunden, Veranstalter, Publikum.<br>
<b>Aufgabe:</b> Häufige Fragen beantworten, Anfragen aufnehmen, auf Buchung oder Kontakt leiten.</p>
<p><b>So ist er typischerweise gebaut:</b></p>
<div class="flow"><span>💬 Chat-Fenster<small>auf der Website</small></span><i>→</i><span>⚙️ n8n<small>empfängt Nachricht</small></span><i>→</i><span>🤖 KI-Agent<small>mit Memory</small></span><i>→</i><span>📚 RAG<small>Website-Inhalte, FAQ</small></span><i>→</i><span>📋 Tool<small>Anfrage speichern</small></span></div>
<p><b>Worauf es ankommt:</b></p>
<ul>
<li><b>Als KI erkennbar</b> sein (Pflicht nach EU AI Act): „Hallo, ich bin der digitale Assistent.“</li>
<li><b>Klare Übergabe an Menschen</b>: Bei Beschwerden, komplizierten Fällen oder auf Wunsch → Kontaktformular, Mail oder Rückruf.</li>
<li><b>Nur über das eigene Thema</b> sprechen. Ein Ensemble-Bot muss keine Kochrezepte liefern.</li>
<li><b>Keine verbindlichen Zusagen</b> zu Preisen oder Terminen ohne menschliche Bestätigung.</li>
<li><b>Datenschutzhinweis</b> im Chatfenster, wenn Namen oder Mails abgefragt werden.</li>
</ul>

<h4>Teil 2: Der interne Wissens-Bot</h4>
<p><b>Zielgruppe:</b> Mitarbeitende oder Mitglieder.<br>
<b>Aufgabe:</b> Internes Wissen auffindbar machen: Handbücher, Richtlinien, Vorlagen, Protokolle.</p>
<p>Kernstück ist <b>RAG</b> (aus Zone 2). Typische Fragen: „Wie beantrage ich Urlaub?“, „Wo finde ich die Vorlage für Gastspielverträge?“, „Was wurde zur Reise nach England beschlossen?“</p>
<ul>
<li>Der Bot spart vor allem den Kollegen Zeit, die sonst immer dieselben Fragen beantworten.</li>
<li>Er ist nur so gut wie die Dokumente: veraltete Richtlinien → falsche Antworten.</li>
<li><b>Zugriffsrechte beachten:</b> Wer darf welche Dokumente sehen? Ein Bot für alle darf keine Vorstandsprotokolle mit Personalthemen enthalten.</li>
<li>Oft läuft er dort, wo das Team ohnehin ist: in Slack, Teams oder Telegram.</li>
</ul>

<h4>Teil 3: Der SQL-Chatbot</h4>
<p>Viele Daten liegen nicht in Dokumenten, sondern in <b>Datenbanken</b>: Ticketverkäufe, Mitglieder, Buchungen. Diese fragt man mit <b>SQL</b> ab, einer Abfragesprache. Beispiel:</p>
<pre>SELECT COUNT(*) FROM tickets
WHERE datum BETWEEN '2026-10-01' AND '2026-10-31';</pre>
<p>Ein SQL-Bot übersetzt eine normale Frage („Wie viele Tickets haben wir im Oktober verkauft?“) selbst in so eine Abfrage, führt sie aus und erklärt das Ergebnis in Worten.</p>
<ul>
<li><b>Nur Lesezugriff!</b> Der Datenbank-Benutzer des Bots darf nur lesen (SELECT), niemals ändern oder löschen. Sonst könnte eine missverstandene Frage Daten vernichten.</li>
<li>Dem Bot die <b>Tabellenstruktur</b> erklären (welche Tabellen, welche Spalten bedeuten was).</li>
<li>Die erzeugte Abfrage <b>anzeigen lassen</b>, damit man sie prüfen kann.</li>
</ul>

<h4>Teil 4: Weitere Kanäle</h4>
<ul>
<li><b>Reporting-Bot in Slack oder Teams:</b> Jeden Montag automatisch die Kennzahlen der Woche: neue Anfragen, Zusagen, Umsatz. Gebaut mit Zeitplan-Trigger + Datenbankabfrage + KI-Zusammenfassung.</li>
<li><b>Messenger-Bots:</b> Telegram oder WhatsApp Business für Mitglieder oder Kunden (bei WhatsApp auf Geschäftsbedingungen und Datenschutz achten [Prüfen]).</li>
<li><b>Sprach-Bots:</b> Mit Stimmen z. B. von ElevenLabs. Ausführlich in Zone 5.</li>
</ul>

<h4>Teil 5: Wie man einen Chatbot misst</h4>
<ul>
<li><b>Lösungsquote:</b> Wie viele Fragen beantwortet er ohne Mensch?</li>
<li><b>Übergabequote:</b> Wie oft muss er weiterleiten? (Zu hoch → Wissen fehlt.)</li>
<li><b>Fehlerquote:</b> Stichprobenartig Gespräche lesen: Stimmen die Antworten?</li>
<li><b>Zufriedenheit:</b> Daumen hoch oder runter am Ende.</li>
<li><b>Lücken-Liste:</b> Fragen, die er nicht beantworten konnte → ergänze Dokumente.</li>
</ul>`,
      keys: [
        "Website-Bot: Besucherfragen, als KI erkennbar, Übergabe an Menschen",
        "Interner Bot: RAG über Firmenwissen, Zugriffsrechte beachten",
        "SQL-Bot: Frage → Datenbankabfrage, nur Lesezugriff",
        "Reporting-Bots liefern regelmäßig Kennzahlen",
        "Messen: Lösungs-, Übergabe-, Fehlerquote, Lücken-Liste"
      ],
      quiz: [
        { t: "match", q: "Ordne den Bot dem Einsatz zu.", p: [["Website-Bot", "Fragen von Besuchern beantworten"], ["Interner RAG-Bot", "Handbücher für Mitarbeitende durchsuchen"], ["SQL-Bot", "Fragen in Datenbankabfragen übersetzen"], ["Reporting-Bot", "Wöchentliche Kennzahlen posten"]], e: "Gleiche Technik, verschiedene Zielgruppen." },
        { t: "mc", q: "Welche Rechte sollte ein SQL-Chatbot haben?", o: ["Volle Schreib- und Löschrechte", "Nur Lesezugriff", "Admin-Rechte", "Keine, er rät einfach"], a: 1, e: "Prinzip der minimalen Rechte." },
        { t: "mc", q: "Ein interner Bot für alle Mitglieder soll Vorstandsprotokolle mit Personalthemen enthalten. Was ist das Problem?", o: ["Keins", "Mitglieder könnten vertrauliche Inhalte erfragen, die sie nicht sehen dürfen", "Der Bot wird langsamer", "Protokolle sind zu kurz"], a: 1, e: "Zugriffsrechte gelten auch für Bots." },
        { t: "tf", q: "Ein Website-Bot sollte erkennbar machen, dass man mit einer KI spricht.", a: true, e: "Transparenzpflicht nach dem EU AI Act." },
        { t: "tf", q: "Ein Website-Bot darf verbindliche Preiszusagen machen, wenn er gut trainiert ist.", a: false, e: "Verbindliche Zusagen nur nach menschlicher Bestätigung." },
        { t: "mc", q: "Dein Bot muss sehr oft an Menschen weiterleiten. Was ist die wahrscheinlichste Ursache?", o: ["Das Modell ist zu groß", "Ihm fehlt Wissen in den Dokumenten", "Die Website ist zu bunt", "Zu viele Besucher"], a: 1, e: "Lücken-Liste auswerten und Dokumente ergänzen." },
        { t: "order", q: "Ablauf eines Website-Bots in der richtigen Reihenfolge:", o: ["Besucher schreibt im Chat-Fenster", "n8n empfängt die Nachricht", "KI-Agent sucht passende Infos (RAG)", "Antwort oder Übergabe an einen Menschen"], e: "Vom Chatfenster über die Logik zur Antwort." }
      ],
      practice: {
        task: "Plane einen Website-Bot für dein Ensemble oder deinen Verein: 1) 8 Fragen, die er beantworten soll, 2) 3 Fälle, in denen er an einen Menschen übergibt, 3) Begrüßungstext mit KI-Hinweis, 4) 2 Kennzahlen, mit denen du ihn nach einem Monat bewertest.",
        hint: "Was fragen Veranstalter, Publikum, Presse oder neue Mitglieder immer wieder?",
        solution: "1) Wie buche ich euch? Was kostet ein Auftritt (Spanne)? Welche Programme habt ihr? Wie viel Bühnenfläche braucht ihr? Habt ihr eigene Technik? Wo gibt es Pressefotos? Wann ist das nächste Konzert? Wie kann ich Mitglied werden?\n2) Konkrete Buchung mit Datum, Beschwerden, Presseinterview-Anfragen.\n3) „Hallo! Ich bin der digitale Assistent des Ensembles, eine KI. Ich beantworte Fragen zu Programmen, Buchungen und Konzerten. Für verbindliche Anfragen verbinde ich dich gern mit uns.“\n4) Lösungsquote (Ziel 70 %), Anzahl qualifizierter Buchungsanfragen."
      }
    },
    {
      id: "z4l2",
      title: "Corporate LLM und lokale KI",
      icon: "🏢",
      lesson: `
<p>In vielen Firmen passiert Folgendes: Die Geschäftsführung hat KI „noch nicht freigegeben“. Die Mitarbeitenden nutzen sie trotzdem, heimlich, mit privaten Gratis-Konten, und kopieren dabei Kundendaten, Verträge und interne Zahlen hinein. Das nennt man <b>Schatten-KI</b>. Die Lösung ist nicht ein Verbot, sondern ein <b>sicheres, erlaubtes Angebot</b>: ein <b>Corporate LLM</b>.</p>

<h4>Teil 1: Was ist ein Corporate LLM?</h4>
<p>Ein <b>firmeneigener KI-Chat</b>, den alle Mitarbeitenden nutzen dürfen, unter Kontrolle des Unternehmens. Er besteht aus zwei getrennten Teilen:</p>
<ol>
<li><b>Die Oberfläche:</b> Das Chatfenster, das die Leute sehen. Ein bekanntes Open-Source-Beispiel ist <b>OpenWebUI</b>. Es sieht ähnlich aus wie ChatGPT, läuft aber auf dem eigenen Server.</li>
<li><b>Das Modell dahinter:</b> Entweder ein Cloud-Modell über API oder ein lokales Modell.</li>
</ol>

<h4>Teil 2: Drei Varianten für das Modell</h4>
<table>
<tr><th>Variante</th><th>Wie</th><th>Datenschutz</th><th>Leistung</th></tr>
<tr><td><b>Cloud-API mit Vertrag</b></td><td>Anthropic, OpenAI usw. über API oder Business-Tarif</td><td>Gut: Daten meist nicht fürs Training, AVV möglich [Prüfen]</td><td>Beste Modelle</td></tr>
<tr><td><b>Cloud in der EU</b></td><td>Modelle über europäische Rechenzentren (z. B. Azure, AWS, Google in EU-Regionen)</td><td>Sehr gut</td><td>Sehr gut</td></tr>
<tr><td><b>Lokal</b></td><td>Open-Source-Modell auf eigener Hardware, z. B. mit <b>Ollama</b></td><td>Maximal: Daten verlassen das Haus nie</td><td>Meist schwächer, braucht starke Hardware</td></tr>
</table>
<p>Viele Firmen kombinieren: ein starkes Cloud-Modell für Alltagsaufgaben, ein lokales Modell für besonders sensible Dokumente.</p>

<h4>Teil 3: Was ein Corporate LLM bringt</h4>
<ul>
<li><b>Kontrolle:</b> Die Firma entscheidet, welche Modelle erlaubt sind und wer was darf.</li>
<li><b>Keine Schatten-KI:</b> Wer eine gute, erlaubte Lösung hat, braucht keine heimliche.</li>
<li><b>Gemeinsame Assistenten:</b> Vorgefertigte Assistenten für alle, z. B. „Angebotsschreiber“, „Protokollant“.</li>
<li><b>Firmenwissen:</b> Eingebaute RAG-Funktionen für interne Dokumente.</li>
<li><b>Kosten:</b> Bezahlt wird über die API nach Verbrauch, statt für jeden Mitarbeitenden ein eigenes Abo.</li>
<li><b>Protokollierung:</b> Nachvollziehbar, was genutzt wird (unter Beachtung des Datenschutzes der Mitarbeitenden).</li>
</ul>

<h4>Teil 4: Lokale KI genauer</h4>
<p><b>Ollama</b> ist ein Programm, mit dem du Open-Source-Modelle auf deinem eigenen Rechner oder Server ausführst. Ein Befehl lädt ein Modell herunter, danach läuft es komplett offline.</p>
<ul>
<li><b>Hardware:</b> Je größer das Modell, desto mehr Arbeitsspeicher und Grafikkarte. Kleine Modelle laufen auf einem guten Laptop, große brauchen teure Server.</li>
<li><b>Qualität:</b> Gute offene Modelle sind für Zusammenfassen, Einordnen und einfache Texte oft ausreichend, bei komplexem Denken aber meist hinter den besten Cloud-Modellen.</li>
<li><b>Einsatz:</b> Personalakten, Gesundheitsdaten, vertrauliche Verträge, Daten mit Geheimhaltungsvereinbarung.</li>
</ul>
<div class="ex"><b>Lokale Dokumentenanalyse:</b> Ein Orchesterbüro will 200 Bewerbungsmappen nach Kriterien vorsortieren lassen. Die Unterlagen enthalten sensible Personendaten. Lösung: lokales Modell auf einem Büro-Server, kein Internet nötig. Wichtig: Die finale Auswahl trifft ein Mensch, denn KI bei Personalentscheidungen ist nach dem EU AI Act ein Hochrisiko-Bereich.</div>

<h4>Teil 5: Einführung im Unternehmen</h4>
<ol>
<li><b>KI-Richtlinie</b> schreiben: Was ist erlaubt, was verboten, welche Daten dürfen hinein?</li>
<li><b>Lösung auswählen</b> (Cloud, EU-Cloud, lokal oder Mischung).</li>
<li><b>Verträge</b> prüfen: AVV, Serverstandort, keine Trainingsnutzung.</li>
<li><b>Schulen</b>: KI-Kompetenz ist nach dem AI Act ohnehin gefordert.</li>
<li><b>Mitarbeitervertretung</b> (Betriebs- oder Personalrat) früh einbinden.</li>
</ol>`,
      keys: [
        "Schatten-KI = heimliche Nutzung privater KI-Konten mit Firmendaten",
        "Corporate LLM = Oberfläche (z. B. OpenWebUI) + Modell",
        "Modell: Cloud-API, EU-Cloud oder lokal (Ollama)",
        "Lokal = maximaler Datenschutz, meist weniger Leistung",
        "Einführung: Richtlinie, Verträge, Schulung, Mitarbeitervertretung"
      ],
      quiz: [
        { t: "mc", q: "Was ist „Schatten-KI“?", o: ["KI im Dunkelmodus", "Mitarbeitende nutzen ohne Freigabe private KI-Konten für Firmendaten", "Ein Bildmodell", "Eine Sicherheitssoftware"], a: 1, e: "Ein Corporate LLM schafft eine erlaubte Alternative." },
        { t: "match", q: "Ordne zu.", p: [["OpenWebUI", "Selbst gehostete Chat-Oberfläche"], ["Ollama", "Lokale Modelle auf eigener Hardware ausführen"], ["Cloud-API", "Modell beim Anbieter, per Vertrag genutzt"], ["KI-Richtlinie", "Regeln, was erlaubt ist"]], e: "Oberfläche und Modell sind getrennte Bausteine." },
        { t: "tf", q: "Lokale Modelle sind immer leistungsfähiger als Cloud-Modelle.", a: false, e: "Meist ist es umgekehrt. Der Vorteil lokaler Modelle ist der Datenschutz." },
        { t: "mc", q: "Welche Daten gehören am ehesten auf ein lokales Modell?", o: ["Öffentliche Pressetexte", "Personalakten und Gesundheitsdaten", "Konzertankündigungen", "Wetterdaten"], a: 1, e: "Besonders sensible Daten sollten das Haus nicht verlassen." },
        { t: "mc", q: "Was ist die wirksamste Antwort auf Schatten-KI?", o: ["Strenges Verbot ohne Alternative", "Ein sicheres, erlaubtes Angebot plus klare Richtlinie und Schulung", "Ignorieren", "Internet abschalten"], a: 1, e: "Wer eine gute erlaubte Lösung hat, braucht keine heimliche." },
        { t: "order", q: "Sinnvolle Reihenfolge bei der Einführung eines Corporate LLM:", o: ["KI-Richtlinie schreiben", "Lösung auswählen", "Verträge prüfen", "Mitarbeitende schulen"], e: "Erst Regeln, dann Technik, dann Menschen befähigen." },
        { t: "tf", q: "Bei KI-gestützter Vorauswahl von Bewerbungen sollte die finale Entscheidung ein Mensch treffen.", a: true, e: "Personalauswahl ist ein Hochrisiko-Bereich." }
      ],
      practice: {
        task: "Entwirf eine Kurz-KI-Richtlinie (6–8 Regeln) für einen Verein, ein Ensemble oder ein Orchesterbüro. Lege fest: welche Tools erlaubt sind, welche Daten nie hinein dürfen, wer verantwortlich ist und wo man Fragen stellt.",
        hint: "Erlaubt, verboten, Daten, Prüfen der Ergebnisse, Verantwortung, Ansprechperson.",
        solution: "1) Erlaubt: das Vereinskonto bei [Anbieter] mit AVV. Private Gratis-Konten nicht für Vereinsdaten. 2) Nie eingeben: Bankdaten, Gesundheitsdaten, Adresslisten. 3) Namen nach Möglichkeit ersetzen. 4) KI-Ergebnisse vor Veröffentlichung von einem Menschen prüfen. 5) KI-generierte Bilder und Texte nach außen als solche kennzeichnen, wo nötig. 6) Keine Entscheidungen über Personen allein durch KI. 7) Verantwortlich: Schriftführerin. 8) Fragen an ki@verein.de."
      }
    },
    {
      id: "z4l3",
      title: "Vertrieb automatisieren",
      icon: "📈",
      lesson: `
<p>„Vertrieb“ klingt nach Verkäufern in Anzügen. Für Musiker, Ensembles und Selbstständige heißt es einfach: <b>Wie kommen Anfragen herein, und wie werden daraus Aufträge?</b> Viele Schritte dabei sind Routine, und genau dort hilft KI.</p>

<h4>Teil 1: Der Vertriebsprozess als Process Map</h4>
<div class="flow"><span>📩 Anfrage<small>Lead</small></span><i>→</i><span>🔎 Qualifizieren<small>passt das?</small></span><i>→</i><span>💶 Angebot</span><i>→</i><span>📞 Nachfassen</span><i>→</i><span>✍️ Zusage<small>Vertrag</small></span><i>→</i><span>📊 Auswerten</span></div>
<p>Ein <b>Lead</b> ist ein potenzieller Kunde, also eine Anfrage oder ein Kontakt, aus dem ein Auftrag werden könnte. Ein <b>CRM</b> (Customer Relationship Management) ist das System, in dem alle Leads und Kunden verwaltet werden. Das kann ein Profi-Tool sein (z. B. HubSpot, Pipedrive) oder für den Anfang eine gut gepflegte Tabelle.</p>

<h4>Teil 2: Lead-Qualifizierung</h4>
<p>Nicht jede Anfrage ist gleich viel wert. <b>Qualifizieren</b> heißt: einschätzen, wie gut eine Anfrage passt und wie dringend sie ist. KI kann das automatisch nach deinen Kriterien tun.</p>
<table>
<tr><th>Stufe</th><th>Kriterien (Beispiel Ensemble)</th><th>Was passiert</th></tr>
<tr><td>🔥 Heiß</td><td>Budget passt, Termin frei, alle Infos vollständig</td><td>Sofort Angebotsentwurf, Benachrichtigung</td></tr>
<tr><td>🌤️ Warm</td><td>Termin frei, Budget unklar oder Infos fehlen</td><td>Automatische freundliche Rückfrage</td></tr>
<tr><td>❄️ Kalt</td><td>Budget deutlich zu niedrig oder Termin belegt</td><td>Höfliche Absage oder Alternativvorschlag</td></tr>
</table>
<div class="tip">Lass die KI ihre Einstufung immer <b>begründen</b> („Heiß, weil …“). So erkennst du schnell, ob die Kriterien richtig angewendet werden.</div>

<h4>Teil 3: Automatisierte Angebote</h4>
<div class="ex"><b>Ablauf:</b>
<div class="flow"><span>📝 Formular<small>Datum, Ort, Anlass, Budget</small></span><i>→</i><span>📅 Kalender<small>frei?</small></span><i>→</i><span>🤖 KI<small>Programm + Preis nach Preisliste</small></span><i>→</i><span>📄 PDF<small>aus Vorlage</small></span><i>→</i><span>👤 Freigabe<small>Mensch</small></span><i>→</i><span>📧 Versand</span></div></div>
<p>Wichtige Regeln:</p>
<ul>
<li><b>Preise kommen aus deiner Preisliste</b>, nicht aus dem „Gefühl“ der KI. Die Preisliste wird mitgegeben oder per Tabelle nachgeschlagen.</li>
<li><b>Die Vorlage bleibt fix</b>: Logo, Rechtliches, Zahlungsbedingungen. Die KI füllt nur die variablen Teile.</li>
<li><b>Freigabe vor Versand</b>, zumindest am Anfang. Wenn es 50-mal fehlerfrei lief, kann man über Lockerung nachdenken.</li>
</ul>

<h4>Teil 4: Nachfassen (Follow-up)</h4>
<p>Viele Aufträge gehen verloren, weil niemand nachfasst. Eine Automation erinnert dich nach z. B. 5 Tagen ohne Antwort und legt einen <b>persönlichen</b> Nachfass-Entwurf bereit, der sich auf die ursprüngliche Anfrage bezieht.</p>

<h4>Teil 5: Outbound, also aktiv auf andere zugehen</h4>
<p><b>Inbound</b> = Kunden kommen zu dir. <b>Outbound</b> = du gehst auf mögliche Kunden zu. KI hilft beim Recherchieren (Welche Festivals passen zu uns?) und beim Personalisieren (Bezug auf die letzte Saison des Veranstalters).</p>
<div class="tip"><b>Rechtlich in Deutschland:</b> Werbe-Mails an Privatpersonen brauchen eine vorherige ausdrückliche Einwilligung. Auch gegenüber Firmen ist unaufgeforderte Werbung per Mail nur sehr eingeschränkt erlaubt (UWG). Ein persönliches, individuelles Anschreiben an einen Veranstalter mit konkretem Bezug ist etwas anderes als Massenmails. Im Zweifel fachlich prüfen lassen. Massenhaft generische KI-Mails schaden außerdem dem Ruf.</div>

<h4>Teil 6: Auswerten</h4>
<p>Ein wöchentlicher automatischer Bericht zeigt: Anzahl Anfragen, davon heiß/warm/kalt, Angebote verschickt, Zusagen, Umsatz, durchschnittliche Antwortzeit. So siehst du, ob die Automation wirkt, und wo der nächste Engpass liegt.</p>`,
      keys: [
        "Lead = potenzieller Kunde, CRM = Verwaltungssystem",
        "Qualifizieren in heiß, warm, kalt, mit Begründung",
        "Angebote: Preise aus Preisliste, feste Vorlage, Freigabe vor Versand",
        "Automatisches Nachfassen mit persönlichem Entwurf",
        "Outbound: UWG und Einwilligung beachten"
      ],
      quiz: [
        { t: "mc", q: "Was ist ein Lead?", o: ["Ein Bleistift", "Eine Anfrage oder ein potenzieller Kunde", "Ein KI-Modell", "Ein Vertrag"], a: 1, e: "Leads werden qualifiziert, also bewertet." },
        { t: "match", q: "Ordne die Anfrage der Stufe zu.", p: [["Budget passt, Termin frei, alles vollständig", "Heiß"], ["Termin frei, Budget fehlt", "Warm"], ["Budget nur ein Drittel des Üblichen", "Kalt"]], e: "Kriterien vorher festlegen, KI wendet sie an." },
        { t: "order", q: "Bringe den Angebotsprozess in die richtige Reihenfolge.", o: ["Anfrage kommt per Formular", "Kalender prüfen", "KI erstellt Angebot nach Preisliste", "Mensch prüft und gibt frei", "Versand"], e: "Der Mensch bleibt vor dem Versand in der Schleife." },
        { t: "mc", q: "Woher sollen die Preise im automatischen Angebot kommen?", o: ["Aus dem Gefühl der KI", "Aus deiner hinterlegten Preisliste", "Aus dem Internet", "Vom Kunden"], a: 1, e: "Feste Grundlage statt Raten." },
        { t: "mc", q: "Warum soll die KI ihre Einstufung begründen?", o: ["Damit der Text länger wird", "Damit du schnell prüfen kannst, ob die Kriterien richtig angewendet werden", "Weil es Pflicht ist", "Ohne Grund"], a: 1, e: "Begründungen machen Fehler sichtbar." },
        { t: "tf", q: "Werbe-Mails an Privatpersonen ohne Einwilligung sind in Deutschland erlaubt, wenn eine KI sie schreibt.", a: false, e: "Die Regeln gelten unabhängig davon, wer die Mail schreibt." },
        { t: "match", q: "Inbound oder Outbound?", p: [["Veranstalter schreibt über das Kontaktformular", "Inbound"], ["Du schreibst Festivals an, bei denen ihr spielen wollt", "Outbound"], ["Jemand bucht über deine Website", "Inbound (kommt zu dir)"]], e: "Wer macht den ersten Schritt?" }
      ],
      practice: {
        task: "Entwirf einen kleinen Vertriebsablauf für deine Auftritte oder deinen Unterricht: 1) Kriterien für heiß/warm/kalt, 2) was bei jeder Stufe automatisch passiert, 3) Regel für das Nachfassen, 4) 3 Kennzahlen für den Wochenbericht.",
        hint: "Budget, Termin, Ort, Vollständigkeit. Was soll bei fehlenden Infos passieren?",
        solution: "1) Heiß: Budget ≥ Mindestgage, Termin frei, Ort/Anlass/Dauer angegeben. Warm: Termin frei, aber Budget oder Details fehlen. Kalt: Termin belegt oder Budget < 50 % der Mindestgage.\n2) Heiß: Angebotsentwurf + Push-Nachricht. Warm: Rückfrage-Mail mit fehlenden Punkten. Kalt: freundliche Absage, bei Terminproblem Alternativdaten.\n3) Nach 5 Tagen ohne Antwort: persönlicher Nachfass-Entwurf zur Freigabe; nach weiteren 7 Tagen: Status „verloren“.\n4) Anzahl Anfragen, Anteil heiß, Zusagequote."
      }
    },
    {
      id: "z4l4",
      title: "DSGVO und KI",
      icon: "🔒",
      lesson: `
<p>Datenschutz klingt nach Bürokratie. Im Kern geht es aber um eine einfache Frage: <b>Würdest du wollen, dass jemand so mit deinen Daten umgeht?</b> Die <b>DSGVO</b> (Datenschutz-Grundverordnung) gibt darauf verbindliche Antworten, und sie gilt auch, wenn KI im Spiel ist.</p>
<p><i>Wichtig: Diese Lektion gibt einen Überblick. Sie ersetzt keine Rechtsberatung. Bei konkreten Projekten: Datenschutzbeauftragte oder Fachanwälte fragen.</i></p>

<h4>Teil 1: Was sind personenbezogene Daten?</h4>
<p>Alle Informationen, die sich einer <b>bestimmten oder bestimmbaren Person</b> zuordnen lassen. Dazu gehören offensichtliche Dinge (Name, Adresse, Mail, Telefonnummer) und weniger offensichtliche: IP-Adresse, Foto, <b>Stimme</b>, Kundennummer, Instrument plus Orchester plus Stimmgruppe (damit ist oft klar, wer gemeint ist).</p>
<p><b>Besonders geschützt</b> sind z. B. Gesundheitsdaten, Religion, politische Meinung, Gewerkschaftszugehörigkeit. Diese gehören fast nie in eine KI.</p>

<h4>Teil 2: Die Grundsätze, übertragen auf KI</h4>
<table>
<tr><th>Grundsatz</th><th>Bedeutung</th><th>Bei KI konkret</th></tr>
<tr><td><b>Rechtsgrundlage</b></td><td>Jede Verarbeitung braucht einen Grund, den das Gesetz erlaubt</td><td>Z. B. Vertragserfüllung (Anfrage beantworten), berechtigtes Interesse, Einwilligung</td></tr>
<tr><td><b>Zweckbindung</b></td><td>Daten nur für den Zweck nutzen, für den sie erhoben wurden</td><td>Anfrage-Daten nicht einfach für Werbung verwenden</td></tr>
<tr><td><b>Datenminimierung</b></td><td>So wenig Daten wie nötig</td><td>Namen vor dem Hochladen entfernen, wenn sie für die Aufgabe egal sind</td></tr>
<tr><td><b>Speicherbegrenzung</b></td><td>Nicht länger speichern als nötig</td><td>Chatverläufe und Logs regelmäßig löschen</td></tr>
<tr><td><b>Transparenz</b></td><td>Betroffene müssen informiert sein</td><td>Datenschutzerklärung nennt die KI-Dienste</td></tr>
<tr><td><b>Sicherheit</b></td><td>Daten schützen</td><td>Zugänge sichern, keine Keys im Klartext</td></tr>
</table>

<h4>Teil 3: Der AVV</h4>
<p>Wenn ein Dienstleister personenbezogene Daten <b>in deinem Auftrag</b> verarbeitet, brauchst du einen <b>Auftragsverarbeitungsvertrag (AVV)</b>, auch DPA (Data Processing Agreement) genannt. Darin verpflichtet sich der Anbieter, die Daten nur nach deiner Weisung zu verarbeiten und zu schützen.</p>
<ul>
<li>Bei KI-Anbietern gibt es AVVs meist für Business-Tarife und die API, oft als Online-Zustimmung.</li>
<li>Jeder Baustein zählt: KI-Anbieter, Make/n8n-Cloud, Datenbank, Mail-Dienst.</li>
<li>Private Gratis-Konten haben in der Regel <b>keinen</b> AVV und sind deshalb für fremde Personendaten tabu.</li>
</ul>

<h4>Teil 4: Serverstandort und Drittländer</h4>
<p>Daten innerhalb der EU sind am einfachsten. Für Übermittlungen in die USA braucht es zusätzliche Absicherung, z. B. eine Zertifizierung des Anbieters nach dem <b>EU-US Data Privacy Framework</b> oder Standardvertragsklauseln [Stand prüfen]. Viele Anbieter bieten inzwischen Verarbeitung in der EU an.</p>

<h4>Teil 5: Training mit deinen Daten?</h4>
<p>Eine zentrale Frage: <b>Nutzt der Anbieter deine Eingaben, um seine Modelle zu trainieren?</b></p>
<ul>
<li>Bei API und Business-Tarifen ist das meist ausgeschlossen.</li>
<li>Bei Verbraucher-Konten hängt es von den Einstellungen ab. Prüfe die Datenschutz-Einstellungen deines Kontos.</li>
<li>Immer in den aktuellen Bedingungen nachlesen, sie ändern sich.</li>
</ul>

<h4>Teil 6: Praktische Werkzeuge</h4>
<ul>
<li><b>Pseudonymisieren:</b> Namen durch Platzhalter ersetzen („Musiker A“, „Kunde 17“), bevor Texte in die KI gehen.</li>
<li><b>Anonymisieren:</b> Alles entfernen, was Rückschlüsse erlaubt. Dann gilt die DSGVO nicht mehr, das ist aber schwerer, als es klingt.</li>
<li><b>Verzeichnis von Verarbeitungstätigkeiten:</b> Eine Liste, welche Daten wofür mit welchen Tools verarbeitet werden. Auch Vereine brauchen das in der Regel.</li>
<li><b>Datenschutz-Folgenabschätzung (DSFA):</b> Bei riskanten Verarbeitungen (viele sensible Daten, Bewertung von Personen) Pflicht.</li>
</ul>
<div class="tip">Die 3-Fragen-Probe vor jeder KI-Nutzung mit Personendaten: 1) Brauche ich die Personendaten für diese Aufgabe überhaupt? 2) Hat das Tool einen AVV? 3) Würde die betroffene Person es in Ordnung finden?</div>`,
      keys: [
        "Personenbezogen = jeder Bezug zu einer bestimmbaren Person, auch Stimme",
        "Grundsätze: Rechtsgrundlage, Zweck, Minimierung, Speicherbegrenzung, Transparenz, Sicherheit",
        "AVV mit jedem Dienstleister, der Daten für dich verarbeitet",
        "Serverstandort und Trainingsnutzung prüfen",
        "Pseudonymisieren, Verzeichnis führen, 3-Fragen-Probe"
      ],
      quiz: [
        { t: "mc", q: "Was ist ein AVV?", o: ["Ein KI-Modell", "Ein Auftragsverarbeitungsvertrag mit einem Dienstleister", "Eine Abkürzung für Automatisierung", "Ein Verein"], a: 1, e: "Pflicht, wenn ein Dienstleister personenbezogene Daten für dich verarbeitet." },
        { t: "tf", q: "Eine Stimmaufnahme kann ein personenbezogenes Datum sein.", a: true, e: "Wichtig für Voice Agents in Zone 5." },
        { t: "match", q: "Ordne den DSGVO-Grundsatz zu.", p: [["Nur nötige Daten verarbeiten", "Datenminimierung"], ["Daten nicht ewig aufheben", "Speicherbegrenzung"], ["Anfrage-Daten nicht für Werbung nutzen", "Zweckbindung"], ["In der Datenschutzerklärung informieren", "Transparenz"]], e: "Die Grundsätze gelten auch für KI." },
        { t: "mc", q: "Was bedeutet Pseudonymisieren?", o: ["Daten verschlüsseln", "Namen durch Platzhalter wie „Musiker A“ ersetzen", "Daten löschen", "Ein Pseudonym als Künstlername wählen"], a: 1, e: "So bleibt die Aufgabe lösbar, ohne echte Namen preiszugeben." },
        { t: "mc", q: "Warum ist ein privates Gratis-KI-Konto für Mitgliederdaten ungeeignet?", o: ["Es ist zu langsam", "Es gibt in der Regel keinen AVV, und Eingaben können zum Training genutzt werden", "Es hat zu wenig Speicher", "Es ist zu teuer"], a: 1, e: "Fremde Personendaten gehören nur in Tools mit AVV." },
        { t: "tf", q: "Bei Business-Tarifen sollte man trotzdem prüfen, ob Eingaben zum Training genutzt werden.", a: true, e: "Immer in den aktuellen Bedingungen nachlesen." },
        { t: "order", q: "Die 3-Fragen-Probe in sinnvoller Reihenfolge:", o: ["Brauche ich die Personendaten überhaupt?", "Hat das Tool einen AVV?", "Würde die betroffene Person es in Ordnung finden?"], e: "Erst vermeiden, dann absichern, dann Fairness prüfen." }
      ],
      practice: {
        task: "Du willst Mitgliederanfragen per KI beantworten lassen. Schreibe eine Datenschutz-Checkliste mit 6 Punkten und formuliere einen Satz für die Datenschutzerklärung.",
        hint: "Rechtsgrundlage, Anbieter + AVV, Serverstandort, Training, Minimierung, Löschfristen, Information.",
        solution: "1) Rechtsgrundlage: Beantwortung von Mitgliederanfragen (Mitgliedschaftsverhältnis). 2) Anbieter mit AVV wählen, AVV abschließen und ablegen. 3) Serverstandort EU oder gleichwertige Garantie prüfen. 4) Training mit unseren Daten ausschließen. 5) Nur Name und Anfrage übergeben, keine Bankdaten, keine Gesundheitsinfos. 6) Chatverläufe nach 90 Tagen löschen. Eintrag ins Verarbeitungsverzeichnis.\nDatenschutzerklärung: „Zur Beantwortung von Anfragen setzen wir einen KI-Dienst von [Anbieter] ein. Dabei werden Ihr Name und Ihre Nachricht auf Grundlage eines Auftragsverarbeitungsvertrags verarbeitet und nicht zum Training von KI-Modellen genutzt.“"
      }
    },
    {
      id: "z4l5",
      title: "Der EU AI Act",
      icon: "🇪🇺",
      lesson: `
<p>Der <b>EU AI Act</b> (auf Deutsch: KI-Verordnung) ist das erste umfassende KI-Gesetz der Welt. Er gilt seit dem 1. August 2024 und wird <b>schrittweise</b> anwendbar. Die DSGVO schützt Daten. Der AI Act schützt Menschen vor riskanten <b>KI-Systemen</b>, unabhängig davon, ob Personendaten im Spiel sind. Beide gelten nebeneinander.</p>
<p><i>Auch hier: Überblick, keine Rechtsberatung.</i></p>

<h4>Teil 1: Wer ist betroffen?</h4>
<ul>
<li><b>Anbieter:</b> Wer ein KI-System entwickelt und auf den Markt bringt.</li>
<li><b>Betreiber:</b> Wer ein KI-System beruflich <b>einsetzt</b>, also auch ein Verein, ein Orchester oder ein Selbstständiger, der einen Chatbot auf der Website hat.</li>
<li>Rein private Nutzung („Ich lasse mir ein Gedicht schreiben“) fällt nicht darunter.</li>
</ul>

<h4>Teil 2: Die Risikopyramide</h4>
<table>
<tr><th>Stufe</th><th>Beispiele</th><th>Folge</th></tr>
<tr><td>🚫 <b>Unannehmbares Risiko</b></td><td>Social Scoring durch Behörden, manipulative KI, die Schwächen ausnutzt, Emotionserkennung am Arbeitsplatz und in Schulen, ungezieltes Sammeln von Gesichtsbildern</td><td><b>Verboten</b> (seit Februar 2025)</td></tr>
<tr><td>⚠️ <b>Hohes Risiko</b></td><td>KI bei Bewerberauswahl, Leistungsbewertung von Beschäftigten, Zugang zu Bildung und Prüfungen, Kreditwürdigkeit, kritische Infrastruktur</td><td>Strenge Pflichten: Risikomanagement, Datenqualität, Dokumentation, menschliche Aufsicht</td></tr>
<tr><td>ℹ️ <b>Begrenztes Risiko</b></td><td>Chatbots, KI-generierte Bilder, Texte, Stimmen, Deepfakes</td><td><b>Transparenz</b>: Es muss erkennbar sein, dass KI im Spiel ist</td></tr>
<tr><td>✅ <b>Minimales Risiko</b></td><td>Spamfilter, Rechtschreibhilfe, KI in Videospielen</td><td>Keine besonderen Pflichten</td></tr>
</table>
<div class="ex">Eine Musikhochschule lässt KI Aufnahmeprüfungs-Bewerbungen vorsortieren → <b>Hochrisiko</b> (Zugang zu Bildung). Ein Ensemble hat einen FAQ-Chatbot → <b>begrenztes Risiko</b>, Hinweis „Ich bin eine KI“ genügt. Ein Verein nutzt KI zum Formulieren des Newsletters → <b>minimal</b>.</div>

<h4>Teil 3: Transparenzpflichten im Alltag</h4>
<ul>
<li><b>Chatbots und Voice Agents</b> müssen sich als KI zu erkennen geben, wenn es nicht offensichtlich ist.</li>
<li><b>Deepfakes</b> (realistisch wirkende künstliche Bilder, Videos, Stimmen echter Personen) müssen gekennzeichnet werden.</li>
<li><b>KI-generierte Texte</b>, die die Öffentlichkeit über Angelegenheiten von öffentlichem Interesse informieren, müssen in der Regel gekennzeichnet werden, außer ein Mensch hat sie redaktionell geprüft und verantwortet.</li>
<li><b>Anbieter</b> von generativer KI müssen ihre Ergebnisse maschinenlesbar markieren (Wasserzeichen).</li>
</ul>

<h4>Teil 4: KI-Kompetenz (Artikel 4)</h4>
<p>Seit Februar 2025 gilt: Wer KI-Systeme beruflich einsetzt, soll dafür sorgen, dass die beteiligten Personen <b>ausreichend KI-Kompetenz</b> haben, angepasst an ihr Vorwissen und den Einsatzzweck. Der Digital Omnibus hat diese Pflicht zwar abgeschwächt, aber nicht abgeschafft [Prüfen]. Genau dafür gibt es Schulungen wie den KI-Manager. Praktisch heißt das: Mitarbeitende kennen Chancen, Grenzen, Halluzinationen und Datenschutzregeln.</p>

<h4>Teil 5: Der Zeitplan nach dem Digital Omnibus</h4>
<p>2026 hat die EU mit dem <b>Digital Omnibus on AI</b> den Zeitplan angepasst. Der AI Act gilt weiter, einige Fristen wurden aber verschoben:</p>
<table>
<tr><th>Was</th><th>Ab wann</th></tr>
<tr><td>Inkrafttreten</td><td>1. August 2024</td></tr>
<tr><td>Verbote + KI-Kompetenz</td><td>2. Februar 2025</td></tr>
<tr><td>Pflichten für Anbieter großer KI-Modelle (GPAI)</td><td>2. August 2025</td></tr>
<tr><td>Kennzeichnung KI-generierter Inhalte (Wasserzeichen)</td><td>2. Dezember 2026</td></tr>
<tr><td>Hochrisiko-Systeme (Anhang III, z. B. Personal, Bildung)</td><td>2. Dezember 2027</td></tr>
<tr><td>Hochrisiko-KI in regulierten Produkten (Anhang I)</td><td>2. August 2028</td></tr>
</table>
<div class="tip">Die Verschiebung ist kein Grund, abzuwarten. Wer jetzt sauber dokumentiert, welche KI wofür genutzt wird, ist später auf der sicheren Seite.</div>

<h4>Teil 6: Was du als Betreiber praktisch tun solltest</h4>
<ol>
<li><b>Inventur:</b> Liste aller KI-Tools, die genutzt werden, und wofür.</li>
<li><b>Einstufen:</b> Welche Risikostufe hat jeder Einsatz?</li>
<li><b>Transparenz umsetzen:</b> Bots kennzeichnen, KI-Inhalte wo nötig markieren.</li>
<li><b>Kompetenz sichern:</b> Schulung und einfache Richtlinie.</li>
<li><b>Hochrisiko vermeiden oder ernst nehmen:</b> Bei Personal- oder Bildungsentscheidungen immer Mensch entscheidet, Fachberatung holen.</li>
</ol>`,
      keys: [
        "AI Act schützt vor riskanten KI-Systemen, gilt neben der DSGVO",
        "Auch Betreiber (Nutzer im Beruf) haben Pflichten",
        "Risikopyramide: verboten → hoch → begrenzt (Transparenz) → minimal",
        "KI-Kompetenzpflicht seit Feb. 2025",
        "Digital Omnibus: Hochrisiko ab Dez. 2027, Wasserzeichen ab Dez. 2026",
        "Praktisch: Inventur, Einstufen, Kennzeichnen, Schulen"
      ],
      quiz: [
        { t: "order", q: "Ordne die Risikoklassen von streng nach locker.", o: ["Unannehmbares Risiko (verboten)", "Hohes Risiko", "Begrenztes Risiko", "Minimales Risiko"], e: "Je höher das Risiko, desto strenger die Regeln." },
        { t: "match", q: "Ordne das Beispiel der Risikoklasse zu.", p: [["Emotionserkennung am Arbeitsplatz", "Verboten"], ["KI sortiert Bewerbungen für eine Hochschule", "Hohes Risiko"], ["FAQ-Chatbot auf der Website", "Begrenztes Risiko"], ["Rechtschreibhilfe", "Minimales Risiko"]], e: "Bildung und Personal sind klassische Hochrisiko-Bereiche." },
        { t: "tf", q: "Ein Chatbot muss erkennbar machen, dass man mit einer KI spricht.", a: true, e: "Transparenzpflicht." },
        { t: "mc", q: "Wer ist ein „Betreiber“ im Sinne des AI Act?", o: ["Nur große Tech-Konzerne", "Wer ein KI-System beruflich einsetzt, z. B. auch ein Verein mit Website-Chatbot", "Nur Behörden", "Jeder Privatmensch"], a: 1, e: "Auch kleine Organisationen können Betreiber sein." },
        { t: "mc", q: "Was hat der „Digital Omnibus“ 2026 am AI Act geändert?", o: ["Er hat den AI Act abgeschafft", "Er hat u. a. die Hochrisiko-Pflichten auf Dezember 2027 verschoben", "Er hat alle KI verboten", "Nichts"], a: 1, e: "Der AI Act gilt weiter, nur der Zeitplan wurde angepasst." },
        { t: "mc", q: "Was verlangt Artikel 4 (KI-Kompetenz)?", o: ["Dass alle programmieren lernen", "Dass Menschen, die beruflich KI einsetzen, ausreichend geschult sind", "Dass KI verboten wird", "Dass jeder ein Zertifikat hat"], a: 1, e: "Kompetenz angepasst an Vorwissen und Einsatz." },
        { t: "order", q: "Sinnvolle Reihenfolge für Betreiber:", o: ["Inventur aller KI-Tools", "Jeden Einsatz einstufen", "Transparenz umsetzen", "Kompetenz durch Schulung sichern"], e: "Erst wissen, was man nutzt, dann einordnen, dann handeln." }
      ],
      practice: {
        task: "Mach eine KI-Inventur für dein Umfeld: Liste 4 KI-Einsätze (eigene oder geplante), ordne jedem eine Risikostufe zu und schreibe, was du jeweils tun musst.",
        hint: "Geht es um Entscheidungen über Menschen? Spricht die KI mit Menschen? Entstehen Inhalte, die veröffentlicht werden?",
        solution: "1) Newsletter-Texte mit KI formulieren → minimal; ein Mensch prüft und verantwortet, keine Kennzeichnung nötig. 2) FAQ-Chatbot auf der Vereinsseite → begrenzt; Hinweis „Ich bin eine KI“. 3) KI-generiertes Konzertplakat mit realistischem Foto eines echten Musikers → Deepfake-Risiko; kennzeichnen und Einwilligung einholen. 4) KI-Vorauswahl von Bewerbern für die Akademie → hohes Risiko; besser vermeiden, sonst Mensch entscheidet, Fachberatung, ab Dez. 2027 volle Pflichten."
      }
    }
  ]
});
