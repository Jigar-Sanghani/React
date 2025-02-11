import axios from 'axios'
import React, { useState } from 'react'
import './Form.css';

const Login = () => {
    let [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post("http://localhost:4454/api/v1/user/login", data);
        console.log(res.data);
        setData({ email: "", password: "" })
    }
    return (
        
        <div className="form">
            <h1>----- Log-In ----- </h1>

            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Enter Your Email Address' onChange={handleChange} value={data.email} /> <br /><br />
                <input type="text" name='password' placeholder='Enter Your Password' onChange={handleChange} value={data.password} /> <br /><br />
                <input type="submit" value={"Log-In"} /> <br /><br />
            </form>
        </div>
    )
}

export default Login