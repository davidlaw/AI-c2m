const asyncHandler = require('express-async-handler');
const Customization = require('../models/Customization');

// @desc    Fetch all customizations
// @route   GET /api/customizations
// @access  Private
const getCustomizations = asyncHandler(async (req, res) => {
  const customizations = await Customization.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(customizations);
});

// @desc    Fetch single customization
// @route   GET /api/customizations/:id
// @access  Private
const getCustomizationById = asyncHandler(async (req, res) => {
  const customization = await Customization.findById(req.params.id);

  if (customization) {
    if (customization.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized to access this customization');
    }
    res.json(customization);
  } else {
    res.status(404);
    throw new Error('Customization not found');
  }
});

// @desc    Create a customization
// @route   POST /api/customizations
// @access  Private
const createCustomization = asyncHandler(async (req, res) => {
  const {
    productId,
    designType,
    designContent,
    material,
    size,
    aiGenerated,
    originalImageUrl,
    generatedImageUrl,
    videoUrl
  } = req.body;

  const customization = new Customization({
    product: productId,
    user: req.user._id,
    designType,
    designContent,
    material,
    size,
    aiGenerated: aiGenerated || false,
    originalImageUrl,
    generatedImageUrl,
    videoUrl
  });

  const createdCustomization = await customization.save();
  res.status(201).json(createdCustomization);
});

// @desc    Update a customization
// @route   PUT /api/customizations/:id
// @access  Private
const updateCustomization = asyncHandler(async (req, res) => {
  const customization = await Customization.findById(req.params.id);

  if (customization) {
    if (customization.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized to update this customization');
    }

    customization.designContent = req.body.designContent || customization.designContent;
    customization.material = req.body.material || customization.material;
    customization.size = req.body.size || customization.size;
    customization.generatedImageUrl = req.body.generatedImageUrl || customization.generatedImageUrl;
    customization.videoUrl = req.body.videoUrl || customization.videoUrl;

    const updatedCustomization = await customization.save();
    res.json(updatedCustomization);
  } else {
    res.status(404);
    throw new Error('Customization not found');
  }
});

// @desc    Delete a customization
// @route   DELETE /api/customizations/:id
// @access  Private
const deleteCustomization = asyncHandler(async (req, res) => {
  const customization = await Customization.findById(req.params.id);

  if (customization) {
    if (customization.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized to delete this customization');
    }

    await customization.remove();
    res.json({ message: 'Customization removed' });
  } else {
    res.status(404);
    throw new Error('Customization not found');
  }
});

module.exports = {
  getCustomizations,
  getCustomizationById,
  createCustomization,
  updateCustomization,
  deleteCustomization,
};