import React from 'react';
import {NavLink} from 'react-router-dom'
import './_navigationbar.scss'
function Navigationbar () {
  return (
    <>
    {/* this is the navbar for full screen */}
    <div className="navigationbar-container">
        <ul className="navlinks">
          <NavLink className="nav" exact to="/home"> 
            <li className='nav-link'>Home</li>
          </NavLink>
          <NavLink className="nav" exact to="/record"> 
            <li className='nav-link'>Record a message</li>
          </NavLink>
          <NavLink className="nav" exact to="/information"> 
            <li className='nav-link'>Information</li>
          </NavLink>
          <NavLink className="nav" exact to="/"> 
            <li className='logout-link'>Log out</li>
          </NavLink>
        </ul>
      </div>
    
     
      {/* this is where the hamburger menu starts */}
    <nav role="navigation">
      <div id="menuToggle">
      {/* 
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
        */}
      <input type="checkbox" />
      
      {/* 
      Some spans to act as a hamburger.
      They are acting like a real hamburger,
      not that McDonalds stuff.
        */}
      <span></span>
      <span></span>
      <span></span>
      
      {/*    
      Too bad the menu has to be inside of the button
      but hey, it's pure CSS magic. */} 
        <ul id="menu">
          <div className="mobil-menu">
            <NavLink exact to="/home"> 
              <li className='mobil-link'>Home</li>
              <hr style={{width:'70%'}}/>
            </NavLink>
            <NavLink exact to="/record"> 
              <li className='mobil-link'>Record a message</li>
              <hr style={{width:'70%'}}/>
            </NavLink>
            <NavLink exact to="/information"> 
              <li className='mobil-link'>Information</li>
              <hr style={{width:'70%'}}/>
            </NavLink>
            <NavLink exact to="/"> 
              <li className='mobil-logout-link'>Log out</li>
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
    </>
  );
}
export default Navigationbar;
