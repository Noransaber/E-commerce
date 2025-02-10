import React from 'react'
import Hero from '../components/Hero'
import GetInTouch from '../components/GetInTouch'

const contact = () => {
  return (
    <main>
                  <Hero
        title="Contact Us" 
        subtitle="Get in Touch with Our Experts Team"
        description="Share some details here. This is Flexible section where you can share anything you want. It could be details or some information."
        btnLabel="Show Now"
        imgUrl="/contact-hero-bg.jpg"
      />
      <GetInTouch />
</main>
  )
}

export default contact
