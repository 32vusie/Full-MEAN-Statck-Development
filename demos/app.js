const http = require('http');
const server = http.createServer((request, Response) => {
    Response.writeHead(200, {'Content-Type' : 'text/html'});

    // Response.write('<h1> Hello world, this is my 1st node.js project <h1>');
    // Response.end();

    if (request.method === 'GET') {
        Response.end('GET');
    }
    if (request.method === 'POST') {
        Response.end('POST');
    }
    if (request.method === 'PUT') {
        Response.end('PUT');
    }
    if (request.method === 'DELETE') {
        Response.end('DELETE');
    }

} );

server.listen(3000, ()=>console.log('http://localhost:3000'));