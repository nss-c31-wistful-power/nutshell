// import domManager from "./dom-manager"

// export default {


//    taskEditForm(taskObject) {
//         let editFormFragment = document.createDocumentFragment()

//         editFormFragment.appendChild(domManager.buildElement("label", undefined, "Name: "))
//         editFormFragment.appendChild(domManager.buildElement("input", `edit-task-name--${taskObject.id}`, undefined, taskObject.name))

//         editFormFragment.appendChild(domManager.buildElement("label", undefined, "Date: "))
//         editFormFragment.appendChild(domManager.buildElement("input", `edit-task-date--${taskObject.id}`, undefined, taskObject.date))

//         editFormFragment.appendChild(domManager.buildElement("label", undefined, "Completed: "))
//         let taskCompletedT = domManager.buildElement("input", `edit-task-completed--${taskObject.id}`, undefined, taskObject.completed)
//         taskCompletedT.type = "radio"
//         taskCompletedT.name = "completed"
//         taskCompletedT.value = true;
//         editFormFragment.appendChild(taskCompletedT)
//         editFormFragment.appendChild(domManager.buildElement("label", undefined, "Not Completed: "))
//         let taskCompletedF = domManager.buildElement("input", `edit-task-completed--${taskObject.id}`, undefined, taskObject.completed)
//         taskCompletedF.type = "radio"
//         taskCompletedF.name = "completed"
//         taskCompletedF.value = false;
//         editFormFragment.appendChild(taskCompletedF)

//         const updateTaskButton = domManager.buildElement("button", undefined, "Update")
//         updateTaskButton.addEventListener("click", handleUpdate)
//         editFormFragment.appendChild(updateTaskButton)

//         return editFormFragment;
//       },

//       handleDelete() {
//         let taskId = event.target.parentNode.id.split("--")[1];

//        deleteTask(taskId).then(() => getAllTasks());

//       },

//       handleCompleteTask() {
//       console.log(
//       "completed button clicked",
//       event.target.parentNode.id.split("--")[1]
//     );
//     let taskId = event.target.parentNode.id.split("--")[1];

//     let completeTask = {
//       completed: true
//     };

//     patchTasks(taskId, completeTask).then(() => getAllTasks());
//   },

//     handleEditTask() {
//     console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
//     let taskId = event.target.parentNode.id.split("--")[1];

//     const taskSection = document.querySelector(`#output${taskId}`);
//     clearElement(taskSection);

//     getTask(taskId).then(taskToEdit => {
//       const editFormForTask = taskEditForm(taskToEdit);
//       taskSection.appendChild(editFormForTask);
//     });
//   },

//   handleUpdateTask() {
//     console.log(
//       "update button clicked",
//       event.target.parentNode.id.split("--")[1]
//     );

//     let taskId = event.target.parentNode.id.split("--")[1];

//     const editedTaskName = document.querySelector(`#edit-task-name--${taskId}`);
//     const editedTaskDate = document.querySelector(`#edit-task-date--${taskId}`);
//     let radioButtonValue = document.querySelector(`input[name="complete"]:checked`).value;

//     console.log(editedTaskName.value, editedTaskDate.value);

//     let editedTask = {
//       name: editedTaskName.value,
//       state: editedTaskDate.value,
//       completed: (radioButtonValue === "true")
//     };

//     putTasks(taskId, editedTask).then(() => listAllTasks());
//   }
// }