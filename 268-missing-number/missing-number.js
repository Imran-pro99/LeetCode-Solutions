/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = n * (n + 1) / 2;
    let actualSum = 0;

    for(let num of nums){
        actualSum += num;
    }

    return expectedSum - actualSum;
};