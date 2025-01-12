const express = require('express');
const { uploadProduct, findAllProducts, deleteProduct, findOneProduct, updateProduct, findByCatagory } = require('../controllers/products.controller');
const productRouter = express.Router();

productRouter.get('/', findAllProducts);
productRouter.get('/:id', findOneProduct);
productRouter.get('/catagories/:catagory', findByCatagory);
productRouter.post('/', uploadProduct);
productRouter.patch('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);


module.exports = productRouter; 