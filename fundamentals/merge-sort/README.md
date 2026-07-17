# Merge Sort

**Category:** Fundamentals
**Difficulty:** Medium
**Source:** classic (divide & conquer)

---

## Problem
Implement **merge sort**: sort an array of integers ascending using the *divide and conquer* strategy. Return the sorted array. Don't use the built-in sort.

The idea:
1. **Divide** the array into two halves.
2. **Recursively** sort each half.
3. **Merge** the two sorted halves back into one sorted array.

## Examples
```
Input:  [5, 2, 4, 6, 1, 3]
Output: [1, 2, 3, 4, 5, 6]

Divide:   [5,2,4] | [6,1,3]
Sort each:[2,4,5] | [1,3,6]
Merge:    [1,2,3,4,5,6]
```

## Constraints
- `0 <= nums.length <= 10^4`
- Sort **ascending**.

---

## 🤔 Before you code — think
- [ ] What's the **base case** for the recursion? (When is an array already sorted?)
- [ ] How do you split an array into two halves in each language?
- [ ] The `merge` step is the heart of it: given two *already-sorted* lists, how do you walk through both with pointers and pick the smaller front element each time?
- [ ] This is your first real look at **recursion depth** — how deep does the call stack get?

## 🎯 Complexity target
**Time `O(n log n)`** — `log n` levels of splitting, and each level does `O(n)` total work merging.
**Space `O(n)`** — merging builds new arrays that together hold up to `n` elements, plus `O(log n)` recursion stack frames.

> Compare this to bubble sort's `O(n²)`: for `n = 1,000`, that's ~10,000 operations vs. ~1,000,000. This is *why* real languages use `O(n log n)` sorts under the hood (Python's Timsort, JS's sort).
