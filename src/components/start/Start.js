import React from 'react';
import {NavLink} from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';

import './_start.scss'

function Start() {
  return (
    <>
    <Header/>
    <div className="start-container">
      <h1>Start</h1>
      <p>First page. Little info about the machine</p>
      <NavLink  to="/login"> log in or sign up </NavLink>
    </div>
    <Footer/>
    </>
  );
}

export default Start;

