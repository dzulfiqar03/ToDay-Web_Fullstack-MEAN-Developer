const {Users} = require('../models/users');

async function UsersSeeder() {await Users.create({
    "id": 1,
    "name": 'jul',
    "email": 'jul@gmail.com',
    "password": '12345678',
    "roles":'Admin'
})}

module.exports = {UsersSeeder};

