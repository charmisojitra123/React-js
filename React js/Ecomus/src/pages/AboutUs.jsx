import React from 'react'
import AboutUsBanner from '../components/AboutUsBanner'
import AboutInfo from '../components/AboutInfo'
import OurPriority from '../components/OurPriority'
import AboutShopGram from '../components/AboutShopGram'

const AboutUs = () => {
  return (
    <div>
      {/* Banner Section */}
      <AboutUsBanner />

      {/* About Info */}
      <AboutInfo /> 

      {/* Quality Priority Section */}
      <OurPriority />

      {/* Shop Gram */}
      <AboutShopGram />
      
    </div>
  )
}

export default AboutUs
