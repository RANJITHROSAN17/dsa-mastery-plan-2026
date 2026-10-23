# Sliding Window

> **Phase 1** · A contiguous window that grows and shrinks to maintain an invariant in O(n).

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/sliding-window) · [Problem list](../PROBLEMS.md)

## When to use it

'Longest/shortest/number of subarrays or substrings' with a constraint on the window's contents.

## Recognise it

- "Longest / shortest / count of **contiguous** subarrays or substrings" with a constraint on the window's contents.
- Fixed window size k → maintain a running aggregate; variable window → grow right, shrink left while the invariant is broken.
- Counting windows that satisfy a condition is often `atMost(k) - atMost(k-1)`.
- Anagram / permutation-in-string problems: compare frequency counts of a fixed-size window.

## Template (Python)

```python
def longest_window(s, ok):
    """Longest window such that ok(window_state) holds. O(n)."""
    count = {}
    best = left = 0
    for right, ch in enumerate(s):
        count[ch] = count.get(ch, 0) + 1          # add right
        while not ok(count):                      # shrink until valid
            count[s[left]] -= 1
            if count[s[left]] == 0:
                del count[s[left]]
            left += 1
        best = max(best, right - left + 1)
    return best

def min_window(s, t):
    """Smallest window of s containing all chars of t (LC 76)."""
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    missing = len(t)
    left = 0
    best = (float("inf"), 0, 0)
    for right, c in enumerate(s):
        if need.get(c, 0) > 0:
            missing -= 1
        need[c] = need.get(c, 0) - 1
        while missing == 0:                       # valid → try to shrink
            if right - left + 1 < best[0]:
                best = (right - left + 1, left, right)
            need[s[left]] += 1
            if need[s[left]] > 0:
                missing += 1
            left += 1
    return "" if best[0] == float("inf") else s[best[1]:best[2] + 1]

def at_most_k_distinct(nums, k):                  # count subarrays with ≤ k distinct
    count, left, total = {}, 0, 0
    for right, x in enumerate(nums):
        count[x] = count.get(x, 0) + 1
        while len(count) > k:
            count[nums[left]] -= 1
            if count[nums[left]] == 0:
                del count[nums[left]]
            left += 1
        total += right - left + 1                 # windows ending at right
    return total
```

## Complexity

O(n): each index enters and leaves the window at most once. Space O(k) for the window state.

## Pitfalls

- Shrinking with `if` instead of `while` — the window may need several shrink steps.
- Sliding window does **not** work when the window's validity is not monotonic (e.g. sums with negative numbers) — use prefix sums + hash map.
- Updating `best` before the window is valid (for min-length problems update only when valid).
- Forgetting to delete zero counts, which breaks `len(count)` checks.

## How to talk about it in an interview

Name the invariant the window maintains, show that each pointer only moves forward, and conclude O(n).

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [11](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/11) | [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) | 🟢 Easy |
| [11](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/11) | [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | 🟡 Medium |
| [11](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/11) | [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/) | 🟡 Medium |
| [12](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/12) | [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) ⭐ | 🟡 Medium |
| [12](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/12) | [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | 🟡 Medium |
| [12](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/12) | [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) ⭐ | 🟡 Medium |
| [13](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/13) | [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) ⭐ | 🔴 Hard |
| [13](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/13) | [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | 🔴 Hard |
| [13](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/13) | [904. Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) | 🟡 Medium |
| [14](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/14) | [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) | 🟡 Medium |
| [14](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/14) | [713. Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/) | 🟡 Medium |
| [14](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/14) | [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/) | 🟢 Easy |
| [14](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/14) | [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | 🟢 Easy |
| [110](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/110) | [992. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/) | 🔴 Hard |
| [110](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/110) | [1248. Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/) | 🟡 Medium |
| [110](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/110) | [395. Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Sliding window — USACO Guide](https://usaco.guide/gold/sliding-window)
- [Minimum stack / queue (window extremes) — cp-algorithms](https://cp-algorithms.com/data_structures/stack_queue_modification.html)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
