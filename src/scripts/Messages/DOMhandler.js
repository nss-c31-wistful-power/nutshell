import messageAPI from "./APIhandler"
import handleMessages from "./messageEventHandler"

const messageBuilder = {
        createForm() {
                // Message header
                const messageContainer = document.querySelector("#messages-section")
                const messageHeader = document.createElement("h1")
                messageHeader.textContent = "MESSAGES"
                messageContainer.appendChild(messageHeader)

                // Message Form builder
                const message_formWrapper = document.createElement("div")
                message_formWrapper.classList = "message_formWrapper"

                const message_Input = document.createElement("input")
                message_Input.id = "message_Input"

                const message_sendButton = document.createElement("button")
                message_sendButton.textContent = "SEND"
                message_sendButton.id = "message_sendButton"
                message_sendButton.addEventListener("click", handleMessages.sendMessage)

                const message_Output = document.createElement("div")
                message_Output.id = "message_Output"

                message_formWrapper.appendChild(message_Input)
                message_formWrapper.appendChild(message_sendButton)
                message_formWrapper.appendChild(message_Output)
                messageContainer.appendChild(message_formWrapper)
        },
        displayMessages() {
                messageAPI.getMessages()
                        .then(data => data.forEach(entry => {
                                const messageContainer = document.querySelector("#messages-section")
                                const message_Output = document.querySelector("#message_Output")
                                const messageCard = document.createElement("div")
                                messageCard.id = `messageCard--${entry.id}`
                                const userMessage = document.createElement("p")
                                userMessage.textContent = entry.messages

                                const deleteButton = document.createElement("button")
                                deleteButton.classList = "deleteButton"
                                deleteButton.textContent = "DELETE"
                                deleteButton.id = `deleteButton--${entry.id}`
                                deleteButton.addEventListener("click", handleMessages.deleteMessage)

                                const editButton = document.createElement("button")
                                editButton.textContent = "EDIT"

                                messageContainer.appendChild(message_Output)
                                message_Output.appendChild(messageCard)
                                messageCard.appendChild(userMessage)
                                messageCard.appendChild(editButton)
                                messageCard.appendChild(deleteButton)
                        }))
        }
}

export default messageBuilder