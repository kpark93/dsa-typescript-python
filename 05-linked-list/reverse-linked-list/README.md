# Reverse Linked List

**Category:** Linked List
**Difficulty:** Easy
**Source:** LeetCode #206

---

## Problem
Given the `head` of a singly linked list, reverse the list and return the **new head**.

A singly linked list is a chain of nodes, each holding a `val` and a `next` pointer to the following node. The last node points to `null`/`None`.

## Examples
```
Input:  1 -> 2 -> 3 -> 4 -> 5 -> None
Output: 5 -> 4 -> 3 -> 2 -> 1 -> None

Input:  1 -> 2 -> None
Output: 2 -> 1 -> None

Input:  None            (empty list)
Output: None
```

## Constraints
- The list has `0` to `5000` nodes.
- Try the **iterative** approach first; the **recursive** one is a great follow-up.

> 🧩 The `ListNode` class and the `build_list` / `to_list` test helpers are **already written for you** in the stub files. You only implement the reversal — focus on the pointer manipulation.

---

## 🤔 Before you code — think
- [ ] Draw it. To reverse, each node's `next` must point **backward** to the node that came before it. What do you need to remember to do that?
- [ ] You'll walk the list with a `current` pointer while keeping a `previous` pointer. **Before** you overwrite `current.next`, why must you save `current.next` in a temp variable first? (What breaks if you don't?)
- [ ] What does `previous` start as? What do you return at the end?
- [ ] **Memory insight:** you are *re-pointing existing nodes*, not creating new ones. So how much extra memory does this take?

## 🎯 Complexity target
**Time `O(n)`** — visit each node exactly once.
**Space `O(1)`** — iterative version rearranges pointers in place; only a few pointer variables. *(The recursive version is `O(n)` space because of the call stack — see [COMPLEXITY.md §5](../../COMPLEXITY.md).)*

> Linked-list reversal is the classic lesson in *values vs. references*: you move **pointers**, and the node values never get copied.
