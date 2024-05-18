// To Do List Project;

// Get the input element with the class "input-task" and store it in a variable named task; ✅
// Get the button element with the class "addBtn" and store it in a variable named button; ✅
const task = document.querySelector(".input-task");
const button = document.querySelector(".addBtn");

let listOfTasks = []; // Initialize an array to store the user's tasks; ✅

// Function to add the value of the task input to the listOfTasks array; ✅
function addingTask() {
  listOfTasks.push(task.value); // Add the value of the task input to the listOfTasks array; ✅
}

// Add an event listener to the button element that listens for a click event and calls the addingTask function when the button is clicked; ✅
button.addEventListener("click", addingTask);
