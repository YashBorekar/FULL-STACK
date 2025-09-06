// foreach - executes a provided function once for each array element.
// Syntax: array.forEach(callback(currentValue[, index[, array]])[, thisArg])
// callback: A function that is called for every element of the array.
// It doesnt return anything
// currentValue: The current element being processed in the array
// index (Optional): The index of the current element being processed in the array
// array (Optional): The array forEach was called upon
// thisArg (Optional): Value to use as this when executing callback
const arr = [1, 2, 3, 4, 5];

arr.forEach( (num,index,arr) => {
    console.log(`${arr} - Index: ${index} - Value: ${num}`);
});

const greet = function(){
    console.log(`Hello World`);
}

arr.forEach(greet); // passing function as argument

// arr.forEach(num => {
//     num*=2;
//     console.log(num)});      


/**
 * An array of student objects, each containing a name and age.
 * @type {Array<{name: string, age: number}>}
 */
const students = [
    { name: "John", age: 20 },
    { name: "Jane", age: 22 },  
    { name: "Jim", age: 21 },
    { name: "Jack", age: 23}
]

const age = students.filter(student => student.age > 21);
console.log(age); // [ { name: 'Jane', age: 22 }, { name: 'Jack', age: 23 } ]

