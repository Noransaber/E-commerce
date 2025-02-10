import React from 'react';
import ProductCard from './ProductCard';

const NewArrivalSection = ({ products }) => {
  return (
    <section className="py-12 section bg-globalBg">
      {/* Section Heading */}
      <div className="text-center mb-8 flex items-center flex-col justify-center">
        <h5 className="text-primary font-medium text-sm uppercase">New Arrival</h5>
              <h2 className="text-5xl font-bold text-black mt-2 new-arrival-heading leading-snug">
                  Discover the Latest Additions at Your Top Choice Flower Shop.
              </h2>
        <p className="text-black mt-2">
        Share some details here. This is Flexible section where you can share anything you want.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.slice(0, 6).map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
    </section>
  );
};

export default NewArrivalSection;
