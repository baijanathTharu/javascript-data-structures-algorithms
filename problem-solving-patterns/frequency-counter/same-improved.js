/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be same.
Outputs::>
same([1,2,3], [4, 1, 9]); //true
same([1,2,3], [1,9]); //false
same([1,2,1], [4,4,1]); //false (frequency for 1 is not same)
same([4, 3, 2, 1], [1, 9, 16, 4]); //true
*/

// Solution:::> Time Complexity: O(n)
// Frequency counter approach

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  // Put all the values in the array one and array two in objects as key
  // The values of those keys will be the number of times they appear in the array
  let frequencyArr1 = {};
  let frequencyArr2 = {};

  for (let elem of arr1) {
    frequencyArr1[elem] = (frequencyArr1[elem] || 0) + 1;
  }
  for (let elem of arr2) {
    frequencyArr2[elem] = (frequencyArr2[elem] || 0) + 1;
  }
  // console.log(frequencyArr1, frequencyArr2);
  // now we can compare the elements and their squares in two objects
  for (let key in frequencyArr1) {
    if (!frequencyArr2[key ** 2]) return false;
    if (frequencyArr1[key] !== frequencyArr2[key ** 2]) return false;
  }

  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([4, 3, 2, 1], [1, 9, 16, 4]));
