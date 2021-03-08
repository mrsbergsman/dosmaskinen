import React from 'react';
import {NavLink} from 'react-router-dom'

function Start() {
  return (
    <div>
      <h1>Start</h1>
      <p>First page. Little info about the machine</p>
      <NavLink  to="/login"> log in or sign up </NavLink>
    </div>
  );
}

export default Start;

