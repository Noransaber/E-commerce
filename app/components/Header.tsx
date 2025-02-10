"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaShippingFast,  FaShoppingCart, FaBars, FaTimes  } from 'react-icons/fa';  // For the shipping icon
import NavLink from './NavLink';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemsInCart } = useCart();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='bg-white/30 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto flex justify-between items-center p-4'> 
        {/* Logo */}
        <Link href="/" className='text-2xl font-bold text-primary-dark'>
          <span>Flower Shop</span>
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex space-x-8'>
        <NavLink href="/" label="Home" className='text-primary-dark'/>
          <NavLink href="/shop" label="Shop" className='text-primary-dark'/>
          <NavLink href="/about" label="About" className='text-primary-dark'/>
          <NavLink href="/contact" label="Contact" className='text-primary-dark'/>
        </nav>

    <Link href="/cart">
      <div className="relative hover:cursor-pointer">
        {/* Shopping Cart Icon */}
        <FaShoppingCart size={24} className="text-primary-light" />

        {/* Cart Items Count Badge */}
        {itemsInCart > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
            {itemsInCart}
          </div>
        )}
      </div>
    </Link>
        {/* Mobile Menu Button */}
        <button className='md:hidden text-lg'
          onClick={toggleMenu}
          aria-label="Toggle Menu">
            {isMenuOpen ? <FaTimes size={24} className='text-white hover:text-primary-light' /> : <FaBars size={24} className='text-white hover:text-primary-light'/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden'>
        <NavLink href="/" label="Home" className="p-4 text-white" />
          <NavLink href="/shop" label="Shop" className="p-4 text-white" />
          <NavLink href="/about" label="About" className="p-4 text-white" />
          <NavLink href="/contact" label="Contact" className="p-4 text-white" />
        </div>
      )}

    </header>
  )
}

export default Header;
