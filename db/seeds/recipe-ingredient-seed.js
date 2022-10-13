const { RecipeIngredient } = require('../../models');

const recipeIngredientData = [
  {
    recipe_id: 1,
    ingredient_id: 1,
  },
  {
    recipe_id: 1,
    ingredient_id: 3,
  },
  {
    recipe_id: 2,
    ingredient_id: 3
  },
  {
    recipe_id: 2,
    ingredient_id: 2,
  },
  {
    recipe_id: 3,
    ingredient_id: 2,
  },
  {
    recipe_id: 3,
    ingredient_id: 3,
  },
];

const seedRecipeIngredients = () => RecipeIngredient.bulkCreate(recipeIngredientData);

module.exports = seedRecipeIngredients;