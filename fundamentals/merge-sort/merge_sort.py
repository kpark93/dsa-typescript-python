"""
Merge Sort
=====================================================================
Read README.md first. Sort `nums` ascending using divide & conquer.
Return a new sorted list. No built-in sort.

TODO(you): Restate the 3 steps of merge sort (divide / sort / merge):
    -

TODO(you): Approach (write this BEFORE implementing):
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   # how many levels of splitting? work per level?
Space complexity: O(?)   # new arrays from merging + recursion stack depth
"""
from typing import List


def merge_sort(nums: List[int]) -> List[int]:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — BASE CASE: a list of length 0 or 1 is already
    #                     sorted. Return it.
    # TODO(you): Step 2 — DIVIDE: find the middle, split into left/right.
    # TODO(you): Step 3 — CONQUER: recursively merge_sort each half.
    # TODO(you): Step 4 — COMBINE: merge the two sorted halves (use the
    #                     helper below, or write the merge inline).
    # -----------------------------------------------------------------
    pass  # ← replace with your solution


def merge(left: List[int], right: List[int]) -> List[int]:
    # -----------------------------------------------------------------
    # TODO(you): Walk two pointers through `left` and `right`. Each step,
    #            append the smaller front value to the result. When one
    #            side runs out, append whatever remains of the other.
    # -----------------------------------------------------------------
    pass  # ← replace with your solution


# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 merge_sort.py
if __name__ == "__main__":
    assert merge_sort([5, 2, 4, 6, 1, 3]) == [1, 2, 3, 4, 5, 6]
    assert merge_sort([]) == []
    assert merge_sort([42]) == [42]
    assert merge_sort([3, 3, 1, 2, 1]) == [1, 1, 2, 3, 3]
    assert merge_sort([9, 8, 7, 6, 5, 4]) == [4, 5, 6, 7, 8, 9]
    assert merge_sort([-2, 5, 0, -7, 3]) == [-7, -2, 0, 3, 5]
    print("✅ All tests passed!")
