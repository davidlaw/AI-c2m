const mongoose = require('mongoose');

const customizationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
    designType: {
      type: String,
      required: true,
      enum: ['upload', 'ai-generate', 'text'],
    },
    designContent: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    aiGenerated: {
      type: Boolean,
      required: true,
      default: false,
    },
    originalImageUrl: {
      type: String,
    },
    generatedImageUrl: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      default: 'pending',
      enum: ['pending', 'processing', 'completed', 'cancelled'],
    },
  },
  {
    timestamps: true,
  }
);

const Customization = mongoose.model('Customization', customizationSchema);

module.exports = Customization;