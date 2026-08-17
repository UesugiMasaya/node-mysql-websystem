const express = require('express');
const router = express.Router();

const User = require('../models/User');
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  res.render('signup');
});

router.post('/', async function(req, res, next) {
  const name = req.body.name;
  const password = req.body.password;

  await User.create(name, password);

  res.redirect('/');
});

module.exports = router;