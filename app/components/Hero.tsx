import Link from 'next/link';
import React from 'react'

const Hero: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  btnLabel,
  imgUrl,
}) => {
  return (
    <section
      className="relative w-full  bg-cover bg-center bg-no-repeat hero-section"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay to darken the background */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-xl mb-2">{title}</h1>
        <h2 className="text-7xl font-extrabold w-65 mb-4 subtitle">{subtitle}</h2>
        <p className="text-lg w-59 description mb-6">{description}</p>
        <Link href="/shop" className="px-6 py-2 bg-primary-light text-white font-semibold rounded-lg hover:bg-primary-dark transition">
          {btnLabel}
        </Link>
      </div>
    </section> 
  );
};

export default Hero;


