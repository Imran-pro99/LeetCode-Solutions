/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    for(let i=0; i<nums.length; i++){
        nums[i] = nums[i] * nums[i];
    }

    nums = nums.sort((a, b) => b - a);

    let left = 0;
    let right = nums.length - 1;
    let score = 0;
    let add = true;

    while(left <= right){
        if(add){
            score += nums[left];
            left++;
        }
        else{
            score -= nums[right];
            right--;
        }
        add = !add;
    }

    return score;
};