// 1. Declaring String

let str1 = "Hello";
let str2 = "Hey";
let str3 = `Whats up?`;

// Above 3 methods are used to store strings in JavaScript
// among them, the backtick method allows for multi-line strings and string interpolation.
// String Interpolation ${var_name/expression} allows us to embed expressions/Variables inside string literals.

let name = "John";
let age = 30;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Hello, my name is John and I am 30 years old.

//2. Length of String
let username = "Marvel Studios";
console.log(username.length); // 14 (it includes spaces)

//3. String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // John Doe

// 4. Accessing Characters
let str = "Hello";
console.log(str[0]); // H
console.log(str.charAt(1)); // e

// 5. Changing Case
console.log(str.toUpperCase()); // HELLO
console.log(str.toLowerCase()); // hello

// 6. Searching in String
let author = "J.K. Rowling";
console.log(author.indexOf("K")); // 2
console.log(author.includes("Rowling")); // true

let statement = `That photo is awesome, i didnt see such photo before`;
// if word appears more than one time in string
console.log(statement.indexOf("photo")); // 9
console.log(statement.lastIndexOf("photo")); // 36

// 7. Extracting Substring

let movie = "The Shawshank Redemption";

// Slice
console.log(movie.slice(4, 13)); // Shawshank  (id doesnt consider end index value) 0-12 gets printed

// *** slice also has a negative index
// length - 25 (0-24 indexing) positive
// negative indexing - -24 -23 -22 -21..... -1
//                      T   h   e       S....... n
console.log(movie.slice(-24, -21)); // the
console.log(movie.slice(-24, 5)); // one neg & one positive

/** Substring */
console.log(movie.substring(4, 10)); // Shaw (same as slice but doesnt have negative index)

// ** Substr (deprecated) - use slice or substring instead
console.log(movie.substr(4, 6)); // Shawsh -  substr(start index, length);

// 8. Replacing Content 

let text = "I love JavaScript";
text = text.replace("JavaScript", "TypeScript");
console.log(text); // I love TypeScript

// same word multiple times
text = "I love JavaScript. JavaScript is great!";
// text = text.replace(/JavaScript/g, "TypeScript");
/* /expression/g  - global search  OR replaceAll this is also one of the method */
text = text.replaceAll("JavaScript", "TypeScript");
console.log(text); // I love TypeScript. TypeScript is great!

// 9. Splitting Strings 

let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" "); // delimiter is space
console.log(words); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

let sentence2 = "The,rain ,in, Spain ,stays ,mainly, in ,the, plain";
let words2 = sentence2.split(","); // delimiter is comma
console.log(words2); // ["The", "rain ", "in", " Spain ", "stays ", "mainly", " in ", "the", " plain"]

// 10. trimming Strings 

let messyString = "   Hello World!   ";
let trimmedString = messyString.trim(); // removes whitespace from both ends
console.log(trimmedString); // "Hello World!"

let trimmedStartString = messyString.trimStart(); // removes whitespace from start
console.log(trimmedStartString); // "Hello World!   "

let trimmedEndString = messyString.trimEnd(); // removes whitespace from end
console.log(trimmedEndString); // "   Hello World!"

/* New Way to create Strings */
let newString = new String("Hello World!");
console.log(newString); // [String: 'Hello World!']
// It is an object wrapper around the primitive string value.
