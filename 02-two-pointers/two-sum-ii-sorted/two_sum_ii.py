"""
Two Sum II — Input Array Is Sorted
=====================================================================
Read README.md first. `numbers` is SORTED ascending. Return the
1-BASED indices [index1, index2] of the two values that sum to target.
Must use O(1) extra space.

TODO(you): Restate the problem in ONE sentence:
    -

TODO(you): Approach — how does "sorted" let you avoid a hash map?
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   #
Space complexity: O(?)   # remember: no hash map allowed here
"""
from typing import List


def two_sum_sorted(numbers: List[int], target: int) -> List[int]:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — pointers at both ends: left = 0, right = last index.
    # TODO(you): Step 2 — look at the sum of the two ends.
    #                     too big  -> move `right` inward (smaller values)
    #                     too small-> move `left`  inward (larger values)
    # TODO(you): Step 3 — when the sum matches, return the 1-BASED indices.
    # -----------------------------------------------------------------
    left = 0
    right = len(numbers) - 1
    while left < right:
        if numbers[left] + numbers[right] == target:
            return [left + 1, right + 1]
        elif numbers[left] + numbers[right] < target:
            left += 1
        else:
            right -= 1

    return []
    

# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 two_sum_ii.py
if __name__ == "__main__":
    assert two_sum_sorted([2, 7, 11, 15], 9) == [1, 2]
    assert two_sum_sorted([2, 3, 4], 6) == [1, 3]
    assert two_sum_sorted([-1, 0], -1) == [1, 2]
    assert two_sum_sorted([1, 2, 3, 4, 4, 9, 56, 90], 8) == [4, 5]
    print("✅ All tests passed!")
