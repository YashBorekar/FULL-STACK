// Map - map in javascript
// It is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// 1.Creating a Map with initial values
const myMap2 = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
]);
console.log(myMap2); // Output: Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }

// 2.Creating an empty Map
const myMap = new Map();
console.log(typeof myMap); // object

// 3.Adding key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set(1, 'one'); // Key can be of any type
myMap.set(true, 'boolean true'); // Key can be of any type

// 4.Size of the Map
console.log(myMap);
console.log(myMap.size); // Output: 4

// 5.Getting values by key
console.log(myMap.get('name')); // Output: John
console.log(myMap.get(1)); // Output: one
console.log(myMap.get(false)); // Output: undefined (key doesn't exist)

// 6.Checking for existence of a key
console.log(myMap.has('age')); // Output: true  
console.log(myMap.has(2)); // Output: false

// 7.Delete key-value pair by key
myMap.delete(1); // Remove key 1 from the map
console.log(myMap.has(1)); // Output: false
console.log(myMap.size); // Output: 3

// Clear the Map
// myMap.clear();
console.log(myMap.size); // Output: 0

// 8.Iterating through the Map
for (let [key, value] of myMap2) {
    console.log(`${key} = ${value}`);
}

// Converting object to map
const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
const mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

// Converting map to object
const mapToObj = Object.fromEntries(myMap2);
console.log(mapToObj); // { key1: 'value1', key2: 'value2', key3: 'value3' }
