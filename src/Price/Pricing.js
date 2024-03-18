
import React from 'react'
import "../Price/Pricing.css"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

import im from '../Images/bg.jpg'
import Footer from '../Footer/Footer'
import Nav from '../Component/Nav'
const Pricing = () => {
 const navigate = useNavigate();
  // const bold = 
  // {
  //   fontWeight:'bold',
  //   fontSize:30
  // }
  const Click = () =>
   {
      navigate("/pay")
  }
  // const Click1 = () =>
  // {
  //   if(l1 === "login")
  //   {
    
  //   }
  //   else
  //   {
      
  //   }
  // }
  const [l1, setL1] = useState(localStorage.getItem("logg") || "logout");
  useEffect(() => {
    setL1(localStorage.getItem("logg") || "logout");
  }, []); 
  return (
    
    <body style={{backgroundImage:`url(${im})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
    
    
    
    }}>
      <Nav/>

  
    <div className='hh'>
      <div style={{backgroundColor:'rgb(192,192,192,0.3)' ,color:'white',padding:'50px',fontSize:20}}>
<h2>Why Subscribe?</h2>
<br/>
<h4>Unlimited Access:</h4>
<p>Enjoy unlimited access to our library of games, including new releases and classic favorites, all available at your fingertips.
</p>
<br/>
<br/>
<h4>Seamless Streaming:</h4>
<p>Stream games instantly to your device without the need for downloads or installations. Experience smooth and responsive gameplay, powered by cutting-edge streaming technology.
</p>
<br/>
</div>
    <div class='plan'>
    <div class='price'>
      <span>
      <br></br>
      
      <h1>ESSENTIAL</h1>
      
      <p><span style={{color:'red',fontSize:40}}>₹299</span> per month</p>
      <dl>
        <br></br>
        <dt>FEATURES</dt>
        <dd>
          <ul>
            <li>Access to 50 games</li>
            <li>Standard streaming quality</li>
            <li>Access to community forums</li>
          </ul>
          
        </dd>
      </dl>
      <br></br>
      <div class='move'>
      <button onClick={Click} class='button1'>BUY NOW</button>
      </div>
      </span>
    </div>

    <div class='price'>
      <span>
      <h1 >EXTRA</h1>
      <p><span style={{color:'red',fontSize:40}}> ₹499 </span>per month</p>
      <dl>
        <dt className='bold'>FEATURES</dt>
        <dd>
          <ul>
            <li>Access to 100 games</li>
            <li>High-definition streaming quality</li>
            <li>Exclusive discounts on game purchases</li>
            <li>Access to community forums and events</li>
          </ul>
          
        </dd>
      </dl>
      <br></br>
      <div class='move'>
      <button onClick={Click}  class='button1'>BUY NOW</button>
      </div>
      </span>
    </div>

    <div class='price'>
      <h1 >DELUXE</h1>
      <p><span style={{color:'red',fontSize:40}}> ₹799 </span>per month</p>
      <dl>
        <dt>FEATURES</dt>
        <dd>
          <ul>
            <li>Access to 200+ games</li>
            <li>Ultra-high-definition streaming quality</li>
            <li>Exclusive early access to new game releases</li>
            <li>Priority customer support</li>
            <li>Access to community forums, events, and tournaments</li>
          </ul>
          
        </dd>
      </dl>
      <div class='move'>
      <button onClick={Click}  class='button1'>BUY NOW</button>
      </div>
    </div>
    </div>
   </div>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <Footer/>
    
    
    </body>
  )
}


export default Pricing