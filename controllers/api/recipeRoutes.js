const router = require('express').Router();
//need to add recipe model below


// GET all recipes
router.get('/', async (req, res) => {
    try{
        //change this to name of recipe model imported
        const recipeData = await this.name.findAll ({
            raw: true
        });

        // for now renders to homepage
        res.render('homepage', {
            recipes: recipeData
        })


    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one recipe
router.get('/recipe/id:', async (req, res) => {
    try {
        const recipeData = await this.findByPk(req.params.id, {
            raw: true
        });

        res.render ('homepage', {
            recipe: recipeData
        })

    } catch (err) {
        res.status(500).json(err);
    }
});

// ADD recipe

// DELETE recipes





module.exports = router;