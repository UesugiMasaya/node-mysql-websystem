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
}

module.exports = User;