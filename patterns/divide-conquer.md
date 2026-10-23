# Divide & Conquer

> **Phase 4** · Split, solve halves, combine — often counting across the merge step.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/divide-conquer) · [Problem list](../PROBLEMS.md)

## When to use it

Inversion-style counting, 'ways to parenthesise', k-th in sorted matrices.

## Recognise it

- Split the input in halves, solve each, and the interesting work happens in the **merge** (count inversions, reverse pairs, count smaller after self).
- "Different ways to add parentheses" / unique BSTs → recurse on every split point and combine results.
- Maximum subarray / closest pair / k-th in two sorted arrays also have divide-and-conquer forms.
- Master theorem gives the complexity: T(n) = a·T(n/b) + f(n).

## Template (Python)

```python
def reverse_pairs(nums):                    # LC 493: count i<j with nums[i] > 2*nums[j]
    def sort(lo, hi):
        if hi - lo <= 1:
            return 0
        mid = (lo + hi) // 2
        count = sort(lo, mid) + sort(mid, hi)
        j = mid
        for i in range(lo, mid):                 # both halves sorted → two pointers
            while j < hi and nums[i] > 2 * nums[j]:
                j += 1
            count += j - mid
        nums[lo:hi] = sorted(nums[lo:hi])        # (or an explicit merge)
        return count
    return sort(0, len(nums))

def diff_ways(expr):                            # LC 241
    memo = {}
    def go(s):
        if s in memo: return memo[s]
        out = []
        for i, c in enumerate(s):
            if c in "+-*":
                for a in go(s[:i]):
                    for b in go(s[i + 1:]):
                        out.append(a + b if c == "+" else a - b if c == "-" else a * b)
        if not out:
            out = [int(s)]
        memo[s] = out
        return out
    return go(expr)

def count_smaller(nums):                        # LC 315 via merge sort on indices
    res = [0] * len(nums)
    def sort(idx):
        if len(idx) <= 1: return idx
        mid = len(idx) // 2
        left, right = sort(idx[:mid]), sort(idx[mid:])
        merged, j = [], 0
        for i in left:
            while j < len(right) and nums[right[j]] < nums[i]:
                merged.append(right[j]); j += 1
            res[i] += j
            merged.append(i)
        return merged + right[j:]
    sort(list(range(len(nums))))
    return res
```

## Complexity

T(n) = 2T(n/2) + O(n) → O(n log n) for merge-style counting; memoised split problems are polynomial via Catalan structure.

## Pitfalls

- Counting across the merge in the wrong order (count **before** merging destroys the halves' sorted order you rely on).
- Forgetting to memoise overlapping substrings in "ways to parenthesise" problems.
- Recursion depth on n = 10⁵ is fine (log n), but slicing lists at every level adds O(n) copies — acceptable, just be aware.
- Using divide-and-conquer where a prefix-sum/one-pass solution exists (max subarray) — mention both.

## How to talk about it in an interview

Write the recurrence first (e.g. `T(n) = 2T(n/2) + n`), name the merge step's job, then code it.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [101](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/101) | [315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | 🔴 Hard |
| [101](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/101) | [493. Reverse Pairs](https://leetcode.com/problems/reverse-pairs/) | 🔴 Hard |
| [101](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/101) | [241. Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Sorting & searching cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/sorting-searching/)
- [Divide-and-conquer algorithm — Wikipedia](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)
- [Merge sort — Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
