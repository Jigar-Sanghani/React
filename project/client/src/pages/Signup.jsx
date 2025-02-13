import React, { useState } from "react";
import { API } from "../config/api";
import Cookies from "js-cookie";
import './Form.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const nav = useNavigate()

  const [user, setUser] = useState({
    name: "",
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

    console.log(data);

    let res = await API.post("/user/signup", data);
    const { user, token } = res.data;
    console.log(user, token);
    Cookies.set("token", token, { expires: 2 });
    nav("/")
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    createUser(user);
  };
  return (
    <div className="container">
      <h1>----- Sign-Up ----- </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter Your Name"
          onChange={handleInput}
        /> <br /><br />
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
        <input type="submit" value={"signup"} /> <br /><br />
      </form>
    </div>
  );
};

export default Signup;