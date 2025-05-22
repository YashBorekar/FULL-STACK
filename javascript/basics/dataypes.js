var a = 10;
var b = a;
b+=2;
console.log(a);
console.log(b);        // primitive types are always pass by value

var arr = [1,2,3,4,23,4,2];
var arr2 = arr;

console.log(arr);
console.log(arr2);     
arr2.pop();
console.log(arr);
console.log(arr2);     // primitive types are always pass by value

var a = 10;
var a = 10.2;
var a = 'a';
var a = "Yash";
var a = true;
var a = [];
var a = { name: "Alice", age: 25 };
var a = function greet() {};
