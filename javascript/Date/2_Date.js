let date = new Date();
console.log(date.getDate()) // 26
console.log(date.getDay())  // 0 - Sunday, 6 - Saturday
console.log(date.getFullYear()) // 2024
console.log(date.getHours()) // 14 (2 PM in 24-hour format)
console.log(date.getMinutes()) // 34
console.log(date.getMonth()) // 5 (0 - January, 5 - June)
console.log(date.getSeconds()) // 45
console.log(date.getMilliseconds()) // 123 (0-999)
console.log(date.getTime()) // milliseconds since epoch (January 1, 1970)
console.log(Date.now()) // milliseconds since epoch (January 1, 1970)
console.log(date.getTimezoneOffset()) // difference in minutes between UTC and local time

