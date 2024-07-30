import './slider.scss'
import arrow from '../../assets/images/arrow.png'
import { useState } from 'react'

const Slider = ({ images }) => {
  const [imageIndex, setImageindex] = useState(null)

  const changeSlice = (direction) => {
    if (direction === 'left') {
      if (imageIndex === 0) {
        setImageindex(images.length - 1)
      }
      else {
        setImageindex(imageIndex - 1)
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageindex(0)
      } else {
        setImageindex(imageIndex + 1)
      }
    }
  }
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src={arrow} alt="" onClick={() => changeSlice('left')} />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img src={arrow} alt="" className='right' onClick={() => changeSlice('right')} />
          </div>
          <div className="close" onClick={() => setImageindex(null)}>X</div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageindex(0)} />
      </div>
      <div className="smallImage">
        {
          images.slice(1).map((image, index) => (
            <img src={image} alt="" key={index} onClick={() => setImageindex(index + 1)} />
          ))
        }
      </div>
    </div>
  )
}
export default Slider