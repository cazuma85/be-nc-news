const knex = require('../db/connection');

exports.selectArticles = (params, sort_by) => {
  console.log(sort_by);
  return knex
    .select('*')
    .from('articles')
    .where('article_id', params.article_id)
    .orderBy(sort_by || 'votes')
    .then((articles) => {
        if (articles.length === 0) {
        return Promise.reject({ status: 404, msg: 'query does not exist' });
      }
      return articles[0];
    });
};
exports.updatedArticles = (params, dataToChange) => {
  console.log('====> in the modles');
  return knex
    .select('*')
    .from('articles')
    .where('article_id', params.article_id)
    .then((articles) => {
      if (articles.length === 0) {
        return Promise.reject({ status: 404, msg: 'query does not exist' });
      }

      articles[0].votes += dataToChange.inc_votes;

      return articles;
    });
};
exports.insertArticles = (params, comment) => {
  console.log(comment);
  return knex
    .select('*')
    .from('articles')
    .where('article_id', params)
    .returning('*')
    .then(([articles]) => {
      articles.author = comment.username;
      articles.body = comment.body;
      console.log(articles);
      if (articles.length === 0) {
        return Promise.reject({ status: 404, msg: 'query does not exist' });
      }
      return articles;
    });
};
exports.selectAllArticles = (query) => {
  console.log('i am in the moddles ');
  console.log(query);
  return knex
    .select('*')
    .from('articles')
   
    .orderBy(query.sort_by || 'votes')
    .then((articles) => {
      if(query.author){
       const newArticles = [];
      articles.forEach(oneArticle=>{
        if(oneArticle.author ===query.author){
           newArticles.push(oneArticle)
      } 
      })
      console.log(newArticles);
      if (newArticles.length === 0) {
        return Promise.reject({ status: 404, msg: 'query does not exist' });
      }
      return newArticles;
      }



       if(query.topic){
       const newArticles = [];
      articles.forEach(oneArticle=>{
        if(oneArticle.topic ===query.topic){
           newArticles.push(oneArticle)
      } 
      })
      console.log(newArticles);
      if (newArticles.length === 0) {
        return Promise.reject({ status: 404, msg: 'query does not exist' });
      }
      return newArticles;
      }



      console.log(articles);
      if (articles.length === 0) {
        return Promise.reject({ status: 404, msg: 'query does not exist' });
      }
      return articles;


    });
};
 //.where('author',query.author || *)