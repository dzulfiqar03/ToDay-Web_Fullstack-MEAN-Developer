const provider = require("../models/provider");

module.exports.register = function (req, res, next) {
    res.render('pages/auth/register', { title: 'Express',providers: provider });
}