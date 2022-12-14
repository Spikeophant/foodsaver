const router = require('express').Router();
const { User } = require('../../models');

// GET all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            raw: true,
            nest: true,
            // include: [Recipe],
        });

        // res.render('homepage', {
        //     users: userData
        // });

        console.log(userData);
        res.json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one user
router.get('/user/:id', async (req, res) => {
    try {
        const userData = await User.findbyPk(req.params.id, {
            raw: true,
            nest: true,
            // include: [Recipe],
        });

        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// CREATE new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.user_email = userData.email;
            req.session.logged_in = true;

            res
            .status(200)
            .json({ user: userData, message: 'Welcome to FoodSavers!'});
        });

    } catch (err) {
        res.status(400).json (err);
    }
});

// Login
router.post ('/login', async (req, res) => {
    console.log('Logging.')
    try {
        const userData = await User.findOne ({
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

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
              .status(400)
              .json ({ message: 'Incorrect email or password'});
              return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res
              .status(200)
              .json({ message: 'You are now logged in!' });
        });

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});


// Logout
router.post('/logout', (req, res) => {
       try {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } catch {
        res.status(404).end();
    }
});


module.exports = router;