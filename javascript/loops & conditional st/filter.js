// filter in js - filter method is used to filter the elements of an array based on a condition
// It creates a new array with all elements that pass the test implemented by the provided function
// The filter method does not change the original array
// Syntax: array.filter(callback(element[, index[, array]])[, thisArg])
// callback: A function that is called for every element of the array. Each time callback executes, the returned value is added to the new array if it is true.
// element: The current element being processed in the array
// index (Optional): The index of the current element being processed in the array
// array (Optional): The array filter was called upon
// thisArg (Optional): Value to use as this when executing callback


/**
 * An array of student objects, each containing a name and age.
 * @type {Array<{name: string, age: number}>}
 */                     

const students = [  
    { name: "John", age: 20 },
    { name: "Jane", age: 22 },  
    { name: "Jim", age: 21 },   
    { name: "Jack", age: 23},
    { name: "Jill", age: 24},
]


// const result = students.filter( (obj) => obj.age > 21) ;
 const result = students.filter(({age})=>age>21); // Destructuring in parameter
console.log(result); // [ { name: 'Jane', age: 22 }, { name: 'Jack', age: 23 }, { name: 'Jill', age: 24 } ]
