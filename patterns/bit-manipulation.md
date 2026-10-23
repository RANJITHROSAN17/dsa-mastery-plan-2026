# Bit Manipulation

> **Phase 2** · XOR tricks, masks, shifts and counting bits.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/bit-manipulation) · [Problem list](../PROBLEMS.md)

## When to use it

'Appears once/twice', powers of two, subsets as bitmasks, parity.

## Recognise it

- "Every element appears twice except one" → XOR; "except two" → XOR then split by a set bit.
- Power of two, count bits, reverse bits, missing number with O(1) space.
- Subsets of ≤ 20 items as bitmasks; DP over subsets.
- Add without `+` (XOR + carry), single-bit tricks `x & (x-1)`, `x & -x`.

## Template (Python)

```python
def single_number(nums):
    r = 0
    for x in nums:
        r ^= x
    return r

def count_bits(n):                        # LC 338: dp[i] = dp[i >> 1] + (i & 1)
    dp = [0] * (n + 1)
    for i in range(1, n + 1):
        dp[i] = dp[i >> 1] + (i & 1)
    return dp

def hamming_weight(x):
    c = 0
    while x:
        x &= x - 1                        # drop lowest set bit
        c += 1
    return c

def reverse_bits(x):
    r = 0
    for _ in range(32):
        r = (r << 1) | (x & 1); x >>= 1
    return r

def get_sum(a, b):                        # LC 371, 32-bit two's complement in Python
    mask = 0xFFFFFFFF
    while b:
        a, b = (a ^ b) & mask, ((a & b) << 1) & mask
    return a if a <= 0x7FFFFFFF else ~(a ^ mask)

def two_singles(nums):                    # LC 260
    x = 0
    for v in nums: x ^= v
    low = x & -x                          # a bit where the two differ
    a = 0
    for v in nums:
        if v & low: a ^= v
    return [a, x ^ a]

def all_subsets(items):
    n = len(items)
    return [[items[i] for i in range(n) if mask >> i & 1] for mask in range(1 << n)]
```

## Complexity

O(1) per operation on fixed-width integers; O(2ⁿ · n) for mask enumeration.

## Pitfalls

- Python ints are unbounded — simulate 32-bit with a mask when the problem assumes overflow/two's complement.
- Operator precedence: `&` binds looser than `==` — write `(x & 1) == 1`.
- Right-shifting negatives differs across languages (arithmetic vs logical shift).
- Confusing `x & (x-1)` (clear lowest set bit) with `x & -x` (isolate lowest set bit).

## How to talk about it in an interview

Name the identity you rely on (XOR cancels pairs, `x & (x-1)` clears a bit) before writing code.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [52](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/52) | [191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) ⭐ | 🟢 Easy |
| [52](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/52) | [338. Counting Bits](https://leetcode.com/problems/counting-bits/) ⭐ | 🟢 Easy |
| [52](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/52) | [190. Reverse Bits](https://leetcode.com/problems/reverse-bits/) ⭐ | 🟢 Easy |
| [53](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/53) | [136. Single Number](https://leetcode.com/problems/single-number/) | 🟢 Easy |
| [53](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/53) | [137. Single Number II](https://leetcode.com/problems/single-number-ii/) | 🟡 Medium |
| [53](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/53) | [260. Single Number III](https://leetcode.com/problems/single-number-iii/) | 🟡 Medium |
| [53](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/53) | [268. Missing Number](https://leetcode.com/problems/missing-number/) ⭐ | 🟢 Easy |
| [54](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/54) | [371. Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) ⭐ | 🟡 Medium |
| [54](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/54) | [231. Power of Two](https://leetcode.com/problems/power-of-two/) | 🟢 Easy |
| [54](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/54) | [201. Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/) | 🟡 Medium |
| [55](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/55) | [318. Maximum Product of Word Lengths](https://leetcode.com/problems/maximum-product-of-word-lengths/) | 🟡 Medium |
| [55](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/55) | [477. Total Hamming Distance](https://leetcode.com/problems/total-hamming-distance/) | 🟡 Medium |
| [55](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/55) | [461. Hamming Distance](https://leetcode.com/problems/hamming-distance/) | 🟢 Easy |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Binary cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/binary/)
- [Bit manipulation — cp-algorithms](https://cp-algorithms.com/algebra/bit-manipulation.html)
- [Introduction to bitwise operators — USACO Guide](https://usaco.guide/silver/intro-bitwise)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
