const { Ingredient } = require('../../models');

const ingredientData = [
  {
    name: 'test_ingredient_1',
  },
  {
    name: 'test_ingredient_2'
  },
  {
    name: 'test_ingredient_3'
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;