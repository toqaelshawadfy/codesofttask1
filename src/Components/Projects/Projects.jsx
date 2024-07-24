import React from 'react';
import { Fade } from 'react-awesome-reveal';
import project1 from '../../assets/photo/project-4.jpg';
import project2 from '../../assets/photo/project-5.jpg';
import project3 from '../../assets/photo/project-3.jpg';
import project4 from '../../assets/photo/project-2.jpg';
import { Link } from 'react-router-dom';
import './Projects.css'
export default function Projects() {
  return <>
    <div className="projects mt-5 pt-4" id='projects'>
       <div className="container mt-4">
       <div className="tit3 text-center">
            <Fade direction='up'>
             <h3>Projects</h3>
            </Fade>
            <Fade direction='up'>
            <p className='mt-1'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </Fade>
        </div>
        <div className="container mt-3">
            <div className="row g-4 mt-4">
                <div className="col-md-4">
                  <div className="image">
                    <img src={project1} alt='project1' className='w-100'/>
                    <div className="overlay">
                    <h5 class="imgtitle">BOOK MARK</h5>
                    <div className="link">
                    <Link to="https://github.com/toqaelshawadfy/java3.git"><i class="fa-solid fa-link"></i></Link>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                <div className="image">
                    <img src={project2} alt='project2' className='w-100'/>
                    <div className="overlay">
                    <h5 class="imgtitle">E-commerce</h5>
                    <div className="link">
                    <Link to="https://github.com/toqaelshawadfy/e-commerce.git"><i class="fa-solid fa-link"></i></Link>
                     </div>
                    </div>
                </div>
                </div>
                <div className="col-md-8">
                <div className="image">
                    <img src={project3} alt='project3' className='w-100'/>
                    <div className="overlay">
                    <h5 class="imgtitle">YUMMY</h5>
                    <div className="link">
                   <Link to="https://github.com/toqaelshawadfy/YummyJavaScript.git"><i class="fa-solid fa-link"></i></Link>
                   </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="image">
                    <img src={project4} alt='project4' className='w-100'/>
                    <div className="overlay">
                    <h5 class="imgtitle">DENIAL PORTFOLIO</h5>
                    <div className="link">
                    <Link to="https://github.com/toqaelshawadfy/Daniles.git"><i class="fa-solid fa-link"></i></Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  </>
}
