// const fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Declaring and Manipulating Arrays
// console.log(fruits[0]);
// console.log(fruits[2]);

// fruits[1] = "Blueberry";

// console.log(fruits);

// console.log(fruits.length); // Output 3

// Array methods
//push
// fruits.push("Mango");
// console.log(fruits);

// //pop - removes from end
// fruits.pop(); //This removes the element at the end of the array.
// console.log(fruits);

// //shift - removes from beginning
// fruits.shift(); //This removes the element at the beginning of the array.
// console.log(fruits);

// //unshift - adds to beginning
// fruits.unshift("Grapes"); //This adds an element at the beginning of the array.
// console.log(fruits);

// //splice - add / remove elements
// fruits.splice(1, 1, "Watermelon");

// console.log(fruits);

// fruits.splice(1, 2); //This selects index one, and removes two elements without replacing them
// console.log(fruits);

const numbers = [1, 2, 3, 4, 5];
// map
console.log("numbers=", numbers);
const doubled = numbers.map((num) => num * 2);
console.log("doubled =", doubled);
console.log("numbers =", numbers);

//filter
const evenNumbers = numbers.filter((num) => num % 2 === 0); // This asks to give us the ones that can be divided by 2 and returns a module of 0.
console.log(evenNumbers);
