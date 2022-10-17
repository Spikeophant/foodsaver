require('dotenv').config();

const baseUrl = 'https://www.themealdb.com/api/json/v1/';
const mealDBApiKey = process.env.MEALDB_API_KEY2;
const ingredientSearch = '/filter.php?i=';
const singleRecipeSearch = '/lookup.php?i='

async function getRecipeByIngredient(ingredient) {
  const res = await fetch(baseUrl + mealDBApiKey + ingredientSearch + ingredient);
  if (!res.ok) {
    console.log(res.status);
    throw new Error('MealDB Search Failed!! Abort!!');
  }
  const recipes = await res.json();
  console.log(recipes);
  return recipes
}

async function getRecipe(id) {
  const res = await fetch(baseUrl + mealDBApiKey + singleRecipeSearch + id);
  if (!res.ok) {
    console.log(res.status);
    throw new Error('MealDB Lookup Failed!! Abort!!')
  }
  const recipe = await res.json();
  console.log(recipe.meals[0]);
  return recipe.meals[0];
}



getRecipe(53039);