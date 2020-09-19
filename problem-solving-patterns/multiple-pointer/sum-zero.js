/**
 * Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 * Output::>
 * sumZero([-3,-2,-1,0,1,2,3]); // [-3,3]
 * sumZero([-2,0,1,3]); // undefined
 * sumZero([1,2,3]); // undefined
 */

// Solution 1 :::> O(n^2)
/*
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (sum === 0) {
          return [arr[i], arr[j]];
        }
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
*/
// Solution 2:::> Time complexity: O(n) and Space Complexity: O(1)
// Solution using multiple pointers

function sumZero(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i !== j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) return [arr[i], arr[j]];
    if (sum > 0) {
      j--;
    }
    if (sum < 0) {
      i++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4])); // [-4,4]
