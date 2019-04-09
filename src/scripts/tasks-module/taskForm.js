import taskAPI from "./taskAPI";
import taskListeners from "./task-list"
//tasks-section     is the container


const taskForm = {
buildTaskForm() {
console.log("hello world")

    const displayContainer = document.querySelector("#tasks-section")
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add Task";
    displayContainer.appendChild(addTaskButton)
    const formSection = document.createElement("section");
    formSection.id = "formSection";
    displayContainer.appendChild(formSection);
    const output = document.createElement("article");
    output.id = "output";
    displayContainer.appendChild(output);
    addTaskButton.addEventListener("click", taskListeners)
},

listAllTasks(){
    taskAPI.getAllTasks().then(taskResponse => {
    console.log(taskResponse);

    const output = document.querySelector("#output")

    taskResponse.forEach(task => {

        const taskSection = document.createElement("div");

        const taskHeader = document.createElement("h3");
        const taskParagraph = document.createElement("p");

        taskHeader.textContent = task.name;
        taskParagraph.textContent = task.date;

        taskSection.appendChild(taskHeader);
        taskSection.appendChild(taskParagraph);
        output.appendChild(taskSection);
    })

    });

    }
}


export default taskForm;