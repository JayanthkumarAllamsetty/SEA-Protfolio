import "./footer.css";

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTelegram } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footerleft">
               <div className="Location">
                    <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>

                    <p>Vijayawada</p>
               </div>
               <div>
                
               </div>
                <div className="phone">
                <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                <p>+91 8328123372</p>
                </div>            
                <div>
              
                </div>
                <div className="email">
                  <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                    <p>jayanthkumarsai001@gmail.com</p>
                </div>
                </div>
            <div className="footerright">
               <h4>About us</h4>
               <p> Welcome to my portfolio! My name is Jayanth Kumar and I am a passionate front-end developer. I specialize in creating beautiful, responsive and user-friendly websites using HTML, CSS, and JavaScript. With my skills and expertise, I can help bring your ideas to life and make your website stand out from the crowd. Take a look at my portfolio and let's work together to make your dream website a reality!</p>
               <div className="social">
                    <FaFacebook size={20} style={{color:"white",marginRight:"2rem"}}/>
                    <FaInstagram size={20} style={{color:"white",marginRight:"2rem"}}/>
                    <FaTelegram size={20} style={{color:"white",marginRight:"2rem"}}/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default footer