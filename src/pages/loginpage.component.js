import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Login from '../components/login/login';
import StartHeader from './StartHeader'

const LoginPage = () => (
  <div className="login-container">
    <StartHeader/>
    <Header/>
    <Login />
    <Footer/>
  </div>
);

export default LoginPage;