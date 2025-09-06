let obj ={
    user: "John Doe",
    age:23,
    gender: "Male",
    city: "New York"
}

// for (let key in obj) {
//     console.log(key + ": " + obj[key]);
// }   

let obj2 = Object.create(obj);
obj2.country = "USA";
obj2.occupation = "Software Developer";

// Inherited Properties
console.log(obj2.user); // John Doe
console.log(obj2.age); // 23
console.log(obj2.city); // New York

// Object.keys() only prints the properties of the object itself, not inherited ones
console.log(Object.keys(obj2)); // [ 'country', 'occupation' ]

// for-in loop - It will iterate over all enumerable properties, including inherited ones
for (let key in obj2) {
    console.log(key); // country, occupation, user, age,gender, city
}

// So if we want some value to not get inheritedly printed we use properties of object - enumerable
Object.defineProperty(obj,'age',{
    enumerable:false // this value cant be accesible thorugh for in loop
}); 

for(let key in obj2) { console.log(key) } // country, occupation , user, gender, city
console.log(Object.keys(obj2)) // [ 'country', 'occupation' ]

// hasOwnProperty() - It checks if the property is of the object itself and not inherited
console.log(obj2.hasOwnProperty('user')); // false
console.log(obj2.hasOwnProperty('country')); // true

// To print only the properties of the object itself and not inherited ones using for-in loop
for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
        console.log(key); // country, occupation
    }
}

// To print all properties including inherited ones using Object.getOwnPropertyNames()  & Object.keys()
console.log(Object.getOwnPropertyNames(obj2)); // [ 'country', 'occupation' ]
console.log(Object.keys(obj2)); // [ 'country', 'occupation' ]




