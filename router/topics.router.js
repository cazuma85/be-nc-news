const express = require('express');

const topicsRouter = express.Router();

const getTopics =require("../controller/topics.controller");

console.log("====> getting in to the router")

topicsRouter.route("/").get(getTopics)

module.exports = topicsRouter;