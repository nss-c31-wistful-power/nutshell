

const taskAPI = {
getAllTasks() {
    return fetch("http://localhost:8088/tasks").then(taskResponse =>
    taskResponse.json()
    );
}
,

postTasks(newTask) {
    return fetch ("http://localhost:8088/tasks", {
     method: "POST",
     headers: {
        "content-type": "application/json"
     },
     body: JSON.stringify(newTask)
    }).then(response => response.json());

}

}

export default taskAPI