const http = require('http');
const fs = require('fs');
const path = require('path');
const axios = require('axios')
const url = require('url')

//const port = process.env.PORT || 5000;

const filePath = (path.join(__dirname, 'public', 'index.html'))

//`${filePath}/public/index.html`

/*
const server = http.createServer((req, res) => {
    console.log(req.url)
    fs.readFile((path.join('./', 'public', 'index.html')), (err, content) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(content);
        res.end();
    });
});
*/


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    switch(req.url) {
        case '/about':
            fs.readFile((path.join('./', 'public', 'about.html')), (err, content) => {
                res.statusCode = 200;
                res.write(content);
                res.end();
            });
            break;
        case '/contact-me':
            fs.readFile((path.join('./', 'public', 'contact-me.html')), (err, content) => {
                res.statusCode = 200;
                res.write(content);
                res.end();
            });
            break;
        case '/':
            fs.readFile((path.join('./', 'public', 'index.html')), (err, content) => {
                res.statusCode = 200;
                res.write(content);
                res.end();
            });
            break;
        case '/style.css':
            res.setHeader('Content-type', 'text/css');
            res.write(fs.readFileSync('./public/style.css'));
            res.end();
        default:
            fs.readFile((path.join('./', 'public', '404.html')), (err, content) => {
                res.statusCode = 404;
                res.write(content);
                res.end();
            });
    };
});

/*
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
*/