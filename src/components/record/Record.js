import React from 'react';
import './_record.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Navigationbar from '../navbar/Navigationbar';

function Record () {
  return (
    <>
      <Header/>
      <Navigationbar/>
        <div className="record-container">
          Detta är Recordkomponenten
        </div>
        <Footer/> 
    </>
  );
}

export default Record;