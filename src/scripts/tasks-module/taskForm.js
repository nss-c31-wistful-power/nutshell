import taskAPI from "./taskAPI";
import taskListeners from "./task-list"
//task-section     is the container


const taskForm = {
buildTaskForm() {

        console.log("hello world")
const displayContainer = document.querySelector("#tasks-section")


const addTaskButton = document.createElement("button");
addTaskButton.textContent = "Add Task";
displayContainer.appendChild(addTaskButton)
addTaskButton.addEventListener("click", taskListeners.createTaskForm)

    },

    listAllTasks(){
        taskAPI.getAllTasks().then(taskresponse => {
            console.log(taskresponse)
        })

    },

setupTasksContainer() {
    const taskSection = document.createElement("section");
    taskSection.id = "tasks-container";
    const taskContainer = document.querySelector("#tasks-container")
    taskContainer.appendChild(taskSection);
}

};

export default taskForm;