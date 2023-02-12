import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import HeroImg from '../Components/HeroImg'
import Work from '../Components/Work'
const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg heading="projects" text="some of my recent works"/>
    <Work/>
    <Footer/>
  
    </div>
  )
}

export default Project