const { UserIngredient } = require('../../models');

const userIngredientData = [
  {
    user_id: 1,
    ingredient_id: 1,
  },
  {
    user_id: 1,
    ingredient_id: 3,
  },
  {
    user_id: 2,
    ingredient_id: 3
  },
  {
    user_id: 2,
    ingredient_id: 2,
  },
  {
    user_id: 3,
    ingredient_id: 2,
  },
  {
    user_id: 3,
    ingredient_id: 3,
  },
];

const seedUserIngredients = () => UserIngredient.bulkCreate(userIngredientData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUserIngredients;