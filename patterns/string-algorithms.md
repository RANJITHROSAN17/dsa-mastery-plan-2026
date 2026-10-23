# String Algorithms

> **Phase 4** · KMP failure function, rolling hashes, palindrome structure, greedy string building.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/string-algorithms) · [Problem list](../PROBLEMS.md)

## When to use it

Pattern search in O(n+m), repeated/duplicate substrings, lexicographically smallest results.

## Recognise it

- Find a pattern in text in O(n+m) → KMP failure function (also solves "shortest palindrome", "repeated substring pattern").
- Repeated / duplicate substrings, comparing many substrings → rolling hash (Rabin–Karp), often with binary search on length.
- Palindromic structure in O(n) → Manacher; counting palindromic substrings.
- Lexicographically smallest / remove duplicate letters → greedy with a stack and last-occurrence map.

## Template (Python)

```python
def prefix_function(s):
    """pi[i] = length of the longest proper prefix of s[:i+1] that is also a suffix."""
    pi = [0] * len(s)
    for i in range(1, len(s)):
        k = pi[i - 1]
        while k and s[i] != s[k]:
            k = pi[k - 1]
        if s[i] == s[k]:
            k += 1
        pi[i] = k
    return pi

def kmp_find(text, pat):
    pi = prefix_function(pat + "#" + text)
    return [i - 2 * len(pat) for i in range(len(pi)) if pi[i] == len(pat)]

def rabin_karp(text, pat, base=911382323, mod=(1 << 61) - 1):
    n, m = len(text), len(pat)
    if m > n: return []
    hp = ht = 0; high = pow(base, m - 1, mod)
    for i in range(m):
        hp = (hp * base + ord(pat[i])) % mod
        ht = (ht * base + ord(text[i])) % mod
    hits = [0] if hp == ht and text[:m] == pat else []
    for i in range(m, n):
        ht = ((ht - ord(text[i - m]) * high) * base + ord(text[i])) % mod
        if ht == hp and text[i - m + 1:i + 1] == pat:
            hits.append(i - m + 1)
    return hits

def manacher(s):
    t = "^#" + "#".join(s) + "#$"
    p = [0] * len(t); center = right = 0
    for i in range(1, len(t) - 1):
        if i < right:
            p[i] = min(right - i, p[2 * center - i])
        while t[i + p[i] + 1] == t[i - p[i] - 1]:
            p[i] += 1
        if i + p[i] > right:
            center, right = i, i + p[i]
    return p                       # p[i] = radius; longest = max(p)

def remove_duplicate_letters(s):   # LC 316
    last = {c: i for i, c in enumerate(s)}
    st, seen = [], set()
    for i, c in enumerate(s):
        if c in seen: continue
        while st and st[-1] > c and last[st[-1]] > i:
            seen.remove(st.pop())
        st.append(c); seen.add(c)
    return "".join(st)
```

## Complexity

KMP O(n+m); Rabin–Karp O(n+m) expected; Manacher O(n); Z-function O(n).

## Pitfalls

- Rolling hash collisions — use a large modulus (or double hashing) and verify candidates when correctness matters.
- Off-by-one when converting the prefix function to match positions.
- Manacher's transformed string needs *distinct* sentinels at both ends to stop the expansion.
- Using KMP when a simple `in` check is acceptable — mention the O(n·m) worst case of naive search and move on.

## How to talk about it in an interview

Say which property you exploit: "prefix equals suffix" (KMP), "hash of a window updates in O(1)" (RK), or "mirror radius" (Manacher).

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [112](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/112) | [1392. Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/) | 🔴 Hard |
| [112](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/112) | [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/) | 🔴 Hard |
| [112](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/112) | [686. Repeated String Match](https://leetcode.com/problems/repeated-string-match/) | 🟡 Medium |
| [113](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/113) | [187. Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/) | 🟡 Medium |
| [113](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/113) | [1044. Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/) | 🔴 Hard |
| [113](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/113) | [2156. Find Substring With Given Hash Value](https://leetcode.com/problems/find-substring-with-given-hash-value/) | 🔴 Hard |
| [114](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/114) | [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) ⭐ | 🟡 Medium |
| [114](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/114) | [336. Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/) | 🔴 Hard |
| [114](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/114) | [1147. Longest Chunked Palindrome Decomposition](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/) | 🔴 Hard |
| [116](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/116) | [316. Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/) | 🟡 Medium |
| [116](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/116) | [1081. Smallest Subsequence of Distinct Characters](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/) | 🟡 Medium |
| [116](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/116) | [321. Create Maximum Number](https://leetcode.com/problems/create-maximum-number/) | 🔴 Hard |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Prefix function (KMP) — cp-algorithms](https://cp-algorithms.com/string/prefix-function.html)
- [String hashing — cp-algorithms](https://cp-algorithms.com/string/string-hashing.html)
- [Manacher's algorithm — cp-algorithms](https://cp-algorithms.com/string/manacher.html)
- [Hashing — USACO Guide](https://usaco.guide/gold/hashing)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
