import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js'
import Search from './Search.js'
import Footer from './Footer.js'

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <img src={require("./logo.png")} alt="" />
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
      
      <Footer />
    </Router>
  );
}

export default App;
