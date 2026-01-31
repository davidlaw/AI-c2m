const express = require('express');
const router = express.Router();
const { 
    generateImageFromText,
    generateVariations,
    processUploadedImage,
    generateVideoPreview
} = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

// @desc    Generate image from text prompt
// @route   POST /api/ai/generate-image
// @access  Private
router.route('/generate-image').post(protect, generateImageFromText);

// @desc    Generate variations of an image
// @route   POST /api/ai/generate-variations
// @access  Private
router.route('/generate-variations').post(protect, generateVariations);

// @desc    Process uploaded image for customization
// @route   POST /api/ai/process-image
// @access  Private
router.route('/process-image').post(protect, processUploadedImage);

// @desc    Generate video preview of custom product
// @route   POST /api/ai/generate-video
// @access  Private
router.route('/generate-video').post(protect, generateVideoPreview);

module.exports = router;