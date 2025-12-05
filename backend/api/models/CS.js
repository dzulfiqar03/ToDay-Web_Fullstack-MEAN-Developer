const mongoose = require('mongoose');

const { csSchema } = require('../schemas/cs.schemas');

const CS = mongoose.model('CSList', csSchema);

module.exports = {CS};