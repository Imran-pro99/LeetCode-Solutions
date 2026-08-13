/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = 0;
    for(let i=0; i<nums.length; i++){
        result += nums[i];
        nums[i] = result;
    }
    return nums;
};