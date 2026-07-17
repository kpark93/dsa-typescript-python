/**
 * Merge Sort
 * ===================================================================
 * Read README.md first. Sort `nums` ascending using divide & conquer.
 * Return a new sorted array. No built-in sort.
 *
 * TODO(you): Restate the 3 steps of merge sort (divide / sort / merge):
 *   -
 *
 * TODO(you): Approach (write this BEFORE implementing):
 *   -
 *
 * --- Fill these in AFTER you solve it -----------------------------
 * Time complexity:  O(?)   // how many levels of splitting? work per level?
 * Space complexity: O(?)   // new arrays from merging + recursion stack depth
 */

import assert from "node:assert";

export function mergeSort(nums: number[]): number[] {
  // -------------------------------------------------------------------
  // TODO(you): Step 1 — BASE CASE: length 0 or 1 is already sorted.
  // TODO(you): Step 2 — DIVIDE: find the middle, split into left/right.
  // TODO(you): Step 3 — CONQUER: recursively mergeSort each half.
  // TODO(you): Step 4 — COMBINE: merge the two sorted halves (helper below).
  // -------------------------------------------------------------------
  return nums; // ← replace with your solution
}

function merge(left: number[], right: number[]): number[] {
  // -------------------------------------------------------------------
  // TODO(you): Walk two pointers through `left` and `right`. Each step,
  //            push the smaller front value to the result. When one side
  //            runs out, append whatever remains of the other.
  // -------------------------------------------------------------------
  return []; // ← replace with your solution
}

// ---- Self-check tests (do NOT edit) ---------------------------------
// Run:  npx tsx mergeSort.ts
assert.deepStrictEqual(mergeSort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(mergeSort([]), []);
assert.deepStrictEqual(mergeSort([42]), [42]);
assert.deepStrictEqual(mergeSort([3, 3, 1, 2, 1]), [1, 1, 2, 3, 3]);
assert.deepStrictEqual(mergeSort([9, 8, 7, 6, 5, 4]), [4, 5, 6, 7, 8, 9]);
assert.deepStrictEqual(mergeSort([-2, 5, 0, -7, 3]), [-7, -2, 0, 3, 5]);
console.log("✅ All tests passed!");
