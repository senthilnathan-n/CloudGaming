import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import  { useState,useEffect } from 'react'
import im from '../Images/logo4.png'
import im1 from '../Images/logo.png'
import Alert from '@mui/material/Alert';

import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import '../Component/Nav.css'

import  { useRef } from 'react';
import '../Kard/Kard.css';

import w2 from '../Images/gta.jpg';
import w1 from '../Images/far2.jpg';
import w3 from '../Images/god.jpeg';
import w4 from '../Images/nfs.jpeg';
import w5 from '../Images/miles.jpeg'

import w6 from '../Images/c3.jpeg'
import w7 from '../Images/c4.jpeg'
import w8 from '../Images/c2.jpeg'
import w9 from '../Images/c1.jpeg'
import w10 from '../Images/c5.jpeg'

import x1 from '../Images/d1.jpeg'
import x2 from '../Images/d2.jpeg'
import x3 from '../Images/d3.jpeg'
import x4 from '../Images/d4.jpeg'
import x5 from '../Images/d5.jpeg'






import bg from '../Images/bg.jpg';
import Nav from '../Component/Nav';
import Swiper from '../Swiper/Swiperr';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router';

export default function Kard() {

  const nav=useNavigate()
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    // Scroll to the target div
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick2 = () => {
    // Scroll to the target div
    targetRef2.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick3 = () => {
    // Scroll to the target div
    targetRef3.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick4 = () => {
    // Scroll to the target div
    targetRef4.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handle=()=>{
    nav("/price")
  }

  const handlelogin=()=>
  {
    nav('/')
  }

  const [fu,setFu]=useState();
 useEffect(() => {
  setFu(localStorage.getItem("logg"))
  console.log("--------->>>>>>>",fu)
  
 },[]);



  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const featuredWeddings = [
    { id: 1,img:w2,h:"https://drive.google.com/file/d/1AX7SxA57MVkvpFS_SrMW4_408q7vvNbU/view?usp=drivesdk"},
    { id: 2,img:w1,h:"https://drive.google.com/file/d/1MM6SRiSaRIRbESJPxTm3xZZAdnTDXyFV/view?usp=drivesdk"},
    { id: 3,img:w3,h:"https://drive.google.com/file/d/1C9nCjJW_g8HOZm5MqyNEZEhkBErx_wx1/view?usp=drivesdk" },
    { id: 4,img:w4 ,h:"https://drive.google.com/file/d/1OmpJwmDwd-mJuEYz4RxQqcnOTpCGXh-z/view?usp=drivesdk"},
    {id: 5 ,img:w5,h:"https://drive.google.com/file/d/1-DhDG6EXGCyTJqxtERocZCOeFCqEgFvD/view?usp=drive_link"}
  ];

  const dd=[
    {id: 1,img:w6, h:'https://drive.google.com/file/d/1u94XrozGL5vCWRGq5mdybL0IrBLZHJVM/view?usp=drivesdk'},
    {id:  2,img:w7,h:"https://drive.google.com/file/d/1XK7gA2X2WsMKZIfTTBlbpyoFmvS0DBus/view"},
    {id:  3,img:w8,h:"https://drive.google.com/file/d/1Qz7pKAgdxw5rKKLQ5mQIomNBiH7Y1JF9/view?usp=drivesdk"},
    {id:  4,img:w9,h:"https://drive.google.com/file/d/1XK7gA2X2WsMKZIfTTBlbpyoFmvS0DBus/view"},
    {id:  5,img:w10,h:"https://drive.google.com/file/d/1ictsm4CJwL7KE4T32wXMp08-KIjiETY4/view?usp=drivesdk"}

  ];

  const dd2=[
    {id: 1,img:x1,h:"https://drive.google.com/file/d/1Ku7r-2J1PGle0lFueuU5EipiQF7xBvc5/view?usp=drivesdk"},
    {id:  2,img:x2,h:"https://drive.google.com/file/d/16V5bJf9j_gjsQsaPGxKA4OQHS42IiBf_/view?usp=drivesdk"},
    {id:  3,img:x3,h:"https://drive.google.com/file/d/1mq-oettB9CigtRe4szwkPeGCkKVkVpHf/view?usp=drivesdk"},
    {id:  4,img:x4,h:"https://drive.google.com/file/d/11TKjJdUO7SIBSAis22-rf76IMG9F3Kbz/view?usp=drivesdk"},
    {id:  5,img:x5,h:"https://drive.google.com/file/d/1zoUHnsU62jYgJ18GkWkiDGkrYc5C-J91/view?usp=drivesdk"}

  ];
  const dd3=[
    {id: 1,img:x5,h:"https://drive.google.com/file/d/1Ku7r-2J1PGle0lFueuU5EipiQF7xBvc5/view?usp=drivesdk"},
    {id:  2,img:x4,h:"https://drive.google.com/file/d/16V5bJf9j_gjsQsaPGxKA4OQHS42IiBf_/view?usp=drivesdk"},
    {id:  3,img:x2,h:"https://drive.google.com/file/d/1mq-oettB9CigtRe4szwkPeGCkKVkVpHf/view?usp=drivesdk"},
    {id:  4,img:x3,h:"https://drive.google.com/file/d/11TKjJdUO7SIBSAis22-rf76IMG9F3Kbz/view?usp=drivesdk"},
    {id:  5,img:x1,h:"https://drive.google.com/file/d/1zoUHnsU62jYgJ18GkWkiDGkrYc5C-J91/view?usp=drivesdk"}

  ];
  const dd4=[
    {id: 1,img:w3,h:"https://drive.google.com/file/d/1Ku7r-2J1PGle0lFueuU5EipiQF7xBvc5/view?usp=drivesdk"},
    {id:  2,img:x2,h:"https://drive.google.com/file/d/16V5bJf9j_gjsQsaPGxKA4OQHS42IiBf_/view?usp=drivesdk"},
    {id:  3,img:w6,h:"https://drive.google.com/file/d/1mq-oettB9CigtRe4szwkPeGCkKVkVpHf/view?usp=drivesdk"},
    {id:  4,img:x4,h:"https://drive.google.com/file/d/11TKjJdUO7SIBSAis22-rf76IMG9F3Kbz/view?usp=drivesdk"},
    {id:  5,img:x5,h:"https://drive.google.com/file/d/1zoUHnsU62jYgJ18GkWkiDGkrYc5C-J91/view?usp=drivesdk"}

  ];
  const dd5=[
    {id: 1,img:x4,h:"https://drive.google.com/file/d/1Ku7r-2J1PGle0lFueuU5EipiQF7xBvc5/view?usp=drivesdk"},
    {id:  2,img:w3,h:"https://drive.google.com/file/d/16V5bJf9j_gjsQsaPGxKA4OQHS42IiBf_/view?usp=drivesdk"},
    {id:  3,img:w5,h:"https://drive.google.com/file/d/1mq-oettB9CigtRe4szwkPeGCkKVkVpHf/view?usp=drivesdk"},
    {id:  4,img:x1,h:"https://drive.google.com/file/d/11TKjJdUO7SIBSAis22-rf76IMG9F3Kbz/view?usp=drivesdk"},
    {id:  5,img:w9,h:"https://drive.google.com/file/d/1zoUHnsU62jYgJ18GkWkiDGkrYc5C-J91/view?usp=drivesdk"}

  ];
  return (
    <>
    <body className='bg'>


      
    <nav>
        <div class='log'>
    <img src={im} ></img> 
    
      </div>
    <ul>
      <li>
        <a ><b>HOME</b></a>
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
          <div className="option" onClick={handleClick2}>ACTION</div>
          <div className="option" onClick={handleClick3}>RPG</div>
          <div className="option" onClick={handleClick4}>PLAY STATION</div>
        </div>
      )}
    </div>

      </li>
      
    
        <li>
          <a onClick={handle} ><b>SUBSCRIPTION</b></a>
        </li>
        <li>

        <a onClick={handleClick}><b>ABOUT US</b></a>
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
          <Button onClick={handleClose} >CANCEL</Button>
          <Button onClick={handlelogin} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    
        </li>
    </ul>

    </nav>
      






     <br/>
     <Swiper/>
 
    <h1 className='h'>Most Popular </h1>
        <br/>
      <div class='box1'>
    {featuredWeddings.map(wedding => (
      <div className='lol'>

        <div className='hov'>
        <a href={wedding.h}>
      <Card sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

        <CardMedia 
          component="img"
          
          height="350"
          key={wedding.id}
          
          image={wedding.img}
          
          
          />
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div>
      
      ))}
    
</div>
    <br/>
    <br/>
    {/* stck2 */}

    <div style={{backgroundColor:"rgb(192,192,192,0.1"}}>
      <br/>
    <h1 className='h'>Recently Added </h1>
<marquee scrollAmount="15px">
      <div class='box1'>

    {dd.map(wedding => (
      
      <div className='lol'>


        <div className='hov'>
<a href={wedding.h}>

      <Card className='cc' sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

      <a href={wedding.h} key={wedding.id}></a>
        
        <CardMedia 
          component="img"
          
          height="350"
          
          image={wedding.img}
          
          
          />
          
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div>
         
         
         ))}
    
</div>
         </marquee>
         <br/>
         <br/>
    
{/* stck3 */}
<br/>
    <br/>
      <div class='box1'>
      
    {dd2.map(wedding => (
<>

      <div className='lol'>

        <div className='hov'>
      <Card key={wedding.id} sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>
      


        <a href={wedding.h} key={`h-${wedding.id}`}>
        <CardMedia 
          component="img"
          
          height="350"
          
          image={wedding.img}  
          
          />
          
          </a>
       
      </CardActionArea>
    </Card>
          </div>
          </div>
      
      </>
      ))}
      </div>
    <h1 className='h'>Trailers </h1>
    <br/>
    {/* stck 4 */}
    <div ref={targetRef2} style={{display:"flex", marginLeft:"50px"}}>

    <iframe width="420" height="300" style={{marginLeft:"40px"}} src="https://www.youtube.com/embed/QdBZY2fkU-0?si=TfQ7Dmlv78eXK3qt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe width="420" height="300" style={{marginLeft:"40px"}} src="https://www.youtube.com/embed/Zcj9AzHv_l8?si=1KJglSGJyPQBSuac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe width="420" height="300"style={{marginLeft:"40px"}} src="https://www.youtube.com/embed/EzWBNwhb870?si=zeikfZZ-Om_fCzJZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    
    
    <br/>
    <br/>
    <br/>
    <h1 className='h'>Action </h1>
    <div class='box1'>
    {dd3.map(wedding => (
      <div className='lol'>

        <div className='hov'>
        <a href={wedding.h}>
      <Card sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

        <CardMedia 
          component="img"
          
          height="350"
          key={wedding.id}
          
          image={wedding.img}
          
          
          />
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div>
      
      ))}
    
</div>
<br/>

<h1 className='h'>RPG </h1>
<div ref={targetRef3} class='box1'>
    {dd4.map(wedding => (
      <div className='lol'>

        <div className='hov'>
        <a href={wedding.h}>
      <Card sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

        <CardMedia 
          component="img"
          
          height="350"
          key={wedding.id}
          
          image={wedding.img}
          
          
          />
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div>
      
      ))}
    
</div>

<h1 className='h'>PLAYSTATION </h1>
<div ref={targetRef4} class='box1'>
    {dd5.map(wedding => (
      <div className='lol'>

        <div className='hov'>
        <a href={wedding.h}>
      <Card sx={{ maxWidth: 300}} style={{borderRadius:"25px"}}>
      <CardActionArea style={{marginLeft:"0px"}}>

        <CardMedia 
          component="img"
          
          height="350"
          key={wedding.id}
          
          image={wedding.img}
          
          
          />
       
      </CardActionArea>
    </Card>
          </a>
          </div>
          </div>
      
      ))}
    
</div>


<br/>
<br/>

    <div ref={targetRef}>

    <Footer/>
    </div>
    </div>
    </body>
    </>
    );
  }
  