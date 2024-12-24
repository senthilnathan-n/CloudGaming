

import React, { useState } from 'react';
import './Signup.css';
//import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Nav from '../Components/Nav';
import im from '../Images/Vita.png'
import LoginForm from '../Login/LoginForm';
import { useNavigate } from 'react-router-dom';
import im2 from '../Images/fff.jpg'

const Signup = () => {

    const[data,setData]=useState();
    const navigate=useNavigate()

const handlechange=(e)=>
{
    setData(e.target.value)
}
const handlesubmit=()=>
{
    navigate("/")
}

  return (
<>
<body style={{backgroundImage:`url(${im2})`,
backgroundSize:"cover",
}}>

      <div className='body'>
    
        

        
       
     
      <div className='wrapper'>
          <img src={im} style={{height:"100px", marginLeft:"40px"}}></img> 
       
    <form action="">
        
        <h1>Sign Up</h1>
        <div className="input-box">
            <input type="text"onChange={handlechange}    placeholder='Firstname' required  />
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input type="text" placeholder='Lastname' required  />
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input type="email" placeholder='email' required  />
            <MdEmail className='icon'/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='password' required  />
            <FaLock className='icon'/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='confirm password' required  />
            <FaLock className='icon'/>
        </div>

        <button onClick={handlesubmit} type="submit">Sign Up</button>
        <div className="register-link">
            <p>Already a member?   <a herf='/LoginForm' onClick={handlesubmit}>Login</a></p>
        </div>
    </form>
     </div>
  </div>
    
</body>
     </>
     );
;}

export default Signup;
