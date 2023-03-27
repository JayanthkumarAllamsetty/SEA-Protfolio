import "./AboutContent.css";
import React from 'react'
import { Link } from "react-router-dom";
// import img1 from "../assets/About-1.jpg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who are we?</h1>
            <p>
                We are the team of talented developers making websites and web applications. We are passionate about our work and we love what we do. We are a team of 2 members. We are from Vijayawada, Andhra Pradesh, India.
                
            </p>
            <Link to="/contact">
            <button className="btn">Contact Us</button>
            </Link>
        </div>
        {/* <div className="right">
            <div className="Img-container">
                <div className="img-stacktop">
                    <img src={img1} className="img" alt="true"/>
                </div>
                <div className="img-stackbottom">
                    <img src={img1} className="img" alt="true"/>
                </div>
            </div>
            </div> */}
    </div>
  )
}

export default AboutContent