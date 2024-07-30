import Chat from "../../components/chat/Chat"
import List from "../../components/list/List"
import './profilePage.scss'

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h2>User Information</h2>
            <button>Update profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </span>
            <span>Username: John Doe</span>
            <span>Email: John@gmail.com</span>
          </div>
          <div className="title">
            <h2>My List</h2>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h2>Saved List</h2>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  )
}
export default ProfilePage