/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0 || x>2**32-1){
      return false;
    }
    let rev = 0;
    let num = x;
    while(num > 0){
        let digit = num % 10;
        rev = rev*10 + digit;
        num = parseInt(num/10);
    }
    if(rev === x){
        return true;
    }
    else{
        return false;
    }
  };