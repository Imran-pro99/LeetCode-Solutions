/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    s = s.split('');
    let open = 0;
    let arr = [];
    let j = 0;
    arr[j] = [];

    for(let i=0; i<s.length; i++){
        if(s[i] === "("){
            open++;
        }else{
            open--;
        }

        arr[j].push(s[i]);

        if(open === 0){
            j++;
            arr[j] = [];
        }
    }

    let ans = [];

    for(let i=0; i<arr.length; i++){
        if(arr.length > 0){
            arr[i] = arr[i].slice(1, -1);
            ans += arr[i].join('');
        }
    }

    return ans;
};