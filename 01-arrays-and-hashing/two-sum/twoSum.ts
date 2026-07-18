/**
 * Two Sum
 * ===================================================================
 * Read README.md first. Return the indices of the two numbers in
 * `nums` that add up to `target`. Exactly one answer exists.
 *
 * TODO(you): Restate the problem in ONE sentence:
 *   -
 *
 * TODO(you): Approach — for each number x, what value do you need, and
 *            how do you check if you've already seen it in O(1)?
 *   -  (hint: a `Map<number, number>` of value -> index)
 *
 * --- Fill these in AFTER you solve it -----------------------------
 * Time complexity:  O(?)   //
 * Space complexity: O(?)   //
 */

import assert from "node:assert";

export function twoSum(nums: number[], target: number): number[] {
  // -------------------------------------------------------------------
  // TODO(you): Step 1 — keep a Map of value_seen -> its_index.
  // TODO(you): Step 2 — for each number, compute the complement it needs.
  // TODO(you): Step 3 — if the complement is already in the map, you're done.
  // TODO(you): Step 4 — otherwise record the current number and move on.
  // -------------------------------------------------------------------
  let seen_num: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === undefined) continue;

    const complement = target - num;
    if (seen_num.has(complement)) {
      return [seen_num.get(complement)!, i];
    }
    seen_num.set(num, i);
  }
  return [];
}

// ---- Self-check tests (do NOT edit) ---------------------------------
// Run:  npx tsx twoSum.ts
// (order of the two indices doesn't matter, so we compare sorted copies)
const sorted = (a: number[]) => [...a].sort((x, y) => x - y);
assert.deepStrictEqual(sorted(twoSum([2, 7, 11, 15], 9)), [0, 1]);
assert.deepStrictEqual(sorted(twoSum([3, 2, 4], 6)), [1, 2]);
assert.deepStrictEqual(sorted(twoSum([3, 3], 6)), [0, 1]);
assert.deepStrictEqual(sorted(twoSum([-1, -2, -3, -4, -5], -8)), [2, 4]);
console.log("✅ All tests passed!");
