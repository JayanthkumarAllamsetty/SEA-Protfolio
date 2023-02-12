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
               </div>
               <div>
                <p>Rnd 6th floor C cubical</p>
               </div>
                <div className="phone">
                <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                </div>            
                <div>
                <p>+91 8328123372</p>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                    <p>seaclub.cse@kluniversity.in</p>
                </div>
                </div>
            <div className="footerright">
               <h4>About us</h4>
               <p>SEA Club is an association that is committed towards the development of new strategies in software engineering. </p>
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