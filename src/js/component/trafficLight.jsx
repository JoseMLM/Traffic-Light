import React, { useState } from "react";

const TrafficLight = () => {
	
  const [ color, setColor] = useState("");
  
  return (
    <div>
      <div className="main-container">
        <div className="upperZone"></div>
        <div className="trafficLight">

          <div className={(color== "red") ? "glow" : ""} id="redLight" onClick={() => {
            setColor("red");
          }}></div>

          <div className={(color=="yellow" ? "glow" : "")} id="yellowLight" onClick={() => {
            setColor("yellow");
          }}></div>

          <div className={(color=="green" ? "glow" : "")} id="greenLight" onClick={() => {
            setColor("green");
          }}></div>

        </div>
      </div>
    </div>
	);
};

export default TrafficLight; 
