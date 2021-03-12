import React from 'react';
import './_home.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import AlarmForm from '../alarm/AlarmForm';



function Home () {
  return (
    <>
    <Header/>
    <div className="home-container">
       {/* <Alarm/> */}
        <AlarmForm/>
      </div>
    
    {/* <Footer/> */}
    </>
  );
}

export default Home;