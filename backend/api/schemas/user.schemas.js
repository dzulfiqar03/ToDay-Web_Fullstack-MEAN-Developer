const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "name": { type: String, required: true },
    "email": { type: String, required: true },
    "password": { type: String, required: true },
    "roles": { type: String, required: true, default: "User"},
    createdAt: { type: Date, default: Date.now }
});

module.exports = {userSchema};