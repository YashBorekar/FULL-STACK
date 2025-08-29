// assign - copy all properties from one object to another
// Syntax - Object.assign(target, ...sources)

const person = {
    name: "Yash",
    age: 22,
    city: "Digras"
};

const anotherPerson = Object.assign({}, person); // Copy properties from person to anotherPerson
console.log(anotherPerson);

// copy more than one obj

const obj1={a:1,b:2};
const obj2 ={c:3,d:4};
// const c = Object.assign(obj1, obj2); // It will copy properties of both and assign to c , but obj1 will also get changed
// console.log(c); // {a: 1, b: 2, c: 3, d: 4}
// console.log(obj1); // {a: 1, b: 2, c: 3, d: 4}

// To avoid this we use {} , instead of using obj1 as the target

const obj3 = Object.assign({}, obj1, obj2); // It will copy properties of both and assign to obj3 , obj1 will remain unchanged
console.log(obj3); // {a: 1, b: 2, c: 3, d: 4}
console.log(obj1); // {a: 1, b: 2}