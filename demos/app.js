const http = require('http');
const server = http.createServer((request, Response) => {
    Response.writeHead(200, {'Content-Type' : 'text/html'});

    // Response.write('<h1> Hello world, this is my 1st node.js project <h1>');
    // Response.end();
    if (request.url === '/get') {
        Response.write('you are at the get page response');
        if (request.method === 'GET') {
            Response.end('GET');
        }
    }else if (request.url === '/post') {
        Response.write('you are at the post page response');
        if (request.method === 'POST') {
            Response.end('POST');
        }
    }else if (request.url === '/put') {
        Response.write('you are at the put page response');
        if (request.method === 'PUT') {
            Response.end('PUT');
        }
    }else if (request.url === '/delete') {
        Response.write('you are at the delete page response');
        if (request.method === 'DELETE') {
            Response.end('DELETE');
        }
    }else {
        Response.end('File not found');
    }
    Response.end();
} );

server.listen(3000, ()=>console.log('http://localhost:3000'));