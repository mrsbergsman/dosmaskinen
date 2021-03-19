import React from 'react';
import './_home.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Alarm from '../alarm/Alarm';
import MedicineList from '../alarm/MedicineList';

function Home () {
  return (
    <>
      <Header/>
        <div className="home-container">
          <Alarm/>
          <MedicineList/>
        </div>
        {/* <Footer/> */}
    </>
  );
}

export default Home;