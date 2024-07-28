import './home.scss'
import bg from '../assets/images/bg.png'
import SearchBar from '../components/Searchbar/SearchBar'

const Home = () => {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident mollitia enim saepe beatae est ea laboriosam perferendis. Quod, dolor aperiam.</p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src={bg} alt="" />
      </div>
    </div>
  )
}
export default Home