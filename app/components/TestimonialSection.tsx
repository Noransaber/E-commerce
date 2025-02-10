import React from 'react';
import TestimonialCard from './TestimonialCard';
import testimonialsData from '../data/testimonialData.json';  // Correct import of the JSON data

const TestimonialSection = () => {
  return (
    <section className="container mx-auto section py-16">
      {/* Section Header */}
      <div className="text-center flex justify-center items-center flex-col mb-12">
        <h2 className="text-primary font-medium text-sm uppercase">TESTIMONIAL</h2>
        <h3 className="text-5xl font-bold text-black mt-2 new-arrival-heading leading-snug">
          Hear From Our Happy Customers
        </h3>
        <h3 className="text-black mt-4">
          Share some details here. This is a flexible section where you can share anything you want.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonials */}
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} /> 
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
