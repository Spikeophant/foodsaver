// redirect users to login if they havent
// if they try to access the recipe and ingredients routes
const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;