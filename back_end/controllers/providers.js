const providers = require('../models/providers');

// load data from providers module to page
module.exports.list = function (request, response) {
    response.render('providers/providers-list', { title : 'Service Providers', providers : providers})
}

// load data from providers module to page
module.exports.details = function (request, response) {
    let id = request.params.id;
    // serch the model data for the following id
    let provider = providers.find(provider => provider.id == id)

    response.render('providers/providers-details ', { id : id, title: 'Service Provider details ', company : provider.company})
}
// console.log(exports)