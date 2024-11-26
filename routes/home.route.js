const Router = require("express").Router();
const HomeController = require("../controllers/home.controller")

Router.get("/home", HomeController.getHome)


module.exports = Router;