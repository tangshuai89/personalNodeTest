// function test1(num1, num2) {
//     let result = 0;
//     let tempTimesResult = num1;
//     let lastResult = '';
//     for (let i = 1; i <= num2; i++) {
//         lastResult += tempTimesResult.toString(); //12
//         result += +(lastResult.toString()); //1 + 12
//         console.log(lastResult, result, tempTimesResult)
//         tempTimesResult = tempTimesResult + 1;
//     }
//
//     return result;
// }
//
// console.log(test1(11, 6))
// function tenNumToSixteenNum(num) {
//     let middleNum = Math.floor(num / 16);
//     let emptyNum = num % 16;
//     const alphabetsArr = ['A', 'B', 'C', 'D', 'E', 'F'];
//     if (middleNum > 9) {
//         middleNum = alphabetsArr[middleNum - 10]
//     }
//     if (emptyNum > 9) {
//         emptyNum = alphabetsArr[emptyNum - 10];
//     }
//     return middleNum.toString() + emptyNum.toString()
// }
//
// function test2(sampleArr) {
//     let finalString = '';
//     if (sampleArr.length === 0) {
//         console.log('invalid IP');
//     } else {
//         for (let i = 0; i < sampleArr.length; i++) {
//             finalString += tenNumToSixteenNum(+sampleArr[i]).toString();
//         }
//     }
//     return parseInt(+('0x' + finalString), 10);
// }
// console.log(test2(['100', '101', '1', '5']))

function getMaxNumInfo(arr, index, baseNum) {
    let prevMaxNum = 0;
    let prevMaxIndex = 0;
    for (let i = index + 1; i < arr.length; i++) {
        if (arr[i] > baseNum) {
            prevMaxNum = arr[i];
            prevMaxIndex = i - index;
            break;
        }
    }
    return { prevMaxNum, prevMaxIndex };
}

function test3(sampleArr) {
    let result = '';
    for (let i = 0; i < sampleArr.length; i++) {
        let currentPrevMaxInfo = getMaxNumInfo(sampleArr, i, sampleArr[i])
        let currentPrevMaxNum = currentPrevMaxInfo.prevMaxNum ? currentPrevMaxInfo.prevMaxNum : 0;
        let currentPrevMaxIndex = currentPrevMaxInfo.prevMaxIndex ? currentPrevMaxInfo.prevMaxIndex : 0;
        console.log(currentPrevMaxInfo, sampleArr[i]);
        if (currentPrevMaxIndex === 0) {
            result += sampleArr[i] + ' ';
        } else {
            result += currentPrevMaxIndex * (currentPrevMaxNum - sampleArr[i]) + ' ';
        }
    }
    result = result.trimEnd();
    return result;
}
console.log(test3([2, 10, 3, 22, 9]));