import "./Image.css";
import introImg from "../assets/Header-3.gif";
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
                Welcome 
            </p>
            <h1>
                I'm Jayanth Kumar Allamsetty
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