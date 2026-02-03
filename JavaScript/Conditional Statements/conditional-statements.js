// // if statement

// let temperature = 30; // number that is 21

// if (temperature > 25) {
//   console.log("It's a hot day, stay hydrated!");
// } // since we're using the comparison operator, if the temperature was lower than 25, the console log would disappear.

//if...else if...else

// const marks = 100;

// if (marks >= 90) {
//   console.log("Grade: A");
// } else if (marks >= 80) {
//   console.log("Grade: 80");
// } else if (marks >= 70) {
//   console.log("Grade: C");
// } else if (marks >= 60) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }

// checking for multiple conditions with ( &&, || ) These are AND and OR operators

// const age = 18;
// const hasDrivingLicense = true;

// if (age >= 18 && hasDrivingLicense) {
//   console.log("You can drive");
// } else {
//   console.log("you can not drive");
// }

// if (age >= 18 || hasDrivingLicense) {
//   console.log("You can drive");
// } else {
//   console.log("you can not drive");
// }

// Ternary Operator ( ? : )

const isLoggedIn = true;

const msg = isLoggedIn ? "Welcome back!" : "Please log in";

console.log(msg);
