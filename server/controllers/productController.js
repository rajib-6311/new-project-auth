import productModel from "../models/productModel.js";

const addProducts = (req, res) => {
    try {
        const { _type, name, price, category, description } = req.body;
        // console.log(req.body);

        const productData = {
            _type:_type ? _type : '',
            name,
            price: Number(price),
            category,
            description,
        }
        // console.log('productData', productData);
        const product = new productModel(productData)
        product.save()

        res.status(201).json({
            success: true,
            message: `${name} Product added successfully`
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const listProduct = (req, res) => {};
const singleProduct = (req, res) => {};

export {
    addProducts,
    listProduct,
    singleProduct
};
