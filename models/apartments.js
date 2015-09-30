var mongoose = require('mongoose');

var apartmentSchema =  mongoose.schema({
  tenant: Array, //array of users?
  isManager: Boolean,
  name: String,
  rent: Number,
  isAvail: Boolean,
  unitNum: Number,
  sqFt: Number
});

//model
var Apartment = mongoose.model('user', apartmentSchema);

module.exports = Apartment;
