import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Login from '../components/login/login';

const LoginPage = () => (
  <div className="login-container">
    <Header/>
    <Login />
    <Footer/>
  </div>
);

export default LoginPage;