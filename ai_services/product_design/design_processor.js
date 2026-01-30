const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

class DesignProcessor {
  constructor() {
    this.supportedFormats = ['.jpg', '.jpeg', '.png', '.webp'];
  }

  /**
   * Apply a design to a product template
   * @param {Buffer} designBuffer - The design image buffer
   * @param {string} productTemplatePath - Path to the product template
   * @param {Object} options - Processing options
   */
  async applyDesignToProduct(designBuffer, productTemplatePath, options = {}) {
    const {
      positionX = 0,
      positionY = 0,
      width = 200,
      height = 200,
      opacity = 1
    } = options;

    try {
      // Load the product template
      const templateBuffer = await fs.readFile(productTemplatePath);
      
      // Resize and position the design
      const resizedDesign = await sharp(designBuffer)
        .resize(width, height, {
          fit: 'cover',
          position: 'center'
        })
        .toBuffer();

      // Composite the design onto the template
      const resultBuffer = await sharp(templateBuffer)
        .composite([{
          input: resizedDesign,
          gravity: 'center', // This would be adjusted based on positionX, positionY
          top: positionY,
          left: positionX
        }])
        .toBuffer();

      return {
        success: true,
        buffer: resultBuffer,
        metadata: {
          width: width,
          height: height,
          format: 'png'
        }
      };
    } catch (error) {
      console.error('Error applying design to product:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Optimize an image for web display
   * @param {Buffer} imageBuffer - The image buffer to optimize
   * @param {Object} options - Optimization options
   */
  async optimizeImage(imageBuffer, options = {}) {
    const {
      maxWidth = 1024,
      maxHeight = 1024,
      quality = 80,
      format = 'webp'
    } = options;

    try {
      let pipeline = sharp(imageBuffer);

      // Resize if necessary
      const metadata = await pipeline.metadata();
      if (metadata.width > maxWidth || metadata.height > maxHeight) {
        pipeline = pipeline.resize(maxWidth, maxHeight, {
          fit: 'inside',
          withoutEnlargement: true
        });
      }

      // Convert format and apply quality
      if (format === 'webp') {
        pipeline = pipeline.webp({ quality });
      } else if (format === 'jpeg') {
        pipeline = pipeline.jpeg({ quality });
      } else if (format === 'png') {
        pipeline = pipeline.png();
      }

      const optimizedBuffer = await pipeline.toBuffer();

      return {
        success: true,
        buffer: optimizedBuffer,
        originalSize: metadata.size,
        newSize: optimizedBuffer.length,
        compressionRatio: (1 - optimizedBuffer.length / metadata.size).toFixed(2)
      };
    } catch (error) {
      console.error('Error optimizing image:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Validate if a file is a supported image format
   * @param {string} filePath - Path to the file
   */
  validateImageFormat(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return this.supportedFormats.includes(ext);
  }

  /**
   * Create multiple variations of a design
   * @param {Buffer} designBuffer - Original design buffer
   * @param {number} count - Number of variations to create
   */
  async createDesignVariations(designBuffer, count = 3) {
    try {
      const variations = [];
      
      for (let i = 0; i < count; i++) {
        // Apply random transformations for each variation
        const variationBuffer = await sharp(designBuffer)
          .modulate({
            brightness: 1 + (Math.random() * 0.2 - 0.1), // ±10% brightness
            saturation: 1 + (Math.random() * 0.4 - 0.2), // ±20% saturation
            hue: Math.floor(Math.random() * 30) - 15       // ±15° hue
          })
          .toBuffer();

        variations.push({
          buffer: variationBuffer,
          id: `variation_${i + 1}`,
          description: `Variation ${i + 1}`
        });
      }

      return {
        success: true,
        variations
      };
    } catch (error) {
      console.error('Error creating design variations:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

module.exports = DesignProcessor;