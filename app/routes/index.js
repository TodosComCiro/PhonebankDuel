var express = require('express');
var router = express.Router();

var userPage = require('./user');
var teamPage = require('./team');
var matchPage = require('./match');
var commandCenter = require('./commandcenter');
var rankPage = require('./rank');

var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  // If the user has not logged in
  if ( !req.user ) {
    res.render('user/login');
  } else {

    //Otherwise go to his userpage
    req.url = '/user/' + req.user.username;
    next('route');
  }
});

// Defining Routes
router.use('/user', userPage);
router.use('/team', teamPage);
router.use('/match', matchPage);
router.use('/cc', commandCenter);
router.use('/rank', rankPage);

module.exports = router;