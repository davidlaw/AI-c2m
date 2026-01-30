const OpenAI = require('openai');

class DalleService {
  constructor(apiKey) {
    this.openai = new OpenAI({ apiKey });
  }

  async generateImage(prompt, options = {}) {
    const {
      n = 1,
      size = "1024x1024",
      style = "vivid",
      quality = "standard"
    } = options;

    try {
      const response = await this.openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: n,
        size: size,
        style: style,
        quality: quality,
        response_format: "url"
      });

      return {
        success: true,
        data: response.data.map(item => ({
          url: item.url,
          revisedPrompt: item.revised_prompt
        }))
      };
    } catch (error) {
      console.error('Error generating image with DALL-E:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async generateImageVariations(imageBuffer, options = {}) {
    const {
      n = 1,
      size = "1024x1024"
    } = options;

    try {
      // Note: OpenAI's API requires the image to be saved temporarily for variations
      // In a real implementation, we would save the buffer to a temporary file
      // and then pass the file path to the API
      // This is a simplified version for demonstration
      
      // For now, we'll simulate the process
      const variations = [];
      for (let i = 0; i < n; i++) {
        variations.push({
          url: `https://picsum.photos/seed/${Date.now() + i}/${size.replace('x', '/')}`,
          title: `Variation ${i + 1}`
        });
      }

      return {
        success: true,
        data: variations
      };
    } catch (error) {
      console.error('Error generating image variations:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

module.exports = DalleService;