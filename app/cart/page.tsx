"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (cart === null) {
    return <p className="text-center text-gray-600">Loading cart...</p>;
  }

  const handleCheckout = async () => {
    if (cart.length === 0) return; // Prevent checkout if the cart is empty
  
    setIsRedirecting(true);
  
    try {
      // ✅ Fix: Ensure request matches API expectations
      const requestBody = {
        items: cart.map((item) => ({
          name: item.name || "", // Ensure name exists
          price: item.price ? item.price * 100 : 0, // Ensure price is in cents
          quantity: item.quantity > 0 ? item.quantity : 1, // Ensure quantity is at least 1
        })),
      };
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody), // ✅ Ensure it's wrapped correctly
      });
  
      if (!res.ok) {
        const errorMessage = await res.text();
        throw new Error(`HTTP error! Status: ${res.status} - ${errorMessage}`);
      }
  
      const data = await res.json();
      console.log("✅ Checkout response:", data);
  
      if (!data.sessionId) {
        throw new Error("No session ID received");
      }
  
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      if (!stripe) {
        throw new Error("Stripe failed to initialize");
      }
  
      const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
      if (error) {
        console.error("❌ Stripe Checkout Error:", error);
      }
    } catch (error) {
      console.error("❌ Checkout error:", error);
    } finally {
      setIsRedirecting(false);
    }
  };
  
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-primary-light mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-400 text-lg">Your cart is empty.</p>
          <Link href="/shop" className="text-lg font-semibold text-primary-light hover:underline mt-4 flex justify-center items-center">
            Continue Shopping
            <Image src="/right-arrow-svgrepo-com.svg" alt="right arrow" width={27} height={27} />
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image src={item.image} alt={item.name} width={300} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-gray-light font-medium capitalize">{item.category}</p>
                  <h2 className="text-2xl font-bold text-black mt-1">{item.name}</h2>
                  <p className="text-lg font-bold text-gray-800 mt-2 opacity-60">${item.price.toFixed(2)}</p>

                  {/* Quantity Control */}
                  <div className="mt-2 flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                      className="bg-gray-200 px-2 py-1 rounded text-gray-700"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded text-gray-700"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button onClick={() => removeFromCart(item.id)} className="mt-3 text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Button (Shown Only If Cart is Not Empty) */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleCheckout}
              disabled={isRedirecting}
              className={`px-6 py-3 checkout-btn bg-primary text-white font-bold rounded shadow hover:bg-primary-dark transition ${
                isRedirecting ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-light"
              }`}
            >
              {isRedirecting ? "Processing..." : "Checkout Now"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
