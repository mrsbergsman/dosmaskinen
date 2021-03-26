import React from 'react';
import {NavLink} from 'react-router-dom'
import './_navigationbar.scss'


function Navigationbar () {
  return (
    <>
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
        
    </>
  );
}

export default Navigationbar;
