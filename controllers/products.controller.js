
const { v4: uuidv4 } = require('uuid');
const Product = require('../models/products.model');


exports.findAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(200).json(error.message);
    }
}

exports.findOneProduct = async (req, res) => {
    try {
        const product = await Product.find({ id: req.params.id });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.findByCatagory = async (req, res) => {
    try {
        const productCatagory = await Product.find({ catagory: req.params.catagory });
        res.status(200).json(productCatagory);
    } catch (error) {
        res.status(500).json(error.message)
    }
}


exports.uploadProduct = async (req, res) => {
    try {
        const newProduct = new Product({
            id: uuidv4(),
            title: req.body.title,
            catagory: req.body.catagory,
            price: Number(req.body.price),
            description: req.body.description,
            photoUrl: req.body.photoUrl,
        })
        await newProduct.save();
        res.status(200).json({ message: 'successfully created Product', newProduct });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        product.title = req.body.title;
        product.price = req.body.price;
        product.description = req.body.description;
        product.catagory = req.body.catagory;
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({ id: req.params.id });
        res.status(200).json({ message: "Product deleted successfully" })
    } catch (error) {
        res.status(500).json(error.message);
    }
}