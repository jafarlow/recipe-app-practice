import React, { useEffect, useState } from "react";
import Recipe from './Recipe.js'
import Pagination from "@material-ui/lab/Pagination";

const Search = () => {

  const apiKey = process.env.REACT_APP_API_KEY
  const appID = process.env.REACT_APP_RECIPE_APP_ID

  // for data handling
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  // for page info
  const [page, setPage] = useState(1) // current page
  const [count, setCount] = useState(0) // total pages
  const [pageSize, setPageSize] = useState(12) // items per page

  // for future implementation of giving user ability to change
  // the recipes displayed per page
  const pageSizes = [12, 24, 48, 96]

  const request = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${apiKey}&from=0&to=96` // NOTE: update to be 96 in future

  useEffect(() => {
    getRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page, pageSize])

  const getRecipes = async () => {
    const response = await fetch(request)
    const data = await response.json()
    // hits are the individual recipes returned from a query
    setRecipes(data.hits)
    // NOTE: use the below to see full JSON structure when looking to add more functionality to the app
    console.log(data.hits);
    // NOTE: this is an attempt from pagination tutorial
    setCount(data.hits.length / pageSize) // first thoughts: this'd have `count` #pages
    // console.log(count)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  // NOTE: pagination from tutorial
  const handlePageChange = (e, val) => {
    setPage(val)
  }

  // if (pageSize === 12) {
  //
  // }

  // NOTE: pagination from tutorial
  // NOTE: Updating to use a "view more" button instead
  const handlePageSizeChange = (e) => {
    // setPageSize(e.target.value)
    if (pageSize < 96) {
      setPageSize(pageSize + 24)
    }

    // resets page to 1 when adjusting the page size
    setPage(1)
  }

  // NOTE: this changes the size of the array mapped over below, based on the page size selected by the user--default is 12
  const recipeArray = (arr) => {
    return arr.slice(0,pageSize)
  }

  // NOTE: **CONSTANT** is to simplify if statement below
  const disableCheck = recipes.length < 12 || recipeArray(recipes).length % 12 !== 0 || pageSize >= 96

  // NOTE: **FUNCTION** sets button props & ternary trigger for text
  function disabled() {
    if (disableCheck) {
      return true
    }
    return false
  }

  // start of recipe map to display on page
  //{recipes.map(dish => (

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
            key={dish.recipe.calories}
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
