import React from 'react'
import Navbar from './Navbar';
import { Navigate } from "react-router-dom";

function AfterLogin() {
    let uname = sessionStorage.getItem('username')
    if (uname == null) {
        return (<Navigate to="/login" />)
    }
    else {
        return (
            <div align="center">
                <Navbar />

                <h3 style={{ color: 'blue' }}> Welcome {uname}  </h3>
                <h1> </h1>
            </div>
        );
    }
}


export default AfterLogin;