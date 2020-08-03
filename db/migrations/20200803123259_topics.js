exports.up = function (knex) {
  console.log('creating topics tables');
  return knex.schema.createTable('topics',( topicsTable) => {
  topicsTable.incroments('slug').primary();
  topicsTable.text('description');
 })
};

exports.down = function (knex) {
  console.log('dropping topics tables');
  return knex.schema.dropTables('topics');
};
