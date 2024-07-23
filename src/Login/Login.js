import React from 'react'
import { useState } from 'react';
import "../Login/Login.css"
import im from '../Images/bg2.png'

import logo from "../Images/logo2.png";
import axios from 'axios'
import { useNavigate } from 'react-router';

import { database } from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';







const Login = () => {

  const nav=useNavigate();
  const handlesign=(e)=>
  {
    e.preventDefault();
    signInWithEmailAndPassword(database,username,password)
    .then((data=>
      {
        console.log("fskgh",data)
        nav("/kard")
      }))

     .catch((error)=>{
       alert("Invalid login credentials")
       })
    
    

  }





    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [logg,setLogg]=useState("logout")
  const fetchUserData = () => { 
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const userData = response.data;
        console.log("=====>>>>>>",response)
        const user = userData.find(user => user.username === username );
        if (user) {
          console.log("User found:", user);
          setError('');
          setLogg("login");
          localStorage.setItem('logg', 'login');
          localStorage.setItem('username', username);
          
          
        } else {
          console.log("User not found");
          setError('Invalid username or password');
          alert(error || "Invalid credentials");
          
        }
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        setError('Failed to fetch user data');
      });
  };
  const handleLogin = (e) => {
    console.log('Username:', username);
    console.log('Password:', password);
    e.preventDefault();
    fetchUserData();
    
  }

  return (
    <body style={{backgroundImage:`url(${im})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
    }}>

    <div className="login-container">
    <div className="login-box">
        <img src={logo} height={150} width={200}></img>
      
      <form onSubmit={handlesign}>
        <div className="form-group">
          
          <input
          className='input'
            type="text"
            id="username"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          
          <input
          className='input'
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <br></br>
        <button className='button' type="submit" >Login</button>
      </form>
      {/* <div className="social-logins">
          <img src={google} alt="Google" className="social-logo" />
          <img src={facebook} alt="Facebook" className="social-logo" />
          <img src={twitter} alt="Twitter" className="social-logo" />
        </div> */}
        <br></br>
        <br/>
        <a href='' style={{textDecoration:'none',color:'white'}}>Forgot Password</a>
        <a href='/sign' className='link'>New User?</a>
    </div>
  </div>
        </body>
  )
}

export default Login