const eventsGet = {
    getEventsList() {
        return fetch("http://localhost:8088/events").then(response => response.json())
    },
}
    // Save new events to database.json (from button)
const eventsPost ={
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

export default eventsGet
export default eventsPost
