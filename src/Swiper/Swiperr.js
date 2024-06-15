import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Swiper/Swiperr.css';
import im3 from '../Images/im12.jpg'
import im4 from '../Images/im5.png'
import im5 from '../Images/im3.jpg'
import im6 from '../Images/im4.jpg'
import im7 from '../Images/im2.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Swiperr = () => {
  return (
    <>
   
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide style={{height:"400px",width:"1600",backgroundImage:`url(${im3})`, backgroundSize:"cover",
    backgroundPosition:"center"}}>
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
      
      
      
      </SwiperSlide>
      <SwiperSlide style={{height:"400px",backgroundImage:`url(${im4})`, backgroundSize:"cover",
    backgroundPosition:"center"}}>
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
       
      
      
      
      </SwiperSlide>
      <SwiperSlide style={{backgroundImage:`url(${im5})`, backgroundSize:"cover",
    backgroundPosition:"center",height:"400px"}}>
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
      
      
      
      </SwiperSlide>
      <SwiperSlide style={{height:"400px",backgroundImage:`url(${im6})`, backgroundSize:"cover",
    backgroundPosition:"center"}}>
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
      
      
      
      </SwiperSlide>
     
   
      <SwiperSlide style={{height:"400px",backgroundImage:`url(${im7})`, backgroundSize:"cover",
    backgroundPosition:"center"}}>
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
      
      
      
      </SwiperSlide>
     
   
      
    </Swiper>
  </>
  )
}

export default Swiperr