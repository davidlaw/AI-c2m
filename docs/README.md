# AI-Driven C2M E-commerce Platform

## Overview
This is a comprehensive Customer-to-Manufacturer (C2M) e-commerce platform that allows customers to customize products like lamps, cups, and other merchandise using AI-powered tools. The platform enables customers to upload their own images, generate AI-created designs, or describe their desired design, which is then applied to physical products.

## Architecture

### Frontend
Built with React and Vite, featuring:
- Product browsing and customization interface
- AI-powered design tools (image upload, generation, text input)
- Real-time product previews
- Order management system

### Backend
Node.js/Express API with:
- Product management system
- User authentication and authorization
- AI integration services
- Order processing workflows
- Database models for products, customizations, and orders

### AI Services
Modular services for:
- Image generation using OpenAI's DALL-E
- Design processing and optimization
- Video creation for product previews
- Natural language processing

## Key Features

### 1. Customization Options
- **Upload Images**: Customers can upload their own images to be printed on products
- **AI Generation**: Generate custom designs from text descriptions
- **Text Input**: Convert text to custom graphics and designs

### 2. Product Preview
- Real-time visualization of custom designs on products
- Multiple design variations
- 3D-like previews (simulated)

### 3. AI Integration
- Advanced image generation capabilities
- Style transfer and design enhancement
- Automated product fitting

### 4. Order Management
- Complete order tracking
- Payment processing integration
- Production workflow management

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- OpenAI API key

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-c2m-platform
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
cd ..
```

3. Install backend dependencies:
```bash
cd backend
npm install
cd ..
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. Run the development servers:
```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend
cd frontend
npm run dev
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get specific product
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Customizations
- `GET /api/customizations` - Get user's customizations
- `POST /api/customizations` - Create new customization
- `PUT /api/customizations/:id` - Update customization
- `DELETE /api/customizations/:id` - Delete customization

### AI Services
- `POST /api/ai/generate-image` - Generate image from text
- `POST /api/ai/generate-variations` - Create design variations
- `POST /api/ai/process-image` - Process uploaded image
- `POST /api/ai/generate-video` - Generate product preview video

## Technology Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express
- MongoDB/Mongoose
- JWT Authentication
- Multer (file uploads)

### AI Services
- OpenAI API (DALL-E 3)
- Sharp (image processing)
- FFmpeg (video processing)

### Development
- ESLint
- Prettier
- Nodemon

## Project Structure
```
/workspace/
├── frontend/                 # React/Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── utils/            # Utility functions
│   │   └── assets/           # Static assets
│   └── package.json
├── backend/                  # Node.js/Express backend
│   ├── controllers/          # Request handlers
│   ├── models/               # Mongoose schemas
│   ├── routes/               # API route definitions
│   ├── middleware/           # Authentication, etc.
│   ├── services/             # Business logic
│   └── package.json
├── ai_services/              # AI-specific services
│   ├── image_generation/     # DALL-E integration
│   ├── product_design/       # Design processing
│   ├── video_generation/     # Video creation
│   └── text_processing/      # NLP services
├── docs/                     # Documentation
└── .env.example             # Environment variables template
```

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
MIT License - see the LICENSE file for details.