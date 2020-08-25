const express = require('express');

const usersRouter = express.Router();

const getUsers = require('../controller/users.controller');

console.log('====> getting in to the router');

usersRouter.route('/:username').get(getUsers);
//.get("/",getUsers)
module.exports = usersRouter;
