(function () {
  "use strict";

  // ---------- Daten ----------
  const ZONES = window.ZONES;
  const LEVELS = [];
  ZONES.forEach((z, zi) => z.levels.forEach((l, li) => LEVELS.push(Object.assign({}, l, { zone: z, zi: zi, li: li }))));
  const LEVEL_BY_ID = {};
  LEVELS.forEach((l, i) => { l.idx = i; LEVEL_BY_ID[l.id] = l; });
  const QUESTIONS = {};
  LEVELS.forEach(l => l.quiz.forEach((q, i) => { QUESTIONS[l.id + "#" + i] = { q: q, level: l, qid: l.id + "#" + i }; }));

  const META = window.LEVEL_META || {};
  LEVELS.forEach(l => {
    if (META.updated && META.updated[l.id]) l.updated = META.updated[l.id];
    if (META.added && META.added[l.id]) l.added = META.added[l.id];
    if (META.src && META.src[l.id]) l.src = (l.src || []).concat(META.src[l.id]);
  });
  const ACADEMY_LEVELS = LEVELS.filter(l => l.src && l.src.some(x => x.lic));

  const RANKS = [
    { n: "KI-Neuling", xp: 0, i: "🌱" },
    { n: "Prompt-Lehrling", xp: 300, i: "✏️" },
    { n: "Tool-Entdecker", xp: 900, i: "🧭" },
    { n: "Automations-Bastler", xp: 1700, i: "🔧" },
    { n: "KI-Praktiker", xp: 2600, i: "⚡" },
    { n: "KI-Manager", xp: 3600, i: "🎩" },
    { n: "Code-Pilot", xp: 4700, i: "🛩️" },
    { n: "Agent-Meister", xp: 5800, i: "👑" }
  ];

  const XP = { correct: 10, level: 50, perfect: 25, practice: 20, werkstatt: 10, replay: 2, review: 5, boss: 300 };
  const BOSS_COUNT = 25, BOSS_PASS = 20;

  const SPECIAL_BADGES = [
    { id: "first", n: "Erster Schritt", i: "🐣", d: "Erstes Level abgeschlossen", t: () => doneCount() >= 1 },
    { id: "half", n: "Halbzeit", i: "🌗", d: "Die Hälfte aller Levels abgeschlossen", t: () => doneCount() >= Math.ceil(LEVELS.length / 2) },
    { id: "perfect5", n: "Perfektionist", i: "💎", d: "5 Levels ohne einen Fehler", t: () => perfectCount() >= 5 },
    { id: "practice10", n: "Macher", i: "🛠️", d: "10 Praxisaufgaben erledigt", t: () => Object.keys(S.practice).length >= 10 },
    { id: "review10", n: "Fehlerjäger", i: "🎯", d: "10 Fehler im Wiederholungs-Modus ausgebügelt", t: () => S.reviewFixed >= 10 },
    { id: "streak3", n: "Dranbleiber", i: "🔥", d: "3 Tage in Folge gelernt", t: () => S.streak.best >= 3 },
    { id: "streak7", n: "Wochenserie", i: "📅", d: "7 Tage in Folge gelernt", t: () => S.streak.best >= 7 },
    { id: "boss", n: "Drachenbezwinger", i: "🐉", d: "Endboss-Prüfung bestanden", t: () => S.boss.passed },
    { id: "werkstatt5", n: "Werkstattmeister", i: "🧪", d: "5 Prompt-Werkstätten mit allen Kriterien gelöst", t: () => Object.keys(S.werkstatt || {}).length >= 5 },
    { id: "akademie", n: "Akademie-Absolvent", i: "🎓", d: "Alle Levels mit Inhalten aus den Anthropic-Kursen abgeschlossen", t: () => ACADEMY_LEVELS.length > 0 && ACADEMY_LEVELS.every(l => S.done[l.id]) },
    { id: "lueckenlos", n: "Lückenlos", i: "🧩", d: "Nach einem Update alle Lücken geschlossen", t: () => S.hadGaps && gapCount() === 0 }
  ];
  function allBadges() {
    return ZONES.map(z => ({ id: "zone-" + z.id, n: z.badge.name, i: z.badge.icon, d: "Zone „" + z.title + "“ abgeschlossen", t: () => z.levels.every(l => S.done[l.id]) }))
      .concat(SPECIAL_BADGES);
  }

  // ---------- Zustand ----------
  const KEY = "ki-lernreise-v1";
  function defaults() {
    return { xp: 0, done: {}, wrong: {}, practice: {}, notes: {}, streak: { count: 0, best: 0, last: null },
      badges: {}, boss: { passed: false, best: 0, date: null }, name: "", free: false, reviewFixed: 0, started: Date.now(), werkstatt: {}, hadGaps: false };
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      const s = raw ? JSON.parse(raw) : null;
      const d = defaults();
      if (!s) return d;
      Object.keys(d).forEach(k => { if (s[k] === undefined) s[k] = d[k]; });
      return s;
    } catch (e) { return defaults(); }
  }
  let S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* Speicher nicht verfügbar */ } }

  // ---------- Helfer ----------
  const $ = sel => document.querySelector(sel);
  function h(tag, attrs) {
    const el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(k => {
      const v = attrs[k];
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else if (k === "style") el.setAttribute("style", v);
      else if (v !== false && v != null) el.setAttribute(k, v === true ? "" : v);
    });
    for (let i = 2; i < arguments.length; i++) {
      const c = arguments[i];
      if (c == null || c === false) continue;
      if (Array.isArray(c)) c.forEach(x => x != null && el.append(x));
      else el.append(c);
    }
    return el;
  }
  function put(el) {
    for (let i = 1; i < arguments.length; i++) {
      const c = arguments[i];
      if (c == null || c === false) continue;
      if (Array.isArray(c)) c.forEach(x => x != null && x !== false && el.append(x));
      else el.append(c);
    }
    return el;
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function dateKey(d) { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function yesterdayKey() { const d = new Date(); d.setDate(d.getDate() - 1); return dateKey(d); }
  function doneCount() { return Object.keys(S.done).filter(id => LEVEL_BY_ID[id]).length; }
  function perfectCount() { return Object.keys(S.done).filter(id => S.done[id].perfect).length; }
  function wrongCount() { return Object.keys(S.wrong).filter(q => QUESTIONS[q]).length; }
  function rankIndex(xp) { let r = 0; RANKS.forEach((k, i) => { if (xp >= k.xp) r = i; }); return r; }
  function currentStreak() { const s = S.streak; return (s.last === dateKey() || s.last === yesterdayKey()) ? s.count : 0; }
  function maxDoneIdx() { let m = -1; LEVELS.forEach(l => { if (S.done[l.id] && l.idx > m) m = l.idx; }); return m; }
  // Freigeschaltet ist alles bis zum weitesten erledigten Level + 1. Neu eingefügte Levels sperren den Fortschritt nicht.
  function isUnlocked(l) { return S.free || l.idx <= maxDoneIdx() + 1; }
  function bossUnlocked() { return S.free || S.boss.passed || LEVELS.every(l => S.done[l.id] || isNewForUser(l)); }
  function nextLevel() { const m = maxDoneIdx(); return LEVELS.find(l => l.idx > m && !S.done[l.id]) || LEVELS.find(l => !S.done[l.id]); }
  function startedKey() { return dateKey(new Date(S.started || Date.now())); }
  function isNewForUser(l) { return !!(l.added && !S.done[l.id] && startedKey() < l.added); }
  function isOutdated(l) { const d = S.done[l.id]; return !!(d && l.updated && (d.seen || d.date || "") < l.updated); }
  function gapLevels() { const m = maxDoneIdx(); return { neu: LEVELS.filter(l => !S.done[l.id] && l.idx < m), upd: LEVELS.filter(isOutdated) }; }
  function gapCount() { const g = gapLevels(); return g.neu.length + g.upd.length; }
  function copyText(t) {
    const fallback = () => {
      const ta = h("textarea", { style: "position:fixed;top:-1000px;opacity:0" }); ta.value = t; document.body.append(ta); ta.select();
      try { document.execCommand("copy"); toast("📋 Kopiert"); } catch (e) { toast("⚠️ Kopieren nicht möglich"); }
      ta.remove();
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(t).then(() => toast("📋 Kopiert"), fallback); else fallback();
  }
  function addCopyButtons(root) {
    root.querySelectorAll("pre").forEach(pre => {
      if (pre.querySelector(".copybtn")) return;
      const b = h("button", { class: "copybtn", title: "Kopieren", onclick: e => { e.stopPropagation(); copyText(pre.dataset.raw || pre.innerText.replace(/^📋\s*/, "")); } }, "📋");
      pre.dataset.raw = pre.innerText; pre.append(b);
    });
  }
  function fmt(n) { return n.toLocaleString("de-DE"); }

  // ---------- XP, Streak, Badges ----------
  function touchStreak() {
    const t = dateKey(), s = S.streak;
    if (s.last === t) return;
    s.count = (s.last === yesterdayKey()) ? s.count + 1 : 1;
    s.last = t;
    s.best = Math.max(s.best, s.count);
    if (s.count > 1) toast("🔥 " + s.count + " Tage in Folge!");
  }
  function addXP(n) {
    if (n <= 0) return;
    const before = rankIndex(S.xp);
    S.xp += n;
    touchStreak();
    save();
    renderTop();
    const after = rankIndex(S.xp);
    if (after > before) {
      const r = RANKS[after];
      setTimeout(() => { confetti(); modal(r.i, "Neuer Rang!", "Du bist jetzt <b>" + r.n + "</b>.", "Weiter"); }, 400);
    }
  }
  function checkBadges() {
    const fresh = [];
    allBadges().forEach(b => { if (!S.badges[b.id] && b.t()) { S.badges[b.id] = dateKey(); fresh.push(b); } });
    save();
    fresh.forEach((b, i) => setTimeout(() => toast(b.i + " Badge freigeschaltet: " + b.n), 700 + i * 900));
    if (fresh.length) setTimeout(confetti, 600);
  }

  // ---------- Toast, Modal, Konfetti ----------
  function toast(text) {
    const t = h("div", { class: "toast" }, text);
    $("#toasts").append(t);
    setTimeout(() => t.remove(), 3200);
  }
  function modal(icon, title, html, btn, onClose) {
    const m = h("div", { id: "modal" },
      h("div", { class: "card" },
        h("div", { class: "big" }, icon),
        h("h2", null, title),
        h("p", { html: html }),
        h("button", { class: "btn wide", onclick: () => { m.remove(); if (onClose) onClose(); } }, btn || "OK")));
    document.body.append(m);
  }
  function confetti() {
    const c = $("#confetti"), ctx = c.getContext("2d");
    c.width = innerWidth; c.height = innerHeight;
    const colors = ["#8b5cf6", "#f59e0b", "#10b981", "#ef4444", "#0ea5e9", "#ec4899"];
    const parts = Array.from({ length: 140 }, () => ({
      x: c.width / 2 + (Math.random() - .5) * 120, y: c.height / 3,
      vx: (Math.random() - .5) * 14, vy: Math.random() * -12 - 4,
      s: Math.random() * 7 + 4, r: Math.random() * 6, vr: (Math.random() - .5) * .3,
      col: colors[(Math.random() * colors.length) | 0]
    }));
    let f = 0;
    (function step() {
      ctx.clearRect(0, 0, c.width, c.height);
      parts.forEach(p => {
        p.vy += .35; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.vx *= .99;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.col;
        ctx.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * .66); ctx.restore();
      });
      if (++f < 150) requestAnimationFrame(step); else ctx.clearRect(0, 0, c.width, c.height);
    })();
  }

  // ---------- Kopfzeile & Navigation ----------
  function renderTop() {
    const ri = rankIndex(S.xp), r = RANKS[ri], nx = RANKS[ri + 1];
    const pct = nx ? Math.round((S.xp - r.xp) / (nx.xp - r.xp) * 100) : 100;
    const st = currentStreak();
    $("#top").innerHTML = "";
    $("#top").append(h("div", { class: "topin" },
      h("div", { class: "brand" }, "🧠 KI-Lernreise"),
      h("div", { class: "rankbox" },
        h("div", { class: "rankname" }, h("span", null, r.i + " " + r.n), h("span", null, nx ? fmt(S.xp) + " / " + fmt(nx.xp) + " XP" : fmt(S.xp) + " XP")),
        h("div", { class: "bar" }, h("i", { style: "width:" + pct + "%" }))),
      h("div", { class: "pill streak" + (st ? "" : " off"), title: "Streak: Tage in Folge" }, "🔥 " + st)));
  }
  let VIEW = "map";
  function renderNav() {
    const items = [
      ["map", "🗺️", "Karte"],
      ["gaps", "🧩", "Lücken"],
      ["review", "🔁", "Wiederholen"],
      ["boss", "🐉", "Endboss"],
      ["profile", "🏆", "Erfolge"]
    ];
    const n = $("#nav"); n.innerHTML = "";
    const wc = wrongCount(), gc = gapCount();
    put(n, h("div", { class: "navin" }, items.map(it => h("button", { class: VIEW === it[0] ? "on" : "", onclick: () => go(it[0]) },
      h("span", null, it[1]), it[2], (it[0] === "review" && wc) ? h("b", { class: "cnt" }, String(wc)) : (it[0] === "gaps" && gc) ? h("b", { class: "cnt" }, String(gc)) : null))));
  }
  function go(view, arg) {
    VIEW = view;
    const app = $("#app"); app.innerHTML = "";
    document.documentElement.style.setProperty("--zc", "#6d28d9");
    $("#nav").classList.toggle("hidden", view === "level");
    renderTop(); renderNav();
    ({ map: viewMap, level: viewLevel, review: viewReview, boss: viewBoss, profile: viewProfile, cert: viewCert, gaps: viewGaps })[view](app, arg);
    if (view !== "map" || !arg) scrollTo(0, 0);
  }

  // ---------- Karte ----------
  const OFFSETS = [0, 55, 85, 55, 0, -55, -85, -55];
  function viewMap(app, scrollToNext) {
    const total = LEVELS.length, done = doneCount(), nl = nextLevel();
    const ri = rankIndex(S.xp);
    put(app, h("div", { class: "hero" },
      h("div", { class: "big" }, RANKS[ri].i),
      h("div", { style: "flex:1" },
        h("h1", null, done === 0 ? "Willkommen auf deiner KI-Lernreise!" : (done === total ? "Alle Levels geschafft!" : "Weiter geht's!")),
        h("div", { class: "muted" }, done + " von " + total + " Levels · " + fmt(S.xp) + " XP · " + Object.keys(S.badges).length + " Badges"),
        h("div", { class: "bar overall" }, h("i", { style: "width:" + Math.round(done / total * 100) + "%" })))));
    const gc = gapCount();
    if (gc) {
      if (!S.hadGaps) { S.hadGaps = true; save(); }
      const g = gapLevels();
      put(app, h("button", { class: "gapcard", onclick: () => go("gaps") },
        h("span", { class: "gi" }, "🧩"),
        h("span", null, h("b", null, gc + (gc === 1 ? " Lücke" : " Lücken")), h("br"),
          h("small", null, [g.neu.length ? g.neu.length + " neue" : "", g.upd.length ? g.upd.length + " überarbeitete" : ""].filter(Boolean).join(" · ") + " Levels hinter deinem Stand")),
        h("span", { class: "go" }, "Ansehen →")));
    }
    if (nl) put(app, h("button", { class: "btn wide", onclick: () => { RUN = null; go("level", nl.id); } }, "▶ " + (done ? "Weiterlernen: " : "Starten: ") + nl.title));
    else if (!S.boss.passed) put(app, h("button", { class: "btn wide", onclick: () => go("boss") }, "🐉 Zum Endboss"));
    else put(app, h("button", { class: "btn wide", onclick: () => go("cert") }, "📜 Deine Urkunde ansehen"));

    let nextEl = null;
    ZONES.forEach((z, zi) => {
      const zl = LEVELS.filter(l => l.zi === zi);
      const zd = zl.filter(l => S.done[l.id]).length;
      const zLocked = !isUnlocked(zl[0]);
      const sec = h("section", { class: "zone" + (zLocked ? " locked" : ""), style: "--zc:" + z.color },
        h("div", { class: "zhead" },
          h("div", { class: "zi" }, zLocked ? "🔒" : z.icon),
          h("div", null, h("h2", null, (zi ? "Zone " + zi + ": " : "") + z.title), h("p", null, z.subtitle)),
          h("div", { class: "zprog" }, zd + "/" + zl.length, h("br"), S.badges["zone-" + z.id] ? z.badge.icon : "")));
      const path = h("div", { class: "path" });
      zl.forEach((l, i) => {
        const un = isUnlocked(l), dn = S.done[l.id], isNext = nl && nl.id === l.id;
        const node = h("div", { class: "node" + (un ? "" : " locked") + (dn ? " done" : "") + (isNext ? " next" : ""), style: "transform:translateX(" + OFFSETS[i % OFFSETS.length] + "px)" },
          isNext ? h("div", { class: "start-tag" }, done ? "Weiter" : "Start") : null,
          h("button", { class: "nbtn", "aria-label": l.title, onclick: () => un ? (RUN = null, go("level", l.id)) : toast("🔒 Schließe zuerst das vorherige Level ab") }, un ? l.icon : "🔒"),
          h("div", { class: "nlabel" }, l.title),
          isNewForUser(l) ? h("span", { class: "ntag" }, "NEU") : null,
          isOutdated(l) ? h("span", { class: "ntag upd" }, "AKTUALISIERT") : null,
          h("div", { class: "stars" }, dn ? "⭐".repeat(dn.stars) + "☆".repeat(3 - dn.stars) : ""));
        if (isNext) nextEl = node;
        put(path, node);
      });
      put(sec, path);
      put(app, sec);
    });
    const bu = bossUnlocked();
    put(app, h("section", { class: "zone" + (bu ? "" : " locked"), style: "--zc:#111827" },
      h("div", { class: "zhead" }, h("div", { class: "zi" }, "🐉"),
        h("div", null, h("h2", null, "Endboss: Abschlussprüfung"), h("p", null, BOSS_COUNT + " Fragen aus allen Zonen · " + BOSS_PASS + " richtige zum Bestehen")),
        h("div", { class: "zprog" }, S.boss.passed ? "✅" : (bu ? "" : "🔒"))),
      h("div", { class: "path" }, h("div", { class: "node bossnode" + (bu ? "" : " locked") },
        h("button", { class: "nbtn", onclick: () => go("boss") }, bu ? "🐉" : "🔒"),
        h("div", { class: "nlabel" }, S.boss.passed ? "Besiegt! Bestwert " + S.boss.best + "/" + BOSS_COUNT : "Endboss")))));
    if (scrollToNext && nextEl) setTimeout(() => nextEl.scrollIntoView({ block: "center", behavior: "smooth" }), 50);
  }

  // ---------- Fragen-Komponente ----------
  const TYPE_LABEL = { mc: "Multiple Choice", tf: "Wahr oder falsch?", order: "Reihenfolge", match: "Zuordnen" };
  function renderQuestion(q, el, opts, done) {
    opts = opts || {};
    el.innerHTML = "";
    const body = h("div");
    const fb = h("div", { class: "feedback hidden" });
    const checkRow = h("div", { class: "sticky-foot" });
    let locked = false;
    el.append(h("div", { class: "qtype" }, (opts.label ? opts.label + " · " : "") + TYPE_LABEL[q.t]), h("h3", { class: "qtext" }, q.q), body, fb, checkRow);

    function finish(ok, solutionText) {
      if (locked) return; locked = true;
      checkRow.innerHTML = "";
      fb.className = "feedback " + (ok ? "ok" : "no");
      fb.innerHTML = "";
      put(fb, 
        h("h4", null, ok ? "✅ Richtig!" : "❌ Leider falsch" + (opts.wrongNote ? " " + opts.wrongNote : "")),
        !ok && solutionText ? h("div", { class: "sol" }, "Richtig wäre: ", solutionText) : null,
        h("p", null, q.e),
        h("button", { class: "btn wide " + (ok ? "good" : "bad"), onclick: () => done(ok) }, opts.nextLabel || "Weiter"));
      fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    if (q.t === "mc" || q.t === "tf") {
      const choices = q.t === "tf" ? [[true, "👍 Wahr"], [false, "👎 Falsch"]] : shuffle(q.o.map((t, i) => [i, t]));
      const box = h("div", { class: "opts" + (q.t === "tf" ? " tf" : "") });
      const btns = [];
      choices.forEach(c => {
        const b = h("button", { class: "opt", onclick: () => {
          if (locked) return;
          const ok = c[0] === q.a;
          b.classList.add(ok ? "right" : "wrong");
          if (!ok) btns.forEach(x => { if (x.v === q.a) x.b.classList.add("right"); });
          finish(ok, ok ? null : (q.t === "tf" ? (q.a ? "Wahr" : "Falsch") : q.o[q.a]));
        } }, c[1]);
        btns.push({ v: c[0], b: b });
        put(box, b);
      });
      put(body, box);
    } else if (q.t === "order") {
      let items = shuffle(q.o);
      let guard = 0;
      while (items.join("|") === q.o.join("|") && guard++ < 10) items = shuffle(q.o);
      const answer = h("div", { class: "answer" }), pool = h("div", { class: "pool" });
      const chosen = [];
      const checkBtn = h("button", { class: "btn wide zone", disabled: true, onclick: () => {
        const ok = chosen.join("|") === q.o.join("|");
        Array.from(answer.children).forEach((c, i) => c.classList.add(chosen[i] === q.o[i] ? "right" : "wrong"));
        finish(ok, ok ? null : q.o.map((t, i) => (i + 1) + ". " + t).join("  →  "));
      } }, "Prüfen");
      function draw() {
        answer.innerHTML = ""; pool.innerHTML = "";
        chosen.forEach((t, i) => put(answer, h("button", { class: "chip", onclick: () => { if (locked) return; chosen.splice(i, 1); draw(); } }, t)));
        items.filter(t => !chosen.includes(t)).forEach(t => put(pool, h("button", { class: "chip", onclick: () => { if (locked) return; chosen.push(t); draw(); } }, t)));
        checkBtn.disabled = chosen.length !== q.o.length;
      }
      draw();
      put(body, answer, pool);
      put(checkRow, checkBtn);
    } else if (q.t === "match") {
      const rights = shuffle(q.p.map(p => p[1]));
      const sels = [];
      const checkBtn = h("button", { class: "btn wide zone", disabled: true, onclick: () => {
        let ok = true;
        sels.forEach((s, i) => { const r = s.value === q.p[i][1]; s.classList.add(r ? "right" : "wrong"); s.disabled = true; if (!r) ok = false; });
        finish(ok, ok ? null : q.p.map(p => p[0] + " → " + p[1]).join(" · "));
      } }, "Prüfen");
      q.p.forEach(p => {
        const s = h("select", { onchange: () => { checkBtn.disabled = sels.some(x => !x.value); } },
          h("option", { value: "" }, "– wählen –"), rights.map(r => h("option", { value: r }, r)));
        sels.push(s);
        put(body, h("div", { class: "mrow" }, h("div", { class: "ml" }, p[0]), s));
      });
      put(checkRow, checkBtn);
    }
  }

  // ---------- Level ----------
  let RUN = null;
  function viewLevel(app, id) {
    const l = LEVEL_BY_ID[id];
    if (!l) return go("map");
    document.documentElement.style.setProperty("--zc", l.zone.color);
    if (!RUN || RUN.level.id !== id) RUN = { level: l, step: "lesson", qi: 0, hearts: 3, correct: 0, gained: 0, practiceXP: 0 };
    const head = h("div", { class: "lvlhead" },
      h("button", { class: "xbtn", title: "Zur Karte", onclick: () => { RUN = null; go("map", true); } }, "✕"),
      h("div", { class: "steps" }, ["lesson", "quiz", "practice", "result"].map((s, i) => h("i", { class: i <= ["lesson", "quiz", "practice", "result"].indexOf(RUN.step === "fail" ? "quiz" : RUN.step) ? "on" : "" }))),
      RUN.step === "quiz" ? h("div", { class: "hearts" }, [0, 1, 2].map(i => h("span", { class: i < RUN.hearts ? "" : "lost" }, "❤️"))) : null);
    put(app, head);
    const card = h("div", { class: "card" });
    put(app, card);
    ({ lesson: stepLesson, quiz: stepQuiz, practice: stepPractice, result: stepResult, fail: stepFail })[RUN.step](card, l);
  }
  function setStep(step) { RUN.step = step; go("level", RUN.level.id); }

  function stepLesson(card, l) {
    const lessonEl = h("div", { class: "lesson", html: l.lesson });
    const lic = l.src && l.src.some(x => x.lic);
    put(card, 
      h("div", { class: "qtype" }, l.zone.icon + " " + l.zone.title + " · Level " + (l.li + 1) + "/" + l.zone.levels.length),
      h("h1", null, l.icon + " " + l.title),
      isOutdated(l) ? h("div", { class: "infobanner" }, "♻️ Diese Lektion wurde überarbeitet, seit du sie abgeschlossen hast. Lies sie in Ruhe noch einmal.") : null,
      isNewForUser(l) ? h("div", { class: "infobanner neu" }, "🆕 Neues Level, das nach deinem Start dazugekommen ist.") : null,
      lessonEl,
      h("div", { class: "keys" }, h("b", null, "📌 Das Wichtigste"), h("ul", null, l.keys.map(k => h("li", null, k)))),
      l.src && l.src.length ? h("div", { class: "srcbox" }, h("b", null, "📚 Quellen und Vertiefung"),
        h("ul", null, l.src.map(x => h("li", null, h("a", { href: x.u, target: "_blank", rel: "noopener" }, x.t)))),
        lic ? h("small", null, "Inhalte sinngemäß übertragen, gekürzt, ergänzt und an aktuelle Modelle angepasst nach den Anthropic Courses (© Anthropic, Lizenz ",
          h("a", { href: "https://creativecommons.org/licenses/by-nc/4.0/deed.de", target: "_blank", rel: "noopener" }, "CC BY-NC 4.0"), ").") : null) : null,
      h("div", { class: "sticky-foot" }, h("button", { class: "btn wide zone", onclick: () => {
        if (S.done[l.id]) { S.done[l.id].seen = dateKey(); save(); }
        RUN.qi = 0; RUN.hearts = 3; RUN.correct = 0; setStep("quiz"); } }, "Verstanden, zum Quiz →")));
    addCopyButtons(lessonEl);
  }

  function stepQuiz(card, l) {
    const qid = l.id + "#" + RUN.qi;
    const q = l.quiz[RUN.qi];
    renderQuestion(q, card, { label: "Frage " + (RUN.qi + 1) + "/" + l.quiz.length, wrongNote: "· −1 ❤️" }, ok => {
      if (ok) { RUN.correct++; delete S.wrong[qid]; }
      else { RUN.hearts--; S.wrong[qid] = dateKey(); }
      save();
      if (RUN.hearts <= 0) return setStep("fail");
      RUN.qi++;
      if (RUN.qi >= l.quiz.length) { completeLevel(); return setStep("practice"); }
      setStep("quiz");
    });
  }

  function completeLevel() {
    const l = RUN.level, prev = S.done[l.id], stars = RUN.hearts, perfect = RUN.hearts === 3;
    const parts = [];
    if (!prev) {
      parts.push(["Richtige Antworten (" + RUN.correct + " × " + XP.correct + ")", RUN.correct * XP.correct]);
      parts.push(["Level abgeschlossen", XP.level]);
      if (perfect) parts.push(["Perfekt, ohne Fehler!", XP.perfect]);
      S.done[l.id] = { stars: stars, perfect: perfect, date: dateKey(), seen: dateKey() };
    } else {
      parts.push(["Wiederholung (" + RUN.correct + " × " + XP.replay + ")", RUN.correct * XP.replay]);
      if (perfect && !prev.perfect) parts.push(["Jetzt perfekt!", XP.perfect]);
      prev.stars = Math.max(prev.stars, stars); prev.perfect = prev.perfect || perfect; prev.seen = dateKey();
    }
    RUN.parts = parts; RUN.firstTime = !prev;
    const sum = parts.reduce((a, p) => a + p[1], 0);
    addXP(sum);
    checkBadges();
  }

  const RUN_HELP = `<p><b>Variante A, am einfachsten (ab Zone 7):</b> Code kopieren und in Claude Code sagen: „Speichere diesen Code als <code>uebung.py</code>, installiere, was nötig ist, und führe ihn aus. Mein API-Key steht in der Datei <code>.env</code>.“</p>
<p><b>Variante B, selbst im Terminal:</b></p>
<ol><li>Python 3 installieren (python.org).</li><li><code>pip install anthropic python-dotenv</code></li><li>Im Übungsordner eine Datei <code>.env</code> anlegen mit der Zeile <code>ANTHROPIC_API_KEY=dein-key</code></li><li>Code als <code>uebung.py</code> speichern und <code>python uebung.py</code> ausführen.</li></ol>
<p>Du brauchst ein API-Konto in der Claude Console mit etwas Guthaben. Eine Übung kostet meist nur Bruchteile eines Cents bis wenige Cent [Schätzung]. Setze in der Console ein Ausgabelimit und lade die <code>.env</code> nie auf GitHub hoch.</p>`;

  function stepPractice(card, l) {
    const p = l.practice, type = p.type || "text";
    const label = { text: "🛠️ Praxisaufgabe", werkstatt: "🧪 Prompt-Werkstatt", code: "🐍 Python-Übung" }[type];
    const ta = h("textarea", { placeholder: type === "werkstatt" ? "Schreibe hier deinen Prompt … (wird nur in diesem Browser gespeichert)" : type === "code" ? "Notizen, Ergebnis oder deine eigene Lösung …" : "Deine Lösung … (wird nur in diesem Browser gespeichert)" });
    ta.value = S.notes[l.id] || "";
    const hint = h("div", { class: "hint hidden" }, "💡 Tipp: " + p.hint);
    const solBody = type === "text" ? [h("br"), p.solution] : [h("pre", { class: "codepre" }, p.solution)];
    const sol = h("div", { class: "solution hidden" }, h("b", null, type === "code" ? "Musterlösung (Code)" : "Musterlösung"), solBody);
    const already = !!S.practice[l.id];
    // Prompt-Werkstatt: Checkliste mit automatischer Erkennung
    let items = [], counter = null, checks = null;
    const evalChecks = () => {
      const txt = ta.value; let n = 0;
      items.forEach(it => {
        const auto = !!(it.re && it.re.test(txt));
        const ok = auto || it.manual;
        it.row.classList.toggle("ok", ok); it.box.checked = ok; it.box.disabled = auto;
        it.tag.classList.toggle("hidden", !auto);
        if (ok) n++;
      });
      if (counter) counter.textContent = n + " / " + items.length + " Kriterien erfüllt" + (n === items.length ? " 🎉" : "");
      return n;
    };
    if (type === "werkstatt") {
      items = (p.checklist || []).map(c => {
        let re = null; try { re = c.re ? new RegExp(c.re, "i") : null; } catch (e) { re = null; }
        const it = { re: re, manual: false };
        it.box = h("input", { type: "checkbox", onchange: () => { it.manual = it.box.checked; evalChecks(); } });
        it.tag = h("small", { class: "autotag hidden" }, "automatisch erkannt");
        it.row = h("label", { class: "checkrow" }, it.box, h("span", null, c.t, " ", it.tag));
        return it;
      });
      counter = h("div", { class: "checkcount" });
      checks = h("div", { class: "checklist" }, h("b", null, "✅ Checkliste"), items.map(it => it.row), counter);
    }
    ta.addEventListener("input", () => { S.notes[l.id] = ta.value; save(); if (type === "werkstatt") evalChecks(); });
    const doneBtn = h("button", { class: "btn wide good hidden", onclick: () => {
      if (!S.practice[l.id]) {
        S.practice[l.id] = dateKey();
        RUN.practiceParts = [["Praxisaufgabe", XP.practice]];
        let sum = XP.practice;
        if (type === "werkstatt" && items.length && evalChecks() === items.length && !(S.werkstatt || {})[l.id]) {
          S.werkstatt = S.werkstatt || {}; S.werkstatt[l.id] = dateKey();
          RUN.practiceParts.push(["Werkstatt-Bonus: alle Kriterien", XP.werkstatt]); sum += XP.werkstatt;
        }
        addXP(sum); checkBadges();
      }
      setStep("result");
    } }, already ? "Weiter →" : "✓ Erledigt (+" + XP.practice + " XP" + (type === "werkstatt" ? ", Bonus bei allen Kriterien" : "") + ")");
    const showBtn = h("button", { class: "btn wide zone", onclick: () => { sol.classList.remove("hidden"); doneBtn.classList.remove("hidden"); showBtn.classList.add("hidden"); addCopyButtons(sol); sol.scrollIntoView({ block: "nearest", behavior: "smooth" }); } }, "Musterlösung zeigen");
    const given = p.given ? h("div", { class: "given" }, h("b", null, "📎 Material für die Aufgabe"), h("pre", null, p.given)) : null;
    const starter = type === "code" && p.starter ? h("div", { class: "given" }, h("b", null, "🐍 Startcode"), h("pre", { class: "codepre" }, p.starter)) : null;
    const runHelp = type === "code" ? h("details", { class: "runhelp" }, h("summary", null, "So führst du den Code aus"), h("div", { html: RUN_HELP })) : null;
    const tools = h("div", { class: "row", style: "margin-top:10px" },
      h("button", { class: "btn ghost", onclick: () => hint.classList.toggle("hidden") }, "💡 Tipp"),
      type === "werkstatt" ? h("button", { class: "btn ghost", onclick: () => copyText(ta.value) }, "📋 Prompt kopieren") : null);
    put(card, 
      h("div", { class: "qtype" }, label),
      h("h2", null, p.task),
      type === "werkstatt" ? h("p", { class: "muted", style: "margin-top:-4px" }, "Schreibe den Prompt unten. Die Checkliste erkennt einiges automatisch, den Rest hakst du ehrlich selbst ab. Zum Ausprobieren kannst du den Prompt kopieren und in der Claude-App testen.") : null,
      given, starter, runHelp, ta, checks, tools, hint, sol,
      h("div", { class: "sticky-foot" }, showBtn, doneBtn,
        h("button", { class: "btn ghost wide", style: "margin-top:10px", onclick: () => setStep("result") }, "Überspringen")));
    addCopyButtons(card);
    if (type === "werkstatt") evalChecks();
  }

  function stepResult(card, l) {
    const parts = (RUN.parts || []).slice();
    if (RUN.practiceParts) RUN.practiceParts.forEach(x => parts.push(x));
    const sum = parts.reduce((a, p) => a + p[1], 0);
    const stars = RUN.hearts;
    if (RUN.firstTime) confetti();
    const nl = LEVELS[l.idx + 1];
    const zoneDone = l.zone.levels.every(x => S.done[x.id]) && l.li === l.zone.levels.length - 1;
    card.classList.add("result");
    put(card, 
      h("div", { class: "big" }, zoneDone ? l.zone.badge.icon : "🎉"),
      h("h1", null, zoneDone ? "Zone geschafft: " + l.zone.title + "!" : "Level geschafft!"),
      h("div", { class: "bigstars" }, "⭐".repeat(stars) + "☆".repeat(3 - stars)),
      h("div", { class: "muted" }, RUN.correct + " von " + l.quiz.length + " richtig"),
      h("div", { class: "xplist" }, parts.map(p => h("div", null, h("span", null, p[0]), h("span", null, "+" + p[1]))), h("div", null, h("span", null, "Gesamt"), h("span", null, "+" + sum + " XP"))),
      h("div", { class: "sticky-foot" },
        nl ? h("button", { class: "btn wide zone", onclick: () => { RUN = null; go("level", nl.id); } }, "Nächstes Level: " + nl.title + " →")
           : h("button", { class: "btn wide", onclick: () => { RUN = null; go("boss"); } }, "🐉 Zum Endboss"),
        h("button", { class: "btn ghost wide", style: "margin-top:10px", onclick: () => { RUN = null; go("map", true); } }, "Zur Karte")));
  }

  function stepFail(card, l) {
    card.classList.add("result");
    put(card, 
      h("div", { class: "big" }, "💔"),
      h("h1", null, "Keine Herzen mehr"),
      h("p", { class: "muted" }, "Kein Problem, das gehört zum Lernen. Die falschen Fragen liegen jetzt im Wiederholungs-Modus. Lies die Lerneinheit noch einmal und versuch es erneut."),
      h("div", { class: "sticky-foot" },
        h("button", { class: "btn wide zone", onclick: () => setStep("lesson") }, "📖 Lerneinheit nochmal lesen"),
        h("button", { class: "btn ghost wide", style: "margin-top:10px", onclick: () => { RUN.qi = 0; RUN.hearts = 3; RUN.correct = 0; setStep("quiz"); } }, "🔄 Quiz direkt neu starten")));
  }

  // ---------- Wiederholen ----------
  let REV = null;
  function viewReview(app) {
    const ids = Object.keys(S.wrong).filter(q => QUESTIONS[q]);
    if (!REV) {
      if (!ids.length) {
        put(app, h("div", { class: "card result" }, h("div", { class: "big" }, "🧹"), h("h1", null, "Nichts zu wiederholen"),
          h("p", { class: "muted" }, "Alle Fragen, die du falsch beantwortest, landen hier. Beantwortest du sie richtig, verschwinden sie wieder. Pro ausgebügeltem Fehler gibt es " + XP.review + " XP."),
          h("button", { class: "btn", onclick: () => go("map", true) }, "Zur Karte")));
        return;
      }
      put(app, h("div", { class: "card result" }, h("div", { class: "big" }, "🔁"), h("h1", null, "Wiederholungs-Modus"),
        h("p", null, "Du hast ", h("b", null, ids.length + " Frage" + (ids.length === 1 ? "" : "n")), " zum Wiederholen."),
        h("p", { class: "muted" }, "Keine Herzen, kein Druck. Jede richtige Antwort entfernt die Frage aus der Liste (+" + XP.review + " XP)."),
        h("button", { class: "btn wide", onclick: () => { REV = { list: shuffle(ids).slice(0, 15), i: 0, ok: 0 }; go("review"); } }, "Los geht's (" + Math.min(15, ids.length) + " Fragen)")));
      return;
    }
    if (REV.i >= REV.list.length) {
      const r = REV; REV = null;
      put(app, h("div", { class: "card result" }, h("div", { class: "big" }, r.ok === r.list.length ? "🏅" : "💪"),
        h("h1", null, r.ok + " von " + r.list.length + " richtig"),
        h("p", { class: "muted" }, wrongCount() ? "Noch " + wrongCount() + " Fragen offen." : "Alle Fehler ausgebügelt!"),
        h("div", { class: "row", style: "justify-content:center" },
          wrongCount() ? h("button", { class: "btn", onclick: () => go("review") }, "Weiter wiederholen") : null,
          h("button", { class: "btn ghost", onclick: () => go("map", true) }, "Zur Karte"))));
      return;
    }
    const item = QUESTIONS[REV.list[REV.i]];
    document.documentElement.style.setProperty("--zc", item.level.zone.color);
    const card = h("div", { class: "card" });
    put(app, h("div", { class: "lvlhead" }, h("button", { class: "xbtn", onclick: () => { REV = null; go("review"); } }, "✕"),
      h("div", { class: "steps" }, REV.list.map((_, i) => h("i", { class: i < REV.i ? "on" : "" })))), card);
    renderQuestion(item.q, card, { label: item.level.zone.icon + " " + item.level.title }, ok => {
      if (ok) { delete S.wrong[item.qid]; S.reviewFixed++; REV.ok++; addXP(XP.review); checkBadges(); }
      save(); REV.i++; go("review");
    });
  }

  // ---------- Endboss ----------
  let BOSS = null;
  function pickBoss() {
    const byZone = {};
    Object.values(QUESTIONS).forEach(x => { if (x.level.zone.id === "z0") return; if (!S.free && !S.done[x.level.id]) return; (byZone[x.level.zone.id] = byZone[x.level.zone.id] || []).push(x.qid); });
    let pick = [];
    Object.keys(byZone).forEach(z => { pick = pick.concat(shuffle(byZone[z]).slice(0, 2)); });
    const rest = shuffle(Object.values(byZone).flat().filter(q => !pick.includes(q)));
    pick = pick.concat(rest.slice(0, BOSS_COUNT - pick.length));
    return shuffle(pick);
  }
  function viewBoss(app) {
    document.documentElement.style.setProperty("--zc", "#111827");
    if (!BOSS) {
      const bu = bossUnlocked();
      put(app, h("div", { class: "card result" }, h("div", { class: "big" }, bu ? "🐉" : "🔒"), h("h1", null, "Endboss: Abschlussprüfung"),
        h("p", null, BOSS_COUNT + " zufällige Fragen aus allen Zonen. Keine Herzen, aber du brauchst ", h("b", null, BOSS_PASS + " richtige Antworten (80 %)"), " zum Bestehen."),
        S.boss.best ? h("p", { class: "muted" }, "Dein Bestwert: " + S.boss.best + "/" + BOSS_COUNT + (S.boss.passed ? " · bestanden ✅" : "")) : null,
        bu ? h("button", { class: "btn wide", onclick: () => { BOSS = { list: pickBoss(), i: 0, ok: 0, wrong: [] }; go("boss"); } }, S.boss.passed ? "Nochmal antreten" : "⚔️ Kampf beginnen")
           : h("p", { class: "muted" }, "Schließe zuerst alle " + LEVELS.length + " Levels ab (" + doneCount() + " geschafft). Oder aktiviere unter „Erfolge“ den freien Modus."),
        S.boss.passed ? h("button", { class: "btn ghost wide", style: "margin-top:10px", onclick: () => go("cert") }, "📜 Urkunde ansehen") : null));
      return;
    }
    if (BOSS.i >= BOSS.list.length) {
      const b = BOSS; BOSS = null;
      const passed = b.ok >= BOSS_PASS, first = passed && !S.boss.passed;
      S.boss.best = Math.max(S.boss.best, b.ok);
      if (passed) { S.boss.passed = true; S.boss.date = S.boss.date || dateKey(); }
      save();
      if (first) addXP(XP.boss);
      checkBadges();
      if (passed) confetti();
      put(app, h("div", { class: "card result" }, h("div", { class: "big" }, passed ? "🏆" : "🛡️"),
        h("h1", null, passed ? "Endboss besiegt!" : "Knapp daneben"),
        h("div", { class: "bigstars" }, b.ok + " / " + b.list.length),
        h("p", { class: "muted" }, passed ? (first ? "+" + XP.boss + " XP. Deine Urkunde ist freigeschaltet!" : "Stark, du hast es wieder geschafft.") : "Du brauchst " + BOSS_PASS + " richtige. Deine Fehler liegen im Wiederholungs-Modus. Übe sie und tritt erneut an."),
        h("div", { class: "row", style: "justify-content:center" },
          passed ? h("button", { class: "btn", onclick: () => go("cert") }, "📜 Zur Urkunde") : h("button", { class: "btn", onclick: () => go("review") }, "🔁 Fehler wiederholen"),
          h("button", { class: "btn ghost", onclick: () => go("map", true) }, "Zur Karte"))));
      return;
    }
    const item = QUESTIONS[BOSS.list[BOSS.i]];
    const card = h("div", { class: "card" });
    put(app, h("div", { class: "lvlhead" }, h("button", { class: "xbtn", onclick: () => { if (confirm("Prüfung abbrechen? Der Fortschritt dieses Versuchs geht verloren.")) { BOSS = null; go("boss"); } } }, "✕"),
      h("div", { class: "steps" }, BOSS.list.map((_, i) => h("i", { class: i < BOSS.i ? "on" : "" }))),
      h("div", { class: "pill" }, "✅ " + BOSS.ok)), card);
    renderQuestion(item.q, card, { label: "🐉 Frage " + (BOSS.i + 1) + "/" + BOSS.list.length }, ok => {
      if (ok) BOSS.ok++; else S.wrong[item.qid] = dateKey();
      save(); BOSS.i++; go("boss");
    });
  }

  // ---------- Lücken ----------
  function viewGaps(app) {
    const g = gapLevels(), m = maxDoneIdx();
    const ahead = LEVELS.filter(l => isNewForUser(l) && l.idx > m);
    put(app, h("h1", null, "🧩 Deine Lücken"));
    if (!g.neu.length && !g.upd.length) {
      put(app, h("div", { class: "card result" }, h("div", { class: "big" }, "✨"), h("h2", null, "Keine Lücken"),
        h("p", { class: "muted" }, "Alles, was hinter deinem aktuellen Stand liegt, ist erledigt und auf dem neuesten Stand." + (ahead.length ? " Auf deinem weiteren Weg warten " + ahead.length + " neue Levels." : "")),
        h("button", { class: "btn", onclick: () => go("map", true) }, "Zur Karte")));
      return;
    }
    put(app, h("p", { class: "muted" }, "Hier stehen Levels, die nach deinem Durchgang neu dazugekommen sind oder überarbeitet wurden. Hol sie in beliebiger Reihenfolge nach. Dein Fortschritt auf der Karte bleibt dabei erhalten."));
    const item = (l, kind) => h("button", { class: "gapitem", style: "--zc:" + l.zone.color, onclick: () => { RUN = null; go("level", l.id); } },
      h("span", { class: "gi" }, l.icon),
      h("span", { class: "gt" }, h("b", null, l.title), h("small", null, l.zone.icon + " " + l.zone.title)),
      h("span", { class: "ntag" + (kind === "upd" ? " upd" : "") }, kind === "upd" ? "AKTUALISIERT" : "NEU"));
    if (g.neu.length) put(app, h("div", { class: "section" }, h("h2", null, "🆕 Neu, noch nicht gemacht (" + g.neu.length + ")"), h("div", { class: "gaplist" }, g.neu.map(l => item(l, "neu")))));
    if (g.upd.length) put(app, h("div", { class: "section" }, h("h2", null, "♻️ Überarbeitet seit deinem Abschluss (" + g.upd.length + ")"),
      h("p", { class: "muted" }, "Es reicht, die Lektion zu öffnen und bis „Verstanden, zum Quiz“ zu lesen. Danach verschwindet das Level aus dieser Liste."),
      h("div", { class: "gaplist" }, g.upd.map(l => item(l, "upd")))));
    if (ahead.length) put(app, h("p", { class: "muted", style: "margin-top:18px" }, "Außerdem warten " + ahead.length + " neue Levels auf deinem weiteren Weg. Die kommen ganz normal der Reihe nach."));
  }

  // ---------- Erfolge / Profil ----------
  function viewProfile(app) {
    const ri = rankIndex(S.xp);
    put(app, h("h1", null, "🏆 Deine Erfolge"),
      h("div", { class: "grid" },
        stat(fmt(S.xp), "XP gesamt"), stat(doneCount() + "/" + LEVELS.length, "Levels"),
        stat(perfectCount(), "Perfekte Levels"), stat(Object.keys(S.practice).length, "Praxisaufgaben"),
        stat("🔥 " + currentStreak(), "Aktuelle Streak"), stat(S.streak.best, "Längste Streak")));
    const ab = allBadges();
    put(app, h("div", { class: "section" }, h("h2", null, "Badges (" + ab.filter(b => S.badges[b.id]).length + "/" + ab.length + ")"),
      h("div", { class: "grid" }, ab.map(b => h("div", { class: "badge" + (S.badges[b.id] ? "" : " locked") },
        h("div", { class: "bi" }, b.i), h("b", null, b.n), h("small", null, b.d))))));
    put(app, h("div", { class: "section card" }, h("h2", null, "Ränge"),
      h("ul", { class: "ranks" }, RANKS.map((r, i) => h("li", { class: i === ri ? "cur" : (i > ri ? "future" : "") },
        h("span", { class: "ri" }, r.i), r.n + (i === ri ? " (du)" : ""), h("small", null, fmt(r.xp) + " XP"))))));
    const free = h("input", { type: "checkbox", onchange: e => { S.free = e.target.checked; save(); toast(S.free ? "🔓 Freier Modus an" : "🔒 Freier Modus aus"); } });
    free.checked = S.free;
    const file = h("input", { type: "file", accept: "application/json", class: "hidden", onchange: e => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then(t => { try { const d = JSON.parse(t); if (typeof d.xp !== "number" || !d.done) throw 0; S = Object.assign(defaults(), d); save(); toast("✅ Fortschritt importiert"); go("profile"); } catch (err) { toast("⚠️ Datei konnte nicht gelesen werden"); } });
    } });
    put(app, h("div", { class: "section card" }, h("h2", null, "⚙️ Einstellungen"),
      h("label", { class: "toggle" }, free, h("span", null, h("b", null, "Freier Modus"), h("br"), h("span", { class: "muted" }, "Alle Levels und den Endboss sofort freischalten, z. B. um gezielt ein Thema nachzuschlagen."))),
      h("p", { class: "muted" }, "Dein Fortschritt wird nur in diesem Browser gespeichert. Mit Export und Import nimmst du ihn auf ein anderes Gerät mit."),
      h("div", { class: "row" },
        h("button", { class: "btn ghost", onclick: exportState }, "⬇️ Exportieren"),
        h("button", { class: "btn ghost", onclick: () => file.click() }, "⬆️ Importieren"), file,
        S.boss.passed ? h("button", { class: "btn ghost", onclick: () => go("cert") }, "📜 Urkunde") : null,
        h("button", { class: "btn ghost", style: "color:var(--bad)", onclick: () => { if (confirm("Wirklich den gesamten Fortschritt löschen?")) { S = defaults(); save(); RUN = REV = BOSS = null; go("map"); } } }, "🗑️ Zurücksetzen"))),
      h("p", { class: "muted", style: "font-size:13px;margin-top:22px" }, "Diese App orientiert sich am Aufbau der Kurse „KI-Manager“ und „Claude Code Masterclass“ von kilernen.de (Everlast KI Academy). Alle Texte und Aufgaben sind eigenständig formuliert. Sie bereitet dich auf die Kurse vor, ersetzt aber weder die Kurse noch deren offizielle Zertifizierung. Einige Levels basieren sinngemäß auf den frei verfügbaren Anthropic Courses (© Anthropic, Lizenz CC BY-NC 4.0), übersetzt, gekürzt und an aktuelle Modelle angepasst; die Quellen stehen im jeweiligen Level. Keine Rechtsberatung."));
  }
  function stat(v, l) { return h("div", { class: "stat" }, h("b", null, String(v)), h("span", { class: "muted" }, l)); }
  function exportState() {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
    const a = h("a", { href: URL.createObjectURL(blob), download: "ki-lernreise-fortschritt-" + dateKey() + ".json" });
    document.body.append(a); a.click(); a.remove();
  }

  // ---------- Urkunde ----------
  function viewCert(app) {
    if (!S.boss.passed) { put(app, h("div", { class: "card result" }, h("div", { class: "big" }, "🔒"), h("h1", null, "Noch keine Urkunde"), h("p", { class: "muted" }, "Besiege zuerst den Endboss."), h("button", { class: "btn", onclick: () => go("boss") }, "🐉 Zum Endboss"))); return; }
    const who = h("div", { class: "who" }, S.name || "Dein Name");
    const inp = h("input", { type: "text", placeholder: "Dein Name für die Urkunde", style: "font:inherit;padding:12px 14px;border-radius:12px;border:2px solid var(--line);background:var(--card);color:var(--ink);flex:1;min-width:200px",
      oninput: e => { S.name = e.target.value; save(); who.textContent = S.name || "Dein Name"; } });
    inp.value = S.name;
    const d = S.boss.date ? S.boss.date.split("-").reverse().join(".") : dateKey().split("-").reverse().join(".");
    put(app, h("div", { class: "row", style: "margin-bottom:16px" }, inp, h("button", { class: "btn", onclick: () => print() }, "🖨️ Drucken / PDF")),
      h("div", { id: "certprint" }, h("div", { class: "cert" },
        h("div", { class: "seal" }, "🏆"),
        h("div", { style: "letter-spacing:.2em;text-transform:uppercase;font-size:13px" }, "Urkunde"),
        h("h1", null, "KI-Lernreise"),
        h("div", null, "Hiermit wird bestätigt, dass"),
        who,
        h("div", null, doneCount() + " Levels und die Abschlussprüfung (" + S.boss.best + "/" + BOSS_COUNT + ") erfolgreich gemeistert hat:"),
        h("ul", null, ZONES.filter(z => z.id !== "z0").map(z => h("li", null, z.icon + " " + z.title))),
        h("div", null, "Erreichter Rang: ", h("b", null, RANKS[rankIndex(S.xp)].i + " " + RANKS[rankIndex(S.xp)].n), " · " + fmt(S.xp) + " XP"),
        h("div", { class: "foot" }, h("span", null, "Datum: " + d), h("span", null, "Badges: " + Object.keys(S.badges).length)),
        h("small", null, "Selbstlern-Urkunde zur Vorbereitung auf die Kurse „KI-Manager“ und „Claude Code Masterclass“. Kein offizielles Zertifikat."))));
  }

  // ---------- Start ----------
  go("map", true);
})();
