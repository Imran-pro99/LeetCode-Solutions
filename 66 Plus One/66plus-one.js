/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = BigInt(digits.join(""));
    result += 1n;

    return Array.from(String(result), Number);
};
