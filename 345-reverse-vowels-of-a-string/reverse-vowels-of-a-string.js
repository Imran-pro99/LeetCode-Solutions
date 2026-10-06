/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split('');
    let vowels = "aeiouAEIOU";
    let result = [];
    let left = 0;
    let right = arr.length-1;

    while(left < right){
        if(!vowels.includes(arr[left])){
            left++;
        }else if(!vowels.includes(arr[right])){
            right--;
        }else{
            [arr[left], arr[right]] = [arr[right], arr[left]];

            left++;
            right--;
        }
    }

    return arr.join('');
};