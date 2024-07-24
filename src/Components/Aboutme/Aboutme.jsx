import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from 'react-awesome-reveal';
import resume from '../../mycv/Purple and White Clean and Professional Resume (1).pdf'
import './Aboutme.css';
export default function Aboutme() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return <>
   <div className="about p-1 mt-5" id='about'>
          <div className="container">
          <div className="title text-center">
          <Fade direction='up'>
          <h3 className="mt-5">ABOUT ME</h3>
          </Fade>
          </div>
          <Fade direction='up'>
          <div className="pra text-white text-center mt-3">
          <p><span>I'm Toqa</span> ,Front-end Developer,Computer Science student in Higher Technological Institute,and  had frontend diplome in Route Academy. I focus on frontend development and ongoing studies in backend web technologies to be Full-stack.</p>
          </div>
          </Fade>
          </div>
          <div className="container mt-5">
            <div className="row mt-5">
             <div className="col-md-7 toqa mt-2">
                 <div className="titl2 text-white">
                  Personal Details
                 </div>
                 <table className="mt-3">
                  <tr>
                    <td className=" myrow"><span>Age :</span></td>
                    <td className="text-white myrow">&nbsp;&nbsp;&nbsp;&nbsp;21</td>
                  </tr>
                  <tr>
                    <td className="myrow"><span>Phone :</span></td>
                    <td className=" text-white myrow">&nbsp;&nbsp;&nbsp;&nbsp;+20 1273711857</td>
                  </tr>
                  <tr>
                    <td className=" myrow"><span>Email :</span></td>
                    <td className=" text-white myrow">&nbsp;&nbsp;&nbsp;&nbsp;toqaelshawadfy196@gmail.com</td>
                  </tr>
                  <tr>
                    <td className=" myrow"><span>Location :</span></td>
                    <td className="text-white myrow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ismailia, Egypt</td>
                  </tr>
                 </table>
              </div>
              <div className="col-md-4 ms-auto myslider mt-2">
                <div className="titl2 text-white">
                  Skills
                </div>
                <Slider {...settings} className="mt-3">
                  <div><i class="fa-brands fa-html5"></i></div>
                  <div><i class="fa-brands fa-css3"></i></div>
                  <div><i class="fa-brands fa-bootstrap"></i></div>
                  <div> <i class="fa-brands fa-js"></i></div>
                  <div><i class="fa-brands fa-react"></i></div>
                  <div><i class="fa-brands fa-git"></i></div>
                  <div><i class="fa-brands fa-node"></i></div>
                 <div> <i class="fa-solid fa-database"></i></div>
                </Slider>
              </div>
            </div>
           <Fade direction='up'>
            <div className=" d-flex justify-content-center align-items-center mt-4 ">
            <button className="bookmarkBtn mt-4 btn  d-flex justify-content-center align-items-center">
  <span className="IconContainer">
    <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
  </span>
        <Link className="text  text-white" style={{ textDecoration: 'none' }} to={resume} download='resume'>Download CV</Link>
             </button>
            </div>
           </Fade>
          </div>
        </div>
  </>
}
