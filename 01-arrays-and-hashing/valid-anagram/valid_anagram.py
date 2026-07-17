"""
Valid Anagram
=====================================================================
Read README.md first. Return True if `t` is an anagram of `s` (same
letters, same counts, rearranged), else False.

TODO(you): Restate the problem in ONE sentence:
    -

TODO(you): Approach — will you sort, or count letters? Why?
    -

--- Fill these in AFTER you solve it -------------------------------
Time complexity:  O(?)   #
Space complexity: O(?)   # hint: how many distinct lowercase letters exist?
"""


def is_anagram(s: str, t: str) -> bool:
    # -----------------------------------------------------------------
    # TODO(you): Step 1 — quick reject: unequal lengths can't be anagrams.
    # TODO(you): Step 2 — count each letter in s, then account for each
    #                     letter in t (or compare two counts).
    # TODO(you): Step 3 — they're anagrams iff every count matches.
    # -----------------------------------------------------------------
    pass  # ← replace with your solution


# ---- Self-check tests (do NOT edit) --------------------------------
# Run:  python3 valid_anagram.py
if __name__ == "__main__":
    assert is_anagram("anagram", "nagaram") is True
    assert is_anagram("rat", "car") is False
    assert is_anagram("a", "ab") is False
    assert is_anagram("", "") is True
    assert is_anagram("aacc", "ccac") is False
    print("✅ All tests passed!")
