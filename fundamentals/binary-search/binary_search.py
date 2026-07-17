"""
Binary Search
=====================================================================
Read README.md first. Return the index of `target` in the SORTED list
`nums`, or -1 if it isn't there. Must run in O(log n).

TODO(you): Restate the problem in ONE sentence:
    -

TODO(you): Approach (write this BEFORE implementing):
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   # why can you halve the work each step?
Space complexity: O(?)   # how many extra variables do you keep?
"""
from typing import List


def binary_search(nums: List[int], target: int) -> int:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — set up two boundaries: left = 0, right = last index.
    # TODO(you): Step 2 — loop while the range is still valid.
    # TODO(you):          find the middle, compare nums[mid] to target,
    #                     and shrink the range toward the correct half.
    # TODO(you): Step 3 — return the index when found, else -1.
    # -----------------------------------------------------------------
    pass  # ← replace with your solution


# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 binary_search.py
if __name__ == "__main__":
    assert binary_search([-1, 0, 3, 5, 9, 12], 9) == 4
    assert binary_search([-1, 0, 3, 5, 9, 12], 2) == -1
    assert binary_search([5], 5) == 0
    assert binary_search([5], -5) == -1
    assert binary_search([1, 2, 3, 4, 5, 6, 7, 8], 1) == 0
    assert binary_search([1, 2, 3, 4, 5, 6, 7, 8], 8) == 7
    print("✅ All tests passed!")
