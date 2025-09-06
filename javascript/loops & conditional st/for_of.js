/**
 * Demonstrates usage of the `for...of` loop with arrays and objects in JavaScript.
 *
 * - Adds a custom property `name` to the array `arr`.
 * - Iterates over the array using `for...of`, logging each value.
 * - Shows that objects (`obj`) are not iterable with `for...of` and will throw a TypeError.
 *
 * @example
 * const arr = [1,2,3,4,5,6,7,8];
 * arr.name = 'Yash';
 * for (let val of arr) {
 *   console.log(val); // Logs each number in the array
 * }
 *
 * const obj = { user: 'cha', id: 123 };
 * // for (let val of obj) { ... } // TypeError: obj is not iterable
 */
const arr = [1,2,3,4,5,6,7,8]
arr.name = `Yash`;
for(let val of arr){
    console.log(val); // 1 23 4 5 6 7 8
}

const obj ={
    user:`cha`,         
    id:123
};



