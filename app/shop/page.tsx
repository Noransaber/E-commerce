import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/flower_products.json';
const shop = () => {
  return (
    <section className="py-12 section bg-globalBg">
      {/* Section Heading */}
      <div className=" mb-8 ">
        <h5 className="text-primary font-medium text-3xl ">Shop</h5>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
    </section>
  );
};

export default shop;
