//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//import styles
import "../styles/index.css"

//import your own components
import TrafficLight from "./component/trafficLight.jsx";


//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));