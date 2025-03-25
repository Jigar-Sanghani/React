import React, { useState } from "react";
import API from './Config/API';
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
        let res = await API.post("/course", course);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createCourse(course);
        setCourse({
            title: "",
            fee: "",
            duration: "",
        });
    };

    return (
        <div className="container">
            <h1>Add a New Course : </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={handleInput}
                    placeholder='Enter Course Name :'
                    required
                /><br /><br />

                <input
                    type="number"
                    name="fee"
                    onChange={handleInput}
                    placeholder='Enter Course Fee :'
                    required
                /><br /><br />

                <input
                    type="number"
                    name="duration"
                    onChange={handleInput}
                    placeholder='Enter Course Duration :'
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