# Binary Search

> **Phase 1** · Halve the search space each step — on indices, on sorted structure, or on the answer itself.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/binary-search) · [Problem list](../PROBLEMS.md)

## When to use it

Sorted/rotated arrays, monotonic predicates, 'minimum X such that condition holds'.

## Recognise it

- Sorted or rotated-sorted array; "find / insert position / first or last occurrence".
- A **monotonic predicate**: once `ok(x)` becomes true it stays true → binary search the answer (min speed, min capacity, min days).
- "Minimise the maximum" / "maximise the minimum" almost always means binary search on the answer plus a greedy check.
- Peak finding and local structure problems (the array is not sorted but half can still be discarded).

## Template (Python)

```python
def lower_bound(nums, target):
    """First index with nums[i] >= target (== bisect_left)."""
    lo, hi = 0, len(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid
    return lo

def first_true(lo, hi, ok):
    """Smallest x in [lo, hi] with ok(x) True; ok is monotone False...True."""
    while lo < hi:
        mid = (lo + hi) // 2
        if ok(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo

def min_eating_speed(piles, h):      # LC 875 — binary search on the answer
    ok = lambda k: sum(-(-p // k) for p in piles) <= h
    return first_true(1, max(piles), ok)

def search_rotated(nums, target):    # LC 33
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[lo] <= nums[mid]:                     # left half sorted
            if nums[lo] <= target < nums[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:                                         # right half sorted
            if nums[mid] < target <= nums[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return -1
```

## Complexity

O(log n) comparisons; O(n log(answer range)) when the check itself is linear.

## Pitfalls

- Mixing the two loop styles: `while lo < hi` with `hi = mid` vs `while lo <= hi` with `hi = mid - 1`. Pick one and keep its invariant.
- Infinite loop when searching for the *last* true: use `mid = (lo + hi + 1) // 2` when `lo = mid`.
- Searching the answer space with the wrong bounds (answer must be inside `[lo, hi]`).
- Overflow of `lo + hi` in other languages — use `lo + (hi - lo) // 2`.

## How to talk about it in an interview

State the predicate, argue it is monotone, give the bounds, then write the standard `first_true` loop.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [17](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/17) | [704. Binary Search](https://leetcode.com/problems/binary-search/) [▶](https://www.youtube.com/watch?v=s4DPM8ct1pI) | 🟢 Easy |
| [17](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/17) | [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/) | 🟢 Easy |
| [17](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/17) | [278. First Bad Version](https://leetcode.com/problems/first-bad-version/) | 🟢 Easy |
| [18](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/18) | [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | 🟡 Medium |
| [18](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/18) | [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) ⭐ | 🟡 Medium |
| [18](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/18) | [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) ⭐ | 🟡 Medium |
| [19](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/19) | [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | 🟡 Medium |
| [19](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/19) | [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/) | 🟡 Medium |
| [19](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/19) | [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/) | 🟢 Easy |
| [20](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/20) | [875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | 🟡 Medium |
| [20](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/20) | [1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | 🟡 Medium |
| [20](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/20) | [1482. Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | 🟡 Medium |
| [21](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/21) | [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | 🟡 Medium |
| [21](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/21) | [240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) | 🟡 Medium |
| [21](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/21) | [540. Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/) | 🟡 Medium |
| [21](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/21) | [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | 🔴 Hard |
| [102](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/102) | [378. Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) | 🟡 Medium |
| [102](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/102) | [658. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/) | 🟡 Medium |
| [102](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/102) | [324. Wiggle Sort II](https://leetcode.com/problems/wiggle-sort-ii/) | 🟡 Medium |
| [103](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/103) | [410. Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | 🔴 Hard |
| [103](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/103) | [1552. Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/) | 🟡 Medium |
| [103](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/103) | [1283. Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Binary search — cp-algorithms](https://cp-algorithms.com/num_methods/binary_search.html)
- [Binary search — USACO Guide](https://usaco.guide/silver/binary-search)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
