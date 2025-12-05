module.exports.login = function (req, res, next) {
    res.render('pages/auth/login', { title: 'Express' });
}