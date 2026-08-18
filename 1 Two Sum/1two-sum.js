/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n;
    let m;
    for(let i = 0; i < nums.length; i++){
        n = target - nums[i];
        m = nums.indexOf(n);

        if(m !== -1 && m !== i){
            return [i,m];
        }
    }
};