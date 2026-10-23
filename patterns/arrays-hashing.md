# Arrays & Hashing

> **Phase 1** · Index arithmetic, in-place edits and O(1) lookups with hash maps/sets.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/arrays-hashing) · [Problem list](../PROBLEMS.md)

## When to use it

Need to count, de-duplicate, group, or look something up fast → hash it.

## Recognise it

- You need to answer "have I seen this before?" or "how many times?" — a set/dict turns an O(n²) scan into O(n).
- Grouping by a derived key (sorted letters, character counts, remainders) → `dict[key] -> list`.
- Running best-so-far questions (max subarray, best stock day) → one pass with a running value (Kadane).
- In-place rearrangement with O(1) extra space → index arithmetic or cyclic placement.

## Template (Python)

```python
def two_sum(nums, target):
    seen = {}                      # value -> index
    for i, x in enumerate(nums):
        if target - x in seen:     # O(1) lookup replaces the inner loop
            return [seen[target - x], i]
        seen[x] = i
    return []

def group_anagrams(words):
    groups = {}
    for w in words:
        key = tuple(sorted(w))     # or a 26-count tuple for O(k)
        groups.setdefault(key, []).append(w)
    return list(groups.values())

def max_subarray(nums):            # Kadane
    best = cur = nums[0]
    for x in nums[1:]:
        cur = max(x, cur + x)      # extend or restart
        best = max(best, cur)
    return best
```

## Complexity

Typically O(n) time and O(n) space for hash-based solutions; O(1) space when you can use index arithmetic.

## Pitfalls

- Mutating a list while iterating over it; iterate over a copy or build a new list.
- Hashing unhashable keys — convert lists to tuples / strings first.
- Forgetting that `dict` lookups on `target - x` must happen **before** inserting `x` when the same element may not be reused.
- Off-by-one on prefix/suffix products or sums; write the loop bounds down before coding.

## How to talk about it in an interview

Say the brute force (O(n²)), name what is being recomputed, then introduce the hash map that caches it.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [1](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/1) | [1. Two Sum](https://leetcode.com/problems/two-sum/) ⭐ [▶](https://www.youtube.com/watch?v=KLlXCFG5TnA) | 🟢 Easy |
| [1](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/1) | [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) ⭐ [▶](https://www.youtube.com/watch?v=3OamzN90kPg) | 🟢 Easy |
| [1](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/1) | [1480. Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) | 🟢 Easy |
| [2](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/2) | [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | 🟢 Easy |
| [2](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/2) | [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/) | 🟢 Easy |
| [2](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/2) | [27. Remove Element](https://leetcode.com/problems/remove-element/) | 🟢 Easy |
| [3](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/3) | [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) ⭐ | 🟢 Easy |
| [3](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/3) | [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/) ⭐ [▶](https://www.youtube.com/watch?v=vzdNOK2oB2E) | 🟡 Medium |
| [3](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/3) | [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) | 🟢 Easy |
| [4](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/4) | [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) | 🟢 Easy |
| [4](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/4) | [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) ⭐ | 🟡 Medium |
| [4](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/4) | [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) ⭐ | 🟡 Medium |
| [5](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/5) | [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) ⭐ | 🟡 Medium |
| [5](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/5) | [169. Majority Element](https://leetcode.com/problems/majority-element/) | 🟢 Easy |
| [5](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/5) | [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) ⭐ [▶](https://www.youtube.com/watch?v=5WZl3MMT0Eg) | 🟡 Medium |
| [7](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/7) | [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) | 🟡 Medium |
| [7](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/7) | [383. Ransom Note](https://leetcode.com/problems/ransom-note/) | 🟢 Easy |
| [7](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/7) | [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) ⭐ | 🟢 Easy |
| [7](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/7) | [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) | 🟢 Easy |
| [108](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/108) | [974. Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/) | 🟡 Medium |
| [108](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/108) | [652. Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/) | 🟡 Medium |
| [108](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/108) | [149. Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/) | 🔴 Hard |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Arrays cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/array/)
- [Hash tables cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/hash-table/)
- [Kadane's algorithm — Wikipedia](https://en.wikipedia.org/wiki/Maximum_subarray_problem)
- [NeetCode — Blind 75 solutions playlist (YouTube)](https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
