/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let current = intervals[0];
    let ans = [];

    for(let i=0; i<intervals.length-1; i++){

        if(current[1] >= intervals[i+1][0]){
            current = [current[0], Math.max(current[1], intervals[i+1][1])];
        }else{
            ans.push(current);
            current = intervals[i+1];
        }
    }

    ans.push(current);

    return ans;
};