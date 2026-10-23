# Mixed Practice

> **Phase 5** · Timed sets drawn from every pattern — the real interview condition.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/mixed) · [Problem list](../PROBLEMS.md)

## When to use it

Mock interviews and review days.

## Recognise it

- Mock days: no label tells you the pattern — classify from the constraints (n ≤ 20 → exponential OK; n ≤ 10⁵ → O(n log n); n ≤ 10⁸ → O(√n)/O(log n)).
- Read the input shape: sorted? graph? intervals? strings? Each shape has 2–3 candidate patterns.
- Look for the question verb: "longest/shortest contiguous" (window), "minimum X to achieve Y" (binary search / greedy), "number of ways" (DP), "all configurations" (backtracking).
- If you are stuck for 5 minutes, write the brute force — the repeated work points to the pattern.

## Template (Python)

```python
# Interview rhythm for an unseen problem (aim: 35–40 minutes)
#
#  1. Restate the problem + 2 examples (incl. one edge case)           ~3 min
#  2. Constraints → target complexity (n ≤ 1e5 → O(n log n))          ~1 min
#  3. Brute force out loud, name what is recomputed                    ~3 min
#  4. Pick the pattern (see PATTERNS.md), state the invariant/state    ~3 min
#  5. Code top-down, small helper functions, meaningful names         ~15 min
#  6. Trace one example by hand, then the edge case                    ~5 min
#  7. Complexity + what you would test/extend                          ~2 min

def classify(constraints_n):
    if constraints_n <= 12:   return "brute force / permutations"
    if constraints_n <= 25:   return "bitmask or meet-in-the-middle"
    if constraints_n <= 500:  return "O(n^3) interval DP is fine"
    if constraints_n <= 5000: return "O(n^2) DP / two loops"
    if constraints_n <= 10**6:return "O(n log n): sort, heap, binary search, window, DP"
    return "O(log n) / O(sqrt n) / math"
```

## Complexity

Decide the target complexity from the constraints *before* choosing an algorithm.

## Pitfalls

- Jumping into code before an example is traced — most mock failures are mis-read problems.
- Silence: narrate the plan, even when you are unsure; interviewers grade the process.
- Ignoring the given constraints (they are the biggest hint on the page).
- Not timing yourself — the plan's mock days are meant to be done on a clock.

## How to talk about it in an interview

