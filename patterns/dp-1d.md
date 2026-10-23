# 1-D Dynamic Programming

> **Phase 5** · State = position (and a small flag); transitions look back a constant or linear distance.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/dp-1d) · [Problem list](../PROBLEMS.md)

## When to use it

Stairs/robber/decode families, LIS, stock machines, partition feasibility.

## Recognise it

- Optimal/count over a sequence where the answer at i depends on a few earlier positions: climbing stairs, house robber, decode ways, min cost.
- "Longest increasing subsequence" (O(n²) or patience sorting O(n log n)).
- Stock problems with state machines (holding / not holding / cooldown).
- Partition feasibility and word break: `dp[i]` = "prefix of length i is achievable".

## Template (Python)

```python
from bisect import bisect_left
from functools import lru_cache

def climb_stairs(n):
    a, b = 1, 1                     # dp[i-2], dp[i-1]
    for _ in range(n - 1):
        a, b = b, a + b
    return b

def rob(nums):
    prev, cur = 0, 0                # best up to i-2, i-1
    for x in nums:
        prev, cur = cur, max(cur, prev + x)
    return cur

def num_decodings(s):
    dp = [0] * (len(s) + 1); dp[0] = 1
    for i in range(1, len(s) + 1):
        if s[i - 1] != "0":
            dp[i] += dp[i - 1]
        if i > 1 and "10" <= s[i - 2:i] <= "26":
            dp[i] += dp[i - 2]
    return dp[-1]

def length_of_lis(nums):            # O(n log n) patience sorting
    tails = []
    for x in nums:
        i = bisect_left(tails, x)
        if i == len(tails): tails.append(x)
        else: tails[i] = x
    return len(tails)

def word_break(s, words):
    words = set(words); dp = [True] + [False] * len(s)
    for i in range(1, len(s) + 1):
        dp[i] = any(dp[j] and s[j:i] in words for j in range(i))
    return dp[-1]

def max_profit_cooldown(prices):    # state machine: hold / sold / rest
    hold, sold, rest = float("-inf"), 0, 0
    for p in prices:
        hold, sold, rest = max(hold, rest - p), hold + p, max(rest, sold)
    return max(sold, rest)

def top_down_example(nums):         # memoised recursion when the recurrence is clearer that way
    @lru_cache(None)
    def f(i):
        if i >= len(nums): return 0
        return max(nums[i] + f(i + 2), f(i + 1))
    return f(0)
```

## Complexity

O(n · transitions); space O(n), often O(1) with rolling variables.

## Pitfalls

- Wrong base cases (`dp[0]` for the empty prefix is usually 1 for counting, 0 for sums).
- Not defining the state precisely — write `dp[i] = …` in words before code.
- Stock state machines: order of updates matters when you overwrite variables (use tuple assignment).
- Top-down recursion depth on n = 10⁵: switch to bottom-up.

## How to talk about it in an interview

Say the state, the recurrence, the base case, and the answer cell — in that order, before touching the keyboard.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [121](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/121) | [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) ⭐ | 🟢 Easy |
| [121](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/121) | [746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/) | 🟢 Easy |
| [121](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/121) | [1137. N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/) | 🟢 Easy |
| [122](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/122) | [198. House Robber](https://leetcode.com/problems/house-robber/) ⭐ | 🟡 Medium |
| [122](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/122) | [213. House Robber II](https://leetcode.com/problems/house-robber-ii/) ⭐ | 🟡 Medium |
| [122](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/122) | [740. Delete and Earn](https://leetcode.com/problems/delete-and-earn/) | 🟡 Medium |
| [123](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/123) | [91. Decode Ways](https://leetcode.com/problems/decode-ways/) ⭐ | 🟡 Medium |
| [123](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/123) | [139. Word Break](https://leetcode.com/problems/word-break/) ⭐ | 🟡 Medium |
| [123](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/123) | [279. Perfect Squares](https://leetcode.com/problems/perfect-squares/) | 🟡 Medium |
| [124](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/124) | [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) ⭐ | 🟡 Medium |
| [124](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/124) | [673. Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) | 🟡 Medium |
| [124](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/124) | [354. Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/) | 🔴 Hard |
| [125](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/125) | [152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) ⭐ | 🟡 Medium |
| [125](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/125) | [1014. Best Sightseeing Pair](https://leetcode.com/problems/best-sightseeing-pair/) | 🟡 Medium |
| [125](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/125) | [978. Longest Turbulent Subarray](https://leetcode.com/problems/longest-turbulent-subarray/) | 🟡 Medium |
| [126](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/126) | [309. Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | 🟡 Medium |
| [126](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/126) | [714. Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) | 🟡 Medium |
| [126](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/126) | [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) | 🔴 Hard |
| [126](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/126) | [188. Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) | 🔴 Hard |
| [127](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/127) | [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | 🟡 Medium |
| [127](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/127) | [494. Target Sum](https://leetcode.com/problems/target-sum/) | 🟡 Medium |
| [127](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/127) | [1049. Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Dynamic programming cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/dynamic-programming/)
- [Introduction to DP — USACO Guide](https://usaco.guide/gold/intro-dp)
- [Introduction to DP — cp-algorithms](https://cp-algorithms.com/dynamic_programming/intro-to-dp.html)
- [Longest increasing subsequence — cp-algorithms](https://cp-algorithms.com/sequences/longest_increasing_subsequence.html)
- [take U forward — Dynamic Programming playlist (YouTube)](https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY)
- [freeCodeCamp — Dynamic Programming course (YouTube)](https://www.youtube.com/watch?v=oBt53YbR9Kk)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
