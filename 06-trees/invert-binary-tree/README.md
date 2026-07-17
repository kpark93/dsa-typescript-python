# Invert Binary Tree

**Category:** Trees
**Difficulty:** Easy
**Source:** LeetCode #226

---

## Problem
Given the `root` of a binary tree, **invert** it (mirror it left-to-right) and return the root.

Inverting means: at every node, swap its left and right children — all the way down.

## Examples
```
Input:            Output (mirrored):
      4                 4
    /   \             /   \
   2     7           7     2
  / \   / \         / \   / \
 1   3 6   9       9   6 3   1

Level-order in:  [4, 2, 7, 1, 3, 6, 9]
Level-order out: [4, 7, 2, 9, 6, 3, 1]
```

## Constraints
- The tree has `0` to `100` nodes.

> 🧩 The `TreeNode` class and the `build_tree` / `to_level_order` test helpers are **provided** in the stub files (they build a tree from a level-order list and read it back). You only implement `invert_tree`.

---

## 🤔 Before you code — think
- [ ] What's the smallest possible tree? (An empty tree / `None` node.) That's your **base case** — what do you return?
- [ ] At a single node, what's the one operation you perform? (Swap its two children.)
- [ ] After swapping, the *same job* needs doing on each child. What technique naturally repeats a job on smaller pieces? (**Recursion**.)
- [ ] **Memory insight:** recursion here uses stack space proportional to the tree's **height**. For a balanced tree that's `O(log n)`; for a totally lopsided one it's `O(n)`. Why?

## 🎯 Complexity target
**Time `O(n)`** — every node is visited once to swap its children.
**Space `O(h)`** — where `h` is the tree height, from the recursion call stack (`O(log n)` balanced, `O(n)` worst case).

> This problem is famous for being deceptively short once it clicks — the whole thing is "swap, then recurse on both sides." The learning is in seeing recursion + the call-stack space cost clearly. See [COMPLEXITY.md §5](../../COMPLEXITY.md).
