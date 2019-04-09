const massageAPI = {
        getAllMessages() {
                return fetch("http://localhost:8088/messages")
                        .then(response => response.json())
        },
        getMessage(messageId) {
                return fetch(`http://localhost:8088/messages/${messageId}`)
                        .then(entries => entries.json())
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
        patchMessage(messageToEdit, messageId) {
                return fetch(`http://localhost:8088/messages/${messageToEdit}`, {
                        method: "PATCH",
                        body: JSON.stringify(messageToEdit, messageId),
                        headers: {
                                "Content-Type": "application/json"
                        }
                })
        }
}
export default massageAPI