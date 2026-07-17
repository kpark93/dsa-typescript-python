/**
 * Two Sum II — Input Array Is Sorted
 * ===================================================================
 * Read README.md first. `numbers` is SORTED ascending. Return the
 * 1-BASED indices [index1, index2] of the two values that sum to
 * target. Must use O(1) extra space.
 *
 * TODO(you): Restate the problem in ONE sentence:
 *   -
 *
 * TODO(you): Approach — how does "sorted" let you avoid a hash map?
 *   -
 *
 * --- Fill these in AFTER you solve it -----------------------------
 * Time complexity:  O(?)   //
 * Space complexity: O(?)   // remember: no hash map allowed here
 */

import assert from "node:assert";

export function twoSumSorted(numbers: number[], target: number): number[] {
  // -------------------------------------------------------------------
  // TODO(you): Step 1 — pointers at both ends: left = 0, right = last index.
  // TODO(you): Step 2 — look at the sum of the two ends.
  //                     too big   -> move `right` inward (smaller values)
  //                     too small -> move `left`  inward (larger values)
  // TODO(you): Step 3 — when the sum matches, return the 1-BASED indices.
  // -------------------------------------------------------------------
  return []; // ← replace with your solution
}

// ---- Self-check tests (do NOT edit) ---------------------------------
// Run:  npx tsx twoSumII.ts
assert.deepStrictEqual(twoSumSorted([2, 7, 11, 15], 9), [1, 2]);
assert.deepStrictEqual(twoSumSorted([2, 3, 4], 6), [1, 3]);
assert.deepStrictEqual(twoSumSorted([-1, 0], -1), [1, 2]);
assert.deepStrictEqual(twoSumSorted([1, 2, 3, 4, 4, 9, 56, 90], 8), [4, 5]);
console.log("✅ All tests passed!");
