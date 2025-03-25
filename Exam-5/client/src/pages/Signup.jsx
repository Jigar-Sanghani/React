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

        setData({ ...data, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()

        let res = await axios.post("http://localhost:4454/api/v1/user/signup", data);
        setData({ username: "", email: "", password: "" })
    }
    return (

        <div className="form">
            <h1>----- Sign-Up ----- </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='username' placeholder='Enter Your Name' onChange={handleChange} value={data.username} /> <br /><br />
                <input type="email" name='email' placeholder='Enter Your Email Address' onChange={handleChange} value={data.email} /> <br /><br />
                <input type="text" name='password' placeholder='Enter Your Password' onChange={handleChange} value={data.password} /> <br /><br />
                <input type="submit" value={"Sign-Up"} /> <br /><br />
            </form>
        </div>
    )
}

export default Signup