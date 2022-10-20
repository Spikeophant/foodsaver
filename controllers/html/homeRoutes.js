const router = require('express').Router();
const { Recipe, Ingredient, User, UserIngredient } = require('../../models');
// const withAuth = require('../../utils/auth');
const mealDb = require('../../utils/mealDbRecipeSearch');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll({
    limit: 1,
    order: [ [ 'createdAt', 'DESC']],
    raw: true,
    nested: true,
  })
  console.log(recipes);
  res.render('homepage', {
    recipes,
    logged_in: req.session.logged_in
  });
})

router.get('/recipe/search', withAuth,  async (req, res) => {
  try {
    const recipes = await mealDb.getRecipeByIngredient('chicken');
    res.render('recipeSearch', {
      recipes,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/recipes', withAuth, async (req, res) => {
  const recipes = await Recipe.findAll({
    raw: true,
    nested: true,
  })
  console.log(recipes);
  res.render('recipeAll', {
    recipes,
    logged_in: req.session.logged_in
  });
})

router.get('/recipe/:id', withAuth, async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.id, {
    raw: true,
    nest: true,
    include: [Ingredient],
  })

  console.log(recipe);
  res.render('recipe', {
    recipe,
    logged_in: req.session.logged_in
  })
})

router.get('/ingredients', withAuth, async (req, res) => {
  const ingredients = await User.findAll({
    include: [ Ingredient ],
    where: {id: req.session.user_id},
    raw: true,
    nest: true,
  })
  console.log(ingredients);
  res.render('ingredients', {
    ingredients,
    logged_in: req.session.logged_in
  });
})

router.get('/searchById/:id', withAuth, async (req, res) => {
  try {
      const recipe = await mealDb.getRecipeById(req.params.id);
      res.json(recipe)
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
})



// router.get('/userprofile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       raw: true,
//       nest: true,
//       attributes: { exclude: ['password'] },
//     });

//     res.render('user', {
//       userData,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//should small login be here and redirect to login page??
// features recipes and images

module.exports = router;