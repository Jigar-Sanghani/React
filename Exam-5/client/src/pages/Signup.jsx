import axios from 'axios'
import React, { useState } from 'react'
import './Form.css';

const Signup = () => {
    let [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        console.log(name, value);
        
        setData({ ...data, [name]: value })
        console.log(data)
        // setData((pre){ ...data, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data);

        let res = await axios.post("http://localhost:4454/api/v1/user/signup", data);
        setData({ username: "", email: "", password: "" })
    }
    return (

        <div className="form">
            <h1>----- Sign-Up ----- </h1>
            <form onSubmit={handleSubmit}>
                <input type="text"  name='username' placeholder='Enter Your Name' onChange={(e) => handleChange(e)} value={data.username} /> <br /><br />
                <input type="email" name='email' placeholder='Enter Your Email Address' onChange={(e) => handleChange(e)} value={data.email} /> <br /><br />
                <input type="text" name='password' placeholder='Enter Your Password' onChange={(e) => handleChange(e)} value={data.password} /> <br /><br />
                <input type="submit" value={"Sign-Up"} /> <br /><br />
            </form>
        </div>
    )
}

export default Signup