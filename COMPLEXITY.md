# 📈 Big-O, Time & Space Complexity — a beginner's field guide

This is the mental model I use for every problem. Read it once now, then come back to it whenever a problem asks you to reason about cost. The two questions you answer for **every** solution:

1. **Time complexity** — as the input grows, how does the *number of steps* grow?
2. **Space complexity** — as the input grows, how does the *extra memory* grow?

Both are written in **Big-O notation**, which describes the *growth rate*, ignoring constant factors and small terms.

---

## 1. What Big-O actually means

Big-O answers: *"If I make the input 10× bigger, what happens to the cost?"*

We only care about the **dominant term** as the input size `n` gets large:

- `O(3n + 5)` → **`O(n)`** (drop the constants `3` and `5`)
- `O(n² + n)` → **`O(n²)`** (the `n²` term dominates)
- `O(500)` → **`O(1)`** (no matter how big `n` is, it's a fixed cost)

Why ignore constants? Because Big-O is about *scaling*, not exact timing. An `O(n)` algorithm eventually beats an `O(n²)` one for large `n`, regardless of hardware.

---

## 2. The complexity ladder (best → worst)

| Big-O | Name | "If n doubles..." | Typical cause |
|-------|------|-------------------|---------------|
| `O(1)` | constant | ...no change | array index, hash lookup, math |
| `O(log n)` | logarithmic | ...+1 more step | binary search, balanced tree |
| `O(n)` | linear | ...2× the work | one loop over the input |
| `O(n log n)` | linearithmic | ...a bit more than 2× | good sorting (merge/quick/Timsort) |
| `O(n²)` | quadratic | ...4× the work | nested loop over the same input |
| `O(2ⁿ)` | exponential | ...squares the work | naive recursion over subsets |
| `O(n!)` | factorial | ...catastrophic | generating all permutations |

**Rule of thumb for interviews & code review:** aim for `O(n)` or `O(n log n)`. If you wrote a nested loop and got `O(n²)`, ask: *"can a hash map or sorting get me down a level?"*

---

## 3. How to READ complexity off your own code

You don't need math — you count structure.

```python
def example(nums):          # nums has n items
    total = 0               # O(1)  — one operation
    for x in nums:          # O(n)  — runs n times
        total += x          #   O(1) inside
    for i in nums:          # O(n)  — another n...
        for j in nums:      #   O(n) nested  →  n * n
            print(i, j)     #     O(1) inside  =  O(n²)
    return total            # O(1)
```

Add them up: `O(1) + O(n) + O(n²) + O(1)` → keep the biggest → **`O(n²)`**.

Quick heuristics:
- **One loop** over the input → `O(n)`.
- **Loop inside a loop**, both over `n` → `O(n²)`.
- **Halving the search space each step** (binary search) → `O(log n)`.
- **A hash-map lookup / set membership** (`x in myset`, `map.get(k)`) → `O(1)` average.
- **Sorting** → `O(n log n)`.

---

## 4. Space complexity — this is where memory lives

Time gets all the attention, but your company cares about memory too. **Space complexity = how much *extra* memory your algorithm allocates as `n` grows.** The input itself usually doesn't count — we measure the *auxiliary* (extra) space you add.

| You did this... | Extra space |
|-----------------|-------------|
| A few variables (counters, pointers) | `O(1)` |
| A hash map/set that can hold up to `n` items | `O(n)` |
| A new array that's a copy of the input | `O(n)` |
| A 2D grid of size n×n (e.g. DP table) | `O(n²)` |
| Recursion that goes `n` calls deep | `O(n)` (the call stack!) |

### The classic trade-off: time vs. space
Two Sum is the perfect example.
- **Brute force:** check every pair with a nested loop → `O(n²)` time, `O(1)` space.
- **Hash map:** store seen numbers, look up the complement → `O(n)` time, but `O(n)` space.

You *spent memory to buy speed*. Being able to name this trade-off out loud is exactly what a strong intern does.

---

## 5. How memory actually works (the part tutorials skip)

Understanding *where* memory goes makes space complexity click.

### Stack vs. Heap
- **The call stack** holds function calls and their local variables. Every time you call a function, a "frame" is pushed on; when it returns, the frame pops off. **Recursion uses stack space** — a function that recurses `n` deep holds `n` frames at once → `O(n)` space, even if it allocates no arrays. Too deep → *stack overflow*.
- **The heap** holds bigger, longer-lived data — the arrays, objects, dictionaries, and lists you create. When you do `new Array(n)` or `[0] * n`, that memory comes from the heap.

### Values vs. references (why linked lists & trees are cheap to rearrange)
In both Python and TypeScript, small primitives (numbers, booleans) are simple, but **objects, arrays, lists, and class instances are handled by *reference*** — a variable holds a *pointer* to the data, not the data itself.

- Reversing a linked list by re-pointing `next` links moves **pointers**, not the node values → `O(1)` extra space.
- `b = a` for a list does **not** copy the list — both names point to the *same* list in memory. Mutating through `b` changes what `a` sees. (This trips up every beginner once.)

### Language-specific notes
- **Python:** `list`, `dict`, and `set` are heap objects. A `dict`/`set` gives `O(1)` average lookups but stores hash tables that cost real memory. Slicing (`nums[1:]`) **creates a copy** → hidden `O(n)` space.
- **TypeScript/JS:** `Array`, `Map`, `Set`, and objects live on the heap and are passed by reference. `Map`/`Set` are your `O(1)`-lookup tools — prefer them over plain objects for keyed lookups.

---

## 6. How I fill in the complexity lines on every problem

Each stub file ends with lines like:
```
Time complexity:  O(?)   # explain WHY in one sentence
Space complexity: O(?)   # what did you allocate, and how big can it get?
```

Fill them in like this (example for the hash-map Two Sum):
```
Time complexity:  O(n)   — one pass over nums; each hash lookup/insert is O(1) average.
Space complexity: O(n)   — the hash map can hold up to n entries in the worst case.
```

If you can write those two sentences from memory, you understand the problem. That's the bar.

---

### 📌 One-line summary
> **Time** = how many steps as `n` grows. **Space** = how much extra memory as `n` grows (including the recursion call stack). Always know both, and always be ready to name the trade-off between them.
