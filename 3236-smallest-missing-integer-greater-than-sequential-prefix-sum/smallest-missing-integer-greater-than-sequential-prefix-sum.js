/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let sum = nums[0];

    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[i-1] + 1){
            break;
        }
        sum += nums[i];
    }

    let seen = new Set(nums);

    while(seen.has(sum)){
        sum++;
    }

    return sum;
};