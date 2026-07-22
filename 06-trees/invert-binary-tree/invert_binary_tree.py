"""
Invert Binary Tree
=====================================================================
Read README.md first. Mirror the tree left-to-right and return root.
The TreeNode class and test helpers are provided — you only write
invert_tree().

TODO(you): Restate the problem in ONE sentence:
    -

TODO(you): Approach — what's the base case, and what do you do at each node?
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   #
Space complexity: O(?)   # think about the recursion depth (tree height)
"""
from collections import deque
from typing import List, Optional


class TreeNode:
    """A binary tree node. (Provided — don't change.)"""
    def __init__(self, val: int = 0,
                 left: "Optional[TreeNode]" = None,
                 right: "Optional[TreeNode]" = None):
        self.val = val
        self.left = left
        self.right = right


def invert_tree(root: Optional[TreeNode]) -> Optional[TreeNode]:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — BASE CASE: an empty node has nothing to invert.
    # TODO(you): Step 2 — swap this node's left and right children.
    # TODO(you): Step 3 — recurse: invert each subtree too.
    # TODO(you): Step 4 — return root.
    # -----------------------------------------------------------------
    if root is None:
        return None
    root.left, root.right = root.right, root.left
    invert_tree(root.left)
    invert_tree(root.right)
    return root


# ---- Test helpers (provided — don't change) ------------------------
def build_tree(values: List[Optional[int]]) -> Optional[TreeNode]:
    """Build a tree from a level-order list (None = missing child)."""
    if not values:
        return None
    root = TreeNode(values[0])  # type: ignore[arg-type]
    queue = deque([root])
    i = 1
    while queue and i < len(values):
        node = queue.popleft()
        if i < len(values) and values[i] is not None:
            node.left = TreeNode(values[i])  # type: ignore[arg-type]
            queue.append(node.left)
        i += 1
        if i < len(values) and values[i] is not None:
            node.right = TreeNode(values[i])  # type: ignore[arg-type]
            queue.append(node.right)
        i += 1
    return root


def to_level_order(root: Optional[TreeNode]) -> List[Optional[int]]:
    """Read a tree back into a level-order list (trailing None trimmed)."""
    if root is None:
        return []
    out: List[Optional[int]] = []
    queue = deque([root])
    while queue:
        node = queue.popleft()
        if node is None:
            out.append(None)
            continue
        out.append(node.val)
        queue.append(node.left)
        queue.append(node.right)
    while out and out[-1] is None:
        out.pop()
    return out


# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 invert_binary_tree.py
if __name__ == "__main__":
    assert to_level_order(invert_tree(build_tree([4, 2, 7, 1, 3, 6, 9]))) == [4, 7, 2, 9, 6, 3, 1]
    assert to_level_order(invert_tree(build_tree([2, 1, 3]))) == [2, 3, 1]
    assert to_level_order(invert_tree(build_tree([]))) == []
    assert to_level_order(invert_tree(build_tree([1]))) == [1]
    print("✅ All tests passed!")
