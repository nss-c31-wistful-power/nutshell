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
        }
//         editMessage(articleToEdit) {
//                 return fetch(`http://localhost:8088/messages/${articleToEdit}`, {
//                         method: "PUT",
//                         body: JSON.stringify(articleToEdit),
//                         headers: {
//                                 "Content-Type": "application/json"
//                         }
//         })
}

export default massageAPI