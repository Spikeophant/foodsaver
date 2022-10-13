const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');
const Ingredient = require('./Ingredient');

User.belongsToMany(Recipe, {
  through: UserRecipe,
  foreignKey: 'user_id',
  otherKey: 'recipe_id',
});