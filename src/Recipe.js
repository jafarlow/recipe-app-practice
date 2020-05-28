import React from 'react'

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="dish">
      <h2>{title}</h2>
      <img src={image} alt="" />
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
    </div>
  )
}

export default Recipe
