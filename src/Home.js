import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="Home">
      <h1>Discover New Recipes</h1>
      <h2>About the app:</h2>
      <p>This is a recipe search app which uses the Edamam API to help you find new dishes to cook. It's a great way to quickly scan a recipe's ingredients to help you determine if you've found your next favorite dish! Each recipe includes a link to its source page where you can find the cooking instructions. Just imagine, finding the ingredients for a recipe <em><strong>before</strong></em> having to scroll past those stories!</p>
      <p>This app uses the free tier of the Edamam API, which limits searches per minute to 5. If you encounter any difficulty returning recipes from your search, hang tight for a second before initiating another search.</p>
      <p>What are you waiting for? <Link to="/search"> Let's get searching! </Link></p>
    </div>
  )
}

export default Home
