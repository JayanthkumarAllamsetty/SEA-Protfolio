import "./AboutContent.css";
import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/SEA Logo.jpg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who are we?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <Link to="/contact">
            <button className="btn">Contact Us</button>
            </Link>
        </div>
        <div className="right">
            <div className="Img-container">
                <div className="img-stacktop">
                    <img src={img1} className="img" alt="true"/>
                </div>
                <div className="img-stackbottom">
                    <img src={img1} className="img" alt="true"/>
                </div>
            </div>
            </div>
    </div>
  )
}

export default AboutContent