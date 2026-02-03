// Set up an array

const tasks = []; // init where todos will go

while (true) {
  // asking for user Input
  let task = prompt("Enter a task (or type 'done' to finish");

  // check if user input is done or done
  if (task.toLowerCase() === "done") {
    break; // if done, break out of while loop
  }

  tasks.push(task); // adding user input to tasks
}

// TO Display Tasks

console.log("Your Todo List:");

for (let i = 0; i < tasks.length; i++) {
  console.log(`${i + 1}. ${tasks[i]}`);
}

// console.log("Your Todo List:");
// tasks.forEach((task, index) => {
//   console.log(`${index + 1}. ${task}`);
// });
