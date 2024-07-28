import { useState } from 'react'
import searchIcon from '../../assets/images/search.png'
import './searchbar.scss'

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  })

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  }
  return (
    <div className="searchBar">
      <div className="type">
        {
          types.map((type) => (
            <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>{type}</button>
          ))
        }
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input type="number" name="minPrice" placeholder="Min Price" min={0} max={1000000} />
        <input type="number" name="maxPrice" placeholder="Max Price" min={0} max={1000000} />
        <button>
          <img src={searchIcon} alt="" />
        </button>
      </form>
    </div>
  )
}
export default SearchBar