const User = require('./User');
const Recipe = require('./Recipe');
const UserRecipe = require('./UserRecipe');
const Ingredient = require('./Ingredient');
const RecipeIngredient = require('./RecipeIngredient');
const UserIngredient = require('./UserIngredient');

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
  through: RecipeIngredient,
  foreignKey: 'recipe_id',
  otherKey: 'ingredient_id',
});

Ingredient.belongsToMany(User, {
  through: UserIngredient,
  foreignKey: 'ingredient_id',
  otherKey: 'user_id',
});

User.belongsToMany(Ingredient, {
  through: UserIngredient,
  foreignKey: 'ingredient_id',
  otherKey: 'user_id',
})

module.exports = {
  User,
  Recipe,
  UserRecipe,
  Ingredient,
  RecipeIngredient,
  UserIngredient,
}