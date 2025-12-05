const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    // Relasi ke User
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Users",    // nama model Users kamu
        required: true
    },
     "todo": { type: String, required: true },

    createdAt: { type: Date, default: Date.now }
});

module.exports = {todoSchema};