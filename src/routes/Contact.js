import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import HeroImg from '../Components/HeroImg'
import Form from '../Components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="Contact us" text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact