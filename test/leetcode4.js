/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var nums = nums1.concat(nums2).sort(function(a, b) {
    return a - b;
  });
  var numsLength = nums.length;
  var middle = Math.floor(numsLength / 2);
  if (numsLength % 2 === 0) {
    return (nums[middle - 1] + nums[middle])/2;
  } else {
    return nums[middle];
  }
};