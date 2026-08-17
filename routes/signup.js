const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  res.render('signup');
});

router.post('/', async function(req, res, next) {
  const name = req.body.name;
  const password = req.body.password;

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create(name, hashedPassword);

  res.redirect('/');
});

module.exports = router;