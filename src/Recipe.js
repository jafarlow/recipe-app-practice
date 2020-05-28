import React from 'react'

// NOTE: the API doesn't supply an ID for ingredients, so we're using
// Math.random() to generate a unique ID not tied to index. This
// generates a number with 16 digits, which means the likelihood of
// generating a duplicate value in the list is small enough to
// consider it 0%

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="dish">
      <h2>{title}</h2>
      <img src={image} alt="" />
      <ul>
        {ingredients.map(ingredient => (
          <li key={Math.random()}>{ingredient}</li>
        ))}
      </ul>
      <p>{calories}</p>
    </div>
  )
}

export default Recipe
