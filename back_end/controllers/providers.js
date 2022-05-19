const providers = require("../module/providers");

// load data from providers module to page in the list table
module.exports.list = function (request, response) {
    // console.log(exports),
  response.render("providers/providers-list", {
    title: "Service Providers",
    providers : providers,
  })
  
}

// load data from providers module to page in the details table
module.exports.details = function (request, response) {
  let id = request.params.id;
  // serch the model data for the following id
  let provider = providers.find(provider => provider.id == id);

  response.render("providers/providers-details", {
    id: id,
    title: "Service Provider details ",
    company: provider.company,
  })
}


// load data from providers module to page in the edit form
module.exports.edit = function (request, response) {
  let id = request.params.id;
  // serch the model data for the following id
  let provider = providers.find(provider => provider.id == id);

  response.render("providers/providers-edit ", {
    id: id,
    title: "Edit",
    provider : provider,
  });
}

// load data from providers module to page in the update form
module.exports.update = function (request, response) {
  let id = request.params.id;
  // serch the model data for the following id
  let provider = providers.find(provider => provider.id == id);

  // update information from the form
  provider.firstname = request.body.firstname;
  provider.lastname = request.body.lastname;
  provider.position = request.body.position;
  provider.company.company_name = request.body.company_name;
  provider.company.address = request.body.address;
  provider.company.address2 = request.body.address2;
  provider.company.city = request.body.city;
  provider.company.state = request.body.state;
  provider.company.postal_code = request.body.postal_code;
  provider.company.phone = request.body.phone;
  provider.company.email = request.body.email;
  provider.company.description = request.body.description;
  provider.company.tagline = request.body.tagline;

  response.render("providers/providers-update ", { title: "update" });
}

// Add form
module.exports.addform = function (request, response) {
  let id = request.params.id;
  // serch the model data for the following id
  let provider = providers.find(provider => provider.id == id);

  response.render("providers/providers-add-form", {
    title: "Add",
    provider : provider,
  })
}

// Add provider
module.exports.add = function (request, response) {
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
      company_name: request.body.company_name,
      address: request.body.address,
      address2: request.body.address2,
      city: request.body.city,
      state: request.body.state,
      postal_code: request.body.postal_code,
      phone: request.body.phone,
      email: request.body.email,
      description: request.body.description,
      tagline: request.body.tagline,
    },
  }
//   write new provider to providers model file 
  providers.push(provider);
  response.render("providers-add", { title: "Added" });
}

// delete provider 
module.exports.delete = function (request, response) {
    let id = request.params.id;
    let provider = providers.find(provider => provider.id == id);
    let company = provider.company.company_name;
    let idx = providers.indexOf(providers.find(provider => provider.id == id));

    // remove the element at the idx 
    providers.splice(idx,1)


    response.render("providers/providers-delete ", {title: "delete",
      company : company
    })
  }

  console.log(exports)