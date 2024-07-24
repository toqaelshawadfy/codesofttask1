import React from 'react'
import { Link} from 'react-scroll';
import './Navbar.css'
export default function Navbar() {
  return <>
<nav class="navbar navbar-expand-lg bg-black fixed-top">
  <div class="container-fluid">
    < Link class="navbar-brand" href="#">Portfolio</ Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={300} className='nav-link'  to="home">Home</Link >
        </li>
        <li class="nav-item">
          < Link activeClass='active' spy={true} smooth={true} offset={-100} duration={300} className='nav-link' to="about">About</Link>
        </li>
        <li class="nav-item">
          < Link activeClass='active' spy={true} smooth={true} offset={-100} duration={300} className='nav-link' to="projects">Projects</Link>
        </li>
        <li class="nav-item">
          < Link activeClass='active' spy={true} smooth={true} offset={-200} duration={300} className='nav-link'  to="contact">contact</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  </>
}
