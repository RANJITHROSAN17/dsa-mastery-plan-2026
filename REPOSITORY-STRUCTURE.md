# Repository structure

```
dsa-mastery-plan-2026/
├── index.html                    Tracker shell (hash-routed single page)
├── assets/
│   ├── app.js                    Tracker logic — vanilla JS, no dependencies
│   ├── styles.css                Tracker styles (light/dark via CSS variables)
│   ├── curriculum.data.js        GENERATED data bundle (window.DSA_DATA) so file:// works
│   ├── banner.svg, roadmap.svg   GENERATED README artwork (scripts/render_assets.py)
│   ├── favicon.svg
│   └── social-card.png           GENERATED Open Graph image
├── data/
│   └── curriculum.json           THE PLAN — the only file you need to edit to change it
├── scripts/
│   ├── build.py                  Validate the data + regenerate every derived file (`--check` for CI)
│   ├── render_assets.py          Render banner / roadmap / favicon / social card
│   ├── check_links.py            Verify internal Markdown links and anchors
│   └── smoke_test.js             Headless tracker test (jsdom) used by CI
├── curriculum/
│   ├── README.md                 GENERATED phase index
│   └── phase-N-<slug>.md         GENERATED one document per phase: every day and problem
├── patterns/
│   └── <pattern-id>.md           33 hand-written playbooks; problem/resource lists are generated blocks
├── PROBLEMS.md                   GENERATED table of all problems (number, difficulty, pattern, day)
├── PATTERNS.md                   GENERATED pattern index with counts and cues
├── logs/                         Your daily log (template + example)
├── postmortems/                  Your retros for problems you got wrong
├── LEARNING-RESOURCES.md         Curated, link-checked courses, books, sites and channels
├── GETTING-STARTED.md            First-day walkthrough
├── CONTRIBUTING.md               How to propose changes
├── LICENSE                       MIT
└── .github/
    ├── workflows/ci.yml          build --check · node --check · link check · smoke test
    ├── ISSUE_TEMPLATE/           Problem suggestion · bug report
    └── PULL_REQUEST_TEMPLATE.md
```

## The data model

`data/curriculum.json` has three top-level keys:

```jsonc
{
  "meta":     { "title": "...", "version": "2.0.0", "days": 150, "updated": "YYYY-MM-DD", "source": "..." },
  "patterns": {                       // id -> pattern (order = curriculum order)
    "sliding-window": {
      "id": "sliding-window", "name": "Sliding Window", "phase": 1,
      "summary": "...", "cues": "...",
      "resources": [ { "title": "...", "url": "https://..." } ]
    }
  },
  "phases": [                         // 5 phases × 30 days
    {
      "id": 1, "title": "Foundations", "span": "Days 1–30", "summary": "...", "color": "#2563eb",
      "weeks": [                      // 4 × 7 days + a 2-day "Mock & retro" week
        { "week": 1, "title": "Arrays & Hashing · Math & Simulation", "days_span": "1–7",
          "days": [
            { "day": 1, "phase": 1, "week": 1,
              "kind": "learn",        // learn | review | mock
              "pattern": "arrays-hashing", "topic": "Big-O & array basics",
              "goal": "...", "learn": ["...", "..."],
              "problems": [
                { "id": 1, "slug": "two-sum", "title": "Two Sum", "difficulty": "Easy",
                  "url": "https://leetcode.com/problems/two-sum/",
                  "core": true,                       // optional: fast-track problem
                  "video": "https://www.youtube.com/watch?v=..."   // optional, verified
                  // "repeat": true  when the slug already appeared on an earlier day
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

`scripts/build.py` validates: contiguous days, 30 days per phase, weeks 1–5, known patterns and kinds, URL/slug consistency, difficulty values, repeat flags, and that every pattern is scheduled at least once.

## Tracker storage

Progress is kept in `localStorage["dsa150:v2"]`:

```jsonc
{ "solved": { "<slug>": 1710000000000 },   // timestamp per solved problem
  "days":   { "12": 1710000000000 },       // timestamp per completed day
  "notes":  { "12": "free text" },
  "theme": "dark" | "light" | null, "coreOnly": false }
```

Timestamps power the streak counter and the activity heatmap. **Stats → Backup** exports/imports this object as JSON.
