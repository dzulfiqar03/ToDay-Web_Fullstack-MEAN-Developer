const http = require('http');
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT || 3000;

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    // if (request. method === 'GET') {
    //     response.end('<h1>Welcome to the HTTP Server</h1>');
    // } else if (request.method === 'POST') {
    //     response.end('<h1>POST request received</h1>');
    // } else if (request.method === 'PUT') {
    //     response.end('<h1>PUT request received</h1>');
    // } else if (request.method === 'DELETE') {
    //     response.end('<h1>DELETE request received</h1>');
    // } else {
    //     response.end('<h1>Unsupported request method</h1>');
    // }  

    if (request.url === '/get') {
        response.write('you have sent a GET request');
        if (request.method === 'GET') {
            response.end('<h1>Welcome to the HTTP Server</h1>');
        }
    } else if (request.url === '/post') {
        response.write('you have sent a POST request');
        if (request.method === 'POST') {
            response.end('<h1>POST request received</h1>');
        }

    } else if (request.url === '/put') {
        response.write('you have sent a PUT request');
        if (request.method === 'PUT') {
            response.end('<h1>PUT request received</h1>');
        }
    } else if (request.url === '/delete') {
        response.write('you have sent a DELETE request');
        if (request.method === 'DELETE') {
            response.end('<h1>DELETE request received</h1>');
        }
    } else {
        response.end('<h1>Unsupported request method</h1>');
    }



}).listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
