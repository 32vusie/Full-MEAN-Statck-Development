const providers = require('../models/providers-model');

// load data from providers module to page
module.exports.list = function (request, response) {
    response.render('providers/providers-list', {providers: providers})
}

// load data from providers module to page
module.exports.details = function (request, response) {
    let id = request.params.id;
    let provider = providers.find(provider => provider.id == id)
    response.render('providers/providers-details ', { id : id, title: 'Service Provider details ', company: provider.company})
}