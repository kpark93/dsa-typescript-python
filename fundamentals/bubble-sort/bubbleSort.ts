/**
 * Bubble Sort
 * ===================================================================
 * Read README.md first. Sort `nums` ascending WITHOUT the built-in
 * sort, using the bubble-sort technique. Return the sorted array.
 *
 * TODO(you): Restate how bubble sort works in ONE sentence:
 *   -
 *
 * TODO(you): Approach (write this BEFORE implementing):
 *   -
 *
 * --- Fill these in AFTER you solve it -----------------------------
 * Time complexity:  O(?)   // think about the two nested loops
 * Space complexity: O(?)   // new array, or sorting in place?
 */

import assert from "node:assert";

export function bubbleSort(nums: number[]): number[] {
  // -------------------------------------------------------------------
  // TODO(you): Step 1 — outer loop: one iteration per "pass".
  // TODO(you): Step 2 — inner loop: compare each adjacent pair and
  //                     swap them if they're out of order.
  // TODO(you): Step 3 — (optional) stop early if a pass made no swaps.
  // TODO(you): Step 4 — return the sorted array.
  // -------------------------------------------------------------------
  return nums; // ← replace with your solution
}

// ---- Self-check tests (do NOT edit) ---------------------------------
// Run:  npx tsx bubbleSort.ts
assert.deepStrictEqual(bubbleSort([5, 1, 4, 2, 8]), [1, 2, 4, 5, 8]);
assert.deepStrictEqual(bubbleSort([]), []);
assert.deepStrictEqual(bubbleSort([1]), [1]);
assert.deepStrictEqual(bubbleSort([3, 3, 1, 2, 1]), [1, 1, 2, 3, 3]);
assert.deepStrictEqual(bubbleSort([9, 8, 7, 6, 5]), [5, 6, 7, 8, 9]);
assert.deepStrictEqual(bubbleSort([-2, 5, 0, -7, 3]), [-7, -2, 0, 3, 5]);
console.log("✅ All tests passed!");
