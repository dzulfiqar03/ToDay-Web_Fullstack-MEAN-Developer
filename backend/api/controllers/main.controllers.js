const providers = require("../models/provider.model");

const {Provider } = require('../db/db');
const { ObjectId } = require("mongodb");

module.exports.create = async function (req, res, next) {
    var provider = req.body;
    try {
        if (await Provider.findOne({ name: provider.name }) || await Provider.findOne({ email: provider.email })) {
            res.status(400).send({ message: "Already Exist" });
        }

        await Provider.create(provider).then(result => {
            res.status(200).send({
                message: "Provider created",
                data: result
            });
        });

        // let provider = {
        //     id: providers.length + 1,
        //     name: req.body.name,
        //     company: req.body.company,
        //     address: req.body.address,
        //     phone: req.body.phone,
        //     email: req.body.email
        // };
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }


}

module.exports.readAll = async function (req, res, next) {
    try {
        await Provider.find().then(result => {
            if (result.length === 0) {
                res.status(404);
                res.send({ message: "No providers found" });
                return;
            }
            res.status(200).send({
                message: "All Providers found",
                data: result
            });
        });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }

}

module.exports.readOne = async function (req, res, next) {
    try {
        if (await Provider.length === 0) {
            res.status(404);
            res.send({ message: "No providers found" });
            return;
        }

        let id = req.params.id;
        await Provider.find({ 'id': id }).then(result => {
            if (result.id === undefined) {
                res.status(404);
                res.send({ message: "Provider not found" });
                return;
            }
            res.status(200);
            res.send({
                message: "Provider found",
                data: provider
            });
        });

    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports.update = async function (req, res, next) {
    try {
        let id = req.params.id;
        let provider = req.body;

        await Provider.findOneAndUpdate(
            { _id: id },
            provider,
            { new: true }
        ).then(
            (result) => {
                if (!result) {
                    res.status(404);
                    res.send({ message: "Provider not found" });
                    return;
                }
                res.status(200).send(
                    {
                        message: "Provider updated",
                        data: result
                    });
            }
        );

        res.status(200).send(
            {
                message: "Provider updated",
                data: result
            });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports.delete = async function (req, res, next) {
    try {
        if (await Provider.length === 0) {
            res.status(404);
            res.send({ message: "No providers found" });
            return;
        }
        let id = req.params.id;
        await Provider.findOneAndDelete({ '_id': id }).then(result => {
            if (result.id === undefined) {
                res.status(404);
                res.send({ message: "Provider not found" });
                return;
            }
            res.status(200).
                send({
                    message: "Provider deleted",
                    data: provider
                });
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }

}

module.exports.deleteAll = async function (req, res, next) {
    try {
        if (await Provider.length === 0) {
            res.status(404);
            res.send({ message: "No providers found" });
            return;
        }
        await Provider.deleteMany().then(result => {
            res.status(200).send({
                message: "All providers deleted",
                data: result,
                counts: Provider.length
            });
        });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}