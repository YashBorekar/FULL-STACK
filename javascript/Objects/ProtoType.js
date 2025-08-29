let arr = [1, 2, 3];
console.log(arr.__proto__);

let arr2 = arr.__proto__;
console.log(arr2);

let obj1 = { a: 1, b: 2 };
console.log(obj1.__proto__);

let obj2 = new Object();
obj2.c = 3;
obj2.d = 4;
obj2 = obj1.__proto__;

console.log(obj2.a);