var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
  isManager: {type: Boolean, default: false},
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
});
