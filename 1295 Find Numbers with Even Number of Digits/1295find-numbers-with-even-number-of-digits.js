/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let ans;
    let count = 0;
    for(let i=0; i<nums.length; i++){
        ans  = `${nums[i]}`;
        if(ans.length % 2 === 0){
            count++;
        }
    }
    return count;
};