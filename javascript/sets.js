// Set - set stores the unique values of any type, whether primitive values or object references. which make it
// different from arrays that allow duplicate values.


// 1.Creating a Set with initial values
const mySet2 = new Set([1, 2, 3, 4, 5, 5, 5]); // Duplicate values will be ignored
console.log(mySet2); // Output: Set(5) { 1, 2, 3, 4, 5 }

// 2.Creating a Set 
const mySet = new Set();
console.log(typeof mySet); // object


// 3.Adding values to the Set
mySet.add(1);
mySet.add(5);
mySet.add('some text');

// 4.Size of the Set
console.log(mySet);
console.log(mySet.size); // Output: 3

// 5.Delete element from the Set
mySet.delete(5); // Remove 5 from the set

// 6.Checking for existence of an element
console.log(mySet.has(5)); // Output: false
console.log(mySet.size); // Output: 2

// Clear the Set
// mySet.clear();
console.log(mySet.size); // Output: 0

// Iterating through the Set
for (let item of mySet2) {
    console.log(item);
}

// Converting array to set to remove duplicates
const arr =[1,2,3,3,4,5,6,7,7,2,1,4];
const set = new Set(arr);
console.log(set);

// Converting set back to array
const uniqueArray = [...set];
console.log(uniqueArray);

// Make union of two sets
const setA = new Set([1,1,2,4,5,6]);
const setB = new Set([1,3,2,5,2,3,6,7])
const union_set = new Set([...setA,...setB]);
console.log(union_set);

// Intersection of set
let arr3 = [...setA].filter((num)=>{if(setB.has(num)){return num;}})
console.log(arr3);


// Objects and sets
const obj = { a: 1, b: 2 };
const obj2 = obj; // obj2 references the same object as obj
mySet.add(obj);
mySet.add(obj2); // obj2 is considered a duplicate because it references the same object
mySet.add(1); // Duplicate value, will be ignored
console.log(mySet); // Output: Set(4) { 1, 5, 'some text', { a: 1, b: 2 } }

const obj3 = { a: 1, b: 2 };
mySet.add(obj3); // obj3 is a different object (reference), will be added
console.log(mySet); // Output: Set(5) { 1, 5, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }

