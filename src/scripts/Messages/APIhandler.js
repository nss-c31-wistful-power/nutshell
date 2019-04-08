const massageAPI = {
        getMessages() {
                return fetch("http://localhost:8088/messages")
                        .then(response => response.json())
        },
        postMessage(message) {
                return fetch("http://localhost:8088/messages", {
                        method: "POST",
                        body: JSON.stringify(message),
                        headers: {
                                "Content-Type": "application/json"
                        }
                })
                        .then(response => response.json())
        },
        deleteMessage(messageId) {
                return fetch(`http://localhost:8088/messages/${messageId}`, {
                        method: "DELETE",
                })
        },
        editMessage() {
                return fetch(`http://localhost:8088/messages/${}`, {
                        method: "PUT",
                        body: JSON.stringify(message),
                        headers: {
                                "Content-Type": "application/json"
                        }
        })
}

export default massageAPI