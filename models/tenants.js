var mongoose = require('mongoose');

var userSchema =  mongoose.Schema({
  isManager: Boolean,
  name: String,
  email: String
});

//model
var User = mongoose.model('user', userSchema);

module.exports = User;
