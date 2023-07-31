import React, { useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';

function CancelBook() {
    const [empemail, setEmpemail] = useState("");
    const [msg, setMsg] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.delete('http://localhost:4500/emp/removeemp/' + empemail)
            .then(res => {
                console.log(res.data)
                setMsg('BOOKING SUCCESSFULLY CANCELLED')
            })
            .catch(err => {
                console.log(err)
                setMsg('INVALID EMAIL')
            })
        setEmpemail("")
    }


    return (
        <div align="center">
            <Navbar />
            <form onSubmit={handleSubmit}>
                <h3 style={{ color: "red" }}>CANCEL BOOKING</h3>
                <b style={{ color: "red" }}>{msg}</b>
                <br />
                <input type="email"
                    value={empemail}
                    onChange={(e) => setEmpemail(e.target.value)}
                    placeholder='Enter Email Id' />
                <br /><br />

                <input type="submit" value="CANCEL" className='btn btn-danger' />
            </form>
        </div>
    );
}

export default CancelBook;