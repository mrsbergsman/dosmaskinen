import React from 'react';
import {NavLink} from 'react-router-dom'
import './_login.scss'
import Header from '../header/Header';

function Login() {
  return (
    <>
    <Header/>
    <div>
      <h1>Login</h1>
      <NavLink  to="/home"> Loggain</NavLink>
    </div>
    </>
  );
}

export default Login;

