# Valid Anagram

**Category:** Arrays & Hashing
**Difficulty:** Easy
**Source:** LeetCode #242

---

## Problem
Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.

An anagram uses **exactly the same letters the same number of times**, just rearranged.

## Examples
```
Input:  s = "anagram", t = "nagaram"
Output: true

Input:  s = "rat", t = "car"
Output: false

Input:  s = "a", t = "ab"
Output: false   (different lengths can't be anagrams)
```

## Constraints
- `1 <= s.length, t.length <= 5 * 10^4`
- Assume lowercase English letters.

---

## 🤔 Before you code — think
- [ ] **Quick reject:** if the two strings have different lengths, can they ever be anagrams?
- [ ] **Approach A (sorting):** if you sort both strings' letters, what should be true? What's the time cost of sorting?
- [ ] **Approach B (counting):** count how many times each letter appears in `s`, then subtract using `t`. If the counts all end at zero, what does that mean? Which structure holds the counts?
- [ ] Try **both** approaches — comparing them teaches you the sorting-vs-hashmap trade-off.

## 🎯 Complexity target
**Counting approach:** Time `O(n)`, Space `O(1)` (at most 26 letter counts — a fixed size, so constant!).
**Sorting approach:** Time `O(n log n)`, Space `O(n)` (or `O(1)` extra, depending on the sort).

> Notice: "26 counters" doesn't grow with `n`, so it's `O(1)` space even though it's a map. Being able to explain *why that's constant* is a great interview moment.
