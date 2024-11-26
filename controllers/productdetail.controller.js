exports.getProductDetail = (req,res,next) => {
    let id = req.params.id
    res.render("product-detail",{
        id:id,
    })
}