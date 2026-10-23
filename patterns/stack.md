# Stacks & Queues

> **Phase 2** · LIFO/FIFO structures for matching, parsing and evaluation.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/stack) · [Problem list](../PROBLEMS.md)

## When to use it

Nested brackets, expression evaluation, undo/history, BFS frontiers.

## Recognise it

- Matching / nesting: brackets, HTML tags, path simplification, decoding `3[a2[c]]`.
- Evaluating expressions (RPN, basic calculator) → operand stack (+ operator stack).
- "Most recent unmatched thing" → push; "closes it" → pop.
- Queue via two stacks, min-stack, stack via queues — classic design variants.

## Template (Python)

```python
def is_valid(s):
    pairs = {")": "(", "]": "[", "}": "{"}
    st = []
    for c in s:
        if c in pairs:
            if not st or st.pop() != pairs[c]:
                return False
        else:
            st.append(c)
    return not st

def eval_rpn(tokens):
    st = []
    for t in tokens:
        if t in "+-*/" and len(t) == 1:
            b, a = st.pop(), st.pop()
            st.append(a + b if t == "+" else a - b if t == "-" else a * b if t == "*" else int(a / b))
        else:
            st.append(int(t))
    return st[0]

def decode_string(s):                    # LC 394
    st, cur, num = [], "", 0
    for c in s:
        if c.isdigit():
            num = num * 10 + int(c)
        elif c == "[":
            st.append((cur, num)); cur, num = "", 0
        elif c == "]":
            prev, k = st.pop(); cur = prev + cur * k
        else:
            cur += c
    return cur

class MinStack:
    def __init__(self):
        self.st = []                     # (value, min_so_far)
    def push(self, x):
        m = min(x, self.st[-1][1]) if self.st else x
        self.st.append((x, m))
    def pop(self):  self.st.pop()
    def top(self):  return self.st[-1][0]
    def getMin(self): return self.st[-1][1]
```

## Complexity

O(n) time with O(n) stack space; each token is pushed and popped at most once.

## Pitfalls

- Popping from an empty stack — guard with `if not st`.
- Integer division toward zero in RPN: use `int(a / b)`, not `a // b`, for negative operands.
- Multi-digit numbers in parsers: accumulate `num = num*10 + d` instead of pushing per digit.
- Forgetting to flush the final operand/number after the loop ends.

## How to talk about it in an interview

Identify what the stack stores (values? indices? partial results?) and when it pops; state that out loud first.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [38](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/38) | [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) ⭐ [▶](https://www.youtube.com/watch?v=WTzjTskDFMg) | 🟢 Easy |
| [38](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/38) | [155. Min Stack](https://leetcode.com/problems/min-stack/) | 🟡 Medium |
| [38](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/38) | [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | 🟡 Medium |
| [41](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/41) | [394. Decode String](https://leetcode.com/problems/decode-string/) | 🟡 Medium |
| [41](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/41) | [227. Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/) | 🟡 Medium |
| [41](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/41) | [71. Simplify Path](https://leetcode.com/problems/simplify-path/) | 🟡 Medium |
| [42](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/42) | [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) | 🟢 Easy |
| [42](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/42) | [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) | 🟢 Easy |
| [42](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/42) | [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) | 🟡 Medium |
| [42](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/42) | [933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/) | 🟢 Easy |
| [115](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/115) | [726. Number of Atoms](https://leetcode.com/problems/number-of-atoms/) | 🔴 Hard |
| [115](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/115) | [385. Mini Parser](https://leetcode.com/problems/mini-parser/) | 🟡 Medium |
| [115](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/115) | [301. Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/) | 🔴 Hard |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Stacks cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/stack/)
- [Queues cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/queue/)
- [take U forward — Stack & Queue playlist (YouTube)](https://www.youtube.com/playlist?list=PLgUwDviBIf0pOd5zvVVSzgpo6BaCpHT9c)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
