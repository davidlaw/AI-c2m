const express = require('express');
const router = express.Router();
const { 
    getCustomizations, 
    getCustomizationById, 
    createCustomization, 
    updateCustomization, 
    deleteCustomization 
} = require('../controllers/customizationController');
const { protect } = require('../middleware/authMiddleware');

// @desc    Get all customizations
// @route   GET /api/customizations
// @access  Private
router.route('/').get(protect, getCustomizations).post(protect, createCustomization);

// @desc    Get single customization
// @route   GET /api/customizations/:id
// @access  Private
router.route('/:id').get(protect, getCustomizationById).put(protect, updateCustomization).delete(protect, deleteCustomization);

module.exports = router;