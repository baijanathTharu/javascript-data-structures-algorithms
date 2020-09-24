# Problem Solving Patterns

## Frequency Counter Pattern

- It uses objects or sets to collect frequencies of values.
- Helps to avoid the need for the nested loops or O(n^2) operations with arrays and strings.

### Example:

- _Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be same._

- Anagrams: _Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman._

## Multiple Pointer Pattern

- In this pattern, we create pointers or values that corresponds to an index or position.
- This pointer can move towards beginning, end or middle depending on certain condition.
- Useful for problems that require minimal space complexity.

### Example:

- _Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist._

- _Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array, but will always be sorted._

## Window Sliding Pattern

- Create a window which can be an array or number from one position to another.
- Used in keeping track of subset of data in an array or string.

### Example:

- _Write a function for finding longest unique sequence of characters in a string._
- _Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array._

## Divide and Conquer Pattern

- Divide the data set into smaller pieces and then repeat with the subset of the data.
- Can decrease the time complexity tremendously.
- Binary Search, QuickSort, MergeSort, etc are examples of divide and conquer.

### Example:

- _Given sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1._
