import taskAPI from "./taskAPI";
import taskForm from "./taskForm"

const clearElement = domElement => {
    while (domElement.firstChild) {
            domElement.removeChild(domElement.firstChild);
    }
}

    const handleAddTask = () => {
        const taskName = document.querySelector("#task-name-input").value;
        const taskDate = document.querySelector("#task-date-input").value;

        console.log("task Values", taskName, taskDate)

        const newTask = {
            name: taskName,
            date: taskDate,
            completed: false
        };

        const output = document.querySelector("#output")

        taskAPI.postTasks(newTask).then(clearElement(output))
        .then(taskForm.listAllTasks)
    }

    const createTaskForm = () => {
        console.log("string")
        const formSection = document.querySelector("#formSection")
        clearElement(formSection);

        const taskFormContainer = document.querySelector("#formSection")
        const taskLabel = document.createElement("label");
        taskLabel.textContent = "Tasks Name: ";

        const taskInput = document.createElement("input");
        taskInput.id = "task-name-input";

        const taskDateLabel = document.createElement("label");
        taskDateLabel.textContent = "Date: ";

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.id = "task-date-input";

        const taskFormButton = document.createElement("button");
        taskFormButton.textContent = "Save Task";
        taskFormButton.addEventListener("click", () => {
        handleAddTask()
        })



        taskFormContainer.appendChild(taskLabel);
        taskFormContainer.appendChild(taskInput);
        taskFormContainer.appendChild(taskDateLabel);
        taskFormContainer.appendChild(dateInput);
        taskFormContainer.appendChild(taskFormButton);




    }


export default createTaskForm