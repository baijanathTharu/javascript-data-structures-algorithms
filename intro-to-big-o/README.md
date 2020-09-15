# Big O Notation

1. How do we know which is the best solution to the problem?
2. Comparing code and their performance.

In order to find the performance of our code, Big O Notation is used.

## Why care?

- It is important to have some precise way of talking about our code.
- Useful for discussing trade-offs between different approaches.
- When our code slows down or crashes, we can find the inefficient parts in our code.

### Example 1: Sum of number from 1 up to n.

```js
function addUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

### Example 2: Sum of number from 1 up to n.

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

### Which of the code above is the better one?

- First of all, what does better mean? Faster!, Less Memory Intensive!, readable!

### Using Timers

```js
let t1 = performance.now();
addUpTo(10000000);
let t2 = performance.now();
let timeTaken = (t2 - t1) / 1000;
console.log(timeTaken, "seconds");
```

### The Problem with Time (for same piece of code)

- Different machines will record different times
- The same machine will record different time
- For fast algorithms, speed measurements may not be precise enough!

### If not time then what?

- This is where the Big O Notation comes.
- Counting the number of simple operations that our computer has to perform.

## Take

- In example 2, the number of operations are 3, while in example 1, 5n + 2.
- Number of operations in the first example grows proportionally with n.

* Number of operations in the second example remains constant regardless of n.

## Time Complexities

- How can we analyze the runtime of an algorithm as the size of input increases.

- Plotting time taken to run a piece of code with n.

## Big O

- It allows us to talk about the runtime of an algorithm as the inputs grows.
- An algorithms is O(f(n)) if the number of simple operations to be performed is eventually less than a constant times f(n), as n increases. (limit definition of a function)
- f(n) could be linear ($f(n) = n$)
- f(n) could be constant ($f(n) = k$)
- f(n) could be quadratic ($f(n) = n^2$)
- f(n) could be a complicated mathematical function.

## Simplifying Big O (Shorthands)

Rules while determining the time complexity of an algorithm:

- Constants don't matter i.e.
  $ O(2n) = O(Kn) = O(Kn + P) =  O(n) $
  $ O(1000) = O(K) = O(1)$
  $ O(Kn^2 + Mn + P ) = O(n^2)$
  and so on
- Arithmetic operations are constant times.
- Variable assignments are constant times.
- Accessing elements in an array by index or object by key is constant.
- In an array, the complexity is the length of the loop times the complexity of whatever happens inside the loop.

## Space Complexity

- How much additional memory do we need to allocate in order to run the code in our algorithm?
- Auxillary Space Complexity: not taking account of the space of the input rather only the space of the algorithm.

### Rules of Space Complexity

- Most primitives (booleans, numbers, undefined, null) are constant space.
- Strings require $O(n)$ space where n is the length of the string.
- Reference types are generally $O(n)$ where n is the length(for arrays) or the number of keys (for objects).

## Logarithmic Complexity $O(log n)$

- Logarithmic time complexity is great.
- Certain searching logarithms have log time complexity.
- Efficient sorting algorithms have log time complexity.
- Recursion sometimes involve log space complexity.
