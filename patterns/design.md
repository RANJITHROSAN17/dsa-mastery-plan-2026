# Design

> **Phase 4** · Compose hash maps, lists, heaps and trees to meet strict complexity guarantees.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/design) · [Problem list](../PROBLEMS.md)

## When to use it

'Design a ... with O(1) operations', iterators, caches, streams.

## Recognise it

- "Design a data structure supporting X, Y, Z in O(1)/O(log n)" — compose hash maps, lists, heaps, linked lists.
- Caches (LRU, LFU), iterators, time-keyed maps, rate limiters, leaderboards, randomised set.
- The trick is usually *two* structures kept in sync (map + doubly linked list; map + array with swap-remove).
- Think about the **ordering requirement** first: recency, frequency, time, insertion order.

## Template (Python)

```python
import random
from collections import OrderedDict
from bisect import bisect_right

class LRUCache:                                  # dict + doubly linked list (OrderedDict does both)
    def __init__(self, capacity):
        self.cap, self.od = capacity, OrderedDict()
    def get(self, key):
        if key not in self.od: return -1
        self.od.move_to_end(key); return self.od[key]
    def put(self, key, value):
        if key in self.od: self.od.move_to_end(key)
        self.od[key] = value
        if len(self.od) > self.cap: self.od.popitem(last=False)

class RandomizedSet:                             # O(1) insert / remove / getRandom
    def __init__(self):
        self.pos, self.vals = {}, []
    def insert(self, v):
        if v in self.pos: return False
        self.pos[v] = len(self.vals); self.vals.append(v); return True
    def remove(self, v):
        if v not in self.pos: return False
        i, last = self.pos[v], self.vals[-1]
        self.vals[i], self.pos[last] = last, i   # swap with last, then pop
        self.vals.pop(); del self.pos[v]; return True
    def getRandom(self):
        return random.choice(self.vals)

class TimeMap:                                   # LC 981
    def __init__(self):
        self.store = {}                          # key -> ([timestamps], [values])
    def set(self, key, value, ts):
        t, v = self.store.setdefault(key, ([], []))
        t.append(ts); v.append(value)            # timestamps arrive increasing
    def get(self, key, ts):
        if key not in self.store: return ""
        t, v = self.store[key]; i = bisect_right(t, ts)
        return v[i - 1] if i else ""
```

## Complexity

State the complexity of **every** operation separately; that is what the interviewer grades.

## Pitfalls

- Hand-rolled linked lists without a sentinel head/tail → edge-case bugs on empty/one-node lists.
- Forgetting to update the index map after a swap-remove.
- LFU: must also track recency *within* a frequency bucket.
- Not asking which operations dominate — a read-heavy vs write-heavy workload changes the design.

## How to talk about it in an interview

List the operations, write the target complexity next to each, then choose structures that satisfy all rows.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [36](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/36) | [146. LRU Cache](https://leetcode.com/problems/lru-cache/) ⭐ [▶](https://www.youtube.com/watch?v=7ABFKPK2hD4) | 🟡 Medium |
| [36](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/36) | [707. Design Linked List](https://leetcode.com/problems/design-linked-list/) | 🟡 Medium |
| [36](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/36) | [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) | 🟡 Medium |
| [105](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/105) | [380. Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) | 🟡 Medium |
| [105](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/105) | [706. Design HashMap](https://leetcode.com/problems/design-hashmap/) | 🟢 Easy |
| [105](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/105) | [1396. Design Underground System](https://leetcode.com/problems/design-underground-system/) | 🟡 Medium |
| [106](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/106) | [1146. Snapshot Array](https://leetcode.com/problems/snapshot-array/) | 🟡 Medium |
| [106](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/106) | [528. Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) | 🟡 Medium |
| [106](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/106) | [1797. Design Authentication Manager](https://leetcode.com/problems/design-authentication-manager/) | 🟡 Medium |
| [107](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/107) | [284. Peeking Iterator](https://leetcode.com/problems/peeking-iterator/) | 🟡 Medium |
| [107](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/107) | [341. Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator/) | 🟡 Medium |
| [107](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/107) | [641. Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Hash tables cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/hash-table/)
- [Heaps cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/heap/)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
