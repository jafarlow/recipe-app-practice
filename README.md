Built on the bones of a code-along tutorial from Dev Ed's YouTube channel:

[Build a Recipe App With React | React Tutorial For Beginners](https://www.youtube.com/watch?v=U9T6YkEDkMo)

The tutorial covers the basics to get the app setup using Edamam API and returning useful data. From there I improved the information presented to the user, did my own styling, and incorporated components and routing. See version notes below for more detailed information

[Edamam API docs:](https://developer.edamam.com/edamam-docs-recipe-api)

**version 1, published 23 June 2020:**\
Home page with information about the app\
Search page which returns 10 recipes
  - each recipe contained:
    - Dish name
    - Dish image
    - Ingredient list
    - Number of servings
    - Calories per serving
    - Link to recipe source for cooking instructions

**version 2, published 30 June 2020:**\
Changes to Search page:
  - returns 12 recipes instead of 10
  - Added diet and health labels
  - Bolded servings, calories, diet, & health headers

**version 3, published 22 September 2020:**\
Expanded Search page functionality:
  - there is now a 'view more' button which allows users to see more recipes related to a search without having to first revise their search
  - 'view more' will increase displayed recipes by 24
  - increase will work until there are no more to display, or until reaching 96, which is the maximum recipes which can be returned from a single search

Updated footer:
  - changed link-to-portfolio color to pass WGAC contrast requirements
  - added required attribution for Edamam per API usage agreement

**version 3.1, published 7 October 2020:**\
Added label to form:
  - this was a missing element to meet accessibility criteria
  - adjustments to stylesheet to compensate for the new element

Minor stylesheet updates:
  - removed duplicate code in media queries
  - negative margin is no longer effective in footer, so it has been removed
  - increased font size for desktop interfaces on search page
  - increased height of input and buttons to match new font size

**version 3.1.1, published 27 July 2022:**\
Resolved dependency issues:
  - removed deprecated `node-sass` and replaced it with `sass`

Minor stylesheet update:
  - added fixed image height to reduce page jank as images load and push tile size
  - added max-width to images in case Edamam API serves an over large image