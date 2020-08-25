const knex = require('../db/connection');

exports.selectTopics = () => {
  console.log('====> in the modles');
  return knex
    .select('*')
    .from('topics')
    .then(topics => {
      return topics;
    });
};
