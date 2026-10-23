# String DP

> **Phase 5** · Two-index DP over strings: LCS, edit distance, matching with wildcards.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/dp-strings) · [Problem list](../PROBLEMS.md)

## When to use it

Compare/transform two strings, subsequence counting, regex-like matching.

## Recognise it

- Two strings compared position by position: LCS, edit distance, interleaving, distinct subsequences.
- Matching with wildcards/regex: `dp[i][j]` = first i chars match first j pattern chars.
- Palindromic subsequences / minimum insertions → DP over `(i, j)` ranges of one string.
- Transitions are almost always `dp[i-1][j]`, `dp[i][j-1]`, `dp[i-1][j-1]`.

## Template (Python)

```python
def lcs(a, b):
    m, n = len(a), len(b)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            dp[i][j] = dp[i-1][j-1] + 1 if a[i-1] == b[j-1] else max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

def edit_distance(a, b):
    m, n = len(a), len(b)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1): dp[i][0] = i
    for j in range(n + 1): dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if a[i-1] == b[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])   # delete, insert, replace
    return dp[m][n]

def is_match_regex(s, p):               # LC 10: '.' any char, '*' zero or more of previous
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for j in range(2, n + 1):
        if p[j-1] == "*": dp[0][j] = dp[0][j-2]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j-1] == "*":
                dp[i][j] = dp[i][j-2] or (p[j-2] in (s[i-1], ".") and dp[i-1][j])
            else:
                dp[i][j] = p[j-1] in (s[i-1], ".") and dp[i-1][j-1]
    return dp[m][n]

def longest_palindrome_subseq(s):
    n = len(s); dp = [[0] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        dp[i][i] = 1
        for j in range(i + 1, n):
            dp[i][j] = dp[i+1][j-1] + 2 if s[i] == s[j] else max(dp[i+1][j], dp[i][j-1])
    return dp[0][n-1]

def num_distinct(s, t):                  # LC 115
    n = len(t); dp = [1] + [0] * n
    for ch in s:
        for j in range(n, 0, -1):        # downwards: each char of s used once
            if ch == t[j-1]: dp[j] += dp[j-1]
    return dp[n]
```

## Complexity

O(m × n) time; O(min(m, n)) space with a rolling row when transitions only look one row back.

## Pitfalls

- Index shift between `dp[i]` (prefix of length i) and `s[i-1]` (the i-th character).
- Regex `*`: the zero-occurrence case (`dp[i][j-2]`) is the one people forget.
- Range DP over `(i, j)` must iterate `i` downwards (or by increasing length) so sub-ranges are ready.
- Rolling rows: copy or iterate in the right direction so you read old values, not new ones.

## How to talk about it in an interview

Define `dp[i][j]` in English with the word "prefix", list the three neighbour transitions, then write the loops.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [132](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/132) | [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) ⭐ | 🟡 Medium |
| [132](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/132) | [72. Edit Distance](https://leetcode.com/problems/edit-distance/) | 🟡 Medium |
| [132](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/132) | [583. Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) | 🟡 Medium |
| [133](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/133) | [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) | 🔴 Hard |
| [133](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/133) | [97. Interleaving String](https://leetcode.com/problems/interleaving-string/) | 🟡 Medium |
| [133](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/133) | [44. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) | 🔴 Hard |
| [134](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/134) | [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) | 🔴 Hard |
| [134](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/134) | [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) | 🟡 Medium |
| [134](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/134) | [1312. Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) | 🔴 Hard |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Dynamic programming cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/dynamic-programming/)
- [Longest common subsequence — Wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence)
- [Edit distance — Wikipedia](https://en.wikipedia.org/wiki/Levenshtein_distance)
- [take U forward — Dynamic Programming playlist (YouTube)](https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
