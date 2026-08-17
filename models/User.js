const knex = require('../db/knex');

class User {
  static async create(name, password) {
    return await knex('users').insert({
      name: name,
      password: password
    });
  }
  static async findByName(name) {
  return await knex('users')
    .where({ name: name })
    .first();
}
static async findById(id) {
  return await knex('users')
    .where({ id: id })
    .first();
}
}

module.exports = User;