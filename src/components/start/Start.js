import React from 'react';
import {NavLink} from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './_start.scss'
import startImage from '../../images/mainIconGreen.png';
import dosmaskin from '../../images/dosmaskin.png';
import onePill from '../../images/medIconTransp.png';
import clock from '../../images/clockIconTransp.png';
import message from '../../images/messIconTransp.png';

function Start() {
  return (
    <>
    <Header/>
    <div className="start-container">
      <div className="top-box">
        <div className="row">
          <div className="col">
            <img className="start-image" src={startImage} alt="Two pills on green bottom"/>
          </div>
          <div className="col">
            <p className="welcome-text">Welcome to</p>
            <p className="welcome-underText">Medical dosing machine</p>
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
      </div>

      <div className="bottom-box">
        <div className="section1-box">
          <div className="row">            
            <div className="col">
                <p className="information-header">What is Medical dosing machine?</p>
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
                  <br/><br/>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                  anim id est laborum."
                </p>
            </div>
            <div className="col">
              <img className="machine-image" src={dosmaskin} alt="The dosing machine"/>
            </div>
          </div>            
        </div>
      </div>

      <div>
        <div className="bottom-box2">
          <div className="section1-box">
            <p className="bottom-box2-header">How does it work?</p>
            <div class="row">
              <div class="col">
                <img className="start-icons" src={onePill} alt="A pill icon"/>
                <p className="start-icon-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </p>
              </div>
              <div class="col">                
                <img className="start-icons" src={clock} alt="A clock icon"/>
                <p className="start-icon-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </p>
              </div>
              <div class="col">
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
    <Footer/>
    </>
  );
}

export default Start;

