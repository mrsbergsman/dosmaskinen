import React from 'react';
import './_home.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Alarm from '../alarm/Alarm';

function Home () {
  return (
    <>
    <Header/>
    <div className="home-container">
      <h1>Home</h1>
        <p>You are now logged in</p>
      </div>
      <Alarm/>
    <Footer/>
    </>
  );
}

export default Home;