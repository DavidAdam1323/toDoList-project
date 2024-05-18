// To Do List Project;

// Get the input element with the class "input-task" and store it in a variable named task; ✅
// Get the button element with the class "addBtn" and store it in a variable named button; ✅
const task = document.querySelector(".input-task");
const button = document.querySelector(".addBtn");

let listOfTasks = []; // Initialize an array to store the user's tasks; ✅

// Function to add the value of the task input to the listOfTasks array; ✅
function addingTask() {
  listOfTasks.push(task.value); // Add the value of the task input to the listOfTasks array; ✅
  task.value = ""; // Clear the input field after adding the task; ✅
  console.log(listOfTasks);
}

// Add an event listener to the button element that listens for a click event and calls the addingTask function when the button is clicked; ✅
button.addEventListener("click", addingTask);

// Event listener for the "Enter" key; ✅
// Function to handle keypress event on the task input field; ✅
task.addEventListener("keypress", function (event) {
  // Check if the key pressed is the "Enter" key; ✅
  if (event.key === "Enter") {
    addingTask(); // Call the addingTask function to add the task to the list; ✅
  }
});
