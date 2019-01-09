const handlebars = require('handlebars')

module.exports = {
    method: 'GET',
    path: '/handlebars',
    handler: () => {
        return handlebars.compile('<html><head><title>{{title}}</title></head></html>')({
            title: 'handlebars'
        })
    }
}