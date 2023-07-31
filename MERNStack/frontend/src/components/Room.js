import React from 'react'
import image from './img/image.png';
import image2 from './img/image2.png';
import image3 from './img/image3.png';
import image4 from './img/image4.png';
//import image from './components/image.png';
//import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar';

function Room() {
    return (
      <div align="center">
        <h1>Luxurious Rooms</h1>
        <Navbar />
        <div align="left" className='im1'>
        <h2>City View</h2>
        <img src={image} alt=""width="900" height="400"/>
        </div>
        <div align="right" className='im2'>
        <h2>Ocean View 1-bedroom</h2>
        <img src={image3} alt=""width="900" height="400"/>
        </div>
        <div align="left" className='im3'>
        <h2>Ocean Front 2-bedroom</h2>
        <img src={image2} alt=""width="900" height="400"/>
        </div>
        <div align="right" className='im4'>
        <h2>Ocean Front 3-bedroom</h2>
        <img src={image4} alt=""width="900" height="400"/>
        </div>
        
        
      </div>
    );
  }
  
  export default Room;