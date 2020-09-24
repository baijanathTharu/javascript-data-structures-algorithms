/**
 * Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
 * Output::>
 * console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
 * console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
 * console.log(maxSubArraySum([4,2,1,6], 1)); // 13
 * console.log(maxSubArraySum([], 4)); // null
 *
 */
// Solution 1:::> Window Sliding Method: Time Complexity: O(n)
function maxSubArraySum(arr, n) {
  if (arr.length === 0) return null;
  if (n === 0) return 0;
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 0)); // 0
console.log(maxSubArraySum([], 4)); // null
