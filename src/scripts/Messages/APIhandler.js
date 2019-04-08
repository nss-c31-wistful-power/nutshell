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
        }
}

export default massageAPI