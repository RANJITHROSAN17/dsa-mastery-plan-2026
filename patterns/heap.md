# Heaps / Priority Queues

> **Phase 3** · Repeatedly extract the min/max; two heaps for running medians.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/heap) · [Problem list](../PROBLEMS.md)

## When to use it

'Top k', 'k-th largest', merging k streams, scheduling by priority.

## Recognise it

- "Top k", "k-th largest", "k closest", "k most frequent" → size-k heap (min-heap for largest).
- Merging k sorted sequences, scheduling by earliest finish, task cooldowns.
- Running median → two heaps (max-heap of lower half, min-heap of upper half).
- Greedy that repeatedly needs the current best choice (reorganise string, meeting rooms, IPO).

## Template (Python)

```python
import heapq
from collections import Counter

def kth_largest(nums, k):
    heap = []
    for x in nums:
        heapq.heappush(heap, x)
        if len(heap) > k:
            heapq.heappop(heap)          # keep the k largest
    return heap[0]

def top_k_frequent(nums, k):
    cnt = Counter(nums)
    return [v for v, _ in heapq.nlargest(k, cnt.items(), key=lambda kv: kv[1])]

def merge_k_lists(lists):                # heads of k sorted linked lists
    heap = [(node.val, i, node) for i, node in enumerate(lists) if node]
    heapq.heapify(heap)
    dummy = tail = ListNode()
    while heap:
        _, i, node = heapq.heappop(heap)
        tail.next = tail = node
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next

class MedianFinder:
    def __init__(self):
        self.lo, self.hi = [], []        # max-heap (negated), min-heap
    def addNum(self, x):
        heapq.heappush(self.lo, -x)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))
        if len(self.hi) > len(self.lo):
            heapq.heappush(self.lo, -heapq.heappop(self.hi))
    def findMedian(self):
        if len(self.lo) > len(self.hi):
            return -self.lo[0]
        return (-self.lo[0] + self.hi[0]) / 2

def least_interval(tasks, n):            # LC 621 math/greedy variant
    freq = Counter(tasks).values()
    mx = max(freq); k = sum(1 for f in freq if f == mx)
    return max(len(tasks), (mx - 1) * (n + 1) + k)
```

## Complexity

Push/pop O(log k); building a heap from n items is O(n); top-k is O(n log k).

## Pitfalls

- Python has only a min-heap: negate values (or push tuples) for max-heap behaviour.
- Tuples that tie on the key compare the next element — add a unique counter/index before non-comparable payloads.
- Heap of size n when size k suffices (O(n log n) instead of O(n log k)).
- Lazy deletion: when removing arbitrary items, mark them stale and skip on pop instead of searching the heap.

## How to talk about it in an interview

Say what is in the heap, its max size, and which end you keep; then complexity follows.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [70](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/70) | [703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) [▶](https://www.youtube.com/watch?v=hOjcdrqMoQ8) | 🟢 Easy |
| [70](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/70) | [1046. Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) | 🟢 Easy |
| [70](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/70) | [973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | 🟡 Medium |
| [71](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/71) | [692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) | 🟡 Medium |
| [71](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/71) | [295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) ⭐ | 🔴 Hard |
| [71](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/71) | [621. Task Scheduler](https://leetcode.com/problems/task-scheduler/) | 🟡 Medium |
| [72](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/72) | [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) ⭐ | 🔴 Hard |
| [72](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/72) | [767. Reorganize String](https://leetcode.com/problems/reorganize-string/) | 🟡 Medium |
| [72](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/72) | [502. IPO](https://leetcode.com/problems/ipo/) | 🔴 Hard |
| [72](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/72) | [355. Design Twitter](https://leetcode.com/problems/design-twitter/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Heaps cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/heap/)
- [Heap visualised — VisuAlgo](https://visualgo.net/en/heap)
- [William Fiset — Data structures playlist (YouTube)](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
