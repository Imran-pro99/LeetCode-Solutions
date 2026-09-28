/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length < 3){
        return -1;
    }

    let max = -Infinity;
    let min = Infinity;

    for(let num of nums){
        if(num > max){
            max = num;
        }
        if(num < min){
            min = num;
        }
    }

    for(let num of nums){
        if(num !== max && num !== min){
            return num;
        }
    }
};