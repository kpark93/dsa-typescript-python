/**
 * Best Time to Buy and Sell Stock
 * ===================================================================
 * Read README.md first. Return the max profit from buying on one day
 * and selling on a LATER day. If no profit is possible, return 0.
 *
 * TODO(you): Restate the problem in ONE sentence:
 *   -
 *
 * TODO(you): Approach — what two running values do you carry as you scan?
 *   -
 *
 * --- Fill these in AFTER you solve it -----------------------------
 * Time complexity:  O(?)   //
 * Space complexity: O(?)   //
 */

import assert from "node:assert";

export function maxProfit(prices: number[]): number {
  // -------------------------------------------------------------------
  // TODO(you): Step 1 — track the lowest price seen so far.
  // TODO(you): Step 2 — track the best profit found so far.
  // TODO(you): Step 3 — for each price: update best profit if selling
  //                     today beats it, then update the min price.
  // TODO(you): Step 4 — return the best profit (0 if it never went positive).
  // -------------------------------------------------------------------
  return 0; // ← replace with your solution
}

// ---- Self-check tests (do NOT edit) ---------------------------------
// Run:  npx tsx bestTimeToBuyAndSellStock.ts
assert.strictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.strictEqual(maxProfit([7, 6, 4, 3, 1]), 0);
assert.strictEqual(maxProfit([1]), 0);
assert.strictEqual(maxProfit([2, 4, 1]), 2);
assert.strictEqual(maxProfit([3, 2, 6, 5, 0, 3]), 4);
console.log("✅ All tests passed!");
