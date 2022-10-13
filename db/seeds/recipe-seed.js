const { Recipe } = require('../../models');

const recipeData = [
  {
    recipe_name: 'test_recipe_1',
    recipe_text: 'test_recipe_text_1',
  },
  {
    recipe_name: 'test_recipe_2',
    recipe_text: 'test_recipe_text_2',
  },
  {
    recipe_name: 'test_recipe_3',
    recipe_text: 'test_recipe_text_3',
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;