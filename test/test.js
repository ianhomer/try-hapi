const assert = require('assert');
const server = require('../server.js');

describe('Server', function () {
    it('should default page be OK', async () => {
        const response = await server.inject('/')
        assert.deepStrictEqual(200, response.statusCode)
        assert.deepStrictEqual('Hello, world!', response.payload)
    })

    it('should unknown page be not found', async () => {
        const response = await server.inject('/not-found')
        assert.deepStrictEqual(404, response.statusCode)
    })
})