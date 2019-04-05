

const taskAPI = {
getAllTasks() {
    return fetch("http://localhost:8088/tasks").then(taskResponse =>
    taskResponse.json()
    );
}
,

postTasks(task) {
    return fetch ("http://localhost:8088/tasks", {
     method: "POST",
     headers: {
        "content-type": "application/json"
     },
     body: JSON.stringify(task)
    }).then(response => response.json());

}

}

export default taskAPI