
exports.up = function(knex) {
    console.log('creating users tables');
  return knex.schema.createTable('users', (usersTable) => {
    usersTable.incroments('username').primary();
    usersTable.text('avatar_url');
    usersTable.sting('name');
  });
};

exports.down = function(knex) {
  console.log('dropping users tables');
  return knex.schema.dropTables('users');
};
