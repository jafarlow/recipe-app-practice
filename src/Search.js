import React, { useEffect, useState } from "react";
import Recipe from './Recipe.js'

const Search = () => {

  const apiKey = process.env.REACT_APP_API_KEY
  const appID = process.env.REACT_APP_RECIPE_APP_ID

  // for data handling
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  // for using pageSize to determine #results to display
  const [pageSize, setPageSize] = useState(12) // items on initial search

  const request = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${apiKey}&from=0&to=96`

  useEffect(() => {
    getRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, pageSize])

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

  // NOTE: pagination from tutorial updated to use a "view more" button instead
  const handlePageSizeChange = (e) => {
    if (pageSize < 96) {
      setPageSize(pageSize + 24)
    }
  }

  // NOTE: this changes the size of the array mapped over below, based on the pageSize triggered by 'view more' button
  const recipeArray = (arr) => {
    return arr.slice(0,pageSize)
  }

  // NOTE: **CONSTANT** is to simplify `if...` statement below
  // breaks down:
  // 1) if there aren't at least 12, there will be no more to display
  // 2) since all expansions are designed to be divisible by 12, any operation check which leave a remainder means there will be no more to display
  // 3) results are maxed out at 96, so that's the final check
  const disableCheck = recipes.length < 12 || recipeArray(recipes).length % 12 !== 0 || pageSize >= 96

  // NOTE: **FUNCTION** sets button props & ternary trigger for text
  function disabled() {
    if (disableCheck) {
      return true
    }
    return false
  }

  return (
    <div className="Search">
      <h1>Recipe Search</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <article className="recipes">
        {recipeArray(recipes).map(dish => (
          <Recipe
            key={Math.random()}
            title={dish.recipe.label}
            calories={dish.recipe.calories}
            image={dish.recipe.image}
            ingredients={dish.recipe.ingredientLines}
            servings={dish.recipe.yield}
            url={dish.recipe.url}
            diet={dish.recipe.dietLabels}
            health={dish.recipe.healthLabels}
          />
        ))}
      </article>
      <button
        id="view"
        type="button"
        onClick={handlePageSizeChange}
        disabled={disabled()}
        aria-disabled={disabled()}
      >
        {
          recipes.length === 0 ? 'Gotta search first!'
          : disabled() === true ? 'End of results'
          : 'View more'
        }
      </button>
    </div>
  )
}

export default Search
