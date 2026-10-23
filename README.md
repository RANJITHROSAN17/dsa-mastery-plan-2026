# DSA Mastery Plan — 150 Days

A structured, five-phase **150-day Data Structures & Algorithms study plan** aimed at
MAANG-style interviews, with an interactive dashboard to track progress and a set of templates
for the habits that actually make the difference: daily logs, post-mortems of problems you got
wrong, and a personal pattern cheat-sheet.

**Live dashboard →** https://ranjithrosan17.github.io/dsa-mastery-plan-2026/

## The plan

| phase | days | focus |
|---|---|---|
| 1 · Foundations | 1 – 30 | Big-O, arrays, strings, hashing, two pointers, sliding window, binary search, sorting |
| 2 · Linked lists & recursion | 31 – 60 | linked lists, stacks/queues, recursion, backtracking, bit manipulation |
| 3 · Trees & graphs | 61 – 90 | binary trees, BSTs, heaps, tries, BFS/DFS, topological sort, union-find, shortest paths |
| 4 · Advanced algorithms | 91 – 120 | greedy, intervals, divide & conquer, monotonic stacks, prefix sums, advanced graphs |
| 5 · Dynamic programming & mastery | 121 – 150 | 1-D/2-D DP, knapsack, strings DP, DP on trees/graphs, mock interviews, revision |

Each day has a topic, a short concept goal, 2–4 curated problems with difficulty tags, and links
to learning resources. Phase 1 is fully detailed day-by-day in `curriculum-data.js`; phases 2–5
follow the weekly structure in [`LEARNING-RESOURCES.md`](LEARNING-RESOURCES.md) and are rendered
by the dashboard from that structure.

## The dashboard

A single static page (no build step, no framework): filter days by phase, difficulty or topic,
search problems, open a day to see its goals and resources, tick it off, and export your progress
as JSON. Progress is stored in `localStorage`, so it survives reloads but stays on your device.

```
index.html               page markup
curriculum-data.js       the curriculum (edit this to change the plan)
assets/premium-app.js    rendering, filters, search, progress tracking, export
assets/premium-style.css styles
```

Run it locally with any static server, e.g. `python -m http.server 8000` and open
<http://localhost:8000>.

## Using the plan for yourself

1. **Fork** this repository so your logs live in your own copy.
2. Read [`GETTING-STARTED.md`](GETTING-STARTED.md) (10 min) — it walks through the daily routine.
3. Every day: pick the day in the dashboard, solve the problems, then fill in a log from the
   template in [`logs/day-01.md`](logs/day-01.md).
4. Got something wrong or needed the editorial? Write a short post-mortem in
   [`postmortems/`](postmortems/README.md). This is the highest-leverage habit in the whole plan.
5. When a new technique clicks, add it to [`patterns.md`](patterns.md) with the day you learned it.

Recommended pace is 3–4 focused hours a day; the schedule and a weekly rhythm are in
`LEARNING-RESOURCES.md`, together with books, practice platforms and company-specific focus areas.

## Repository map

| path | purpose |
|---|---|
| `GETTING-STARTED.md` | how to set up and run the daily routine |
| `LEARNING-RESOURCES.md` | the full 150-day roadmap, resources, schedule templates |
| `patterns.md` | algorithmic pattern cheat-sheet you fill in as you go |
| `logs/` | one markdown log per day (template provided) |
| `postmortems/` | one file per problem that deserved a deeper look |
| `REPOSITORY-STRUCTURE.md` | more detail on the layout |
| `CONTRIBUTING.md` | how to propose problems, resources or fixes |

## Contributing

Better problem picks, broken links, clearer explanations, or a fully detailed day for phases 2–5 —
all welcome. See [`CONTRIBUTING.md`](CONTRIBUTING.md). If this helped you, a ⭐ helps others find it.
