
// 给定一个数组，输出这样一个下标，使得这个下标左边的小数组加起来和右边的小数组和一样。如果没有，返回-1，如果有多个，返回第一个，如：
// findPivot([0,1,1,2,2]) => 3
// findPivot([0,1,2,2,2]) => -1
// findPivot([0,2,0,0,2]) => 2


function findPivot(array) {
  if (array == null || array.length == 0) {
    return -1;
  }

  if (array.length == 1 || array[0] === array[array.length - 1]) {
    return -1;
  }

  let start = 0;
  let end = array.length - 1;
  let leftpad = 0;
  let rightpad = array[array.length - 1];

  console.log(hyperAscend(start, end, leftpad, rightpad, array));
}

function hyperAscend(start, end, leftpad, rightpad, array) {
  if (leftpad < rightpad && start < end) {
    start += 1;
    leftpad += array[start];
    return hyperAscend(start, end, leftpad, rightpad, array);
  } else if (leftpad > rightpad && start > end) {
    end -= 1;
    rightpad += array[end];
    return hyperAscend(start, end, leftpad, rightpad, array);
  } else if (leftpad == rightpad){
    return start + 1;
  } else {
    return -1;
  }
}
findPivot([0,1,1,2,2]);
findPivot([0,1,2,2,2]);
findPivot([0,2,0,0,2]);




