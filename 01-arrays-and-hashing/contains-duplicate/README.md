# Contains Duplicate

**Category:** Arrays & Hashing
**Difficulty:** Easy
**Source:** LeetCode #217

---

## Problem
Given an integer array `nums`, return `true` if **any value appears at least twice**, and `false` if every element is distinct.

## Examples
```
Input:  [1, 2, 3, 1]
Output: true          (1 appears twice)

Input:  [1, 2, 3, 4]
Output: false         (all distinct)

Input:  [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
```

## Constraints
- `1 <= nums.length <= 10^5`
- Values fit in a 32-bit integer.

---

## 🤔 Before you code — think
- [ ] **Brute force:** compare every element to every other one. What's the time cost? (Hint: two nested loops.)
- [ ] **Better:** what if you remembered every number you've already seen? Which data structure answers *"have I seen this before?"* in `O(1)`?
- [ ] **Slick one-liner:** what happens to duplicates if you put everything into a **set**? How does the set's size compare to the array's?
- [ ] This is the perfect first taste of the **time-vs-space trade-off** — write down both approaches' costs.

## 🎯 Complexity target
**Time `O(n)`** — one pass, using `O(1)` lookups.
**Space `O(n)`** — the set/map can grow to hold up to `n` elements.

> Compare against the brute force (`O(n²)` time, `O(1)` space). Which would you defend in a code review, and why?
