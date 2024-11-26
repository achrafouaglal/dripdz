const Router = require("express").Router();
const ProductController = require("../controllers/product.controller")

Router.get("/api/product", ProductController.getProduct)
Router.get("/api/product/:id", ProductController.getProductById)

module.exports = Router;