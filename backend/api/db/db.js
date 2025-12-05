const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/provider_db';
const {Provider} = require('../models/provider');
const { Users } = require('../models/users');
const { Todo } = require('../models/todo');
const { CS } = require('../models/CS');

mongoose.connect(uri).then(async result =>{
    console.log('Connected to MongoDB', result.connection.name);
})
.catch(err =>{
    console.log('Error connecting to MongoDB:', err);
});
module.exports = { Users, Provider, Todo, CS };