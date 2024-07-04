import React from "react";

import "./slidecards.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Courses from "./Courses";


const Slidecards = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  const   coursedata = slidedata.map((d)=>{
    return(
      <Courses  img={d.img} date={d.date} name={d.name} duration={d.duration} by={d.by}  />
    )
  
  })


  





  return (
    <Carousel responsive={responsive}>
     {coursedata}
     
    </Carousel>
  );
};

export default Slidecards;

const slidedata = [
  {
    // img: "images/3.png",
    img: "assets/data sci.png",
    name: "Full Stack Data Science & AI",
    date: "1 July 2024",
    by: "Mr.Daniel",
    duration: "5 Months",
  },
  {
    img: "assets/Java.png",
    name: "Full Stack Java",
    date: "10 July 2024",
    by: "Mr.Hari Krishna",
    duration: "6 Months",
  },
  {
    img: "assets/multi-cloud-online-training-nareshit.png",
    name: "Multi Cloud",
    date: "27 July 2024",
    by: "Mr. Santhos",
    duration: "60 Days",
  },
  {
    img: "assets/python (1).png",
    name: "Full Stack Python",
    date: "1 July 2024",
    by: "Mr. K V Rao",
    duration: "5 Months",
  },
  {
    img: "assets/c-language-online-training-nareshit.png",
    name: "C Language",
    date: "22 July 2024",
    by: "Mr. Srikanth",
    duration: "60 Days",
  },
  {
    img: "assets/software-testing-online-training-nareshit.png",
    name: "Selenium",
    date: "30 July 2024",
    by: "Mr. Vijay",
    duration: "90 Days",
  },
  {
    img: "assets/digital-marketing-online-training-nareshit.png",
    name: "Digital Marketing",
    date: "1 July 2024",
    by: "Mr. K V Rao",
    duration: "5 Months",
  },
  {
    img: "assets/ms-azure-and-devops-online-training-nareshit.png",
    name: "MS Azure DevOps Training",
    date: "1 July 2024",
    by: "Mr. K V Rao",
    duration: "3 Months",
  },
  {
    img: "assets/power-bi-online-training-nareshit.png",
    name: "Power BI",
    date: "12 July 2024",
    by: "Miss Mohana",
    duration: "3 Months",
  },
];
