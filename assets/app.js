/* DSA Mastery Plan — tracker. Vanilla JS, no dependencies, works from file:// and GitHub Pages.
   Data comes from assets/curriculum.data.js (generated from data/curriculum.json by scripts/build.py).
   Progress lives in localStorage under the key STORAGE_KEY; export/import keeps it portable. */
(function () {
  "use strict";

  var DATA = window.DSA_DATA;
  if (!DATA) {
    document.getElementById("app").innerHTML = '<div class="card empty">Could not load <code>assets/curriculum.data.js</code>. Run <code>python3 scripts/build.py</code>.</div>';
    return;
  }
  var STORAGE_KEY = "dsa150:v2";
  var REPO = "https://github.com/RANJITHROSAN17/dsa-mastery-plan-2026";

  // ------------------------------------------------------------------ data indexes
  var DAYS = [];                 // day objects in order (1-based access via DAYS[n-1])
  var PHASE_OF = {};             // phase id -> phase
  var PROBLEMS = {};             // slug -> first occurrence {problem, day}
  var PROBLEM_LIST = [];         // unique problems in first-assigned order
  DATA.phases.forEach(function (ph) {
    PHASE_OF[ph.id] = ph;
    ph.weeks.forEach(function (w) {
      w.days.forEach(function (d) {
        DAYS.push(d);
        d.problems.forEach(function (p) {
          if (!PROBLEMS[p.slug]) {
            PROBLEMS[p.slug] = { p: p, day: d.day, pattern: d.pattern, phase: d.phase };
            PROBLEM_LIST.push(PROBLEMS[p.slug]);
          }
        });
      });
    });
  });
  var PATTERN_IDS = Object.keys(DATA.patterns);

  // ------------------------------------------------------------------ state
  function defaultState() { return { solved: {}, days: {}, notes: {}, theme: null, coreOnly: false, start: null }; }
  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var s = JSON.parse(raw);
      var base = defaultState();
      Object.keys(base).forEach(function (k) { if (s[k] === undefined) s[k] = base[k]; });
      return s;
    } catch (e) { return defaultState(); }
  }
  var state = loadState();
  function save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* private mode */ } }

  function isSolved(slug) { return !!state.solved[slug]; }
  function toggleSolved(slug, on) {
    if (on) state.solved[slug] = Date.now(); else delete state.solved[slug];
    save();
  }
  function dayDone(day) { return !!state.days[day]; }
  function setDayDone(day, on) { if (on) state.days[day] = Date.now(); else delete state.days[day]; save(); }

  // ------------------------------------------------------------------ helpers
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function h(strings) { // tiny tagged template: values are escaped unless wrapped with raw()
    var out = strings[0];
    for (var i = 1; i < arguments.length; i++) {
      var v = arguments[i];
      out += (v && v.__raw) ? v.__raw : (Array.isArray(v) ? v.map(function (x) { return x && x.__raw ? x.__raw : esc(x); }).join("") : esc(v == null ? "" : v));
      out += strings[i];
    }
    return { __raw: out };
  }
  function raw(s) { return { __raw: s }; }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function dayKey(ts) { var d = new Date(ts); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function diffClass(d) { return d.toLowerCase(); }
  function patternName(id) { return DATA.patterns[id] ? DATA.patterns[id].name : id; }
  function phaseColor(id) { return PHASE_OF[id] ? PHASE_OF[id].color : "var(--accent)"; }
  function problemsOf(day) { return state.coreOnly ? day.problems.filter(function (p) { return p.core; }) : day.problems; }

  // ------------------------------------------------------------------ stats
  function stats() {
    var solvedSlugs = Object.keys(state.solved).filter(function (s) { return PROBLEMS[s]; });
    var byDiff = { Easy: [0, 0], Medium: [0, 0], Hard: [0, 0] };
    var core = [0, 0];
    PROBLEM_LIST.forEach(function (e) {
      byDiff[e.p.difficulty][1]++;
      if (e.p.core) core[1]++;
      if (isSolved(e.p.slug)) { byDiff[e.p.difficulty][0]++; if (e.p.core) core[0]++; }
    });
    var perPhase = {};
    DATA.phases.forEach(function (ph) {
      var tot = 0, done = 0, daysDone = 0;
      ph.weeks.forEach(function (w) { w.days.forEach(function (d) {
        if (dayDone(d.day)) daysDone++;
        problemsOf(d).forEach(function (p) { tot++; if (isSolved(p.slug)) done++; });
      }); });
      perPhase[ph.id] = { total: tot, done: done, daysDone: daysDone };
    });
    // activity days (solves + day completions)
    var activity = {};
    Object.keys(state.solved).forEach(function (s) { var k = dayKey(state.solved[s]); activity[k] = (activity[k] || 0) + 1; });
    Object.keys(state.days).forEach(function (d) { var k = dayKey(state.days[d]); activity[k] = (activity[k] || 0) + 1; });
    var streak = 0, cursor = new Date(); cursor.setHours(0, 0, 0, 0);
    if (!activity[dayKey(cursor.getTime())]) cursor.setDate(cursor.getDate() - 1); // today not yet logged → count from yesterday
    while (activity[dayKey(cursor.getTime())]) { streak++; cursor.setDate(cursor.getDate() - 1); }
    var best = 0, run = 0, prev = null;
    Object.keys(activity).sort().forEach(function (k) {
      if (prev) { var p = new Date(prev), c = new Date(k); run = ((c - p) / 86400000) === 1 ? run + 1 : 1; } else run = 1;
      best = Math.max(best, run); prev = k;
    });
    return { solved: solvedSlugs.length, total: PROBLEM_LIST.length, byDiff: byDiff, core: core, perPhase: perPhase, activity: activity, streak: streak, bestStreak: best, daysDone: Object.keys(state.days).length };
  }
  function nextDay() { // first day that is not marked done and has unsolved problems
    for (var i = 0; i < DAYS.length; i++) {
      var d = DAYS[i];
      if (dayDone(d.day)) continue;
      var ps = problemsOf(d);
      if (!ps.length || ps.some(function (p) { return !isSolved(p.slug); })) return d;
    }
    return null;
  }

  // ------------------------------------------------------------------ views
  function ring(value, color) {
    var r = 26, c = 2 * Math.PI * r, off = c - (c * value) / 100;
    return h`<div class="ring" aria-label="${value}% complete"><svg width="64" height="64" viewBox="0 0 64 64"><circle class="track" cx="32" cy="32" r="${r}"></circle><circle class="bar" cx="32" cy="32" r="${r}" style="stroke:${color};stroke-dasharray:${c.toFixed(1)};stroke-dashoffset:${off.toFixed(1)}"></circle></svg><div class="label">${value}%</div></div>`;
  }
  function problemRow(p, opts) {
    opts = opts || {};
    var done = isSolved(p.slug);
    return h`<div class="problem-row ${done ? "done" : ""}">
      <input type="checkbox" data-slug="${p.slug}" ${done ? "checked" : ""} aria-label="Mark ${p.title} solved">
      <div class="title"><span class="num">${p.id}</span><a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>
        ${p.core ? raw('<span class="chip core" title="Core problem (fast track)">★ core</span>') : ""}
        ${p.repeat ? raw('<span class="chip" title="Deliberate repeat">repeat</span>') : ""}
        ${opts.showDay ? h`<a class="tiny muted" href="#/day/${opts.showDay}">day ${opts.showDay}</a>` : ""}
        ${opts.showPattern ? h`<a class="tiny muted" href="#/patterns/${opts.showPattern}">${patternName(opts.showPattern)}</a>` : ""}
      </div>
      <div class="meta">${p.video ? h`<a class="vid" href="${p.video}" target="_blank" rel="noopener" title="Verified video walkthrough">▶</a>` : ""}<span class="chip ${diffClass(p.difficulty)}">${p.difficulty}</span></div>
    </div>`;
  }

  function viewHome() {
    var st = stats();
    var nd = nextDay();
    var phases = DATA.phases.map(function (ph) {
      var s = st.perPhase[ph.id];
      return h`<div class="card phase-card" style="border-left-color:${ph.color}">
        <div class="row between">
          <div>
            <div class="eyebrow">Phase ${ph.id} · ${ph.span}</div>
            <h3><a href="#/phase/${ph.id}">${ph.title}</a></h3>
            <p class="small muted" style="margin:0">${ph.summary}</p>
          </div>
          ${ring(pct(s.done, s.total), ph.color)}
        </div>
        <div class="row between mt small muted"><span>${s.done}/${s.total} problems · ${s.daysDone}/30 days</span><a class="btn sm" href="#/phase/${ph.id}">Open phase →</a></div>
      </div>`;
    });
    return h`
      <section class="hero mb">
        <div class="card">
          <div class="eyebrow">150-day roadmap</div>
          <h1>Master data structures &amp; algorithms, one pattern a day.</h1>
          <p class="muted">${st.total} hand-picked free LeetCode problems across ${PATTERN_IDS.length} patterns and 5 phases. Tick problems off, keep notes, and never lose your place — everything is stored in your browser.</p>
          <div class="row">
            ${nd ? h`<a class="btn primary" href="#/day/${nd.day}">${st.solved ? "Continue" : "Start"} — Day ${nd.day}: ${nd.topic}</a>` : raw('<span class="btn primary">All 150 days complete 🎉</span>')}
            <a class="btn" href="#/problems">Browse problems</a>
            <a class="btn" href="${REPO}" target="_blank" rel="noopener">GitHub ↗</a>
          </div>
          <label class="row mt small" style="gap:8px"><input type="checkbox" id="coreOnly" ${state.coreOnly ? "checked" : ""}> <span><b>Fast track</b> — show only the ${st.core[1]} ⭐ core problems (Blind-75-style, ~6 weeks)</span></label>
        </div>
        <div class="card">
          <div class="grid cols-2">
            <div class="stat"><b>${st.solved}<span class="muted" style="font-size:14px">/${st.total}</span></b><span>problems solved</span></div>
            <div class="stat"><b>${st.streak}🔥</b><span>day streak (best ${st.bestStreak})</span></div>
            <div class="stat"><b>${st.daysDone}<span class="muted" style="font-size:14px">/150</span></b><span>days completed</span></div>
            <div class="stat"><b>${st.core[0]}<span class="muted" style="font-size:14px">/${st.core[1]}</span></b><span>core problems</span></div>
          </div>
          <div class="mt small muted">Overall</div>
          <div class="progress"><span style="width:${pct(st.solved, st.total)}%"></span></div>
          <div class="row mt small">
            <span class="chip easy">Easy ${st.byDiff.Easy[0]}/${st.byDiff.Easy[1]}</span>
            <span class="chip medium">Medium ${st.byDiff.Medium[0]}/${st.byDiff.Medium[1]}</span>
            <span class="chip hard">Hard ${st.byDiff.Hard[0]}/${st.byDiff.Hard[1]}</span>
          </div>
          <div class="row mt"><a class="btn sm" href="#/stats">Stats &amp; backup</a><a class="btn sm" href="#/patterns">Patterns</a></div>
        </div>
      </section>
      <h2>Phases</h2>
      <div class="grid cols-2">${phases}</div>
      <div class="card mt small muted">Tip: press <span class="kbd-hint">/</span> to search problems, <span class="kbd-hint">n</span> to jump to your next day, <span class="kbd-hint">t</span> to toggle the theme.</div>`;
  }

  function viewPhase(id) {
    var ph = PHASE_OF[id];
    if (!ph) return notFound();
    var nd = nextDay();
    var weeks = ph.weeks.map(function (w) {
      var rows = w.days.map(function (d) {
        var ps = problemsOf(d);
        var done = ps.filter(function (p) { return isSolved(p.slug); }).length;
        var dots = ps.map(function (p) { return h`<i class="dot ${diffClass(p.difficulty)} ${isSolved(p.slug) ? "on" : ""}" title="${p.title}"></i>`; });
        return h`<a class="day-row ${nd && nd.day === d.day ? "today" : ""}" href="#/day/${d.day}">
          <span class="daynum">${dayDone(d.day) ? "✓" : ""} ${d.day}</span>
          <span><span class="topic">${d.topic}</span><br><span class="sub">${patternName(d.pattern)} · <span class="chip kind-${d.kind}">${d.kind}</span>${ps.length ? " · " + done + "/" + ps.length : ""}</span></span>
          <span class="dots">${dots}</span>
        </a>`;
      });
      return h`<div class="card mb"><div class="row between"><h3 style="margin:0">Week ${w.week} · ${w.title}</h3><span class="small muted">days ${w.days_span}</span></div><div class="mt">${rows}</div></div>`;
    });
    var s = stats().perPhase[id];
    var prev = PHASE_OF[id - 1], next = PHASE_OF[id + 1];
    return h`
      <div class="row between mb">
        <div><div class="eyebrow">Phase ${ph.id} · ${ph.span}</div><h1 style="margin:0">${ph.title}</h1><p class="muted" style="margin:6px 0 0">${ph.summary}</p></div>
        ${ring(pct(s.done, s.total), ph.color)}
      </div>
      <div class="row between mb small">
        <span>${prev ? h`<a href="#/phase/${prev.id}">← Phase ${prev.id}</a>` : ""}</span>
        <a href="${REPO}/blob/main/curriculum/phase-${ph.id}-${slug(ph.title)}.md" target="_blank" rel="noopener">Read this phase as a document ↗</a>
        <span>${next ? h`<a href="#/phase/${next.id}">Phase ${next.id} →</a>` : ""}</span>
      </div>
      ${weeks}`;
  }
  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  function viewDay(n) {
    var d = DAYS[n - 1];
    if (!d) return notFound();
    var ph = PHASE_OF[d.phase];
    var pat = DATA.patterns[d.pattern];
    var ps = problemsOf(d);
    var done = ps.filter(function (p) { return isSolved(p.slug); }).length;
    var learn = d.learn.length ? h`<details class="learn" open><summary>Learn / do today</summary><ul class="clean">${d.learn.map(function (l) { return h`<li>${l}</li>`; })}</ul></details>` : "";
    return h`
      <div class="row between mb">
        <div>
          <div class="eyebrow" style="color:${ph.color}">Phase ${ph.id} · Week ${d.week} · <span class="chip kind-${d.kind}">${d.kind}</span></div>
          <h1 style="margin:0">Day ${d.day} — ${d.topic}</h1>
          <p class="muted" style="margin:6px 0 0">${d.goal}</p>
        </div>
        <div class="row">
          ${n > 1 ? h`<a class="btn sm" href="#/day/${n - 1}">← Day ${n - 1}</a>` : ""}
          ${n < DAYS.length ? h`<a class="btn sm" href="#/day/${n + 1}">Day ${n + 1} →</a>` : ""}
        </div>
      </div>
      <div class="grid cols-2 top">
        <div class="card">
          <div class="row between"><h2 style="margin:0">Problems <span class="muted small">${done}/${ps.length}</span></h2>
            ${ps.length ? h`<button class="btn sm" id="markAll">${done === ps.length ? "Clear all" : "Mark all solved"}</button>` : ""}</div>
          <div class="mt">${ps.length ? ps.map(function (p) { return problemRow(p); }) : raw('<div class="muted small">No problems today' + (state.coreOnly ? " in fast-track mode" : "") + " — use the time for the learning items.</div>")}</div>
          <div class="row mt">
            <label class="row" style="gap:8px"><input type="checkbox" id="dayDone" ${dayDone(d.day) ? "checked" : ""}> <b>Day ${d.day} complete</b></label>
          </div>
        </div>
        <div>
          <div class="card mb">
            <div class="eyebrow">Pattern</div>
            <h3><a href="#/patterns/${d.pattern}">${pat.name}</a></h3>
            <p class="small muted" style="margin:0 0 6px">${pat.summary}</p>
            <p class="small" style="margin:0"><b>Cue:</b> ${pat.cues}</p>
            <div class="row mt"><a class="btn sm" href="${REPO}/blob/main/patterns/${d.pattern}.md" target="_blank" rel="noopener">Playbook ↗</a>
              ${pat.resources.length ? h`<a class="btn sm" href="#/patterns/${d.pattern}">${pat.resources.length} resources</a>` : ""}</div>
          </div>
          <div class="card mb">${learn}</div>
          <div class="card">
            <div class="eyebrow">Notes for day ${d.day}</div>
            <textarea class="notes" id="notes" placeholder="What clicked? What fooled you? Which variant should you revisit?">${state.notes[d.day] || ""}</textarea>
            <div class="small muted mt">Saved automatically in this browser. Use <a href="#/stats">Stats &amp; backup</a> to export.</div>
          </div>
        </div>
      </div>`;
  }

  function viewProblems(params) {
    var q = (params.q || "").toLowerCase();
    var diff = params.diff || "", pat = params.pattern || "", status = params.status || "", core = params.core === "1" || state.coreOnly;
    var list = PROBLEM_LIST.filter(function (e) {
      var p = e.p;
      if (core && !p.core) return false;
      if (diff && p.difficulty !== diff) return false;
      if (pat && e.pattern !== pat) return false;
      if (status === "solved" && !isSolved(p.slug)) return false;
      if (status === "todo" && isSolved(p.slug)) return false;
      if (q && (p.title + " " + p.id + " " + p.slug + " " + patternName(e.pattern)).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    var rows = list.map(function (e) {
      var p = e.p;
      return h`<tr class="${isSolved(p.slug) ? "done" : ""}">
        <td><input type="checkbox" data-slug="${p.slug}" ${isSolved(p.slug) ? "checked" : ""} aria-label="Mark ${p.title} solved"></td>
        <td class="num">${p.id}</td>
        <td><a href="${p.url}" target="_blank" rel="noopener">${p.title}</a> ${p.core ? raw('<span class="chip core">★</span>') : ""} ${p.video ? h`<a class="vid" href="${p.video}" target="_blank" rel="noopener" title="Video">▶</a>` : ""}</td>
        <td><span class="chip ${diffClass(p.difficulty)}">${p.difficulty}</span></td>
        <td><a href="#/patterns/${e.pattern}">${patternName(e.pattern)}</a></td>
        <td><a href="#/day/${e.day}">${e.day}</a></td>
      </tr>`;
    });
    var patOpts = PATTERN_IDS.map(function (id) { return h`<option value="${id}" ${pat === id ? "selected" : ""}>${DATA.patterns[id].name}</option>`; });
    return h`
      <div class="row between mb"><div><h1 style="margin:0">All problems</h1><p class="muted" style="margin:4px 0 0">${list.length} of ${PROBLEM_LIST.length} shown</p></div></div>
      <div class="card mb filters" id="filters">
        <input type="text" id="f-q" placeholder="Search title or number…" value="${params.q || ""}">
        <select id="f-diff"><option value="">Any difficulty</option>${["Easy", "Medium", "Hard"].map(function (x) { return h`<option ${diff === x ? "selected" : ""}>${x}</option>`; })}</select>
        <select id="f-pattern"><option value="">Any pattern</option>${patOpts}</select>
        <select id="f-status"><option value="">Any status</option><option value="todo" ${status === "todo" ? "selected" : ""}>Not solved</option><option value="solved" ${status === "solved" ? "selected" : ""}>Solved</option></select>
        <label><input type="checkbox" id="f-core" ${core ? "checked" : ""}> ⭐ core only</label>
      </div>
      <div class="card" style="padding:0;overflow:auto">
        ${list.length ? h`<table><thead><tr><th></th><th>#</th><th>Problem</th><th>Difficulty</th><th>Pattern</th><th>Day</th></tr></thead><tbody>${rows}</tbody></table>` : raw('<div class="empty">Nothing matches these filters.</div>')}
      </div>`;
  }

  function viewPatterns() {
    var cards = PATTERN_IDS.map(function (id) {
      var pat = DATA.patterns[id];
      var items = PROBLEM_LIST.filter(function (e) { return e.pattern === id && (!state.coreOnly || e.p.core); });
      var done = items.filter(function (e) { return isSolved(e.p.slug); }).length;
      return h`<a class="card" href="#/patterns/${id}" style="color:inherit;text-decoration:none;border-top:3px solid ${phaseColor(pat.phase)}">
        <div class="row between"><h3 style="margin:0">${pat.name}</h3><span class="chip">Phase ${pat.phase}</span></div>
        <p class="small muted" style="margin:6px 0 10px">${pat.summary}</p>
        <div class="progress"><span style="width:${pct(done, items.length)}%;background:${phaseColor(pat.phase)}"></span></div>
        <div class="tiny muted mt" style="margin-top:6px">${done}/${items.length} problems</div>
      </a>`;
    });
    return h`<h1>Patterns</h1><p class="muted">${PATTERN_IDS.length} patterns cover every problem in the plan. Learn to recognise the cue, then drill the template.</p><div class="grid cols-3">${cards}</div>`;
  }

  function viewPattern(id) {
    var pat = DATA.patterns[id];
    if (!pat) return notFound();
    var items = PROBLEM_LIST.filter(function (e) { return e.pattern === id && (!state.coreOnly || e.p.core); });
    var days = DAYS.filter(function (d) { return d.pattern === id; });
    return h`
      <div class="eyebrow" style="color:${phaseColor(pat.phase)}">Phase ${pat.phase} · ${days.length} day${days.length === 1 ? "" : "s"}</div>
      <h1>${pat.name}</h1>
      <p class="muted">${pat.summary}</p>
      <div class="grid cols-2">
        <div class="card">
          <h3>Problems in this pattern <span class="muted small">${items.filter(function (e) { return isSolved(e.p.slug); }).length}/${items.length}</span></h3>
          ${items.length ? items.map(function (e) { return problemRow(e.p, { showDay: e.day }); }) : raw('<div class="muted small">Practised on review days — see the days below.</div>')}
        </div>
        <div>
          <div class="card mb"><div class="eyebrow">Recognise it when…</div><p style="margin:6px 0 0">${pat.cues}</p>
            <div class="row mt"><a class="btn sm" href="${REPO}/blob/main/patterns/${id}.md" target="_blank" rel="noopener">Full playbook with template ↗</a></div></div>
          <div class="card mb"><div class="eyebrow">Resources</div>${pat.resources.length ? h`<ul class="clean">${pat.resources.map(function (r) { return h`<li><a href="${r.url}" target="_blank" rel="noopener">${r.title}</a></li>`; })}</ul>` : raw('<p class="muted small">None yet.</p>')}</div>
          <div class="card"><div class="eyebrow">Scheduled days</div><div class="row mt">${days.map(function (d) { return h`<a class="chip" href="#/day/${d.day}" title="${d.topic}">${dayDone(d.day) ? "✓ " : ""}Day ${d.day}</a>`; })}</div></div>
        </div>
      </div>`;
  }

  function viewStats() {
    var st = stats();
    // heatmap: last 26 weeks ending today, columns = weeks, rows = weekday
    var cells = [], today = new Date(); today.setHours(0, 0, 0, 0);
    var start = new Date(today); start.setDate(start.getDate() - (26 * 7 - 1) - start.getDay());
    for (var d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
      var k = dayKey(d.getTime()), v = st.activity[k] || 0;
      var lvl = v === 0 ? "" : v < 2 ? "l1" : v < 4 ? "l2" : v < 7 ? "l3" : "l4";
      cells.push(h`<i class="${lvl}" title="${k}: ${v} item${v === 1 ? "" : "s"}"></i>`);
    }
    var phaseRows = DATA.phases.map(function (ph) {
      var s = st.perPhase[ph.id];
      return h`<tr><td><a href="#/phase/${ph.id}">Phase ${ph.id} — ${ph.title}</a></td><td>${s.done}/${s.total}</td><td style="width:40%"><div class="progress"><span style="width:${pct(s.done, s.total)}%;background:${ph.color}"></span></div></td><td>${s.daysDone}/30 days</td></tr>`;
    });
    return h`
      <h1>Stats &amp; backup</h1>
      <div class="grid cols-4 mb">
        <div class="card stat"><b>${st.solved}/${st.total}</b><span>problems solved (${pct(st.solved, st.total)}%)</span></div>
        <div class="card stat"><b>${st.streak}🔥</b><span>current streak · best ${st.bestStreak}</span></div>
        <div class="card stat"><b>${st.daysDone}/150</b><span>days marked complete</span></div>
        <div class="card stat"><b>${st.core[0]}/${st.core[1]}</b><span>⭐ core problems</span></div>
      </div>
      <div class="card mb"><h3>Activity — last 26 weeks</h3><div class="heatmap">${cells}</div><div class="tiny muted">One square per day; darker = more problems or day completions logged.</div></div>
      <div class="card mb" style="padding:0;overflow:auto"><table><thead><tr><th>Phase</th><th>Solved</th><th>Progress</th><th>Days</th></tr></thead><tbody>${phaseRows}</tbody></table></div>
      <div class="card mb">
        <h3>By difficulty</h3>
        <div class="row"><span class="chip easy">Easy ${st.byDiff.Easy[0]}/${st.byDiff.Easy[1]}</span><span class="chip medium">Medium ${st.byDiff.Medium[0]}/${st.byDiff.Medium[1]}</span><span class="chip hard">Hard ${st.byDiff.Hard[0]}/${st.byDiff.Hard[1]}</span></div>
      </div>
      <div class="card">
        <h3>Backup</h3>
        <p class="small muted">Progress is stored only in this browser (<code>localStorage</code>). Export a JSON file to move it to another device or keep it in your fork under <code>logs/</code>.</p>
        <div class="row">
          <button class="btn" id="export">Export JSON</button>
          <label class="btn">Import JSON <input type="file" id="import" accept="application/json" class="sr-only"></label>
          <button class="btn danger" id="reset">Reset all progress</button>
        </div>
      </div>`;
  }

  function notFound() { return h`<div class="card empty">Nothing here. <a href="#/">Back to the roadmap</a>.</div>`; }

  // ------------------------------------------------------------------ router
  function parseHash() {
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("?");
    var path = parts[0].split("/").filter(Boolean);
    var params = {};
    (parts[1] || "").split("&").forEach(function (kv) { if (!kv) return; var p = kv.split("="); params[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ""); });
    return { path: path, params: params };
  }
  var current = { path: [], params: {} };
  function render() {
    current = parseHash();
    var p = current.path, view;
    if (!p.length) view = viewHome();
    else if (p[0] === "phase") view = viewPhase(parseInt(p[1], 10));
    else if (p[0] === "day") view = viewDay(parseInt(p[1], 10));
    else if (p[0] === "problems") view = viewProblems(current.params);
    else if (p[0] === "patterns" && p[1]) view = viewPattern(p[1]);
    else if (p[0] === "patterns") view = viewPatterns();
    else if (p[0] === "stats") view = viewStats();
    else view = notFound();
    var app = document.getElementById("app");
    app.innerHTML = view.__raw;
    document.querySelectorAll(".nav a").forEach(function (a) {
      var key = a.getAttribute("data-route");
      a.classList.toggle("active", key === (p[0] || "home") || (key === "home" && (p[0] === "phase" || p[0] === "day")));
    });
    document.title = pageTitle(p) + " · DSA Mastery Plan";
    if (!p.length || p[0] !== "problems") window.scrollTo(0, 0);
    bind();
  }
  function pageTitle(p) {
    if (!p.length) return "Roadmap";
    if (p[0] === "day" && DAYS[p[1] - 1]) return "Day " + p[1] + " — " + DAYS[p[1] - 1].topic;
    if (p[0] === "phase" && PHASE_OF[p[1]]) return "Phase " + p[1] + " — " + PHASE_OF[p[1]].title;
    if (p[0] === "patterns" && p[1] && DATA.patterns[p[1]]) return DATA.patterns[p[1]].name;
    return p[0].charAt(0).toUpperCase() + p[0].slice(1);
  }

  // ------------------------------------------------------------------ events
  function bind() {
    var app = document.getElementById("app");
    app.querySelectorAll("input[data-slug]").forEach(function (cb) {
      cb.addEventListener("change", function () {
        toggleSolved(cb.getAttribute("data-slug"), cb.checked);
        var row = cb.closest(".problem-row, tr");
        if (row) row.classList.toggle("done", cb.checked);
        toast(cb.checked ? "Nice — marked solved" : "Unmarked");
        if (current.path[0] !== "problems") render(); // refresh counters
      });
    });
    var coreOnly = document.getElementById("coreOnly");
    if (coreOnly) coreOnly.addEventListener("change", function () { state.coreOnly = coreOnly.checked; save(); render(); });
    var dd = document.getElementById("dayDone");
    if (dd) dd.addEventListener("change", function () { setDayDone(parseInt(current.path[1], 10), dd.checked); toast(dd.checked ? "Day complete 🎉" : "Day reopened"); render(); });
    var markAll = document.getElementById("markAll");
    if (markAll) markAll.addEventListener("click", function () {
      var d = DAYS[parseInt(current.path[1], 10) - 1], ps = problemsOf(d);
      var allDone = ps.every(function (p) { return isSolved(p.slug); });
      ps.forEach(function (p) { toggleSolved(p.slug, !allDone); });
      render();
    });
    var notes = document.getElementById("notes");
    if (notes) {
      var t;
      notes.addEventListener("input", function () {
        clearTimeout(t);
        t = setTimeout(function () {
          var day = parseInt(current.path[1], 10);
          if (notes.value.trim()) state.notes[day] = notes.value; else delete state.notes[day];
          save();
        }, 300);
      });
    }
    var filters = document.getElementById("filters");
    if (filters) {
      var apply = function () {
        var q = { q: document.getElementById("f-q").value, diff: document.getElementById("f-diff").value, pattern: document.getElementById("f-pattern").value, status: document.getElementById("f-status").value, core: document.getElementById("f-core").checked ? "1" : "" };
        var qs = Object.keys(q).filter(function (k) { return q[k]; }).map(function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent(q[k]); }).join("&");
        var el = document.activeElement, pos = el && el.id === "f-q" ? el.selectionStart : null;
        location.hash = "#/problems" + (qs ? "?" + qs : "");
        if (pos !== null) { var box = document.getElementById("f-q"); box.focus(); box.setSelectionRange(pos, pos); }
      };
      var ft;
      document.getElementById("f-q").addEventListener("input", function () { clearTimeout(ft); ft = setTimeout(apply, 200); });
      ["f-diff", "f-pattern", "f-status", "f-core"].forEach(function (id) { document.getElementById(id).addEventListener("change", apply); });
    }
    var exp = document.getElementById("export");
    if (exp) exp.addEventListener("click", function () {
      var blob = new Blob([JSON.stringify({ exported: new Date().toISOString(), version: DATA.meta.version, state: state }, null, 2)], { type: "application/json" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "dsa-progress-" + dayKey(Date.now()) + ".json"; a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    });
    var imp = document.getElementById("import");
    if (imp) imp.addEventListener("change", function () {
      var f = imp.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          var j = JSON.parse(r.result); var s = j.state || j;
          if (!s.solved || typeof s.solved !== "object") throw new Error("bad file");
          state = Object.assign(defaultState(), s); save(); applyTheme(); render(); toast("Progress imported");
        } catch (e) { toast("That file is not a progress export"); }
      };
      r.readAsText(f);
    });
    var reset = document.getElementById("reset");
    if (reset) reset.addEventListener("click", function () {
      if (confirm("Reset all progress, notes and settings in this browser? Export first if you want a backup.")) {
        var theme = state.theme; state = defaultState(); state.theme = theme; save(); render(); toast("Progress reset");
      }
    });
  }

  var toastTimer;
  function toast(msg) {
    var el = document.getElementById("toast"); el.textContent = msg; el.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.classList.remove("show"); }, 1600);
  }

  // theme
  function applyTheme() {
    var t = state.theme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", t);
    var btn = document.getElementById("themeToggle");
    if (btn) btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
  document.getElementById("themeToggle").addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    state.theme = cur === "dark" ? "light" : "dark"; save(); applyTheme();
  });

  // global search + shortcuts
  var searchBox = document.getElementById("globalSearch");
  searchBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { location.hash = "#/problems?q=" + encodeURIComponent(searchBox.value); searchBox.blur(); }
  });
  document.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select" || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "/") { e.preventDefault(); searchBox.focus(); }
    else if (e.key === "n") { var nd = nextDay(); if (nd) location.hash = "#/day/" + nd.day; }
    else if (e.key === "t") { document.getElementById("themeToggle").click(); }
  });

  window.addEventListener("hashchange", render);
  applyTheme();
  render();
})();
