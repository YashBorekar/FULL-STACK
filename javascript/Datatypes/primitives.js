// string
let name = "Alice";
let greeting = 'Hello, World!';
let template = `User: ${name}`; // Template literals can embed expressions

// number
let integerValue = 100;
let floatValue = 3.14; // Floating-point number
let notANumber = NaN; // Result of an invalid math operation like 0 / 0
let infinity = Infinity; // Represents infinity

// boolean
let isActive = true;
let isComplete = false;

// undefined
let user;
console.log(user); // Outputs: undefined

// null
let data = null; // Intentionally set to have no value

// BigInt
const veryLargeNumber = 9007199254740991n; // The 'n' makes it a BigInt
const anotherBigInt = BigInt(9007199254740992);

// Symbol
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 === id2); // Outputs: false (every symbol is unique)