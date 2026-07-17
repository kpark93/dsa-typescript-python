# Best Time to Buy and Sell Stock

**Category:** Sliding Window
**Difficulty:** Easy
**Source:** LeetCode #121

---

## Problem
You are given an array `prices` where `prices[i]` is the price of a given stock on day `i`.

You want to maximize your profit by choosing **one day to buy** and a **different, later day to sell**. Return the **maximum profit** you can achieve. If no profit is possible, return `0`.

## Examples
```
Input:  [7, 1, 5, 3, 6, 4]
Output: 5             (buy on day 2 at price 1, sell on day 5 at price 6 -> 6-1 = 5)

Input:  [7, 6, 4, 3, 1]
Output: 0             (prices only fall — never buy; profit 0)
```

## Constraints
- `1 <= prices.length <= 10^5`
- You must buy **before** you sell.

---

## 🤔 Before you code — think
- [ ] **Brute force:** try every (buy day, sell day) pair. Two nested loops → what time cost? (Too slow for 10^5.)
- [ ] **One pass idea:** as you scan left to right, keep track of the **lowest price seen so far**. For today's price, what's the best profit if you sold *today*?
- [ ] You only need to remember two things as you go — what are they? (A running minimum, and a running best answer.)
- [ ] This is a "window" whose left edge is the cheapest day so far and right edge is today — hence *sliding window*.

## 🎯 Complexity target
**Time `O(n)`** — a single left-to-right pass.
**Space `O(1)`** — just two numbers: the min price so far and the best profit so far.

> The leap from `O(n²)` brute force to `O(n)` here comes from realizing you never need to look *backward* — you carry the one fact you need (the min-so-far) as you move forward.
