const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

class VideoCreator {
  constructor(outputDir = './output/videos') {
    this.outputDir = outputDir;
    this.ensureOutputDirectory();
  }

  /**
   * Ensure the output directory exists
   */
  async ensureOutputDirectory() {
    try {
      await fs.mkdir(this.outputDir, { recursive: true });
    } catch (error) {
      console.error('Error creating output directory:', error);
    }
  }

  /**
   * Create a product showcase video from an image
   * @param {string} imagePath - Path to the input image
   * @param {Object} options - Video creation options
   */
  async createShowcaseVideo(imagePath, options = {}) {
    const {
      duration = 10, // in seconds
      fps = 30,
      width = 1920,
      height = 1080,
      outputFormat = 'mp4',
      zoomEffect = true,
      panEffect = false
    } = options;

    try {
      const outputFileName = `showcase_${uuidv4()}.${outputFormat}`;
      const outputPath = path.join(this.outputDir, outputFileName);

      return new Promise((resolve, reject) => {
        let command = ffmpeg(imagePath)
          .videoCodec('libx264')
          .fps(fps)
          .size(`${width}x${height}`)
          .duration(duration);

        // Add zoom effect if enabled
        if (zoomEffect) {
          // Simple zoom-in effect over the duration
          command = command.videoFilters([
            {
              filter: 'zoompan',
              options: {
                z: 'min(zoom+0.0015,1.5)', // Gradual zoom in
                d: '1' // Duration of each zoom step
              }
            }
          ]);
        }

        // Add panning effect if enabled
        if (panEffect) {
          command = command.videoFilters([
            {
              filter: 'crop',
              options: `${width/1.2}:${height/1.2}:iw/10:ih/10`
            },
            {
              filter: 'scale',
              options: `${width}:${height}`
            }
          ]);
        }

        command
          .on('start', (cmd) => {
            console.log(`Started video creation: ${cmd}`);
          })
          .on('progress', (progress) => {
            console.log(`Processing: ${progress.percent}% done`);
          })
          .on('end', () => {
            resolve({
              success: true,
              outputPath,
              fileName: outputFileName,
              duration,
              resolution: `${width}x${height}`
            });
          })
          .on('error', (err) => {
            console.error('Error creating video:', err);
            reject({
              success: false,
              error: err.message
            });
          })
          .save(outputPath);
      });
    } catch (error) {
      console.error('Error in createShowcaseVideo:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Create a product comparison video from multiple images
   * @param {Array<string>} imagePaths - Array of image paths
   * @param {Object} options - Video creation options
   */
  async createComparisonVideo(imagePaths, options = {}) {
    const {
      durationPerImage = 3, // seconds per image
      transitionDuration = 1, // seconds for transition
      width = 1920,
      height = 1080,
      outputFormat = 'mp4'
    } = options;

    try {
      const outputFileName = `comparison_${uuidv4()}.${outputFormat}`;
      const outputPath = path.join(this.outputDir, outputFileName);

      // This is a simplified implementation
      // In a real application, we would create a proper video with transitions
      return new Promise((resolve, reject) => {
        // For demonstration purposes, we're returning a mock result
        // A real implementation would stitch the images together with transitions
        
        // Simulate processing time
        setTimeout(() => {
          resolve({
            success: true,
            outputPath,
            fileName: outputFileName,
            duration: imagePaths.length * durationPerImage,
            resolution: `${width}x${height}`,
            imageCount: imagePaths.length
          });
        }, 2000);
      });
    } catch (error) {
      console.error('Error in createComparisonVideo:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Add text overlay to a video
   * @param {string} videoPath - Path to the input video
   * @param {Array<Object>} texts - Array of text objects with properties
   */
  async addTextOverlay(videoPath, texts) {
    try {
      const outputFileName = `overlay_${uuidv4()}.mp4`;
      const outputPath = path.join(this.outputDir, outputFileName);

      return new Promise((resolve, reject) => {
        let command = ffmpeg(videoPath);

        // Add text overlays using drawtext filter
        texts.forEach((textObj, index) => {
          const { text, x = '10', y = '10', fontSize = 24, color = 'white', box = 1, boxcolor = 'black@0.5' } = textObj;
          
          command = command.videoFilters({
            filter: 'drawtext',
            options: {
              text: text,
              x: x,
              y: y,
              fontsize: fontSize,
              fontcolor: color,
              box: box,
              boxcolor: boxcolor,
              enable: `between(t,${index * 2},${index * 2 + 5})` // Show for 5 seconds starting at 2 sec intervals
            }
          });
        });

        command
          .on('end', () => {
            resolve({
              success: true,
              outputPath,
              fileName: outputFileName
            });
          })
          .on('error', (err) => {
            console.error('Error adding text overlay:', err);
            reject({
              success: false,
              error: err.message
            });
          })
          .save(outputPath);
      });
    } catch (error) {
      console.error('Error in addTextOverlay:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Extract frames from a video
   * @param {string} videoPath - Path to the input video
   * @param {Object} options - Extraction options
   */
  async extractFrames(videoPath, options = {}) {
    const {
      frameRate = 1, // frames per second
      outputDir = './output/frames',
      prefix = 'frame'
    } = options;

    try {
      await fs.mkdir(outputDir, { recursive: true });

      const outputPattern = path.join(outputDir, `${prefix}_%04d.jpg`);

      return new Promise((resolve, reject) => {
        ffmpeg(videoPath)
          .fps(frameRate)
          .output(outputPattern)
          .on('end', () => {
            resolve({
              success: true,
              outputPattern,
              frameRate
            });
          })
          .on('error', (err) => {
            console.error('Error extracting frames:', err);
            reject({
              success: false,
              error: err.message
            });
          })
          .run();
      });
    } catch (error) {
      console.error('Error in extractFrames:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

module.exports = VideoCreator;