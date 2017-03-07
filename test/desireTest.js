/*
 测试需求：
 编写一个函数，函数有一个参数n，要求返回一个数组
 1. 数组内是n个随机且不重复的整数
 2. 整数取值范围2-32
 */
var test = {
  invariant: {
    numberMinRound: 2,
    numberMaxRound: 32
  },
  init: function () {
    'use strict';
    console.log(this.transferArray('29'));
  },
  transferArray: function (n) {
    'use strict';
    if (!n) {
      console.error("n不存在");
    } else if (Number.isInteger(n)) {
      console.error("n非整数");
    } else if (Number.isInteger(Number(n).valueOf())) {
      console.warn("n为字符型数字，注意转义");
      var numberChangedFromString = Number(n).valueOf();
      if (numberChangedFromString < 1 || numberChangedFromString > 31) {
        console.error("n参数越界");
      } else {
        return this.executeRandomArrProcess(numberChangedFromString);
      }
    } else if (n < 1 || n > 31) {
      console.error("n参数越界");
    } else {
      return this.executeRandomArrProcess(n);
    }
    return [];
  },
  executeRandomArrProcess: function (n) {
    'use strict';
    var arr = [];
    var i;
    var randomNumber;
    for (i = 0; i < n; i += 1) {
      randomNumber = this.actionGenerateRandomNumber(this.invariant.numberMinRound, this.invariant.numberMaxRound);
      if (arr.indexOf(randomNumber) === -1) {
        arr.push(randomNumber);
      } else {
        i -= 1;
      }
    }
    return arr;
  },
  actionGenerateRandomNumber: function (numberMinRound, numberMaxRound) {
    'use strict';
    var originalRandomNumber = Math.random() * numberMaxRound + numberMinRound;
    return Number(originalRandomNumber.toFixed(0)).valueOf();
  }
};
test.init();