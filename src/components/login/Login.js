import React from 'react';
import {NavLink} from 'react-router-dom'
import './_login.scss'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <NavLink  to="/home"> Loggain</NavLink>
    </div>
  );
}

export default Login;

