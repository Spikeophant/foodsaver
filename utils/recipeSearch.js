require('dotenv').config();

const baseUrl = 'https://api.edamam.com';
const recipeSearchUrl = '/api/recipes/v2?type=public&q=';
const edamamKeys = `&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`

async function getEdamamRecipe(ingredient) {
  const response = await fetch(baseUrl + recipeSearchUrl + ingredient + edamamKeys);
  if (!response.ok) {
    throw new Error('Edamam lookup failed!  Abort!')
  }
  const obj = await response.json();
  return obj.hits
}


module.exports = { getEdamamRecipe }