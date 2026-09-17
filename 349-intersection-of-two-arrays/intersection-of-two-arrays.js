/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let uniqueNums1 = [...new Set(nums1)];
    let uniqueNums2 = [...new Set(nums2)];
    let result = [];

        for(let i=0; i<uniqueNums1.length; i++){
            for(let j=0; j<uniqueNums2.length; j++){
                if(uniqueNums1[i] === uniqueNums2[j]){
                    result.push(uniqueNums1[i]);
                }
            }
        }
    return result;
};