import React from 'react';
import './_information.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Navigationbar from '../navbar/Navigationbar';
import onePill from '../../images/medIconTransp.png';
import clock from '../../images/clockIconTransp.png';
import voiceMail from '../../images/voiceMailTransp.png';

function Information () {
  return (
    <>
      <Header/>
      <Navigationbar/>
        <div className="information-container">
            <div className="informationHeader">
                <p className="info-header">Information</p>
                <p className="info-undertext">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore <br/> magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                </p>    
            </div>
            <div className="info-section1">

                <div className="info-medicine-box">
                    <div className="row">
                        <div className="col">
                            <div className="info-box1">
                                <img className="info-icons" src={onePill} alt="A pill icon"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="info-box2">
                                <p className="headlines">The medicine</p>
                                <p className="info-box-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                    veniam, quis nostrud exercitation ullamco laboris nisi"
                                </p>
                            </div>
                        </div>
                    </div>  
                </div>

                <div className="info-setTime-box">
                    <div className="row">
                        <div className="col">
                            <div className="info-box2">
                                <p className="headlines">Set the time</p>
                                <p className="info-box-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                    veniam, quis nostrud exercitation ullamco laboris nisi"
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="info-box1">
                                <img className="info-icons" src={clock} alt="A clock icon"/>
                            </div>
                        </div>
                    </div> 
                </div>

                <div className="info-message-box">
                    <div className="row">
                        <div className="col">
                            <div className="info-box1">
                                <img className="info-icons" src={voiceMail} alt="A message icon"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="info-box2">
                                <p className="headlines">Voice message</p>
                                <p className="info-box-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                    veniam, quis nostrud exercitation ullamco laboris nisi"
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>   
        </div>
        <Footer/> 
    </>
  );
}

export default Information;