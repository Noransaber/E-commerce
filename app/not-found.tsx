"use client"; // Add this to make it a Client Component

import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">Sorry, we couldn't find the product you're looking for.</p>
      <button
        className="mt-6 px-4 py-2 bg-primary text-white rounded-full"
        onClick={() => window.history.back()} // The event handler
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
