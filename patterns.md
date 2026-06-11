# 🧠 Algorithmic Pattern Cheatsheet

> **Your living reference for mastering problem-solving patterns** | Track patterns as you learn them through the [150-day curriculum](README.md)

---

## 📌 How to Use This File

This is your **personal pattern library**. As you progress through the curriculum:

1. **Learn a pattern** from the daily lessons in the [dashboard](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/)
2. **Mark the day** you learned it in the "Learned on Day" column
3. **Reference it** when you encounter similar problems
4. **Build intuition** by connecting problems to patterns

### ✅ Pattern Recognition Strategy

**Before coding any problem:**
1. Read the problem carefully
2. Identify constraints and patterns
3. Check this cheatsheet for similar patterns
4. Apply the pattern's key idea
5. Adapt to the specific problem

**Common Pattern Triggers:**
- "Contiguous subarray" → Sliding Window or Kadane's
- "Sorted array search" → Binary Search
- "Pair/triplet sum" → Two Pointers
- "All paths" or "permutations" → Backtracking/DFS
- "Shortest path" → BFS or Dijkstra
- "Overlapping subproblems" → Dynamic Programming

---

## 📈 Progress Tracking

**Instructions:**
- Fill in the "Learned on Day" column as you complete each day
- Add additional rows for pattern variations you discover
- Note tricky edge cases or insights

---

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

---

## 💡 Pattern Mastery Tips

### 🎯 **Start Simple**
- Master basic patterns (Two Pointers, Sliding Window) first
- Build complexity gradually
- Don't skip fundamentals

### 🔄 **Practice Variations**
- Solve multiple problems per pattern
- Look for pattern combinations
- Recognize when to modify patterns

### 📓 **Keep This Updated**
- Add notes for tricky variations
- Track your progress honestly
- Reference before interviews

### 🧩 **Connect Patterns**
- Some problems need multiple patterns
- Example: Binary Search + Two Pointers
- Build a mental pattern graph

---

## 🔗 Quick Links

- **[🏠 Back to README](README.md)** - Complete roadmap overview
- **[📊 Open Dashboard](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/)** - Track your progress
- **[📖 View Resources](LEARNING-RESOURCES.md)** - All learning materials
- **[📁 Daily Curriculum](curriculum-data.js)** - 150-day detailed plan

---

## ❓ How to Identify Patterns in Interviews

### Step-by-Step Approach:

1. **Read Carefully** → Understand input, output, constraints
2. **Identify Type** → Array? String? Tree? Graph?
3. **Spot Keywords** → Use the trigger list above
4. **Check Constraints** → Time limit hints at approach
5. **Pattern Match** → Reference this cheatsheet
6. **Adapt & Code** → Modify pattern to fit problem

### Example Walkthrough:

**Problem:** "Find longest substring without repeating characters"

- **Type:** String problem
- **Keyword:** "substring" (contiguous), "without repeating"
- **Trigger:** Contiguous → Sliding Window pattern
- **Approach:** Expand window, track characters, shrink on duplicate
- **Pattern:** Sliding Window from Arrays & Strings section

---

## 📊 Pattern Learning Path (Recommended Order)

### Phase 1: Foundations (Weeks 1-4)
1. Two Pointers
2. Sliding Window
3. Prefix Sum
4. Binary Search

### Phase 2: Core Structures (Weeks 5-8)
5. Fast & Slow Pointers
6. Monotonic Stack
7. DFS (recursion)
8. BFS (queue)

### Phase 3: Advanced (Weeks 9-16)
9. Tree DP
10. Topological Sort
11. Union-Find
12. Dijkstra
13. 1D DP
14. 2D DP

### Phase 4: Mastery (Weeks 17-22)
15. Knapsack variants
16. LIS and variations
17. Binary Search on Answer
18. Pattern combinations

---

**🎉 Remember:** Every expert was once a beginner. Track your patterns, practice consistently, and watch your problem-solving skills grow!

---

*Last updated: Track your progress as you learn!*
