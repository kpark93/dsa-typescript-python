"""
Contains Duplicate
=====================================================================
Read README.md first. Return True if any value in `nums` appears at
least twice, else False.

TODO(you): Restate the problem in ONE sentence:
    -

TODO(you): Approach — which data structure answers "seen this before?"
           in O(1)?
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   #
Space complexity: O(?)   #
"""
from typing import List


def contains_duplicate(nums: List[int]) -> bool:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — track the values you've already seen.
    see_num = []
    # TODO(you): Step 2 — as you scan, if you meet one you've seen, return True.
    for num in nums:
        if num in see_num:
            return True
        see_num.append(num)
    # TODO(you): Step 3 — if you finish the scan, there were no duplicates.
    return False    
    # -----------------------------------------------------------------

# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 contains_duplicate.py
if __name__ == "__main__":
    assert contains_duplicate([1, 2, 3, 1]) is True
    assert contains_duplicate([1, 2, 3, 4]) is False
    assert contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) is True
    assert contains_duplicate([7]) is False
    assert contains_duplicate([-1, -2, -3, -1]) is True
    print("✅ All tests passed!")
