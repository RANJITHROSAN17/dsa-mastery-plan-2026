# Linked Lists

> **Phase 2** · Pointer surgery, dummy heads, fast/slow pointers and in-place reversal.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/linked-list) · [Problem list](../PROBLEMS.md)

## When to use it

Singly/doubly linked structures, cycles, k-group operations, LRU-style designs.

## Recognise it

- Node pointer manipulation: reverse (whole / sub-range / in k-groups), merge, split, reorder.
- Cycle detection, middle node, k-th from end → fast & slow pointers.
- Any problem that says "O(1) extra space" on a list — the trick is in-place rewiring.
- Design problems (LRU, browser history) often pair a doubly linked list with a hash map.

## Template (Python)

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

def reverse(head):
    prev, cur = None, head
    while cur:
        cur.next, prev, cur = prev, cur, cur.next
    return prev

def middle(head):                      # fast/slow — second middle for even length
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
    return slow

def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow is fast:
            return True
    return False

def merge(a, b):
    dummy = tail = ListNode()
    while a and b:
        if a.val <= b.val:
            tail.next, a = a, a.next
        else:
            tail.next, b = b, b.next
        tail = tail.next
    tail.next = a or b
    return dummy.next

def remove_kth_from_end(head, k):
    dummy = ListNode(0, head)
    fast = slow = dummy
    for _ in range(k):
        fast = fast.next
    while fast.next:
        fast, slow = fast.next, slow.next
    slow.next = slow.next.next
    return dummy.next
```

## Complexity

O(n) time, O(1) extra space for pointer tricks (recursion costs O(n) stack).

## Pitfalls

- Losing the rest of the list — save `nxt = cur.next` before rewiring (or use tuple assignment as above).
- Forgetting the dummy head when the first node may be removed or the list may be empty.
- Off-by-one on fast/slow starts (`dummy` vs `head`) changes which middle you get.
- Reorder/palindrome problems: reverse the second half, then **restore** it if the interviewer cares about input integrity.

## How to talk about it in an interview

Draw 3–4 boxes with arrows and step through the first iteration by hand before writing code.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [31](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/31) | [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) ⭐ [▶](https://www.youtube.com/watch?v=G0_I-ZF0S38) | 🟢 Easy |
| [31](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/31) | [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | 🟢 Easy |
| [31](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/31) | [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) ⭐ | 🟢 Easy |
| [32](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/32) | [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) ⭐ | 🟢 Easy |
| [32](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/32) | [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) | 🟡 Medium |
| [32](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/32) | [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) ⭐ | 🟡 Medium |
| [33](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/33) | [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | 🟢 Easy |
| [33](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/33) | [143. Reorder List](https://leetcode.com/problems/reorder-list/) ⭐ [▶](https://www.youtube.com/watch?v=S5bfdUTrKLM) | 🟡 Medium |
| [33](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/33) | [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/) | 🟡 Medium |
| [34](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/34) | [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | 🟡 Medium |
| [34](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/34) | [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) | 🟢 Easy |
| [34](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/34) | [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) | 🟡 Medium |
| [35](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/35) | [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | 🟡 Medium |
| [35](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/35) | [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) | 🔴 Hard |
| [35](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/35) | [61. Rotate List](https://leetcode.com/problems/rotate-list/) | 🟡 Medium |
| [37](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/37) | [148. Sort List](https://leetcode.com/problems/sort-list/) | 🟡 Medium |
| [37](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/37) | [86. Partition List](https://leetcode.com/problems/partition-list/) | 🟡 Medium |
| [37](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/37) | [237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/) | 🟡 Medium |
| [37](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/37) | [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Linked lists cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/linked-list/)
- [NeetCode — Linked List playlist (YouTube)](https://www.youtube.com/playlist?list=PLot-Xpze53leU0Ec0VkBhnf4npMRFiNcB)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
