import express from 'express'
import { addProducts, listProduct, singleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';


const productRouter = express.Router()

productRouter.post('/add',upload.single('image'), addProducts)
productRouter.get('/list', listProduct)
productRouter.get('/single', singleProduct)



export default productRouter;