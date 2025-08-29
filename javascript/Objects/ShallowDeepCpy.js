// Shallow & Deep Copy

// Shallow Copy - creates a new reference to the same object
const obj1 = { a: 1, b: 2 };
const obj2 = obj1;
obj2.a = 5;
console.log(obj1); // { a: 5, b: 2 }
console.log(obj2); // { a: 5, b: 2 }

// Deep Copy - creates a new object with the same properties
const obj3 = structuredClone(obj1);
obj3.a = 10;
console.log(obj1); // { a: 5, b: 2 }
console.log(obj3); // { a: 10, b: 2 }
