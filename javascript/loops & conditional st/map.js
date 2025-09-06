// map in js - map method is used to create a new array by calling a provided function on every element in the calling array
// It creates a new array with the results of calling a provided function on every element in the calling array
// The map method does not change the original array
// Syntax: array.map(callback(currentValue[, index[, array]])[, thisArg])
// callback: A function that is called for every element of the array. Each time callback executes, the returned value is added to the new array.
// currentValue: The current element being processed in the array
// index (Optional): The index of the current element being processed in the array
// array (Optional): The array map was called upon
// thisArg (Optional): Value to use as this when executing callback

const arr = [1, 2, 3, 4, 5];

const result = arr.map(num => num * 2);
console.log(result); // [ 2, 4, 6, 8, 10 ]

// Use of filter and map together
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredAndMapped = arr2
  .filter(num => num % 2 === 0) // Filter even numbers
  .map(num => num * 3);        // Triple each even number
  
console.log(filteredAndMapped); // [ 6, 12, 18, 24, 30 ]