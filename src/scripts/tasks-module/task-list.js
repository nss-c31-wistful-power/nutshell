import form from "./task";

const taskListeners = {

    createTaskForm() {
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
        //taskFormButton.addEventListener("click", )

        

        taskFormContainer.appendChild(taskLabel);
        taskFormContainer.appendChild(taskInput);
        taskFormContainer.appendChild(taskDateLabel);
        taskFormContainer.appendChild(dateInput);
        taskFormContainer.appendChild(taskFormButton);

    

        return taskFormContainer;
    }
}

export default taskListeners