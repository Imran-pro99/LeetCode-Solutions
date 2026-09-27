/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let ans = [];
    let count = new Array(101).fill(0);

    for(let num of nums){
            count[num]++;
        }
    
    while(nums.length > 0){
        for(let i=1; i<101; i++){
            if(count[i] > 0){
                ans.push(i);
                count[i]--;
                nums.pop();
            }
        }
    }
    return ans;
};