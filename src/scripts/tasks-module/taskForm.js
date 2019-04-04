import task from "./task";
import taskListeners from "./task-list"
//task-section     is the container


const taskForm = {
    buildTaskForm() {
        
        console.log("hello world")
const taskContainer = document.querySelector("#tasks-section")


const addTaskButton = document.createElement("button");
addTaskButton.textContent = "Add Task";
taskContainer.appendChild(addTaskButton)
addTaskButton.addEventListener("click", taskListeners.createTaskForm)

// const taskLabel = document.createElement("label");
// taskLabel.textContent = "Tasks Name: ";

// const taskInput = document.createElement("input");
// taskInput.id = "task-name-input";
   
// const taskDateLabel = document.createElement("label");
// taskDateLabel.textContent = "Date: ";

// const dateInput = document.createElement("input");
// dateInput.type = "date";
// dateInput.id = "task-date-input"


    }
};

export default taskForm;