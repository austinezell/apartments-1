var mongoose = require('mongoose');

var propertySchema =  mongoose.Schema({
  isOccupied: Boolean,
  // manager: user,//?
  name: String,
  address: String
  // apartments: [{Object apartments}]
});

//model
var Property = mongoose.model('Property', propertySchema);

module.exports = Property;
