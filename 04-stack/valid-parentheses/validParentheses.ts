/**
 * Valid Parentheses
 * ===================================================================
 * Read README.md first. Return true if every bracket in `s` is closed
 * by the same type in the correct order, else false.
 *
 * TODO(you): Restate the problem in ONE sentence:
 *   -
 *
 * TODO(you): Approach — why is a stack (LIFO) the right tool here?
 *   -
 *
 * --- Fill these in AFTER you solve it -----------------------------
 * Time complexity:  O(?)   //
 * Space complexity: O(?)   // how big can the stack get?
 */

import assert from "node:assert";

export function isValid(s: string): boolean {
  // -------------------------------------------------------------------
  // TODO(you): Step 1 — a stack (use an array) to hold unclosed openers.
  //                     A Map of closer -> its matching opener may help.
  // TODO(you): Step 2 — for each char:
  //                       opener -> push it
  //                       closer -> the top of the stack must be its match;
  //                                 if the stack is empty or mismatched, fail.
  // TODO(you): Step 3 — valid only if the stack is empty at the end.
  // -------------------------------------------------------------------
  return false; // ← replace with your solution
}

// ---- Self-check tests (do NOT edit) ---------------------------------
// Run:  npx tsx validParentheses.ts
assert.strictEqual(isValid("()"), true);
assert.strictEqual(isValid("()[]{}"), true);
assert.strictEqual(isValid("(]"), false);
assert.strictEqual(isValid("([)]"), false);
assert.strictEqual(isValid("{[]}"), true);
assert.strictEqual(isValid("("), false);
assert.strictEqual(isValid("]"), false);
console.log("✅ All tests passed!");
