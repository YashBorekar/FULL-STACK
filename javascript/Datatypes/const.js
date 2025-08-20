// const type
/* Values of variables declared as const cannot be changed it reamins constant */

/* Primitive type */
const a = 10;
console.log(a);
// a=11; // TypeError: Assignment to constant variable.


const name = "Yash";
// name ="l"; // TypeError: Assignment to constant variable.


/* Non Primitve */
const obj1 = {
    id:1,
    name:"Yash"
};
console.log(obj1); // { id: 1, name: 'Yash' }

obj1.id=2;  // actual valus of object can be changed
console.log(obj1); //{ id: 2, name: 'Yash' }

let obj2 = {
    id:3,
    name:"shreyash"
};

// obj1 = obj2; // TypeError: Assignment to constant variable. Cannot replace address of  object;



