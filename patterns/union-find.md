# Union-Find

> **Phase 3** · Disjoint sets with path compression and union by rank.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/union-find) · [Problem list](../PROBLEMS.md)

## When to use it

Dynamic connectivity, redundant edges, grouping equivalences.

## Recognise it

- Dynamic connectivity: edges arrive over time and you ask "are u and v connected?" / "how many components?".
- Redundant connection, number of provinces, accounts merge, equations satisfiability, similar strings groups.
- Kruskal's MST, offline queries sorted by threshold, percolation-style grids.
- When BFS/DFS would be rerun after every edge insertion — union-find makes each almost O(1).

## Template (Python)

```python
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n
        self.components = n

    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]   # path halving
            x = self.parent[x]
        return x

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False                                   # already connected
        if self.size[ra] < self.size[rb]:
            ra, rb = rb, ra
        self.parent[rb] = ra; self.size[ra] += self.size[rb]
        self.components -= 1
        return True

def find_redundant_connection(edges):      # LC 684
    dsu = DSU(len(edges) + 1)
    for a, b in edges:
        if not dsu.union(a, b):
            return [a, b]

def accounts_merge(accounts):              # LC 721 sketch
    dsu = DSU(len(accounts)); owner = {}
    for i, (_, *emails) in enumerate(accounts):
        for e in emails:
            if e in owner: dsu.union(i, owner[e])
            else: owner[e] = i
    groups = {}
    for e, i in owner.items():
        groups.setdefault(dsu.find(i), []).append(e)
    return [[accounts[i][0]] + sorted(es) for i, es in groups.items()]
```

## Complexity

Near O(1) amortised per operation (inverse Ackermann) with path compression + union by size/rank.

## Pitfalls

- Forgetting path compression or union by size — each alone is fine, neither is O(n) worst case.
- Using node values as indices without mapping strings/IDs to 0..n-1 first.
- Comparing `parent[a] == parent[b]` instead of `find(a) == find(b)`.
- Union-find does not support deletions; for offline problems process operations in reverse.

## How to talk about it in an interview

Say "each union either merges two components or reveals a cycle" — that sentence solves half the problems.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [81](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/81) | [684. Redundant Connection](https://leetcode.com/problems/redundant-connection/) ⭐ | 🟡 Medium |
| [81](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/81) | [721. Accounts Merge](https://leetcode.com/problems/accounts-merge/) | 🟡 Medium |
| [81](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/81) | [990. Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/) | 🟡 Medium |
| [82](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/82) | [1319. Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) | 🟡 Medium |
| [82](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/82) | [947. Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/) | 🟡 Medium |
| [82](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/82) | [1202. Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Disjoint set union — cp-algorithms](https://cp-algorithms.com/data_structures/disjoint_set_union.html)
- [Disjoint set union — USACO Guide](https://usaco.guide/gold/dsu)
- [Union-find visualised — VisuAlgo](https://visualgo.net/en/ufds)
- [William Fiset — Data structures playlist (YouTube)](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
