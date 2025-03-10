/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let pointerLeft = 0;
    let pointerRight = 0;
    let maxLength = 0;

    if (s.length <= 1) {
        return s;
    }

    for (let i = 0; i < s.length; i++) {
        let left = i > 0 ? i - 1 : 0;
        let right = i + 1 < s.length ? i + 1 : s.length - 1;
        while (left >= 0 && s[i] === s[left]) {
            left--;
        }
        while (right < s.length && s[i] === s[right]) {
            right++;
        }
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        if (maxLength < right - left - 1) {
            maxLength = right - left - 1;
            pointerLeft = left + 1;
            pointerRight = right - 1;
        }
    }
    return s.substring(pointerLeft, pointerRight + 1);
};
console.log(longestPalindrome("babad"))