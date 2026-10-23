#!/usr/bin/env node
/* Headless smoke test for the tracker. Requires jsdom (CI installs it; locally: npm install --no-save jsdom).
   Loads index.html with scripts enabled, walks every route, toggles state and checks persistence. */
"use strict";
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const dom = new JSDOM(html, {
  url: "https://ranjithrosan17.github.io/dsa-mastery-plan-2026/",
  runScripts: "outside-only",
  pretendToBeVisual: true,
});
const { window } = dom;
window.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {} });
window.scrollTo = () => {};
window.confirm = () => true;
window.URL.createObjectURL = () => "blob:x";
window.URL.revokeObjectURL = () => {};
window.eval(fs.readFileSync(path.join(root, "assets/curriculum.data.js"), "utf8"));
window.eval(fs.readFileSync(path.join(root, "assets/app.js"), "utf8"));

let failures = 0;
function check(cond, msg) {
  if (cond) console.log("  ok   " + msg);
  else { failures++; console.log("  FAIL " + msg); }
}
function go(hash) {
  window.location.hash = hash;
  window.dispatchEvent(new window.Event("hashchange"));
  return window.document.getElementById("app");
}
const $ = (sel) => window.document.querySelector(sel);
const $$ = (sel) => Array.from(window.document.querySelectorAll(sel));
const DATA = window.DSA_DATA;

console.log("routes");
check($("#app").textContent.includes("Phases"), "home renders phase list");
check($$("#app .phase-card").length === DATA.phases.length, "home shows one card per phase");
check(go("#/phase/1").querySelectorAll(".day-row").length === 30, "phase 1 lists 30 days");
check(go("#/day/1").textContent.includes("Day 1"), "day 1 renders");
check(go("#/day/150").textContent.includes("Day 150"), "day 150 renders");
check(go("#/problems").querySelectorAll("tbody tr").length > 400, "problems table lists all problems");
check(go("#/problems?q=two%20sum").querySelectorAll("tbody tr").length >= 1, "search filters problems");
check(go("#/problems?diff=Hard").querySelectorAll("tbody tr").length > 50, "difficulty filter works");
check(go("#/patterns").querySelectorAll(".card").length === Object.keys(DATA.patterns).length, "patterns grid lists every pattern");
check(go("#/patterns/sliding-window").textContent.includes("Sliding Window"), "pattern detail renders");
check(go("#/stats").querySelectorAll(".heatmap i").length > 150, "stats heatmap renders");
check(go("#/nope").textContent.includes("Nothing here"), "unknown route shows not-found");
check(window.document.title.includes("DSA Mastery Plan"), "document title is set");

console.log("state");
go("#/day/1");
const cb = $("#app input[data-slug]");
const slug = cb.getAttribute("data-slug");
cb.checked = true;
cb.dispatchEvent(new window.Event("change", { bubbles: true }));
let saved = JSON.parse(window.localStorage.getItem("dsa150:v2"));
check(saved && saved.solved && saved.solved[slug], "ticking a problem persists to localStorage");
check(go("#/").textContent.includes("1/" + Object.keys(indexProblems()).length), "home counter reflects solved problem");
go("#/day/1");
$("#dayDone").checked = true;
$("#dayDone").dispatchEvent(new window.Event("change", { bubbles: true }));
saved = JSON.parse(window.localStorage.getItem("dsa150:v2"));
check(saved.days && saved.days["1"], "marking a day complete persists");
go("#/day/2");
check($("#app").textContent.includes("Day 2"), "navigating to next day works");
go("#/");
$("#coreOnly").checked = true;
$("#coreOnly").dispatchEvent(new window.Event("change", { bubbles: true }));
saved = JSON.parse(window.localStorage.getItem("dsa150:v2"));
check(saved.coreOnly === true, "fast-track toggle persists");
const coreRows = go("#/problems").querySelectorAll("tbody tr").length;
const coreCount = Object.values(indexProblems()).filter((p) => p.core).length;
check(coreRows === coreCount, "fast track shows only core problems (" + coreRows + ")");
$("#f-core").checked = false;
$("#f-core").dispatchEvent(new window.Event("change", { bubbles: true }));
go("#/");
$("#coreOnly").checked = false;
$("#coreOnly").dispatchEvent(new window.Event("change", { bubbles: true }));
go("#/stats");
$("#reset").click();
saved = JSON.parse(window.localStorage.getItem("dsa150:v2"));
check(Object.keys(saved.solved).length === 0 && Object.keys(saved.days).length === 0, "reset clears progress");

console.log("theme");
$("#themeToggle").click();
const theme = window.document.documentElement.getAttribute("data-theme");
check(theme === "dark" || theme === "light", "theme toggle sets data-theme (" + theme + ")");

console.log("data integrity");
const seen = new Set();
let total = 0;
DATA.phases.forEach((ph) => ph.weeks.forEach((w) => w.days.forEach((d) => { total++; d.problems.forEach((p) => seen.add(p.slug)); })));
check(total === DATA.meta.days, "data has " + DATA.meta.days + " days");
check(seen.size > 400, "data has " + seen.size + " unique problems");

function indexProblems() {
  const out = {};
  DATA.phases.forEach((ph) => ph.weeks.forEach((w) => w.days.forEach((d) => d.problems.forEach((p) => { if (!out[p.slug]) out[p.slug] = p; }))));
  return out;
}

if (failures) { console.log(failures + " check(s) failed"); process.exit(1); }
console.log("all checks passed");
