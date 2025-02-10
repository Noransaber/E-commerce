import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import Story from '../components/Story'
import VisionMission from '../components/VisionMission'
import OurTeam from '../components/OurTeam'
import SpecialOfferSection from '../components/SpecialOfferSection'

const about = () => {
  return (
    <main>
            <Hero
        title="About Us" 
        subtitle="Embarking on the Path to Our Dreams"
        description="Share some details here. This is Flexible section where you can share anything you want. It could be details or some information."
        btnLabel="Show Now"
        imgUrl="/about-hero.jpg"
      />
      <AboutSection />
      <Story />
      <VisionMission />
      <OurTeam />
      <SpecialOfferSection
        title="Call to action"
        subtitle="Explore Our Exquisite Floral Collections & Shop Now for the Perfect Blooms"
        btnLabel="Shop Now"
        imgUrl="/cta.jpg"
      />
</main>
  )
}

export default about

