const messageBuilder = {
        createForm() {
                // Message header
                const messageContainer = document.querySelector("#messages-section")
                const messageHeader = document.createElement("h1")
                messageHeader.textContent = "Messages"
                messageContainer.appendChild(messageHeader)

                // Message Form builder
                const message_formWrapper = document.createElement("fieldset")
                message_formWrapper.classList = "message_formWrapper"

                const message_Input = document.createElement("input")
                message_Input.classList = "message_Input"

                const message_sendButton = document.createElement("button")
                message_sendButton.textContent = "SEND"

                const message_Output = document.createElement("textarea")
                message_Output.classList = "message_Output"

                message_formWrapper.appendChild(message_Input)
                message_formWrapper.appendChild(message_sendButton)
                message_formWrapper.appendChild(message_Output)
                messageContainer.appendChild(message_formWrapper)
        }
}

export default messageBuilder