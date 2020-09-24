/**
 * Given sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.
 * console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
 * console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
 * console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
 */

// Naive Approach::
/*
function search(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
*/
// Divide and conquer::

function search(arr, n) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let currentVal = arr[mid];

    if (currentVal < n) {
      min = mid + 1;
    } else if (currentVal > n) {
      max = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
