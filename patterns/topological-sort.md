# Topological Sort

> **Phase 3** · Order a DAG by dependencies with Kahn's algorithm or DFS post-order.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/topological-sort) · [Problem list](../PROBLEMS.md)

## When to use it

Prerequisites/build orders, detecting cycles in directed graphs.

## Recognise it

- Dependencies / prerequisites / build order / compile order → DAG ordering.
- "Is it possible to finish?" → cycle detection in a **directed** graph.
- Alien dictionary, course schedule, safe states, minimum height trees (peel leaves layer by layer).
- Longest path in a DAG / DP over a DAG is processed in topological order.

## Template (Python)

```python
from collections import deque, defaultdict

def topo_order(n, edges):
    """Kahn's algorithm. edges (a, b) means a must come before b. Returns [] if a cycle exists."""
    adj, indeg = defaultdict(list), [0] * n
    for a, b in edges:
        adj[a].append(b); indeg[b] += 1
    q = deque(i for i in range(n) if indeg[i] == 0)
    order = []
    while q:
        u = q.popleft(); order.append(u)
        for v in adj[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                q.append(v)
    return order if len(order) == n else []

def can_finish(n, prereqs):              # DFS colouring variant
    adj = defaultdict(list)
    for a, b in prereqs: adj[b].append(a)
    WHITE, GRAY, BLACK = 0, 1, 2
    color = [WHITE] * n
    def dfs(u):
        color[u] = GRAY
        for v in adj[u]:
            if color[v] == GRAY: return False          # back edge → cycle
            if color[v] == WHITE and not dfs(v): return False
        color[u] = BLACK
        return True
    for u in range(n):
        if color[u] == WHITE and not dfs(u):
            return False
    return True

def find_min_height_trees(n, edges):     # peel leaves
    if n == 1: return [0]
    adj = defaultdict(set)
    for a, b in edges: adj[a].add(b); adj[b].add(a)
    leaves = [i for i in range(n) if len(adj[i]) == 1]
    remaining = n
    while remaining > 2:
        remaining -= len(leaves); new = []
        for leaf in leaves:
            nb = adj[leaf].pop(); adj[nb].remove(leaf)
            if len(adj[nb]) == 1: new.append(nb)
        leaves = new
    return leaves
```

## Complexity

O(V + E) time and space.

## Pitfalls

- Reversing edge direction: decide whether `(a, b)` means `a → b` or `b → a` and build adjacency accordingly.
- Undirected cycle detection uses a different test (parent check / union-find) — three-colour DFS is for directed graphs.
- Returning a partial order when a cycle exists; always compare `len(order)` with `n`.
- Alien dictionary: a prefix case (`abc` before `ab`) is invalid input, not an edge.

## How to talk about it in an interview

Say "in-degree zero means no pending dependency" and walk through Kahn's queue once by hand.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [79](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/79) | [207. Course Schedule](https://leetcode.com/problems/course-schedule/) ⭐ | 🟡 Medium |
| [79](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/79) | [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | 🟡 Medium |
| [79](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/79) | [802. Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) | 🟡 Medium |
| [80](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/80) | [310. Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) | 🟡 Medium |
| [80](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/80) | [329. Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | 🔴 Hard |
| [80](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/80) | [797. All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Topological sort — cp-algorithms](https://cp-algorithms.com/graph/topological-sort.html)
- [Topological sort — USACO Guide](https://usaco.guide/gold/toposort)
- [Finding a cycle — cp-algorithms](https://cp-algorithms.com/graph/finding-cycle.html)
- [William Fiset — Graph Theory playlist (YouTube)](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
