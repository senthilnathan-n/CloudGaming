import React, { useState } from 'react';
import logo from "../Images/logo2.png";
import im from "../Images/bg2.png";
import "./Sign.css";
import { CSVLink } from 'react-csv';
import { useNavigate } from 'react-router';
import firebase from '../Firebase/Firebase';

import { database } from '../Firebase/Firebase';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import 'firebase/auth';
import 'firebase/firestore'; // Import Firestore module

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nav=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(database,formData.email,formData.password)
    .then((data=>
      {
        console.log(data,"adfdgaf")
        nav("/")
      }
      
      
      ))
      
      .catch((error)=>{
        alert(error.code)
      })
      
    try {
      // Create user with email and password
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password);

      // Add additional user information to Firestore
      await firebase.firestore().collection('users').doc(userCredential.user.uid).set({
        username: formData.username,
        email: formData.email,
        // Add more fields as needed
      });

      // Reset form data
      setFormData({
        username: '',
        email: '',
        password: ''
      });

      // Navigate to home page or any other page after successful sign-up
      nav('/');
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Handle error here
    }
  };

  return (
    <body style={{backgroundImage:`url(${im})`,
    
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
    
    
    }}>

    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <div><img src={logo} height={150} width={200}></img></div>
        <div className="form-group">
          <input className="input" placeholder="UserName" type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input className="input" placeholder="Email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input  className="input" placeholder="PassWord" type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <center>
          <button className='button' type="submit">Sign Up</button>
        
          </center>
        </div>
      </form>
      
    </div>
    </body>
  );
}

export default SignUpForm;
