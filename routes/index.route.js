const Router = require("express").Router();
const IndexController = require("../controllers/index.controller")

Router.get("/", IndexController.getIndex)


module.exports = Router;