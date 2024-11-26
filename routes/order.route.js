const Router = require("express").Router();
const OrderController = require("../controllers/order.controller")

const bodyParser = require("body-parser")


Router.get("/place-order", OrderController.getPlaceOrder)
Router.get("/api/order", OrderController.getOrder)
Router.get("/api/order/:id", OrderController.getOrderById)
Router.post("/api/order", bodyParser.urlencoded({ extended: true }) ,OrderController.postOrder)


module.exports = Router;