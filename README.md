# AI-Driven C2M E-commerce Platform

## Overview
This is a comprehensive Customer-to-Manufacturer (C2M) e-commerce platform that allows customers to customize products like lamps, cups, and other merchandise using AI-powered tools. The platform enables customers to upload their own images, generate AI-created designs, or describe their desired design, which is then applied to physical products.

## Features
- **AI-Powered Design Generation**: Create custom designs from text descriptions using OpenAI's DALL-E
- **Image Upload & Processing**: Upload your own images and apply them to products
- **Real-time Previews**: Visualize your custom designs on products before ordering
- **Product Customization**: Choose materials, sizes, and design placement
- **Order Management**: Complete workflow from design to production and delivery
- **Video Previews**: Generate videos showing your custom product from multiple angles

## Technology Stack
- **Frontend**: React 18, Vite, Tailwind CSS, React Router
- **Backend**: Node.js, Express, MongoDB
- **AI Services**: OpenAI API, Sharp, FFmpeg
- **Authentication**: JWT tokens
- **Styling**: Tailwind CSS

## Project Structure
```
/workspace/
├── frontend/                 # React/Vite frontend
├── backend/                  # Node.js/Express backend
├── ai_services/              # AI-specific services
├── docs/                     # Documentation
└── .env.example             # Environment variables template
```

For detailed information about setup, API endpoints, and contribution guidelines, please see the [full documentation](./docs/README.md).