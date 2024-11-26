const Router = require("express").Router();
const ContactController = require("../controllers/contact.controller")

Router.get("/contact", ContactController.getContact)


module.exports = Router;