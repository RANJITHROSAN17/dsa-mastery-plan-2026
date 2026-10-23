# Graph BFS / DFS

> **Phase 3** · Explore graphs and grids; BFS for shortest unweighted paths.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/graph-traversal) · [Problem list](../PROBLEMS.md)

## When to use it

Islands/regions, connectivity, multi-source spread, implicit state graphs.

## Recognise it

- Grid problems (islands, flood fill, rotting oranges, walls and gates) — the grid *is* the graph.
- Connectivity, components, clone graph, bipartite check, detecting cycles in undirected graphs.
- **Shortest path in an unweighted graph → BFS**; multiple sources → push all of them first.
- Implicit state graphs: word ladder, open the lock, minimum genetic mutation (state = string, edge = one change).

## Template (Python)

```python
from collections import deque, defaultdict

DIRS = ((1, 0), (-1, 0), (0, 1), (0, -1))

def num_islands(grid):
    R, C, count = len(grid), len(grid[0]), 0
    def sink(r, c):
        st = [(r, c)]; grid[r][c] = "0"
        while st:
            x, y = st.pop()
            for dx, dy in DIRS:
                nx, ny = x + dx, y + dy
                if 0 <= nx < R and 0 <= ny < C and grid[nx][ny] == "1":
                    grid[nx][ny] = "0"; st.append((nx, ny))   # mark when pushing
    for r in range(R):
        for c in range(C):
            if grid[r][c] == "1":
                count += 1; sink(r, c)
    return count

def bfs_multi_source(grid, sources):
    """Distance from the nearest source to every cell (e.g. rotting oranges)."""
    R, C = len(grid), len(grid[0])
    dist = [[-1] * C for _ in range(R)]
    q = deque()
    for r, c in sources:
        dist[r][c] = 0; q.append((r, c))
    while q:
        r, c = q.popleft()
        for dr, dc in DIRS:
            nr, nc = r + dr, c + dc
            if 0 <= nr < R and 0 <= nc < C and dist[nr][nc] == -1 and grid[nr][nc] != "#":
                dist[nr][nc] = dist[r][c] + 1; q.append((nr, nc))
    return dist

def is_bipartite(graph):
    color = {}
    for s in range(len(graph)):
        if s in color: continue
        color[s] = 0; q = deque([s])
        while q:
            u = q.popleft()
            for v in graph[u]:
                if v not in color:
                    color[v] = 1 - color[u]; q.append(v)
                elif color[v] == color[u]:
                    return False
    return True

def clone_graph(node):
    if not node: return None
    copies = {node: Node(node.val)}
    q = deque([node])
    while q:
        u = q.popleft()
        for v in u.neighbors:
            if v not in copies:
                copies[v] = Node(v.val); q.append(v)
            copies[u].neighbors.append(copies[v])
    return copies[node]
```

## Complexity

O(V + E) — for grids O(rows × cols). Space O(V) for visited/queue.

## Pitfalls

- Marking visited when **popping** instead of when **pushing** → nodes enqueued many times (TLE on grids).
- Using DFS for shortest paths — only BFS guarantees minimum edges in unweighted graphs.
- Recursive DFS on a 1000×1000 grid blows the Python stack; use an explicit stack.
- Forgetting to iterate over all start nodes for disconnected graphs.

## How to talk about it in an interview

Define nodes and edges explicitly ("cells are nodes, 4-neighbours are edges"), then name BFS or DFS and why.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [75](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/75) | [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) ⭐ [▶](https://www.youtube.com/watch?v=pV2kpPD66nE) | 🟡 Medium |
| [75](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/75) | [695. Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | 🟡 Medium |
| [75](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/75) | [733. Flood Fill](https://leetcode.com/problems/flood-fill/) | 🟢 Easy |
| [76](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/76) | [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | 🟡 Medium |
| [76](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/76) | [542. 01 Matrix](https://leetcode.com/problems/01-matrix/) | 🟡 Medium |
| [76](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/76) | [1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) | 🟡 Medium |
| [77](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/77) | [133. Clone Graph](https://leetcode.com/problems/clone-graph/) ⭐ | 🟡 Medium |
| [77](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/77) | [841. Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/) | 🟡 Medium |
| [77](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/77) | [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/) ⭐ | 🟡 Medium |
| [78](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/78) | [417. Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) ⭐ | 🟡 Medium |
| [78](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/78) | [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) | 🟡 Medium |
| [78](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/78) | [1162. As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/) | 🟡 Medium |
| [86](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/86) | [785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) | 🟡 Medium |
| [86](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/86) | [886. Possible Bipartition](https://leetcode.com/problems/possible-bipartition/) | 🟡 Medium |
| [86](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/86) | [399. Evaluate Division](https://leetcode.com/problems/evaluate-division/) | 🟡 Medium |
| [87](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/87) | [127. Word Ladder](https://leetcode.com/problems/word-ladder/) | 🔴 Hard |
| [87](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/87) | [752. Open the Lock](https://leetcode.com/problems/open-the-lock/) | 🟡 Medium |
| [87](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/87) | [433. Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/) | 🟡 Medium |
| [88](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/88) | [1293. Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/) | 🔴 Hard |
| [88](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/88) | [815. Bus Routes](https://leetcode.com/problems/bus-routes/) | 🔴 Hard |
| [88](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/88) | [909. Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Graphs cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/graph/)
- [Graph traversal — USACO Guide](https://usaco.guide/silver/graph-traversal)
- [Flood fill — USACO Guide](https://usaco.guide/silver/flood-fill)
- [Breadth-first search — cp-algorithms](https://cp-algorithms.com/graph/breadth-first-search.html)
- [Depth-first search — cp-algorithms](https://cp-algorithms.com/graph/depth-first-search.html)
- [Bipartite check — cp-algorithms](https://cp-algorithms.com/graph/bipartite-check.html)
- [William Fiset — Graph Theory playlist (YouTube)](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
