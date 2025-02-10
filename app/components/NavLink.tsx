import React from 'react';
import Link from 'next/link';

const NavLink: React.FC<NavLinkProps> = ({ href, label, className = '' }) => {
    return (
      <Link href={href} className={`block  hover:text-primary-light ${className}`}>
        <span>{label}</span>
      </Link>
    );
};
  
export default NavLink;