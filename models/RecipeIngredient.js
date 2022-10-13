const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipeIngredient extends Model {}

RecipeIngredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'recipe',
        key: 'id',
      },
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ingredient',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'user_recipe',
  }
);

module.exports = RecipeIngredient;