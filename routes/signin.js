const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const express = require('express');
const router = express.Router();

const User = require('../models/User');
const knex = require('../db/knex');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
  {
    usernameField: 'name',
    passwordField: 'password'
  },
  async function(username, password, done) {
    console.log(username);
    console.log(password);
    const user = await User.findByName(username);

    if (!user) {
      return done(null, false);
    }

    const comparedPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (comparedPassword) {
      return done(null, user);
    }

    return done(null, false);
  }
));

router.get('/', function(req, res, next) {
  res.render('signin');
});

router.post('/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin'
  })
);

module.exports = router;