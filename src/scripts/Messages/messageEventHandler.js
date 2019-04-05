import messageAPI from "./APIhandler"

const handleMessages = {
        sendMessage() {
                const userId = ""
                const message_Input = document.querySelector("#message_Input")

                const message = {
                        messages: message_Input.value,
                        userId: userId
                }
                messageAPI.postMessage(message)
        }
}

export default handleMessages