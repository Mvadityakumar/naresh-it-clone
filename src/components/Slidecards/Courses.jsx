import React from "react";
import './slidecards.css'
const Courses = (props) => {
  return (
    <div className="slide-card-main">
      <div className="slide-card-img">
        <img src={props.img} alt="" width="100%" />
      </div>
      <div className="slide-card-name">
        <h3>{props.name}</h3>
        <span className="bi bi-star-fill"></span>
        <span className="bi bi-star-fill"></span>
        <span className="bi bi-star-fill"></span>
        <span className="bi bi-star-fill"></span>
        <span className="bi bi-star-fill"> </span>5
      </div>
      <div className="slide-card-time">
        <span className="bi bi-clock"> Start: {props.date}</span>
        <br />
        <span className="bi bi-person"> by: {props.by}</span>
        <br />
        <span className="bi bi-clock"> Duration: {props.duration}</span>
      </div>
      <div className="slide-card-button">
        <button>ENROLL</button>
        <button className="bi bi-share"> SHARE</button>
      </div>
    </div>
  );
};

export default Courses;
