# Analyzing Arrrays and Objects

- Understand arrays and objects through the lens of Big O.
- Why adding elements to the beginning of an array costly?
- Compare and contrast the runtime of arrays and objects and built in methods.

## Objects

```js
let subject = {
  name: "Operating Systems",
  author: "John Torvalds",
  publishedOn: "2012",
  tutor: "Mr John",
};
```

### Use of Objects

- When there is no need of order.
- Need of fast access/insertion and removal.

### Big O of Objects

- Insertion: O(1)
- Removal: O(1)
- Searching: O(n)
- Access: O(1)

### Built in methods for Objects

- Object.keys: O(n)
- Object.values: O(n)
- Object.entries: O(n)
- hasOwnProperty: O(1)

## Arrays

- Ordered Lists

```js
let values = [true, 5, "word", { empty: true }];
```

### Use of Arrays

- When we need order.
- For quick access with index

### Big O of Arrays

- Insertion: depends (Insertion at the end of the array is O(1) but inserting at the beginning of the array is O(n)) (push and pop are fast.)
- Removal: depends (Removal of element at the end of the array is O(1) but removal of element at the beginning of the array is O(n)) (shift and unshift are slow.)
- Searching: O(n)
- Access: O(1)

### Built in Array Methods

- concat: O(n)
- slice: O(n)
- splice: O(n)
- sort: O(n\* log (n))
- forEach/map/filter/reduce etc: O(n)
