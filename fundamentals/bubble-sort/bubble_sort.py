"""
Bubble Sort
=====================================================================
Read README.md first. Sort `nums` ascending WITHOUT the built-in sort,
using the bubble-sort technique. Return the sorted list.

TODO(you): Restate how bubble sort works in ONE sentence:
    -

TODO(you): Approach (write this BEFORE implementing):
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   # think about the two nested loops
Space complexity: O(?)   # are you making a new array, or sorting in place?
"""
from typing import List


def bubble_sort(nums: List[int]) -> List[int]:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — outer loop: one iteration per "pass".
    # TODO(you): Step 2 — inner loop: compare each adjacent pair and
    #                     swap them if they're out of order.
    # TODO(you): Step 3 — (optional) stop early if a pass made no swaps.
    # TODO(you): Step 4 — return the sorted list.
    # -----------------------------------------------------------------
    pass  # ← replace with your solution


# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 bubble_sort.py
if __name__ == "__main__":
    assert bubble_sort([5, 1, 4, 2, 8]) == [1, 2, 4, 5, 8]
    assert bubble_sort([]) == []
    assert bubble_sort([1]) == [1]
    assert bubble_sort([3, 3, 1, 2, 1]) == [1, 1, 2, 3, 3]
    assert bubble_sort([9, 8, 7, 6, 5]) == [5, 6, 7, 8, 9]
    assert bubble_sort([-2, 5, 0, -7, 3]) == [-7, -2, 0, 3, 5]
    print("✅ All tests passed!")
