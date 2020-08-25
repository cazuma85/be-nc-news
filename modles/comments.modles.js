const knex = require('../db/connection');

exports.updateComments = (params) => {
  console.log(params)
  console.log("in the modles");
  return knex
    .select('*')
    .from('comments')
    .where('comment_id', params.comment_id)
    .then((comments) => {
      console.log(comments)
        if (comments.length === 0) {
        return Promise.reject({ status: 404, msg: 'query does not exist' });
      }
      return comments;
    });
};