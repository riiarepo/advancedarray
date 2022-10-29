/*

Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.

Examples:

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

*/

let maxWithReduce = function (nums) {
  // let max = -Infinity;

  // for (let i = 0; i < nums.length; i++) {
  //   let num = nums[i];
  //   if (num > max) {
  //     max = num;
  //   }
  // }
  // return max;
  let max = nums.reduce(function (max, num) {
    if (num > max) {
      return num
    } else {
      return max;
    };
  }, -Infinity)

  return max;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = maxWithReduce;
} catch (e) {
  module.exports = null;
}
