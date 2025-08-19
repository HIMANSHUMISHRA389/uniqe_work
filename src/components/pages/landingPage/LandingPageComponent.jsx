import React from 'react'
import Header from '../../common/Header'
import HeroSection from './HeroSection'
import Expertise from './Expertise'
import Location from './Location'
import Work from './Work'
import FacilitiesWeProvide from './FacilitiesWeProvide'
import VendorList from './VendorList'
import Testimonials from './Testimonials'
import Footer from '../../common/Footer'

const LandingPageComponent = () => {
  return (
    <div>

  <Header/>
    <HeroSection/>
    <Expertise/>

    <Work/>
    <FacilitiesWeProvide/>
        <Location/>
        <VendorList/>
        <Testimonials/>
        <Footer/>

    </div>
  )
}

export default LandingPageComponent