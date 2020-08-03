

exports.up = function (knex) {
  console.log('creating comments tables');
  return knex.schema.createTable('comments', (commentsTable) => {
    commentsTable.incroments('comment_id').primary();
    commentsTable.integer('author').references('username').inTable('users');
    commentsTable
      .integer('article_id')
      .references('article_id')
      .inTable('articles');
    commentsTable.integer('votes').defaultTo(0);
    commentsTable.timestamp('created_at').defaultTo(knex.fn.now());
    commentsTable.text('body');
    
    
  });
};

exports.down = function (knex) {
  console.log('dropping comments tables');
  return knex.schema.dropTables('comments');
};  
