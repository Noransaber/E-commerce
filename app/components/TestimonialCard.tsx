import React from 'react';

// Define the structure of a single Testimonial object
interface Testimonial {
  name: string;
  jobTitle: string;
  description: string;
  img: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;  // Prop should be a single testimonial object
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <div className="flex justify-center text-yellow-500 mb-4">
        {'★'.repeat(5)} {/* Static 5 stars */}
      </div>
      <p className="text-lg text-gray-700 mb-4 text-center">
        {testimonial.description}
      </p>
      <div className="flex items-center">
        <img
          src={testimonial.img}  
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold text-gray-800">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.jobTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
