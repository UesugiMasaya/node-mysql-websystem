var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', function(req, res, next) {
  db.query(
    'SELECT * FROM tasks',
    function(error, results) {
      res.render('index', { tasks: results });
    }
  );
});

module.exports = router;