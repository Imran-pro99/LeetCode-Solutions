/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let substring = s.trimEnd();
  let count = 0;
  for(let i = substring.length-1; i >= 0; i--){
    if(substring[i] === " "){
        break;
    }
    count++;
  }
  return count;
};