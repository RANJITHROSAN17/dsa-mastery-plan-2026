# DSA Mastery Plan 2026

## Complete 5-Month DSA Mastery Plan for MAANG Interviews

> 150 Days of Daily Tasks, Resources, Progress Tracking | Built from Striver's A2Z Sheet, SDE Sheet (191), NeetCode 150, Blind 75, Love Babbar 450 & GeeksforGeeks SDE

**Primary Language:** C++ (switch to Python only if you're significantly faster in it)
**Primary Problem Source:** [LeetCode](https://leetcode.com)
**Primary Theory Source:** [Striver's A2Z Sheet](https://takeuforward.org/dsa/strivers-a2z-dsa-course-sheet)

---

## Live Demo

**View Live**: [GitHub Pages](https://ranjithrosan17.github.io/dsa-mastery-plan-2026)

---

## Project Structure

```
dsa-mastery-plan-2026/
├── index.html          # Main UI page - dashboard, navigation, progress
├── styles.css          # All styling - dark theme, animations, responsive
├── data.js             # Complete 5-month DSA plan - topics, problems, resources
├── app.js              # App logic - tabs, progress tracking, localStorage
├── README.md           # This file
├── logs/               # Daily log entries (day-01.md, day-02.md, ...)
├── postmortems/        # Deep dives on hard/failed problems
├── patterns.md         # Running pattern tracker cheatsheet
└── assets/             # Icons, images (optional)
```

---

## Daily Routine (60-90 min per day)

Every day follows this time-boxed structure:

| Step | Time | Activity |
|------|------|----------|
| 1. Concept | 10-20 min | Skim 1 pattern/concept. Add 2-3 lines to `patterns.md` |
| 2. Problems | 40-60 min | 1 easy (warm-up) + 1-2 mediums on that topic |
| 3. Review | 10 min | Re-implement one prior problem from memory OR explain approach in log |

Create a log file for each day: `logs/day-XX.md` (see template below)

---

## Log Template (`logs/day-XX.md`)

```markdown
# Day XX - [Topic]

**Date:** YYYY-MM-DD
**Time spent:** X mins

## Concepts
- Key idea learned today:

## Problems Solved
| # | Problem | Difficulty | Approach | Time Complexity | Notes |
|---|---------|------------|----------|-----------------|-------|
| 1 | | Easy | | | |
| 2 | | Medium | | | |

## Mistakes Today
- [ ] Off-by-one errors
- [ ] Wrong complexity analysis
- [ ] Missed edge cases
- [ ] Misidentified pattern

## What I'll Change Tomorrow
-
```

---

## Pattern Tracker (`patterns.md`)

Add a row every time you learn a new pattern:

| Pattern | Key Idea | Trigger (when to use) | Example Problem |
|---------|----------|-----------------------|-----------------|
| Sliding Window | Shrink/expand window on array | Contiguous subarray with constraint | Longest substring without repeat |
| Two Pointers | L+R pointers moving inward/outward | Sorted array, pair sum | 3Sum |
| Binary Search | Halve search space | Sorted input or monotonic answer | Search in rotated array |
| BFS | Level-order traversal | Shortest path, graph layers | Word Ladder |
| DFS | Explore all paths recursively | Connectivity, permutations | Number of Islands |
| Kadane's | Track running max subarray | Max/min subarray sum | Maximum Subarray |

---

## Optimized Monthly Breakdown

> Tags: 🔵 **Core** (must-do) | 🟡 **Stretch** (do if ahead of schedule)

| Day Range | Focus Topic | Review Topic | Tag | Goal Type |
|-----------|-------------|--------------|-----|-----------|
| 1-10 | Arrays & Strings | Language basics (C++) | 🔵 Core | Learn |
| 11-20 | Two Pointers, Prefix Sum | Arrays & Strings | 🔵 Core | Practice |
| 21-30 | Sliding Window, Hashing | Two Pointers | 🔵 Core | Practice |
| 31 | **Revision Day** | Days 1-30 mixed | 🔵 Core | Revise |
| 32-41 | Linked Lists (singly, doubly) | Hashing | 🔵 Core | Learn |
| 42-51 | Stacks & Queues | Linked Lists | 🔵 Core | Practice |
| 52-61 | Recursion & Binary Search | Stacks | 🔵 Core | Practice |
| 62 | **Revision Day** | Days 32-61 mixed | 🔵 Core | Revise |
| 63-75 | Trees (traversals, BFS/DFS) | Binary Search | 🔵 Core | Learn |
| 76-85 | BST + Heaps | Trees | 🔵 Core | Practice |
| 86-90 | Hashing (advanced), Tries | Heaps | 🔵 Core | Practice |
| 91 | **Revision Day** | Days 63-90 mixed | 🔵 Core | Revise |
| 92-105 | Graphs (BFS, DFS, Topo Sort) | Trees | 🔵 Core | Learn |
| 106-115 | Shortest Paths (Dijkstra, BF) | Graphs | 🔵 Core | Practice |
| 116-125 | DP 1D & 2D (bottom-up) | Graphs | 🔵 Core | Learn |
| 126 | **Revision Day** | Days 92-125 mixed | 🔵 Core | Revise |
| 127-135 | DP advanced (knapsack, LCS, LIS) | DP basics | 🟡 Stretch | Learn |
| 136-140 | Greedy & Backtracking | DP | 🔵 Core | Practice |
| 141-145 | Segment Trees, Fenwick Trees | Graphs | 🟡 Stretch | Learn |
| 146-150 | Mock interviews + contests | ALL topics | 🔵 Core | Simulate |

---

## Features

- **Daily Plan**: 150 days of structured DSA learning
- **Core/Stretch Tags**: Skip 🟡 Stretch days safely when time is tight
- **Revision Days**: Built-in every ~30 days to reinforce retention
- **Pattern Tracker**: Running cheatsheet of all patterns learned
- **Daily Logs**: Per-day markdown logs for mistakes and reflections
- **Postmortems**: Deep analysis of problems you got wrong or found hard
- **Resource Links**: Direct links to Striver, NeetCode, GeeksforGeeks, LeetCode
- **Progress Tracking**: Mark tasks complete, track percentage, localStorage persistence
- **Dark Theme**: Easy on the eyes for long study sessions

---

## Security Researcher Mindset for DSA

As a security researcher, you already think in constraints and edge cases. Apply that here:

- **Define constraints first** — like scoping a target: input size, value ranges, edge cases before coding
- **Treat complexity like attack surface** — can you reduce time/space like trimming a payload?
- **Bug log = Postmortems** — each tricky problem gets a `/postmortems/problem-name.md` with root cause analysis
- **CTF-style pressure** — use LeetCode weekly contests in months 4-5 to train under time pressure

---

## Quick Start

1. Clone the repository
2. Open `index.html` in your browser
3. Or visit: https://ranjithrosan17.github.io/dsa-mastery-plan-2026
4. Create `logs/day-01.md` from the template above before starting Day 1
5. Update `patterns.md` every time you learn a new technique

---

## Resources Used

- [Striver's A2Z Sheet](https://takeuforward.org/dsa/strivers-a2z-dsa-course-sheet)
- [Striver's SDE Sheet](https://takeuforward.org/dsa/strivers-sde-sheet-top-coding-interview-problems)
- [NeetCode 150](https://neetcode.io/practice)
- [Blind 75](https://leetcode.com/studyplan/leetcode-75)
- [Love Babbar 450](https://450dsa.com/)
- [GeeksforGeeks SDE Sheet](https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/)

---

## Author

**RANJITHROSAN17** - Cybersecurity Researcher & DSA Enthusiast

---

*Built with ❤️ for cracking MAANG interviews*
