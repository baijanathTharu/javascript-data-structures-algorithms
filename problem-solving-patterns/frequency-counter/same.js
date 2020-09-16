/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be same.
Outputs::>
same([1,2,3], [4, 1, 9]); //true
same([1,2,3], [1,9]); //false
same([1,2,1], [4,4,1]); //false (frequency for 1 is not same)
same([4, 3, 2, 1], [1, 9, 16, 4]); //true
*/

/* Solution 1:::> Time Complexity: O(n^2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let count = {};
  for (let elem1 of arr1) {
    count[elem1] = 0;
    for (let elem2 of arr2) {
      if (elem2 === elem1 * elem1) {
        count[elem1]++;
        if (count[elem1] > 1) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([4, 3, 2, 1], [1, 9, 16, 4]));
*/

//Solution 2:::> Time Complexity: O(n^2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let elem1 of arr1) {
    const index = arr2.indexOf(elem1 ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([4, 3, 2, 1], [1, 9, 16, 4]));
