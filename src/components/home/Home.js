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
          <Alarm/>
        </div>
        {/* <Footer/> */}
    </>
  );
}

export default Home;