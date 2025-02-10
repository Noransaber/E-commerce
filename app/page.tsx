import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import Hero from './components/Hero';
import NewArrivalSection from './components/NewArrivalSection';
import products from '../app/data/flower_products.json'
import SpecialOfferSection from './components/SpecialOfferSection';
import TestimonialSection from './components/TestimonialSection';
export default function Home() {
  return (
    <main>
      <Hero
        title="Welcome to Florist" 
        subtitle="Let's Make Beautiful Flowers a Part of Your Life."
        description="Explore a vibrant tapestry of blooms and arrangements that add color, fragrance, and elegance to your life. Discover the perfect floral expression for every moment and occasion."
        btnLabel="Shop Now"
        imgUrl="/cta.jpg"
      />
      <FeaturesSection />
      <AboutSection />
      <NewArrivalSection products={products} />
      <SpecialOfferSection
        title="SPECIAL OFFER"
        subtitle="Your Floral Journey Begins Here: Get 20% Off Your First Order!"
        btnLabel="Shop Now"
        imgUrl="/about.jpg"
      />
      {/* <SpecialOfferSection /> */}
      <TestimonialSection />
      <SpecialOfferSection
        title="Call to action"
        subtitle="Explore Our Exquisite Floral Collections & Shop Now for the Perfect Blooms"
        btnLabel="Shop Now"
        imgUrl="/cta.jpg"
      />
    </main>

    
  );
}
