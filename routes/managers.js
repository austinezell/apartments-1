var express = require('express');
var router = express.Router();

var User = require('../models/users');
var Property = require('../models/properties');

/* GET users listing. */

//gets user.. not necessay maybe?
router.get('/', function(req, res, next) {
  User.find(function(err, data) {
    console.log(data);
    res.send(data);
  });
});

router.post('/newProperty', function(req, res, next) {
  Property.create(req.body, function(err, savedProperty) {
    res.status(err ? 400 : 200).send(err || savedProperty);
  });
});

router.post('/newApartment', function(req, res, next) {
  Property.create(req.body, function(err, savedApartment) {
    res.status(err ? 400 : 200).send(err || savedApartment);
  });
});

module.exports = router;
