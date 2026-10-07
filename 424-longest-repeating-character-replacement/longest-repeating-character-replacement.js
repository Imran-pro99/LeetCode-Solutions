/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    s = s.split('');
    let left = 0;
    let right = 0;
    let freq = {};
    let maxFreq = 0;
    let ans = 0;

    while(right < s.length){
        freq[s[right]] = (freq[s[right]] || 0) + 1;
        if(freq[s[right]] > maxFreq){
            maxFreq = freq[s[right]];
        }

        while(right - left + 1 - maxFreq > k){
            freq[s[left]]--;
            left++;
        }

        ans = Math.max(ans, right - left + 1);
        right++;
    }

    return ans;
};