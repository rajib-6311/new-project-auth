import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _type: {type: String},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true}
})

const productModel = mongoose.models.product || mongoose.model('product', productSchema)
export default productModel;