let date = new Date();
console.log(date); // Current date and time

// if we pass argument to Date() it will consider it as milliseconds since epoch
let d2 = new Date(1000); // 1000ms - 1second 
console.log(d2); // 1970-01-01T00:00:01.000Z 1second after epoch

// Date(year, month, day, hours, minutes, seconds, milliseconds)
// month is 0-11 (0 - January, 11 - December)

// What if we pass negative value as a parameter
let d3 = new Date(-10000000) // 1000ms - 1second 
console.log(d3); // 1969-12-31T21:13:20.000Z 

let d4 = new Date(2020, 0, 31, 10, 20, 30, 40) //(year, month, day, hours, minutes, seconds, milliseconds0); 
console.log(d4); // 2020-01-31T04:50:30.040Z (UTC time)

// / You created: January 31, 2020, 10:20:30 LOCAL TIME
// Your local timezone is probably UTC+5:30 (India Standard Time)

// Local time:  10:20:30 (what you specified)
// UTC time:    10:20:30 - 5:30 = 04:50:30 (what's displayed)

let d5 = new Date("2020-01-31T10:20:30Z"); // 1 based indexing while using string format
console.log(d5); // 2020-01-31T10:20:30.000Z (UTC time)

