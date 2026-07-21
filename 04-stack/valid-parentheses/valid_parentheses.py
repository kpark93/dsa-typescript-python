"""
Valid Parentheses
=====================================================================
Read README.md first. Return True if every bracket in `s` is closed by
the same type in the correct order, else False.

TODO(you): Restate the problem in ONE sentence:
    -

TODO(you): Approach — why is a stack (LIFO) the right tool here?
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   #
Space complexity: O(?)   # how big can the stack get?
"""


def is_valid(s: str) -> bool:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — a stack (use a list) to hold unclosed openers.
    #                     A map of closer -> its matching opener may help.
    # TODO(you): Step 2 — for each char:
    #                       opener -> push it
    #                       closer -> the top of the stack must be its match;
    #                                 if the stack is empty or mismatched, fail.
    # TODO(you): Step 3 — valid only if the stack is empty at the end.
    # -----------------------------------------------------------------
    stack = []
    for char in s:
        if char in "([{":
            stack.append(char)
        elif char in ")]}":
            if not stack:
                return False
            top = stack.pop()
            if char == ")" and top != "(":
                return False
            if char == "]" and top != "[":
                return False
            if char == "}" and top != "{":
                return False
    return not stack

# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 valid_parentheses.py
if __name__ == "__main__":
    assert is_valid("()") is True
    assert is_valid("()[]{}") is True
    assert is_valid("(]") is False
    assert is_valid("([)]") is False
    assert is_valid("{[]}") is True
    assert is_valid("(") is False
    assert is_valid("]") is False
    print("✅ All tests passed!")
