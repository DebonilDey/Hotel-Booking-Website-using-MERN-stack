import React from 'react'
import { Navigate } from "react-router-dom";

function Logout() {
    sessionStorage.removeItem('usertype')
    sessionStorage.removeItem('username')
    sessionStorage.clear()
    //localStorage.removeItem('Usertype')

    return (<Navigate to="/" />)
}

export default Logout;