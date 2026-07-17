# Valid Palindrome

**Category:** Two Pointers
**Difficulty:** Easy
**Source:** LeetCode #125

---

## Problem
A phrase is a **palindrome** if, after converting all uppercase letters to lowercase and **removing all non-alphanumeric characters**, it reads the same forward and backward.

Given a string `s`, return `true` if it is a palindrome, `false` otherwise.

## Examples
```
Input:  "A man, a plan, a canal: Panama"
Output: true          (cleaned: "amanaplanacanalpanama")

Input:  "race a car"
Output: false         (cleaned: "raceacar")

Input:  " "
Output: true          (cleaned: "" — an empty string is a palindrome)
```

## Constraints
- `1 <= s.length <= 2 * 10^5`
- `s` may contain letters, digits, spaces, and punctuation.

---

## 🤔 Before you code — think
- [ ] **Simple version:** build a cleaned lowercase string, then check if it equals its reverse. What's the space cost of building that copy?
- [ ] **Two-pointer version (the point of this exercise):** put one pointer at the start (`left`) and one at the end (`right`). Move them toward each other, comparing characters. When can you skip a character?
- [ ] How do you decide if a character is alphanumeric? (Each language has a helper.)
- [ ] What's the loop's stopping condition, and what do you do when the two characters *don't* match?

## 🎯 Complexity target
**Time `O(n)`** — each pointer sweeps across the string once.
**Space `O(1)`** — the two-pointer version compares in place, allocating no cleaned copy.

> Contrast the two approaches: the "reverse a cleaned copy" version is `O(n)` space; the two-pointer version is `O(1)` space. This is why "two pointers" is a pattern worth owning.
