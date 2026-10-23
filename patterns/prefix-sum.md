# Prefix Sum

> **Phase 1** · Precomputed running totals so any range query becomes O(1).

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/prefix-sum) · [Problem list](../PROBLEMS.md)

## When to use it

Many range-sum queries, 'subarray sum equals/divisible by k', balance/equilibrium questions.

## Recognise it

- Many range-sum queries on a static array → precompute `pre[i] = sum(nums[:i])`.
- "Number of subarrays with sum == k / divisible by k" → prefix sums + hash map of seen prefixes (works with negatives).
- Equilibrium / pivot index, left-vs-right comparisons, balance between two sides.
- 2-D grids with many rectangle-sum queries → 2-D prefix sums with inclusion–exclusion.

## Template (Python)

```python
def build_prefix(nums):
    pre = [0]
    for x in nums:
        pre.append(pre[-1] + x)
    return pre                       # sum(nums[l:r]) == pre[r] - pre[l]

def subarray_sum_equals_k(nums, k):
    seen = {0: 1}                    # prefix value -> how many times seen
    total = running = 0
    for x in nums:
        running += x
        total += seen.get(running - k, 0)
        seen[running] = seen.get(running, 0) + 1
    return total

def subarrays_div_by_k(nums, k):
    seen = {0: 1}
    total = running = 0
    for x in nums:
        running = (running + x) % k  # Python % is always non-negative
        total += seen.get(running, 0)
        seen[running] = seen.get(running, 0) + 1
    return total

class Matrix2D:                      # LC 304
    def __init__(self, grid):
        R, C = len(grid), len(grid[0])
        self.p = [[0] * (C + 1) for _ in range(R + 1)]
        for r in range(R):
            for c in range(C):
                self.p[r + 1][c + 1] = grid[r][c] + self.p[r][c + 1] + self.p[r + 1][c] - self.p[r][c]

    def sum_region(self, r1, c1, r2, c2):
        p = self.p
        return p[r2 + 1][c2 + 1] - p[r1][c2 + 1] - p[r2 + 1][c1] + p[r1][c1]
```

## Complexity

O(n) preprocessing, O(1) per query. Hash-map counting variants are O(n) time and space.

## Pitfalls

- Forgetting to seed `seen = {0: 1}` — subarrays starting at index 0 are otherwise missed.
- Updating the map **before** querying it (counts the current prefix against itself).
- Negative remainders in languages other than Python: normalise with `((x % k) + k) % k`.
- Using prefix sums for *updates* — if the array changes, you want a Fenwick tree or segment tree.

## How to talk about it in an interview

Say: "sum(l..r) = pre[r+1] − pre[l], so I look for an earlier prefix equal to current − k."

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [15](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/15) | [303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) | 🟢 Easy |
| [15](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/15) | [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | 🟡 Medium |
| [15](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/15) | [724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) | 🟢 Easy |
| [16](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/16) | [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/) | 🟡 Medium |
| [16](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/16) | [523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) | 🟡 Medium |
| [16](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/16) | [304. Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/) | 🟡 Medium |
| [100](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/100) | [1109. Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/) | 🟡 Medium |
| [100](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/100) | [2270. Number of Ways to Split Array](https://leetcode.com/problems/number-of-ways-to-split-array/) | 🟡 Medium |
| [100](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/100) | [918. Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Prefix sums — USACO Guide](https://usaco.guide/silver/prefix-sums)
- [More on prefix sums — USACO Guide](https://usaco.guide/silver/more-prefix-sums)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
