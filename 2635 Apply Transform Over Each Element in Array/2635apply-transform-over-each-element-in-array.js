/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let x = [];
    for(let i=0; i<arr.length; i++){
        x[i] = fn(arr[i],i);
    }
    return x;
};