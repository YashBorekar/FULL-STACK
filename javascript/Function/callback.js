
// const greet = function(){
//     console.log("i am in greet");
// }

// const sayHello = function(fun){
//     console.log("Hello i am in sayHello");
//     fun();
// }

// sayHello(function(){
//     console.log("i am in greet");
// }); // passing function as argument

// sayHello(greet); // passing function as argument



// sayHello(() => {
//     console.log("i am in greet");
// }); // passing function as argument

/** **** SET INTERVAL FUNCTION ****/

// setInterval(() => {
//     console.log("i am in setInterval");
// }, 3000);
// it will call the function after every 3 seconds

// let count = 0;
// const intervalId = setInterval(() => {
//     count++;
//     console.log("i am in setInterval with count: ", count);
//     if(count === 5){
//         clearInterval(intervalId); // it will stop the interval after 5 counts
//     }
// }
// , 1000);
// it will call the function after every 1 seconds and stop after 5 counts

// setTimeout(() => {
//     console.log("i am in setTimeout");
// }, 3000);
// it will call the function after 3 seconds only once

// let timeoutId = setTimeout(() => {
//     console.log("i am in setTimeout");
// }, 3000);

// clearTimeout(timeoutId); // it will stop the timeout

// it will not call the function

// Example of callback hell
// setTimeout(() => {
//     console.log("1st Timeout");
//     setTimeout(() => {
//         console.log("2nd Timeout");
//         setTimeout(() => {
//             console.log("3rd Timeout");
//             setTimeout(() => {
//                 console.log("4th Timeout");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
// it will call the function after every 1 seconds and print 1st, 2nd, 3rd, 4th Timeout
// This is called callback hell because of nested callbacks
// To avoid callback hell we use Promises and async/await in JavaScript
// Promises and async/await will be discussed later
// This is just an example of callback hell
// In real world scenario we use Promises and async/await to avoid callback hell
// Promises and async/await will be discussed later
// This is just an example of callback hell
// In real world scenario we use Promises and async/await to avoid callback hell
// Promises and async/await will be discussed later
// This is just an example of callback hell
// In real world scenario we use Promises and async/await to avoid callback hell
// Promises and async/await will be discussed later
// This is just an example of callback hell
// In real world scenario we use Promises and async/await to avoid callback hell
// Promises and async/await will be discussed later
// This is just an example of callback hell
// In real world scenario we use Promises and async/await to avoid callback hell
// Promises and async/await will be discussed later
// This is just an example of callback hell
// In real world scenario we use Promises and async/await to avoid callback hell
// Promises and async/await will be discussed later
// This is just an example of callback hell     
