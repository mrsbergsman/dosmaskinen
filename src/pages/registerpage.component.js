import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Register from '../components/register/register';
import StartHeader from './StartHeader'

const RegisterPage = () => (
  <>
    <StartHeader/>
    <div className="register-container">
      <Header/>
      <Register />
    </div>
    <Footer/>
  </>
);

export default RegisterPage;