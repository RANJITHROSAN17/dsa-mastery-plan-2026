# Math & Simulation

> **Phase 1** · Number theory basics, overflow care, and grid/matrix simulation.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/math-geometry) · [Problem list](../PROBLEMS.md)

## When to use it

Digits, primes, gcd, rotations, spiral/diagonal walks, Game of Life.

## Recognise it

- Digit manipulation (reverse, palindrome number, happy numbers), overflow bounds, modular arithmetic.
- Primes (sieve), gcd/lcm, powers, fast exponentiation.
- Grid simulation: spiral, rotate, diagonal walks, set-matrix-zeroes, Game of Life — mostly careful indexing.
- Bit-free math tricks: Gauss sums, parity, counting with inclusion–exclusion.

## Template (Python)

```python
from math import gcd

def sieve(n):
    is_p = [True] * (n + 1)
    is_p[0:2] = [False, False]
    for i in range(2, int(n ** 0.5) + 1):
        if is_p[i]:
            is_p[i*i::i] = [False] * len(range(i*i, n + 1, i))
    return [i for i, ok in enumerate(is_p) if ok]

def power_mod(b, e, m):                        # binary exponentiation
    r = 1; b %= m
    while e:
        if e & 1: r = r * b % m
        b = b * b % m; e >>= 1
    return r

def rotate(matrix):                            # LC 48: transpose, then reverse rows
    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()

def spiral_order(m):
    out = []
    top, bot, left, right = 0, len(m) - 1, 0, len(m[0]) - 1
    while top <= bot and left <= right:
        out += [m[top][c] for c in range(left, right + 1)]; top += 1
        out += [m[r][right] for r in range(top, bot + 1)]; right -= 1
        if top <= bot:
            out += [m[bot][c] for c in range(right, left - 1, -1)]; bot -= 1
        if left <= right:
            out += [m[r][left] for r in range(bot, top - 1, -1)]; left += 1
    return out
```

## Complexity

Sieve O(n log log n); fast power O(log e); matrix simulations O(rows × cols).

## Pitfalls

- Negative numbers with `%` and `//` behave differently across languages — be explicit.
- 32-bit overflow checks must happen *before* the multiplication in C-like languages.
- Spiral / layer loops: the two inner `if` guards prevent double-visiting on non-square grids.
- In-place matrix tricks (set zeroes) need a marker for the first row/column — decide it up front.

## How to talk about it in an interview

For simulation problems, narrate the boundary updates; for number theory, name the identity you rely on.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [6](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/6) | [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) ⭐ | 🟡 Medium |
| [6](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/6) | [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) ⭐ | 🟡 Medium |
| [6](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/6) | [48. Rotate Image](https://leetcode.com/problems/rotate-image/) ⭐ | 🟡 Medium |
| [28](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/28) | [66. Plus One](https://leetcode.com/problems/plus-one/) | 🟢 Easy |
| [28](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/28) | [67. Add Binary](https://leetcode.com/problems/add-binary/) | 🟢 Easy |
| [28](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/28) | [43. Multiply Strings](https://leetcode.com/problems/multiply-strings/) | 🟡 Medium |
| [56](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/56) | [1071. Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/) | 🟢 Easy |
| [56](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/56) | [204. Count Primes](https://leetcode.com/problems/count-primes/) | 🟡 Medium |
| [56](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/56) | [172. Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/) | 🟡 Medium |
| [57](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/57) | [7. Reverse Integer](https://leetcode.com/problems/reverse-integer/) | 🟡 Medium |
| [57](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/57) | [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/) | 🟢 Easy |
| [57](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/57) | [29. Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) | 🟡 Medium |
| [58](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/58) | [289. Game of Life](https://leetcode.com/problems/game-of-life/) | 🟡 Medium |
| [58](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/58) | [498. Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/) | 🟡 Medium |
| [58](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/58) | [59. Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/) | 🟡 Medium |
| [109](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/109) | [1572. Matrix Diagonal Sum](https://leetcode.com/problems/matrix-diagonal-sum/) | 🟢 Easy |
| [109](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/109) | [835. Image Overlap](https://leetcode.com/problems/image-overlap/) | 🟡 Medium |
| [109](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/109) | [1074. Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/) | 🔴 Hard |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Math cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/math/)
- [Matrix cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/matrix/)
- [Sieve of Eratosthenes — cp-algorithms](https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html)
- [Euclidean algorithm — cp-algorithms](https://cp-algorithms.com/algebra/euclid-algorithm.html)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
