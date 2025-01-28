import React, { useState } from "react";
import API from "./config/Api";
import './Form.css';

const Form = () => {

    const [course, setCourse] = useState({})


    const handleInput = (e) => {
        const { name, value } = e.target;
        setCourse({
            ...course,
            [name]: value,
        });
    };

    const createCourse = async (course) => {
        let res = await API.post("/users", course);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createCourse(course);
        setCourse({
            name: "",
            age: "",
            email: "",
            password: ""
        });
    };

    return (
        <div className="container">
            <h1>Add a New Course : </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={handleInput}
                    placeholder='Enter User Name :'
                    required
                /><br /><br />

                <input
                    type="number"
                    name="age"
                    onChange={handleInput}
                    placeholder='Enter Age :'
                    required
                /><br /><br />

                <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    placeholder='Enter Email :'
                    required
                /><br /><br />

                <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    placeholder='Enter Password :'
                    required
                /><br /><br />

                <input
                    type="submit"
                    value={"Add"}
                /><br /><br />

            </form>
        </div>
    )
}

export default Form