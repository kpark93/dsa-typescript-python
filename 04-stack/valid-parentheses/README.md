# Valid Parentheses

**Category:** Stack
**Difficulty:** Easy
**Source:** LeetCode #20

---

## Problem
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is **valid**.

A string is valid if:
1. Every open bracket is closed by the **same type** of bracket.
2. Open brackets are closed in the **correct order** (most recent open first).
3. Every close bracket has a matching open bracket.

## Examples
```
Input:  "()"          Output: true
Input:  "()[]{}"       Output: true
Input:  "(]"           Output: false
Input:  "([)]"         Output: false   (wrong order)
Input:  "{[]}"         Output: true
```

## Constraints
- `1 <= s.length <= 10^4`
- `s` consists only of the six bracket characters.

---

## 🤔 Before you code — think
- [ ] When you see a **closing** bracket, which opening bracket must it match? (Hint: the *most recently opened* one that's still unclosed.)
- [ ] "Most recent, still-open" = **Last In, First Out**. Which data structure is LIFO? (A **stack** — in Python a `list` with `append`/`pop`; in TS an array with `push`/`pop`.)
- [ ] What do you push when you see an opener? What do you check/pop when you see a closer?
- [ ] Two ways to fail: a closer that doesn't match the top, *and* leftover openers at the end. Handle both. What about a closer when the stack is empty?

## 🎯 Complexity target
**Time `O(n)`** — one pass, each character pushed/popped at most once.
**Space `O(n)`** — worst case (all openers like `"((((("`) the stack holds every character.

> This is the problem that makes the **stack** click: it exists precisely to answer "what's the most recent thing still waiting to be resolved?"
