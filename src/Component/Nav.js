import React, { useState } from 'react'
import im from '../Images/logo4.png'
import Alert from '@mui/material/Alert';

import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import '../Component/Nav.css'
import { useNavigate } from 'react-router';



const Nav = () => {

  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
const handleClickOpen = () => {
    setOpen(true);
  };

 const handleClose = () => {
   setOpen(false);
 };
 
  
 const handlehome=()=>
 {
   navigate("/kard")
  }
  const handlecon=()=>
  {
    navigate("/con")
   }
   
 const handlelogin=()=>
  {
     
   navigate("/")
 }
     //   const handlehome=()=>
     //   {
       
       //     navigate("/home")
       //   }
       //   const handlerecipe=()=>
       //   {
         
         //     navigate("/foodpage")
         //   }
        
         
  

  

  return (
    <>
    

    <nav>
        <div class='log'>
    <img src={im} ></img> 
      </div>
    <ul>
      <li>
        <a onClick={handlehome}><b>HOME</b></a>
        <br></br>
      </li>

      <li>
     
      <div className="select-dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="selected-option"><b>

        CATEGORIES
      </b>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <div className="option">ACTION</div>
          <div className="option" >RPG</div>
          <div className="option" >PLAY STATION</div>
        </div>
      )}
    </div>

      </li>
      
    
        <li>
          <a onClick={handlecon}><b>CONTACT US</b></a>
        </li>
      

        
        <li>


       
        <b onClick={handleClickOpen} style={{color:'blue'}}>
       <b>
         LOG OUT
        </b>
      </b>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you  want to exit from this Account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           If you're Logged Out from this Account you Need to 
           Login again 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >Disagree</Button>
          <Button onClick={handlelogin} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    
        </li>
    </ul>



        
    </nav>
   

    </>
  )
}

export default Nav