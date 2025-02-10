'use client';

import { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";

import { useParams, notFound } from 'next/navigation';
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
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const { cart } = useCart(); // Get cart data from context

  useEffect(() => {
    if (!id) return;
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
  }, [id]);

  // Find the current product in the cart
  const cartItem = cart.find((item: CartItem) => item.id.toString() === id);
  const quantity = cartItem ? cartItem.quantity : 1;

  const handleCheckout = async () => {
    if (!product || quantity <= 0) return;
    setIsRedirecting(true);

    try {
      const requestBody = {
        items: [
          {
            name: product.name,
            price: product.price * 100, // Convert to cents
            quantity, 
          },
        ],
      };

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (!res.ok) {
        const errorMessage = await res.text();
        throw new Error(`HTTP error! Status: ${res.status} - ${errorMessage}`);
      }

      const data = await res.json();
      if (!data.sessionId) throw new Error("No session ID received");

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      if (!stripe) throw new Error("Stripe failed to initialize");

      const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
      if (error) console.error("Stripe Checkout Error:", error);
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
