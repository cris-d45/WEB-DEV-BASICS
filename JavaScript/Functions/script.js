//Function basics, declaring and calling (Example)
// function greet() {
//   console.log("Hello, welcome to javascript");
// }

// greet(); // calling the function

// function greetUser(name) {
//   console.log(`Hello, ${name}!`);
// }

// greetUser("Alice");
// greetUser("Bob");
// greetUser("Charles");

//Functions with Multiple Parameters
// function addNumbers(num1, num2, num3) {
//   console.log(`Sum: ${num1 + num2 + num3}`);
// }

// addNumbers(1, 2, 3); // Output: 6
// addNumbers(5, 10); //Output: 15
// addnumbers(10, 10); //Output: 20

// Arrow Functions and Function Expressions

// const greet = function (name) {
//   return `Hello, ${name}`;
// };

// console.log(greet("Alice"));

//Arrow Functions (Shorter Syntax)
// const square = (num) => num ** 2;
// console.log(square(5)); // output: 25

//Arrow Functions with multiple parameters: () => {}
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(3, 4)); // Output : 12
