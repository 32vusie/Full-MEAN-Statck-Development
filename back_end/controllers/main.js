// main controller for home page

module.exports.home = function (request, response) {
    response.render('index', { title: 'Mean Stack agency' });
}

module.exports.about = function (request, response) {
    response.render('about', { title: 'About page' });
}

module.exports.contact = function (request, response) {
    response.render('contact', { title: 'Conatact page' });
}

module.exports.login = function (request, response) {
    response.render('login', { title: 'login page' });
}

module.exports.register = function (request, response) {
    response.render('register', { title: 'register page' });
}

module.exports.forgortpassword = function (request, response) {
    response.render('forgort-password', { title: 'forgot page' });
}

