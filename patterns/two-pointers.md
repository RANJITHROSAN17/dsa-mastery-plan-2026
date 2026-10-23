# Two Pointers

> **Phase 1** · Two indices that move toward or away from each other over a sorted or partitioned sequence.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/two-pointers) · [Problem list](../PROBLEMS.md)

## When to use it

Sorted input, pairs/triplets with a target, palindromes, in-place partitioning.

## Recognise it

- Input is sorted (or can be sorted without breaking the answer) and you want pairs/triplets hitting a target.
- Palindrome checks, reversing, or comparing from both ends.
- Partitioning in place (move zeroes, Dutch national flag, remove duplicates).
- Container / area problems where moving the *limiting* side is the only move that can improve the answer.

## Template (Python)

```python
def pair_sum_sorted(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        s = nums[lo] + nums[hi]
        if s == target:
            return [lo, hi]
        if s < target:
            lo += 1                # need a bigger sum
        else:
            hi -= 1                # need a smaller sum
    return []

def three_sum(nums):
    nums.sort()
    out = []
    for i in range(len(nums) - 2):
        if i and nums[i] == nums[i - 1]:
            continue               # skip duplicate anchors
        lo, hi = i + 1, len(nums) - 1
        while lo < hi:
            s = nums[i] + nums[lo] + nums[hi]
            if s < 0:
                lo += 1
            elif s > 0:
                hi -= 1
            else:
                out.append([nums[i], nums[lo], nums[hi]])
                lo += 1
                while lo < hi and nums[lo] == nums[lo - 1]:
                    lo += 1        # skip duplicate second values
    return out

def remove_duplicates(nums):       # slow/fast writer pattern
    w = 0
    for r in range(len(nums)):
        if w == 0 or nums[r] != nums[w - 1]:
            nums[w] = nums[r]
            w += 1
    return w
```

## Complexity

O(n) after sorting (O(n log n) total if a sort is required); O(1) extra space.

## Pitfalls

- Using two pointers on **unsorted** input when the answer depends on original indices (Two Sum I) — use a hash map instead.
- Duplicate handling in 3Sum/4Sum: skip duplicates for *every* pointer, not just the anchor.
- Infinite loops when a pointer does not move in some branch — every branch must advance a pointer.
- Confusing the slow/fast writer pattern with fast/slow cycle detection (that one lives in linked lists).

## How to talk about it in an interview

State the invariant: everything left of `lo` / right of `hi` is already decided; explain why moving one specific pointer is safe.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [8](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/8) | [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) ⭐ | 🟢 Easy |
| [8](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/8) | [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) [▶](https://www.youtube.com/watch?v=cQ1Oz4ckceM) | 🟡 Medium |
| [8](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/8) | [344. Reverse String](https://leetcode.com/problems/reverse-string/) | 🟢 Easy |
| [9](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/9) | [15. 3Sum](https://leetcode.com/problems/3sum/) ⭐ | 🟡 Medium |
| [9](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/9) | [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/) | 🟡 Medium |
| [9](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/9) | [75. Sort Colors](https://leetcode.com/problems/sort-colors/) | 🟡 Medium |
| [10](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/10) | [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/) ⭐ | 🟡 Medium |
| [10](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/10) | [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) ⭐ | 🔴 Hard |
| [10](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/10) | [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/) | 🟢 Easy |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Two pointers — USACO Guide](https://usaco.guide/silver/two-pointers)
- [Arrays cheatsheet (two pointers section) — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/array/)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
