const massageAPI = {
        getMessages() {
                return fetch("http://localhost:8088/messages")
                .then(response => response.json())
        }
}

export default massageAPI