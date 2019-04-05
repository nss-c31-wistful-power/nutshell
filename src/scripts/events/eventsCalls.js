export default {
    getEventsList() {
        return fetch("http://localhost:8088/events").then(response => response.json())
    },
    // Save new events to database.json (from button)

    postEventsToList(updatedEvent) {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedEvent)
        })
    }
}
