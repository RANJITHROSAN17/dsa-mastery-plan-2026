# Backtracking

> **Phase 2** · DFS over a decision tree with choose → explore → un-choose and pruning.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/backtracking) · [Problem list](../PROBLEMS.md)

## When to use it

'All subsets/permutations/combinations', constraint puzzles (N-Queens, Sudoku), word paths.

## Recognise it

- "Return **all** subsets / permutations / combinations / partitions" — the output itself is exponential.
- Constraint satisfaction: N-Queens, Sudoku, word search, expression add operators.
- Each step chooses one option, recurses, then **undoes** the choice.
- Pruning is the whole game: sort first, break on `remaining < 0`, skip duplicates at the same depth.

## Template (Python)

```python
def subsets(nums):
    out, path = [], []
    def dfs(start):
        out.append(path[:])
        for i in range(start, len(nums)):
            path.append(nums[i])        # choose
            dfs(i + 1)                  # explore
            path.pop()                  # un-choose
    dfs(0)
    return out

def combination_sum(cands, target):
    cands.sort(); out, path = [], []
    def dfs(start, remaining):
        if remaining == 0:
            out.append(path[:]); return
        for i in range(start, len(cands)):
            if cands[i] > remaining:
                break                   # prune: sorted, nothing further fits
            path.append(cands[i])
            dfs(i, remaining - cands[i])   # reuse allowed → i, not i+1
            path.pop()
    dfs(0, target)
    return out

def permute_unique(nums):
    nums.sort(); out, path, used = [], [], [False] * len(nums)
    def dfs():
        if len(path) == len(nums):
            out.append(path[:]); return
        for i in range(len(nums)):
            if used[i] or (i and nums[i] == nums[i - 1] and not used[i - 1]):
                continue                # skip dup at the same depth
            used[i] = True; path.append(nums[i])
            dfs()
            path.pop(); used[i] = False
    dfs()
    return out

def exist(board, word):                 # LC 79 word search
    R, C = len(board), len(board[0])
    def dfs(r, c, k):
        if k == len(word):
            return True
        if not (0 <= r < R and 0 <= c < C) or board[r][c] != word[k]:
            return False
        tmp, board[r][c] = board[r][c], "#"      # mark visited
        found = any(dfs(r + dr, c + dc, k + 1) for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)))
        board[r][c] = tmp                         # restore
        return found
    return any(dfs(r, c, 0) for r in range(R) for c in range(C))
```

## Complexity

Exponential by nature: O(2ⁿ) subsets, O(n·n!) permutations. Pruning changes the constant, not the class.

## Pitfalls

- Appending `path` instead of a copy (`path[:]`) — every result ends up as the same (empty) list.
- Not restoring state after recursion (visited marks, used flags, the path).
- Duplicate results: sort and skip `nums[i] == nums[i-1]` at the same recursion depth.
- Using `start = i + 1` when elements may be reused (combination sum) or `i` when they may not.

## How to talk about it in an interview

Describe the decision tree: what is chosen at each level, what is the leaf, what prunes a branch.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [45](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/45) | [78. Subsets](https://leetcode.com/problems/subsets/) | 🟡 Medium |
| [45](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/45) | [90. Subsets II](https://leetcode.com/problems/subsets-ii/) | 🟡 Medium |
| [45](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/45) | [77. Combinations](https://leetcode.com/problems/combinations/) | 🟡 Medium |
| [46](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/46) | [46. Permutations](https://leetcode.com/problems/permutations/) | 🟡 Medium |
| [46](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/46) | [47. Permutations II](https://leetcode.com/problems/permutations-ii/) | 🟡 Medium |
| [46](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/46) | [784. Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/) | 🟡 Medium |
| [47](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/47) | [39. Combination Sum](https://leetcode.com/problems/combination-sum/) | 🟡 Medium |
| [47](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/47) | [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | 🟡 Medium |
| [47](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/47) | [216. Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) | 🟡 Medium |
| [48](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/48) | [51. N-Queens](https://leetcode.com/problems/n-queens/) | 🔴 Hard |
| [48](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/48) | [37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) | 🔴 Hard |
| [48](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/48) | [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | 🟡 Medium |
| [49](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/49) | [79. Word Search](https://leetcode.com/problems/word-search/) ⭐ [▶](https://www.youtube.com/watch?v=pfiQ_PS1g8E) | 🟡 Medium |
| [49](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/49) | [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | 🟡 Medium |
| [49](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/49) | [131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | 🟡 Medium |
| [50](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/50) | [93. Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) | 🟡 Medium |
| [50](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/50) | [52. N-Queens II](https://leetcode.com/problems/n-queens-ii/) | 🔴 Hard |
| [50](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/50) | [473. Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/) | 🟡 Medium |
| [51](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/51) | [526. Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/) | 🟡 Medium |
| [51](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/51) | [698. Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) [▶](https://www.youtube.com/watch?v=mBk4I0X46oI) | 🟡 Medium |
| [51](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/51) | [1849. Splitting a String Into Descending Consecutive Values](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/) | 🟡 Medium |
| [51](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/51) | [282. Expression Add Operators](https://leetcode.com/problems/expression-add-operators/) | 🔴 Hard |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Recursion cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/recursion/)
- [Complete search with recursion — USACO Guide](https://usaco.guide/bronze/complete-rec)
- [take U forward — Recursion & Backtracking series (YouTube)](https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
