const providers = require('../models/providers.models');


// CRUD - Create (Post), Read (get), Update (put), delete

// post
// uri: /api/providers
module.exports.create = function (require, response) {
       // generate new random id with 6 digits 
  let min = 100000;
  let max = 999999;
  let id = Math.floor(Math.random() * (max - min) + min);
  // create new provider object
  let provider = {
    // serch the model data for the following id
    // update information from the form
    id: id,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    position: request.body.position,
    company: {
      company_name: request.body.company.company_name,
      address: request.body.company.address,
      address2: request.body.company.address2,
      city: request.body.company.city,
      state: request.body.company.state,
      postal_code: request.body.company.postal_code,
      phone: request.body.company.phone,
      email: request.body.company.email,
      description: request.body.company.description,
      tagline: request.body.company.tagline,
    },
  }
//   write new provider to providers model file 
  providers.push(provider);
  response.status(200);
  response.send(provider);
}

// get all
// uri: /api/providers
module.exports.readAll = function (require, response) {
    response.status(200);
    response.send(providers);
}

// get on
// uri: /api/providers/123
module.exports.readOne = function (require, response) {
    let id = request.params.id;
    // serch the model data for the following id
    let provider = providers.find(provider => provider.id == id);
    response.status(200);
    response.render(provider);
}

// put
// uri: /api/providers
module.exports.update = function (require, response) {
    let id = request.params.id;
  // serch the model data for the following id
  let provider = providers.find(provider => provider.id == id);

  // update information from the form
  provider.firstname = request.body.firstname;
  provider.lastname = request.body.lastname;
  provider.position = request.body.position;
  provider.company.company_name = request.body.company.company_name;
  provider.company.address = request.body.company.address;
  provider.company.address2 = request.body.company.address2;
  provider.company.city = request.body.company.city;
  provider.company.state = request.body.company.state;
  provider.company.postal_code = request.body.company.postal_code;
  provider.company.phone = request.body.company.phone;
  provider.company.email = request.body.company.email;
  provider.company.description = request.body.company.description;
  provider.company.tagline = request.body.company.tagline;
  response.status(200);
  response.send(provider);
}

// delete one
// uri: /api/providers/123
module.exports.deleteOne = function (require, response) {
    let id = request.params.id;
    let provider = providers.find(provider => provider.id == id);
    let idx = providers.indexOf(providers);

    // remove the element at the idx 
    providers.splice(idx,1)

    response.status(200);
    response.send(provider);
}

// delete all
// uri: /api/providers
module.exports.deleteAll = function (require, response) {
   providers = [];
   response.status(200);
   response.send("App providers Deleted Successfuly");
}