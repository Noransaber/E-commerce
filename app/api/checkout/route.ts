import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string); // ✅ No need for apiVersion

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("Stripe API key is missing.");
      return NextResponse.json({ error: "Stripe API key is missing." }, { status: 500 });
    }

    const { items } = await req.json(); // ✅ Expect `items` array

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const line_items = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.name },
        unit_amount: item.price, // ✅ Price is already in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("❌ Stripe API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
