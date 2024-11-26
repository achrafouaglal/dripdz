const Router = require("express").Router();
const ProductDetailController = require("../controllers/productdetail.controller")

Router.get("/product/:id", ProductDetailController.getProductDetail)


module.exports = Router;