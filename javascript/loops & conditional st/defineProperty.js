// Writeable , ENumerable, Configurable
const obj = {
    property1: 42,
    property2: 'Hello',
    property3: true
};


// Object.defineProperty(obj, 'property1', {
//     value: 42,
//     writable: true,  // It can be changed
//     enumerable: true, // It will show up in for-in loops and Object.keys()
//     configurable: true // It can be deleted or reconfigured
// });

// for(let val in obj){
//     console.log(val);
// }

// Object.defineProperty(obj, 'property2', {
//     value: 'Hello',
//     writable: false, // It cannot be changed
//     enumerable: true, // It will show up in for-in loops and Object.keys()
//     configurable: true // It can be deleted or reconfigured
//     });

// obj.property2 = "World"; // This will not change the value
// console.log(obj.property2); // Output: Hello

Object.defineProperty(obj,'property3',{
   enumerable:false, // It will not show up in for-in loops and Object.keys()
})

for(let val in obj){
    console.log(val); // property1, property2
}

console.log(Object.keys(obj)); // [ 'property1', 'property2' ]




