import React from 'react';
import './_home.scss'
import Footer from '../footer/Footer';
import Alarm from '../alarm/Alarm';
import Navigationbar from '../navbar/Navigationbar';
import Header from '../header/Header'
 
 
 
function Home () {
 return (
   <>
     <Header/>
     <Navigationbar/>
       <div className="home-container">
         <Alarm/>
       </div>
       <Footer/> 
   </>
 );
}
 
export default Home;
