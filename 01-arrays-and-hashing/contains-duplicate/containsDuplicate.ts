/**
 * Contains Duplicate
 * ===================================================================
 * Read README.md first. Return true if any value in `nums` appears at
 * least twice, else false.
 *
 * TODO(you): Restate the problem in ONE sentence:
 *   -
 *
 * TODO(you): Approach — which structure answers "seen this before?" in O(1)?
 *   -  (hint: TypeScript's built-in `Set`)
 *
 * --- Fill these in AFTER you solve it -----------------------------
 * Time complexity:  O(?)   //
 * Space complexity: O(?)   //
 */

import assert from "node:assert";

export function containsDuplicate(nums: number[]): boolean {
  // -------------------------------------------------------------------
  // TODO(you): Step 1 — track the values you've already seen.
  // TODO(you): Step 2 — as you scan, if you meet one you've seen, return true.
  // TODO(you): Step 3 — if you finish the scan, there were no duplicates.
  // -------------------------------------------------------------------
  return false; // ← replace with your solution
}

// ---- Self-check tests (do NOT edit) ---------------------------------
// Run:  npx tsx containsDuplicate.ts
assert.strictEqual(containsDuplicate([1, 2, 3, 1]), true);
assert.strictEqual(containsDuplicate([1, 2, 3, 4]), false);
assert.strictEqual(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
assert.strictEqual(containsDuplicate([7]), false);
assert.strictEqual(containsDuplicate([-1, -2, -3, -1]), true);
console.log("✅ All tests passed!");
