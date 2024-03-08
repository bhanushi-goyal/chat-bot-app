import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MyFeed from "./Components/MyFeed"
import LoginForm from "./Components/LoginForm"
import MessageForm from "./Components/MessageForm"
import MyMessage from "./Components/MyMessage"
import TheirMessage from "./Components/TheirMessage"

function App() {
  
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyFeed />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/messageForm" element={<MessageForm />} />
          <Route path="/myMessage" element={<MyMessage />} />
          <Route path="/theirMessage" element={<TheirMessage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
