const http = require('http');
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        render(response, 'index.html');
    } else if (request.url === '/about') {
        render(response, 'about.html');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1>404 Not Found</h1>');
    }

}).listen(port, () => {
    console.log(`http://localhost:${port}/`);
});


function render(res, file) {
    fs.readFile(dir + file, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 Internal Server Error</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}