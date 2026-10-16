/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    s = s.split('');
    let counter = {};

    for(let n of s){
        if(counter[n]){
            counter[n]++;
        }
        else{
            counter[n] = 1;
        }
    }

    for(let i=0; i<s.length; i++){
        if(counter[s[i]] === 1){
            return i;
        }
    }

    return -1;
};