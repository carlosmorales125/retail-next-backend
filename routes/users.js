var express = require('express');
var generateUsers = require('../controllers/users/generate-users.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = generateUsers();
  res.json({users: users});
});

module.exports = router;
