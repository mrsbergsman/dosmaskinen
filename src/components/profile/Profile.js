import React, { useState } from 'react';
import './_profile.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Navigationbar from '../navbar/Navigationbar';
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';
import ChangePhone from './ChangePhone';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { toast } from 'react-toastify';



function Profile () {
    const [showpassword, toggleShowpassword] = React.useState(false);
    const [showemail, toggleShowemail] = React.useState(false);
    const [showphone, toggleShowphone] = React.useState(false);

    return (
        <>
        <div className="profile-container">
            <Header/>
            <Navigationbar/>
            <div className="profile-top-box">
                <h1 className="profile-header">Your profile page</h1>
                <p className="profile-text">On this page you can change your email address, change your password and your phone number.</p>
            </div>

            <div className="changeBox">
                {/* <div className="vl"></div> */}
                    <button className="changeButton"
                        onClick={() => toggleShowemail(!showemail)}
                    >
                        Change email
                    </button>
                </div>
                {/* <div className="vl"></div> */}
                <div className="changeBox">
                    <button className="changeButton" 
                        onClick={() => toggleShowpassword(!showpassword)}
                    >
                        Change password
                    </button>
                </div>
                {/* <div className="vl"></div> */}
                <div className="changeBox">
                    <button className="changeButton"
                        onClick={() => toggleShowphone(!showphone)}
                    >
                        Change phone number
                    </button>
                    {/* <div className="vl"></div> */}
                </div>
                {showemail && <div className="change-box2">
                    <hr className="line"></hr><ChangeEmail/>
                </div>}
                {showpassword && <div className="change-box2">
                    <hr className="line"></hr><ChangePassword/>
                </div>}
                {showphone && <div className="change-box2">
                    <hr className="line"></hr><ChangePhone/>
            </div>}
            
        </div>
        <Footer/>   
        </>
    )
}

export default Profile;
