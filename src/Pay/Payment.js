import React from 'react';
import '../Pay/Payment.css'; 
import im from '../Images/bg.jpg';
import Nav from '../Component/Nav';
import { useNavigate } from 'react-router';

const Payment = () => {
  const nav = useNavigate();

  const handleAlert = (e) => {
    e.preventDefault();
    nav("/last");
  };

  return (
    <body style={{
      backgroundImage: `url(${im})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      <Nav />
      <div className="container-ii">
        <h1>Make a Payment</h1>
        <br />
        <br />
        <br />
        <form onSubmit={handleAlert}>
          <input className='input' type="text" id="cardNumber" name="cardNumber" placeholder="Card holder name" required />
          <input className='input' type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" required />
          <input className='input' type="text" id="expiryDate" name="expiryDate" placeholder="MM/YYYY" required />
          <input className='input' type="text" id="cvv" name="cvv" placeholder="CVV" required />
          <center>
            <p>(or)</p>
            <br />
          </center>
          <input type="text" className='input' id="cardNumber" name="cardNumber" placeholder="Enter UPI Id" /><br />
          <button type="submit">Pay Now</button><br />
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </body>
  );
}

export default Payment;
