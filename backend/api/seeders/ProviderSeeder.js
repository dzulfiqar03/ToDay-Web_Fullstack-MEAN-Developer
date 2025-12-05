const {Provider} = require('../models/provider');

async function ProviderSeeder() {await Provider.create({
    "id": 1,
    "name": 'jul',
    "address": 'Jalan Merdeka No.1',
    "email": 'kk@gmail.com',
    "company": {
        "name": 'jul corp',
        "address": 'Jalan Merdeka No.1',
        "email": 'jul@gmail.com',
        "phone": '08123456789'
    }
})}

module.exports = {ProviderSeeder};

