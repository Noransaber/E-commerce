'use client';

import { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";

import { useParams, notFound } from 'next/navigation'; // Import useParams
import productsData from '../../data/flower_products.json';
import ProductDetails from '@/app/components/ProductDetails';
import Spinner from '@/app/components/Spinner';
import { useCart } from '../../../context/CartContext';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const getProductById = async (id: string): Promise<Product | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  return productsData.find((product) => product.id.toString() === id) || null;
};

export default function ProductPage() {
  const { id } = useParams(); // Use useParams() instead of props
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const { cart } = useCart(); // Get cart data from context

  useEffect(() => {
    if (!id) return; // Ensure id exists before fetching
    const fetchData = async () => {
      setLoading(true);
      const fetchedProduct = await getProductById(id as string);
      if (!fetchedProduct) {
        notFound();
      } else {
        setProduct(fetchedProduct);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]); // Watch for changes in id

  // Get the quantity of the current product from the cart
  const cartItem = cart.find((item: CartItem) => item.id.toString() === id);
  const quantity = cartItem ? cartItem.quantity : 1; // Default to 1 if not in cart

  const handleCheckout = async () => {
    if (!product || quantity <= 0) return; // Prevent checkout if no product or quantity is 0
  
    setIsRedirecting(true);
  
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: product.name,
          price: product.price * 100, // Convert price to cents
          quantity, // Use dynamic quantity from cart
        }),
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
  
      if (!data.sessionId) {
        throw new Error("No session ID received");
      }
  
      // Load Stripe on the frontend using the publishable key
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      if (!stripe) {
        throw new Error("Stripe failed to initialize");
      }
  
      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
      if (error) {
        console.error("Stripe Checkout Error:", error);
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setIsRedirecting(false);
    }
  };
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return product ? (
    <div className="container mx-auto p-4">
      <ProductDetails product={product} />
      {/* Checkout Button */}
      <div className='flex justify-center items-center'>
      <button
        onClick={handleCheckout}
        disabled={isRedirecting || quantity <= 0}
        className={`px-6 py-2 checkout-btn bg-primary text-white font-bold rounded shadow hover:bg-primary-dark transition ${
          isRedirecting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-light'
        }`}
      >
        {isRedirecting ? 'Processing...' : 'Checkout Now'}
      </button>
    </div>
    </div>
  ) : null;
}
