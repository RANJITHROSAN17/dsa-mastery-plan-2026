# Sweep Line

> **Phase 4** · Sort events, sweep through them while maintaining an active set.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/sweep-line) · [Problem list](../PROBLEMS.md)

## When to use it

Overlaps over time, skyline, 'how many at time t', chair/room assignment.

## Recognise it

- Many intervals / events on a line and you need counts or extremes *over time* (max concurrent, free slots, skyline).
- Range updates followed by point queries → difference array (+1 at start, −1 at end+1, prefix-sum once).
- Car pooling, meeting rooms II, employee free time, "maximum population year".
- Skyline / rectangle union → sort x-events, maintain the active set (heap or sorted container).

## Template (Python)

```python
import heapq
from collections import defaultdict

def max_overlap(intervals):
    events = []
    for s, e in intervals:
        events.append((s, 1)); events.append((e, -1))   # end before start at equal x
    events.sort()
    cur = best = 0
    for _, delta in events:
        cur += delta; best = max(best, cur)
    return best

def car_pooling(trips, capacity):            # difference array
    diff = defaultdict(int)
    for people, a, b in trips:
        diff[a] += people; diff[b] -= people
    cur = 0
    for x in sorted(diff):
        cur += diff[x]
        if cur > capacity:
            return False
    return True

def skyline(buildings):                      # LC 218: lazy-deletion max-heap
    events = sorted({x for b in buildings for x in (b[0], b[1])})
    out, heap, i = [], [], 0
    buildings.sort()
    for x in events:
        while i < len(buildings) and buildings[i][0] == x:
            l, r, h = buildings[i]; heapq.heappush(heap, (-h, r)); i += 1
        while heap and heap[0][1] <= x:
            heapq.heappop(heap)              # expired
        h = -heap[0][0] if heap else 0
        if not out or out[-1][1] != h:
            out.append([x, h])
    return out
```

## Complexity

O(n log n) for sorting events; each event is processed once (heap ops add a log factor).

## Pitfalls

- Tie-breaking at equal coordinates: decide whether an interval ending at x and one starting at x overlap, then order events accordingly.
- Difference arrays need a prefix-sum pass — the array itself is not the answer.
- Skyline: forgetting lazy deletion or emitting duplicate heights.
- Mixing closed and half-open intervals in one solution.

## How to talk about it in an interview

Describe the sweep: "sorted events, an active set, and what I record at each event".

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [111](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/111) | [218. The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/) | 🔴 Hard |
| [111](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/111) | [731. My Calendar II](https://leetcode.com/problems/my-calendar-ii/) | 🟡 Medium |
| [111](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/111) | [895. Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/) | 🔴 Hard |
| [117](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/117) | [2251. Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/) | 🔴 Hard |
| [117](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/117) | [1942. The Number of the Smallest Unoccupied Chair](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/) | 🟡 Medium |
| [117](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/117) | [1854. Maximum Population Year](https://leetcode.com/problems/maximum-population-year/) | 🟢 Easy |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Sweep line — USACO Guide](https://usaco.guide/plat/sweep-line)
- [Intervals cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/interval/)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
