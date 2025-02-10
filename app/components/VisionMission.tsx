import Image from 'next/image';
import React from 'react';

const VisionMission = () => {
  return (
    <section className="py-12 section">
      {/* Upper Part: Image */}
      <div className="flex justify-center mb-8">
        <Image
          src="/about.jpg"
          alt="Floral Vision"
          width={1300}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Lower Part: Vision and Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16">
        {/* Left Column: Our Vision */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black">Our Vision</h2>
          <p className="text-base text-slate-500">
            At Florist, our vision is to be the guiding light for floral elegance and creativity. We aspire to inspire, by reimagining the way flowers connect people, bring joy, and create lasting memories. We envision a world where every gesture, whether grand or subtle, is accompanied by the enchantment of flowers.
          </p>
        </div>

        {/* Right Column: Our Mission */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black">Our Mission</h2>
          <p className="text-base text-slate-500">
            Our mission is to craft floral artistry that elevates moments into memories. With dedication and expertise, we strive to provide our customers with the freshest, most enchanting blooms and personalized service that reflects the beauty and emotions of every occasion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
