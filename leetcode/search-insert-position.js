/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let bottomIndex = 0;
  let topIndex = nums.length;

  while (bottomIndex <= topIndex) {
    let middleIndex = Math.ceil((bottomIndex + topIndex) / 2);
    currentTarget = nums[middleIndex];

    if (currentTarget == target) {
      return middleIndex;
    } else if (currentTarget < target) {
      bottomIndex = middleIndex + 1;
    } else {
      topIndex = middleIndex - 1;
    }
  }

  return bottomIndex;
};
