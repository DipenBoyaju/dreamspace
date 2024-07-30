import { useState } from 'react'
import './chat.scss'

const Chat = () => {
  const [chat, setChat] = useState(true)
  return (
    <div className="chat">
      <h2>Messages</h2>
      <div className="messages">
        <div className="message">
          <img src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>John Doe</span>
          <p>Lorem Ipsum dolor sit...</p>
        </div>
        <div className="message">
          <img src="https://images.pexels.com/photos/7402883/pexels-photo-7402883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>John Doe</span>
          <p>Lorem Ipsum dolor sit...</p>
        </div>
        <div className="message">
          <img src="https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>John Doe</span>
          <p>Lorem Ipsum dolor sit...</p>
        </div>
        <div className="message">
          <img src="https://images.pexels.com/photos/5262459/pexels-photo-5262459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>John Doe</span>
          <p>Lorem Ipsum dolor sit...</p>
        </div>
        <div className="message">
          <img src="https://images.pexels.com/photos/5262459/pexels-photo-5262459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>John Doe</span>
          <p>Lorem Ipsum dolor sit...</p>
        </div>
      </div>
      {
        chat ? (
          <div className="chatBox">
            <div className="top">
              <div className="user">
                {/* <img src="https://images.pexels.com/photos/5262459/pexels-photo-5262459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                John Doe
              </div>
              <span className="close" onClick={() => setChat(null)}>X</span>
            </div>
            <div className="center">
              <div className="chatMessage">
                <p>Lorem ispum dolor sit aret</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage own">
                <p>Lorem ispum dolor sit aret</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
                <p>Lorem ispum dolor sit aret</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage own">
                <p>Lorem ispum dolor sit aret</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
                <p>Lorem ispum dolor sit aret</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage own">
                <p>Lorem ispum dolor sit aret</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
                <p>Lorem ispum dolor sit aret</p>
                <span>1 hour ago</span>
              </div>
              <div className="chatMessage own">
                <p>Lorem ispum dolor sit aret</p>
                <span>1 hour ago</span>
              </div>
            </div>
            <div className="bottom">
              <textarea></textarea>
              <button>Send</button>
            </div>
          </div>
        ) : (<></>)
      }
    </div>
  )
}
export default Chat