/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var result = '';
  var length = 0;
  for (var i = 0; i < s.length; i++) {
    var test = s.charAt(i);
    if (result.indexOf(s.charAt(i)) === -1) {
      result += s.charAt(i);
      if (i === s.length - 1) {
        length = result.length > length ? result.length : length;
      }
    } else {
      length = result.length > length ? result.length : length;
      if (i !== s.length - 1) {
        i = i - result.length;
      }
      result = '';
    }
  }
  return length;
};
