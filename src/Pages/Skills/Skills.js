import React from 'react'
import Element from 'react-scroll/modules/components/Element'
import { SiMysql,SiReact,SiPhp,SiJavascript,SiCss3,SiHtml5,SiBootstrap,SiMulesoft} from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import './Skills.css'
import snaplogic from '../Images/snaplogic.webp'

const Skills = () => {
  return (
    <Element className='skillcontainer p-4' id='skills'>
            <center>
                <strong className='mt-4 highlights'>Skills</strong>
            </center>
            <hr/>
        <div className='row'>
            <div className='col-md-4'>
                <div className='bg-dark skilltab'>
                    <h1 className='text-center'><FaLaravel className='text-danger'/>&nbsp;<span className='highlight2'>Laravel</span></h1>
                </div>
                <br/>
                
                <div className='bg-dark skilltab'>
                    <h1 className='text-center'><SiBootstrap className='text-primary'/>&nbsp;<span className='highlight2'>Bootstrap</span></h1>
                </div>
                <br/>

                <div className='bg-dark skilltab'>
                    <h1 className='text-center'><SiCss3 className='text-info'/>&nbsp;<span className='highlight2'>CSS</span></h1>
                </div>
                <br/>

            </div>
            <div className='col-md-4'>
                <div className='bg-dark skilltab'>
                    <h1 className='text-center'><SiReact className='text-primary'/>&nbsp;<span className='highlight2'>React JS</span></h1>
                </div>
                <br/>

                <div className='bg-dark skilltab'>
                    <h1 className='text-center'><SiMysql className='text-light'/>&nbsp;<span className='highlight2'>MySQl</span></h1>
                </div>
                <br/>

                <div className='bg-dark skilltab'>
                    <h1 className='text-center'><SiHtml5 className='text-danger'/>&nbsp;<span className='highlight2'>HTML</span></h1>
                </div>
                <br/>
            </div>
            <div className='col-md-4'>
                <div className='bg-dark skilltab'>
                    <h1 className='text-center'><SiPhp className='text-info'/>&nbsp;<span className='highlight2'>PHP</span></h1>
                </div>
                <br/>

                <div className='bg-dark skilltab'>
                    <h1 className='text-center'><SiJavascript className='text-warning'/>&nbsp;<span className='highlight2'>JavaScript</span></h1>
                </div>
                <br/>

                <div className='bg-dark skilltab'>
                    <h1 className='text-center'><SiMulesoft className='text-info'/>&nbsp;<span className='highlight2'>Mulesoft</span></h1>
                </div>
                <br/>
            </div>
            
        </div>
        <center> 
            <img src={snaplogic} className='snaplogic' alt='snaplogic'/>
        </center>
    </Element>
  )
}

export default Skills

