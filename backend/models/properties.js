var mongoose = require('mongoose');

var propertySchema =  mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  apartments: [{type: mongoose.Schema.ObjectId, ref: 'Apartment'}]
});

//model
var Property = mongoose.model('Property', propertySchema);

module.exports = Property;
