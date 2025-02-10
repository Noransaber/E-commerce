import type { Metadata } from "next";
import { Lato } from  "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from '../context/CartContext';
import StripeProvider from "../context/StripeProvider"; // Import StripeProvider
const lato = Lato({
  weight: ['100', '300','400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-lato",
  
})

export const metadata: Metadata = {
  title: "E-commerce Website",
  description: "E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.variable}>
      <body
        className='antialiased'
      >
        <CartProvider>  {/* Wrap your entire layout with CartProvider */}
        <StripeProvider> {/* Add StripeProvider here */}
          <Header />
          {children}
            <Footer />
            </StripeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
