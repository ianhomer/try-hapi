const expect = require('chai').expect
const server = require('../src/server.js')

describe('Handlebar', () => {
    it('should default page be OK', async () => {
        const response = await server.inject('/handlebar')
        expect(response.statusCode).to.equal(200)
        expect(response.payload).to.equal('<html><head><ttile>handlebar</ttile></head>')
    })
})