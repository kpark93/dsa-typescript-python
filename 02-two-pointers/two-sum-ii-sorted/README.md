# Two Sum II — Input Array Is Sorted

**Category:** Two Pointers
**Difficulty:** Medium
**Source:** LeetCode #167

---

## Problem
Given a **1-indexed** array of integers `numbers` that is already **sorted in ascending order**, find two numbers that add up to `target`.

Return the indices of the two numbers, `[index1, index2]`, where `1 <= index1 < index2 <= numbers.length`. **Indices are 1-based** (not 0-based).

- Exactly one solution exists.
- You may not use the same element twice.
- Your solution must use only **constant extra space** (`O(1)`).

## Examples
```
Input:  numbers = [2, 7, 11, 15], target = 9
Output: [1, 2]        (2 + 7 = 9; positions 1 and 2)

Input:  numbers = [2, 3, 4], target = 6
Output: [1, 3]        (2 + 4 = 6)

Input:  numbers = [-1, 0], target = -1
Output: [1, 2]
```

## Constraints
- `2 <= numbers.length <= 3 * 10^4`
- `numbers` is sorted in non-decreasing order.
- Exactly one solution exists.

---

## 🤔 Before you code — think
- [ ] The plain Two Sum used a hash map (`O(n)` space). Here the array is **sorted** *and* you're only allowed `O(1)` space. How does *sorted* change your options?
- [ ] Put a pointer at each end. If `numbers[left] + numbers[right]` is **too big**, which pointer should move, and why? What if it's **too small**?
- [ ] Why does moving the correct pointer never skip the real answer? (This is the key insight — convince yourself.)
- [ ] Remember to return **1-based** indices.

## 🎯 Complexity target
**Time `O(n)`** — the two pointers move toward each other, together covering the array once.
**Space `O(1)`** — just two index variables; no hash map needed.

> Same problem as Two Sum, but "sorted" unlocks a strictly better `O(1)`-space solution. Recognizing when *sorted input* enables two pointers is a pattern you'll reuse constantly.
