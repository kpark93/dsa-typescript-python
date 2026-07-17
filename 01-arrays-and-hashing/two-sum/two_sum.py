"""
Two Sum
=====================================================================
Read README.md first. Return the indices of the two numbers in `nums`
that add up to `target`. Exactly one answer exists.

TODO(you): Restate the problem in ONE sentence:
    -

TODO(you): Approach — for each number x, what value do you need, and
           how do you check if you've already seen it in O(1)?
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   #
Space complexity: O(?)   #
"""
from typing import List


def two_sum(nums: List[int], target: int) -> List[int]:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — keep a map of {value_seen: its_index}.
    # TODO(you): Step 2 — for each number, compute the complement it needs.
    # TODO(you): Step 3 — if the complement is already in the map, you're done.
    # TODO(you): Step 4 — otherwise record the current number and move on.
    # -----------------------------------------------------------------
    pass  # ← replace with your solution


# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 two_sum.py
# (order of the two indices doesn't matter, so we compare sorted)
if __name__ == "__main__":
    assert sorted(two_sum([2, 7, 11, 15], 9)) == [0, 1]
    assert sorted(two_sum([3, 2, 4], 6)) == [1, 2]
    assert sorted(two_sum([3, 3], 6)) == [0, 1]
    assert sorted(two_sum([-1, -2, -3, -4, -5], -8)) == [2, 4]
    print("✅ All tests passed!")
