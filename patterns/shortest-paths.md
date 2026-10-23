# Shortest Paths & MST

> **Phase 3** · Dijkstra, Bellman-Ford, 0-1 BFS, Floyd-Warshall, Prim/Kruskal.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/shortest-paths) · [Problem list](../PROBLEMS.md)

## When to use it

Weighted graphs, 'minimum cost/time/effort', connecting all nodes cheaply.

## Recognise it

- Weighted graph, non-negative weights, single source → **Dijkstra** (heap).
- Negative edges or "at most k stops" → **Bellman-Ford** (k rounds of relaxation).
- Weights are only 0 and 1 → **0-1 BFS** with a deque; all-pairs on small n → **Floyd-Warshall**.
- "Connect all points with minimum total cost" → MST (**Prim** with a heap or **Kruskal** with DSU).
- "Minimise the maximum edge on a path" → modified Dijkstra, binary search + BFS, or Kruskal order.

## Template (Python)

```python
import heapq
from collections import defaultdict, deque

def dijkstra(n, adj, src):
    """adj[u] = list of (v, w) with w >= 0."""
    dist = [float("inf")] * n; dist[src] = 0
    heap = [(0, src)]
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist[u]:
            continue                     # stale entry
        for v, w in adj[u]:
            if d + w < dist[v]:
                dist[v] = d + w; heapq.heappush(heap, (dist[v], v))
    return dist

def bellman_ford_k(n, flights, src, dst, k):     # LC 787: at most k stops
    dist = [float("inf")] * n; dist[src] = 0
    for _ in range(k + 1):
        nxt = dist[:]
        for u, v, w in flights:
            if dist[u] + w < nxt[v]:
                nxt[v] = dist[u] + w
        dist = nxt
    return -1 if dist[dst] == float("inf") else dist[dst]

def zero_one_bfs(grid):                          # cost 1 to flip an obstacle, 0 otherwise
    R, C = len(grid), len(grid[0])
    dist = [[float("inf")] * C for _ in range(R)]; dist[0][0] = 0
    dq = deque([(0, 0)])
    while dq:
        r, c = dq.popleft()
        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < R and 0 <= nc < C:
                nd = dist[r][c] + grid[nr][nc]
                if nd < dist[nr][nc]:
                    dist[nr][nc] = nd
                    (dq.appendleft if grid[nr][nc] == 0 else dq.append)((nr, nc))
    return dist[R - 1][C - 1]

def prim(n, adj):                                # total MST weight
    seen, heap, total = [False] * n, [(0, 0)], 0
    while heap:
        w, u = heapq.heappop(heap)
        if seen[u]: continue
        seen[u] = True; total += w
        for v, wv in adj[u]:
            if not seen[v]: heapq.heappush(heap, (wv, v))
    return total

def floyd_warshall(dist):                        # dist: n×n matrix, inf where no edge
    n = len(dist)
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    return dist
```

## Complexity

Dijkstra O((V+E) log V); Bellman-Ford O(k·E); 0-1 BFS O(V+E); Floyd-Warshall O(V³); Prim/Kruskal O(E log V).

## Pitfalls

- Running Dijkstra with negative weights — it silently gives wrong answers.
- Not skipping stale heap entries (`if d > dist[u]: continue`) → quadratic blow-up.
- Bellman-Ford with k stops must relax from a **copy** of the previous round, or paths use too many edges.
- Treating undirected input as directed (add both directions) or vice versa.

## How to talk about it in an interview

Classify the graph in one breath: directed? weighted? negative? dense? — then the algorithm choice is obvious.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [83](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/83) | [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/) | 🟡 Medium |
| [83](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/83) | [1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/) | 🟡 Medium |
| [83](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/83) | [787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | 🟡 Medium |
| [84](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/84) | [778. Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) | 🔴 Hard |
| [84](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/84) | [1514. Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/) | 🟡 Medium |
| [84](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/84) | [1976. Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/) | 🟡 Medium |
| [85](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/85) | [1584. Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | 🟡 Medium |
| [85](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/85) | [1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/) | 🔴 Hard |
| [85](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/85) | [332. Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) | 🔴 Hard |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Dijkstra — cp-algorithms](https://cp-algorithms.com/graph/dijkstra.html)
- [Bellman-Ford — cp-algorithms](https://cp-algorithms.com/graph/bellman_ford.html)
- [0-1 BFS — cp-algorithms](https://cp-algorithms.com/graph/01_bfs.html)
- [Floyd-Warshall — cp-algorithms](https://cp-algorithms.com/graph/all-pair-shortest-path-floyd-warshall.html)
- [Shortest paths — USACO Guide](https://usaco.guide/gold/shortest-paths)
- [Minimum spanning trees — USACO Guide](https://usaco.guide/gold/mst)
- [Euler path — cp-algorithms](https://cp-algorithms.com/graph/euler_path.html)
- [William Fiset — Graph Theory playlist (YouTube)](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
