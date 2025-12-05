const express = require('express');

const fs = require('fs');
const dir = './public/';
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(dir));

app.get('/', (req, response) => {
        render(response, 'index.html');
});

app.get('/about', (req, response) => {
        render(response, 'about.html');
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
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