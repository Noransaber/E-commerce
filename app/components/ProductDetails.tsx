// app/(products)/[id]/ProductDetails.tsx
'use client';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleAddToCart = () => addToCart(product, quantity);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[510px] object-cover rounded-lg"
          />
        </div>

        {/* Right Column: Product Details */}
        <div className="flex flex-col space-y-6">
          <div className='flex justify-start items-center'>
            <p className="text-base font-normal text-primary-dark uppercase">Flower,&nbsp;{product.category},</p>
            <h1 className="text-base font-normal text-primary-dark  uppercase">&nbsp;{product.name}</h1>
          </div>

          <h1 className="font-normal text-black text-2xl ">&nbsp;{product.name} Flower</h1>
          <p className="text-2xl font-bold text-gray-dark opacity-70">${product.price.toFixed(2)}</p>
          <p className="text-slate-600 product-page_description font-normal text-base">{product.description}</p>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-2 bg-gray-200 text-gray-800 font-bold rounded"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="px-4 py-2 border border-gray-300 rounded">{quantity}</span>
              <button
                className="px-3 py-2 bg-gray-200 text-gray-800 font-bold rounded"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <button
              className="px-6 py-2 bg-primary text-white font-bold rounded shadow hover:bg-primary-dark transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          <hr className="my-4" />
          {/* Extra Info */}
          <div className=''>
            <div className='flex justify-start items-center'>
              <p className="text-base font-normal text-primary-dark ">
                <span className='text-slate-800 text-base font-normal '>Categories:</span>&nbsp;Flower, {product.category.charAt(0).toUpperCase() + product.category.slice(1)},&nbsp;
              </p>
              <h3 className="text-base font-normal text-primary-dark ">{product.name}</h3>
            </div>

            <p className='font-extrabold free-shipping text-base text-gray-dark'>Free shipping on orders over $50!</p>
            <ul className="text-gray-600 mt-4 space-y-1">
              <li data-icon="true" className='flex items-center justify-start'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='svg-icon'>
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                </span>No-Risk Money Back Guarantee!
              </li>
              <li data-icon="true" className='flex items-center justify-start'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='svg-icon'>
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                </span>No Hassle Refunds
              </li>
              <li data-icon="true" className='flex items-center justify-start'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='svg-icon'>
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                </span>Free Delivery over $50!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
