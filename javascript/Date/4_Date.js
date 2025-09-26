// Date Calculation
let date = new Date();
// // let milliseconds= date.getTime(); // milliseconds since epoch
// // console.log(date.getTime()); // milliseconds 
// let minutes = Math.floor(milliseconds / (60 * 1000));
// // console.log(minutes); // minutes since epoch
// let hours = Math.floor(minutes / 60);
// // console.log(hours); // hours since epoch
// let days = Math.floor(hours / 24);
// // console.log(days); // days since epoch
// let years = Math.floor(days / 365);
// console.log(`Years since epoch: ${years}`); // Years since epoch
const timerInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
let date = new Date();
let date2 = new Date("02-06-2026");
let milliseconds = date2.getTime() - date.getTime(); // milliseconds between two dates
let Years = Math.floor((milliseconds/(1000*60*60*24*365)));
let Remdays = Math.floor((milliseconds/(1000*60*60*24)));
let RemHours = Math.floor((milliseconds/(1000*60*60))%24);
let RemMinutes = Math.floor((milliseconds/(1000*60))%60);
let RemSeconds = Math.floor((milliseconds/(1000))%60);
// console.log(Years);
// console.log(Remdays);
// console.log(RemHours);
// console.log(RemMinutes);
// console.log(RemSeconds);
const displayString = `${Remdays}d ${RemHours}h ${RemMinutes}m ${RemSeconds}s`;
console.log(displayString);
}

// Now Calulate overall 
// console.log(`
//    ${years} ${hours%24} ${minutes%60} ${milliseconds%(60*1000)} `
// );


// let milliseconds = date.getTime(); // Better variable name
// // let min = Math.floor(min/(60*1000));
// let hrs = Math.floor(minutes/60);
// let days = Math.floor(hrs/24);
// let years = Math.floor(days/365);
// console.log(`Years since epoch: ${years}`); // Years since epoch