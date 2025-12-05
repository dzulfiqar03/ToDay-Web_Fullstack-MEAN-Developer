const bcrypt = require("bcrypt");
const {Users} = require('../db/db');
const { ObjectId } = require("mongodb");
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cari user
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    // Cek password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Password salah" });
    }

    res.status(200).json({
      message: "Login berhasil",
      data: {
        _id: user._id,
        email: user.email,
        roles: user.roles
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validasi input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Semua field wajib diisi" });
    }

    // Cek email sudah ada
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email sudah terdaftar" });
    }

    // Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user
    const newUser = await Users.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Register berhasil",
      data: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.readAll = async function (req, res, next) {
    try {
        await Users.find().then(result => {
            if (result.length === 0) {
                res.status(404);
                res.send({ message: "No Users found" });
                return;
            }
            res.status(200).send({
                message: "All Users found",
                data: result
            });
        });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }

}

module.exports.readOne = async function (req, res, next) {
    try {
        if (await Users.length === 0) {
            res.status(404);
            res.send({ message: "No Users found" });
            return;
        }

        let id = req.params.id;
        await Users.find({ 'id': id }).then(result => {
            if (result.id === undefined) {
                res.status(404);
                res.send({ message: "User not found" });
                return;
            }
            res.status(200);
            res.send({
                message: "User found",
                data: User
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
        let User = req.body;

        await Users.findOneAndUpdate(
            { _id: id },
            User,
            { new: true }
        ).then(
            (result) => {
                if (!result) {
                    res.status(404);
                    res.send({ message: "User not found" });
                    return;
                }
                res.status(200).send(
                    {
                        message: "User updated",
                        data: result
                    });
            }
        );

        res.status(200).send(
            {
                message: "User updated",
                data: result
            });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports.delete = async function (req, res, next) {
    try {
        if (await Users.length === 0) {
            res.status(404);
            res.send({ message: "No Users found" });
            return;
        }
        let id = req.params.id;
        await Users.findOneAndDelete({ '_id': id }).then(result => {
            if (result.id === undefined) {
                res.status(404);
                res.send({ message: "User not found" });
                return;
            }
            res.status(200).
                send({
                    message: "User deleted",
                    data: User
                });
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }

}

module.exports.deleteAll = async function (req, res, next) {
    try {
        if (await Users.length === 0) {
            res.status(404);
            res.send({ message: "No Users found" });
            return;
        }
        await Users.deleteMany().then(result => {
            res.status(200).send({
                message: "All Users deleted",
                data: result,
                counts: Users.length
            });
        });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}