import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if(window.scrollY >= 100){
            setColorChange(true);
        }else{
            setColorChange(false);
        }
    }
    window.addEventListener('scroll', changeNavbarColor);


  return (
   
    <div className={colorChange ? "Header Header-bg":"Header"}>
        <Link to="/">
            <h1>SEA</h1>
        </Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
                <ul>
                <Link to="/">Home</Link>
                </ul>
                <ul>
                <Link to="/about">About</Link>
                </ul>
                <ul>
                <Link to="/contact">Contact</Link>
                </ul>
                <ul>
                <Link to="/projects">Projects</Link>
                 </ul>
        </ul>
        <div className="burger" onClick={handleClick}>
            {click ? ( <FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>)}
           
            
        </div>
    </div>
  )
}

export default Navbar