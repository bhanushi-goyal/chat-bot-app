import React, { useState } from "react"
import {SendOutlined, PictureOutlined} from "@ant-design/icons"
import {sendMessage, isTyping} from "react-chat-engine"

function MessageForm(props){

    const [value, setValue] = useState("")
    const {chatId, creds} = props

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    isTyping(props, chatId)

    const handleSubmit = (event) => {
        event.preventDefault()

        const text = value.trim()

        if (text.length > 0) {
            sendMessage(creds, chatId, { text })
        }

        setValue("")
    }

    /**
        * Handle upload function
        * -    it sends the message from the component of creds and chatId
        *       -   something
        * -    it is used as a onClick function.
        * @param {*} event 
        * @returns {}
    */

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span><PictureOutlined /></span>
            </label>
            <input
                type="file"
                multiple={false}
                onChange={handleUpload.bind(this)}
            />
            <button type="submit"><SendOutlined /></button>
        </form>
    )
}

export default MessageForm
