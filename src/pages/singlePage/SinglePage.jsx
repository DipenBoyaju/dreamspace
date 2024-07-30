import Slider from "../../components/slider/Slider"
import { singlePostData, userData } from "../../lib/dummydata"
import pin from '../../assets/images/pin.png'
import './singlepage.scss'
import Map from "../../components/map/Map"
import chat from '../../assets/images/chat.png'
import save from '../../assets/images/save.png'
import utility from '../../assets/images/utility.png'
import fee from '../../assets/images/fee.png'
import pet from '../../assets/images/pet.png'
import size from '../../assets/images/size.png'
import bed from '../../assets/images/bed.png'
import bath from '../../assets/images/bath.png'
import school from '../../assets/images/school.png'
import bus from '../../assets/images/bus.png'
import resturant from '../../assets/images/restaurant.png'

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src={pin} alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <div className="title"><p>General</p></div>
          <div className="listVertical">
            <div className="feature">
              <img src={utility} alt="" />
              <div className="featureText">
                <span>Utility</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src={pet} alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src={fee} alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <div className="title">
            <p>Room Sizes</p>
          </div>
          <div className="sizes">
            <div className="size">
              <img src={size} alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src={bed} alt="" />
              <span>2 Bedroom</span>
            </div>
            <div className="size">
              <img src={bath} alt="" />
              <span>1 Bathroom</span>
            </div>
          </div>

          <div className="listHorizontal">
            <div className="feature">
              <img src={school} alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={bus} alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={resturant} alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src={chat} alt="" />
              Send a Message
            </button>
            <button>
              <img src={save} alt="" />
              Save the house
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SinglePage