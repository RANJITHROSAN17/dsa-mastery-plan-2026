# String Fundamentals

> **Phase 1** · Parsing, building and comparing strings; palindromes by expansion.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/strings) · [Problem list](../PROBLEMS.md)

## When to use it

Tokenising, formatting, simple matching, palindrome checks.

## Recognise it

- Parsing / tokenising input (split by delimiters, handle signs and overflow, trim spaces).
- Palindromes: expand around centres (odd + even) or two pointers from the ends.
- Building output efficiently — collect pieces in a list and `''.join` once.
- Character frequency comparisons (anagram, isomorphic, pattern matching) → fixed-size count arrays.

## Template (Python)

```python
def is_palindrome_alnum(s):
    i, j = 0, len(s) - 1
    while i < j:
        while i < j and not s[i].isalnum(): i += 1
        while i < j and not s[j].isalnum(): j -= 1
        if s[i].lower() != s[j].lower():
            return False
        i += 1; j -= 1
    return True

def longest_palindrome(s):                  # expand around centre, O(n²)
    best = ""
    for c in range(len(s)):
        for lo, hi in ((c, c), (c, c + 1)):  # odd and even centres
            while lo >= 0 and hi < len(s) and s[lo] == s[hi]:
                lo -= 1; hi += 1
            if hi - lo - 1 > len(best):
                best = s[lo + 1:hi]
    return best

def my_atoi(s):                              # LC 8
    i, n, sign, val = 0, len(s), 1, 0
    while i < n and s[i] == " ": i += 1
    if i < n and s[i] in "+-":
        sign = -1 if s[i] == "-" else 1
        i += 1
    while i < n and s[i].isdigit():
        val = val * 10 + int(s[i]); i += 1
    return max(-2**31, min(2**31 - 1, sign * val))

def encode(strs):                            # length-prefixed, unambiguous
    return "".join(f"{len(s)}#{s}" for s in strs)
```

## Complexity

Usually O(n); palindrome expansion is O(n²) worst-case (Manacher's gives O(n) — see string-algorithms).

## Pitfalls

- Repeated string concatenation in a loop is O(n²) in many languages — use a list builder.
- Forgetting Unicode / case / non-alphanumeric rules stated in the prompt.
- Integer overflow rules (clamp to 32-bit) are part of the spec for parsing problems.
- Even-length palindrome centres are easy to forget — always run both `(c, c)` and `(c, c+1)`.

## How to talk about it in an interview

Clarify the alphabet (lowercase only? ASCII?), then choose count arrays vs dicts accordingly.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [24](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/24) | [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) | 🟢 Easy |
| [24](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/24) | [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) | 🟢 Easy |
| [24](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/24) | [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) | 🟡 Medium |
| [25](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/25) | [8. String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) | 🟡 Medium |
| [25](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/25) | [6. Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/) | 🟡 Medium |
| [25](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/25) | [443. String Compression](https://leetcode.com/problems/string-compression/) | 🟡 Medium |
| [26](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/26) | [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) | 🟢 Easy |
| [26](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/26) | [459. Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/) | 🟢 Easy |
| [26](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/26) | [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) ⭐ | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Strings cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/string/)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
