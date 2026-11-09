# 🧠 KI-Lernreise

Interaktive Lern-App mit Gamification: von den KI-Grundlagen bis zu **Claude Code**.

Die App orientiert sich am Aufbau der Kurse **KI-Manager** und **Claude Code Masterclass** von [kilernen.de](https://kilernen.de) und bereitet auf sie vor. Die Kurse und ihre offizielle Zertifizierung ersetzt die App nicht. Für ein tieferes Verständnis sind außerdem Inhalte aus den frei verfügbaren Kursen von Anthropic eingearbeitet (siehe [Quellen und Lizenzen](#quellen-und-lizenzen)).

## Starten

- **Online:** https://leouli23.github.io/KI-Lernreise/ (sobald GitHub Pages aktiv ist)
- **Offline:** `index.html` herunterladen und im Browser öffnen. Es gibt keine Abhängigkeiten und keine Installation.

## Inhalt

65 Levels mit 426 Quizfragen in 8 Zonen:

| Zone | Thema | Levels |
|---|---|---|
| 🚀 Start | So funktioniert die Lernreise | 1 |
| 🧠 1 | KI-Fundament: Geschichte, Rolle des KI-Managers, ML, LLMs, Halluzinationen, Agenten, Strategie | 8 |
| ⚙️ 2 | Tools und Automation: APIs, Webhooks, **Claude per API (erster Aufruf, Parameter, Streaming, Bilder, Tool Use)**, Make, n8n, RAG, Microsoft 365 | 11 |
| 💬 3 | Prompt Engineering: **Grundstruktur, klar und direkt, Rollen, Daten und Anweisungen trennen, Ausgabeformat**, Chain of Thought, Few-Shot, **Halluzinationen verhindern, komplexe Prompts**, Chaining, Modellwahl, eigene Assistenten, **Prompt-Lebenszyklus, Praxisfälle, Evals** | 17 |
| ⚖️ 4 | Praxis und Recht: Chatbots, Corporate LLM, Vertrieb, DSGVO, EU AI Act | 5 |
| 📞 5 | Voice Agents: STT/LLM/TTS, Plattformen, Telefonie, Tools, Datenschutz | 5 |
| 🔭 6 | Ausblick und Business: Ethik, Geschäftsmodelle, Kundengewinnung, Verhandlung | 4 |
| 💻 7 | Claude Code: Installation, CLAUDE.md, Berechtigungen, Plan Mode, Skills, Subagents, Hooks, MCP, Git, **Lernquellen von Anthropic** | 14 |
| 🐉 | Endboss: Abschlussprüfung (25 Fragen, 80 % zum Bestehen) | 1 |

Jedes Level besteht aus einer Lerneinheit, einem Quiz (Multiple Choice, Wahr/Falsch, Reihenfolge, Zuordnen) und einer Übung mit Musterlösung. Es gibt drei Arten von Übungen:

- **🛠️ Praxisaufgabe:** eigene Lösung schreiben, mit der Musterlösung vergleichen
- **🧪 Prompt-Werkstatt:** einen Prompt bauen; eine Checkliste erkennt vieles automatisch, der Rest wird ehrlich selbst abgehakt. Sind alle Kriterien erfüllt, gibt es Bonus-XP
- **🐍 Python-Übung:** Startcode mit Aufgaben, Musterlösung und eine Anleitung zum Ausführen (am einfachsten über Claude Code)

## Neue und überarbeitete Levels

Wer die App schon vor einem Update benutzt hat, sieht, was sich geändert hat:

- **NEU** markiert Levels, die nach dem eigenen Start dazugekommen sind.
- **AKTUALISIERT** markiert abgeschlossene Levels, deren Lektion seitdem überarbeitet wurde. Die Markierung verschwindet, sobald die Lektion bis „Verstanden, zum Quiz“ gelesen wurde.
- **🧩 Deine Lücken** listet beides an einer Stelle. Lücken blockieren nichts: Der Fortschritt auf der Karte und der Endboss bleiben erreichbar.

Der Änderungsstand steht in `src/zz_meta.js`.

## Gamification

XP · 8 Ränge (KI-Neuling → Agent-Meister) · Tages-Streak · 3 Herzen pro Quiz · 19 Badges · Werkstatt-Bonus · Wiederholungs-Modus für Fehler · Endboss · druckbare Urkunde · Export/Import des Fortschritts

## Quellen und Lizenzen

Teile der Zonen 2, 3 und 7 sind sinngemäß übertragen, gekürzt, ergänzt und an aktuelle Modelle angepasst nach den **Anthropic Courses** ([github.com/anthropics/courses](https://github.com/anthropics/courses)): Anthropic API Fundamentals, Prompt Engineering Interactive Tutorial, Real World Prompting, Prompt Evaluations und Tool Use. © Anthropic, Lizenz [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.de). Diese Teile dürfen nur nicht kommerziell genutzt werden. Jedes betroffene Level nennt und verlinkt seine Quellen direkt in der Lektion.

Weitere verlinkte Lernquellen:

- [Claude Academy](https://academy.claude.com): kostenlose Kurse mit Zertifikat
- [Claude Cookbooks](https://github.com/anthropics/claude-cookbooks) (MIT)
- [Claude Quickstarts](https://github.com/anthropics/claude-quickstarts) (MIT)
- [Anthropic Skills](https://github.com/anthropics/skills) und der offene Standard [Agent Skills](https://agentskills.io/specification)
- [Claude-Dokumentation](https://platform.claude.com/docs) und [Claude-Code-Dokumentation](https://code.claude.com/docs/de/overview)

## Entwickeln

Die Inhalte liegen in `src/*.js` (eine Datei pro Zone, dazu `zz_meta.js` für den Änderungsstand), die Logik in `app.js` und das Layout in `template.html`.

```bash
node build.js   # erzeugt dist/index.html
cp dist/index.html index.html
```

Der Fortschritt wird nur lokal im Browser gespeichert (localStorage).
