"""
Valid Palindrome
=====================================================================
Read README.md first. Return True if `s` reads the same forward and
backward after lowercasing and ignoring non-alphanumeric characters.

TODO(you): Restate the problem in ONE sentence:
    -

TODO(you): Approach — try the TWO-POINTER version for O(1) space:
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   #
Space complexity: O(?)   # did you build a cleaned copy, or compare in place?
"""
import string

def is_palindrome(s: str) -> bool:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — start a `left` pointer at 0 and `right` at the end.
    # TODO(you): Step 2 — move inward; skip characters that aren't alphanumeric.
    #                     (Python: str.isalnum() and str.lower() will help.)
    # TODO(you): Step 3 — compare the two characters (case-insensitively).
    #                     If they differ, it's not a palindrome.
    # TODO(you): Step 4 — if the pointers cross without a mismatch, return True.
    # -----------------------------------------------------------------
    s = s.translate(str.maketrans('', '', string.punctuation + string.whitespace)).lower()
    left = 0
    right = len(s) - 1
    while left < right:
        if s[left] == s[right]:
            left += 1
            right -= 1
        else:
            return False
    return True

        

# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 valid_palindrome.py
if __name__ == "__main__":
    assert is_palindrome("A man, a plan, a canal: Panama") is True
    assert is_palindrome("race a car") is False
    assert is_palindrome(" ") is True
    assert is_palindrome("0P") is False
    assert is_palindrome("ab_a") is True
    print("✅ All tests passed!")
