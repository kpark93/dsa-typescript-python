"""
Reverse Linked List
=====================================================================
Read README.md first. Reverse a singly linked list and return the new
head. The ListNode class and test helpers are provided — you only
write reverse_list().

TODO(you): Restate the problem in ONE sentence:
    -

TODO(you): Approach — what three pointers (prev / current / next_temp)
           do you juggle, and in what order?
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   #
Space complexity: O(?)   # iterative version — are you creating new nodes?
"""
from typing import List, Optional


class ListNode:
    """A single node in a singly linked list. (Provided — don't change.)"""
    def __init__(self, val: int = 0, next: "Optional[ListNode]" = None):
        self.val = val
        self.next = next


def reverse_list(head: Optional[ListNode]) -> Optional[ListNode]:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — start `prev = None`, `current = head`.
    # TODO(you): Step 2 — while current is not None:
    #                       (a) save next_temp = current.next
    #                       (b) point current.next back to prev
    #                       (c) advance prev = current, current = next_temp
    # TODO(you): Step 3 — the new head is `prev`. Return it.
    # -----------------------------------------------------------------
    prev = None
    current = head
    while current is not None:
        next_up = current.next
        current.next = prev
        prev = current
        current = next_up
    return prev


# ---- Test helpers (provided — don't change) ------------------------
def build_list(values: List[int]) -> Optional[ListNode]:
    head: Optional[ListNode] = None
    for v in reversed(values):
        head = ListNode(v, head)
    return head


def to_list(head: Optional[ListNode]) -> List[int]:
    out: List[int] = []
    while head is not None:
        out.append(head.val)
        head = head.next
    return out


# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 reverse_linked_list.py
if __name__ == "__main__":
    assert to_list(reverse_list(build_list([1, 2, 3, 4, 5]))) == [5, 4, 3, 2, 1]
    assert to_list(reverse_list(build_list([1, 2]))) == [2, 1]
    assert to_list(reverse_list(build_list([]))) == []
    assert to_list(reverse_list(build_list([7]))) == [7]
    print("✅ All tests passed!")
