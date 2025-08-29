// Function - If we want to perform same task again and again in code then instead of writing same code various times
//            we write the code in the block named function and can call that code anytime we want

// Create function

function greet() {
    console.log("Hello World");
}

greet();  // calling function
greet();

// With Parameters
function sum(number1,number2) {
    console.log(number1+number2)
};

function multiply(number1,number2) {
    return (number1*number2);
};
      
sum(3,4); // 3,4 -> Arguments
console.log(multiply(10,15));