/**
 * Reverse Linked List
 * ===================================================================
 * Read README.md first. Reverse a singly linked list and return the
 * new head. The ListNode class and test helpers are provided — you
 * only write reverseList().
 *
 * TODO(you): Restate the problem in ONE sentence:
 *   -
 *
 * TODO(you): Approach — what three pointers (prev / current / nextTemp)
 *            do you juggle, and in what order?
 *   -
 *
 * --- Fill these in AFTER you solve it -----------------------------
 * Time complexity:  O(?)   //
 * Space complexity: O(?)   // iterative version — creating new nodes?
 */

import assert from "node:assert";

// A single node in a singly linked list. (Provided — don't change.)
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  // -------------------------------------------------------------------
  // TODO(you): Step 1 — start `prev = null`, `current = head`.
  // TODO(you): Step 2 — while current is not null:
  //                       (a) save nextTemp = current.next
  //                       (b) point current.next back to prev
  //                       (c) advance prev = current, current = nextTemp
  // TODO(you): Step 3 — the new head is `prev`. Return it.
  // -------------------------------------------------------------------
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
    while (current != null) {
      let nextUp = current.next;
      current.next = prev;
      prev = current;
      current = nextUp;
    }
  return prev
}

// ---- Test helpers (provided — don't change) -------------------------
function buildList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  for (let i = values.length - 1; i >= 0; i--) {
    head = new ListNode(values[i]!, head);
  }
  return head;
}

function toArray(head: ListNode | null): number[] {
  const out: number[] = [];
  while (head !== null) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

// ---- Self-check tests (do NOT edit) ---------------------------------
// Run:  npx tsx reverseLinkedList.ts
assert.deepStrictEqual(toArray(reverseList(buildList([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(toArray(reverseList(buildList([1, 2]))), [2, 1]);
assert.deepStrictEqual(toArray(reverseList(buildList([]))), []);
assert.deepStrictEqual(toArray(reverseList(buildList([7]))), [7]);
console.log("✅ All tests passed!");
