// Nested Objects - Object inside Object 
const user ={
    name:"John",
    age:30,
    address:{
        pincode: 10001,
        street:"123 Main St",
        city:"New York"
    }
}

// Print nested object
console.log(user.address);

// Print Single value in nested object
console.log(user.address.city);

// Copy the nested object
const user2 = Object.assign({}, user);
// console.log(user2);

user2.name = "Doe";
console.log(user); // { name: "John", age: 30, address: { pincode: 10001, street: "123 Main St", city: "New York" } }
console.log(user2); // { name: "Doe", age: 30, address: { pincode: 10001, street: "123 Main St", city: "New York" } }


// HERE the changes made in nested obj of user2 gets automatically reflected to nest obj of user , both are showing same value
user2.address.city = "Los Angeles";
console.log(user2); // { name: "Doe", age: 30, address: { pincode: 10001, street: "123 Main St", city: "Los Angeles" } }
console.log(user); // { name: "John", age: 30, address: { pincode: 10001, street: "123 Main St", city: "Los Angeles" } }

/* the neseted part is creating a shallow copy of user,Therefore, to create a true copy of a nested object, we need to use a deep copy method. */

// Structured Clone
const user3 = structuredClone(user);
user3.name = "Smith";
user3.address.city = "Chicago";
console.log(user); // { name: "John", age: 30, address: { pincode: 10001, street: "123 Main St", city: "Los Angeles" } }
console.log(user3); // { name: "Smith", age: 30, address: { pincode: 10001, street: "123 Main St", city: "Chicago" } }

//It follows the deep copy 