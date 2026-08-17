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
router.post('/create', function(req, res, next) {
  const content = req.body.content;

  db.query(
    'INSERT INTO tasks (user_id, content) VALUES (?, ?)',
    [1, content],
    function(error, results) {
      res.redirect('/');
    }
  );
});
module.exports = router;