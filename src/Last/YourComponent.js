import React, { useState, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import Kard from '../Kard/Kard';

const  YourComponent = () => 
{
  const [ch,setCh]=useState(true);
  const nav =useNavigate()
  const click=()=>{
    localStorage.setItem('huu',ch);
    
    nav("/kard")
  }
  return (
    <div>
     <iframe style={{marginLeft:"0px",height:"600px",width:"1500px"}}src="https://lottie.host/embed/121faf6b-c157-44cc-9324-f86801d94d7c/oCkAOOxIWd.json"></iframe>
    <button onClick={click} style={{marginLeft:"700px"}}>Back To Home</button>
    <br/>
    <br/>
    </div>
    
  );
};

export default YourComponent;
