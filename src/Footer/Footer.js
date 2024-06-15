import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faTelegramPlane, faTelegram } from '@fortawesome/free-brands-svg-icons';

import '../Footer/Footer.css';
import { Stack } from '@mui/material';
const Footer = () => {
  return (
    <>
    <footer className="footer">
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/" style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faFacebook} style={{height:"50px"}}/></a>
            <a href="https://www.instagram.com/" style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faInstagram} style={{height:"50px",marginLeft:"50px"}} /></a>
                <a href="https://www.linkedin.com/in/senthilnathan-n-24669b258/" style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faLinkedin} style={{height:"50px",marginLeft:"50px"}}/></a>
              <a href="https://telegram.org/" style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faTelegram} style={{height:"50px",marginLeft:"50px"}} /></a>
            </li>
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
      <div className="container">
        <div className="row">
<Stack direction={'row'}>

          <div className="col-md-1">
            <h3 style={{color:"brown"}}>About Us</h3>
            <p style={{color:"white",lineHeight:"30px"}}>Welcome to Cloudarena, your ultimate destination for <br/>all things gaming! At Cloudarena, we're passionate<br/> about gaming and dedicated to providing an immersive,<br/> exhilarating experience for gamers of all levels and interests.</p>
          </div>
          <br/>

          <div className="col-md-4">
            <h3 style={{color:"brown"}}>Contact Us</h3>
            <ul className="contact-info">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> 07,VLB Street, Coimbatore, India</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> panda@gmail.com</li>
              <li><FontAwesomeIcon icon={faPhone} /> +6380882908</li>
            </ul>
          </div>
          <br/>
          <div className="col-md-2">
            <h3 style={{color:"brown"}}>Quick Links</h3>
            <ul className="quick-links">
              <li><a href="/home">Home</a></li>
              
              
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          </Stack>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
