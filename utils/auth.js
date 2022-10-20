// redirect users to login if they havent
// if they try to access the recipe and ingredients routes
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/user/login');
    } else {
        next();
    }
};

module.exports = withAuth;