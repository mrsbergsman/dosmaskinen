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
      <footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
    <div className="icons">
            <a href="https://twitter.com/"><img className="twitterTransp" src={twitterTransp} alt="twitterTransp-icon" /></a>
            <a href="https://www.instagram.com/"><img className="instaTransp" src={instaTransp} alt="instaTransp-icon" /></a>
            <a href="https://www.facebook.com/"><img className="faceTransp" src={faceTransp} alt="faceTransp-icon" /></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <p className="about"><span> Street name and number</span> City, Country</p>
    </div>
    <div>
      <br/> <img className="phoneTransp" src={phoneTransp} alt="phoneTransp-icon"/> 
      <p> (+00) 0123456789</p>
    </div>
    <div>
    <br/> <img className="envelopeTransp" src={envelopeTransp} alt="envelopeTransp-icon"/> 
      <p><a href="#"> info@medicminder.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2> MedicMinder<span> logo</span></h2>
    <p className="menu">
      <a href="#"> Services</a>   |
      <a href="#"> Information</a>   |
      <a href="#"> News</a>    |
      <a href="#"> Contact</a>
          </p>
        </div>
      </footer>
      <CompanyTrades/>
    </>
  );
}

export default Footer;