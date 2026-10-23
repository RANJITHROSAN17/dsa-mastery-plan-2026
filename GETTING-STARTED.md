# Getting started

A ten-minute setup, then a routine you can repeat for 150 days.

## 1. Open the tracker

- Online: **https://ranjithrosan17.github.io/dsa-mastery-plan-2026/**
- Offline: clone the repository and open `index.html` in any browser. Nothing to install.

Your progress is saved in the browser you use. If you switch browsers or devices, use **Stats → Backup → Export JSON** and import it on the other side.

## 2. Pick your track

| | Full plan | Fast track |
|---|---|---|
| Problems | all 466 | the 75 ⭐ core problems |
| Pace | 2–5 problems/day, ~150 days | 2–3 problems/day, ~6 weeks |
| For | building depth before interviews | an interview in the next two months |

Tick **Fast track** on the tracker's home page to switch. You can turn it off later and continue with everything you skipped.

## 3. Set up your log (optional but recommended)

Fork the repository so you can commit your own notes:

```bash
git clone https://github.com/<you>/dsa-mastery-plan-2026.git
cd dsa-mastery-plan-2026
cp logs/TEMPLATE.md logs/day-001.md
```

The daily log template is short on purpose — the point is to record *what fooled you*, not to transcribe solutions.

## 4. The daily routine

| Step | Time | What |
|---|---|---|
| Read | 10–15 min | Day goal, learn items, the pattern playbook (`patterns/<id>.md`) |
| Solve | 25–35 min per problem | No hints for the first 20 minutes. Then read the idea, close it, implement from memory. |
| Record | 5 min | Tick problems, mark the day complete, write two lines in **Notes** |
| Explain | 5 min | Say the pattern's invariant and complexity out loud, as if to an interviewer |

Shortcut keys on the tracker: <kbd>n</kbd> next day, <kbd>/</kbd> search, <kbd>t</kbd> theme.

## 5. Weekly and per-phase rhythm

- **Day 7 of each week**: re-solve the two hardest problems of the week from a blank editor.
- **Days 29–30 of each phase**: a timed mock set (90 minutes, 3–4 unseen problems) and a retro in `postmortems/`.
- **Phase 5, weeks 3–4**: mixed mocks every day — the closest simulation of real interviews in the plan.

## 6. When you get stuck

1. Re-read the pattern's **cues** — are you sure it is this pattern? Mock days deliberately mix them.
2. Write the brute force. The repeated work it does is almost always the hint.
3. Read the editorial *approach only*, close it, and implement. Mark the problem for a repeat in 3–5 days.
4. Write a postmortem if you were confidently wrong — those are the highest-value notes you will ever take.

## 7. Where things are

| I want to… | Go to |
|---|---|
| see every day of a phase as a document | [`curriculum/`](curriculum/README.md) |
| find a specific problem | [`PROBLEMS.md`](PROBLEMS.md) or the tracker's **Problems** tab |
| learn a pattern | [`PATTERNS.md`](PATTERNS.md) → `patterns/<id>.md` |
| go deeper than the plan | [`LEARNING-RESOURCES.md`](LEARNING-RESOURCES.md) |
| change the plan | [`CONTRIBUTING.md`](CONTRIBUTING.md) |
