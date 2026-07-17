# Two Sum

**Category:** Arrays & Hashing
**Difficulty:** Easy
**Source:** LeetCode #1

---

## Problem
Given an array of integers `nums` and an integer `target`, return the **indices of the two numbers** that add up to `target`.

- Exactly one valid answer exists.
- You may not use the same element twice.
- The answer can be returned in any order.

## Examples
```
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]        (nums[0] + nums[1] = 2 + 7 = 9)

Input:  nums = [3, 2, 4], target = 6
Output: [1, 2]        (2 + 4 = 6)

Input:  nums = [3, 3], target = 6
Output: [0, 1]
```

## Constraints
- `2 <= nums.length <= 10^4`
- Exactly one solution exists.

---

## 🤔 Before you code — think
- [ ] **Brute force:** try every pair `(i, j)`. Two nested loops → what time cost?
- [ ] For each number `x`, the number you *need* is `target - x` (its **complement**). If you'd already recorded the numbers you've seen and *their indices*, how fast could you check whether the complement exists?
- [ ] Which structure maps a **value → its index** with `O(1)` lookup? (Python `dict`, TypeScript `Map`.)
- [ ] Can you solve it in **one pass**? (Check for the complement *before* you add the current number.)

## 🎯 Complexity target
**Time `O(n)`** — a single pass with `O(1)` complement lookups.
**Space `O(n)`** — the hash map can hold up to `n` value→index entries.

> This is THE canonical "trade space for time" problem. After you solve it, write the two complexity sentences from memory — that's how you know it stuck. See [COMPLEXITY.md §4](../../COMPLEXITY.md).
