// for loop

// for (let i = 0; i <= 5; i++) {
//     console.log("Iteration:", i);
// }
// Starts at i = 0
// Runs WHILE i is still less than or equal to 5 ( <= 5; )
// The operator increases i by one each time ( i++ ), until it breaks because it cannot reach 6.
// console.log logs the loops.

// const colors = ["Red", "Green", "Blue", "Yellow"];

// for (let i = 0; i < colors.length; i++) {
//     console.log("i =", i);
//     console.log("colors[i] =", colors[i])
// }

//While loops

// let count = 0;

// while (count <= 5) {
//   console.log("count =", count);
//   count++;
// }

// User Input until correct answer

let userInput;

while (userInput !== "yes") {
  userInput = prompt("Type 'yes' to continue.");
}

console.log("You entered 'yes'");
