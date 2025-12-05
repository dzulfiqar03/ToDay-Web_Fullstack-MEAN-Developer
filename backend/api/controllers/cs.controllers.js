
const {CS} = require('../db/db');
const { ObjectId } = require("mongodb");

module.exports.create = async (req, res) => {
  try {
    const cs = await CS.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    return res.status(201).json({
      message: "cs berhasil dibuat",
      data: cs
    });

  } catch (error) {
    return res.status(500).json({
      message: "Gagal membuat cs",
      error: error.message
    });
  }
};