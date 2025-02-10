import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../data/featuresData';

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-globalBg py-16 section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
