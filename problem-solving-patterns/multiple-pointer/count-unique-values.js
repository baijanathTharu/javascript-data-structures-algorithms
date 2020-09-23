/**
 * Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array, but will always be sorted
 * Outputs::>
 * console.log(countUniqueValues([1,1,1,2])); // 2
 * console.log(countUniqueValues([1,2,2,3,3,3,5,5,6])); //5
 * console.log(countUniqueValues([])); // 0
 * console.log(countUniqueValues([-2,0,0,1,2,2])); // 4
 */
function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  let count = 0;
  while (i < arr.length) {
    if (arr[i] !== arr[j]) {
      count++;
    }
    i++;
    j++;
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 2, 3, 3, 3, 5, 5, 6, 6])); //5
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, 0, 0, 1, 2, 2])); // 4
console.log(
  countUniqueValues([1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 7, 9, 9])
); // 8
