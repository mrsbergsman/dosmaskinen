import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Login from '../components/login/login';
import StartHeader from './StartHeader'


const LoginPage = () => (
  <>
    <StartHeader/>
    <div className="login-container">
      <Header/>
      <Login />
    </div>
    <Footer/>
  </>
);

export default LoginPage;