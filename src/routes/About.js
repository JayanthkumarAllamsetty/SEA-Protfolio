import React from 'react'
import Navbar from '../Components/Navbar'

import Footer from '../Components/footer'
import HeroImg from '../Components/HeroImg'
import AboutContent from '../Components/AboutContent'
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="About" text="I'm a developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About