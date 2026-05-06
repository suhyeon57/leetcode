/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    console.log(s.length);
    let charSet = new Set();
    let left = 0;
    let maxlength = 0;
    
    for(let right = 0; right < s.length ; right ++){
        while(charSet.has(s[right])){ //charSet에서 중복이 사라질 때까지 반복
            charSet.delete(s[left]);
            left++;
        };

        charSet.add(s[right]);
        maxlength = Math.max(maxlength, right - left + 1);
    }

    return maxlength;
};