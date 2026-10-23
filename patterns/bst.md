# Binary Search Trees

> **Phase 3** · In-order traversal is sorted; bounds propagate downward.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/bst) · [Problem list](../PROBLEMS.md)

## When to use it

Validation, k-th smallest, successor, LCA in a BST, iterators.

## Recognise it

- The tree is a BST → in-order traversal is sorted; use it for k-th smallest, validation, converting to a sorted list.
- Validation needs **bounds** passed downward, not just comparing with the direct children.
- LCA in a BST: walk from the root comparing values — no recursion into both sides.
- Insert/delete/successor/iterator with O(h) time.

## Template (Python)

```python
def is_valid_bst(root, lo=float("-inf"), hi=float("inf")):
    if not root:
        return True
    if not (lo < root.val < hi):
        return False
    return is_valid_bst(root.left, lo, root.val) and is_valid_bst(root.right, root.val, hi)

def kth_smallest(root, k):
    st, cur = [], root
    while True:
        while cur:
            st.append(cur); cur = cur.left
        cur = st.pop(); k -= 1
        if k == 0:
            return cur.val
        cur = cur.right

def lca_bst(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val:   root = root.left
        elif p.val > root.val and q.val > root.val: root = root.right
        else: return root

def delete_node(root, key):
    if not root:
        return None
    if key < root.val:   root.left = delete_node(root.left, key)
    elif key > root.val: root.right = delete_node(root.right, key)
    else:
        if not root.left:  return root.right
        if not root.right: return root.left
        succ = root.right
        while succ.left: succ = succ.left
        root.val = succ.val
        root.right = delete_node(root.right, succ.val)
    return root

class BSTIterator:                       # amortised O(1) next, O(h) space
    def __init__(self, root):
        self.st = []; self._push(root)
    def _push(self, n):
        while n: self.st.append(n); n = n.left
    def next(self):
        n = self.st.pop(); self._push(n.right); return n.val
    def hasNext(self):
        return bool(self.st)
```

## Complexity

O(h) per operation (O(log n) balanced, O(n) skewed); in-order traversal O(n).

## Pitfalls

- Validating a BST by only checking children — `[5,4,6,null,null,3,7]` fools that.
- Using inclusive bounds when duplicates are not allowed (or vice versa).
- Forgetting to continue to `cur.right` after visiting a node in iterative in-order.
- Deleting a node with two children: replace with the in-order successor (or predecessor) and delete *that*.

## How to talk about it in an interview

Lead with "in-order of a BST is sorted" — most BST questions fall out of that one fact.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [68](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/68) | [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) ⭐ [▶](https://www.youtube.com/watch?v=s6ATEkipzow) | 🟡 Medium |
| [68](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/68) | [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) ⭐ | 🟡 Medium |
| [68](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/68) | [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) ⭐ | 🟡 Medium |
| [69](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/69) | [701. Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/) | 🟡 Medium |
| [69](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/69) | [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) | 🟡 Medium |
| [69](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/69) | [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | 🟢 Easy |
| [69](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/69) | [173. Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [BST visualised — VisuAlgo](https://visualgo.net/en/bst)
- [take U forward — Binary Trees & BSTs playlist (YouTube)](https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
