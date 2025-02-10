import Link from 'next/link';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Images */}
                  <div className="flex items-baseline image-section_wrapper">
                  <div className="image-wrapper">
              <img
                src="/about-01.jpg"
                alt="Second Image"
                className=" h-[400px] object-cover rounded-[180px_180px_10px_10px]"
              />
            </div>
            <div className="image-wrapper mb-8">
              <img
                src="/about-02.jpg"
                alt="First Image"
                className=" h-[480px] object-cover rounded-[180px_180px_10px_10px]"
              />
            </div>

          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-sm text-primary-light font-medium">About Florist</h3>
            <h2 className="text-5xl font-bold text-black mt-2 mb-4 about-subtitle">Blossoming Your Special Moments with Nature's Finest</h2>
            <p className="text-slate-500 text-lg about-subtitle">
            Welcome to Florist, where floral artistry meets passion for nature's beauty. Our story is rooted in a deep love for flowers and a commitment to creating unforgettable moments for our customers.
                      </p>
            <Link href='/about' className='rounded-xl mt-4 read-more text-white text-base p18-30 font-medium bg-primary-dark text-center'>READ MORE</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
