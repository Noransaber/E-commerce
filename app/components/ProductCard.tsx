"use client"
import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
// Product interface
interface ProductCardProps {
    product: Product;
}
  
// Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // Use the addToCart function from context
    // Handle the add to cart click
    const handleAddToCart = () => {
      const quantity = 1; // Adjust quantity as needed
      addToCart(product, quantity); // Add the product to the cart
    };
  return (
    <Link href={`/products/${product.id}` } className="relative rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 group hover:cursor-pointer">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-cover product-image"
      />
      {/* Shopping Cart Icon (Hidden by Default, Visible on Hover) */}
      <div
        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:cursor-pointer hover:shadow-orange-800 duration-300"
        onClick={handleAddToCart}  >
      <FaShoppingCart className="text-primary text-lg" />
      </div>
      {/* Card Body */}
      <div className="p-4 flex items-center flex-col justify-center">
        <p className="text-sm text-gray-light font-medium capitalize">{product.category}</p>
        <h3 className="text-2xl font-bold text-black mt-1">{product.name}</h3>
        <p className="text-yellow-500 text-sm mt-1">
          {'★'.repeat(Math.floor(product.rating))}{' '}
          <span className="text-gray-500">
            ({product.rating.toFixed(1)})
          </span>
        </p>
        <p className="text-lg font-bold text-gray-800 mt-2 opacity-60">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
