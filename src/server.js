'use strict';

const Hapi = require('hapi')
const routes = require('./routes');

const server = Hapi.Server({
    host: 'localhost',
    port: 3000
});

server.route(routes);

module.exports = server
