function dynamicCalculate(samples, maxValue, maxNum) {
    let dp = [];
    for (let i = 0; i < samples.length; i++) {
        dp.push([[0, 0, [0, i]]])
    }
    for (let j = 1; j < maxValue / 10; j++) {
        if (samples[0][0] < j) {
            dp[0][j] = [samples[0][0], samples[0][0] * samples[0][1], [0]];
        } else {
            dp[0][j] = [0, 0, [0]];
        }
    }
    console.log(dp);
    let finalScore = 0;
    for (let i = 1; i < samples.length; i++) {
        for (let j = 1; j < maxValue / 10; j++) {
            if (samples[i][0] / 10 + dp[i - 1][j][0] / 10 <= j) {
                if (dp[i - 1][j][2].length < maxNum && (samples[i][2] === 0 || (samples[i][2] > 0 && dp[i - 1][j][2].includes(samples[i][2] - 1)))) {
                    const currentMax = Math.max(dp[i - 1][j][0], dp[i - 1][j - samples[i][0] / 10][0] + samples[i][0]);
                    const currentMaxScore = Math.max(dp[i - 1][j][1], dp[i - 1][j - samples[i][0] / 10][1] + samples[i][0] * samples[i][1]);
                    dp[i][j] = [currentMax, currentMaxScore, dp[i - 1][j][2].concat([i])]
                    if (samples[i][2] > 0 && !dp[i][j][2].includes(samples[i][2] - 1)) {
                        dp[i][j][2].push(samples[i][2] - 1)
                    }
                    if (currentMaxScore > finalScore) {
                        finalScore = currentMaxScore;
                        console.log(finalScore, dp[i][j], i, j, samples.length)
                    }
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    // console.log(dp[1][780], finalScore);
    // function findAllIndexGroups(max, finalArray, maxNum, maxValue) {
    //     let finalScore = 0;
    //     let finalCount = 0;
    //     let i = 0;
    //     while (i < max) {
    //         finalArray.push([i]);
    //         let j = i + 1;
    //         while (j < max) {
    //             let k = 0;
    //             while (k < finalArray.length) {
    //                 if (finalArray[k].length < maxNum && finalArray[k][0] === i && (!finalArray[k].includes(j))) {
    //                     let m = 0;
    //                     let currentCount = 0;
    //                     while (m < finalArray[k].length) {
    //                         currentCount += samples[finalArray[k][m]][0];
    //                         m++
    //                     }
    //                     if (currentCount <= maxValue) {
    //                         finalArray.push(finalArray[k].concat([j]));
    //                     }
    //                 }
    //                 k++
    //             }
    //             j++
    //         }
    //         i++
    //     }
    //     return finalArray;
    // }
    // let finalIndexs = [];
    // finalIndexs = findAllIndexGroups(samples.length, finalIndexs, maxNum, maxValue);
    // let i = 0;
    // let finalScore = 0;
    // let finalCount = 0;
    // while (i < finalIndexs.length) {
    //     let k = 0;
    //     let matchedCount = 0;
    //     while (k < finalIndexs[i].length) {
    //         const currentIndex = finalIndexs[i][k];
    //         let currentSlaveIndex = samples[currentIndex][2] - 1;
    //         if (currentSlaveIndex === -1 || (currentSlaveIndex >= 0 && finalIndexs[i].includes(currentSlaveIndex))) {
    //             matchedCount = matchedCount + 1;
    //         }
    //         k++
    //     }
    //     if (matchedCount === finalIndexs[i].length) {
    //         let currentCount = 0;
    //         let currentScore = 0;
    //         let j = 0;
    //         while (j < finalIndexs[i].length) {
    //             currentCount += samples[finalIndexs[i][j]][0];
    //             currentScore += samples[finalIndexs[i][j]][0] * samples[finalIndexs[i][j]][1];
    //             j++;
    //         }
    //         if (currentCount <= maxValue && currentScore > finalScore) {
    //             finalCount = currentCount;
    //             finalScore = currentScore;
    //         }
    //     }
    //     i++;
    // }
    // console.log(finalIndexs);
    return finalScore
}
// 1500 7
// 500 1 0 500
// 400 4 0 1600 对
// 300 5 1 1500
// 400 5 1 2000
// 200 5 0 1000 对
// 500 4 0 2000 对
// 400 4 0 1600 对

// 1000 5
// 300 5 0 对
// 400 2 0
// 300 5 2
// 300 4 2
// 600 4 0 对

// 1 4 5 6 8
// 2000 10
// 500 1 0
// 400 4 0 对 1600
// 300 5 1
// 400 5 1
// 200 5 0 对 1000
// 500 4 5 对 2000
// 400 4 0 对 1600
// 320 2 0
// 410 3 0 对 1230
// 400 3 5

// 8000 20
// 100 3 0
// 400 5 0
// 300 5 0
// 1400 2 2
// 500 2 2
// 800 2 3
// 1400 5 0
// 300 5 0
// 1400 3 0
// 500 2 0
// 1800 4 0
// 440 5 10
// 1340 5 10
// 1430 3 0
// 500 2 0
// 800 2 0
// 1400 5 0
// 300 4 0
// 400 3 0
// 500 3 18
// console.log(dynamicCalculate([[500, 1, 0], [400, 4, 0], [300, 5, 1], [400, 5, 1], [200, 5, 0], [500, 4, 0], [400, 4, 0]], 1500))
// console.log(dynamicCalculate([[300, 5, 0], [400, 2, 0], [300, 5, 2], [300, 4, 2], [600, 4, 0]], 1000))
// console.log(dynamicCalculate([[500, 1, 0], [400, 4, 0], [300, 5, 1], [400, 5, 1], [200, 5, 0], [500, 4, 5], [400, 4, 0], [320, 2, 0], [410, 3, 0], [400, 3, 5]], 2000))
console.log(dynamicCalculate([[100, 3, 0], [400, 5, 0], [300, 5, 0], [1400, 2, 2], [500, 2, 2], [800, 2, 3], [1400, 5, 0], [300, 5, 0],
    [1400, 3, 0], [500, 2, 0], [1800, 4, 0], [440, 5, 10], [1340, 5, 10], [1430, 3, 0], [500, 2, 0], [800, 2, 0], [1400, 5, 0], [300, 4, 0],
[400, 3, 0], [500, 3, 18]], 8000, 20))
// console.log(findAllIndexGroups(5, []))