import taskAPI from "./taskAPI";

// const taskListeners = {

    const handleAddTask = () => {
        const taskName = document.querySelector("#task-name-input").value;
        const taskDate = document.querySelector("#task-date-input").value;

        console.log("task Values", taskName, taskDate)

        const newTask = {
            name: taskName,
            date: taskDate,
            completed: false
        };

        taskAPI.postTasks(newTask)

    }

    const createTaskForm = () => {
        console.log("string")

        const taskFormContainer = document.querySelector("#tasks-section")
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

// }

export default createTaskForm