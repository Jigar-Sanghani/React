import React, { useState } from "react";
import { API } from "../config/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import './Form.css';

const Login = () => {

  const nav = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const createUser = async (data) => {
    try {
      let res = await API.post("/user/login", data);
      const { user, token } = res.data;
      console.log(user, token);
      Cookies.set("token", token, { expires: 2 });
      nav("/")
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    createUser(user);
  };
  return (
    <div className="container">
      <h1>----- Log-In ----- </h1>
      <form onSubmit={onSubmit}>

        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter Your Email Address"
          onChange={handleInput}
        /> <br /><br />

        <input
          type="text"
          name="password"
          value={user.password}
          placeholder="Enter Your Password"
          onChange={handleInput}
        /> <br /><br />

        <input type="submit" value={"Login"} /> <br /><br />
      </form>
    </div>
  );
};

export default Login;