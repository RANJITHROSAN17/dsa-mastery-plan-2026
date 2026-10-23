# Binary Trees

> **Phase 3** · DFS (pre/in/post) and BFS traversals; recursion that returns information upward.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/trees) · [Problem list](../PROBLEMS.md)

## When to use it

Depth/diameter/paths, construction from traversals, serialisation, LCA.

## Recognise it

- Anything on a binary tree: depth, diameter, balanced, paths, views, construction, serialisation.
- Post-order recursion that **returns information upward** (height, best path through this node) is the workhorse.
- Level-by-level questions (right side view, zigzag, level averages) → BFS with queue size per level.
- Problems mentioning "ancestor" → LCA via recursion that returns the found node.

## Template (Python)

```python
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def max_depth(root):
    return 0 if not root else 1 + max(max_depth(root.left), max_depth(root.right))

def diameter(root):
    best = 0
    def height(node):
        nonlocal best
        if not node:
            return 0
        l, r = height(node.left), height(node.right)
        best = max(best, l + r)          # path through this node
        return 1 + max(l, r)             # return what the parent needs
    height(root)
    return best

def level_order(root):
    out, q = [], deque([root] if root else [])
    while q:
        out.append([])
        for _ in range(len(q)):          # exactly one level
            n = q.popleft(); out[-1].append(n.val)
            if n.left: q.append(n.left)
            if n.right: q.append(n.right)
    return out

def lca(root, p, q):
    if not root or root is p or root is q:
        return root
    l, r = lca(root.left, p, q), lca(root.right, p, q)
    return root if l and r else l or r

def build(preorder, inorder):           # LC 105
    idx = {v: i for i, v in enumerate(inorder)}
    pre = iter(preorder)
    def go(lo, hi):
        if lo > hi:
            return None
        root = TreeNode(next(pre)); m = idx[root.val]
        root.left = go(lo, m - 1); root.right = go(m + 1, hi)
        return root
    return go(0, len(inorder) - 1)

def inorder_iterative(root):
    out, st, cur = [], [], root
    while cur or st:
        while cur:
            st.append(cur); cur = cur.left
        cur = st.pop(); out.append(cur.val); cur = cur.right
    return out
```

## Complexity

O(n) time to touch every node; O(h) stack/queue space (O(n) worst for skewed trees or wide levels).

## Pitfalls

- Mixing up "what I return to my parent" and "what I record globally" (diameter, max path sum).
- Forgetting the `None` base case or treating leaf checks inconsistently (`not node.left and not node.right`).
- BFS level separation without capturing `len(q)` first.
- Max path sum: clamp negative child contributions to 0.

## How to talk about it in an interview

For recursive tree problems say: "At each node I need X from my children and I give Y to my parent."

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [61](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/61) | [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) | 🟢 Easy |
| [61](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/61) | [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) | 🟢 Easy |
| [61](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/61) | [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) | 🟢 Easy |
| [61](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/61) | [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) ⭐ | 🟡 Medium |
| [62](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/62) | [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) ⭐ | 🟢 Easy |
| [62](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/62) | [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) | 🟢 Easy |
| [62](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/62) | [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | 🟢 Easy |
| [62](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/62) | [100. Same Tree](https://leetcode.com/problems/same-tree/) ⭐ | 🟢 Easy |
| [63](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/63) | [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) ⭐ [▶](https://www.youtube.com/watch?v=OnSn2XEQ4MY) | 🟢 Easy |
| [63](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/63) | [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) ⭐ | 🟢 Easy |
| [63](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/63) | [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/) | 🟢 Easy |
| [63](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/63) | [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) | 🟢 Easy |
| [64](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/64) | [112. Path Sum](https://leetcode.com/problems/path-sum/) | 🟢 Easy |
| [64](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/64) | [113. Path Sum II](https://leetcode.com/problems/path-sum-ii/) | 🟡 Medium |
| [64](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/64) | [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/) | 🟡 Medium |
| [64](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/64) | [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) ⭐ | 🔴 Hard |
| [65](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/65) | [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) | 🟡 Medium |
| [65](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/65) | [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | 🟡 Medium |
| [65](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/65) | [1448. Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) | 🟡 Medium |
| [65](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/65) | [116. Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) | 🟡 Medium |
| [66](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/66) | [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) ⭐ | 🟡 Medium |
| [66](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/66) | [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) | 🟡 Medium |
| [66](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/66) | [297. Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) ⭐ | 🔴 Hard |
| [67](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/67) | [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | 🟡 Medium |
| [67](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/67) | [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) | 🟡 Medium |
| [67](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/67) | [863. All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Trees cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/tree/)
- [take U forward — Binary Trees & BSTs playlist (YouTube)](https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
