const user = {
    name:"Peter",
    age:25,
    address:{
        street:"123 Main St",
        city:"New York",
        zip:10001
    }
}

// const{name,age} = user;
// console.log(name); // Peter
// console.log(age); // 25

// Destructuring nested object -Method 1
const { street, city, zip } = user.address;
console.log(street); // 123 Main St
console.log(city); // New York
console.log(zip); // 10001

// // Destructuring nested object - Method 2
// const { address: { street, city, zip } } = user;
// console.log(street); // 123 Main St
// console.log(city); // New York
// console.log(zip); // 10001

// // Wrapping up all
// const { name, age, address: { street, city, zip } } = user;
// console.log(name); // Peter
// console.log(age); // 25
// console.log(street); // 123 Main St
// console.log(city); // New York
// console.log(zip); // 10001


/* Rest Operator - Rest operator(...) is used to collect the remaining properties of an object */
const {name,...obj} = user;
console.log(name); // Peter
console.log(obj); // { age: 25, address: { street: '123 Main St', city: 'New York', zip: 10001 } }
