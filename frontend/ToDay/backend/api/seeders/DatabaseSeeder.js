const mongoose = require('mongoose');

const {ProviderSeeder} = require('./ProviderSeeder');

const {UsersSeeder} = require('./UsersSeeder');
const uri = 'mongodb://localhost:27017/provider_db';

async function runSeeder() {
    try {
        const conn = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB', conn.connection.name);

        await UsersSeeder(); // jalankan seeder HANYA jika runSeeder dipanggil
        console.log('Seeding finished!');
        
        await mongoose.connection.close();
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = runSeeder();
