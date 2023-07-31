import React, { useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';

function Book() {
    const [uname, setUname] = useState("");
    const [uemail, setUemail] = useState("");
    const [umobile, setUmobile] = useState("");
    const [udob, setUdob] = useState("");
    const [upass, setUpass] = useState("");
    const [uroom, setUroom] = useState("");
    const [uchkin, setUchkin] = useState("");
    const [uchko, setUchko] = useState("")
    const [ug, setUg] = useState("")
    const [utp, setUtp] = useState("")
    const [msg, setMsg] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(uname + "  " +upass)

        let empobj = {
            "empname": uname,
            "empemail": uemail,
            "empmobile": umobile,
            "empdob": udob,
            "emppass": upass,
            "emproom" : uroom,
            "empchkin": uchkin,
            "empchko": uchko,
            "empg":ug,
            "emptp": utp
        }

        axios.post('http://localhost:4500/emp/register', empobj)
            .then(res => {
                console.log(res.data)
                setMsg('BOOKING SUCCESSFUL')
            });

        setUname("")
        setUemail("")
        setUmobile("")
        setUdob("")
        setUpass("")
        setUroom("")
        setUchko("")
        setUchkin("")
        setUg("")
        setUtp("")
    }
    const calculation =(evt)=>{
        console.log(uroom+" "+uchko+" "+ug)
        let amt = parseInt(uroom)*parseInt(uchko)*parseInt(ug)
        let amt1 =""+amt
        setUtp(amt1)
    }

    return (
        <div align="center">
            <Navbar />

            <h3>USER BOOKING</h3>

            <b style={{ color: 'red' }}>{msg}</b>
            <form onSubmit={handleSubmit}>
                <input type="name" placeholder='Enter Name'
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                />
                <br /><br />
                <input type="email" placeholder='Enter Email Id'
                    value={uemail}
                    onChange={(e) => setUemail(e.target.value)}
                />
                <br /><br />
                <input type="tel" placeholder='Enter Mobile No'
                    value={umobile}
                    onChange={(e) => setUmobile(e.target.value)}
                />
                <br /><br />
                <label>DOB</label>
                <input type="date"
                    value={udob}
                    onChange={(e) => setUdob(e.target.value)}
                />
                <br /><br />
                <input type="password" placeholder='Enter Password'
                    value={upass}
                    onChange={(e) => setUpass(e.target.value)}
                />
                <br /><br />

                <select name="Rooms" id="Rooms" value={uroom}  onChange={(e) => setUroom(e.target.value)}>  
                <option value="10" label="Ocean View 1 Bed"> Ocean View 1 Bed </option>
                <option value="20" label="Ocean View 2 Bed">Ocean View 2 Bed</option>
                <option value="30" label="Ocean Front">Ocean Front</option>
                <option value="40" label="City View">City View </option>
                </select>
                <br /><br />
                <br /><br />
                <label>     Check in   </label>
                <input type="date" min="2022-08-12" value={uchkin} onChange={(e) => setUchkin(e.target.value)}/>
                <label>   Number of Days  </label>
                <input type="number" placeholder="Enter Number Of Days of your stay" value={uchko} onChange={(e) => setUchko(e.target.value)} />
                <br /><br />
                <label>  Total Rooms   </label>
                <input type="number" onBlur={calculation} placeholder="Enter Number Of Rooms" value={ug} onChange={(e) => setUg(e.target.value)} />
                <br /><br /><label>   Total To Pay  </label>
                <input type="number"  value={utp} onChange={(e) => setUtp(e.target.value)}/>
                <br /><br />
                   <input type="button" onClick={calculation} value="Generate Amount" className="btn btn-primary" />
                   <br /><br />
                <input type="submit" value="BOOK" className="btn btn-primary" />
            </form>
        </div>
    );
}

export default Book;