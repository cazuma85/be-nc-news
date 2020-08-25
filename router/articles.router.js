const express = require('express');

const articlesRouter = express.Router();

const { getArticles, patchArticles, postArticles, getAllArticles} = require('../controller/articles.controller');

console.log('====> getting in to the router');

articlesRouter.route('/:article_id').get(getArticles).patch(patchArticles).post(postArticles)
articlesRouter.route("").get(getAllArticles)
module.exports = articlesRouter;
