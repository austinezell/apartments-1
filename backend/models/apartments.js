var mongoose = require('mongoose');

var apartmentSchema =  mongoose.Schema({
  unitNum: {type: Number, required: true},
  rent: {type: Number, required: true},
  isAvail: {type: Boolean, default: true},
  sqFt: {type: Number, required: true},
  property: {type: mongoose.Schema.ObjectId, ref: 'Property'},
  // tenants: {type: mongoose.Schema.ObjectId, ref: 'tenants'}
});

var Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
