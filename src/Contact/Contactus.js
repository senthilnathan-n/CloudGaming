import React from 'react'

import '../Contact/Contact.css'
import Nav from '../Component/Nav'
import Footer from '../Footer/Footer'
const Contactus = () => {
  return (
    <>
   
    <body>

<div class="contact-section">
    <Nav/>

  <h1>Contact Us</h1>
  <div class="border"></div>
  <form class="contact-form" >
    <input type="text" class="contact-form-text" placeholder="Your name"></input>
    <input type="email" class="contact-form-text" placeholder="Your email"></input>
    <input type="text" class="contact-form-text" placeholder="Your phone"></input>
    <textarea class="contact-form-text" placeholder="Your message"></textarea>
   
        <a style={{marginLeft:"250px", color:"red"}} href='mailto:mindsvita@gmail.com'><b>SEND MAIL</b></a>
        

  </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


</div>
    </body>



<Footer/>
    </>
  )
}

export default Contactus
