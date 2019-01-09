'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server()
server.connection({
    host:'localhost',
    port: 3000
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, response) => {
        return response('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, response) => {
        return response('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.start((err)=>{
    if (err) console.log('error while connecting :'+err)
})

module.exports = server;
