const router = require('express').Router();
const { Ingredient, User } = require('../../models');


// GET all ingredients
router.get('/', async (req, res) => {
    try{
        //change this to name of recipe model imported
        const ingredientData = await Ingredient.findAll ({
            raw: true,
            nest: true,
            include: [User],
        });

        // for now renders to homepage
        //res.render('homepage', {
        //    recipes: recipeData
       //})
       res.render('ingredients', {ingredientData});
        console.log(ingredientData);
        res.json(ingredientData);


    } catch (err) {
        res.status(500).json(err);
    }
});


// GET one ingredient
router.get('/ingredient/:id', async (req, res) => {
    try {
        const ingredientData = await Ingredient.findByPk(req.params.id, {
            raw: true,
            nest: true,
        });

        res.json(ingredientData);

    } catch (err) {
        res.status(500).json(err); 
    }
});


// ADD ingredient
router.post('/', async (req, res) => {
    try {
        const newIngredient = await Ingredient.create({
            ...req.body,
            user_id: req.session.user_id,
        })

        res.json(newIngredient);
    } catch (err) {
        res.status(400).json(err);
    }
});


// DELETE ingredient
router.delete('/ingredient/:id', async (req, res) => {
    try {
        const ingredientData = await Ingredient.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            },
        });

        if (!ingredientData) {
            res.status(404).json({ message: 'No ingredient found! '});
            return;
        }

        res.json(ingredientData)
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;