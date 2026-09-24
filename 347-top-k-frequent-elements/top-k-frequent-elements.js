/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const uniqueArray = [...new Set(nums)];
    let count = new Array(uniqueArray.length).fill(0);

    for(let i = 0; i < nums.length; i++){
        let index = uniqueArray.indexOf(nums[i]);
        count[index]++;
    }

    let answer = [];

    for(let i = 0; i < k; i++){
        let maxIndex = 0;

        for(let j = 1; j < count.length; j++){
            if(count[j] > count[maxIndex]){
                maxIndex = j;
            }
        }

        answer.push(uniqueArray[maxIndex]);
        count[maxIndex] = -1;
    }

    return answer;
};