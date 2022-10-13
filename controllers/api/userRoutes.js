const router = require('express').Router();

// GET all users
router.post('/', async (req, res) => {
    try {
        const userData = await this.findAll()({
            raw: true
        });

        res.render('homepage', {
            users: userData
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE new user
router.post




// Login
router.post




// Logout
router.post



module.exports = router;