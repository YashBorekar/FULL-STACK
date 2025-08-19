/* Comparison Operator

== (Equal to)
=== (Strict Equal to)
!= (Not Equal to)
!== (Strict Not Equal to)
> (Greater than)
< (Less than)
>= (Greater than or Equal to)
<= (Less than or Equal to)
*/

// Number to Number
let a = 10;
let b = 20;
console.log(a == b); // false
console.log(a === b); // false
console.log(a != b); // true
console.log(a !== b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true

// Number to String
let x = 10;
let y = "10";
console.log(x==y); // true (loose equality)
console.log(x===y); // false (strict equality , check type)

// Null & Undefined
console.log(null == undefined); // true (null & undefined can be loosely equal always with each other)
console.log(null === undefined); // false (null -> object, undefined -> type undefined)

// null & 0
console.log(null == 0); // false (null is not equal to 0)
console.log(null === 0); // false (null is not equal to 0)
console.log(null > 0); // false (null is not greater than 0)
console.log(null < 0); // false (null is not less than 0)
console.log(null <= 0); // true (null is considered less than or equal to 0)
console.log(null >= 0); // true (null is considered greater than or equal to 0)

console.log(NaN === NaN); // false (NaN is not equal to anything, including itself) 

let a1 = 123;
let a2= "123";
let a3 = 123;
console.log(a1==a2==a3); // false (a1==a2 -> true , true==a3 -> false)

