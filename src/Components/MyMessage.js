import React from 'react'

const MyMessage = ({message}) => {

    // const [attachments, setAttachments] = useState([])

    if(message.attachments && message.attachments.length > 0){
        
        return(
            <img src={message.attachments[0].file} alt='attachment' />
        )
    }

    return (

        <div>{message.text}</div>
    )
}

export default MyMessage
