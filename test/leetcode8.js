/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trimStart();
    if (!s || s.length === 0) {
        return 0;
    }
    let stringVerOfCurrentNumber = '';
    let numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let specialNum = 0;
    for (let i = 0; i < s.length; i++) {
        const currentStr = s.charAt(i);
        if (i === 0 && ['+', '-'].includes(currentStr)) {
            if (currentStr === '-') {
                stringVerOfCurrentNumber += currentStr;
            }
        } else if (currentStr === '0' && stringVerOfCurrentNumber !== '-') {
            stringVerOfCurrentNumber += currentStr;
        } else if (!numArr.includes(currentStr)) {
            break;
        } else {
            stringVerOfCurrentNumber += currentStr
        }
    }
    if (stringVerOfCurrentNumber === '' || stringVerOfCurrentNumber === '-') {
        return 0;
    } else {
        let finalNum = Number(stringVerOfCurrentNumber).valueOf();
        if (finalNum > Math.pow(2, 31) - 1) {
            return Math.pow(2, 31) - 1;
        } else if (finalNum < -Math.pow(2, 31)) {
            return -Math.pow(2, 31);
        } else {
            return Number(stringVerOfCurrentNumber).valueOf();
        }
    }
};