const OrderModel = require("../models/order.model")



exports.getOrder = async (req,res,next) => {
    try {
        const order = await OrderModel.getAllOrder()
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message:"error while get order"})
    }
}



exports.getOrderById = async (req,res,next) => {
    try {
        let id = req.params.id;
        const order = await OrderModel.getorderById(id)
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

exports.postOrder = async (req,res,next) => {
    try {
        const data = req.body;
        const order = await OrderModel.postOrder(data)
        req.session.context = order;
        res.redirect("/place-order")
    } catch (error) {
        res.status(500).json({error:error})
    }
}
exports.getPlaceOrder = async (req,res,next) => {
    const order = req.session.context || undefined;
    if(order == undefined){
        res.redirect("/home")
    }
    delete req.session.context;
    res.render("place-order",{
        order:order,
    })
}