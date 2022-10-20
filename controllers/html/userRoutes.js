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

router.get('/logout', async (req, res) => {
  req.session.destroy((err) => {
    console.log('Something went terribly, terribly wrong...');
    console.log(err);
  });
  res.redirect('/');
})

module.exports = router;