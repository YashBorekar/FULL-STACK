//if-else
let age = 23;
if(age > 18){
    console.log("You are an adult");
}
else{
    console.log("You are a minor");
}

//if-elseif-else
let a = 10;
let b = 23;
let c = 15;
if(a > b && a > c){
    console.log("a is the greatest");
}else if(b > a && b > c){
    console.log("b is the greatest");
}else{
    console.log("c is the greatest");
}

// switch 
// switch uses === strict matching , if you provide string you need to wrap it in quotes    
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}