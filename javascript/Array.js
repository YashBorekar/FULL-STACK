// JAVASCRIPT ARRAYS - COMPREHENSIVE GUIDE
// Arrays are ordered collections that can store multiple values of different data types
// Arrays in JavaScript are zero-indexed (first element is at index 0)
// Arrays are dynamic - they can grow and shrink in size

let arr = [1,2,31,42,"ram","Union","India",true];

// NOTE: JavaScript arrays can contain mixed data types (numbers, strings, booleans, objects, etc.)
// This is different from many other programming languages that require arrays to be homogeneous

// 1. Accessing Array Elements
// Arrays use square bracket notation with zero-based indexing
console.log(arr[0]); // 1 - First element
console.log(arr[4]); // ram - Fifth element

// IMPORTANT: Accessing an index that doesn't exist returns 'undefined'
console.log(arr[100]); // undefined

// 2. Modifying Array Elements
// Arrays are mutable - you can change their contents after creation
arr[1] = 99;
console.log(arr); // [1, 99, 31, 42, "ram", "Union", "India", true]

// NOTE: You can also add elements by assigning to an index beyond the current length
// This creates "holes" in the array (empty slots filled with undefined)

// 3. Array Length
// The length property returns the number of elements in the array
console.log(arr.length); // 8

// IMPORTANT: length is a property, not a method (no parentheses needed)
// You can also modify the length property to truncate or extend an array

// EXAMPLES OF MODIFYING ARRAY LENGTH:
let lengthExample = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original array:", lengthExample); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log("Original length:", lengthExample.length); // 8

// TRUNCATING (shortening) an array by setting length to smaller value:
lengthExample.length = 4;
console.log("After setting length to 4:", lengthExample); // [1, 2, 3, 4] - elements beyond index 3 are PERMANENTLY DELETED
console.log("New length:", lengthExample.length); // 4

// EXTENDING an array by setting length to larger value:
lengthExample.length = 7;
console.log("After setting length to 7:", lengthExample); // [1, 2, 3, 4, <3 empty items>] - new slots are filled with 'undefined'
console.log("New length:", lengthExample.length); // 7
console.log("Element at index 5:", lengthExample[5]); // undefined
console.log("Element at index 6:", lengthExample[6]); // undefined

// WARNING: Truncating an array is IRREVERSIBLE - the removed elements are lost forever!

// 4. Adding Elements
// push() - adds element(s) to the END of array and returns new length
arr.push("New Element");
console.log(arr); // [1, 99, 31, 42, "ram", "Union", "India", true, "New Element"]

// NOTE: push() modifies the original array (mutating method)
// You can push multiple elements: arr.push(item1, item2, item3)

// 5. Removing Elements
// pop() - removes and returns the LAST element from array
arr.pop();
console.log(arr); // [1, 99, 31, 42, "ram", "Union", "India", true]

// NOTE: pop() returns the removed element, or undefined if array is empty
// This also modifies the original array

// 6. Add element at start
// unshift() - adds element(s) to the BEGINNING of array and returns new length
arr.unshift(10);
console.log(arr); // [10, 1, 99, 31, 42, "ram", "Union", "India", true]

// NOTE: unshift() is slower than push() because it needs to reindex all elements

// 7. Delete element at start
// shift() - removes and returns the FIRST element from array
arr.shift();
console.log(arr); // [1, 99, 31, 42, "ram", "Union", "India", true]

// NOTE: Like unshift(), shift() is slower than pop() due to reindexing
// Returns undefined if array is empty

// 8. Finding Index of element in Array
// indexOf() - returns the FIRST index of the specified element, or -1 if not found
console.log(arr.indexOf("ram")); // 4
console.log(arr.indexOf(100)); // -1 (not found)

// lastIndexOf() - returns the LAST index of the specified element, or -1 if not found
console.log(arr.lastIndexOf("ram")); // 4
console.log(arr.lastIndexOf(100)); // -1 (not found)

// NOTE: These methods use strict equality (===) for comparison
// They don't work with objects or arrays as they compare references, not values

// 9. Check if element exists
// includes() - returns true if array contains the specified element, false otherwise
console.log(arr.includes("India")); // true

