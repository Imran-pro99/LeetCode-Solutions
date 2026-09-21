/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let count = new Array(nums.length+1).fill(0);
    let answer = new Array(2).fill(0);

    for(let num of nums){
        count[num]++;
    }

    for(let i=1; i<=nums.length; i++){
        if(count[i] === 2) {
            answer[0] = i;
        }

        if(count[i] === 0) {
            answer[1] = i;
        }
    }

    return answer;
};