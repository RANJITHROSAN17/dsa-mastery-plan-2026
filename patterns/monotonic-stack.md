# Monotonic Stack / Deque

> **Phase 2** · A stack or deque kept in sorted order to answer 'next greater/smaller' in O(n).

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/monotonic-stack) · [Problem list](../PROBLEMS.md)

## When to use it

Next/previous greater or smaller element, histogram areas, sliding-window extremes.

## Recognise it

- "Next greater / smaller element", "days until warmer", "stock span" → a stack that stays monotone.
- Largest rectangle in histogram / maximal rectangle / trapping rain water (stack variant).
- Sliding-window maximum/minimum → monotonic **deque** that evicts from the back and expires from the front.
- "Remove k digits / smallest subsequence" → greedy pop while the top is worse.

## Template (Python)

```python
from collections import deque

def next_greater(nums):
    res = [-1] * len(nums)
    st = []                                   # indices with decreasing values
    for i, x in enumerate(nums):
        while st and nums[st[-1]] < x:
            res[st.pop()] = x                 # x is the next greater for them
        st.append(i)
    return res

def largest_rectangle(heights):
    st, best = [], 0                          # indices with increasing heights
    for i, h in enumerate(heights + [0]):     # sentinel flushes the stack
        while st and heights[st[-1]] >= h:
            top = heights[st.pop()]
            left = st[-1] if st else -1
            best = max(best, top * (i - left - 1))
        st.append(i)
    return best

def max_sliding_window(nums, k):
    dq, out = deque(), []                     # indices, values decreasing
    for i, x in enumerate(nums):
        while dq and nums[dq[-1]] <= x:
            dq.pop()                          # smaller ones can never be max again
        dq.append(i)
        if dq[0] <= i - k:
            dq.popleft()                      # out of the window
        if i >= k - 1:
            out.append(nums[dq[0]])
    return out

def remove_k_digits(num, k):
    st = []
    for d in num:
        while k and st and st[-1] > d:
            st.pop(); k -= 1
        st.append(d)
    st = st[:len(st) - k] if k else st        # still have removals left → cut the tail
    return "".join(st).lstrip("0") or "0"
```

## Complexity

O(n): every index is pushed once and popped at most once.

## Pitfalls

- Choosing the wrong monotonicity: next *greater* needs a *decreasing* stack, and vice versa.
- Strict vs non-strict comparisons decide how equal elements are handled — check the problem's definition.
- Forgetting the sentinel (append 0 / -inf) so the stack empties at the end.
- Storing values instead of indices when you need distances or widths.

## How to talk about it in an interview

Say which direction the stack is monotone and *why* a popped element can never be the answer for a later index.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [39](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/39) | [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) ⭐ | 🟡 Medium |
| [39](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/39) | [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) | 🟢 Easy |
| [39](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/39) | [503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) | 🟡 Medium |
| [40](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/40) | [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) [▶](https://www.youtube.com/watch?v=zx5Sw9130L0) | 🔴 Hard |
| [40](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/40) | [85. Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) | 🔴 Hard |
| [40](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/40) | [402. Remove K Digits](https://leetcode.com/problems/remove-k-digits/) | 🟡 Medium |
| [43](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/43) | [735. Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) | 🟡 Medium |
| [43](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/43) | [853. Car Fleet](https://leetcode.com/problems/car-fleet/) | 🟡 Medium |
| [43](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/43) | [901. Online Stock Span](https://leetcode.com/problems/online-stock-span/) | 🟡 Medium |
| [43](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/43) | [1249. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) | 🟡 Medium |
| [98](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/98) | [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) | 🔴 Hard |
| [98](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/98) | [1696. Jump Game VI](https://leetcode.com/problems/jump-game-vi/) | 🟡 Medium |
| [98](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/98) | [1425. Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/) | 🔴 Hard |
| [99](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/99) | [907. Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) | 🟡 Medium |
| [99](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/99) | [456. 132 Pattern](https://leetcode.com/problems/132-pattern/) | 🟡 Medium |
| [99](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/99) | [962. Maximum Width Ramp](https://leetcode.com/problems/maximum-width-ramp/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Stacks (monotonic) — USACO Guide](https://usaco.guide/gold/stacks)
- [Minimum stack / queue — cp-algorithms](https://cp-algorithms.com/data_structures/stack_queue_modification.html)
- [take U forward — Stack & Queue playlist (YouTube)](https://www.youtube.com/playlist?list=PLgUwDviBIf0pOd5zvVVSzgpo6BaCpHT9c)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
