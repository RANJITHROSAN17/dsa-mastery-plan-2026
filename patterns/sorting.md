# Sorting & Selection

> **Phase 1** · Comparison sorts, counting sorts, custom comparators and quickselect.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/sorting) · [Problem list](../PROBLEMS.md)

## When to use it

Order matters, k-th element, grouping by a key, intervals pre-processing.

## Recognise it

- The answer depends on relative order, ranks, or adjacency after sorting (meeting rooms, largest number, relative sort).
- k-th smallest / largest in an unsorted array → quickselect (average O(n)) or a heap.
- Values in a small known range → counting sort / bucket sort in O(n).
- Custom comparators: sort by a derived key, or by concatenation order (`a+b` vs `b+a`).

## Template (Python)

```python
import random
from functools import cmp_to_key

def quickselect(nums, k):
    """k-th smallest (0-based) in average O(n)."""
    lo, hi = 0, len(nums) - 1
    while True:
        pivot = nums[random.randint(lo, hi)]
        i, lt, gt = lo, lo, hi
        while i <= gt:                   # 3-way partition (Dutch flag)
            if nums[i] < pivot:
                nums[i], nums[lt] = nums[lt], nums[i]
                i += 1; lt += 1
            elif nums[i] > pivot:
                nums[i], nums[gt] = nums[gt], nums[i]
                gt -= 1
            else:
                i += 1
        if k < lt:
            hi = lt - 1
        elif k > gt:
            lo = gt + 1
        else:
            return pivot

def largest_number(nums):                # LC 179 — comparator sort
    s = sorted(map(str, nums), key=cmp_to_key(lambda a, b: -1 if a + b > b + a else 1))
    return "0" if s[0] == "0" else "".join(s)

def counting_sort(nums, max_value):
    count = [0] * (max_value + 1)
    for x in nums:
        count[x] += 1
    out = []
    for v, c in enumerate(count):
        out.extend([v] * c)
    return out

def merge_sort(a):
    if len(a) <= 1:
        return a
    mid = len(a) // 2
    left, right = merge_sort(a[:mid]), merge_sort(a[mid:])
    out, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            out.append(left[i]); i += 1
        else:
            out.append(right[j]); j += 1
    return out + left[i:] + right[j:]
```

## Complexity

Comparison sorts O(n log n); counting/bucket O(n + range); quickselect O(n) average, O(n²) worst (randomise the pivot).

## Pitfalls

- Python's `sort` is stable — rely on it for multi-key sorts (sort by secondary key first, or use tuple keys).
- Quickselect without a random pivot degrades on sorted input.
- Sorting destroys original indices — store `(value, index)` pairs when indices matter.
- Comparator must be a strict weak ordering; inconsistent comparators give undefined results.

## How to talk about it in an interview

Ask whether O(n log n) is acceptable; if the interviewer pushes for better, mention counting sort (bounded range) or quickselect (order statistics).

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [22](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/22) | [912. Sort an Array](https://leetcode.com/problems/sort-an-array/) | 🟡 Medium |
| [22](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/22) | [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | 🟡 Medium |
| [22](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/22) | [179. Largest Number](https://leetcode.com/problems/largest-number/) | 🟡 Medium |
| [23](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/23) | [451. Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) | 🟡 Medium |
| [23](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/23) | [274. H-Index](https://leetcode.com/problems/h-index/) | 🟡 Medium |
| [23](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/23) | [561. Array Partition](https://leetcode.com/problems/array-partition/) | 🟢 Easy |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Sorting & searching cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/sorting-searching/)
- [Custom comparators — USACO Guide](https://usaco.guide/silver/sorting-custom)
- [Sorting algorithms visualised — VisuAlgo](https://visualgo.net/en/sorting)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
