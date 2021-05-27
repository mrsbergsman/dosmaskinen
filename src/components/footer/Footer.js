import React from 'react';
import CompanyTrades from './Company';
import envelopeTransp from '../../images/envelopeTransp.png';
import phoneTransp from '../../images/phoneTransp.png';
import twitterTransp from '../../images/twitterTransp.png';
import instaTransp from '../../images/instaTransp.png';
import faceTransp from '../../images/faceTransp.png';
import './_footer.scss';


const Footer = () => {
  return (
    <>
    <div className="footer-wrapper">
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="about-header">About</p>
          <p className="about-text">
            Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
            ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
          </p>
          <div className="footer-icons">
            <a href="https://twitter.com/"><img className="twitterTransp" src={twitterTransp} alt="twitterTransp-icon" /></a>
            <a href="https://www.instagram.com/"><img className="instaTransp" src={instaTransp} alt="instaTransp-icon" /></a>
            <a href="https://www.facebook.com/"><img className="faceTransp" src={faceTransp} alt="faceTransp-icon" /></a>
          </div>
        </div>
      
        <div className="footer-right">
          <h2 className="footer-header"> MedicMinder</h2>
          <p className="menu">
            <a href="#"> Services</a>   |
            <a href="#"> Information</a>   |
            <a href="#"> News</a>    
            {/* <a href="#"> Contact</a> */}
          </p> 
          <div>
            <p className="about"> StreetName 1, 123 00 City, Country</p>
          </div>
          <div>
            <p className="phone-envelope"> 
              <img className="phoneTransp" src={phoneTransp} alt="phoneTransp-icon"/> 
              (+00) 0123 -456789
            </p>
          </div>
          <div>
            <p className="phone-envelope">
              <img className="envelopeTransp" src={envelopeTransp} alt="envelopeTransp-icon"/> 
              <a className="mailLink" href="#"> info@medicminder.com</a>
              </p>
          </div>
        </div>
        </div>
      </footer>
      <CompanyTrades/>
      </div>
    </>
  );
}

export default Footer;