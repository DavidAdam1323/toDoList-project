// To Do List Project;

// Get the input element with the class "input-task" and store it in a variable named task; ✅
// Get the button element with the class "addBtn" and store it in a variable named button; ✅
const task = document.querySelector(".input-task");
const button = document.querySelector(".addBtn");

// Select the element with the class "list-tasks" and store it in the fullList variable; ✅
const fullList = document.querySelector(".list-tasks");

let listOfTasks = []; // Initialize an array to store the user's tasks; ✅

// Function to add the value of the task input to the listOfTasks array; ✅
function addingTask() {
  listOfTasks.push({
    task: task.value,
    complete: false,
  }); // Add the value of the task input to the listOfTasks array; ✅
  task.value = ""; // Clear the input field after adding the task; ✅

  // console.log(listOfTasks);

  displayTask();
}

// Function to display tasks in the list; ✅
function displayTask() {
  let newTask = ""; // Initialize an empty string to store the new task HTML elements; ✅

  // Iterate through each task in the listOfTasks array; ✅
  listOfTasks.forEach((task, index) => {
    // Create HTML elements for each task and append them to the newTask string; ✅
    newTask =
      newTask +
      `
  <li class="task ${task.complete && "done"}">
    <img src="./images/checked.png" alt="check-icon" onclick="completedTask(${index})"/>
    <p>${task.task}</p>
    <img src="./images/trash.png" alt="trash-icon" onclick="removeItem(${index})"/>
  </li>
  `;
  });

  // Update the content of the fullList element with the newTask string; ✅
  fullList.innerHTML = newTask;
}

// Function to toggle the completion status of a task in the listOfTasks array at the specified index; ✅
function completedTask(index) {
  listOfTasks[index].complete = !listOfTasks[index].complete; // Toggle the completion status of the task at the given index; ✅

  // console.log(index);

  displayTask(); // Update the task list display; ✅
}

// Function to remove an item from the listOfTasks array based on the index; ✅
function removeItem(index) {
  listOfTasks.splice(index, 1); // Remove the item at the specified index from the listOfTasks array; ✅

  // console.log(index);

  displayTask(); // Call the displayTask function to update the task list display; ✅
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
