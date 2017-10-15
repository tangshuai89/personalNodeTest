/**
 * Created by AndrewClearness on 2017/3/22.
 */

var MagicArrayStructureRedefined = function(array) {
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) < i) {
      var standbyNum = array.indexOf(array[i]);
      array = array.swap((standbyNum + 1), i);
      array = array.swap(i, (standbyNum + 2));
      i+=1;
    }
  }
  return array;
}
Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

var originArray = [];
for(var i = 0; i < 10000; i++) {
  originArray.push((Math.random()*100).toFixed(0));
}

console.time("Array initialize");
MagicArrayStructureRedefined(originArray);
console.timeEnd("Array initialize");