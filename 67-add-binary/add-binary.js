/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    ans = "";

    while(i >= 0 || j >= 0 || carry){
        let sum = carry;

        if(i >= 0) sum += Number(a[i--]);
        if(j >= 0) sum += Number(b[j--]);

        ans = (sum % 2) + ans;
        carry = Math.floor(sum / 2);
    }

    return ans || "0";
};