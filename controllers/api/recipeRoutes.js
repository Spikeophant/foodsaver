const router = require('express').Router();
const { Recipe, Ingredient} = require('../../models');
const mealDb = require('../../utils/mealDbRecipeSearch');

// GET all recipes
router.get('/', async (req, res) => {
    try{
        //change this to name of recipe model imported
        const recipeData = await Recipe.findAll ({
            raw: true,
            nest: true,
            include: [Ingredient],
        });

        // for now renders to homepage
        //res.render('homepage', {
        //    recipes: recipeData
       //})
        console.log(recipeData);
        res.json(recipeData);


    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one recipe
router.get('/recipe/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id, {
            raw: true,
            nest: true,
            include: [Ingredient],
        });

        res.json(recipeData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/search', async (req, res) => {
    try {
        console.log('I got traffic.')
        const recipes = await mealDb.getRecipeByIngredient('chicken');
        res.render('recipeSearch', {recipes})
    } catch (err) {
        console.log(err);
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
            //most likely attached to user id
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
                //add another thing
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