import React, { useState } from 'react'
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [userid, setUserId] = useState("");
    const [pass, setPass] = useState("")
    const [errormsg, setErrorMessage] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        //console.log(userid)
        //console.log(pass)
        //CREATE JSON 
        const emplogininfo = {
            empemail: userid,
            emppass: pass
        }

        axios.post('http://localhost:4500/emp/logincheck', emplogininfo)
            .then(res => {
                console.log(res.data)
                sessionStorage.setItem("usertype", "HR")
                sessionStorage.setItem("username", res.data[0].empname)
                navigate('/afterlogin')
            })
            .catch(err => {
                console.log(err)
                setErrorMessage('INVALID UID OR PASSWORD')
            })
        setUserId("")
        setPass("")
    }

    return (
        <div align="center">
            <Navbar />
            <form onSubmit={handleSubmit}>
                <h3>USER LOGIN</h3>
                <b style={{ color: "red" }}>{errormsg}</b>
                <br />
                <input type="email"
                    value={userid}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder='Enter Email Id' />
                <br /><br />
                <input type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder='Enter Password' />
                <br /><br />
                <input type="submit" value="LOGIN" className='btn btn-success' />
            </form>
        </div>
    );
}

export default Login;