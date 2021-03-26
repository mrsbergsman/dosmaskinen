import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import Footer from '../footer/Footer';
import './_start.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import onePill from '../../images/medIconTransp.png';
import clock from '../../images/clockIconTransp.png';
import message from '../../images/messIconTransp.png';
import info from '../../images/infoGreenTransp.png';
import video from '../../video/medi.mp4';

function Start() {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <>
    <div className="start-container">
      <div className="video-container">
        <video className='backgroundVideo' autoPlay loop muted> 
          <source src={video} type='video/mp4' />
        </video>
        <div className="top-box">
          <p className="medicMinder">MedicMinder</p>
          <div className="welcom-text-box">
            <p className="welcome-underText">The medication reminder</p>
            <p className="welcome-text">Keeping track of medications is difficult. <br/>We can help! </p>
          </div>
          <div className="navigation">
            <NavLink className="header-nav" exact to="/login"> 
              <li className='header-link'>Log in</li>
            </NavLink>
            <NavLink className="header-nav" exact to="/register"> 
              <li className='header-link'>Register</li>
            </NavLink>
          </div>  
        </div>     
      </div>  

      <div className="bottom-box">
        <div className="section1-box">
          <div className="row">   
            <div className="col">
              <img data-aos="fade-up" data-aos-duration="3000" className="machine-image" src={info} alt="Info icon"/>  
            </div>       
            <div className="col">
              <div className="bottom-information-box">              
                <p className="information-header">What is MedicMinder?</p>
                <p className="index-info-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi"</p>
                <p className="information-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                  anim id est laborum."
                  <br/><br/>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                  anim id est laborum."
                  <br/>
                </p>                
              </div>
            </div>          
          </div>            
        </div>
      </div>

      <div>
        <div className="bottom-box2">
          <div className="section2-box">
            <p className="bottom-box2-header">How it works?</p>
            <div class="row">
              <div class="col">
                <div className="onepill-card">
                  <img className="start-icons" src={onePill} alt="A pill icon"/>
                  <p className="start-icon-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </p>
                </div>
              </div>
              <div class="col">
                <div className="clock-card">
                  <img className="start-icons" src={clock} alt="A clock icon"/>
                  <p className="start-icon-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </p>
                </div>
              </div>
              <div class="col">
                <div className="message-Card">
                  <img className="start-icons" src={message} alt="A message icon"/>
                  <p className="start-icon-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
    <Footer/>
    </>
  );
}

export default Start;

