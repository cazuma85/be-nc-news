

exports.up = function (knex) {
  console.log('creating articles tables');
  return knex.schema.createTable('articles', (articlesTable) => {
    articlesTable.incroments('article_id').primary();
    articlesTable.sting('title');
    articlesTable.text('body');
    articlesTable.integer('votes').defaultTo(0);
    articlesTable.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  console.log('dropping articles tables');
  return knex.schema.dropTables('articles');
};
