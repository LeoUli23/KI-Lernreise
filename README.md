# 🧠 KI-Lernreise

Interaktive Lern-App mit Gamification: von den KI-Grundlagen bis zu **Claude Code**.

Die App orientiert sich am Aufbau der Kurse **KI-Manager** und **Claude Code Masterclass** von [kilernen.de](https://kilernen.de) und bereitet auf sie vor. Alle Texte und Aufgaben sind eigenständig formuliert. Die Kurse und ihre offizielle Zertifizierung ersetzt die App nicht.

## Starten

- **Online:** über GitHub Pages (Link in der Repo-Beschreibung, sobald Pages aktiv ist)
- **Offline:** `index.html` herunterladen und im Browser öffnen. Es gibt keine Abhängigkeiten und keine Installation.

## Inhalt

| Zone | Thema | Levels |
|---|---|---|
| 🚀 Start | So funktioniert die Lernreise | 1 |
| 🧠 1 | KI-Fundament: Geschichte, Rolle des KI-Managers, ML, LLMs, Halluzinationen, Agenten, Strategie | 8 |
| ⚙️ 2 | Tools und Automation: APIs, Webhooks, Make, n8n, RAG, Microsoft 365 | 6 |
| 💬 3 | Prompt Engineering: Few-Shot, Chain/Tree of Thought, Chaining, eigene Assistenten | 7 |
| ⚖️ 4 | Praxis und Recht: Chatbots, Corporate LLM, Vertrieb, DSGVO, EU AI Act | 5 |
| 📞 5 | Voice Agents: STT/LLM/TTS, Plattformen, Telefonie, Tools, Datenschutz | 5 |
| 🔭 6 | Ausblick und Business: Ethik, Geschäftsmodelle, Kundengewinnung, Verhandlung | 4 |
| 💻 7 | Claude Code: Installation, CLAUDE.md, Berechtigungen, Plan Mode, Skills, Subagents, Hooks, MCP, Git | 13 |
| 🐉 | Endboss: Abschlussprüfung (25 Fragen, 80 % zum Bestehen) | 1 |

Jedes Level besteht aus einer Lerneinheit, einem Quiz (Multiple Choice, Wahr/Falsch, Reihenfolge, Zuordnen) und einer Praxisaufgabe mit Musterlösung.

## Gamification

XP · 8 Ränge (KI-Neuling → Agent-Meister) · Tages-Streak · 3 Herzen pro Quiz · 16 Badges · Wiederholungs-Modus für Fehler · Endboss · druckbare Urkunde · Export/Import des Fortschritts

## Entwickeln

Die Inhalte liegen in `src/*.js`, die Logik in `app.js` und das Layout in `template.html`.

```bash
node build.js   # erzeugt dist/index.html
cp dist/index.html index.html
```

Der Fortschritt wird nur lokal im Browser gespeichert (localStorage).
