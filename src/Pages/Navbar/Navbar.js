import React from 'react'
import {Link} from 'react-scroll'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='header bg-light text-dark'>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
        <h1 className="container__left">Develop<span>er</span></h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-dark"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav container__right">
        <li className="nav-item">
        <Link to="about" smooth={true} duration={500}>
                <strong>About</strong>
            </Link>
        </li>
        <li className="nav-item">
        <Link to="skills" smooth={true} duration={500}>
                <strong>Skills</strong>
            </Link>
        </li>
        <li className="nav-item">
        <Link to="career" smooth={true} duration={500}>
                <strong>Career</strong>
            </Link>
        </li>
        <li className="nav-item">
        <Link to="works" smooth={true} duration={500}>
                <strong>Contact</strong>
        </Link>
        </li>
        <li className='nav-item'>
        <Link to="project" smooth={true} duration={500}>
                <strong>Projects</strong>
        </Link>
        </li>
        <h6 className='butt'><a href='mailto:iampravinsathishbrabu@gmail.com?body=Hi Pravin,' className='link'>iampravinsathishbrabu@gmail.com</a></h6>
      </ul>
      
    </div>
  </div>
  <hr></hr>
</nav>
    </div>
  )
}

export default Navbar
