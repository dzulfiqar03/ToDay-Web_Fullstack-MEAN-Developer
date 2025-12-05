const mongoose = require('mongoose');

const {providerSchema} = require('../schemas/provider.schemas');

const Provider = mongoose.model('Provider', providerSchema);

module.exports = {Provider};