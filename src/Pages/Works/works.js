import React from 'react'
import Element from 'react-scroll/modules/components/Element'
import './works.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsInstagram, BsFacebook, BsLinkedin, BsSend, BsFillTelephoneFill, BsEnvelopeFill} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";


const Works = () => {
  const linkedin = () => {
    window.open("https://www.linkedin.com/in/pravin-s-781068190");
  };
  const instagram = () => {
    window.open("https://www.instagram.com/pravinsathishprabu?igsh=OTFzcGs0ZjJzYWVo");
  };
  const facebook = () => {
    window.open("https://www.facebook.com/pravin.s.1612147?mibextid=kFxxJD");
  };
    

  return (
    <Element className='workscontainer p-4' id='works'>
            <center>
                <strong className='mt-4 highlights'>Contact Me</strong>
            </center>
            <hr/>
            <center>
              <h5>If you Need a Website (or) Any Web Related Works</h5>
            </center>
            <center><span>Get in Touch here</span></center>
            <center>
            <div className='row'>
             <form className='col-md-6 mt-4'  autoComplete='off'>
                <label>Name</label>
                <input className='form-control' name='Name'/><br/>
                <label>Email (OR) Mobile Number</label>
                <input type='text' className='form-control' name='mobile'/><br/>
                <label>Any Message</label>
                <textarea className='form-control' name='message' /><br/>
                <center><button className='btn btn-success'><BsSend /> Send</button></center>
            </form>
            <div className='col-md-6 mt-4'>
                 <center>
                  <table className='col-md-12'>
                    <tr className='p-8'>
                        <th className='col-md-6'><BsFillTelephoneFill/> Call Me  </th>
                        <td className='col-md-6'>+91 9361347455</td>
                    </tr>
                    <tr className='p-8'>
                        <th className='col-md-6'><BsEnvelopeFill /> &nbsp;Email </th>
                        <td className='col-md-6'> iampravinsathishbrabu@gmail.com </td>
                    </tr>
                    <tr className='p-8'>
                        <th className='col-md-6'>< MdLocationOn/> Location </th>
                        <td className='col-md-6'> Trichy, Tamilnadu, India </td>
                    </tr>
                  </table>
                    <BsInstagram className='text-danger sm' onClick={instagram}/>
                    <BsFacebook className='text-primary sm' onClick={facebook}/> 
                    <BsLinkedin className='text-info sm' onClick={linkedin}/>
                  </center>
            </div>
            </div>
            </center>
    </Element>
  )
}

export default Works
