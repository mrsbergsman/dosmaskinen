import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import Footer from '../footer/Footer';
import './_start.scss'
import AOS from "aos";
import "aos/dist/aos.css";
// import Scrollspy from 'react-scrollspy'


import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import onePill from '../../images/medIconTransp.png';
import clock from '../../images/clockIconTransp.png';
import message from '../../images/voiceMailTransp.png';
import info from '../../images/infoGreenTransp.png';
import video from '../../video/medi1.mp4';

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
        <div data-aos="fade-up" data-aos-duration="3000" className="section1-box">
          <div className="row">   
            <div className="col">
              <img  className="machine-image" src={info} alt="Info icon"/>  
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

      <p data-aos="fade-up" data-aos-duration="3000" className="bottom-box2-header">How it works!</p>
        <div data-aos="fade-up" data-aos-duration="3000" className="bottom-box2">
          <div className="section2-box">
          <div className="nav-bakground"></div>
          
              <div data-aos="fade-up" data-aos-duration="3000" className="scroll-nav">
                <ul>
                  <li className="scroll-link-listItem">
                    <Link className="scrollink" to="medecine" spy={true} smooth={true} offset={50} duration={500} >
                      The medicine list
                    </Link>
                  </li>
                  <li className="scroll-link-listItem">
                  <Link className="scrollink" to="setTime" spy={true} smooth={true} offset={50} duration={500} >
                    Set the time to take the medicine
                  </Link>
                  </li>
                  <li className="scroll-link-listItem">
                  <Link className="scrollink" to="record" spy={true} smooth={true} offset={50} duration={500} >
                    Choose alarm sound 
                  </Link> 
                  </li>
                </ul>
              </div>

              <div data-aos="fade-up" data-aos-duration="3000" className="start-information-bottom2box">
                <div id="medecine" className="onepill-box">
                  <div className="row">
                    <div className="col">
                      <img className="start-icons" src={onePill} alt="A pill icon"/>
                    </div>
                    <div className="col">
                      <p className="start-icon-header">The medicine list</p>
                      <p className="start-icon-underText">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua."</p>
                      <p className="start-icon-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      </p>
                    </div>
                  </div>
                </div>

                <div id="setTime" className="clock-box">              
                  <div className="row">
                    <div className="col">
                      <img className="start-icons" src={clock} alt="A clock icon"/>
                    </div>
                    <div className="col">
                      <p className="start-icon-header">Set the time when to take the medicine</p>
                      <p className="start-icon-underText">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua."</p>
                      <p className="start-icon-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      </p>
                    </div>
                  </div> 
                </div>

                <div id="record" className="message-box">
                  <div className="row">
                    <div className="col">
                      <img className="start-icons" src={message} alt="A message icon"/>
                    </div>
                    <div className="col">
                    <p className="start-icon-header">Choose your alarm sound</p>
                    <p className="start-icon-underText">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua."</p>
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

