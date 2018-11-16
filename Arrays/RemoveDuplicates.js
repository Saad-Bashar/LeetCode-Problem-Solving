/**
 * Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length < 2) return nums.length;
  
  var swapped = 1;
  for(var i = 1; i < nums.length; i++) {
    if(nums[i-1] < nums[i]) {
      nums[swapped] = nums[i];
      swapped++;
    }
  }
  
  return swapped;
};