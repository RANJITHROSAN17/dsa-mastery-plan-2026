# Recursion

> **Phase 2** · Define the problem in terms of a smaller instance; trust the recursive call.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/recursion) · [Problem list](../PROBLEMS.md)

## When to use it

Divide-and-conquer shapes, tree-like state, exponentiation by squaring.

## Recognise it

- The problem is naturally self-similar: trees, nested structures, divide-and-conquer, powers.
- You can write the answer as `solve(n) = combine(solve(smaller))` with a clear base case.
- Exponentiation by squaring, Tower-of-Hanoi style moves, k-th symbol in grammar, flatten nested lists.
- You need a traversal order you can reason about (pre/in/post order) — recursion gives it for free.

## Template (Python)

```python
import sys
sys.setrecursionlimit(1 << 16)                # Python default is 1000

def my_pow(x, n):                             # O(log n)
    if n < 0:
        x, n = 1 / x, -n
    if n == 0:
        return 1.0
    half = my_pow(x, n // 2)
    return half * half * (x if n % 2 else 1)

def hanoi(n, src, dst, aux, moves):
    if n == 0:
        return
    hanoi(n - 1, src, aux, dst, moves)
    moves.append((src, dst))
    hanoi(n - 1, aux, dst, src, moves)

def flatten(nested):
    out = []
    def go(x):
        if isinstance(x, list):
            for y in x:
                go(y)
        else:
            out.append(x)
    go(nested)
    return out

def kth_grammar(n, k):                        # LC 779: trust the recursive answer
    if n == 1:
        return 0
    parent = kth_grammar(n - 1, (k + 1) // 2)
    return parent if k % 2 else 1 - parent
```

## Complexity

Count the recursion tree: nodes × work per node. Depth determines stack usage.

## Pitfalls

- Missing or wrong base case → infinite recursion / `RecursionError`.
- Recomputing overlapping subproblems — if the tree repeats states, memoise (that is DP).
- Python's recursion limit (1000) bites on deep lists/trees; raise it or convert to an explicit stack.
- Mutable default arguments (`def f(path=[])`) leak state between calls.

## How to talk about it in an interview

State the recurrence and base case in one sentence each, then write the code exactly from them.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [44](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/44) | [50. Pow(x, n)](https://leetcode.com/problems/powx-n/) | 🟡 Medium |
| [44](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/44) | [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | 🟢 Easy |
| [44](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/44) | [779. K-th Symbol in Grammar](https://leetcode.com/problems/k-th-symbol-in-grammar/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Recursion cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/recursion/)
- [Binary exponentiation — cp-algorithms](https://cp-algorithms.com/algebra/binary-exp.html)
- [take U forward — Recursion & Backtracking series (YouTube)](https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
