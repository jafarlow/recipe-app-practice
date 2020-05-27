import React, { useEffect, useState } from 'react';
import Recipe from './Recipe.js'

function App() {

  const apiKey = process.env.REACT_APP_API_KEY
  const appID = process.env.REACT_APP_RECIPE_APP_ID

  // sample GET request:
  //"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}"
  const request = `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${apiKey}`

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(request)
    const data = await response.json()
    // hits are the individual recipes returned from a query
    setRecipes(data.hits)
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(dish => (
        <Recipe key={dish.recipe.label} title={dish.recipe.label} calories={dish.recipe.calories} image={dish.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
