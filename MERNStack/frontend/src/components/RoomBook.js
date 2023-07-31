import React, { useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';

function RoomBook() {
    const [empemail, setEmpemail] = useState("");
    const [msg, setMsg] = useState("")
    const [emplist, setEmpList] = useState([]);
    const [status, setStatus] = useState(false);

    function viewEmpList() {
        return emplist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.empname}</td>
                    <td>{currentrow.empemail}</td>
                    <td>{currentrow.empmobile}</td>
                    <td>{currentrow.empdob}</td>
                    <td>{currentrow.emproom}</td>
                    <td>{currentrow.empchkin}</td>
                    <td>{currentrow.empchko}</td>
                    <td>{currentrow.empg}</td>
                    <td>{currentrow.emptp}</td>
                </tr>
            );
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.get('http://localhost:4500/emp/search/' + empemail)
            .then(res => {
                console.log(res.data)
                setEmpList(res.data)
                setStatus(true)
                setMsg('')
            })
            .catch(err => {
                console.log(err)
                setMsg('INVALID EMAIL ID')
                setStatus(false)
            })
        setEmpemail("")
    }

    if (status === false) {
        return (
            <div align="center">
                <Navbar />
                <form onSubmit={handleSubmit}>
                    <h3 style={{ color: "red" }}>SEARCH BOOKING DETAILS</h3>
                    <b style={{ color: "red" }}>{msg}</b>
                    <br />
                    <input type="email"
                        value={empemail}
                        onChange={(e) => setEmpemail(e.target.value)}
                        placeholder='Enter Email Id' />
                    <br /><br />

                    <input type="submit" value="SEARCH BOOKING" className='btn btn-primary' />
                </form>
            </div>
        )
    }
    else {
        return (
            <div align="center">
                <Navbar />
                <form onSubmit={handleSubmit}>
                    <h3 style={{ color: "red" }}>SEARCH BOOKING DETAILS</h3>
                    <b style={{ color: "red" }}>{msg}</b>
                    <br />
                    <input type="email"
                        value={empemail}
                        onChange={(e) => setEmpemail(e.target.value)}
                        placeholder='Enter Email Id' />
                    <br /><br />

                    <input type="submit" value="SEARCH BOOKING" className='btn btn-primary' />
                </form>
                <br />
                <div align="center">

                    <h3 style={{ color: 'blue' }}>ALL BOOKING DETAILS</h3>

                    <table border="1" align="center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Mobile</th>
                                <th>DOB</th>
                                <th>Per Room Price</th>
                                <th>Check-In Date</th>
                                <th>Days Of Stay</th>
                                <th>Total Guests</th>
                                <th>Total Amount To Pay</th>
                            </tr>
                        </thead>

                        <tbody>
                            {viewEmpList()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default RoomBook;