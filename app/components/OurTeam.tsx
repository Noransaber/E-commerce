import Image from 'next/image';
import React from 'react';

const OurTeam = () => {
  return (
    <section className="py-12 bg-globalBg">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-sm text-primary-light font-medium mb-20">Our Team</h2>
        <p className="text-5xl text-black font-bold mb-20">
          Our Dedicated Team of Enthusiasts​
        </p>
        <p className="text-base text-black">
          Share some details here. This is a flexible section where you can share anything you want.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-16">
        {/* Team Member */}
        <div className="text-center space-y-4">
          <Image
            src="/team-skip-01.jpg"
            alt="Elizabeth B."
            width={374}
            height={467}
            className="image shadow-lg mx-auto"
          />
          <h3 className="text-xl font-bold text-black">Elizabeth B.</h3>
          <p className="text-sm text-gray-400">Owner</p>
        </div>

        {/* Team Member */}
        <div className="text-center space-y-4">
          <Image
            src="/team-skip-02.jpg"
            alt="Team Member"
            width={374}
            height={467}
            className="image shadow-lg mx-auto"
          />
          <h3 className="text-xl font-bold text-black">John D.</h3>
          <p className="text-sm text-gray-400">Manager</p>
        </div>

        {/* Team Member */}
        <div className="text-center space-y-4">
          <Image
            src="/team-skip-03.jpg"
            alt="Team Member"
            width={374}
            height={467}
            className="image shadow-lg mx-auto"
          />
          <h3 className="text-xl font-bold text-black">Sophia R.</h3>
          <p className="text-sm text-gray-400">Designer</p>
        </div>

        {/* Team Member */}
        <div className="text-center space-y-4">
          <Image
            src="/team-skip-04.jpg"
            alt="Team Member"
            width={374}
            height={467}
            className="image shadow-lg mx-auto"
          />
          <h3 className="text-xl font-bold text-black">Michael T.</h3>
          <p className="text-sm text-gray-400">Developer</p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
