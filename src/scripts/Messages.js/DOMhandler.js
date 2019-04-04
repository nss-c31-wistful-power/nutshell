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
                const message_formWrapper = document.createElement("fieldset")
                message_formWrapper.classList = "message_formWrapper"

                const message_Input = document.createElement("input")
                message_Input.id = "message_Input"

                const message_sendButton = document.createElement("button")
                message_sendButton.textContent = "SEND"
                message_sendButton.addEventListener("click", handleMessages.sendMessage)

                const message_Output = document.createElement("textarea")
                message_Output.id = "message_Output"

                message_formWrapper.appendChild(message_Input)
                message_formWrapper.appendChild(message_sendButton)
                message_formWrapper.appendChild(message_Output)
                messageContainer.appendChild(message_formWrapper)
        },
        displayMessages() {
                messageAPI.getMessages()
                        .then(data => data.forEach(message => {
                                console.log(message)
                        }))
        }
}

export default messageBuilder