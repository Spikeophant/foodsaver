const router = require('express').Router();
const { User, Recipe } = require('../../models');

router.get('/login', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }

    res.render('login');

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;