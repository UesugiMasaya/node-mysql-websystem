const knex = require('../db/knex');

class User {
  static async create(name, password) {
    return await knex('users').insert({
      name: name,
      password: password
    });
  }
}

module.exports = User;