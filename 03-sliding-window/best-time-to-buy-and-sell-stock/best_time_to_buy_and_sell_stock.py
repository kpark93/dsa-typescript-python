"""
Best Time to Buy and Sell Stock
=====================================================================
Read README.md first. Return the max profit from buying on one day and
selling on a LATER day. If no profit is possible, return 0.

TODO(you): Restate the problem in ONE sentence:
    -

TODO(you): Approach — what two running values do you carry as you scan?
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   #
Space complexity: O(?)   #
"""
from typing import List


def max_profit(prices: List[int]) -> int:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — track the lowest price seen so far.
    # TODO(you): Step 2 — track the best profit found so far.
    # TODO(you): Step 3 — for each price: update best profit if selling
    #                     today beats it, then update the min price.
    # TODO(you): Step 4 — return the best profit (0 if it never went positive).
    # -----------------------------------------------------------------
    pass  # ← replace with your solution


# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 best_time_to_buy_and_sell_stock.py
if __name__ == "__main__":
    assert max_profit([7, 1, 5, 3, 6, 4]) == 5
    assert max_profit([7, 6, 4, 3, 1]) == 0
    assert max_profit([1]) == 0
    assert max_profit([2, 4, 1]) == 2
    assert max_profit([3, 2, 6, 5, 0, 3]) == 4
    print("✅ All tests passed!")
