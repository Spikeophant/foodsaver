const { UserRecipe, User} = require('../../models');

const userRecipeData = [
  {
    recipe_id: 1,
    ingredient_id: 1
  },
  {
    recipe_id: 1,
    ingredient_id: 3,
  },
  {
    recipe_id: 2,
    ingredient_id: 1,
  },
  {
    recipe_id: 2,
    ingredient_id: 2,
  },
  {
    recipe_id: 3,
    ingredient_id: 1,
  },
  {
    recipe_id: 3,
    ingredient_id: 3
  },
];

const seedUserRecipes = () => UserRecipe.bulkCreate(userRecipeData,{
  individualHooks: true,
  returning: true,
});

module.exports = seedUserRecipes;