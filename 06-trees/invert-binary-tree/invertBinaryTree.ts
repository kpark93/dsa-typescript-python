/**
 * Invert Binary Tree
 * ===================================================================
 * Read README.md first. Mirror the tree left-to-right and return root.
 * The TreeNode class and test helpers are provided — you only write
 * invertTree().
 *
 * TODO(you): Restate the problem in ONE sentence:
 *   -
 *
 * TODO(you): Approach — what's the base case, and what do you do at each node?
 *   -
 *
 * --- Fill these in AFTER you solve it -----------------------------
 * Time complexity:  O(?)   //
 * Space complexity: O(?)   // think about the recursion depth (tree height)
 */

import assert from "node:assert";

// A binary tree node. (Provided — don't change.)
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function invertTree(root: TreeNode | null): TreeNode | null {
  // -------------------------------------------------------------------
  // TODO(you): Step 1 — BASE CASE: an empty node has nothing to invert.
  // TODO(you): Step 2 — swap this node's left and right children.
  // TODO(you): Step 3 — recurse: invert each subtree too.
  // TODO(you): Step 4 — return root.
  // -------------------------------------------------------------------
  return null; // ← replace with your solution
}

// ---- Test helpers (provided — don't change) -------------------------
// Build a tree from a level-order list (null = missing child).
function buildTree(values: (number | null)[]): TreeNode | null {
  if (values.length === 0) return null;
  const root = new TreeNode(values[0] as number);
  const queue: TreeNode[] = [root];
  let i = 1;
  while (queue.length > 0 && i < values.length) {
    const node = queue.shift()!;
    const leftVal = values[i];
    if (i < values.length && leftVal !== null && leftVal !== undefined) {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }
    i++;
    const rightVal = values[i];
    if (i < values.length && rightVal !== null && rightVal !== undefined) {
      node.right = new TreeNode(rightVal);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

// Read a tree back into a level-order list (trailing nulls trimmed).
function toLevelOrder(root: TreeNode | null): number[] {
  if (root === null) return [];
  const out: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node === null) {
      out.push(null);
      continue;
    }
    out.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }
  while (out.length > 0 && out[out.length - 1] === null) out.pop();
  return out as number[];
}

// ---- Self-check tests (do NOT edit) ---------------------------------
// Run:  npx tsx invertBinaryTree.ts
assert.deepStrictEqual(toLevelOrder(invertTree(buildTree([4, 2, 7, 1, 3, 6, 9]))), [4, 7, 2, 9, 6, 3, 1]);
assert.deepStrictEqual(toLevelOrder(invertTree(buildTree([2, 1, 3]))), [2, 3, 1]);
assert.deepStrictEqual(toLevelOrder(invertTree(buildTree([]))), []);
assert.deepStrictEqual(toLevelOrder(invertTree(buildTree([1]))), [1]);
console.log("✅ All tests passed!");
