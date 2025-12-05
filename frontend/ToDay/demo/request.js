const http = require('http');
const path = require('path');
const data = JSON.stringify({ 
    name: 'John Doe',
    age: 30
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'Post',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {

     res.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
});

req.on('error', (error) => {
    console.error('Error with request:', error);
});

req.write(data);
req.end();