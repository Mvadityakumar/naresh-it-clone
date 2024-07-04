import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../images/slide1.png";
import Slide2 from "../images/slide2.png";
import Slide3 from "../images/slide3.png";
import Slidecards from "../components/Slidecards/Slidecards";

import { Link } from "react-router-dom";

import '../styles/home.css'

const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div >
      <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item  >
          <img src={Slide1} alt="" width="100%"  height='530px'/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Slide2} alt="" width="100%" height='530px' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Slide3} alt="" width="100%" height='530px' />
        </Carousel.Item>
      </Carousel>
      <div>
        <Slidecards/>
      </div>
      <div>
        <div className="courses-head ms-5 mb-5">
          <h1><span>Our</span> Courses</h1>
          <p>Explore new and trending free online courses.</p>
        </div>
      </div>
      <div className="courses-navbar">
        <ul>
          <li><Link to="/">Trending</Link></li>
          <li><Link>Job Placement Assistance Programs</Link></li>
          <li><Link>NASSCOM Approved Courses</Link></li>
          <li><Link>Full Stack Courses</Link></li>
          <li><Link>Internships</Link></li>
          <li><Link>Certification Courses</Link></li>
        </ul>
      </div>
    </div>
  
  );
};

export default Home;
