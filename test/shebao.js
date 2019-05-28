function shebao(percent) {
  var num = 6024;
  var sum = 0;
  for (var i = 0; i < 18; i++) {
    if (i >= 1) {
      num = num * 0.9301415;
    }
    if (i === 0 || i === 17) {
      sum += num + num * percent * i / 2;
    } else {
      sum += num + num * percent * i;
    }
  }
  // for (var i = 0; i < 5; i++) {
  //   sum += sum * percent;
  // }
  return sum;
}

console.log('费率为1%时：' + shebao(0.01));
