
/*
The Math object helps you perform mathematical operations.
You don’t create it — use directly as Math.method().
Example: Math.round(4.6) → 5
*/

console.log("========= JavaScript Math Object (Common Topics) =========");

/* -----------------------------------------------
   🔹 1. Math Constants
   ----------------------------------------------- */
console.log("\n--- Math Constants ---");
console.log("Math.PI =", Math.PI); // 3.14159
console.log("Math.E =", Math.E);   // 2.71828

/* -----------------------------------------------
   🔹 2. Rounding Methods
   ----------------------------------------------- */
console.log("\n--- Rounding Methods ---");

console.log("Math.round(4.6) =", Math.round(4.6)); // Nearest → 5
console.log("Math.ceil(4.2) =", Math.ceil(4.2));   // Round up → 5
console.log("Math.floor(4.9) =", Math.floor(4.9)); // Round down → 4
console.log("Math.trunc(4.9) =", Math.trunc(4.9)); // Remove decimal → 4

/* -----------------------------------------------
   🔹 3. Absolute, Power & Roots
   ----------------------------------------------- */
console.log("\n--- Absolute, Power & Roots ---");

console.log("Math.abs(-8) =", Math.abs(-8));     // 8
console.log("Math.pow(2, 3) =", Math.pow(2, 3)); // 8
console.log("Math.sqrt(16) =", Math.sqrt(16));   // 4
console.log("Math.cbrt(27) =", Math.cbrt(27));   // 3

/* -----------------------------------------------
   🔹 4. Min / Max
   ----------------------------------------------- */
console.log("\n--- Min / Max ---");

console.log("Math.min(3, 6, 2) =", Math.min(3, 6, 2)); // 2
console.log("Math.max(3, 6, 2) =", Math.max(3, 6, 2)); // 6

/* -----------------------------------------------
   🔹 5. Random Numbers
   ----------------------------------------------- */
console.log("\n--- Random Numbers ---");

// Basic random between 0 and 1
console.log("Math.random() =", Math.random());

// Random integer 0–9
console.log("Random int 0–9 =", Math.floor(Math.random() * 10));

// Function: Random integer between min & max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random int 1–6 =", getRandomInt(1, 6)); // Simulates dice roll

/* -----------------------------------------------
   🔹 6. Sign Function
   ----------------------------------------------- */
console.log("\n--- Sign Function ---");

console.log("Math.sign(-10) =", Math.sign(-10)); // -1
console.log("Math.sign(0) =", Math.sign(0));     // 0
console.log("Math.sign(10) =", Math.sign(10));   // 1

/* -----------------------------------------------
   🔹 7. Basic Trigonometry (Radians)
   ----------------------------------------------- */
console.log("\n--- Trigonometric Functions ---");

console.log("Math.sin(Math.PI / 2) =", Math.sin(Math.PI / 2)); // 1
console.log("Math.cos(0) =", Math.cos(0));                     // 1
console.log("Math.tan(Math.PI / 4) =", Math.tan(Math.PI / 4)); // 1

/* -----------------------------------------------
   🔹 8. Handy Utilities
   ----------------------------------------------- */

// Round to specific decimal places
function roundTo(num, decimals) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
console.log("\nRound 3.14159 to 2 decimals =", roundTo(3.14159, 2)); // 3.14

// Clamp a value within a range
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
console.log("Clamp 15 between 0–10 =", clamp(15, 0, 10)); // 10

console.log("\n========= End of Common Math Topics =========");