const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {

    const products = await Product.find({
        deleted: false,
        status: "active"
    });

    const newProducts = products.map(item => {
        item.newPrice = (item.price - item.discountPercentage).toFixed(0);
        return item;
    })

    res.render("client/pages/products/index", {
        pageTitle: "Danh sách sản phẩm",
        products: newProducts
    })
}