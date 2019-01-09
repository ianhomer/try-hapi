const expect = require('chai').expect
const server = require('../server.js')

describe('Server', () => {
    it('should default page be OK', async () => {
        const response = await server.inject('/')
        expect(response.statusCode).to.equal(200)
        expect(response.payload).to.equal('Hello, world!')
    })

    it('should unknown page be not found', async () => {
        const response = await server.inject('/not-found')
        expect(response.statusCode).to.equal(404)
    })
})