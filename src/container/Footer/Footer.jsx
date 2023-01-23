import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Lane 12, Forthwith Street, California</p>
        <p className='p__opensans'>+234 906-358-5525</p>
        <p className='p__opensans'>+234 906-358-5525</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.garetto} alt="footer logo" />
        <p className='p__opensans'>"The first step into having a pleasurable day is to feed well"</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: '15px'}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday:</p>
        <p className='p__opensans'>10:00 am - 02:00 pm</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>10:00 am - 03:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Garetto. All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
