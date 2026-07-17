# Bubble Sort

**Category:** Fundamentals
**Difficulty:** Easy
**Source:** classic

---

## Problem
Implement **bubble sort**: sort an array of integers into ascending order *by hand* (don't call the built-in sort). Return the sorted array.

Bubble sort works by repeatedly stepping through the list, comparing **adjacent** pairs and swapping them if they're in the wrong order. After each full pass, the largest remaining value has "bubbled up" to the end.

## Examples
```
Input:  [5, 1, 4, 2, 8]
Output: [1, 2, 4, 5, 8]

Pass 1: [1,4,2,5,8]  (8 bubbles to the end)
Pass 2: [1,2,4,5,8]  ...
```

## Constraints
- `0 <= nums.length <= 1000`
- Sort **ascending**.

---

## 🤔 Before you code — think
- [ ] You'll need two loops: an outer pass counter and an inner adjacent-comparison loop. Why two?
- [ ] After the first full pass, the last element is already correct — can the inner loop get shorter each pass?
- [ ] **Optimization:** if a whole pass makes zero swaps, what does that tell you? Can you stop early?
- [ ] How do you swap two elements? (Python and TypeScript each have a clean way.)

## 🎯 Complexity target
**Time `O(n²)`** — worst case, every pair gets compared. (Best case `O(n)` *if* you add the early-exit optimization on already-sorted input.)
**Space `O(1)`** — you sort *in place*, swapping within the same array. No extra array needed.

> This is a great problem for *feeling* why `O(n²)` is slow: doubling the input roughly quadruples the work.
