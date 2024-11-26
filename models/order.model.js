const mongoose = require("mongoose")


const OrderSchema = mongoose.Schema({
    productId:String,
    product:String,
    productPrice:Number,
    name: String,
    number: Number,
    instagram: String,
    size: String,
    color: String,
    city: String,
    type: String
})

const Order = mongoose.model("order", OrderSchema )



exports.postOrder = async (data) => {
    try {
        let PostOrder = new Order({
            productId:data.productid,
            product:data.product,
            productPrice:Number(data.price),
            name: data.name,
            number: data.number,
            instagram: data.instagram,
            size: data.size,
            color: data.color,
            city: data.city,
            type: data.type
        })
        const order = await PostOrder.save()
        return order;
    } catch (error) {
        return error;
    }
}

exports.getAllOrder = async () => {
    try {
        const order = await Order.find();
        return order;
    } catch (error) {
        return error; 
    }
}

exports.getOrderById = async (id) => {
    try {
        const order = await Order.findById(id);
        return order;
    } catch (error) {
        return error; 
    }
}