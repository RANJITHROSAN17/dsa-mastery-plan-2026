# Intervals

> **Phase 1** · Sort by start (or end), then sweep and merge/choose greedily.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/intervals) · [Problem list](../PROBLEMS.md)

## When to use it

Overlapping ranges, scheduling, 'minimum rooms/arrows/removals'.

## Recognise it

- Input is a list of `[start, end]` ranges: merge, insert, overlap count, free time, scheduling.
- "Minimum rooms / platforms" → sort events or use a min-heap of end times.
- "Maximum non-overlapping" / "minimum removals" → sort by **end** and take greedily.
- "Minimum arrows / points to cover all" is the same greedy by end.

## Template (Python)

```python
def merge(intervals):
    intervals.sort()
    out = []
    for s, e in intervals:
        if out and s <= out[-1][1]:          # overlap → extend
            out[-1][1] = max(out[-1][1], e)
        else:
            out.append([s, e])
    return out

def insert(intervals, new):
    out, i, n = [], 0, len(intervals)
    while i < n and intervals[i][1] < new[0]:
        out.append(intervals[i]); i += 1      # strictly before
    while i < n and intervals[i][0] <= new[1]:
        new = [min(new[0], intervals[i][0]), max(new[1], intervals[i][1])]
        i += 1                                 # overlapping → merge into new
    out.append(new)
    return out + intervals[i:]

def erase_overlap(intervals):                  # LC 435: min removals
    intervals.sort(key=lambda x: x[1])         # by END
    removed, prev_end = 0, float("-inf")
    for s, e in intervals:
        if s >= prev_end:
            prev_end = e                       # keep it
        else:
            removed += 1
    return removed

import heapq
def min_meeting_rooms(intervals):
    heap = []                                  # end times of running meetings
    for s, e in sorted(intervals):
        if heap and heap[0] <= s:
            heapq.heapreplace(heap, e)         # reuse a room
        else:
            heapq.heappush(heap, e)
    return len(heap)
```

## Complexity

O(n log n) for the sort; the sweep is O(n) (or O(n log n) with a heap).

## Pitfalls

- Sorting by start when the greedy needs sorting by end (non-overlapping / arrows).
- Touching intervals: read whether `[1,2]` and `[2,3]` overlap in *this* problem.
- Mutating input intervals (`out[-1][1] = …`) when the caller may still need them — copy if unsure.
- Off-by-one in the `insert` boundary conditions; test with the new interval before, after and spanning everything.

## How to talk about it in an interview

Draw the intervals on a line, sort, and describe the sweep aloud before coding.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [27](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/27) | [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/) ⭐ | 🟡 Medium |
| [27](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/27) | [57. Insert Interval](https://leetcode.com/problems/insert-interval/) ⭐ | 🟡 Medium |
| [27](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/27) | [435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) ⭐ | 🟡 Medium |
| [96](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/96) | [986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/) | 🟡 Medium |
| [96](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/96) | [729. My Calendar I](https://leetcode.com/problems/my-calendar-i/) | 🟡 Medium |
| [96](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/96) | [1288. Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/) | 🟡 Medium |
| [97](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/97) | [1353. Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) | 🟡 Medium |
| [97](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/97) | [1094. Car Pooling](https://leetcode.com/problems/car-pooling/) | 🟡 Medium |
| [97](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/97) | [352. Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/) | 🔴 Hard |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Intervals cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/interval/)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
