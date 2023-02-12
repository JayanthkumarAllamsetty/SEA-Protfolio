import "./WorkCards.css";
import React from 'react'
import WorkCards from "./WorkCards";
import WorKCardData from "./WorkCardData";
const Work = () => {
  return (
    <div className="WorkContainer">
        <h1 className="projectHeading">Projects</h1>
        <div className="projectContianer">
           {WorKCardData.map((val, ind) => {
            return(
                <WorkCards 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.details}
                view={val.view}
                source={val.source}

                />
            );
           })}
        </div>

    </div>
  )
}

export default Work