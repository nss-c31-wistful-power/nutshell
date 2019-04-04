export default {
    getEventsList() {
        return fetch("http://localhost:8088/events").then(response => response.json())
    },

    postEventsToList() {
        return fetch("http://localhost:8088/events"), {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(event)
        }
        .then(response => response.json()); 
    }
}

