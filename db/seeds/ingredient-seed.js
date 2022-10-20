const { Ingredient } = require('../../models');

const ingredientData = [
  {
    name: 'beef',
  },
  {
    name: 'chicken'
  },
  {
    name: 'tomato'
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedIngredients;