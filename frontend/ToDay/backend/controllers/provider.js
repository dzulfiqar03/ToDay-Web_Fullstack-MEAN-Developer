
const providers = require("../models/provider");
module.exports.list = function (req, res, next) {
    res.render('providers/provider-list', { title: 'Express', providers: providers });
    currentRoute: req.originalUrl
}

module.exports.add = function (req, res, next) {
    let provider = {
        id: providers.length + 1,
        name: req.body.name,
        company: req.body.company,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
    };
    providers.push(provider);
    res.redirect( '/providers');
}

module.exports.detail = function (req, res, next) {
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    res.render('providers/provider-detail', { id: id, title: 'Express', company: provider.company });
}

module.exports.edit = function (req, res, next) {
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    res.render('providers/provider-edit', { id: id, title: 'Express', providers: provider, currentRoute: req.originalUrl });
}

module.exports.update = function (req, res, next) {
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    provider.name = req.body.name;
    provider.company = req.body.company;
    provider.address = req.body.address;
    provider.phone = req.body.phone;
    provider.email = req.body.email;
    res.redirect( '/providers');
}

module.exports.delete = function (req, res, next) {
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    let index = providers.indexOf(provider);
    providers.splice(index, 1);
    res.redirect( '/providers');
}