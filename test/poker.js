/* 给一个字符串数组，代表扑克牌，['1H', '2S', '3D', '4C', …]
每个字符串有两个字符，第一个代表数字, 1->1, 2->2, … 9->9, T->10, J -> J, Q -> Q, K -> K, 第二个代表花色 H->Heart, S->Spade, D->Diamond, C->Club。
问：这些牌最多能凑成几套完整的牌（不考虑大小王）*/

function jokerRedunt(originalArray) {
  if (!originalArray) {
    return;
  }
  
  const times_num_H = 0,
    times_num_S = 13,
    times_num_D = 26,
    times_num_C = 39;

  const times_num_collection = {
    'H': 0,
    'S': 13,
    'D': 26,
    'C': 39,
  };

  function replaceJQK(string) {
    return new Number(string.replace('T', '10').replace('J', '11').replace('Q', '12').replace('K', '13')).valueOf();
  }

  var nums_store = [];
  originalArray.map(function (item) {
    var item_split_array = [item.substr(0, item.length - 1), item.substr(-1)];
    var int_time_baseline = times_num_collection[item_split_array[1]];
    var position_in_num_store = int_time_baseline + replaceJQK(item_split_array[0]) - 1;
    nums_store[position_in_num_store] ? nums_store[position_in_num_store] += 1 : nums_store[position_in_num_store] = 1;
  });

  return Math.min.apply(null, nums_store);
}

console.log(jokerRedunt(testArray));
