import "./WorkCards.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCards = (props) => {
  return (
    <div className="projectCard">
    <img src={props.imgsrc} alt="" />
    <h2 className="project-title">{props.title}</h2>
    <div className="Pro-details">
        <p>{props.text}</p>
            <br></br>
        <div className="pro-btns">
            <NavLink to={props.view} className="btn">View</NavLink>
           <NavLink to={props.source} className="btn">Source</NavLink>
        </div> 
    </div>
</div>
  )
}

export default WorkCards