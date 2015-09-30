var express = require('express');
var router = express.Router();

var User = require('../models/tenants');
var Property = require('../models/properties');
var Apartment = require('../models/apartments');

/* GET users listing. */

//gets users to be diplayed on a page
router.get('/', function(req, res, next) {
  User.find(function(err, data) {
    console.log(data);
    res.send(data);
  });
});

// router.delete('/:userId/remove', function(req, res) {
//   User.findByIdAndRemove(req.params.userId, function(err, deletedUser) {
//     res.status(err ? 400 : 200).send(err || deletedUser);
//   });
// });


//property crud
router.post('/newProperty', function(req, res, next) {
  Property.create(req.body, function(err, savedProperty) {
    res.status(err ? 400 : 200).send(err || savedProperty);
  });
});

router.delete('/property/:propertyId', function(req, res) {
  Property.findByIdAndRemove(req.params.propertyId, function(err, deletedProperty) {
    res.status(err ? 400 : 200).send(err || deletedProperty);
  });
});



//apartments crud
router.post('/newApartment', function(req, res, next) {
  Apartment.create(req.body, function(err, savedApartment) {
    res.status(err ? 400 : 200).send(err || savedApartment);
  });
});

router.delete('/apartment/:apartmentId', function(req, res) {
  Apartment.findByIdAndRemove(req.params.apartmentId, function(err, deletedApartment) {
    res.status(err ? 400 : 200).send(err || deletedApartment);
  });
});

router.put('/apartment/:apartmentId/toggleAvail', function(req, res) {
  Apartment.findById(req.params.apartmentId, function(err, apt) {
    apt.isAvail = !apt.isAvail;
    apt.save(function(err, savedApt) {
      res.send(savedApt);
    })
  })
})

module.exports = router;
