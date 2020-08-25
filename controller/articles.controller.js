const { selectArticles, updatedArticles, insertArticles, selectAllArticles} = require('../modles/articles.modles');
const getArticles = (req, res, next) => {
  console.log("i am here in the controler" )
  selectArticles(req.params, req.query.sort_by )
    .then((article) => {
      res.send({ article });
    })
    .catch(next);
};
const patchArticles = (req, res, next) => {
  console.log('===> in the controller');
  updatedArticles(req.params, req.body)
    .then((article) => {
      res.send({ article });
    })
    .catch(next);
};
const postArticles = (req, res, next)=>{
  console.log('===> in the controller');
  insertArticles( req.body)
    .then(article => {
      res.send({ article });
    })
    .catch(next);
};
const getAllArticles = (req,res,next)=>{
  console.log('===> in the controller 3 ==');
  selectAllArticles(req.query)
    .then((articles) => {
      res.send({ articles });
    })
    .catch(next);
}
module.exports = { getArticles, patchArticles, postArticles,getAllArticles};
