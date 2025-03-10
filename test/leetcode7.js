/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let symbol = x < 0 ? '-' : '';
    let xString = Math.abs(x).toString();
    if (xString.length === 0 || xString.length === 1) {
        return x;
    }
    let arr = xString.split('');
    let rightPointer = arr.length - 1;
    let middlePointer = Math.floor(arr.length / 2)
    for (let i = 0; i < middlePointer; i++) {
        let temp = arr[i];
        arr[i] = arr[rightPointer];
        arr[rightPointer] = temp;
        rightPointer--;
    }
    let finalNum = +(symbol + arr.join(''));
    if (finalNum < Math.pow(-2, 31) || finalNum > Math.pow(2, 31) - 1) {
        return 0;
    } else {
        return finalNum;
    }
};

console.log(reverse(1534236469));