const { Recipe } = require('../../models');

const recipeData = [
  {
    name: 'test_recipe_1',
    body: 'test_recipe_text_1',
  },
  {
    name: 'test_recipe_2',
    body: 'test_recipe_text_2',
  },
  {
    name: 'test_recipe_3',
    body: 'test_recipe_text_3',
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;