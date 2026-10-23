# Greedy

> **Phase 4** · Make the locally optimal choice when an exchange argument proves it is safe.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/greedy) · [Problem list](../PROBLEMS.md)

## When to use it

Scheduling, jumping, partitioning, 'minimum number of X to achieve Y'.

## Recognise it

- A local choice can be proven safe by an **exchange argument** (swapping it for any other choice never hurts).
- Scheduling by earliest deadline/finish, jump games (track the furthest reachable index), gas station (reset on negative tank).
- Partition labels, assign cookies, candy (two passes), boats to save people (sort + two pointers).
- If the greedy choice can be undone later, it is probably DP, not greedy.

## Template (Python)

```python
def can_jump(nums):
    far = 0
    for i, x in enumerate(nums):
        if i > far:
            return False
        far = max(far, i + x)
    return True

def jump(nums):                              # LC 45: BFS-like layers
    jumps = cur_end = far = 0
    for i in range(len(nums) - 1):
        far = max(far, i + nums[i])
        if i == cur_end:
            jumps += 1; cur_end = far
    return jumps

def can_complete_circuit(gas, cost):
    total = tank = start = 0
    for i in range(len(gas)):
        diff = gas[i] - cost[i]; total += diff; tank += diff
        if tank < 0:
            start, tank = i + 1, 0           # cannot start anywhere in [start, i]
    return start if total >= 0 else -1

def partition_labels(s):
    last = {c: i for i, c in enumerate(s)}
    out, start, end = [], 0, 0
    for i, c in enumerate(s):
        end = max(end, last[c])
        if i == end:
            out.append(end - start + 1); start = i + 1
    return out

def candy(ratings):
    n = len(ratings); c = [1] * n
    for i in range(1, n):
        if ratings[i] > ratings[i - 1]: c[i] = c[i - 1] + 1
    for i in range(n - 2, -1, -1):
        if ratings[i] > ratings[i + 1]: c[i] = max(c[i], c[i + 1] + 1)
    return sum(c)
```

## Complexity

Usually O(n) or O(n log n) when a sort is needed.

## Pitfalls

- Assuming greedy works because it passes the examples — state the exchange argument, or at least a counter-example search.
- Sorting by the wrong key (start vs end, ratio vs difference).
- Jump Game II off-by-one: iterate to `n-2`, not `n-1`, or you count an extra jump.
- Resetting state incorrectly in gas-station-like problems (reset `start`, not `total`).

## How to talk about it in an interview

Propose the greedy rule, then say *why* any optimal solution can be transformed to follow it without getting worse.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [91](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/91) | [455. Assign Cookies](https://leetcode.com/problems/assign-cookies/) | 🟢 Easy |
| [91](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/91) | [860. Lemonade Change](https://leetcode.com/problems/lemonade-change/) | 🟢 Easy |
| [91](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/91) | [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | 🟡 Medium |
| [92](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/92) | [55. Jump Game](https://leetcode.com/problems/jump-game/) ⭐ | 🟡 Medium |
| [92](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/92) | [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/) | 🟡 Medium |
| [92](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/92) | [134. Gas Station](https://leetcode.com/problems/gas-station/) | 🟡 Medium |
| [93](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/93) | [881. Boats to Save People](https://leetcode.com/problems/boats-to-save-people/) | 🟡 Medium |
| [93](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/93) | [1029. Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/) | 🟡 Medium |
| [93](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/93) | [452. Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) ⭐ | 🟡 Medium |
| [94](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/94) | [763. Partition Labels](https://leetcode.com/problems/partition-labels/) | 🟡 Medium |
| [94](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/94) | [135. Candy](https://leetcode.com/problems/candy/) | 🔴 Hard |
| [94](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/94) | [846. Hand of Straights](https://leetcode.com/problems/hand-of-straights/) | 🟡 Medium |
| [95](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/95) | [1642. Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/) | 🟡 Medium |
| [95](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/95) | [1383. Maximum Performance of a Team](https://leetcode.com/problems/maximum-performance-of-a-team/) | 🔴 Hard |
| [95](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/95) | [857. Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/) | 🔴 Hard |
| [104](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/104) | [630. Course Schedule III](https://leetcode.com/problems/course-schedule-iii/) | 🔴 Hard |
| [104](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/104) | [871. Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/) | 🔴 Hard |
| [104](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/104) | [668. Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/) | 🔴 Hard |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Greedy algorithms — USACO Guide](https://usaco.guide/silver/greedy-sorting)
- [Greedy with sorting — USACO Guide](https://usaco.guide/bronze/intro-greedy)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
