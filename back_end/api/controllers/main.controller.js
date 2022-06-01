const { request } = require("../../app");
const providers = require("../modules/providers.models");

// Error Checking
// util Functions
//check if list is empty
function isEmptyList(obj) {
  return (!obj || obj.lenght == 0 || Object.keys(obj).lenght == 0);
}

// check for provider if exists
function existsProvider(id) {
  return providers.find((provider) => provider.id == id);
}

// generate uid
function getUniqueId(providers) {
  // generate new random id with 6 digits
  let min = 100000;
  let max = 999999;

  do {
    var id = Math.floor(Math.random() * (max - min) + min);
  } while (existsProvider(id)); // check everytime if the id exists

  return id;
}

// CRUD - Create (Post), Read (get), Update (put), delete

// post
// uri: /api/providers
module.exports.create = function (require, response) {
  if (isEmptyList(providers)) {
    // if statement checking if the list is empty
     providers = []; // return empty list if nothing is found
  }

  var id = require.body.id;
  if (existsProvider(id)) {
    // if the ID is found
    response.status(400);
    request.send("Duplicate is found.");
    id = getUniqueId(); //then generate a new ID
  }

  var provider = require.body; // get a new provider
  provider.id = id;

  // write new provider to providers model file
  providers.push(provider);
  response.status(200);
  response.send(provider);
};

// GET  all
// uri: /api/providers
module.exports.readAll = function (require, response) {
  if (isEmptyList(providers)) {
    response.status(404);
    response.send("No providers found, List is empty");
  }
  response.status(200);
  response.send(providers);
};

// GET One
// uri: /api/providers/123
module.exports.readOne = function (require, response) {
    
  if (isEmptyList(providers)) {
    response.status(404);
    response.send("Provider not found. list is empty");
  }
  let id = require.params.id;
  // serch the model data for the following id
  provider = providers.find(provider => provider.id == id);
  response.status(200);
  response.send(provider);
}

// put
// uri: /api/providers
module.exports.update = function (require, response) {
  if (isEmptyList(providers)) {
    response.status(404);
    response.send("Can not update provider. list is empty");
  }
  let id = require.params.id;
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
};

// delete one
// uri: /api/providers/123
module.exports.deleteOne = function (require, response) {
  if (isEmptyList(providers)) {
    response.status(404);
    response.send("Can not delete provider. list is empty");
  }
  let id = require.params.id;
  let provider = providers.find(provide => provider.id == id);
  let idx = providers.indexOf(providers);

  // remove the element at the idx
  providers.splice(idx, 1);

  response.status(200);
  response.send(provider);
};

// delete all
// uri: /api/providers
module.exports.deleteAll = function (require, response) {
  if (isEmptyList(providers)) {
    response.status(404);
    response.send("Can not update provider. list is empty");
  }
  providers = [];
  response.status(200);
  response.send("App providers Deleted Successfuly");
};
