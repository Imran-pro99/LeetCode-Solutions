/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let arr = s.split('');
    let paren = "()";
    let stack = [];
    let i = 0;

    while(i < arr.length){
        stack.push(arr[i]);
        i++;

        let open = stack[stack.length-2];
        let close = stack[stack.length-1];
        let brackets = open + close;

        if(paren.includes(brackets)){
            stack.pop();
            stack.pop();
        }
    }

    return stack.length;
};