import React, { useEffect, useState } from "react";
import Recipe from './Recipe.js'

const Search = () => {

  const apiKey = process.env.REACT_APP_API_KEY
  const appID = process.env.REACT_APP_RECIPE_APP_ID

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const request = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${apiKey}&from=0&to=12`

  useEffect(() => {
    getRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(request)
    const data = await response.json()
    // hits are the individual recipes returned from a query
    setRecipes(data.hits)
    // NOTE: use the below to see full JSON structure when looking to add more functionality to the app
    // console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="Search">
      <h1>Recipe Search</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <article className="recipes">
        {recipes.map(dish => (
          <Recipe
            key={dish.recipe.calories}
            title={dish.recipe.label}
            calories={dish.recipe.calories}
            image={dish.recipe.image}
            ingredients={dish.recipe.ingredientLines}
            servings={dish.recipe.yield}
            url={dish.recipe.url}
          />
        ))}
      </article>
    </div>
  )
}

export default Search
