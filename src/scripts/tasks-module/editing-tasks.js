
 const buildTaskHTML = () =>  {

const taskEditContainer = buildElement("article", `task--${taskObject.id}`);

 let editTaskButton = buildElement("button", undefined, "Edit Task")
 taskEditContainer.appendChild(editTaskButton);
 editTaskButton.addEventListener("click", handleEdit)

 let deleteTaskButton = buildElement("button", undefined, "Delete Task")
 taskEditContainer.appendChild(deleteTaskButton);
 deleteTaskButton.addEventListener("click", handleDelete)
 return taskEditContainer;
},

const taskEditForm = (taskObject) => {
    let editFormFragment = document.createDocumentFragment()

    editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
    editFormFragment.appendChild(buildElement("input", `edit-task-name--${taskObject.id}`, undefined, taskObject.name))

    editFormFragment.appendChild(buildElement("label", undefined, "Date: "))
    editFormFragment.appendChild(buildElement("input", `edit-task-date--${taskObject.id}`, undefined, taskObject.date))

    editFormFragment.appendChild(buildElement("label", undefined, "Completed: "))
    let taskCompletedT = buildElement("input", `edit-task-completed--${taskObject.id}`, undefined, taskObject.completed)
    taskCompletedT.type = "radio"
    taskCompletedT.name = "completed"
    taskCompletedT.value = true;
    editFormFragment.appendChild(taskCompletedT)
    editFormFragment.appendChild(buildElement("label", undefined, "Not Completed: "))
    let taskCompletedF = buildElement("input", `edit-task-completed--${taskObject.id}`, undefined, taskObject.completed)
    taskCompletedF.type = "radio"
    taskCompletedF.name = "completed"
    taskCompletedF.value = false;
    editFormFragment.appendChild(taskCompletedF)

    const updateTaskButton = buildElement("button", undefined, "Update")
    updateTaskButton.addEventListener("click", handleUpdate)
    editFormFragment.appendChild(updateTaskButton)

    return editFormFragment;
},

const handleDelete = () => {
    console.log(
      "delete button clicked",
      event.target.parentNode.id.split("--")[1]
    );
    let taskId = event.target.parentNode.id.split("--")[1];

    deleteTask(taskId).then(() => getAllTasks());
  };

  const handleCompleteTask = () => {
    console.log(
      "completed button clicked",
      event.target.parentNode.id.split("--")[1]
    );
    let taskId = event.target.parentNode.id.split("--")[1];

    let completeTask = {
      completed: true
    };

    patchTasks(taskId, completeTask).then(() => getAllTasks());
  };

  const handleEditTask = () => {
    console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
    let taskId = event.target.parentNode.id.split("--")[1];

    const taskSection = document.querySelector(`#output${taskId}`);
    clearElement(taskSection);

    getTask(taskId).then(taskToEdit => {
      const editFormForTask = taskEditForm(taskToEdit);
      taskSection.appendChild(editFormForTask);
    });
  };

  const handleUpdateTask = () => {
    console.log(
      "update button clicked",
      event.target.parentNode.id.split("--")[1]
    );
    let taskId = event.target.parentNode.id.split("--")[1];

    const editedTaskName = document.querySelector(`#edit-task-name--${taskId}`);
    const editedTaskDate = document.querySelector(`#edit-task-date--${taskId}`);
    let radioButtonValue = document.querySelector(`input[name="complete"]:checked`).value;

    console.log(editedTaskName.value, editedTaskDate.value);

    let editedTask = {
      name: editedTaskName.value,
      state: editedTaskDate.value,
      completed: (radioButtonValue === "true")
    };

    putTasks(taskId, editedTask).then(() => listAllTasks());
  };
