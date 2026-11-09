// Änderungsstand der Levels für die Lücken-Anzeige.
// updated: Level wurde an diesem Tag überarbeitet → „AKTUALISIERT“ für alle, die es vorher abgeschlossen haben.
// added:   Level kam an diesem Tag neu dazu → „NEU“ für alle, die vorher gestartet sind.
// src:     zusätzliche Quellen-Links für bestehende Levels.
(function () {
  var updated = {};
  ["z2l3", "z2l4", "z2l5", "z2l6", "z3l1", "z3l5", "z3l6", "z3l7",
   "z4l1", "z4l2", "z4l3", "z4l4", "z4l5",
   "z5l1", "z5l2", "z5l3", "z5l4", "z5l5",
   "z6l1", "z6l2", "z6l3", "z6l4",
   "z7l1", "z7l2", "z7l3", "z7l4", "z7l5", "z7l6", "z7l7", "z7l9", "z7l10", "z7l11", "z7l12", "z7l13"
  ].forEach(function (id) { updated[id] = "2026-11-08"; });
  ["z3l2", "z3l3", "z3l4", "z7l8"].forEach(function (id) { updated[id] = "2026-11-09"; });

  var added = {};
  ["z2api1", "z2api2", "z2api3", "z2tool1", "z2tool2",
   "z3pe1", "z3pe2", "z3pe3", "z3pe4", "z3pe5", "z3pe6", "z3pe7",
   "z3rw1", "z3rw2", "z3ev1", "z7src"
  ].forEach(function (id) { added[id] = "2026-11-09"; });

  window.LEVEL_META = {
    updated: updated,
    added: added,
    src: {
      z2l5: [
        { t: "Claude Cookbooks: RAG mit Claude, Schritt für Schritt (englisch)", u: "https://github.com/anthropics/claude-cookbooks/tree/main/capabilities/retrieval_augmented_generation" }
      ],
      z3l6: [
        { t: "Claude Quickstarts: Kundenservice-Agent als Vorlage (englisch)", u: "https://github.com/anthropics/claude-quickstarts" }
      ],
      z3l7: [
        { t: "Claude Cookbooks: Bilder, Diagramme und PDFs verstehen (englisch)", u: "https://github.com/anthropics/claude-cookbooks/tree/main/multimodal" }
      ],
      z4l1: [
        { t: "Claude Cookbooks: Text zu SQL (englisch)", u: "https://github.com/anthropics/claude-cookbooks/tree/main/capabilities/text_to_sql" }
      ],
      z7l11: [
        { t: "Claude Academy: Introduction to MCP (englisch)", u: "https://academy.claude.com" }
      ]
    }
  };
})();
