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
        let res = await axios.post("http://localhost:4454/api/user/signup", data);
        setData({ username: "", email: "", password: "" })
    }
    return (

        <div className="form">
            <h1>----- Sign-Up ----- </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Name' onChange={handleChange} name={data.username} />
                <input type="email" placeholder='Enter Your Email Address' onChange={handleChange} name={data.email} />
                <input type="text" placeholder='Enter Your Password' onChange={handleChange} name={data.password} />
                <input type="submit" value={Sign-Up} />
            </form>
        </div>
    )
}

export default Signup