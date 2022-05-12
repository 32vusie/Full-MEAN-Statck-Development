const providers = require('../models/providers-model');

// load data from providers module to page
module.exports.list = function (request, response) {
    response.render('providers/provider-list', {providers: providers})
}
console.log(exports)