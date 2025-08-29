// Function in Object
let user = {
    name: "Rohit",
    amount: 420,
    greet: function(){
        console.log("Hello COder Army");
    },
    meet: function(){
        return 20;
    }
}

console.log(user.greet());
console.log(user.meet());

console.log(user.toString());

