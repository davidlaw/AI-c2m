import React from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const { orderId } = useParams();

  // Mock order data
  const orderData = {
    id: orderId,
    customerName: "John Doe",
    email: "john.doe@example.com",
    date: new Date().toLocaleDateString(),
    items: [
      {
        id: 1,
        name: "Modern Desk Lamp",
        image: "https://placehold.co/100x100/4f46e5/white?text=Lamp",
        design: "Mountain Landscape",
        material: "Ceramic",
        size: "Medium",
        quantity: 1,
        price: 49.99
      },
      {
        id: 2,
        name: "Personalized Mug",
        image: "https://placehold.co/100x100/ec4899/white?text=Mug",
        design: "Abstract Pattern",
        material: "Ceramic",
        size: "Standard",
        quantity: 2,
        price: 19.99
      }
    ],
    subtotal: 89.97,
    shipping: 5.99,
    tax: 7.20,
    total: 103.16
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900">Order Confirmed!</h1>
        <p className="mt-2 text-lg text-gray-600">
          Thank you for your order, {orderData.customerName}. Your order ID is <span className="font-semibold">#{orderData.id}</span>
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8 border-b border-gray-200">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Order Details</h2>
              <p className="mt-1 text-sm text-gray-600">Order placed on {orderData.date}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm font-medium text-gray-900">Email Receipt To</p>
              <p className="mt-1 text-sm text-gray-600">{orderData.email}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Items Ordered</h3>
          <div className="space-y-6">
            {orderData.items.map((item) => (
              <div key={item.id} className="flex items-center border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-contain rounded-md border border-gray-200"
                />
                <div className="ml-4 flex-1">
                  <div>
                    <h4 className="text-base font-medium text-gray-900">{item.name}</h4>
                    <p className="mt-1 text-sm text-gray-600">Design: {item.design}</p>
                    <p className="text-sm text-gray-600">Material: {item.material}</p>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Qty: {item.quantity}</p>
                  <p className="text-base font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6">
            <div className="flex justify-between text-base font-medium text-gray-900 mb-1">
              <p>Subtotal</p>
              <p>${orderData.subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900 mb-1">
              <p>Shipping</p>
              <p>${orderData.shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900 mb-1">
              <p>Tax</p>
              <p>${orderData.tax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-xl font-bold text-indigo-600 mt-4 pt-4 border-t border-gray-200">
              <p>Total</p>
              <p>${orderData.total.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Next Steps</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 text-green-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="ml-3 text-sm text-gray-600">Your order has been confirmed and is being processed</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 text-green-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="ml-3 text-sm text-gray-600">Our AI system will finalize your custom designs</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 text-green-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="ml-3 text-sm text-gray-600">Production will begin and your items will ship within 5-7 business days</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 text-green-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="ml-3 text-sm text-gray-600">You'll receive shipping updates via email</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/"
          className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 text-center"
        >
          Continue Shopping
        </Link>
        <Link
          to="/track-order"
          className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 text-center"
        >
          Track Order
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;