Use the seven-step rhythm above on every mock problem; log the time spent per step in `logs/`.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [29](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/29) | [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/) | 🟡 Medium |
| [29](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/29) | [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/) | 🟢 Easy |
| [29](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/29) | [202. Happy Number](https://leetcode.com/problems/happy-number/) | 🟢 Easy |
| [29](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/29) | [290. Word Pattern](https://leetcode.com/problems/word-pattern/) | 🟢 Easy |
| [30](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/30) | [31. Next Permutation](https://leetcode.com/problems/next-permutation/) | 🟡 Medium |
| [30](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/30) | [189. Rotate Array](https://leetcode.com/problems/rotate-array/) | 🟡 Medium |
| [30](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/30) | [18. 4Sum](https://leetcode.com/problems/4sum/) | 🟡 Medium |
| [59](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/59) | [224. Basic Calculator](https://leetcode.com/problems/basic-calculator/) | 🔴 Hard |
| [59](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/59) | [1472. Design Browser History](https://leetcode.com/problems/design-browser-history/) | 🟡 Medium |
| [59](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/59) | [460. LFU Cache](https://leetcode.com/problems/lfu-cache/) | 🔴 Hard |
| [60](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/60) | [946. Validate Stack Sequences](https://leetcode.com/problems/validate-stack-sequences/) | 🟡 Medium |
| [60](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/60) | [89. Gray Code](https://leetcode.com/problems/gray-code/) | 🟡 Medium |
| [89](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/89) | [987. Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) | 🔴 Hard |
| [89](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/89) | [1368. Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/) | 🔴 Hard |
| [89](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/89) | [1192. Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/) | 🔴 Hard |
| [90](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/90) | [222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/) | 🟡 Medium |
| [90](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/90) | [1020. Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/) | 🟡 Medium |
| [118](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/118) | [68. Text Justification](https://leetcode.com/problems/text-justification/) | 🔴 Hard |
| [118](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/118) | [1647. Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) | 🟡 Medium |
| [118](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/118) | [773. Sliding Puzzle](https://leetcode.com/problems/sliding-puzzle/) | 🔴 Hard |
| [119](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/119) | [995. Minimum Number of K Consecutive Bit Flips](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/) | 🔴 Hard |
| [119](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/119) | [1499. Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/) | 🔴 Hard |
| [119](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/119) | [659. Split Array into Consecutive Subsequences](https://leetcode.com/problems/split-array-into-consecutive-subsequences/) | 🟡 Medium |
| [120](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/120) | [2187. Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/) | 🟡 Medium |
| [120](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/120) | [2226. Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/) | 🟡 Medium |
| [142](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/142) | [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) | 🟡 Medium |
| [142](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/142) | [921. Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) | 🟡 Medium |
| [142](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/142) | [1161. Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/) | 🟡 Medium |
| [142](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/142) | [931. Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/) | 🟡 Medium |
| [143](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/143) | [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/) | 🔴 Hard |
| [143](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/143) | [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) | 🔴 Hard |
| [143](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/143) | [449. Serialize and Deserialize BST](https://leetcode.com/problems/serialize-and-deserialize-bst/) | 🟡 Medium |
| [143](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/143) | [140. Word Break II](https://leetcode.com/problems/word-break-ii/) | 🔴 Hard |
| [144](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/144) | [532. K-diff Pairs in an Array](https://leetcode.com/problems/k-diff-pairs-in-an-array/) | 🟡 Medium |
| [144](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/144) | [1423. Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) | 🟡 Medium |
| [144](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/144) | [2096. Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/) | 🟡 Medium |
| [144](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/144) | [1235. Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | 🔴 Hard |
| [145](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/145) | [934. Shortest Bridge](https://leetcode.com/problems/shortest-bridge/) | 🟡 Medium |
| [145](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/145) | [1306. Jump Game III](https://leetcode.com/problems/jump-game-iii/) | 🟡 Medium |
| [145](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/145) | [1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) | 🟡 Medium |
| [145](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/145) | [1857. Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/) | 🔴 Hard |
| [146](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/146) | [432. All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure/) | 🔴 Hard |
| [146](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/146) | [381. Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/) | 🔴 Hard |
| [146](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/146) | [855. Exam Room](https://leetcode.com/problems/exam-room/) | 🟡 Medium |
| [146](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/146) | [1206. Design Skiplist](https://leetcode.com/problems/design-skiplist/) | 🔴 Hard |
| [147](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/147) | [678. Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) | 🟡 Medium |
| [147](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/147) | [398. Random Pick Index](https://leetcode.com/problems/random-pick-index/) | 🟡 Medium |
| [147](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/147) | [1525. Number of Good Ways to Split a String](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/) | 🟡 Medium |
| [147](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/147) | [983. Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/) | 🟡 Medium |
| [148](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/148) | [834. Sum of Distances in Tree](https://leetcode.com/problems/sum-of-distances-in-tree/) | 🔴 Hard |
| [148](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/148) | [220. Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/) | 🔴 Hard |
| [149](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/149) | [2402. Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/) | 🔴 Hard |
| [149](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/149) | [2360. Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/) | 🔴 Hard |
| [149](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/149) | [1937. Maximum Number of Points with Cost](https://leetcode.com/problems/maximum-number-of-points-with-cost/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [NeetCode roadmap](https://neetcode.io/roadmap)
- [Tech Interview Handbook — coding interview study plan](https://www.techinterviewhandbook.org/coding-interview-study-plan/)
- [NeetCode — Blind 75 solutions playlist (YouTube)](https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
