const seedUsers = require('./user-seed');
const seedRecipes = require('./recipe-seed');
const seedIngredients = require('./ingredient-seed');
const seedUserRecipes = require('./user-recipe-seed');
const seedRecipeIngredients = require('./recipe-ingredient-seed');
const seedUserIngredients = require('./user-ingredient-seed');

const sequelize = require('../../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n------------ Database Synced -------------\n');
  await seedUsers();
  console.log('\n------------ Users Seeded --------------\n');
  await seedRecipes();
  console.log('\n------------ Recipes Seeded --------------\n');
  await seedUserRecipes();
  console.log('\n------------ Users Recipes Seeded --------------\n');
  await seedRecipeIngredients();
  console.log('\n------------ Recipe Ingredients Seeded --------------\n');
  await seedUserIngredients();
  console.log('\n------------ User Ingredients Seeded --------------\n')
  await seedIngredients();
  console.log('\n------------ Ingredients Seeded --------------\n');
  process.exit(0);
};

seedAll();