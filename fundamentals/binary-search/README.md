# Binary Search

**Category:** Fundamentals
**Difficulty:** Easy
**Source:** LeetCode #704 / classic

---

## Problem
Given an array of integers `nums` sorted in **ascending order**, and a target value `target`, return the **index** of `target` if it exists in `nums`. Otherwise return `-1`.

You must write an algorithm with `O(log n)` runtime.

## Examples
```
Input:  nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4

Input:  nums = [-1, 0, 3, 5, 9, 12], target = 2
Output: -1   (2 is not in nums)
```

## Constraints
- `1 <= nums.length <= 10^4`
- `nums` is sorted in strictly ascending order.
- All values fit in a 32-bit integer.

---

## 🤔 Before you code — think
- [ ] Why does the array being **sorted** let you do better than checking every element?
- [ ] If you look at the middle element and it's too small, which half can you throw away?
- [ ] You'll track a `left` and `right` boundary. When does the loop stop?
- [ ] Careful with the midpoint: `mid = (left + right) // 2`. What happens at the boundaries?

## 🎯 Complexity target
**Time `O(log n)`** — you halve the search space each step.
**Space `O(1)`** — just a couple of pointers.

> Why `O(log n)`? Each step throws away half the remaining elements. Starting from `n`, you can only halve `log₂(n)` times before there's nothing left.
