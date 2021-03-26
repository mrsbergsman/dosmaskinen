import React from 'react';
//import {NavLink} from 'react-router-dom'
import './_header.scss'


function Header(){
  return(
  <div className="header-container">
    <div className="logo-box">
      <p className="logo">MedicMinder</p>
      {/* <p className="logo-underText">the medication reminder</p> */}
    </div>
    {/* <div className="navigation">
      <NavLink className="header-nav" exact to="/login"> 
        <li className='header-link'>Log in</li>
      </NavLink>
      <NavLink className="header-nav" exact to="/login"> 
        <li className='header-link'>Create an account</li>
      </NavLink>
    </div> */}
  </div>
  )
}
export default Header