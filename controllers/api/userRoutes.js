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
router.post('/', async (req, res) => {
    try {
        const userData = await this.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res
            .status(200)
            .json({ user: userData, message: 'Welcome to FoodSavers!'});
        });

    } catch (err) {
        res.status(500).json (err);
    }
});

// Login
router.post ('/login', async (req, res) => {
    try {
        const userData = await this.findOne ({
            where: {
                email: req.body.email,
            }
        });

        if (!userData) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password'});
              return;
        }

        const validPassword = await userData.checkPassword(req.body.password);


        if (!validPassword) {
            res
              .status(400)
              .json ({ message: 'Incorrect email or password'});
              return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res
              .status(200)
              .json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(500).json(err);
    }
});


// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;