var lengthOfLongestSubstring = function(s) {
    let set = new Set();     // To store characters in current substring
    let left = 0;            // Left index of the current substring
    let maxLen = 0;          // Maximum length found

    for (let right = 0; right < s.length; right++) {
        // If character at right is already in the set,
        // move left pointer to shrink the window
        while (set.has(s[right])) {
            set.delete(s[left]); // remove from start
            left++;
        }

        set.add(s[right]); // Add new character
        maxLen = Math.max(maxLen, right - left + 1); // Update max length
    }

    return maxLen;
};
