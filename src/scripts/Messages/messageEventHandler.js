import messageAPI from "./APIhandler"
import messageBuilder from "./DOMhandler"

const clearElement = domElement => {
        while (domElement.firstChild) {
                domElement.removeChild(domElement.firstChild);
        }
};

const handleMessages = {
        sendMessage() {
                const userId = null
                const message_Input = document.querySelector("#message_Input")

                const message = {
                        messages: message_Input.value,
                        userId: userId
                }
                messageAPI.postMessage(message)
                        .then(clearElement(message_Output))
                        .then(messageBuilder.displayMessages)
        },
        deleteMessage() {
                const message_Output = document.querySelector("#message_Output")
                let messageId = event.target.parentNode.id.split("--")[1]
                messageAPI.deleteMessage(messageId)
                        .then(clearElement(message_Output))
                        .then(messageBuilder.displayMessages)
        },
        editMessage() {
                let messageId = event.target.parentNode.id.split("--")[1]
                messageAPI.getMessage(messageId).then(messageToEdit => {
                        const message = document.querySelector(`#messageCard--${messageId}`)
                        clearElement(message)

                        const updateInput = document.createElement("input")
                        updateInput.value = messageToEdit.messages
                        const updateButton = document.createElement("button")
                        updateButton.textContent = "UPDATE"
                        updateButton.id = `#updateButton--${messageId}`
                        updateButton.addEventListener("click", () => {
                                const message_Output = document.querySelector("#message_Output")
                                let messageId = event.target.parentNode.id.split("--")[1]
                                console.log(messageId)
                                console.log(updateInput.value)
                                const messageToEdit = {
                                        messages: updateInput.value,
                                        userId: null
                                }
                                console.log(messageToEdit)
                                messageAPI.patchMessage(messageToEdit, messageId).then(clearElement(message_Output))
                                .then(messageBuilder.displayMessages)
                        })

                        message.appendChild(updateInput)
                        message.appendChild(updateButton)
                        console.log(messageToEdit)
                })

        }
}

export default handleMessages