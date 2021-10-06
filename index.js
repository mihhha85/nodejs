const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

let basePath = '';

const server = http.createServer((req, res) => {

    console.log('Server request');
    console.log('Just for test');

    switch(req.url){
        case '/':
            res.statusCode = 200;
            basePath = createPath('lesson1');
            break;
        case '/contact':
            res.statusCode = 200;
            basePath = createPath('lesson2');
            break;
        case '/about':
            res.statusCode = 301;
            res.setHeader('Location', '/contact');
            break;    
        default:
            res.statusCode = 404;
            basePath = createPath('error');    
    }

    fs.readFile(basePath, 'utf8', function(err, data){

        if(err){
            console.log(err);
            res.statusCode = 500;
            res.end('Error');
        }else{
            res.write(data);
            res.end();
        }
    })
})

server.listen(PORT, 'localhost', err => {
    err ? console.error(err) : console.log(`Server listener ${PORT}`);
})