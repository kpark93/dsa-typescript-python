/**
 * Valid Anagram
 * ===================================================================
 * Read README.md first. Return true if `t` is an anagram of `s` (same
 * letters, same counts, rearranged), else false.
 *
 * TODO(you): Restate the problem in ONE sentence:
 *   -
 *
 * TODO(you): Approach — will you sort, or count letters? Why?
 *   -  (hint: a `Map<string, number>` of letter -> count)
 *
 * --- Fill these in AFTER you solve it -----------------------------
 * Time complexity:  O(?)   //
 * Space complexity: O(?)   // how many distinct lowercase letters exist?
 */

import assert from "node:assert";

export function isAnagram(s: string, t: string): boolean {
  // -------------------------------------------------------------------
  // TODO(you): Step 1 — quick reject: unequal lengths can't be anagrams.
  // TODO(you): Step 2 — count each letter in s, then account for each
  //                     letter in t (or compare two counts).
  // TODO(you): Step 3 — they're anagrams iff every count matches.
  // -------------------------------------------------------------------
  if (s.length !== t.length) return false;
  let count_s: Map<string, number> = new Map();
  let count_t: Map<string, number> = new Map();
  for (const char of s) {
    count_s.set(char, (count_s.get(char) ?? 0) + 1);
  }
  for (const char of t) {
    count_t.set(char, (count_t.get(char) ?? 0) + 1);
  }
  for (const [char, count] of count_s) {
    if (count_t.get(char) !== count) return false;
  }
  return true;
}

// ---- Self-check tests (do NOT edit) ---------------------------------
// Run:  npx tsx validAnagram.ts
assert.strictEqual(isAnagram("anagram", "nagaram"), true);
assert.strictEqual(isAnagram("rat", "car"), false);
assert.strictEqual(isAnagram("a", "ab"), false);
assert.strictEqual(isAnagram("", ""), true);
assert.strictEqual(isAnagram("aacc", "ccac"), false);
console.log("✅ All tests passed!");
