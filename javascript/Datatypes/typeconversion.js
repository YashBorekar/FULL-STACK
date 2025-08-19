// String to Number conversion
function stringToNumber() {
    let acc_num = "10";
    console.log("Original type:", typeof acc_num);
    console.log("Converted value:", Number(acc_num));
    console.log("New type:", typeof Number(acc_num));
    return Number(acc_num);
}

// Boolean to Number conversion
function booleanToNumber() {
    let isActive = true;
    console.log("Original type:", typeof isActive);
    console.log("Converted value:", Number(isActive));
    console.log("New type:", typeof Number(isActive));
    return Number(isActive);
}

// Invalid String to Number (NaN) conversion
function invalidStringToNumber() {
    let invalidNumber = "100sw";
    console.log("Original type:", typeof invalidNumber);
    console.log("Converted value:", Number(invalidNumber));
    console.log("New type:", typeof Number(invalidNumber));
    return Number(invalidNumber);
}

// Null to Number conversion
function nullToNumber() {
    let emptyValue = null;
    console.log("Original type:", typeof emptyValue);
    console.log("Converted value:", Number(emptyValue)); // null is converted to 0
    console.log("New type:", typeof Number(emptyValue));
    return Number(emptyValue);
}

// Undefined to Number conversion
function undefinedToNumber() {
    let undef = undefined;
    console.log("Original type:", typeof undef);
    console.log("Converted value:", Number(undef));
    console.log("New type:", typeof Number(undef));
    return Number(undef);
}

// Number to String conversion
function numberToString() {
    let num = 42;
    console.log("Original type:", typeof num);
    console.log("Converted value:", String(num));
    console.log("New type:", typeof String(num));
    return String(num);
}

// Boolean to String conversion
function booleanToString() {
    let isActive = true;
    console.log("Original type:", typeof isActive);
    console.log("Converted value:", String(isActive));
    console.log("New type:", typeof String(isActive));
    return String(isActive);
}

// Object to String conversion
function objectToString() {
    let obj = { name: "Alice", age: 30 };
    console.log("Original type:", typeof obj);
    console.log("Converted value:", String(obj));
    console.log("New type:", typeof String(obj));
    return String(obj);
}

objectToString();
nullToNumber();