import React from "react"
import MyMessage from "./MyMessage"
import TheirMessage from "./TheirMessage"
import MessageForm from "./MessageForm"

function MyFeed(props){

    const {chats, activeChats, userName, messages} = props
    const chat = chats && chats[activeChats]

    const renderReadReceipts = (message, isMessage) => chat.people.map((person, index) => 
        person.last_read === message.id && (
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMessage ? 'right' : 'left',
                    backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
                }}
            />
        )
    )

    const renderMessages = () => {
        const keys = Object.keys(messages)

        return keys.map((key, index) => {

            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const isMyMessage = userName === message.sender.username

            return (

                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div>
                        {isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} 
                        />}
                    </div>
                    <div>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }

    if (!chat) return <div />

    return(
    
        <div>
            <div>
                <div>{chat?.title}</div>
                <div>
                    {chat.people.map((person) => `${person.person.userName}`)}
                </div>
            </div>
            {renderMessages()}
            <div className=" h-20" />
            <div>
                {/* <MessageForm {...props} chatId={activeChats} /> */}
            </div>
        </div>
    )
}

export default MyFeed
