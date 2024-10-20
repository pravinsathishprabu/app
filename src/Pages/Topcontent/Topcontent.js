import React from 'react';
import {useState} from 'react';
import {Link} from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Topcontent.css'
import Mail from './Mail/Mail';
import { Element } from 'react-scroll';
import { FiDownload } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { saveAs } from 'file-saver';
import pravin from "../Images/pravin_edited.png"
import mule from "../Images/Cert-Badge_MuleSoft-Developer-I.png"


const Topcontent = () => {
  const saveFile = () => {
    window.open("https://drive.google.com/file/d/1WL8oX-Fdua6o1xMl_7ZU7RNY9ioxRo6i/view");
  };

  const [openMail, setOpenMail] = useState(false);

  return (
    <Element className="Topcontent bg-light text-light" id='about'>
       <div className="mail">{openMail && <Mail closeMail={setOpenMail}/>}</div>
       <div className="row">
       <div className="col-md-6">
            <center>
              <img src={pravin} className='pravin' alt="pravin"/>
            </center>
          </div>
          <div className="col-md-6 info">
              <h5 className='text-dark'>Hai, I'm  <span className='name'>Pravin Sathishbrabu </span>B.Tech</h5>
              <h5 className='text-dark'>Web & ETL Developer</h5>
              
              <h6 className='text-dark p-text'>- "I am a Fullstack Web and ETL Developer 
              dedicated to crafting end-to-end solutions that are both robust and
               efficient. Feel free to explore my projects, where you'll find my work in
                both web development and data engineering.
                 If you're interested in collaborating or have any questions, don't hesitate to reach out!"</h6>
             <br/>
             <div className='mt-2'>
              <h6 className='btn btn-warning text-light' onClick={saveFile}><FiDownload/>&nbsp;&nbsp;Download CV</h6>
              &nbsp;<Link to="works" smooth={true} duration={500}>
                <h6 className='btn btn-primary text-light call'><IoIosMail/>&nbsp;&nbsp;Contact Me&nbsp;</h6>
                </Link>
             </div>
             
          </div>
       </div>
    </Element>
  )
}

export default Topcontent