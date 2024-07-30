import { Link } from "react-router-dom"
import './card.scss'
import pin from '../../assets/images/pin.png'
import bed from '../../assets/images/bed.png'
import bath from '../../assets/images/bath.png'
import save from '../../assets/images/save.png'
import chat from '../../assets/images/chat.png'

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <Link className="textContainer">
        <div className="title">
          <h3 to={`/${item.id}`}>{item.title}</h3>
        </div>
        <p className="address">
          <img src={pin} alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">${item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bed} alt="" />
              <span>{item.bedRooms} Bedroom</span>
            </div>
            <div className="feature">
              <img src={bath} alt="" />
              <span>{item.bathRooms} Bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={save} alt="" />
            </div>
            <div className="icon">
              <img src={chat} alt="" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Card