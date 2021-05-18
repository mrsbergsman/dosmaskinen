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
          <NavLink className="nav" exact to="/profile"> 
            <li className='nav-link'>Profile</li>
          </NavLink>
          <NavLink className="nav" exact to="/information">
            <li className='nav-link'>Information</li>
          </NavLink>
        </ul>
      </div>
  
     {/* this is where the hamburger menu starts */}
    <nav role="navigation">
      <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
        <ul id="menu">
          <div className="mobil-menu">
            <NavLink exact to="/home">
              <li className='mobil-link'>Home</li>
              <hr style={{width:'70%'}}/>
            </NavLink>
            <NavLink exact to="/profile"> 
              <li className='mobil-link'>Profile</li>
              <hr style={{width:'70%'}}/>
            </NavLink>
            <NavLink exact to="/information">
              <li className='mobil-link'>Information</li>
              <hr style={{width:'70%'}}/>
            </NavLink>
          </div>
        </ul>
     </div>
   </nav>
   </>
 );
}
export default Navigationbar;
