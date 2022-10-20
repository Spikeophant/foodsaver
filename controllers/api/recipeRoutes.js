const router = require('express').Router();
const { Recipe, Ingredient} = require('../../models');
const mealDb = require('../../utils/mealDbRecipeSearch');

// GET all recipes
router.get('/', async (req, res) => {
    try{
        // change this to name of recipe model imported
        const recipeData = await Recipe.findAll ({
            raw: true,
            nest: true,
            include: [Ingredient],
        });

    //    res.render('recipe', {recipeData});
        console.log(recipeData);
       res.json(recipeData);


    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/search/:term', async (req, res) => {
    console.log('hitsearch')
    try {
        console.log('Searching MealDB');
        const recipes = await mealDb.getRecipeByIngredient(req.params.term);
        res.render('recipeSearch', {recipes})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one recipe
router.get('/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id, {
            raw: true,
            nest: true,
            include: [Ingredient],
        });

//       res.render('recipe');
        res.json(recipeData);

    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/searchById/:id', async (req, res) => {
    try {
        const recipe = await mealDb.getRecipeById(req.params.id);
        res.json(recipe)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// ADD recipe
router.post('/', async (req, res) => {
    try {
        const newRecipe = await Recipe.create({
            ...req.body,
            user_id: req.session.user_id,
        })

        res.json(newRecipe);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE recipes
router.delete('/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            },
        });

        if (!recipeData) {
            res.status(404).json({ message: 'No recipe found! '});
            return;
        }

        res.json(recipeData)
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;