/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let clean = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let result = clean.split("").reverse().join("");

    return clean === result;
};