var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

router.get('/', async function(req, res, next) {
  const tasks = await knex('tasks').select('*');
  res.render('index', { tasks: tasks });
});
router.post('/create', async function(req, res, next) {
  const content = req.body.content;

  await knex('tasks').insert({
    user_id: 1,
    content: content
  });

  res.redirect('/');
});
module.exports = router;