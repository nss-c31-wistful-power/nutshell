

export default {

getAllTasks() {
    return fetch("http://localhost:8088/tasks").then(taskResponse =>
    taskResponse.json()
    );
},

postTasks(newTask) {
    return fetch ("http://localhost:8088/tasks", {
     method: "POST",
     headers: {
        "content-type": "application/json"
     },
     body: JSON.stringify(newTask)
    })
}
}

// },

// putTask(taskId) {
//    return fetch(`http://localhost:8088/tasks/${taskId}`, {
//         method: "PUT",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(updatedTaskObject)
//     })
// },

// deleteTask(taskId) {
//     return fetch(`http://localhost:8088/tasks/${taskId}`, {
//     method: "DELETE"
// })

// getTask(taskId) {
//     fetch()
// }
// },

// patchTasks(taskId, updatedTaskObject) {
//     fetch(`http://localhost:8088/tasks/${taskId}`, {
//         method: "Patch",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(updatedTaskObject)
//     })
// }





