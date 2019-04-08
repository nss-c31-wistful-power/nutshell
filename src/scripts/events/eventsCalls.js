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
        }).then(response => response.json())
    },

    deleteEventsFromList(deletedEvent) {
        return fetch("http://localhost:8088/events", {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(deletedEvent)
        }).then(response => response.json())
    },

    editEvent(editedEvent) {
        return fetch("http://localhost:8088/events", {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(editedEvent)
        }).then(response => response.json())
    }
}
