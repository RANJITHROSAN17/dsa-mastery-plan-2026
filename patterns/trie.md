# Tries

> **Phase 3** · Prefix tree for word sets; DFS over it to search with wildcards.

[← All patterns](../PATTERNS.md) · [Open in tracker](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/patterns/trie) · [Problem list](../PROBLEMS.md)

## When to use it

Prefix queries, autocomplete, many-word search on a grid, XOR maximisation.

## Recognise it

- Prefix queries over a dictionary of words: autocomplete, startsWith, longest common prefix.
- Many words to search in a grid / text at once (Word Search II) → DFS over the trie, not over each word.
- Wildcard search (`.` matches any) → recursive descent over children.
- Maximum XOR of two numbers → binary trie over bits.

## Template (Python)

```python
class TrieNode:
    __slots__ = ("children", "end")
    def __init__(self):
        self.children, self.end = {}, False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    def insert(self, word):
        n = self.root
        for c in word:
            n = n.children.setdefault(c, TrieNode())
        n.end = True
    def _walk(self, prefix):
        n = self.root
        for c in prefix:
            n = n.children.get(c)
            if n is None:
                return None
        return n
    def search(self, word):
        n = self._walk(word); return bool(n and n.end)
    def startsWith(self, prefix):
        return self._walk(prefix) is not None

def search_with_dots(node, word, i=0):              # LC 211
    if i == len(word):
        return node.end
    c = word[i]
    if c == ".":
        return any(search_with_dots(ch, word, i + 1) for ch in node.children.values())
    return c in node.children and search_with_dots(node.children[c], word, i + 1)

def find_words(board, words):                       # LC 212 sketch
    trie = Trie()
    for w in words: trie.insert(w)
    R, C, out = len(board), len(board[0]), set()
    def dfs(r, c, node, path):
        ch = board[r][c]
        nxt = node.children.get(ch)
        if not nxt: return
        path += ch
        if nxt.end: out.add(path); nxt.end = False   # avoid duplicates
        board[r][c] = "#"
        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < R and 0 <= nc < C and board[nr][nc] != "#":
                dfs(nr, nc, nxt, path)
        board[r][c] = ch
        if not nxt.children: node.children.pop(ch)   # prune dead branch
    for r in range(R):
        for c in range(C): dfs(r, c, trie.root, "")
    return list(out)
```

## Complexity

Insert/search O(L) per word of length L; memory O(total characters × alphabet) in the worst case.

## Pitfalls

- Marking `end` on the wrong node (after the loop, on the last character's node).
- Returning `True` from `search` for a prefix that is not a full word.
- Grid search: not restoring the cell after DFS, or not pruning the trie → TLE on large inputs.
- Using fixed 26-arrays for non-lowercase alphabets.

## How to talk about it in an interview

Explain that the trie shares prefixes so total work is bounded by total input characters, not words × length.

## Problems in this plan

Days link to the tracker; ⭐ = core (fast-track) problem, 🔁 = deliberate repeat, ▶ = verified video walkthrough.

<!-- generated:problems:start -->
| Day | Problem | Difficulty |
|---:|---|---|
| [73](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/73) | [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) ⭐ [▶](https://www.youtube.com/watch?v=oobqoCJlHA0) | 🟡 Medium |
| [73](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/73) | [211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) ⭐ | 🟡 Medium |
| [73](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/73) | [212. Word Search II](https://leetcode.com/problems/word-search-ii/) ⭐ | 🔴 Hard |
| [74](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/74) | [648. Replace Words](https://leetcode.com/problems/replace-words/) | 🟡 Medium |
| [74](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/74) | [720. Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/) | 🟡 Medium |
| [74](https://ranjithrosan17.github.io/dsa-mastery-plan-2026/#/day/74) | [421. Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) | 🟡 Medium |
<!-- generated:problems:end -->

## Resources

<!-- generated:resources:start -->
- [Tries cheatsheet — Tech Interview Handbook](https://www.techinterviewhandbook.org/algorithms/trie/)
<!-- generated:resources:end -->

## Your notes

Keep this section personal: the variant that surprised you, the bug you made, the question you would ask next time.

- 
