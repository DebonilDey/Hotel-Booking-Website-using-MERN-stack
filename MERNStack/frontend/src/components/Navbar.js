import React from 'react'
//import logo from './logo.svg';
//import './App.css';
import { Link } from 'react-router-dom';
function Navbar() {
  let utype = sessionStorage.getItem('usertype')
    if (utype === "HR") {
        return (
            <div align="center">
                <h3></h3>
                <nav className='navbar'>
                    <Link to="/">   HOME </Link> |
                    <Link to="/book">   BOOK </Link>|
                    <Link to="/booked"> ROOM BOOKED </Link>|
                    <Link to="/room">  ROOM </Link> |
                    <Link to="/cancelbook ">  CANCEL BOOK </Link> |
                    <Link to="/logout">  LOGOUT  </Link>|
                    <Link to="/aboutus">  ABOUT US </Link> |
                    <Link to="/contactus">  CONTACT US </Link> 
                </nav>
                <hr />
            </div>
        );
    }
    else {
  return (
    <div>
        
    <nav className='navbar'>
                    <Link to="/">   HOME </Link> |
                    <Link to="/book">   BOOK </Link>|
                    <Link to="/room">  ROOM </Link> |
                    <Link to="/login">  LOGIN </Link> |
                    <Link to="/aboutus">  ABOUT US </Link> |
                    <Link to="/contactus">  CONTACT US </Link> 
  
    </nav>
    </div>
  );
}
}
export default Navbar;
