/**
 * Valid Palindrome
 * ===================================================================
 * Read README.md first. Return true if `s` reads the same forward and
 * backward after lowercasing and ignoring non-alphanumeric characters.
 *
 * TODO(you): Restate the problem in ONE sentence:
 *   -
 *
 * TODO(you): Approach — try the TWO-POINTER version for O(1) space:
 *   -
 *
 * --- Fill these in AFTER you solve it -----------------------------
 * Time complexity:  O(?)   //
 * Space complexity: O(?)   // cleaned copy, or compare in place?
 */

import assert from "node:assert";

export function isPalindrome(s: string): boolean {
  // -------------------------------------------------------------------
  // TODO(you): Step 1 — start a `left` pointer at 0 and `right` at the end.
  // TODO(you): Step 2 — move inward; skip characters that aren't alphanumeric.
  //                     (A small regex like /[a-z0-9]/i can test a char.)
  // TODO(you): Step 3 — compare the two characters (case-insensitively).
  //                     If they differ, it's not a palindrome.
  // TODO(you): Step 4 — if the pointers cross without a mismatch, return true.
  // -------------------------------------------------------------------
  return false; // ← replace with your solution
}

// ---- Self-check tests (do NOT edit) ---------------------------------
// Run:  npx tsx validPalindrome.ts
assert.strictEqual(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.strictEqual(isPalindrome("race a car"), false);
assert.strictEqual(isPalindrome(" "), true);
assert.strictEqual(isPalindrome("0P"), false);
assert.strictEqual(isPalindrome("ab_a"), true);
console.log("✅ All tests passed!");
