const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');
const Ingredient = require('./Ingredient');
const RecipeIngredient = require('./RecipeIngredient');

User.belongsToMany(Recipe, {
  through: UserRecipe,
  foreignKey: 'user_id',
  otherKey: 'recipe_id',
});

Recipe.belongsToMany(User, {
  through: UserRecipe,
  foreignKey: 'recipe_id',
  otherKey: 'user_id',
});

Ingredient.belongsToMany(Recipe, {
  through: RecipeIngredient,
  foreignKey: 'ingredient_id',
  otherKey: 'recipe_id',
});

Recipe.belongsToMany(Ingredient, {
  through: UserRecipe,
  foreignKey: 'recipe_id',
  otherKey: 'ingredient_id',
});

module.exports = {
  User,
  Recipe,
  UserRecipe,
  Ingredient,
}