const ProductModel = require("../models/product.model")



exports.getProduct = async (req,res,next) => {
    try {
        let {status} = req.query || null;
        const product = await ProductModel.getProductByStatus(status)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:"error while get product"})
    }
}



exports.getProductById = async (req,res,next) => {
    try {
        let id = req.params.id;
        const product = await ProductModel.getProductById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error:error})
    }
}
