require('dotenv').config();

const baseUrl = 'https://themealdb.com/api/json/v1/';
const mealDBApiKey = process.env.MEALDB_API_KEY;
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

