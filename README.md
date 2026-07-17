# 🧠 Data Structures & Algorithms — TypeScript + Python

My personal, hands-on journey through data structures and algorithms while learning **TypeScript** and **Python** as a new engineer.

Every problem in this repo is a **template, not a solution**. I read the problem, plan my approach in my own words, implement it in *both* languages, run the built-in tests, and write out the time & space complexity. The goal isn't to collect green checkmarks — it's to be able to explain *why* each solution works and what it costs in time and memory.

> 🎯 **Cadence:** 4–5 problems per week, solved in **both** TypeScript and Python.

---

## 📚 How this repo is organized

```
dsa-typescript-python/
├── README.md            ← you are here (hub + progress tracker)
├── COMPLEXITY.md        ← Big-O, time vs. space, how memory actually works
├── _template/           ← copy this to start a new problem
│
├── fundamentals/        ← build the classics yourself (search + sort)
├── 01-arrays-and-hashing/
├── 02-two-pointers/
├── 03-sliding-window/
├── 04-stack/
├── 05-linked-list/
└── 06-trees/
```

Each problem lives in its own folder with **three files**:

| File | What it's for |
|------|---------------|
| `README.md` | The problem statement, examples, constraints, and *"think before you code"* prompts |
| `snake_case.py` | Python stub — signature + guiding `TODO(you)` comments + tests. **No answer.** |
| `camelCase.ts` | TypeScript stub — same idea, in TypeScript |

The `.py` and `.ts` files each ship with a small set of **self-check tests** at the bottom. You don't get the answer — you get a way to *know* when your answer is right.

---

## 🔁 My workflow for every problem

1. **Read** the problem's `README.md`. Restate it in my own words.
2. **Think** — answer the *"before you code"* prompts. Brute force first, then optimize.
3. **Fill in the placeholders** — the `TODO(you)` comments walk me through the reasoning.
4. **Implement** in Python, then TypeScript (or vice-versa — doing both cements it).
5. **Run the tests** until they pass (see below).
6. **Write the complexity** — fill in the `Time:` and `Space:` lines and *explain why*.
7. **Update the progress tracker** in this README. Commit with a meaningful message.

> A problem isn't "done" until I can explain the time **and** space complexity out loud.

---

## ▶️ How to run the tests

**Python** (needs Python 3.8+):
```bash
python3 01-arrays-and-hashing/two-sum/two_sum.py
# ✅ All tests passed!   (or an AssertionError showing what's wrong)
```

**TypeScript** (needs Node 18+, one-time setup):
```bash
npm install                     # installs tsx (a zero-config TS runner)
npx tsx 01-arrays-and-hashing/two-sum/twoSum.ts
```

You can also add these as habits — there's nothing to build or bundle, each file runs on its own.

---

## 🗺️ Roadmap & Progress Tracker

Legend:  ✅ done & tested · 🚧 in progress · ⬜ not started

### Fundamentals — *implement these from scratch*
| Problem | Difficulty | Python | TypeScript | Date | My complexity note |
|---------|:----------:|:------:|:----------:|------|--------------------|
| [Binary Search](fundamentals/binary-search/) | Easy | ⬜ | ⬜ | | |
| [Bubble Sort](fundamentals/bubble-sort/) | Easy | ⬜ | ⬜ | | |
| [Merge Sort](fundamentals/merge-sort/) | Medium | ⬜ | ⬜ | | |

### 01 · Arrays & Hashing
| Problem | Difficulty | Python | TypeScript | Date | My complexity note |
|---------|:----------:|:------:|:----------:|------|--------------------|
| [Contains Duplicate](01-arrays-and-hashing/contains-duplicate/) | Easy | ⬜ | ⬜ | | |
| [Two Sum](01-arrays-and-hashing/two-sum/) | Easy | ⬜ | ⬜ | | |
| [Valid Anagram](01-arrays-and-hashing/valid-anagram/) | Easy | ⬜ | ⬜ | | |

### 02 · Two Pointers
| Problem | Difficulty | Python | TypeScript | Date | My complexity note |
|---------|:----------:|:------:|:----------:|------|--------------------|
| [Valid Palindrome](02-two-pointers/valid-palindrome/) | Easy | ⬜ | ⬜ | | |
| [Two Sum II (Sorted)](02-two-pointers/two-sum-ii-sorted/) | Medium | ⬜ | ⬜ | | |

### 03 · Sliding Window
| Problem | Difficulty | Python | TypeScript | Date | My complexity note |
|---------|:----------:|:------:|:----------:|------|--------------------|
| [Best Time to Buy & Sell Stock](03-sliding-window/best-time-to-buy-and-sell-stock/) | Easy | ⬜ | ⬜ | | |

### 04 · Stack
| Problem | Difficulty | Python | TypeScript | Date | My complexity note |
|---------|:----------:|:------:|:----------:|------|--------------------|
| [Valid Parentheses](04-stack/valid-parentheses/) | Easy | ⬜ | ⬜ | | |

### 05 · Linked List
| Problem | Difficulty | Python | TypeScript | Date | My complexity note |
|---------|:----------:|:------:|:----------:|------|--------------------|
| [Reverse Linked List](05-linked-list/reverse-linked-list/) | Easy | ⬜ | ⬜ | | |

### 06 · Trees
| Problem | Difficulty | Python | TypeScript | Date | My complexity note |
|---------|:----------:|:------:|:----------:|------|--------------------|
| [Invert Binary Tree](06-trees/invert-binary-tree/) | Easy | ⬜ | ⬜ | | |

> As I finish the seeded set, I'll add more from the categories above using [`_template/`](_template/). Ideas for what to add next are listed in [`_template/NEXT_UP.md`](_template/NEXT_UP.md).

---

## 🗒️ Weekly log

A one-line reflection each week keeps me honest and gives me something concrete to show at 1:1s.

| Week of | Problems solved | What clicked | What's still fuzzy |
|---------|-----------------|--------------|--------------------|
| _2026-07-13_ | _e.g. Two Sum (py+ts)_ | _hash maps trade space for time_ | _recursion stack space_ |
|  |  |  |  |

---

## 🧭 Learning the languages, not just the answers

Because I'm new to both TypeScript and Python, I keep two running notes as I go:

- **Python-isms** I learned (list comprehensions, `enumerate`, `dict.get`, slicing, ...).
- **TypeScript-isms** I learned (types, `Map`/`Set`, `for...of`, optional chaining, ...).

Doing every problem in *both* languages makes the difference between "the algorithm" and "the language syntax" obvious — that contrast is where a lot of the learning happens.

👉 New to Big-O and memory? Start with **[COMPLEXITY.md](COMPLEXITY.md)** before your first problem.
