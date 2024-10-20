import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mail.css'
import {GrSend} from 'react-icons/gr'


const Mail = ({closeMail}) => {
  function sendMail(e) {
    e.preventDefault();
}
  return (
    <div className='Mail bg-info'>
      <h3>Contact Me<button className='btn btn-danger' onClick={()=>closeMail(false)}> X </button></h3>
      <hr className='text-dark'/>
      <form autoComplete='off' onSubmit={sendMail}  required>
        <div className="row">
          <div className="col">
            <b className='text-dark'>Name</b>
            <input type='text' className="form-control" name='name'/>
          </div>
          <div className="col">
            <b className='text-dark'>Email Address</b>
            <input type='email' className="form-control" name='user_email'/>  
          </div></div>
          <br/>
          <b className='text-dark'>Message</b>
          <textarea name='message' className='form-control' rows="5"/><br/>
          <center><button className='btn btn-success text-light'><GrSend className='text-light'/>&nbsp;Send</button></center>
      </form>
    </div>
  )
}

export default Mail