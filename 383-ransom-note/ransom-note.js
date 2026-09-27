/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineArr = magazine.split("");
    let ransomNoteArr = ransomNote.split("");
    let count = {};

    for(let n of magazineArr){
        if(count[n]){
            count[n]++;
        }else{
            count[n] = 1;
        }
    }

    for(let n of ransomNoteArr){
        if(!count[n]){
            return false;
        }
        count[n]--;
    }

    return true;
};