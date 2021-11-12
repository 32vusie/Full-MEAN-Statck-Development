const { Console } = require('console')
const http = require('http')

const request = JSON.stringify({
    title : 'MEAN stack'
})

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET', //'POST', 'DELETE', 'PUT'
    headers: {
        'Content-Type' : 'Application/json',
        'Content-Length' : data.length
    }
}

const request = http.request(options, response => {
    request.on('data', chunk => {
        process.stdout.write(chunk);
    })
})

request.on('error', error => {
    console.log(error);
})

request.end()