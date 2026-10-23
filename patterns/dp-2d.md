# 2-D & Knapsack DP

> **Phase 5** · Grid paths, bounded/unbounded knapsack, multi-dimensional state.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/dp-2d) · [Problem list](../PROBLEMS.md)

## When to use it

Grids, coin/target sums, 'choose items with capacity'.

## Recognise it

- Grid paths / min path sum / obstacles → `dp[r][c]` from top and left.
- Knapsack family: 0/1 (iterate capacity **downwards**), unbounded (upwards), bounded, subset-sum, target sum, coin change (count vs min).
- Two sequences or two choices → 2-D table (see string DP for the string flavour).
- "Choose items with a capacity constraint" almost always maps to knapsack.

## Template (Python)

```python
def unique_paths(m, n):
    row = [1] * n
    for _ in range(1, m):
        for c in range(1, n):
            row[c] += row[c - 1]        # from top (old row[c]) + left
    return row[-1]

def min_path_sum(grid):
    R, C = len(grid), len(grid[0])
    dp = [float("inf")] * (C + 1); dp[1] = 0
    for r in range(R):
        for c in range(C):
            dp[c + 1] = grid[r][c] + min(dp[c + 1], dp[c])
    return dp[C]

def can_partition(nums):                # 0/1 knapsack feasibility
    total = sum(nums)
    if total % 2: return False
    target = total // 2
    dp = [True] + [False] * target
    for x in nums:
        for s in range(target, x - 1, -1):      # downwards: each item once
            dp[s] = dp[s] or dp[s - x]
    return dp[target]

def coin_change_min(coins, amount):     # unbounded knapsack, minimise count
    dp = [0] + [float("inf")] * amount
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a:
                dp[a] = min(dp[a], dp[a - c] + 1)
    return -1 if dp[amount] == float("inf") else dp[amount]

def coin_change_ways(coins, amount):    # count combinations (coins outer → no permutations)
    dp = [1] + [0] * amount
    for c in coins:
        for a in range(c, amount + 1):
            dp[a] += dp[a - c]
    return dp[amount]

def find_target_sum_ways(nums, target):  # subset-sum transform
    total = sum(nums)
    if (total + target) % 2 or abs(target) > total: return 0
    goal = (total + target) // 2
    dp = [1] + [0] * goal
    for x in nums:
        for s in range(goal, x - 1, -1):
            dp[s] += dp[s - x]
    return dp[goal]
```

## Complexity

O(rows × cols) for grids; O(n × capacity) for knapsack (pseudo-polynomial).

## Pitfalls

- 0/1 knapsack with the capacity loop going **upwards** silently becomes unbounded.
- Counting combinations vs permutations (Coin Change II vs Combination Sum IV) depends on which loop is outer.
- Obstacles: set `dp = 0` at obstacle cells *after* computing, and handle the first row/column.
- Using `inf` sentinels in integer DP in other languages → overflow on `+1`.

## How to talk about it in an interview

Draw the table, fill the first row/column by hand, then describe how one cell depends on its neighbours.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [128](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/128) | [62. Unique Paths](https://leetcode.com/problems/unique-paths/) ⭐ | 🟡 Medium |
| [128](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/128) | [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/) | 🟡 Medium |
| [128](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/128) | [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) | 🟡 Medium |
| [129](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/129) | [120. Triangle](https://leetcode.com/problems/triangle/) | 🟡 Medium |
| [129](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/129) | [174. Dungeon Game](https://leetcode.com/problems/dungeon-game/) | 🔴 Hard |
| [129](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/129) | [221. Maximal Square](https://leetcode.com/problems/maximal-square/) | 🟡 Medium |
| [130](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/130) | [322. Coin Change](https://leetcode.com/problems/coin-change/) ⭐ | 🟡 Medium |
| [130](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/130) | [518. Coin Change II](https://leetcode.com/problems/coin-change-ii/) | 🟡 Medium |
| [130](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/130) | [377. Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) ⭐ | 🟡 Medium |
| [131](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/131) | [474. Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/) | 🟡 Medium |
| [131](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/131) | [1155. Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/) | 🟡 Medium |
| [131](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/131) | [879. Profitable Schemes](https://leetcode.com/problems/profitable-schemes/) | 🔴 Hard |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Knapsack DP — USACO Guide](https://usaco.guide/gold/knapsack)
- [Paths on grids — USACO Guide](https://usaco.guide/gold/paths-grids)
- [Knapsack problem — cp-algorithms](https://cp-algorithms.com/dynamic_programming/knapsack.html)
- [take U forward — Dynamic Programming playlist (YouTube)](https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
