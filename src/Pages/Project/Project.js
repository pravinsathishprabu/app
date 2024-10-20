import React from 'react'
import vivid from '../Images/vivid.jpg'
import ecom from '../Images/uzhavan.png'
import mamcet from '../Images/mamcet.png' 
import teckon from '../Images/symposiyum.png' 
import pro from '../Images/webbee.png'
import { BsGithub, BsEye,BsArrowLeftSquareFill,BsArrowRightSquareFill } from "react-icons/bs";
import Element from 'react-scroll/modules/components/Element'
import './project.css'

const Project = () => {

  const book = () => {
    window.open("https://github.com/pravinsathishprabu/Online-Book-Store");
  };
  const ecomm = () => {
    window.open("https://github.com/pravinsathishprabu/E-commerce-for-food-products-and-Crop-disease-prediction");
  };
  const attendance = () => {
    window.open("https://github.com/pravinsathishprabu/Attendance-Management-System");
  };
  const webbee = () => {
    window.open("https://github.com/pravinsathishprabu/Online-Social-Media");
  };
  const teckon2023 = () => {
    window.open("https://teckon2023.000webhostapp.com/");
  };
  return (
    <Element className='projectcontainer bg-light mt-4' id='project'>
            <br/>
            <center><strong className='project'>Projects</strong></center>
            <hr/>
            <div className='m-4'>
              <div className="scroll">
                <div className="d-flex justify-content-start">
                  <div className='container' id="pro1">
                      <p className='card-text text-dark mt-4'>Online Book Store</p>
                      <img src= {vivid} alt='Online-Book-Store' className="poster-img"/>
                      <center><button className='btn btn-dark text-light mt-4' onClick={book}><BsGithub/> &nbsp;View</button></center>
                   <a href="#pro5" className="btn btn-light float-start"><BsArrowRightSquareFill className='move'/></a>
                  </div>
                  <div className='container' id="pro2">
                      <p className='card-text text-dark mt-4'>E-Commerce Store for farmers</p>
                      <img src= {ecom} alt='Online-Book-Store' className="poster-img"/>
                      <center><button className='btn btn-dark text-light mt-4' onClick={ecomm}><BsGithub/> &nbsp;View</button></center>
                  </div>
                  <div className='container' id="pro3">
                      <p className='card-text text-dark mt-4'>Online Social Media</p>
                      <img src= {pro} alt='Online Social Media' className="poster-img"/>
                      <center><button className='btn btn-dark text-light mt-4' onClick={webbee}><BsGithub/> &nbsp;View</button></center>
                  </div>
                  <div className='container' id="pro4">
                      <p className='card-text text-dark mt-4'>Attendance Management System in Laravel</p>
                      <img src= {mamcet} alt='Attendance-Management-System' className="poster-img"/>
                      <center><button className='btn btn-dark text-light mt-4' onClick={attendance}><BsGithub/> &nbsp;View</button></center>
                  </div>
                   <div className='container' id="pro5">
                      <p className='card-text text-dark mt-4'>Teckon 2023 - National Level Technical Symposiyum</p>
                      <img src= {teckon} alt='Teckon 2k23' className="poster-img"/>
                      <center><button className='btn btn-dark text-light mt-4' onClick={teckon2023}><BsEye/> &nbsp;View</button></center>
                    <a href="#pro1" className="btn btn-light float-end"><BsArrowLeftSquareFill className='move'/></a>
                  </div>
                </div>
              </div>              
            </div>
    </Element>
  )
}

export default Project
