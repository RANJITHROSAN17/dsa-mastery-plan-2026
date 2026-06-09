# Pattern Tracker

> Add a new row every time you learn a pattern. This is your living cheatsheet.
> Keep it short: pattern | key idea | when to use | example problem

---

## Arrays & Strings

| Pattern | Key Idea | When to Use | Example Problem | Learned on Day |
|---------|----------|-------------|-----------------|----------------|
| Sliding Window | Maintain a window [l, r] on array, shrink/expand based on constraint | Contiguous subarray/substring with constraint | Longest Substring Without Repeat | |
| Two Pointers | L and R pointers moving toward/away from each other | Sorted array, pair/triplet sum, palindrome check | 3Sum, Container With Most Water | |
| Prefix Sum | presum[i] = sum of arr[0..i], query range sum in O(1) | Range sum queries, subarray sum equals K | Subarray Sum Equals K | |
| Kadane's Algorithm | Track current max ending here; reset to 0 if negative | Max/min subarray sum | Maximum Subarray | |

---

## Searching & Sorting

| Pattern | Key Idea | When to Use | Example Problem | Learned on Day |
|---------|----------|-------------|-----------------|----------------|
| Binary Search | Halve search space each step — O(log n) | Sorted array, monotonic answer space | Search in Rotated Sorted Array | |
| Binary Search on Answer | Apply binary search on the answer range, not array | "Find minimum/maximum satisfying condition" | Koko Eating Bananas | |

---

## Linked Lists

| Pattern | Key Idea | When to Use | Example Problem | Learned on Day |
|---------|----------|-------------|-----------------|----------------|
| Fast & Slow Pointers | Fast moves 2x speed of slow | Detect cycle, find middle | Linked List Cycle, Middle of Linked List | |

---

## Stacks & Queues

| Pattern | Key Idea | When to Use | Example Problem | Learned on Day |
|---------|----------|-------------|-----------------|----------------|
| Monotonic Stack | Stack keeps elements in monotone order (inc/dec) | Next greater element, span problems | Daily Temperatures | |

---

## Trees

| Pattern | Key Idea | When to Use | Example Problem | Learned on Day |
|---------|----------|-------------|-----------------|----------------|
| DFS (recursion) | Explore all paths depth-first | Tree traversal, connectivity, path sum | Path Sum, Max Depth | |
| BFS (queue) | Level-by-level traversal | Shortest path in unweighted graph, level order | Binary Tree Level Order | |
| Tree DP | Compute values bottom-up from leaves | Diameter, max path sum | Diameter of Binary Tree | |

---

## Graphs

| Pattern | Key Idea | When to Use | Example Problem | Learned on Day |
|---------|----------|-------------|-----------------|----------------|
| BFS | Queue-based level order traversal | Shortest path (unweighted), connected components | Number of Islands | |
| DFS | Stack/recursion depth-first | Connectivity, cycle detection, topological sort | Course Schedule | |
| Topological Sort | Process nodes with in-degree 0 first | Dependency ordering (DAG) | Course Schedule II | |
| Union-Find (DSU) | Track connected components with path compression | Dynamic connectivity, cycle detection | Redundant Connection | |
| Dijkstra | Min-heap + relaxation for shortest paths | Weighted shortest path (non-negative weights) | Network Delay Time | |

---

## Dynamic Programming

| Pattern | Key Idea | When to Use | Example Problem | Learned on Day |
|---------|----------|-------------|-----------------|----------------|
| 1D DP | dp[i] depends on dp[i-1] or dp[i-k] | Fibonacci-style, climbing stairs | Climbing Stairs, House Robber | |
| 2D DP | dp[i][j] depends on neighbors | Grid paths, string matching | Unique Paths, LCS | |
| Knapsack | Include/exclude item decision at each step | Subset sum, 0/1 knapsack | Partition Equal Subset Sum | |
| LIS | dp[i] = length of longest increasing subsequence ending at i | Increasing subsequences | Longest Increasing Subsequence | |

---

## Greedy

| Pattern | Key Idea | When to Use | Example Problem | Learned on Day |
|---------|----------|-------------|-----------------|----------------|
| Interval Greedy | Sort by end time, greedily pick non-overlapping | Interval scheduling | Non-overlapping Intervals | |

---

*Last updated: Day __*
