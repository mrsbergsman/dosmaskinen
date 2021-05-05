import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Register from '../components/register/register';

const RegisterPage = () => (
  <div className="register-container">
    <Header/>
    <Register />
    <Footer/>
  </div>
);

export default RegisterPage;