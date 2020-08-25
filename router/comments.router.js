const express = require('express');

const commentsRouter = express.Router();

const {patchComments} = require('../controller/comments.controller');

console.log('====> getting in to the router');

commentsRouter.route('/:article_id').patch(patchComments)
module.exports = commentsRouter;
