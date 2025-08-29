/* Method 1 of Object Declaration */
// 1. creating object 
const person={
    name:`Yash`,
    age:22,
    city:`Digras`
}

//2. Access the properties of the object

console.log(person.name);
console.log(person.age);
console.log(person.city);

// 3. Modify / update 
person.name = "Suraj";
person.age = 23;
person.city = "Digras";

// 4. Keys are usually considered as Strings you can use "" for keys , without "" you can't use whitespace

const person1={
    "Full name": "shreyash",
    "age": 22,
    "city": "Digras"
}
console.log(person1["Full name"]); // Output: shreyash
console.log(person1["age"]); // Output: 22
console.log(person1["city"]); // Output: Digras

// 5. Using Numbers as a key 
const person2={
    0: "raj",
    1: 22,
    2: "Digras"
}
console.log(person2[0]); // Output: raj
console.log(person2["1"]); // Output: 22
console.log(person2[2]); // Output: Digras


/* Method 2 of Object Declaration */
// 1. creating object 
const user = new Object();

// 2. add properties
user.name = "Golu";
user.age = 22;
user.city = "Mumbai";

/* Method 3 of Object Declaration */
const user1 = Object.create(null);
user1.name = "Golu";
user1.age = 22;
user1.city = "Mumbai";

/* Method 4 of Object Declaration */
class people {
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

let pep1 = new people("Ritesh", 25, "Nagpur");
let pep2 = new people("Suresh", 26, "Pune");
let pep3 = new people("Mahesh", 27, "Delhi");

// if we want to create multiple objects of same prototype this method is prefferable always

/* Aceessing only keys and values */
console.log(Object.keys(person)); // Output: [ 'name', 'age', 'city' ]
console.log(Object.values(person)); // Output: [ 'Suraj', 23, 'Digras' ]
