const router = require('express').Router();
const { Recipe } = require('../../models');



// need to figure out what homepage would look like
router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll({
    limit: 1,
    order: [ [ 'createdAt', 'DESC']],
    raw: true,
    nested: true,
  })
  console.log(recipes);
  res.render('homepage', {recipes});
})

//should small login be here and redirect to login page??
// features recipes and images

module.exports = router;