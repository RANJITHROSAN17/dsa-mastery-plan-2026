# Learning resources

A short, opinionated list. Every link below was opened and checked when it was added (YouTube links through the oEmbed API, so the video or playlist actually exists). Pattern-specific links live in each playbook under `patterns/` — this page is for the bigger pieces.

> Rule of thumb: **one** primary course, **one** problem list (this plan), and theory references you open only when a playbook sends you there. Collecting resources is not practising.

## Problem lists this plan is calibrated against

| Resource | Why it matters |
|---|---|
| [NeetCode roadmap](https://neetcode.io/roadmap) · [NeetCode 150](https://neetcode.io/practice) | The pattern-ordered graph most people learn from; this plan's phases follow a similar dependency order. |
| [Grind 75](https://www.techinterviewhandbook.org/grind75/) | The original Blind 75 author's updated, schedulable list. Our ⭐ core set overlaps heavily. |
| [Striver's A2Z DSA sheet](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/) · [SDE sheet](https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/) | Broadest free coverage with videos for every problem; good for topic deep dives. |
| [Sean Prashad's LeetCode Patterns](https://seanprashad.com/leetcode-patterns/) | Problems tagged by pattern and company; useful for extra reps on a weak pattern. |
| [CSES Problem Set](https://cses.fi/problemset/) | Classic, judge-verified algorithm problems without LeetCode's noise — great after Phase 3. |

## Video courses

| Resource | Use it for |
|---|---|
| [Abdul Bari — Algorithms (playlist)](https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O) | Theory with proofs: complexity, divide & conquer, greedy, DP. Watch the relevant lecture when a playbook feels hand-wavy. |
| [William Fiset — Data structures (playlist)](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu) · [Graph theory (playlist)](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P) | The clearest visual explanations of union-find, heaps, Dijkstra, topological sort, bridges. Phase 3 companion. |
| [freeCodeCamp — Data structures easy to advanced (Fiset, 8h)](https://www.youtube.com/watch?v=RBSGKlAvoiM) | The same material as one long course. |
| [freeCodeCamp — Graph theory course (Fiset)](https://www.youtube.com/watch?v=09_LlHjoEiY) | One sitting for all of graph theory. |
| [freeCodeCamp — Dynamic programming (Alvin Zablocki, 5h)](https://www.youtube.com/watch?v=oBt53YbR9Kk) | Memoisation → tabulation, explained slowly. Watch before Phase 5. |
| [take U forward — A2Z DSA course (playlist)](https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz) | Problem-by-problem walkthroughs in C++/Java; also topic series on [recursion & backtracking](https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9), [stacks & queues](https://www.youtube.com/playlist?list=PLgUwDviBIf0pOd5zvVVSzgpo6BaCpHT9c), [trees](https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk) and [DP](https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY). |
| [Kunal Kushwaha — Java + DSA bootcamp (playlist)](https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ) | Beginner-friendly if you are also learning Java. |
| [NeetCode — Blind 75 solutions (playlist)](https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf) | Short Python walkthroughs; 18 of them are linked directly from problems in this plan (▶). |
| [Big-O notation in 100 seconds (Fireship)](https://youtu.be/g2o22C3CRfU) · [Hash tables — CS50 shorts](https://youtu.be/nvzVHwrrub0) | Two quick primers for day 1. |

## Theory references

| Resource | Use it for |
|---|---|
| [cp-algorithms](https://cp-algorithms.com/) | Precise write-ups with code for every algorithm named in the playbooks (DSU, Dijkstra, KMP, sieve, binary exponentiation, …). |
| [USACO Guide](https://usaco.guide/) | Structured modules (Bronze → Platinum) with curated problems; the Silver/Gold sections map almost 1:1 to Phases 1–5. |
| [Tech Interview Handbook — algorithms cheatsheets](https://www.techinterviewhandbook.org/) | One-page summaries per data structure: what to say, common techniques, corner cases. |
| [Big-O cheat sheet](https://www.bigocheatsheet.com/) | Complexity table for data structures and sorting algorithms. |
| [VisuAlgo](https://visualgo.net/en) | Step-through animations for sorting, BST, heap, graph traversal, union-find. |
| [Competitive Programmer's Handbook (Laaksonen, free PDF)](https://cses.fi/book/book.pdf) | Compact book covering everything in Phases 1–5 and beyond. |

## Books

- **Grokking Algorithms** (Bhargava) — [publisher page](https://www.manning.com/books/grokking-algorithms-second-edition). Illustrated and gentle; read in the first two weeks if you are new.
- **Elements of Programming Interviews** — [site](https://elementsofprogramminginterviews.com/). Harder than LeetCode mediums; good source of mock questions in Phase 5.
- **Cracking the Coding Interview** (McDowell) — [site](https://www.crackingthecodinginterview.com/). Dated problems, still the best chapter on *how* interviews are run and evaluated.
- **Introduction to Algorithms** (CLRS) — the reference. Consult, do not read cover to cover.

## Practice platforms and mock interviews

| Resource | Notes |
|---|---|
| [LeetCode](https://leetcode.com) | Where all problems in the plan live. The free tier is enough for everything here. |
| [Codeforces](https://codeforces.com/) · [AtCoder](https://atcoder.jp/) | Timed contests sharpen speed and reading precision. Div. 2 A–C / ABC A–D are the right level after Phase 2. |
| [HackerRank — data structures](https://www.hackerrank.com/domains/data-structures) | Gentler implementation practice for linked lists, stacks and trees. |
| [Pramp](https://www.pramp.com/) · [interviewing.io](https://interviewing.io/) | Peer and professional mock interviews. Book one at the end of each phase. |
| [Hello Interview](https://www.hellointerview.com/) | System-design practice once DSA is on autopilot. |

## Other roadmap repositories worth knowing

- [jwasham/coding-interview-university](https://github.com/jwasham/coding-interview-university) — the exhaustive CS self-study plan.
- [kdn251/interviews](https://github.com/kdn251/interviews) — algorithm implementations and interview notes in Java.
- [TheAlgorithms/Python](https://github.com/TheAlgorithms/Python) — reference implementations to compare your templates against.
- [labuladong's algorithm notes (English)](https://labuladong.online/algo/en/) — framework-style pattern explanations.
- [AlgoMonster](https://algo.monster/) — pattern-first course with a flowchart for choosing patterns (partly paid).

*Something broken or outdated? Open an issue — links here are meant to be re-checked, not trusted forever.*
