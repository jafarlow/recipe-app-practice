import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js'
import Search from './Search.js'

// import Recipe from './Recipe.js'

function App() {
  //
  // const apiKey = process.env.REACT_APP_API_KEY
  // const appID = process.env.REACT_APP_RECIPE_APP_ID
  //
  // const [recipes, setRecipes] = useState([])
  // const [search, setSearch] = useState('')
  // const [query, setQuery] = useState('')
  //
  // // sample GET request:
  // //"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}"
  // const request = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${apiKey}`
  //
  // useEffect(() => {
  //   getRecipes()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query])
  //
  // const getRecipes = async () => {
  //   const response = await fetch(request)
  //   const data = await response.json()
  //   // hits are the individual recipes returned from a query
  //   setRecipes(data.hits)
  //   console.log(data.hits);
  // }
  //
  // const updateSearch = e => {
  //   setSearch(e.target.value)
  // }
  //
  // const getSearch = e => {
  //   e.preventDefault()
  //   setQuery(search)
  //   setSearch('')
  // }

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Recipe Search</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
