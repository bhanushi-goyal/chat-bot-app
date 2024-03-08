import React, {useState} from "react"
import axios from "axios"

function LoginForm(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        const authObject = { 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
      
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
      
            window.location.reload()
            setError('')
        }
        catch (err) {
            setError('Oops, incorrect credentials.');
        }
    }
      
    return (
        <div>
            <div>
                <h1>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <div align="center">
                        <button type="submit">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>

    )
}

export default LoginForm