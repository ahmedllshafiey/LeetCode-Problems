/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] == target) {
      console.log(i + 1);
    }
  }
};

twoSum([2, 7, 11, 15], 9);
