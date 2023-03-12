import { useState, useEffect } from 'react';
import axios  from 'axios';
import RecipeCard from './RecipeCard';
import "./style.css"


const Home = () => {
  const [foodlist, setFoodlist] = useState([])
  const [query, setQuery] = useState("")
  const [meal, setMeal] = useState("")
  
  const APP_KEY= process.env.REACT_APP_KEY
  const APP_ID= process.env.REACT_APP_ID
  
  const getData = async () => {
    const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}` 
    try {
      const {data} = await axios (BASE_URL)
      setFoodlist(data.hits)
    } catch (error) {
      console.log(error)
    }
  } 
  
  useEffect(() => {
    setMeal("breakfast")
  }, [])
  
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleMealChange = (e) => {
    setMeal(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <div>
      <h3 className="text-center mx-auto mt-5 mb-4 fw-bold text-primary rounded">RECIPE APP</h3>
      <form className="d-flex justify-content-center gap-3" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control w-25"
          id="inputFood"
          placeholder="Enter a food..."
          value={query}
          onChange={handleChange}
        />
        <select
          className="form-select w-25"
          aria-label="Default select example"
          value={meal}
          onChange={handleMealChange}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="teatime">Tea Time</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <div className="row text-center mx-auto">
        {foodlist.map((item, index) => (
          <RecipeCard item={item} key={index} getData={getData} />
      ))}
      </div>
    </div>
  );
};

export default Home;
