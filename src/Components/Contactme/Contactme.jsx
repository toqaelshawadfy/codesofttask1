import React from 'react'
import "@lottiefiles/lottie-player";
import { Link } from 'react-router-dom';
import Lotti from 'lottie-react';
import { useForm, ValidationError } from '@formspree/react';
import succanimation from '../../animation/dk9CSg5GmM.json';
import './Contactme.css'
import { Fade } from 'react-awesome-reveal';
export default function Contactme() {
    const [state, handleSubmit] = useForm("mkgwwdrp");
  return<>
   <div className="contact mt-5 pt-4 mb-5" id='contact'>
        <div className="container mt-5 pt-5 mb-5">
        <div className="title mt-3 text-center">
             <Fade direction='up'>
             <div className="tit text-center">
             <h3>Contact Me</h3>
             </div>
             </Fade>
             <Fade direction='up' cascade={false}>
             <p>Contact us for more information and Get notified when i publish simething new. </p>
             </Fade>
            </div>
            <div className="row mt-5 pt-3  g-4 ">
                <div className="col-md-5">
                   <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <input className='form-control' type='email' placeholder='Email' id="email"  name="email"/>
                    <ValidationError 
                       prefix="Email" 
                       field="email"
                       errors={state.errors}
                    />
                    <textarea className='form-control mt-3' rows="5" placeholder="Message"  id="message" name="message"/>
                    <ValidationError 
                       prefix="Message" 
                       field="message"
                       errors={state.errors}
                    />
                    <div className="button-4">
                    <button type="submit" disabled={state.submitting} className='btn form-btn mt-3'>
                      {state.submitting ? "submitting...." : "submit"}
                    </button>
                    </div>
                    {state.succeeded && (<div className='d-flex'>
                        <Lotti loop={false}   animationData={succanimation} style={{height:55}}/>
                        <h4 className='submtext mt-3'> Thanks for Joining!</h4>
                    </div>)}
                   </form>
                </div>
               <div className="col-md-6  d-flex align-items-center  flex-column">
                       <div className="mytextcontact text-center">
                        <h3>GET IN TOUCH</h3>
                        <div className="list">
                        <ul>
                        <li><Link to="https://www.facebook.com/toka.elshawadfy?mibextid=kFxxJD"><i class="fa-brands fa-facebook"></i></Link></li>
                       <li><Link to="https://www.instagram.com/toqa_elshawadfy?igsh=cHJzN3NrajczY25q"><i class="fa-brands fa-instagram"></i></Link></li>
                       <li><Link to="https://github.com/toqaelshawadfy"><i class="fa-brands fa-github"></i></Link></li>
                       <li><Link to="https://linkedin.com/in/toqa-elshawadfy"><i class="fa-brands fa-linkedin"></i></Link></li>
                       </ul>
                       </div>
                       </div>
                </div>
            </div>
            
        </div>
       </div>
  </>
}
