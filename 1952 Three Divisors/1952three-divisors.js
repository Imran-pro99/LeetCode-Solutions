/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count = 0;
    for(let i=1; i<n+1; i++){
        if(n%i == 0){
            count += 1;
        }
    }
    if(count === 3){
        return true;
    }
    else {
        return false;
    }
};