const express = require('express');
const router = express.Router();

const User = require('../models/User');
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  res.render('signin');
});

router.post('/', async function(req, res, next) {
  const name = req.body.name;
  const password = req.body.password;

  const user = await User.findByName(name);
  
if (user && user.password === password) {
  res.redirect('/');
} else {
  res.send('ログイン失敗');
}
});

module.exports = router;