// NOTE: includes() is more readable than indexOf() !== -1
// Also uses SameValueZero comparison, which handles NaN correctly

// 10. slice - returns a shallow copy of a portion of an array into a new array object
console.log(arr.slice(1, 4)); // [99, 31, 42]  doesnt modify original array

// NOTE: slice(start, end) - end index is EXCLUDED
// slice() creates a new array and doesn't modify the original (non-mutating method)
// If no parameters: slice() creates a complete copy of the array

// 11. splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements
console.log(arr.splice(1, 2)); // [99, 31] removes 2 elements starting from index 1 & modifies original array

// IMPORTANT: splice() MODIFIES the original array (mutating method)
// Syntax: splice(start, deleteCount, item1, item2, ...)
// Returns an array of deleted elements
// Can be used to insert, remove, or replace elements

// 12. Iterating Over Arrays
// Traditional for loop - gives you full control over iteration
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// NOTE: Other iteration methods include:
// for...of loop: for (let element of arr) { console.log(element); }
// forEach(): arr.forEach(element => console.log(element));
// map(), filter(), reduce() for functional programming approaches

// 13. Converting Array to String

// 13.1 using join() - joins all elements with a specified separator
let joinedString = arr.join("*");  // joins elements with "*"
console.log(joinedString); // "1*99*31*42*ram*Union*India*true"

// 13.2 using toString() - converts array to comma-separated string
let arrayString = arr.toString(); // converts array to string
console.log(arrayString); // "1,99,31,42,ram,Union,India,true"

// NOTE: join() is more flexible as you can specify any separator
// toString() always uses commas as separators

// 14. Concat - merges two or more arrays
let arr2 = [100, 200, 300];
let arr3 = [400, 500];
let newArray = arr.concat(arr2, arr3);
console.log(newArray); // [1, 99, 31, 42, "ram", "Union", "India", true, 100, 200, 300, 400, 500]

// NOTE: concat() creates a NEW array and doesn't modify original arrays
// Alternative: Use spread operator [...arr, ...arr2, ...arr3] (ES6+)
// concat() performs shallow copy of array elements

// 15. 2D Arrays (Arrays of Arrays)
// Multidimensional arrays are arrays that contain other arrays as elements
let arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr2D);

  // 15.1 Accessing elements in a 2D array
  // Use double bracket notation: array[row][column]
console.log(arr2D[0][1]); // 2 - Row 0, Column 1
console.log(arr2D[2][0]); // 7 - Row 2, Column 0

  // 15.2 Modifying elements in a 2D array
arr2D[1][1] = 99;
console.log(arr2D);

  // 15.3 Converting 2D array to 1D array
  // flat() method flattens nested arrays by one level
let flatArray = arr2D.flat();
console.log(flatArray);

// IMPORTANT NOTES FOR 2D ARRAYS:
// - Use nested loops to iterate through all elements
// - flat(depth) can flatten multiple levels: arr.flat(2) for 3D arrays
// - JavaScript arrays can have irregular dimensions (jagged arrays)

/*
===============================
ADDITIONAL IMPORTANT ARRAY METHODS TO EXPLORE:
===============================

FUNCTIONAL PROGRAMMING METHODS:
- map(): Creates new array by transforming each element
- filter(): Creates new array with elements that pass a test
- reduce(): Reduces array to single value using accumulator
- forEach(): Executes function for each element (no return value)
- find(): Returns first element that satisfies condition
- findIndex(): Returns index of first element that satisfies condition
- some(): Tests if at least one element passes test
- every(): Tests if all elements pass test

SORTING AND SEARCHING:
- sort(): Sorts array elements in place
- reverse(): Reverses array elements in place

ADVANCED METHODS:
- from(): Creates array from array-like or iterable object
- isArray(): Checks if value is an array
- fill(): Fills array with static value
- copyWithin(): Copies part of array to another location

PERFORMANCE TIPS:
- Use push() instead of arr[arr.length] = value
- Prefer for loops for simple iterations (fastest)
- Use functional methods for readability and immutability
- Be aware that some methods mutate (modify) original array while others don't

MEMORY CONSIDERATIONS:
- Arrays are objects in JavaScript and stored by reference
- Large arrays can impact performance
- Use splice() carefully with large arrays as it can be expensive
*/

