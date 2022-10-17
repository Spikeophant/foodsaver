require('dotenv').config();

const baseUrl = 'https://www.themealdb.com/api/json/v1/';
const mealDBApiKey = 1;
const ingredientSearch = '/filter.php?i=';

async function getRecipe(ingredient) {
  const res = await fetch(baseUrl + mealDBApiKey + ingredientSearch + ingredient);
  if (!res.ok) {
    console.log(res.status);
    throw new Error('MealDB Lookup Failed!! Abort!!');
  }
  return await res.json()
}

console.log(getRecipe('chicken'));

