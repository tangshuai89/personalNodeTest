function shebao(percent) {
  var num = 6000;
  var sum = 0;
  for (var i = 1; i <= 18; i++) {
    num = num * 0.93;
    sum += num + num * percent * i;
  }
  return sum;
}

console.log('费率为1%时：' + shebao(0.01));
console.log('费率为2%时：' + shebao(0.02));
console.log('费率为3%时：' + shebao(0.03));
console.log('费率为4%时：' + shebao(0.04));
console.log('费率为5%时：' + shebao(0.05));
console.log('费率为6%时：' + shebao(0.06));
console.log('费率为7%时：' + shebao(0.07));
console.log('费率为8%时：' + shebao(0.08));
console.log('费率为9%时：' + shebao(0.09));
console.log('费率为10%时：' + shebao(0.1));
