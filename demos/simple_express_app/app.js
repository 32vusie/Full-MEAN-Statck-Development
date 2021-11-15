const express = require('express');
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT | 3000;

const app = express();

app.get('/', (request, response) =>{
    render(response, '/index2.html');
})

app.get('/about', (request, response) =>{
    render(response, '/about.html');
})

app.get('/contact', (request, response) => {
    render(response, '/contact.html');
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

const render = (response, file) =>{
    fs.readFile(dir+file, (err, data) =>{
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end('<h1>404 page not found</h1>')
        } 
        response.writeHead(200, { 'Content-Type': 'text/html' });
        return response.end(data);
        
    });
}