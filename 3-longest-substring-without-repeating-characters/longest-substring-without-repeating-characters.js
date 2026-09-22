/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let max  = 0;

    for(right = 0; right < s.length; right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        max = Math.max(max, right - left + 1);
    }

    return max;
};