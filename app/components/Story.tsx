// import Image from 'next/image';
// import React from 'react'

// const Story = () => {
//     return (
//         <section className="flex section flex-col md:flex-row items-center md:items-start  py-12 bg-backgroundDark">
//           {/* Left Column */}
//           <div className="md:w-1/2 text-center md:text-left space-y-4">
//             <h1 className="text-sm text-primary-light font-medium">Our Story</h1>
//             <h2 className="text-5xl font-bold text-white mt-2 mb-4 about-subtitle">A Journey from Passion to Florist</h2>
//                 <p className="text-white text-lg about-subtitle">Our journey began with a seed of passion that blossomed into a flourishing business. Allow us to share the story of our founder's deep-rooted love for flowers and how it led to the creation of your trusted floral destination. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
//                     <br />
//                     <br />
//                     Explore the tale of dedication, creativity, and a vision to spread the joy of nature’s beauty through the art of floral design. Discover the moments that shaped our founder’s path and paved the way for Florist to become a symbol of floral excellence.
//             </p>
//           </div>
    
//           {/* Right Column */}
//           <div className="md:w-1/2 flex justify-center">
//             <Image
//               src='/our-story.jpg'
//               alt='Our story'
//               width={400}
//               height={300}
//               className=" shadow-lg image"
//             />
//           </div>
//         </section>
//       );
//     };

// export default Story
import Image from 'next/image';
import React from 'react';

const Story = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center md:items-start py-12 bg-backgroundDark section">
        {/* Left Column */}
        <div className="md:w-1/2 text-center md:text-left space-y-4 px-4">
          <h1 className="text-sm text-primary-light font-medium">Our Story</h1>
          <h2 className="text-5xl font-bold text-white mt-2 mb-4 about-subtitle">
            A Journey from Passion to Florist
          </h2>
          <p className="text-white text-lg about-subtitle">
            Our journey began with a seed of passion that blossomed into a flourishing business. Allow us to share the story of our founder's deep-rooted love for flowers and how it led to the creation of your trusted floral destination. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            <br />
            <br />
            Explore the tale of dedication, creativity, and a vision to spread the joy of nature’s beauty through the art of floral design. Discover the moments that shaped our founder’s path and paved the way for Florist to become a symbol of floral excellence.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex justify-center px-4">
          <Image
            src="/our-story.jpg"
            alt="Our story"
            width={400}
            height={300}
            className="shadow-lg image"
          />
        </div>
      </section>

      {/* New Section */}
      <section className="bg-backgroundDark py-12">
        <hr className="border-t border-white opacity-30 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
          {/* First Column */}
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">500k+</h3>
            <p className="text-sm text-gray-300">Happy Customers</p>
          </div>

          {/* Second Column */}
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">400+</h3>
            <p className="text-sm text-gray-300">Products</p>
          </div>

          {/* Third Column */}
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">43+</h3>
            <p className="text-sm text-gray-300">Worldwide Shops</p>
          </div>

          {/* Fourth Column */}
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">8+</h3>
            <p className="text-sm text-gray-300">Winning Awards</p>
          </div>
              </div>
              <hr className="border-t border-white opacity-30 mt-8" />
      </section>
    </>
  );
};

export default Story;
