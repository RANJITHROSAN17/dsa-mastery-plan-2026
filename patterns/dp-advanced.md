# Interval, Tree, Bitmask & Digit DP

> **Phase 5** · Harder state spaces: ranges, subtrees, subsets, digit positions.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/dp-advanced) · [Problem list](../PROBLEMS.md)

## When to use it

Burst balloons, game theory on arrays, tree cameras, 'visit all nodes', counting numbers ≤ N.

## Recognise it

- **Interval DP**: answer for `[i, j]` built from a split point k — burst balloons, matrix chain, strange printer, minimum cost to cut.
- **Tree DP**: post-order returns a small tuple per subtree (rob houses III, cameras, diameter with constraints).
- **Bitmask DP**: n ≤ 20 and the state is "which items are used" — shortest superstring, visit all nodes, partition to k subsets.
- **Digit DP**: count numbers ≤ N with a property, processed digit by digit with a `tight` flag.
- **Game DP**: minimax over ranges (predict the winner, stone game) — define `dp[i][j]` as score difference.

## Template (Python)

```python
from functools import lru_cache

def max_coins(nums):                        # LC 312 burst balloons, interval DP
    a = [1] + nums + [1]; n = len(a)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(n - length):
            j = i + length
            dp[i][j] = max(a[i] * a[k] * a[j] + dp[i][k] + dp[k][j] for k in range(i + 1, j))
    return dp[0][n - 1]

def rob_tree(root):                         # LC 337, tree DP returns (rob_this, skip_this)
    def go(node):
        if not node: return 0, 0
        l, r = go(node.left), go(node.right)
        return node.val + l[1] + r[1], max(l) + max(r)
    return max(go(root))

def shortest_path_all_nodes(graph):         # LC 847, BFS over (node, mask)
    from collections import deque
    n = len(graph); full = (1 << n) - 1
    q = deque((i, 1 << i, 0) for i in range(n)); seen = {(i, 1 << i) for i in range(n)}
    while q:
        u, mask, d = q.popleft()
        if mask == full: return d
        for v in graph[u]:
            nm = mask | 1 << v
            if (v, nm) not in seen:
                seen.add((v, nm)); q.append((v, nm, d + 1))
    return 0

def count_numbers_without_repeated_digit(n):    # digit DP skeleton (LC 1012 flavour)
    digits = list(map(int, str(n)))
    @lru_cache(None)
    def go(pos, mask, tight, started):
        if pos == len(digits): return 1 if started else 0
        limit = digits[pos] if tight else 9
        total = 0 if started else go(pos + 1, mask, False, False)   # leading zero → still not started
        for d in range(0 if started else 1, limit + 1):
            if mask >> d & 1: continue
            total += go(pos + 1, mask | 1 << d, tight and d == limit, True)
        return total
    return go(0, 0, True, False)

def stone_game_diff(piles):                 # minimax as score difference
    n = len(piles); dp = [[0] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        dp[i][i] = piles[i]
        for j in range(i + 1, n):
            dp[i][j] = max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1])
    return dp[0][n - 1]
```

## Complexity

Interval DP O(n³); tree DP O(n); bitmask DP O(2ⁿ · n or n²); digit DP O(digits × states × 10).

## Pitfalls

- Interval DP: iterate by increasing **length**, not by i then j, or sub-intervals are not ready.
- Burst balloons: think of the **last** balloon to burst in a range, not the first.
- Bitmask DP: forgetting the visited set on `(node, mask)` → exponential BFS.
- Digit DP: the `started`/leading-zero flag is needed whenever zeros are special.

## How to talk about it in an interview

Name the DP family, define the state tuple exactly, and estimate the state count × transition cost before coding.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [135](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/135) | [312. Burst Balloons](https://leetcode.com/problems/burst-balloons/) | 🔴 Hard |
| [135](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/135) | [1130. Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/) | 🟡 Medium |
| [135](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/135) | [664. Strange Printer](https://leetcode.com/problems/strange-printer/) | 🔴 Hard |
| [136](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/136) | [877. Stone Game](https://leetcode.com/problems/stone-game/) | 🟡 Medium |
| [136](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/136) | [486. Predict the Winner](https://leetcode.com/problems/predict-the-winner/) | 🟡 Medium |
| [136](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/136) | [132. Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/) | 🔴 Hard |
| [137](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/137) | [337. House Robber III](https://leetcode.com/problems/house-robber-iii/) | 🟡 Medium |
| [137](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/137) | [968. Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/) | 🔴 Hard |
| [137](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/137) | [2246. Longest Path With Different Adjacent Characters](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/) | 🔴 Hard |
| [138](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/138) | [847. Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) | 🔴 Hard |
| [138](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/138) | [464. Can I Win](https://leetcode.com/problems/can-i-win/) | 🟡 Medium |
| [138](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/138) | [1349. Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/) | 🔴 Hard |
| [139](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/139) | [1335. Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/) | 🔴 Hard |
| [139](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/139) | [1220. Count Vowels Permutation](https://leetcode.com/problems/count-vowels-permutation/) | 🔴 Hard |
| [139](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/139) | [363. Max Sum of Rectangle No Larger Than K](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/) | 🔴 Hard |
| [140](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/140) | [902. Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/) | 🔴 Hard |
| [140](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/140) | [357. Count Numbers with Unique Digits](https://leetcode.com/problems/count-numbers-with-unique-digits/) | 🟡 Medium |
| [140](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/140) | [600. Non-negative Integers without Consecutive Ones](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/) | 🔴 Hard |
| [141](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/141) | [403. Frog Jump](https://leetcode.com/problems/frog-jump/) | 🔴 Hard |
| [141](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/141) | [413. Arithmetic Slices](https://leetcode.com/problems/arithmetic-slices/) | 🟡 Medium |
| [141](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/141) | [1463. Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/) | 🔴 Hard |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Range (interval) DP — USACO Guide](https://usaco.guide/gold/dp-ranges)
- [Bitmask DP — USACO Guide](https://usaco.guide/gold/dp-bitmasks)
- [DP on trees — USACO Guide](https://usaco.guide/gold/dp-trees)
- [Digit DP — USACO Guide](https://usaco.guide/gold/digit-dp)
- [take U forward — Dynamic Programming playlist (YouTube)](https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
