/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let pos = [];
    let horizon = 0;
    let vertical = 0;
    let mode = 'plus';
    for (let i = 0; i < s.length; i++) {
        if (numRows === 1) {
            pos.push(horizon + '_' + vertical);
            horizon++;
        } else {
            if (mode === 'plus' && vertical <= numRows) {
                pos.push(horizon + '_' + vertical);
                if (vertical + 1 >= numRows && i !== 0) {
                    mode = 'minus';
                    horizon++;
                    if (vertical > 0) {
                        vertical--
                    }
                } else {
                    vertical++;
                }
            } else if (mode === 'minus' && vertical >= 0) {
                pos.push(horizon + '_' + vertical);
                if (vertical > 0) {
                    horizon++;
                    vertical--;
                    if (vertical === 0) {
                        mode = 'plus';
                    }
                } else {
                    mode = 'plus'
                    if (vertical < numRows) {
                        vertical++;
                    }
                }
            }
        }
    }
    let finalStrArr = [];
    for (let i = 0; i <= numRows; i++) {
        finalStrArr[i] = '';
    }
    for (let i = 0; i < s.length; i++) {
        let currentPos = pos[i];
        let currentPosArr = currentPos.split('_');
        finalStrArr[+currentPosArr[1]] += s.charAt(i)
    }
    let finalString = '';
    for (let i = 0; i < finalStrArr.length; i++) {
        finalString += finalStrArr[i];
    }
    return finalString
};

console.log(convert('ABCD', 2))
console.log(convert('ABC', 1))
console.log(convert('ABCD', 1))

