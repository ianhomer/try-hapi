const assert = require('chai').assert;
const server = require('../server.js');

server.register([{
    register: require('inject-then')
}])

describe('Server', function () {
    it('should validate server running', function () {
        return server.injectThen({
            method: 'GET',
            url: '/'
        })
            .then(
                function (response) {
                    assert.deepEqual(response.statusCode, 200);
                }
            )
    })
})