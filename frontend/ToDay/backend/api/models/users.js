const mongoose = require('mongoose');

const { userSchema } = require('../schemas/user.schemas');

const Users = mongoose.model('Users', userSchema);

module.exports = {Users};