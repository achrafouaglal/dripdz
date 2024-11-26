const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name: String,
    image:Array,
    price: Number,
    category: String,
    color: Array,
    size: Array,
    status:String
})

const Product = mongoose.model("product", ProductSchema )



exports.getProductById = async (id) => {
    try {
        const product = await Product.findById(id)
        return product;
    } catch (error) {
        return error;
    }
}

exports.getProductByStatus = async (status) => {
    try {
        
        const product = status == null ?  await Product.find({}): await Product.find({status:status});
        return product;
    } catch (error) {
        return error;
    }
}