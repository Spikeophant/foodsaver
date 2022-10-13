const router = require('express').Router();

const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const ingredientRoutes = require('./ingredientsRoutes');

router.use('/users', userRoutes);
router.use('/reci[es', recipeRoutes);
router.use('/ingredients', ingredientRoutes);

module.exports = router;