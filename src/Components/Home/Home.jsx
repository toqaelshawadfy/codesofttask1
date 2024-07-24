import React from 'react'
// import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import "@lottiefiles/lottie-player";
import Lotti from 'lottie-react';
import animation1 from '../../animation/tuHeqpKIyc.json';
import { Link } from 'react-scroll';
import './Home.css';
export default function Home() {
  return <>
   <div className="container mt-5"id='home' >
    <div className="row d-flex justify-content-center align-items-center mt-5">
      <div className="col-md-6">
        <div className="pra">
        <Fade direction="down">
        <p className='Hello'>Hello!</p>
        <h2><span className='Hi'>I'm</span> Toqa Elshawadfy.</h2>
        <h3>Front-end Developer</h3>
        </Fade>
        <p>Front-end creating the visual and interactive aspects of a<br></br> website or application that users interact with directly.</p>
        <Fade direction='up'>
        <div className="btn">
         <button class="animated-button">
        <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
        </svg>
        <Link to='contact' style={{ textDecoration: 'none' }}>
        <span class="text btn-cont">Contact Me</span></Link>
        <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>

        </div>
        </Fade>
        </div>
      </div>
      <div className="col-md-6">
        <div className="animation">
        <Fade direction='right'>
           <Lotti animationData={animation1} />
        </Fade>
        </div>
      </div>
    </div>
   </div>
  </>
}
