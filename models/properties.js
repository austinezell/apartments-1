var mongoose = require('mongoose');

var propertySchema =  mongoose.Schema({
  // manager: {user,//?}
  name: String,
  address: String,
  // apartments: [{type:Object Apartment}]
});

//model
var Property = mongoose.model('Property', propertySchema);

module.exports = Property;
