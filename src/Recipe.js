import React from 'react'

// NOTE: the API doesn't supply an ID for ingredients, so we're using
// Math.random() to generate a unique ID not tied to index. This
// generates a number with 16 digits, which means the likelihood of
// generating a duplicate value in the list is small enough to
// consider it 0%

// NOTE: using `join()` below adds a comma and a space between items
// in an array. Otherwise it jams all the items together with no
// spacing and it looks gross

const target = "_blank"
const rel = "external nofollow noopener noreferrer"

const Recipe = ({ title, calories, image, ingredients, url, servings, diet, health }) => {

  return (
    <div className="dish">
      <h2>{title}</h2>
      <img src={image} alt={"cooked " + title} />
      <ul>
        {ingredients.map(ingredient => (
          <li key={Math.random()}>{ingredient}</li>
        ))}
      </ul>
      <p><b># of servings:</b> {servings}</p>
      <p><b>Calories per serving:</b> {Math.round(calories / servings)}</p>
      {diet.length > 0
        ? <p><b>Diet info:</b> {diet.join(', ')}</p>
        : ''
      }
      <p><b>Health Labels:</b> {health.join(', ')}</p>
      <p className="source-link">Visit <a href={url} target={target} rel={rel}>recipe source</a> for cooking instructions (external link)</p>
    </div>
  )
}

export default Recipe
