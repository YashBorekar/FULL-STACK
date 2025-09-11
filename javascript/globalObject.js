/**
 * In JavaScript, the "global object" is the top-level object that provides global variables and functions.
 * 
 * In browsers, the global object is called "window".
 * In Node.js, it's called "global".
 * 
 * Properties and functions attached to the global object are accessible from anywhere in your code.
 */

// Example in browser:
console.log(window); // The global object in browsers

// Example in Node.js:
console.log(global); // The global object in Node.js

// Adding a property to the global object (browser)
window.myGlobalVar = "Hello, World!";
console.log(window.myGlobalVar); // Output: Hello, World!

// Adding a property to the global object (Node.js)
global.myGlobalVar = "Hello, Node!";
console.log(global.myGlobalVar); // Output: Hello, Node!

/**
 * Some built-in functions like setTimeout, setInterval, and console are part of the global object.
 * You can access them directly without referencing the global object.
 */
setTimeout(() => {
    console.log("This is a global function!");
}, 1000);

/**
 * In strict mode, assigning variables without var/let/const does NOT add them to the global object.
 */
"use strict";
// myVar = 10; // This would throw an error in strict mode

/**
 * Best practice: Avoid polluting the global object to prevent conflicts and bugs.
 */

// Instead, us  e local scope or modules to encapsulate your code.
