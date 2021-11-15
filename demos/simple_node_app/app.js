const http = require('http');
const fs = require('fs');
// const { removeListener } = require('process');
const dir = './public/';
const port = process.env.PORT | 3000;

const server = http.createServer((request, response) =>{

    if (request.url === '/') {
        render(response, 'index.html');
    } else if (request.url === '/about') {
        render(response, 'about.html');
    } else if (request.url === '/contact'){
        render(response, 'contact.html');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1>page not found</h1>')
    }

}).listen(port, ()=> {
    console.log(`http://localhost:${port}`);
})

const render = (response, file) =>{
    fs.readFile(dir+file, (err, data) =>{
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end('<h1>page not found</h1>')
        } 
        response.writeHead(200, { 'Content-Type': 'text/html' });
        return response.end(data);
        
    });
}