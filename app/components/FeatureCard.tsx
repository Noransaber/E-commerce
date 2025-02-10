import React from 'react';



const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col p-6 border-l border-primary-light  transition-colors">
      <div className="text-base font-medium text-primary-light mb-4">{number}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;
