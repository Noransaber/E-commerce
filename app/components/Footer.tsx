// components/Footer.tsx
import React from 'react';
import NavLink from './NavLink'; // Reuse the NavLink component from the header
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // For icons in the contact section

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-light py-12 px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo & Description */}
        <div>
          <div className="text-3xl font-bold text-primary-light">Flower Shop</div>
          <p className="mt-4 text-gray-400">
          Welcome to the world of Florist, where flowers come to life with love and creativity. Discover our story, our passion for flowers, and our commitment to making every moment memorable.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold  text-primary-light">Quick Links</h3>
          <nav className="mt-4 space-y-4 text-gray-light hover:text-primary-dark">
            <NavLink href="/home" label="Home" className='text-gray-400 hover:text-primary-dark'/>
            <NavLink href="/about" label="About" className='text-gray-400 hover:text-primary-dark'/>
            <NavLink href="/shop" label="Shop" className='text-gray-400 hover:text-primary-dark'/>
            <NavLink href="/contact" label="Contact" className='text-gray-400 hover:text-primary-dark'/>
          </nav>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-primary-light">Contact Us</h3>
          <div className="mt-4">
          <div className="flex items-center mb-3">
              <FaMapMarkerAlt  className="mr-2 text-primary-light" />
              <span className="text-gray-400">13 Fifth Avenue, New York 101660</span>
            </div>
            <div className="flex items-center mb-3">
              <FaPhoneAlt className="mr-2 text-primary-light" />
              <span className="text-gray-400">+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center mb-3">
              <FaEnvelope className="mr-2 text-primary-light" />
              <span className="text-gray-400">info@flowershop.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-gray-400">
        <p>&copy; 2024 Flower Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
