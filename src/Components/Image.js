import "./Image.css";
import introImg from "../assets/SEA Logo.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const Image = () => {
  return (
    <div className="Image"> 
    <div className="Image__container">
        <img className="into-img" src={introImg}/>
        </div>
        <div className="content">
            <p>
                Welcome to SEA
            </p>
            <h1>
                We deal with Web development and DevOps.
            </h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Image