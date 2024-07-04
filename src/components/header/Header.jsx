import React from "react";
import "../header/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-one">
        <a href="#">
          <img
            width="150px"
            src="../../assets/naresh-it-logo2.png"
            alt="logo"
          />
        </a>
        <form action="" className="headerform"> 
          <div  className="headerform-div">
          <input type="text" placeholder="Search Course" />
          <button type="button" className="bi bi-search"></button>
          </div>
        </form>
      </div>
      <div className="header-two">
        <ul>
          <li > 
          <a    className="bi bi-house-door"  href="#"></a>
            </li>
          <li>
          
            <select  name="" id=""   >
              <option value=""   disabled selected hidden>All COURSES  &#x25bE;</option>
              <option  value="Full Stack Courses">Full Stack Courses</option>
              <option value="Nasscom Courses">Nasscom Courses</option>
              <option value="Job Assistance Courses">Job Assistance Courses</option>
              <option value="Trending Courses">Trending Courses</option>
              <option value="Internships">Internships</option>
            </select>
          
            
          </li>
          <li>
          <select  name="" id="" >
              <option value=""  disabled selected hidden>SERVICES  &#x25bE;</option>
              <option  value="Classroom Training">Classroom Training</option>
              <option value="Online Training">Online Training</option>
              <option value="Weekend Training">Weekend Training</option>
              <option value="Real-Time Projects">Real-Time Projects</option>
              <option value="Internships">Internships</option>
              <option value="Corporate Training">Corporate Training</option>
            </select>
          </li>
          <li>
          <select  name="" id="" >
              <option value=""  disabled selected hidden>TRAINING  &#x25bE;</option>
              <option  value="Full Stack Courses">New Batches</option>
              <option value="Nasscom Courses">Interview Questions</option>
              <option value="Job Assistance Courses">Blog</option>
              <option value="Trending Courses">Placement Registration</option>
              <option value="Internships">Job Assistance</option>
            </select>
          </li>
          <li>
          <select  name="" id="" >
              <option value=""  disabled selected hidden>ABOUT  &#x25bE;</option>
              <option  value="Full Stack Courses">About Naresh IT</option>
              <option value="Nasscom Courses">Trainers Profile</option>
              <option value="Job Assistance Courses">Our Theme</option>
              <option value="Trending Courses">Careers</option>
              <option value="Internships">Testimonials</option>
              <option value="">New & Events</option>
            </select>
          </li>
          <li>CONTACT</li>
          <li><button   style={{border:'none', color:'white', backgroundColor:'blue', padding:'4px 15px', borderRadius:'5px'}}  type="button">Login</button></li>
        </ul>


      </div>
    </div>
  );
};

export default Header;
