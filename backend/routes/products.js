const express = require('express');
const router = express.Router();
const { 
    getProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/productController');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts).post(createProduct);

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

module.exports = router;