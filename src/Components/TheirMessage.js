import React from 'react'

<<<<<<< HEAD
=======

//new comment for checking purpose

>>>>>>> main
const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username

    return (
        <div>
            {isFirstMessageByUser && (
                <div
                  style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
                />
            )}
            {message.attachments && message.attachments.length > 0 ?
                (
                    <img src={message.attachments[0].file} alt="message-attachment" />
<<<<<<< HEAD
                )
                
                :
                
=======
                ):
>>>>>>> main
                (
                    <div>{message.text}</div>
                )
            }
        </div>
    )
}
    
export default TheirMessage
    