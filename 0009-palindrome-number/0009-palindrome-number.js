/**
 * @param {number} x
 * @return {boolean}
 */

 //number을 string으로 변경 후 뒤집어서 비교

var isPalindrome = function(x) {
    //console.log(typeof(x));
    let stX = x.toString();
    //console.log(typeof(stX));
    let udStX = stX.split("").reverse().join("");
    //console.log(udStX);
    if(x < 0){
        return false;
    }
    return stX === udStX;
};