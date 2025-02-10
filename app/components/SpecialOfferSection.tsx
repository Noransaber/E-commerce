import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SpecialOfferSection: React.FC<SpecialOfferSectionProps> = ({
  title,
  subtitle,
  btnLabel,
  imgUrl,
}) => {
  return (
    <section className="container mx-auto section bg-backgroundDark pt-100 specialOfferSection">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Image */}
        <div className="flex justify-center items-center special-offer-image_wrapper">
          <img
            src={ imgUrl}
            alt="Image description"
            className="w-full max-w-sm h-full  shadow-lg object-cover rounded-[180px_180px_10px_10px]"
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-sm font-medium text-primary-light">{ title}</h2>
          <h3 className="text-5xl text-white font-bold leading-snug" >
            { subtitle}</h3>
          <Link href='/shop' className="mt-4 text-base bg-primary-dark text-white text-center  rounded-lg transition duration-200 special-offer-btn">
            { btnLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
