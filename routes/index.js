var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

router.get('/', async function(req, res, next) {
  const tasks = await knex('tasks')
  .where({ user_id: req.user.id })
  .select('*');

  res.render('index', { tasks: tasks });
});
router.post('/create', async function(req, res, next) {
  const content = req.body.content;

  await knex('tasks').insert({
    user_id: req.user.id,
    content: content
  });

  res.redirect('/');
});
module.exports = router;