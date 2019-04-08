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
                const message = document.querySelector(`#messageCard--${messageId}`)
                messageAPI.deleteMessage(messageId)
                .then(clearElement(message_Output))
                .then(messageBuilder.displayMessages)
        },

}

export default handleMessages