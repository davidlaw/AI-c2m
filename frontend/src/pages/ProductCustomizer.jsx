import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductCustomizer = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [designType, setDesignType] = useState('upload'); // 'upload', 'ai-generate', 'text'
  const [uploadedImage, setUploadedImage] = useState(null);
  const [aiGeneratedImages, setAiGeneratedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productName, setProductName] = useState('Custom Product');
  const [price, setPrice] = useState(29.99);
  
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAIGenerate = async () => {
    setIsLoading(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const mockImages = [
        `https://picsum.photos/300/300?random=1`,
        `https://picsum.photos/300/300?random=2`,
        `https://picsum.photos/300/300?random=3`
      ];
      setAiGeneratedImages(mockImages);
      setSelectedImage(mockImages[0]);
      setIsLoading(false);
    }, 2000);
  };

  const handleTextSubmit = () => {
    if (textInput.trim()) {
      // Simulate generating image from text
      const imageUrl = `https://via.placeholder.com/300x300.png?text=${encodeURIComponent(textInput.substring(0, 20))}`;
      setUploadedImage(imageUrl);
      setSelectedImage(imageUrl);
    }
  };

  const handleConfirmDesign = () => {
    // Navigate to order confirmation
    navigate('/order-confirm/12345');
  };

  return (
    <div className="customize-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{productName} Customizer</h1>
        <p className="text-gray-600 mt-2">Create your unique design for this product</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Design Options Panel */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Design Options</h2>
          
          {/* Design Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Choose Design Method:</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setDesignType('upload')}
                className={`py-2 px-4 rounded-md text-sm font-medium ${
                  designType === 'upload' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Upload Image
              </button>
              <button
                onClick={() => setDesignType('ai-generate')}
                className={`py-2 px-4 rounded-md text-sm font-medium ${
                  designType === 'ai-generate' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                AI Generate
              </button>
              <button
                onClick={() => setDesignType('text')}
                className={`py-2 px-4 rounded-md text-sm font-medium ${
                  designType === 'text' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Text Input
              </button>
            </div>
          </div>

          {/* Design Content Based on Selection */}
          {designType === 'upload' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Your Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current.click()}
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Choose File
              </button>
              {uploadedImage && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Preview:</p>
                  <img src={uploadedImage} alt="Uploaded design" className="mt-2 w-32 h-32 object-cover rounded-md" />
                </div>
              )}
            </div>
          )}

          {designType === 'ai-generate' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Describe Your Desired Design:
              </label>
              <textarea
                rows="3"
                placeholder="e.g., 'A beautiful landscape with mountains and sunset', 'Abstract geometric pattern in blue and gold'"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
              <button
                onClick={handleAIGenerate}
                disabled={isLoading || !textInput.trim()}
                className={`mt-2 w-full py-2 px-4 rounded-md text-sm font-medium ${
                  isLoading || !textInput.trim()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {isLoading ? 'Generating...' : 'Generate Designs'}
              </button>
              
              {aiGeneratedImages.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">Generated Options:</p>
                  <div className="grid grid-cols-3 gap-3">
                    {aiGeneratedImages.map((img, index) => (
                      <div 
                        key={index} 
                        onClick={() => setSelectedImage(img)}
                        className={`cursor-pointer border-2 rounded-md overflow-hidden ${
                          selectedImage === img ? 'border-indigo-600' : 'border-transparent'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`Generated option ${index + 1}`} 
                          className="w-full h-24 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {designType === 'text' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Your Text:
              </label>
              <input
                type="text"
                placeholder="Enter text to appear on your product..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
              <button
                onClick={handleTextSubmit}
                disabled={!textInput.trim()}
                className={`mt-2 w-full py-2 px-4 rounded-md text-sm font-medium ${
                  !textInput.trim()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                Generate from Text
              </button>
            </div>
          )}

          {/* Apply to Product */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Apply to Product:</label>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-2 px-4 bg-gray-100 rounded-md text-sm font-medium hover:bg-gray-200">
                Front
              </button>
              <button className="py-2 px-4 bg-gray-100 rounded-md text-sm font-medium hover:bg-gray-200">
                Back
              </button>
              <button className="py-2 px-4 bg-gray-100 rounded-md text-sm font-medium hover:bg-gray-200">
                Side
              </button>
              <button className="py-2 px-4 bg-gray-100 rounded-md text-sm font-medium hover:bg-gray-200">
                Full Wrap
              </button>
            </div>
          </div>
        </div>

        {/* Product Preview */}
        <div className="bg-white p-6 rounded-lg shadow-md product-preview">
          <h2 className="text-xl font-semibold mb-4">Product Preview</h2>
          
          <div className="flex flex-col items-center">
            {/* Product Visualization */}
            <div className="relative w-64 h-64 mb-6 flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg border-2 border-dashed border-gray-300">
              {selectedImage ? (
                <img 
                  src={selectedImage} 
                  alt="Custom design preview" 
                  className="w-48 h-48 object-contain ai-generated-image"
                />
              ) : (
                <div className="text-center text-gray-500">
                  <p>Select a design to preview</p>
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="w-full max-w-xs">
              <h3 className="text-lg font-semibold text-center">{productName}</h3>
              <p className="text-2xl font-bold text-center text-indigo-600 mt-2">${price.toFixed(2)}</p>
              
              <div className="mt-6 space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Material</label>
                  <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Ceramic</option>
                    <option>Stainless Steel</option>
                    <option>Wood</option>
                    <option>Plastic</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Size</label>
                  <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
              </div>
              
              <button
                onClick={handleConfirmDesign}
                className="w-full mt-6 bg-indigo-600 text-white py-3 px-4 rounded-md font-medium hover:bg-indigo-700"
              >
                Confirm & Order
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Features */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Additional Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">3D Preview</h3>
            <p className="text-sm text-gray-600 mt-1">View your design on the product in 3D</p>
            <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">Enable 3D View</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Video Preview</h3>
            <p className="text-sm text-gray-600 mt-1">See how your design looks in motion</p>
            <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">Generate Video</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Multiple Variants</h3>
            <p className="text-sm text-gray-600 mt-1">Create variations of your design</p>
            <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">Create Variants</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomizer;