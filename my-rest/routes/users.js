var express = require('express');
var router = express.Router();
const User = require('../models').User;
const sequelize = require('Sequelize');

// router.use('', passport.authenticate('jwt', {session: false}));

/* GET users listing. */
// users
router.get('', async function (req, res, next) {
  const users = await User.findAll();
  res.json(users);
});

router.post('', async function (req, res) {
  const user = await User.create(req.body);
  res.json(user);
});



module.exports = router;
